import type { NextApiRequest, NextApiResponse } from "next";
import { getArticleById } from "../../../helpers/articles";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const article = await getArticleById(id);
    return res.status(200).json(article);
}