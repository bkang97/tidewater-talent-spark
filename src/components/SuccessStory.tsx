import { Card, CardContent } from "@/components/ui/card";

interface SuccessStoryProps {
  name: string;
  company: string;
  tuitionCovered?: boolean;
  timeBeforeGraduation?: string;
  photoUrl?: string;
}

const SuccessStory = ({
  name,
  company,
  tuitionCovered = true,
  timeBeforeGraduation = "3 months",
  photoUrl = "/placeholder.svg",
}: SuccessStoryProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-charcoal-200 text-black">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-tidewater-500 flex-shrink-0">
            <img
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-black mb-1">
              {name} <span className="text-tidewater-500">→</span> {company}
            </h3>
            <p className="text-sm text-gray-600">
              {tuitionCovered
                ? "Tuition fully covered"
                : "Partial tuition covered"}
            </p>
            <p className="text-sm text-tidewater-400 mt-1">
              Job secured {timeBeforeGraduation} before graduation
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStory;
