
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnboarding } from "@/context/OnboardingContext";
import Logo from "./Logo";
import { Eye, EyeOff } from "lucide-react";

const PasswordSetupForm = () => {
  const { setCurrentStep, userProfile } = useOnboarding();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    // In a real app, we would send the password to the server
    // For now, we'll just move to the next step
    setCurrentStep('location');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            <CardTitle className="text-2xl text-foreground">Set Your Password</CardTitle>
            <CardDescription className="text-muted-foreground">
              Create a secure password for your Tidewater Talent Bridge account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground pr-10"
                    required
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 bg-background border border-input rounded-md text-foreground pr-10"
                    required
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/50 rounded-md">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                >
                  Set Password and Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PasswordSetupForm;
