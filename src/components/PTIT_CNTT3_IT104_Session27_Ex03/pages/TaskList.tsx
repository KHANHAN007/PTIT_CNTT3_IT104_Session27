import { NavLink } from 'react-router-dom';

export interface Task {
    id: number;
    title: string;
    description: string;
}
export const tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Mô tả công việc 1' },
    { id: 2, title: 'Task 2', description: 'Mô tả công việc 2' },
    { id: 3, title: 'Task 3', description: 'Mô tả công việc 3' },
];
function TaskList() {
  return (
    <div>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className='mb-2 border p-4 rounded shadow-md'>
            <h3>{task.title}</h3>
                <p>{task.description}</p>
                <NavLink to={`/task/${task.id}`} className="text-blue-500 hover:underline">Xem chi tiết</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
