
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useOnboarding } from "@/context/OnboardingContext";
import Logo from "./Logo";

const LocationForm = () => {
  const { userProfile, updateUserProfile, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('progress');
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
            <CardTitle className="text-2xl text-foreground">Location Preferences</CardTitle>
            <CardDescription className="text-muted-foreground">
              Let employers know about your location preferences for potential opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-foreground">
                  Current Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={userProfile.location}
                  onChange={(e) => updateUserProfile({ location: e.target.value })}
                  className="w-full p-3 bg-background border border-input rounded-md text-foreground"
                  required
                  placeholder="City, State"
                />
              </div>

              <div className="flex items-center justify-between py-2 border-t border-border">
                <div className="space-y-0.5">
                  <label htmlFor="relocate" className="text-sm font-medium text-foreground">
                    Willing to Relocate
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Are you open to opportunities that require relocation?
                  </p>
                </div>
                <Switch
                  id="relocate"
                  checked={userProfile.willingToRelocate}
                  onCheckedChange={(checked) => updateUserProfile({ willingToRelocate: checked })}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                >
                  Save and Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LocationForm;
