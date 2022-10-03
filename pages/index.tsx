import type {NextPage} from 'next'
import TaskList from "../components/TaskList";

import styles from '../styles/styles.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.app}>
            <header>
                <h1>Serenade todo list</h1>
            </header>
            <main>
                <TaskList/>
            </main>
        </div>
    );
}

export default Home;
