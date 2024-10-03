'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { FaBook, FaChartLine, FaAward } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

interface Course {
  id: string;
  title: string;
  progress: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/');
      } else {
        // Fetch user's courses here
        // This is a mock implementation
        setCourses([
          { id: '1', title: 'Introduction to AI', progress: 30 },
          { id: '2', title: 'Machine Learning Basics', progress: 60 },
          { id: '3', title: 'Neural Networks', progress: 10 },
        ]);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      console.error("Logout error:", error);
      toast.error('Error logging out');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">
        Welcome to Your Learning Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <FaBook className="text-4xl mb-4 text-blue-400" />
          <h2 className="text-xl font-semibold mb-2">Courses Enrolled</h2>
          <p className="text-3xl font-bold">{courses.length}</p>
        </div>
        <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <FaChartLine className="text-4xl mb-4 text-blue-400" />
          <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
          <p className="text-3xl font-bold">
            {Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length)}%
          </p>
        </div>
        <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <FaAward className="text-4xl mb-4 text-blue-400" />
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>
      <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center justify-between">
              <span>{course.title}</span>
              <div className="w-1/2 bg-blue-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-400 h-2.5 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span>{course.progress}%</span>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleLogout} className="mt-8 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">Logout</Button>
    </div>
  );
}                                           