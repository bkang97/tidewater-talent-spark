
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import { Check } from "lucide-react";
import Logo from "./Logo";

const CompletionScreen = () => {
  return (
    <div className="min-h-screen bg-charcoal-900 flex flex-col">
      <header className="w-full bg-charcoal-800 p-4">
        <div className="container mx-auto">
          <Logo className="text-2xl" />
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <Card className="max-w-2xl mx-auto bg-charcoal-800 border-0 shadow-lg overflow-hidden">
          <div className="bg-tidewater-500 h-2 w-full"></div>
          
          <CardHeader className="pb-4 text-center">
            <div className="mx-auto bg-tidewater-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-tidewater-500" />
            </div>
            <CardTitle className="text-2xl text-white">
              Thanks for Creating Your Profile!
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-center text-gray-300">
              Career Services will reach out with interested employers soon. In the meantime, you can:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <Card className="bg-charcoal-700 border-0 shadow hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-tidewater-500/20 flex items-center justify-center mb-3 mt-4">
                    <svg 
                      className="w-5 h-5 text-tidewater-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white mb-1">Profile</h3>
                  <p className="text-xs text-gray-400">Edit your information</p>
                </CardContent>
              </Card>
              
              <Card className="bg-charcoal-700 border-0 shadow hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-tidewater-500/20 flex items-center justify-center mb-3 mt-4">
                    <svg 
                      className="w-5 h-5 text-tidewater-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white mb-1">Job Opportunities</h3>
                  <p className="text-xs text-gray-400">Coming soon</p>
                </CardContent>
              </Card>
              
              <Card className="bg-charcoal-700 border-0 shadow hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-tidewater-500/20 flex items-center justify-center mb-3 mt-4">
                    <svg 
                      className="w-5 h-5 text-tidewater-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white mb-1">Account Settings</h3>
                  <p className="text-xs text-gray-400">Manage your account</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-charcoal-700 border-l-4 border-tidewater-500 p-4 mt-6">
              <p className="text-white text-sm">
                Have questions? Contact the Career Services team at:
                <br />
                <a href="mailto:careers@tidewater.edu" className="text-tidewater-400 hover:text-tidewater-300">
                  careers@tidewater.edu
                </a> or call (555) 123-4567
              </p>
            </div>
            
            <Button 
              onClick={() => window.location.reload()}
              className="w-full bg-tidewater-500 hover:bg-tidewater-600 text-white font-medium"
            >
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CompletionScreen;
