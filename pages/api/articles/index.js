import { getArticlesFromJson } from "../../../helpers/articles";

export default async function handler(req, res) {
    const articles = await getArticlesFromJson();
    return res.status(200).json({ articles });
}