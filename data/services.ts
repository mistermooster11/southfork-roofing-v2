export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Roof Repair",                  href: "/roof-repair/" },
  { label: "Roof Replacement",             href: "/roof-replacement/" },
  { label: "Chimney Repair & Cleaning",    href: "/chimney-repair/" },
  { label: "Flat Roofing",                 href: "/flat-roofing/" },
  { label: "Emergency Roof Repair",        href: "/emergency-roof-repair/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Roof Repair",
    image: "/images/service-1.jpg",
    href: "/roof-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Roof Replacement",
    image: "/images/service-2.jpg",
    href: "/roof-replacement/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Chimney Repair & Cleaning",
    image: "/images/service-3.jpg",
    href: "/chimney-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Flat Roofing",
    image: "/images/service-4.jpg",
    href: "/flat-roofing/",
    width: 535,
    height: 643,
  },
];
