
import { useOnboarding } from "@/context/OnboardingContext";
import CompletionScreen from "./CompletionScreen";
import LocationForm from "./LocationForm";
import PasswordSetupForm from "./PasswordSetupForm";
import ProfileForm from "./ProfileForm";
import ProgressScreen from "./ProgressScreen";
import WelcomeScreen from "./WelcomeScreen";

const OnboardingFlow = () => {
  const { currentStep } = useOnboarding();

  // Render different screens based on current step
  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'password':
        return <PasswordSetupForm />;
      case 'profile':
        return <ProfileForm />;
      case 'location':
        return <LocationForm />;
      case 'progress':
        return <ProgressScreen />;
      case 'complete':
        return <CompletionScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return <>{renderStep()}</>;
};

export default OnboardingFlow;
