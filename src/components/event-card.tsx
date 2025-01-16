import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  type: "WIZ HOSTED EVENT" | "LIVE WEBINAR" | "SPONSORED BY WIZ";
  title: string;
  location: string;
  date: string;
  time: string;
  link: string;
  imageUrl?: string;
}

export default function EventCard({
  type,
  title,
  location,
  date,
  time,
  imageUrl,
  link,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="h-48 bg-blue-600 relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-blue-600 font-medium text-sm mb-4">{type}</div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>{`${date}, ${time}`}</span>
          </div>
        </div>
        <Link
          href={link}
          className={buttonVariants({
            variant: "outline",
            className: "text-blue-600 border-blue-600 hover:bg-blue-50",
          })}
        >
          Register
          <span className="ml-2">→</span>
        </Link>
      </CardContent>
    </Card>
  );
}
