// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {fetchTasks} from "../../src/database";

interface Data {
    items: Task[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const tasks = await fetchTasks();
        res.status(200).json({items: tasks});
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}
