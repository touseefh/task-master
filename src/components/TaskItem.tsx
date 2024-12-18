import React from 'react';
import { Trash2, Check, X } from 'lucide-react';

interface TaskItemProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`p-2 rounded-full transition-colors ${
            task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {task.completed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </button>
        <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default TaskItem;