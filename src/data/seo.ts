import { siteConfig } from "./siteConfig";

export type SeoData = {
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
};

export const baseSeo = {
  siteName: siteConfig.businessName,
  locale: "en_US"
};

export const pageSeo: Record<string, SeoData> = {
  home: {
    title: "Daily Love Family Daycare | Licensed Childcare in Montgomery County, MD",
    description:
      "Daily Love Family Daycare provides a safe, loving, and educational family childcare environment for infants, toddlers, and preschool children in Montgomery County, Maryland.",
    path: "/",
    ogTitle: "Daily Love Family Daycare | Licensed Childcare in Montgomery County, MD",
    ogDescription:
      "Safe, loving, educational family childcare for infants, toddlers, and preschoolers in Montgomery County, Maryland."
  },
  about: {
    title: "About | Daily Love Family Daycare",
    description:
      "Learn about Daily Love Family Daycare’s mission, vision, and values for nurturing children in Montgomery County, Maryland.",
    path: "/about",
    ogTitle: "About Daily Love Family Daycare",
    ogDescription: "Meet our mission-driven family daycare focused on safety, learning, and partnership with parents."
  },
  programs: {
    title: "Programs | Daily Love Family Daycare",
    description:
      "Explore infant, toddler, and preschool childcare programs at Daily Love Family Daycare in Montgomery County, Maryland.",
    path: "/programs",
    ogTitle: "Childcare Programs at Daily Love Family Daycare",
    ogDescription: "Age-appropriate, play-based care and learning for infants, toddlers, and preschool children."
  },
  schedule: {
    title: "Daily Schedule | Daily Love Family Daycare",
    description:
      "View a sample daily daycare schedule including learning activities, meals, rest, and supervised play.",
    path: "/daily-schedule",
    ogTitle: "Daily Daycare Schedule",
    ogDescription: "A balanced daily rhythm of play, learning, meals, rest, and family communication."
  },
  safety: {
    title: "Health & Safety | Daily Love Family Daycare",
    description:
      "Read about health and safety practices at Daily Love Family Daycare, including supervision, sanitizing, and family communication.",
    path: "/health-safety",
    ogTitle: "Health and Safety at Daily Love Family Daycare",
    ogDescription: "Safety-first childcare practices designed to support children and provide peace of mind for families."
  },
  enrollment: {
    title: "Enrollment | Daily Love Family Daycare",
    description:
      "Request enrollment information and learn about the daycare inquiry process, availability, and required documentation.",
    path: "/enrollment",
    ogTitle: "Enrollment Information",
    ogDescription: "Start your enrollment inquiry and schedule a tour at Daily Love Family Daycare."
  },
  contact: {
    title: "Contact | Daily Love Family Daycare",
    description:
      "Contact Daily Love Family Daycare in Montgomery County, Maryland to ask questions, schedule a tour, or submit an inquiry.",
    path: "/contact",
    ogTitle: "Contact Daily Love Family Daycare",
    ogDescription: "Reach out to discuss care options, scheduling, and enrollment inquiries."
  },
  privacy: {
    title: "Privacy Policy | Daily Love Family Daycare",
    description:
      "Review the website privacy policy for Daily Love Family Daycare, including contact form data handling and parent rights.",
    path: "/privacy-policy",
    ogTitle: "Privacy Policy",
    ogDescription: "How this website collects, uses, and protects inquiry information."
  }
};
