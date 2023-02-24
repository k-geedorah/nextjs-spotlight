import { getArticlesFromJson } from "../../../helpers/articles";

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { articles: any; }): any; new(): any; }; }; }) {
    const articles = await getArticlesFromJson();
    return res.status(200).json({ articles });
}