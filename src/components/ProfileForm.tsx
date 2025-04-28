
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import Logo from "./Logo";

const ProfileForm = () => {
  const { userProfile, updateUserProfile, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('location');
  };

  return (
    <div className="min-h-screen bg-charcoal-900 flex flex-col">
      <header className="w-full bg-charcoal-800 p-4">
        <div className="container mx-auto">
          <Logo className="text-2xl" />
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <Card className="max-w-2xl mx-auto bg-charcoal-800 border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-white">
              Hi, {userProfile.firstName}! Welcome to Tidewater Talent Bridge
            </CardTitle>
            <CardDescription className="text-gray-300">
              As part of your onboarding, please confirm your profile information below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={userProfile.firstName}
                    onChange={(e) => updateUserProfile({ firstName: e.target.value })}
                    className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={userProfile.lastName}
                    onChange={(e) => updateUserProfile({ lastName: e.target.value })}
                    className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => updateUserProfile({ email: e.target.value })}
                  className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={userProfile.phone}
                  onChange={(e) => updateUserProfile({ phone: e.target.value })}
                  className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="program" className="block text-sm font-medium text-gray-200">
                  Program
                </label>
                <input
                  id="program"
                  type="text"
                  value={userProfile.program}
                  onChange={(e) => updateUserProfile({ program: e.target.value })}
                  className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                  disabled
                  title="Program cannot be changed. Contact administration for changes."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-200">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    value={userProfile.startDate}
                    onChange={(e) => updateUserProfile({ startDate: e.target.value })}
                    className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                    disabled
                    title="Start date cannot be changed. Contact administration for changes."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-200">
                    Expected Graduation
                  </label>
                  <input
                    id="graduationDate"
                    type="date"
                    value={userProfile.graduationDate}
                    onChange={(e) => updateUserProfile({ graduationDate: e.target.value })}
                    className="w-full p-3 bg-charcoal-700 border border-charcoal-600 rounded-md text-white"
                    disabled
                    title="Graduation date cannot be changed. Contact administration for changes."
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-tidewater-500 hover:bg-tidewater-600 text-white font-medium py-3"
                >
                  Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProfileForm;
