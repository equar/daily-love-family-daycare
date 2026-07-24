export type ScheduleBlock = {
  period: "Morning" | "Afternoon" | "Evening";
  activities: string[];
};

export const dailySchedule: ScheduleBlock[] = [
  {
    period: "Morning",
    activities: [
      "Arrival and Welcome",
      "Breakfast",
      "Free Play",
      "Circle Time",
      "Music and Movement",
      "Age-Appropriate Learning Activities",
      "Reading and Story Time"
    ]
  },
  {
    period: "Afternoon",
    activities: [
      "Lunch",
      "Quiet Time or Nap Time",
      "Afternoon Snack",
      "Arts and Crafts",
      "Outdoor Play",
      "Guided Learning Activities",
      "Story Time"
    ]
  },
  {
    period: "Evening",
    activities: ["Free Play", "Parent Pick-Up", "Daily Progress Updates"]
  }
];

export const scheduleDisclaimer =
  "Daily activities and times may change depending on the children’s ages, needs, weather, special activities, and other circumstances.";
