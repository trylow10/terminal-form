export const CONFIG = {
  font: "Georgi16",
  directories: {
    experience: [
      "",
      "<white>Freelance Software Engineer</white> <gray>(April 2023 - May 2024)</gray>",
      [
        [
          "Project",
          "",
          "<yellow>Trip To Kailash - Tour Booking Application</yellow>: Developed a dynamic tour booking application allowing users to seamlessly browse and book travel packages tailored to the client's requirements.",
        ],
        [
          "Responsibilities",
          "",
          `
            * Implemented <cyan>Strapi</cyan> as a headless CMS, empowering the client to easily publish and manage tour packages and related content, dynamically reflected on the frontend.
            * Developed and deployed a scalable application using <cyan>Prisma ORM</cyan> with <cyan>PostgreSQL</cyan> and <cyan>React-Query</cyan> for efficient customer bookings and package management.
            * Containerized with <cyan>Docker Compose</cyan> for streamlined deployment on a <cyan>VPS</cyan>.
          `.trim(),
        ],
        [
          "Technologies",
          "",
          "<cyan>Next.js, Strapi, TypeScript, Prisma, Tailwind CSS, PostgreSQL, Docker, Docker-Compose</cyan>.",
        ],
      ].map(
        ([title, url, description = ""]) =>
          `* ${
            url ? `<a href="${url}">${title}</a>` : `<b>${title}</b>`
          } &mdash; <white>${description}</white>`
      ),
      "",
      "<white>F1Soft International Pvt. Ltd</white> <gray>(System Support & DevOps Intern, March 2024 - August 2024)</gray>",
      [
        [
          "Responsibilities",
          "",
          `
            * Deployed a comprehensive observability, logging, and alerting solution using <cyan>ELK</cyan> and <cyan>Loki Stacks</cyan>, improving system uptime and enabling efficient log monitoring and troubleshooting.
            * Hosted web applications on <cyan>Nginx</cyan> and <cyan>Apache Tomcat</cyan>, optimizing performance, security, and availability, with seamless integration into the monitoring and logging infrastructure.
            * Monitored system logs in real-time using the <cyan>Loki Stack</cyan>, implementing automated alerts for rapid detection and response to critical issues, ensuring high service reliability.
          `.trim(),
        ],
        [
          "Technologies",
          "",
          "<cyan>RHEL (Rocky, CentOS), Docker, Nginx, Tomcat, ArgoCD, ActiveMQ, Kafka, Redis, K3s, ELK Stack, Prometheus, Grafana, Jenkins, VIM</cyan>.",
        ],
      ].map(
        ([title, url, description = ""]) =>
          `* ${
            url ? `<a href="${url}">${title}</a>` : `<b>${title}</b>`
          } &mdash; <white>${description}</white>`
      ),
      "",
      "<white>Hamro Patro</white> <gray>(Software Engineering Trainee, September 2022 - March 2023)</gray>",
      [
        [
          "Responsibilities",
          "",
          `
            * Developed real-time autocomplete suggestions and personalized recommendations using <cyan>Elasticsearch</cyan>, <cyan>Node.js</cyan>, and <cyan>GraphQL</cyan> (<yellow>Hamro Gifts</yellow>).
            * Designed and implemented <cyan>REST APIs</cyan> for dynamic search and filtering, improving functionality based on parameters like price and tags.
            * Containerized all frontend apps using <cyan>Docker</cyan> to enhance deployment processes.
            * Contributed to a legacy codebase by creating role-based features for a content management system (<cyan>CMS</cyan>).
            * Resolved bugs related to internationalization and currency conversion.
            * Integrated the <cyan>Stripe</cyan> payment gateway on both backend and frontend systems for secure and efficient transactions.
          `.trim(),
        ],
        [
          "Technologies",
          "",
          "<cyan>React.js, Express.js, Node.js, MongoDB, TypeScript, JavaScript, GraphQL, Tailwind CSS, Elasticsearch, Stripe, Reaction Commerce, Docker</cyan>.",
        ],
      ].map(
        ([title, url, description = ""]) =>
          `* ${
            url ? `<a href="${url}">${title}</a>` : `<b>${title}</b>`
          } &mdash; <white>${description}</white>`
      ),
      "",
    ].flat(),
    skills: [
      "",
      "<white>Frontend</white>",
      [
        "React.js",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Redux (Toolkit)",
        "Apollo GraphQL",
        "Tailwind CSS",
        "shadcn/ui",
      ].map((lang) => `* <yellow>${lang}</yellow>`),
      "",
      "<white>Backend</white>",
      ["Node.js", "Express.js", "Nest.js"].map(
        (lib) => `* <green>${lib}</green>`
      ),
      "",
      "<white>Database</white>",
      ["PostgresQL", "MYSQL", "MongoDB"].map(
        (tool) => `* <blue>${tool}</blue>`
      ),

      "",
      "<white>Tools</white>",
      ["Docker", "Jira", "Git", "Linux", "Bash", "CI/CD"].map(
        (tool) => `* <aqua>${tool}</aqua>`
      ),
      "",
    ].flat(),
    education: [
      "",
      "<white>Education</white>",
      '* <a href="https://prime.edu.np/" target="_blank">Prime College</a> <yellow>"Bachelors in Computer Application"</yellow> Kathmandu, Nepal | (Nov 2018 - Jan 2024) ',
      '* <a href="https://southwestern.edu.np/" target="_blank">Southwestern State College</a> <yellow>"Science"</yellow> Kathmandu, Nepal | ( 2016-2018 )',
      "",
    ],
    projects: [
      "",
      "<white>Projects</white>",
      [
        [
          "Trip to Kailash",
          "https://mtkailashtrip.com/",
          `
            <yellow>A dynamic tour booking app</yellow> that streamlines reservation processes for the packages published. Tailored to the client’s requirements, it utilizes <cyan>Strapi</cyan> as a headless CMS to power the admin for publishing data dynamically reflected on the site.
            <gray>Tech Stack:</gray> <cyan>StrapiJS, Next.js, Tailwind CSS, PostgreSQL, Prisma, VPS, Docker Compose</cyan>.
          `.trim(),
        ],
        [
          "Jobhub",
          "https://github.com/trylow10/jobhub",
          `
            <yellow>A LinkedIn-like platform</yellow> for job finding and hiring where candidates are matched using cosine similarity and networked based on hashtags.
            <gray>Tech Stack:</gray> <cyan>MongoDB, Express.js, React.js, Node.js, Redux, Tailwind CSS, ImageKit SDK, Elasticsearch, Docker</cyan>.
          `.trim(),
        ],
        [
          "Product Management System (PMS)",
          "https://github.com/trylow10/pmsV1",
          `
            <yellow>An application</yellow> that manages records of cloth sheets and assigns tasks to workers efficiently.
            <gray>Tech Stack:</gray> <cyan>Next.js, React-Hook Form (RHF), Prisma, Next Auth, Shadcn/UI, Tailwind CSS, PostgreSQL, Docker, Resend</cyan>.
          `.trim(),
        ],
        [
          "Perditlizer",
          "https://github.com/trylow10/Crop-fertilizer-prediction",
          `
            <yellow>A crop fertilizer prediction app</yellow> that uses the <cyan>Random Forest algorithm</cyan> to suggest the optimal fertilizer for crops.
            <gray>Tech Stack:</gray> <cyan>Python, Tkinter</cyan>.
          `.trim(),
        ],
        [
          "CI/CD Tools",
          "",
          `
            * <a href="https://github.com/trylow10/k3s/blob/main/gitsync/README.md">Gitsync</a>: Synchronization solution for repositories.
            * <a href="https://github.com/trylow10/k3s/blob/main/nginx-cache/README.md">Nginx-Cache</a>: Configurable Nginx caching solution for web optimization.
          `.trim(),
        ],
        [
          "Terminal Portfolio",
          "https://github.com/trylow10/terminal-portfolio",
          `
            <yellow>A terminal-style portfolio site</yellow> showcasing skills, experience, and projects interactively.
            <gray>Tech Stack:</gray> <cyan>React.js, TypeScript, Tailwind CSS</cyan>.
          `.trim(),
        ],
      ].map(
        ([title, url, description = ""]) =>
          `* ${
            url ? `<a href="${url}">${title}</a>` : `<b>${title}</b>`
          } &mdash; <white>${description}</white>`
      ),
      "",
      "<white>Open Source Contributions</white>",
      [
        [
          "Contribution Highlights",
          "",
          `
            * Contributed to <cyan>open-source projects</cyan> like<a href="https://github.com/28softwares/BackupDBee/commit/5e98388474aea31a07a762a87a0d0f309c282357" target="_blank">BackupDB</a> added TELEGRAM support.
          `.trim(),
        ],
      ].map(
        ([title, url, description = ""]) =>
          `* ${
            url ? `<a href="${url}">${title}</a>` : `<b>${title}</b>`
          } &mdash; <white>${description}</white>`
      ),
      "",
    ].flat(),
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
  },
};

export const ROOT_DIR = "~";
export const FILES = ["joke"];
export const DIRECTORIES = Object.keys(CONFIG.directories);
