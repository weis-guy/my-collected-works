export type Writing = {
  title: string;
  outlet: string;
  date: string;
  url: string;
  dek?: string;
  topics?: string[];
};

export type Project = {
  title: string;
  role: string;
  outlet: string;
  date: string;
  url?: string;
  dek?: string;
};

export type Appearance = {
  outlet: string;
  title: string;
  date: string;
  url: string;
  format: "Television" | "Podcast" | "Radio" | "Panel" | "Interview" | "Press";
  dek?: string;
};

export const writings: Writing[] = [
  {
    title:
      "Transition Assistance Programs for the Submarine Industrial Base Workforce",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2024",
    url: "https://centerformaritimestrategy.org/publications/transition-assistance-programs-for-the-submarine-industrial-base-workforce/",
    dek: "How targeted transition assistance can address chronic workforce shortfalls in the U.S. submarine industrial base.",
    topics: ["Industrial Policy", "Maritime Security"],
  },
  {
    title: "AusAID Can Take USAID's Place in the Pacific Islands",
    outlet: "The Strategist — ASPI",
    date: "2024",
    url: "https://www.aspistrategist.org.au/ausaid-can-take-usaids-place-in-the-pacific-islands/",
    dek: "Why Canberra is well-positioned to fill the development vacuum left by Washington across the Pacific.",
    topics: ["Geopolitics", "Pacific"],
  },
];

export const projects: Project[] = [];

export const appearances: Appearance[] = [
  {
    outlet: "PBS NewsHour",
    title:
      "College Campuses Become Focus of Debate Over What Constitutes Free Speech",
    date: "PBS NewsHour broadcast",
    url: "https://www.pbs.org/newshour/show/college-campuses-become-focus-of-debate-over-what-constitutes-free-speech",
    format: "Television",
    dek: "Featured in a national broadcast segment examining the contested boundaries of campus free expression.",
  },
];
