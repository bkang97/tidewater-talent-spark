import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import Logo from "./Logo";

const ProfileForm = () => {
  const { userProfile, updateUserProfile, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("location");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full bg-secondary p-4">
        <div className="container mx-auto">
          <Logo className="text-2xl" />
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <Card className="max-w-2xl mx-auto border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">
              Hi, {userProfile.firstName}! Welcome to Tidewater Talent Bridge
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              As part of your onboarding, please confirm your profile
              information below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={userProfile.firstName}
                    onChange={(e) =>
                      updateUserProfile({ firstName: e.target.value })
                    }
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={userProfile.lastName}
                    onChange={(e) =>
                      updateUserProfile({ lastName: e.target.value })
                    }
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => updateUserProfile({ email: e.target.value })}
                  className="w-full p-3 bg-background border border-input rounded-md text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={userProfile.phone}
                  onChange={(e) => updateUserProfile({ phone: e.target.value })}
                  className="w-full p-3 bg-background border border-input rounded-md text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-foreground"
                >
                  Program
                </label>
                <input
                  id="program"
                  type="text"
                  value={userProfile.program}
                  onChange={(e) =>
                    updateUserProfile({ program: e.target.value })
                  }
                  className="w-full p-3 bg-background border border-input rounded-md text-foreground bg-muted"
                  disabled
                  title="Program cannot be changed. Contact administration for changes."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-foreground"
                  >
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    value={userProfile.startDate}
                    onChange={(e) =>
                      updateUserProfile({ startDate: e.target.value })
                    }
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground bg-muted"
                    disabled
                    title="Start date cannot be changed. Contact administration for changes."
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="graduationDate"
                    className="block text-sm font-medium text-foreground"
                  >
                    Expected Graduation
                  </label>
                  <input
                    id="graduationDate"
                    type="date"
                    value={userProfile.graduationDate}
                    onChange={(e) =>
                      updateUserProfile({ graduationDate: e.target.value })
                    }
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground bg-muted"
                    disabled
                    title="Graduation date cannot be changed. Contact administration for changes."
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
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
