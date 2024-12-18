import React from 'react';
import { CheckCircle, Clock, Trash } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to TaskMaster
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal task management solution for increased productivity and organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Tasks</h3>
            <p className="text-gray-600">Easily manage and organize your daily tasks in one place</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stay on Schedule</h3>
            <p className="text-gray-600">Never miss a deadline with our intuitive task management</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Trash className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Interface</h3>
            <p className="text-gray-600">Simple and clean interface to keep you focused on your tasks</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Productivity"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Start Managing Your Tasks Today</h2>
              <p className="text-xl mb-6">Simple, effective, and beautiful task management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;