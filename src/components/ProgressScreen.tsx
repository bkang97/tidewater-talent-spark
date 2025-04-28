
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import Logo from "./Logo";
import ProgressIndicator from "./ProgressIndicator";

const ProgressScreen = () => {
  const { profileCompletionPercentage, setCurrentStep } = useOnboarding();

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
          
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-white">Your Profile is Started!</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <ProgressIndicator percentage={profileCompletionPercentage} />
            
            <div className="bg-charcoal-700 p-4 rounded-lg">
              <p className="text-white mb-4">
                Your profile is {profileCompletionPercentage}% complete. Employers are more likely to reach 
                out if you complete more of your profile, including:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
                <li>Upload your resume</li>
                <li>Add your work history</li>
                <li>List your skills</li>
                <li>Share your educational background</li>
              </ul>
              
              <p className="text-tidewater-300 text-sm">
                Students with complete profiles are <strong>3x more likely</strong> to be contacted by employers!
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3">
              <Button 
                onClick={() => setCurrentStep('complete')}
                className="flex-1 bg-tidewater-500 hover:bg-tidewater-600 text-white font-medium"
              >
                Complete My Full Profile
              </Button>
              
              <Button 
                onClick={() => setCurrentStep('complete')}
                variant="outline" 
                className="flex-1 border-gray-500 text-gray-300 hover:bg-charcoal-700"
              >
                I'll Complete It Later
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProgressScreen;
