export type SiteConfig = {
  businessName: string;
  tagline: string;
  county: string;
  city: string;
  state: string;
  zip: string;
  streetAddress: string;
  phone: string;
  email: string;
  businessHours: string;
  tourHours: string;
  canonicalUrl: string;
  mapsUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    x: string;
  };
  enrollmentStatus: string;
  infantAvailability: string;
  toddlerAvailability: string;
  preschoolAvailability: string;
  licenseNumber: string;
  licensingAuthority: string;
  licensingStatement: string;
  licensingPlaceholderNotice: string;
  formProvider: "formspree" | "web3forms" | "none";
  formEndpoint: string;
  emergencyContactPolicy: string;
  seo: {
    defaultOgImage: string;
    twitterCard: "summary" | "summary_large_image";
  };
};

export const siteConfig: SiteConfig = {
  businessName: "Daily Love Family Daycare",
  tagline: "A loving place to learn, grow, and feel at home.",
  county: "Montgomery County",
  city: "[CITY]",
  state: "Maryland",
  zip: "[ZIP CODE]",
  streetAddress: "[STREET ADDRESS]",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  businessHours: "[BUSINESS HOURS]",
  tourHours: "[TOUR HOURS]",
  canonicalUrl: "https://example.com",
  mapsUrl: "[GOOGLE MAPS LINK]",
  socialLinks: {
    facebook: "[FACEBOOK URL]",
    instagram: "[INSTAGRAM URL]",
    x: "[X URL]"
  },
  enrollmentStatus: "Now accepting enrollment inquiries. Availability may vary by age group.",
  infantAvailability: "Available by inquiry only, based on licensing capacity and current enrollment.",
  toddlerAvailability: "Please contact us for current openings.",
  preschoolAvailability: "Please contact us for current openings.",
  licenseNumber: "[LICENSE NUMBER]",
  licensingAuthority: "[LICENSING AUTHORITY]",
  licensingStatement:
    "Daily Love Family Daycare operates in accordance with applicable Maryland childcare licensing requirements.",
  licensingPlaceholderNotice:
    "Confirm exact licensing agency name, license number, and approved wording before publishing.",
  formProvider: "none",
  formEndpoint: "",
  emergencyContactPolicy:
    "Emergency contact procedures are reviewed during enrollment and provided to families in writing.",
  seo: {
    defaultOgImage: "/images/og-default-placeholder.svg",
    twitterCard: "summary_large_image"
  }
};
