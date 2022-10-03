import {FormEventHandler, useCallback, useState} from "react";
import styles from "./TaskCard.module.css";
import { Audio } from 'react-loader-spinner'

type Props = {
    onTaskAdded: (task: Task) => void
    onTaskLoading: ()=>boolean
};

export const AddTask = (props: Props) => {
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log(props, 'add task props');
    console.log(props, 'props....')
    const onSubmit: FormEventHandler = useCallback(e => {
        e.preventDefault();
        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify({title}),
        }).then(r=>{
          setIsLoading(true);
          props.onTaskLoading(true);
          return r.json()
        })
            .then(props.onTaskAdded)
            .then(() => {
              console.log('set blank title')
              setTitle("")
              // alert('setTitle')
              setTimeout(()=>{
                setIsLoading(false);
                props.onTaskLoading(false);
                }, 3000);
              
            })
            .catch(console.log);
    }, [props.onTaskAdded, title]);
    
    return (<div>
      {isLoading
        ? <>{"Loading....."}</>
        : <form onSubmit={onSubmit}>
            <div className={styles.taskCard}>
                <div className={styles.title}>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.add}>
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
      }
    </div>
  );
}

export default AddTask;