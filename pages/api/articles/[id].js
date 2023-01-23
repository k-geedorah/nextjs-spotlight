import { getArticleById } from "../../../helpers/articles";

export default async function handler(req, res) {
    const { id } = req.query;
    const article = await getArticleById(id);
    return res.status(200).json(article);
}