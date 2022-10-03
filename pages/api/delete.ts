// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {deleteTask} from "../../src/database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const {taskId} = JSON.parse(req.body);
        await deleteTask(taskId);
        res.status(204).end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}
