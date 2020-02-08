export default {
  header: {
    info: {
      headshotURL: "/images/me.jpg",
      name: "Tryston Perry",
      title: "Full Stack Developer",
      about: `
      Hey 👋, I'm Tryston! <br /> <br />
      I enjoy programming, talking, and reading.  <br /> <br />
      For the last year, I've been building a website for streaming games, 
      watching videos, and chatting with friends called PlaySpace.  <br /> <br />
      I also enjoy giving talks at local San Diego meetups.  <br /> <br />
      If you're interested in speaking with me, <a href="mailto:tryston@trystonperry.com">
      shoot me an email!</a>
      `
    },
    social: [
      { text: "Resume", link: "http://resume.trystonperry.com" },
      { text: "Github", link: "https://github.com/trystonperry" },
      { text: "LinkedIn", link: "https://linkedin.com/in/trystonperry" },
      { text: "Twitter", link: "https://twitter.com/trystonperry" },
      { text: "Medium", link: "https://medium.com/@trystonperry" }
    ],
    skills: {
      "Front-End": [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React",
        "Vue",
        "Angular",
        "WebRTC",
        "Bootstrap 4",
        "TailwindCSS"
      ],
      "Back-End": ["Node.js", "Express.js", "Socket.io", "MongoDB", "MySQL"],
      DevOps: ["AWS", "Digital Ocean", "PM2", "CI/CD", "Git", "Bash & SSH"],
      Desgin: ["Adobe Photoshop", "Figma", "Adobe Illustrator"],
      Other: ["Agile Development", "Unit Testing", "Pair/Mob Programming"]
    },
    action: {
      text: "Email Me",
      link: "mailto:tryston@trystonperry.com"
    }
  },
  work: [
    {
      company: "Nanome Inc.",
      title: "Front-End Developer",
      website: "https://nanome.ai",
      startDate: "March 2019",
      endDate: "January 2020",
      points: [
        "Built new landing page designs in Figma, went through iterations, and implemented them in a Vue.js front-end.",
        "Improved enterprise sales pipeline by designing new landing pages from scratch https://home.nanome.ai/commercial.",
        "Optimized content to improve web page load times by up to 500%.",
        "Collaborated with co-workers in code review and pull requests.",
        "Stayed SEO and accessibility conscious."
      ]
    }
  ],
  talk: {
    youtubeVideoId: "BwFCPv_Udao",
    title: "How to Give a Good Tech Talk",
    date: "Feb 4 2020",
    description: "Ideas to think about when creating your next talk"
  },
  projects: [
    {
      name: "PlaySpace",
      imageURL: "/images/playspace.jpg",
      link: "https://playspace.tv",
      startDate: "April 2019",
      endDate: "Present",
      description:
        "Over the last year, I have single handedly built a platform for streaming games, watching videos, and chatting with friends from the comfort of your web browser."
    },
    {
      name: "San Diego Zoohackaton",
      imageURL: "/images/zoohackathon.jpg",
      link: "https://youtu.be/Rsst11LyNuY",
      startDate: "November 8",
      endDate: "10 2019",
      description:
        "I participated in a hackathon with one other person on my team. Our goal was to create a webapp that gamified the collection of animal trafficking data. It was built in a Vue front-end with Airtable as the database. We didn’t win, but I did pull off my longest coding stretch of 7am - 1am that I am very proud of."
    },
    {
      name: "MMXX Fashion",
      imageURL: "/images/mmxx.jpg",
      link: "https://2020.fashion",
      startDate: "January 2020",
      description:
        "Designed a static landing page for my friends clothing brand with vanilla HTML/CSS. Created an email list sign up form that submits to an airtable back-end via a webhook."
    },
    {
      name: "My Presentations",
      imageURL: "/images/presentations.jpg",
      link: "https://github.com/trystonperry/presentations",
      startDate: "June 2019",
      endDate: "Present",
      description:
        "A collection of all the presentations / talks I've given at local meetups or online."
    },
    {
      name: "Boarditt",
      imageURL: "/images/boarditt.jpg",
      link: "https://boarditt.com",
      startDate: "September",
      endDate: "October 2018",
      description:
        "Boarditt is a simple, yet powerful Task Management WebApp. The front-end is build with Angular 5 as a SPA. Using components and services to neatly organize data handled from it's back-end API. The back-end uses Node.js, Express.js, and MongoDB to form an API for accessing data like Boards, Lists, and Todos."
    }
  ]
};
