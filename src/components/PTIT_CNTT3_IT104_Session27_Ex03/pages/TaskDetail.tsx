import { NavLink, useParams } from 'react-router-dom';
import type { Task } from './TaskList';

type Props = {
    tasks: Task[];
}
function TaskDetail({ tasks }: Props) {
    const params = useParams();
    const taskId = params.id ? parseInt(params.id) : null;
    const task = tasks.find(t => t.id === taskId);
    return (
        <div>
            {task ? (
                <>
                    <h2>{task.title}</h2>
                    <p className='mb-4'>{task.description}</p>
                    <NavLink to='/' className="text-white hover:bg-blue-700 p-2 bg-blue-500">Quay lại</NavLink>
                </>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    )
}

export default TaskDetail
