import path from 'path';
import { promises as fs } from 'fs';

export const getArticlesFromJson = async () => {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
    const data = JSON.parse(fileContents);
    return data;
}

export const getArticleById = async (id) => {
    const articles = await getArticlesFromJson();
    const data = articles.find(article => article.id === id);
    return data;
}