
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import { Check, User, Briefcase, MessageSquare, Settings } from "lucide-react";
import Logo from "./Logo";
import AppSidebar from "./AppSidebar";
import MobileSidebar from "./MobileSidebar";

const CompletionScreen = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="w-full bg-secondary p-4 flex items-center">
          <MobileSidebar />
          <div className="container mx-auto flex justify-center md:justify-start">
            <Logo className="text-2xl" />
          </div>
        </header>

        <main className="flex-1 container mx-auto py-8 px-4">
          <Card className="max-w-2xl mx-auto border shadow-sm">
            <div className="bg-primary h-2 w-full"></div>
            
            <CardHeader className="pb-4 text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                Thanks for Creating Your Profile!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground">
                Career Services will reach out with interested employers soon. In the meantime, you can:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <Card className="border shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 mt-4">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">Profile</h3>
                    <p className="text-xs text-muted-foreground">Edit your information</p>
                  </CardContent>
                </Card>
                
                <Card className="border shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 mt-4">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">Job Opportunities</h3>
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </CardContent>
                </Card>
                
                <Card className="border shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 mt-4">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">Account Settings</h3>
                    <p className="text-xs text-muted-foreground">Manage your account</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-secondary border-l-4 border-primary p-4 mt-6">
                <p className="text-foreground text-sm">
                  Have questions? Contact the Career Services team at:
                  <br />
                  <a href="mailto:careers@tidewater.edu" className="text-primary hover:text-primary/80">
                    careers@tidewater.edu
                  </a> or call (555) 123-4567
                </p>
              </div>
              
              <Button 
                onClick={() => window.location.reload()}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Back to Dashboard
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CompletionScreen;
