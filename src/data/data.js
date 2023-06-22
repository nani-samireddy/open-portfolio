export const data = {
  /*
   *  Personal Details Section
   */
  name: "Nani samireddy",
  tagLine: "an enthusiastic designer & developer based in India",
  aboutMe:
    "I’m designer and developer from India with high passion of creating softwares That looks and works great...",
  email: "nanisamireddy05@gmail.com",
  phone: "+91 9490273113",

  /*
   *  Work Experience Section
   *  You can add or remove entries from the workExperience array
   *  startDate and endDate must be in yyyy-mm-dd format
   *  You can use the endDate as '-' if you want to show that as Present
   *  You can get the techStack logos from src/data/tech-data.js
   *  You can add or remove techStack entries from the techStack array
   */
  workExperience: [
    {
      id: 1,
      title: "We developer | Octaspy",
      description:
        "Design and developed an website for Octaspy.com and helped them to actively engage with their customers",
      link: "https://dev-word.octaspy.com/",
      techUsed: [
        "ReactJs",
        "TailwindCSS",
        "Git",
        "Github",
        "Figma",
        "Github Actions",
      ],
    },
    {
      id: 2,
      title: "Development Lead | OYOLAVALLEY",
      description:
        "Lead the completed design and development of the website for oyolavally.com which is a travel and tourism company",
      link: "https://oyola.in/",
      techUsed: ["Javascript", "HTML", "CSS", "Firebase", "Git", "Github"],
    },
  ],

  /*
   *  Initiatives Section or Personal Projects Section
   *  You can add or remove entries from the initiatives array
   * You can get the techStack logos from src/data/tech-data.js
   * You can add or remove techStack entries from the techStack array
   */
  initiatives: [
    {
      id: 1,
      title: "Code Slate | Coding Community",
      description:
        "Started a coding community to help students and developers to learn and grow together. We have 500+ members in our community. We conduct weekly coding challenges and monthly hackathons. We also conduct workshops and webinars to help students and developers to learn new technologies. We also have an Instagram page (@thecodeslate) where we post daily coding challenges and tips.",
      link: "https://instagram.com/thecodeslate",
    },
    {
      id: 1,
      title: "MD Editor | Online Markdown Editor",
      description:
        "An Online MarkDown editor that enables users to Edit and preview the Markdown code.",
      link: "https://markdown.nanisamireddy.dev",
      techUsed: ["ReactJs", "TailwindCSS", "Git", "Github", "Figma"],
    },
  ],
};
