/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Piler Tam",
  title: "Hi all, I'm Piler Tam",
  subTitle: emoji(
    "A passionate Software Developer having an experience of building game and VR applications with Unity / JavaScript / Nodejs and some other cool libraries and frameworks."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/15Eb6RcDmoAYObz0QuZ6IREzMw7nrcRxi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/piler-tam-9b5386116/",
  gmail: "tamchakkuen@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ With 5 years experience building immersive games and VR applications using Unity"),
    emoji(
      "⚡ Participated in the development of over 20 Unity-based game/VR Training/VR Cave projects for clients like Airport Authority Hong Kong, Build King, EPD, CIC and CLP"
    ),
    emoji(
      "⚡ Collaborated closely with UI designers, project manager and 3D artists to ensure seamless integration of assets and a polished final product"    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "unity c#",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hong Kong University of Science and Technology",
      logo: require("./assets/images/ust2.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2019",

    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity / C#", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "AI / Machine Learning",
      progressPercentage: "50%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Application Developer",
      company: "Chain Technology Development",
      companylogo: require("./assets/images/chain.jfif"),
      date: "Feb 2021 – Jan 2025",
      desc: "Design and Develop immersive and interactive applications for VR, AR, and CAVE environments across public and industrial sectors.",
      descBullets: [
        "Developed multiple real-time 3D applications using Unity and Unreal Engine.",
        "Participated in  large-scale digital twin platforms for airport infrastructure visualization and monitoring.",
        "Delivered VR training simulations for construction and utility companies, enhancing safety and engagement.",
        "Collaborated with cross-functional teams including UX designers, 3D artists, and system engineers."
      ]
    },
    {
      role: "Developer",
      company: "Xensory Lab Limited",
      companylogo: require("./assets/images/xensory.png"),
      date: "Sep 2019 – Feb 2021",
      desc: "Contributed to the development of interactive software solutions combining sensory interfaces, immersive visuals, and machine learning models.",
      descBullets: [
        "Prototyped experimental interactions blending tactile feedback, VR scenes, and computer vision.",
        "Maintained and optimized real-time 3D apps for public exhibitions and educational institutions."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      video: require("./assets/videos/AssetPlacement.mp4"),
      projectName: "Digital Twin Platform for AAHK",
      projectDesc: "A real-time monitoring and simulation system for airport infrastructure. Features include 3D visualization, crowd simulation, 4D timeline playback, asset placement, and a BIM model viewer.",
    },
    {
      video: require("./assets/videos/Buildkingtopicc-20240830.mp4"),
      projectName: "VR Training for Build King",
      projectDesc: "An immersive VR training simulation for construction workers. Designed to improve site safety awareness and procedure familiarity through hands-on virtual experiences.",
    },
    {
      video: require("./assets/videos/AET.mp4"),
      projectName: "CAVE for Autonomous Electric Tractor of AAHK",
      projectDesc: "A CAVE-based simulation to visualize and monitor autonomous electric tractor operations at the airport. Used for showcasing, planning, and evaluating autonomous transport scenarios.",
    },
    {
      video: require("./assets/videos/LidarTouch.mp4"),
      projectName: "Touch Program for Immersive Cave",
      projectDesc: "An interactive LIDAR-based touch interface system for immersive CAVE environments. Enables users to interact with virtual scenes using natural hand gestures on physical walls.",
    },
    {
      video: require("./assets/videos/VFlowManager.mp4"),
      projectName: "Visual Flow Manager for Unity Editor",
      projectDesc: "A custom Unity Editor tool allows designers and developers to create and manage complex game logic and sequences through a row-based visual interface.",
    },
    {
      video: require("./assets/videos/EPD.mp4"),
      projectName: "Immersive Cave for EPD in Plaza Hollywood",
      projectDesc: "A public-facing immersive installation to educate visitors about environmental protection topics. Developed for the Environmental Protection Department using CAVE technology.",
    }
    ,
    {
      video: require("./assets/videos/AR_Rock_Climbing.mp4"),
      projectName: "AR Rock Climbing",
      projectDesc: "An augmented reality experience that merges physical rock climbing with interactive game elements. Players climb a real wall while engaging with virtual targets effects projected onto the surface, creating a gamified fitness challenge.",
    },
    {
      video: require("./assets/videos/unreal_mobile_control.mp4"),
      projectName: "Immersive Cave and Mobile Control for Unreal Engine Applications",
      projectDesc: "A mobile interface to control and interact with Unreal Engine-based software remotely. Enables touch and gesture input from mobile devices to drive real-time 3D simulations.",
    },
    {
      video: require("./assets/videos/mahjong-demo.mp4"),
      projectName: "AI Mahjong Recognition and Scoring App (Prototype)",
      projectDesc: "A prototype mobile app that uses AI and computer vision to recognize Mahjong tiles in real-time and automatically calculate scores, reducing errors and improving gameplay flow.",
    },

    {
      video: require("./assets/videos/zelda.mp4"),
      projectName: "Reimplemented Game Mechanics of Zelda",
      projectDesc: "A fan-made technical project recreating core gameplay mechanics from Zelda: TOTK, such as Ultrahand-style physics manipulation, in a custom engine environment.",
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/piler-tam",
      title: "dev.to",
      description:
        "Development Blog including development tips, unity issues, shaders, untiy editor scripting, design patterns, debugging and trobule shooting."
    },

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
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+852-56414653",
  email_address: "tamchakkuen@gmail.com"
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
