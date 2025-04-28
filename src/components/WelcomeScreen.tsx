import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/OnboardingContext";
import SuccessStory from "./SuccessStory";
import { Check } from "lucide-react";

const WelcomeScreen = () => {
  const { setCurrentStep, userProfile } = useOnboarding();

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left Column */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Welcome to{" "}
            <span className="text-primary">Tidewater Talent Bridge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Hello {userProfile.firstName}, we've already set up part of your
            account as part of Tidewater's April 2025 cohort. We just need to
            ask a few more things to get you started.
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">
                Access to 100+ employers and job opportunities
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">
                Potential tuition coverage through employer partnerships
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="text-primary h-5 w-5" />
              </div>
              <p className="text-foreground">
                Early career connections while you're still studying
              </p>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Student Success Stories
            </h2>
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
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              How it works
            </h2>
            <p className="text-muted-foreground mb-2">
              We've partnered with employers to help you find job opportunities
              that fit your skills and career goals.
            </p>
            <p className="text-muted-foreground">
              As part of this program, you'll have access to a network of
              employers who want to hire you and potentially cover your tuition.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Next Steps
            </h2>
            <p className="text-muted-foreground mb-4">
              As part of onboarding, please complete your profile to connect
              with employers looking for talented students like you.
            </p>

            <Button
              onClick={() => setCurrentStep("password")}
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
