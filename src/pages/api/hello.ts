import axios from "axios";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, thumbnail } = req.query;
  const { data } = await axios({
    url,
    method: "GET",
    responseType: "blob",
    headers: {
      "Accept-Encoding": "deflate, br",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  res.status(200).json({ blob: data, thumbnail });
  // res.status(200).json({ name: "John Doe" });
}
