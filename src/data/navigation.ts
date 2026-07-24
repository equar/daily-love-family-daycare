export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Daily Schedule", href: "/daily-schedule" },
  { label: "Health & Safety", href: "/health-safety" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Contact", href: "/contact" }
];
