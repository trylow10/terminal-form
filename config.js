export const CONFIG = {
  font: "Georgi16",
  directories: {
    social: [
      "",
      "<white>Contact Me</white>",
      [
        ["aryaltrylowchan@gmail.com", "mailto:aryaltrylowchan@gmail.com"],
        ["(+977) 9861574412", "tel:+9779861574412"],
        ["Portfolio", "https://atrilochan.com.np"],
        ["Github", "https://github.com/trylow10/"],
        ["Linkedin", "https://www.linkedin.com/in/trilochanaryal/"],
      ]
        .map(([name, url]) => `<a href="${url}">${name}</a>`)
        .join(" | "),
      "",
    ],
    education: [
      "",
      "<white>Education</white>",
      '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kielce University of Technology</a> <yellow>"Computer Science"</yellow> 2002-2007 / 2011-2014',
      '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">Post-secondary</a> Electronic School <yellow>"Computer Systems"</yellow> 2000-2002',
      '* Electronic <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">Technikum</a> <yellow>"RTV"</yellow> 1995-2000',
      "",
    ],
    projects: [
      "",
      "<white>Open Source Projects</white>",
      [
        [
          "jQuery Terminal",
          "https://terminal.jcubic.pl",
          "Library that adds terminal interface to websites",
        ],
        [
          "LIPS Scheme",
          "https://lips.js.org",
          "Scheme implementation in JavaScript",
        ],
        [
          "Sysend.js",
          "https://jcu.bi/sysend",
          "Communication between open tabs",
        ],
        ["Wayne", "https://jcu.bi/wayne", "Pure in-browser HTTP requests"],
      ].map(
        ([name, url, description = ""]) =>
          `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`
      ),
      "",
    ].flat(),
    skills: [
      "",
      "<white>Languages</white>",
      ["JavaScript", "TypeScript", "Python", "SQL", "PHP", "Bash"].map(
        (lang) => `* <yellow>${lang}</yellow>`
      ),
      "",
      "<white>Libraries</white>",
      ["React.js", "Redux", "Jest"].map((lib) => `* <green>${lib}</green>`),
      "",
      "<white>Tools</white>",
      ["Docker", "Git", "GNU/Linux"].map((tool) => `* <blue>${tool}</blue>`),
      "",
    ].flat(),
  },
};

export const ROOT_DIR = "~";
export const FILES = ["joke"];
export const DIRECTORIES = Object.keys(CONFIG.directories);
