/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Simarjit Singh",
  title: "Simarjit Singh",
  subTitle: emoji(
    "Passionate MERN Stack Developer and CSE student focused on building scalable web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LDm9AlQW_ef5J1P2Ae_QJxERIg19XPc5/view",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chauhansimar",
  linkedin: "https://www.linkedin.com/in/simar-singh-804828215/",
  gmail: "chauhansimar22@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  Leetcode: "https://leetcode.com/u/chauhansimar22/",
  // Leetcode: "https://leetcode.com/u/chauhansimar22/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER BUILDING MODERN AND SCALABLE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Computer Science student with strong expertise in full-stack development, problem-solving, and software fundamentals."
    ),
    emoji(
      "⚡ Skilled in MERN stack development with hands-on experience building responsive and dynamic web applications."
    ),
    emoji(
      "⚡ Continuously learning new technologies, improving development skills, and preparing for software engineering opportunities 🚀"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "NodeJS",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "ExpressJS",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "REST API",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  }
,
    {
      // skillName: "docker",
      // fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Chandigarh Group of Colleges",
      logo: require("./assets/images/cgc.jpg"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "August 2022 - December 2026",
      desc: "Focused on full-stack web development, software engineering, and problem-solving with hands-on experience in modern web technologies.",
      descBullets: [
        "Developed multiple full-stack projects using the MERN stack and REST APIs",
        "Built strong fundamentals in Data Structures, DBMS, Operating Systems, and Object-Oriented Programming",
        "Actively preparing for software engineering internships and placement opportunities",
        "Continuously learning modern technologies and improving development skills through practical projects"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming & Problem Solving",
      progressPercentage: "75%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "70%"
    },
    {
      Stack: "API Integration",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer Intern",
      company: "LITCODE LABS",
      companylogo: require("./assets/images/litcode.png"),
      date: "Nov 2025 – Present",
      desc: "Working on industry-level full-stack web applications and AI-powered solutions using modern web technologies.",
      descBullets: [
        "Built scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB",
        "Developed and integrated RESTful APIs to improve backend efficiency and server-side performance",
        "Worked on Generative AI chatbot solutions with real-time query handling and API integration",
        "Performed debugging, backend optimization, and testing to improve application reliability and maintainability"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
{
  image: require("./assets/images/shoe_image.jpeg"),
  projectName: "Nike E-Commerce Website",
  projectDesc:
    "Developed a modern and responsive Nike-inspired e-commerce platform featuring premium sneakers and sportswear collections. Built interactive product sections, smooth navigation, responsive layouts, and visually appealing UI components to deliver an engaging shopping experience using React.js, JavaScript, HTML, CSS, and Bootstrap.",
  footerLink: [
    {
      name: "Visit Website",
      url: "https://nike-s-website.vercel.app/"
    },
    {
      name: "GitHub", 
      url: "https://github.com/chauhansimar/Nike-s-Website"
    },
    {
      name: "Watch Demo",
      url: "https://drive.google.com/file/d/194G3wFQ17So_nYqA8yFuWkjAlJa8_YKj/view?usp=drive_link"
    }
    // you can add extra buttons here
  ]
},
   {
  image: require("./assets/images/aichatbot.png"),
  projectName: "AI Chatbot Web Application",
  projectDesc:
    "Developed a modern AI-powered chatbot web application with real-time messaging, interactive UI, and responsive design. Implemented dynamic chat functionality, smooth user interactions, Enter-key message sending, authentication pages, and clean frontend architecture using React.js, JavaScript, HTML, CSS, Node.js, and API integration techniques.",
  footerLink: [
    {
      name: "Visit Website",
      url: "https://my-app-frontend-mocha.vercel.app/"
    },
    {
      name: "GitHub",
      url: "https://github.com/chauhansimar/my-app-frontend"
    },
    {
      name: "Watch Demo",
      url: "https://drive.google.com/file/d/1j7XZv2ff7kYH3GUYDgpSA1qE4kWxavsD/view?usp=sharing"
    }
    // you can add extra buttons here
  ]
},
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate on completion of Artificial Intelligence",
      subtitle:
        "Successfully completed a certification in AI, Information Security, and Cryptography, gaining expertise in data protection, encryption techniques, threat mitigation, and secure AI applications to enhance cybersecurity in modern digital systems.",
      image: require("./assets/images/INFY.png"),
      imageAlt: "infosys Code-In Logo",
      footerLink: [
        {
          name: "Certification 1",
          url: "https://drive.google.com/file/d/1mkJWgDWaHRpvJ7kzAIX7mERQFrUQ7OQo/view?usp=sharing"
        },
        {
          name: "Certification 2",
          url: "https://drive.google.com/file/d/1r9C5M8CF7N3_bU4qIMWaIlClRUF6ENug/view?usp=sharing"
        },
        {
          name: "Certification 3",
          url: "https://drive.google.com/file/d/1dtyzAq8ONlRMy4ZpqsdmVRGF1peLgFQY/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS",
      subtitle:
        "Successfully completed the AWS Academy Cloud Operations certification, gaining expertise in AWS infrastructure, cloud management, monitoring, automation, and security best practices to optimize cloud-based solutions and operations.",
      image: require("./assets/images/amazon-web-services-aws-seeklogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ywiTGh7AkJGb6-B2QSSXCEqSbRid9Wxq/view?usp=sharing"
        }
      ]
    },

    {
      title: "Smart India Hackathon",
      subtitle: "Participated in Smart India Hackathon, collaborating in a team to develop innovative tech solutions for real-world challenges. Gained hands-on experience in problem-solving, teamwork, and rapid prototyping while working on impactful projects.",
      image: require("./assets/images/SIH2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ItPeyi0Z2s-r7xM-w5uFL3UcMoXOSwDx/view?usp=sharing"},
        // {
          // name: "Final Project",
          // url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research Patents",
  subtitle:
    "With Love for Developing cool stuff, I love to write Research papers.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1fNk-CbBFTyzMBaTgmTMctVbbmp3UIzfm/view?usp=drive_link",
      title: "Multifunctional Smart Mirror for Daily Wellness and Routine Management",
      description:
        "Developed a Multifunctional Smart Mirror for Daily Wellness and Routine Management designed to enhance productivity and healthy living through smart technology integration. The system provides real-time features such as weather updates, time and date display, reminders, daily schedules, wellness tracking, and personalized notifications through an interactive mirror interface. Focused on improving user convenience, routine management, and smart home experience using innovative software and hardware integration."
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
    resumeLink: "/Simarjit_Singh_Resume.pdf",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internships, and exciting software development projects. Feel free to connect with me 🚀",
  number: "+91 9878091699",
  email_address: "chauhansimar22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
