import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'pages');
    //Read the json data file data.json
    const returnedData = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(returnedData);
    //Return the content of the data file in json format
    res.status(200).json(data);
}