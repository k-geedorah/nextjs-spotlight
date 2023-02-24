import path from 'path';
import { promises as fs } from 'fs';

export const getArticlesFromJson = async () => {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
    const data = JSON.parse(fileContents);
    return data;
}

export const getArticleById = async (id: any) => {
    const articles = await getArticlesFromJson();
    const data = articles.find((article: { id: any; }) => article.id === id);
    return data;
}