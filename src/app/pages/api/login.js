import { account } from '../../lib/appwrite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await account.createOAuth2Session('google', `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`, `${process.env.NEXT_PUBLIC_APP_URL}/login`);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}