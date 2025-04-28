
import React from 'react';
import { User, Briefcase, MessageSquare, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-background border-r border-border">
          <div className="p-5">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <User className="text-primary h-6 w-6" />
              </div>
              <h2 className="font-semibold text-foreground text-lg">Student Dashboard</h2>
              <p className="text-muted-foreground text-sm">Tidewater Talent Bridge</p>
            </div>

            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-foreground rounded-md bg-accent"
              >
                <User className="h-5 w-5 mr-3 text-primary" />
                <span>Profile</span>
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-foreground rounded-md"
              >
                <Briefcase className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Job Matches</span>
                <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Soon</span>
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-foreground rounded-md"
              >
                <MessageSquare className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Messages</span>
                <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Soon</span>
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-3 mt-6 text-muted-foreground hover:bg-accent hover:text-foreground rounded-md"
              >
                <Settings className="h-5 w-5 mr-3 text-muted-foreground" />
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
