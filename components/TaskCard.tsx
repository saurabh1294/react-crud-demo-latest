import styles from './TaskCard.module.css';
import {FormEventHandler, useCallback, useState} from "react";


const TaskCard = (props: { task: Task, taskLoading: boolean,
onTaskDeleted: ()=>void }) => {
    const [task, setTask] = useState(props.task);

    const onDoneToggled = useCallback(() => {
        fetch('/api/done', {
            method: 'PUT',
            body: JSON.stringify({
                taskId: task.id,
                done: !task.done,
            }),
        })
            .then(r => r.json())
            .then(setTask)
            .catch(console.log);
    }, [task.done, task.id]);
    
    function deleteTask(e) {
      if (props.taskLoading) {
        e.preventDefault();
        console.log('preventing deletion when add in progress...');
        return;
      }
      console.log('calling api to delte task', task);
       fetch('/api/delete', {
            method: 'POST',
            body: JSON.stringify({
                taskId: task.id
            }),
        }).then(r=>{
          console.log(r, 'delete');
        });
        props.onTaskDeleted(task);
    }
    
    return (
        <div className={styles.taskCard}>
            <div className={styles.title}>{task.title}</div>
            <div className={styles.done}>
                <input
                    type={"checkbox"}
                    disabled={props.taskLoading}
                    checked={task.done}
                    onChange={onDoneToggled}
                />
                <a href="#" onClick={(e)=>deleteTask(e)}>Delete </a>
            </div>
        </div>
    );
};


export default TaskCard;