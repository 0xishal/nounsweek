import type { LearningModule } from "@/data/modules";
import type { EventType } from "@/data/events";

export const moduleBg: Record<LearningModule["color"], string> = {
  noggle: "bg-noggle text-paper",
  sun: "bg-sun text-ink",
  sky: "bg-sky text-paper",
  leaf: "bg-leaf text-ink",
  grape: "bg-grape text-paper",
};

export const eventColor: Record<EventType, string> = {
  Workshop: "bg-sun",
  Meetup: "bg-sky",
  Kampus: "bg-leaf",
  Hackathon: "bg-grape",
  Festival: "bg-noggle",
};
