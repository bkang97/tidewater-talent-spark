
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  Award
} from "lucide-react";

const HowItWorksInfographic = () => {
  return (
    <div className="flex flex-col space-y-3 animate-fade-in">
      {/* Step 1 */}
      <Card className="border-0 shadow-sm bg-white/80 hover:bg-white transition-colors hover:shadow-md">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-tidewater-400/10 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-tidewater-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">1. Complete Profile</h3>
            <p className="text-sm text-muted-foreground">
              Fill in your skills, interests, and career goals
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-center">
        <div className="h-5 w-px bg-tidewater-300/50"></div>
      </div>

      {/* Step 2 */}
      <Card className="border-0 shadow-sm bg-white/80 hover:bg-white transition-colors hover:shadow-md">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-tidewater-400/10 p-3 rounded-full">
            <Users className="h-6 w-6 text-tidewater-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">2. Get Matched</h3>
            <p className="text-sm text-muted-foreground">
              Our system matches you with compatible employers
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        <div className="h-5 w-px bg-tidewater-300/50"></div>
      </div>

      {/* Step 3 */}
      <Card className="border-0 shadow-sm bg-white/80 hover:bg-white transition-colors hover:shadow-md">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-tidewater-400/10 p-3 rounded-full">
            <Briefcase className="h-6 w-6 text-tidewater-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">3. Connect</h3>
            <p className="text-sm text-muted-foreground">
              Interview with employers while still in school
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        <div className="h-5 w-px bg-tidewater-300/50"></div>
      </div>

      {/* Step 4 */}
      <Card className="border-0 shadow-sm bg-white/80 hover:bg-white transition-colors hover:shadow-md">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-tidewater-400/10 p-3 rounded-full">
            <Award className="h-6 w-6 text-tidewater-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">4. Get Hired</h3>
            <p className="text-sm text-muted-foreground">
              Secure job offers with potential tuition coverage
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowItWorksInfographic;
