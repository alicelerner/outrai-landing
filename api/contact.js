// POST /api/contact — creates a row in the Notion "Interessados outrai*" database.
// Required env vars (set in Vercel dashboard):
//   NOTION_TOKEN        — internal integration secret (starts with "ntn_" or "secret_")
//   NOTION_DATABASE_ID  — id of the target database (with or without dashes)

const NOTION_API = 'https://api.notion.com/v1/pages';
const NOTION_VERSION = '2022-06-28';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 200;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    return res.status(500).json({ error: 'server_misconfigured' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'invalid_body' });
  }

  const nome = clean(body.nome);
  const empresa = clean(body.empresa);
  const email = clean(body.email);

  if (!nome || !email) return res.status(400).json({ error: 'missing_fields' });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'invalid_email' });

  const properties = {
    Name: { title: [{ text: { content: nome } }] },
    Email: { email },
    Date: { date: { start: new Date().toISOString().slice(0, 10) } },
  };
  if (empresa) {
    properties.Empresa = { rich_text: [{ text: { content: empresa } }] };
  }

  try {
    const r = await fetch(NOTION_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('notion_error', r.status, detail);
      return res.status(502).json({ error: 'notion_failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact_error', err);
    return res.status(500).json({ error: 'server_error' });
  }
}

function clean(v) {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, MAX_LEN);
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}
