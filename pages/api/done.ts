// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {fetchTasks, setTaskDone} from "../../src/database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const {taskId, done} = JSON.parse(req.body);
        const task = await setTaskDone(taskId, done);
        res.status(200).json(task);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}
