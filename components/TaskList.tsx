import {useEffect, useState} from "react";
import TaskCard from "./TaskCard";
import {PaginatedList} from "react-paginated-list";

import styles from './TaskList.module.css';
import AddTask from "./AddTask";

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isTaskLoading, setIsTaskLoading] = useState(false);
    
    const [isTaskDeleted, setIsTaskDeleted] = useState(false);
    
    function setTaskLoading(taskLoading) {
      // console.log(taskLa, 'data')
      setIsTaskLoading(taskLoading);
    }
    
    function setTaskDeleted(taskDeleted) {
      console.log(taskDeleted, 'taskDeleted');
      console.log('filter task', tasks.filter(item=>item.id === taskDeleted.id));
      setTasks(tasks.filter(item=>item.id !== taskDeleted.id));
    }

    useEffect(() => {
        fetch('/api/tasks')
            .then(r=>r.json())
            .then(r=>{
              console.log(r)
              setTasks(r?.items)})
            .catch(console.log('catch in TaskList'));
    }, []);
    
    /* Note:- TEST is completed (3 tasks done).. there is scope to improve and refactor 
    but not doing it as I don't want to invest a lot of time. Sharing of data between components
    could have also been done using createContext and useContext */

    return (
        <div className={styles.taskList}>
          <PaginatedList
            list={tasks}
            itemsPerPage={3}
            renderList={(tasks) => (
              <>
                {tasks?.map(task => <TaskCard onTaskDeleted={setTaskDeleted} taskLoading={isTaskLoading} key={task.id} task={task}/>)}
              </>
            )}
          />
                  <AddTask onTaskLoading={setTaskLoading} onTaskAdded={task => setTasks(prev => [...prev, task])}/>
        </div>
    )
}

export default TaskList;