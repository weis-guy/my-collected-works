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
    title: "AusAID Can Take USAID's Place in the Pacific Islands",
    outlet: "The Strategist — ASPI",
    date: "2025",
    url: "https://www.aspistrategist.org.au/ausaid-can-take-usaids-place-in-the-pacific-islands/",
    dek: "Why Canberra is well-positioned to fill the development vacuum left by Washington across the Pacific.",
  },
  {
    title: "What a NATO-Skeptic U.S. Means for NATO Maritime Security",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2025",
    url: "https://centerformaritimestrategy.org/publications/what-a-nato-skeptic-u-s-means-for-nato-maritime-security/",
    dek: "Implications for the alliance's maritime posture as Washington's commitment to NATO comes into question.",
  },
  {
    title: "The Weakest Link: Single Points of Failure and Toward a National Cybersecurity",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2025",
    url: "https://centerformaritimestrategy.org/publications/the-weakest-link-single-points-of-failure-and-toward-a-national-cybersecurity/",
    dek: "How concentrated dependencies in critical infrastructure create systemic cybersecurity risks.",
  },
  {
    title: "Military Personnel Need Robust Financial Education More Than Ever",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2025",
    url: "https://centerformaritimestrategy.org/publications/military-personnel-need-robust-financial-education-more-than-ever/",
    dek: "The case for stronger financial literacy programs across the U.S. armed forces.",
  },
  {
    title: "Transition Assistance Programs for the Submarine Industrial Base Workforce",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2024",
    url: "https://centerformaritimestrategy.org/publications/transition-assistance-programs-for-the-submarine-industrial-base-workforce/",
    dek: "How targeted transition assistance can address chronic workforce shortfalls in the U.S. submarine industrial base.",
  },
  {
    title: "Apprenticeships Build the Arsenal of Democracy",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2024",
    url: "https://centerformaritimestrategy.org/publications/apprenticeships-build-the-arsenal-of-democracy/",
    dek: "Reviving apprenticeship pipelines to rebuild America's defense manufacturing workforce.",
  },
  {
    title: "Prioritizing Dockworkers Upholds U.S. National Security",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2024",
    url: "https://centerformaritimestrategy.org/publications/prioritizing-dockworkers-upholds-u-s-national-security/",
    dek: "Why the people who move cargo through American ports are a national security asset.",
  },
  {
    title: "Resolving Maritime Border Dispute Opens Door for Increased Energy Security",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2024",
    url: "https://centerformaritimestrategy.org/publications/resolving-maritime-border-dispute-opens-door-for-increased-energy-security/",
    dek: "How settling contested waters can unlock new pathways for allied energy security.",
  },
  {
    title: "Subs to the Aussies: Impact of the AUKUS Partnership",
    outlet: "The MOC — Center for Maritime Strategy",
    date: "2023",
    url: "https://centerformaritimestrategy.org/publications/subs-to-the-aussies-impact-of-the-aukus-partnership/",
    dek: "Assessing the strategic and industrial implications of transferring Virginia-class submarines under AUKUS.",
  },
  {
    title: "The Pursuit of Life Without Work",
    outlet: "The Vocation Project (Substack)",
    date: "2024",
    url: "https://open.substack.com/pub/vocationproject/p/the-pursuit-of-life-without-work",
    dek: "An essay on meaning, leisure, and the politics of a post-work imagination.",
  },
  {
    title:
      "Guest Opinion: The Affordable Care Act Insures Tens of Thousands of New York's College Students",
    outlet: "The Ithaca Times",
    date: "2024",
    url: "https://www.ithaca.com/opinion/guest_opinions/guest-opinion-the-affordable-care-act-insures-tens-of-thousands-of-new-york-s-college/article_bac74b34-fc0c-11ee-9f00-9354d0550bb5.html",
    dek: "The ACA's outsized role in protecting health coverage for New York's college student population.",
  },
  {
    title: "What West Virginia v. EPA Means for IP",
    outlet: "Cornell Intellectual Property and Ethics Club",
    date: "2022",
    url: "https://www.cornellintellectualproperty.com/blog-1-1/what-west-virginia-v-environmental-protection-agency-means-for-ip",
    dek: "The major questions doctrine and its potential reach into intellectual property regulation.",
  },
  {
    title: "The Fractured GOP Under Trump",
    outlet: "The Viking — Central Catholic High School",
    date: "2020",
    url: "https://cchsviking.com/2255/opinion/the-fractured-gop-under-trump/",
    dek: "An early opinion piece on the realignment of the Republican party under Donald Trump.",
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
