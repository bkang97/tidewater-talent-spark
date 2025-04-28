
import React from 'react';
import { User, Briefcase, MessageSquare, Settings } from 'lucide-react';

const AppSidebar = () => {
  return (
    <div className="h-screen w-64 bg-charcoal-800 border-r border-charcoal-700 flex-shrink-0 hidden md:block">
      <div className="p-5">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-tidewater-500/20 flex items-center justify-center mb-3">
            <User className="text-tidewater-500 h-6 w-6" />
          </div>
          <h2 className="font-semibold text-white text-lg">Student Dashboard</h2>
          <p className="text-gray-400 text-sm">Tidewater Talent Bridge</p>
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-white rounded-md bg-charcoal-700"
          >
            <User className="h-5 w-5 mr-3 text-tidewater-400" />
            <span>Profile</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-charcoal-700 hover:text-white rounded-md"
          >
            <Briefcase className="h-5 w-5 mr-3 text-gray-400" />
            <span>Job Matches</span>
            <span className="ml-auto bg-tidewater-500/20 text-tidewater-400 text-xs px-2 py-1 rounded-full">Soon</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-charcoal-700 hover:text-white rounded-md"
          >
            <MessageSquare className="h-5 w-5 mr-3 text-gray-400" />
            <span>Messages</span>
            <span className="ml-auto bg-tidewater-500/20 text-tidewater-400 text-xs px-2 py-1 rounded-full">Soon</span>
          </a>
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-5">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-300 hover:bg-charcoal-700 hover:text-white rounded-md"
        >
          <Settings className="h-5 w-5 mr-3 text-gray-400" />
          <span>Account Settings</span>
        </a>
      </div>
    </div>
  );
};

export default AppSidebar;
