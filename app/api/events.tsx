import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate fetching data from an external API (replace with your actual API call)
  const events = await fetch('https://api.example.com/products')
    .then((response) => response.json());

  res.status(200).json(events);
}
