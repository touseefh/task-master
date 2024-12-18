import React from 'react';
import { CheckCircle, Clock, Trash } from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Track Tasks",
      description: "Easily manage and organize your daily tasks in one place",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Stay on Schedule",
      description: "Never miss a deadline with our intuitive task management",
      color: "blue"
    },
    {
      icon: Trash,
      title: "Clean Interface",
      description: "Simple and clean interface to keep you focused on your tasks",
      color: "red"
    }
  ];

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
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
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