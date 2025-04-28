
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/OnboardingContext";
import SuccessStory from "./SuccessStory";
import { Check } from "lucide-react";

const WelcomeScreen = () => {
  const { setCurrentStep, userProfile } = useOnboarding();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left Column */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Welcome to <span className="text-primary">Tidewater Talent Bridge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Hello {userProfile.firstName}, we've already set up part of your account as part of 
            Tidewater's April 2025 cohort. We just need to ask a few more things to get you started.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">Access to 100+ employers and job opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">Potential tuition coverage through employer partnerships</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">Early career connections while you're still studying</p>
            </div>
          </div>
          
          <div className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Student Success Stories</h2>
            <SuccessStory 
              name="John Doe"
              company="ABC Technologies" 
              tuitionCovered={true}
              timeBeforeGraduation="3 months"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-secondary p-6 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Your Account Information</h2>
            <div className="space-y-3">
              <div className="bg-background p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="text-foreground">{userProfile.firstName} {userProfile.lastName}</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Program</p>
                <p className="text-foreground">{userProfile.program}</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Expected Graduation</p>
                <p className="text-foreground">{new Date(userProfile.graduationDate).toLocaleDateString()}</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Contact</p>
                <p className="text-foreground">{userProfile.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Next Steps</h2>
            <p className="text-muted-foreground mb-4">
              As part of your career services at Tidewater, you need to complete your profile 
              to connect with employers looking for talented students like you.
            </p>
            <div className="bg-background border-l-4 border-primary p-4 mb-6">
              <p className="text-foreground italic">
                "Completing your profile will take less than 5 minutes and can lead to early career 
                opportunities and potential tuition support."
              </p>
              <p className="text-primary mt-2 font-medium">Dr. Patricia Wilson, Career Services</p>
            </div>
            
            <Button 
              onClick={() => setCurrentStep('password')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
            >
              Complete Your Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
