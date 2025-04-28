
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/OnboardingContext";
import SuccessStory from "./SuccessStory";
import { Check } from "lucide-react";

const WelcomeScreen = () => {
  const { setCurrentStep, userProfile } = useOnboarding();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 grid md:grid-cols-2 bg-charcoal-900">
        {/* Left Column */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Welcome to the <span className="text-tidewater-500">Tidewater Talent Bridge</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Tidewater has partnered with employers to connect you as early as possible with job opportunities. 
            Our goal is for you to graduate with a job lined up, with the potential to have your 
            tuition covered.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-tidewater-500/20 p-1 rounded-full">
                <Check className="text-tidewater-500 h-5 w-5" />
              </div>
              <p className="text-gray-200">Access to 100+ employers and job opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-tidewater-500/20 p-1 rounded-full">
                <Check className="text-tidewater-500 h-5 w-5" />
              </div>
              <p className="text-gray-200">Potential tuition coverage through employer partnerships</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-tidewater-500/20 p-1 rounded-full">
                <Check className="text-tidewater-500 h-5 w-5" />
              </div>
              <p className="text-gray-200">Early career connections while you're still studying</p>
            </div>
          </div>
          
          <div className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold text-white">Student Success Stories</h2>
            <SuccessStory 
              name="John Doe"
              company="ABC Technologies" 
              tuitionCovered={true}
              timeBeforeGraduation="3 months"
            />
          </div>

          <Button 
            onClick={() => setCurrentStep('profile')}
            size="lg"
            className="bg-tidewater-500 hover:bg-tidewater-600 text-white"
          >
            Complete Your Profile
          </Button>
        </div>

        {/* Right Column */}
        <div className="bg-charcoal-800 p-6 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">What We Know About You</h2>
            <div className="space-y-3">
              <div className="bg-charcoal-700 p-4 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Full Name</p>
                <p className="text-white">{userProfile.firstName} {userProfile.lastName}</p>
              </div>
              <div className="bg-charcoal-700 p-4 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Program</p>
                <p className="text-white">{userProfile.program}</p>
              </div>
              <div className="bg-charcoal-700 p-4 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Expected Graduation</p>
                <p className="text-white">{new Date(userProfile.graduationDate).toLocaleDateString()}</p>
              </div>
              <div className="bg-charcoal-700 p-4 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Contact</p>
                <p className="text-white">{userProfile.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Next Steps</h2>
            <p className="text-gray-300 mb-4">
              As part of your career services at Tidewater, you need to complete your profile 
              to connect with employers looking for talented students like you.
            </p>
            <div className="bg-charcoal-700 border-l-4 border-tidewater-500 p-4">
              <p className="text-white italic">
                "Completing your profile will take less than 5 minutes and can lead to early career 
                opportunities and potential tuition support."
              </p>
              <p className="text-tidewater-500 mt-2 font-medium">Dr. Patricia Wilson, Career Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
