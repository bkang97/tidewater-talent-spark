
import React, { useState } from 'react';
import { User, Briefcase, MessageSquare, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-charcoal-800 border-r border-charcoal-700">
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

              <a
                href="#"
                className="flex items-center px-4 py-3 mt-6 text-gray-300 hover:bg-charcoal-700 hover:text-white rounded-md"
              >
                <Settings className="h-5 w-5 mr-3 text-gray-400" />
                <span>Account Settings</span>
              </a>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
