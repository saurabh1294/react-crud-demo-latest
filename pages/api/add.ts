// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {addTask} from "../../src/database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const {title} = JSON.parse(req.body);
        const task = await addTask(title);
        res.status(200).json(task);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}
