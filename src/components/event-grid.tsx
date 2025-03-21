import EventCard from "./event-card";

export type Tag = {
  id: string;
  created_at: string;
  tag_group_id: string;
  label: string;
};

export type Event = {
  // Basic info
  id: string;
  title: string;
  // description_slack_blocks: string[];
  slug: string;
  status: string;
  cover_image_url: string;

  // Dates
  created_at: string;
  start_date: string;
  end_date: string;
  show_end_date: boolean;

  // Location & Link
  location: string;
  link: string;
  recording_link?: string;

  // Registration
  enable_registration_button: boolean;
  use_registration_btn_as_link: boolean;

  // Visibility
  is_unlisted: boolean;
  publish_to_site: boolean;
  allow_public_guest_list: boolean;

  // Slack integration
  publish_to_slack_channels: string[];
  recap_slack_blocks?: string[];

  // External integrations
  luma_event_id?: string;
  triggers_webhooks: boolean;
  webhook_custom_metadata?: string;
  external_speakers?: string;

  // People
  hosts: string[];
  speakers: string[];

  tags: Tag[];
};

export default function EventGrid({ events }: { events: Event[] }) {
  if (!events || events.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-lg text-gray-600">No events found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            date={new Date(event.start_date).toLocaleDateString()}
            time={new Date(event.start_date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            imageUrl={event.cover_image_url}
            link={event.link}
            tags={event.tags.map((tag) => tag.label)}
          />
        ))}
      </div>
    </div>
  );
}
