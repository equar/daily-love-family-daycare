export type SiteConfig = {
  businessName: string;
  contactName: string;
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
  accessibilityStatementUrl: string;
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
  analyticsId: string;
  emergencyContactPolicy: string;
  seo: {
    defaultOgImage: string;
    twitterCard: "summary" | "summary_large_image";
  };
};

const env = import.meta.env;

const requiredText = (value: string | undefined, fallback: string): string =>
  value && value.trim().length > 0 ? value.trim() : fallback;

export const siteConfig: SiteConfig = {
  businessName: requiredText(env.PUBLIC_BUSINESS_NAME, "Daily Love Family Daycare"),
  contactName: requiredText(env.PUBLIC_CONTACT_NAME, "Asrat Alemu"),
  tagline: "A loving place to learn, grow, and feel at home.",
  county: "Montgomery County",
  city: "Silver Spring",
  state: "Maryland",
  zip: "20904",
  streetAddress: requiredText(env.PUBLIC_ADDRESS, "12922 Autumn DR"),
  phone: requiredText(env.PUBLIC_PHONE, "(240) 643-6616"),
  email: requiredText(env.PUBLIC_EMAIL, "asrata33@gmail.com"),
  businessHours: "7 A.M. - 5:30 P.M.",
  tourHours: "Tours available by appointment from 7 A.M. - 5:30 P.M.",
  canonicalUrl: requiredText(env.PUBLIC_SITE_URL, "https://example.com"),
  mapsUrl: requiredText(
    env.PUBLIC_GOOGLE_MAPS,
    "https://www.google.com/maps/search/?api=1&query=12922+Autumn+DR%2C+Silver+Spring%2C+MD+20904"
  ),
  socialLinks: {
    facebook: requiredText(env.PUBLIC_FACEBOOK, ""),
    instagram: requiredText(env.PUBLIC_INSTAGRAM, ""),
    x: "[X URL]"
  },
  accessibilityStatementUrl: "",
  enrollmentStatus: "Now enrolling in Silver Spring, MD 20904. Spaces are limited.",
  infantAvailability: "Available by inquiry only, based on licensing capacity and current enrollment.",
  toddlerAvailability: "Please contact us for current openings.",
  preschoolAvailability: "Please contact us for current openings.",
  licenseNumber: requiredText(env.PUBLIC_LICENSE_NUMBER, "[LICENSE NUMBER]"),
  licensingAuthority: requiredText(env.PUBLIC_LICENSE_AUTHORITY, "[LICENSING AUTHORITY]"),
  licensingStatement:
    "Daily Love Family Daycare operates in accordance with applicable Maryland childcare licensing requirements.",
  licensingPlaceholderNotice:
    "Confirm exact licensing agency name, license number, and approved wording before publishing.",
  formProvider: env.PUBLIC_FORM_ENDPOINT ? "formspree" : "none",
  formEndpoint: requiredText(env.PUBLIC_FORM_ENDPOINT, ""),
  analyticsId: requiredText(env.PUBLIC_GA_ID, ""),
  emergencyContactPolicy:
    "Emergency contact procedures are reviewed during enrollment and provided to families in writing.",
  seo: {
    defaultOgImage: "/images/og-default-placeholder.svg",
    twitterCard: "summary_large_image"
  }
};

export const hasUsableUrl = (value: string): boolean => /^https?:\/\//i.test(value);
