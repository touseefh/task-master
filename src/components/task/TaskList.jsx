import React from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import useLocalStorage from '../../hooks/useLocalStorage';

const TaskList = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <TaskForm onAddTask={addTask} />
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;