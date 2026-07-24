export type Program = {
  name: "Infants" | "Toddlers" | "Preschool";
  description: string;
};

export const programs: Program[] = [
  {
    name: "Infants",
    description:
      "Infant care may be available depending on current enrollment and licensing capacity. Please contact us to ask about availability."
  },
  {
    name: "Toddlers",
    description:
      "Our toddler program encourages language development, movement, social interaction, independence, creativity, and early learning through structured play."
  },
  {
    name: "Preschool",
    description:
      "Our preschool program helps children strengthen early literacy, basic math, communication, problem-solving, social skills, emotional development, and kindergarten readiness."
  }
];
