import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 12,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Android Studio",
    projects: 3,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Flutter Development",
    projects: 1,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const AboutMe = [
  "Hello, I’m Nitin Rathore, a recent graduate with a BTech in Electronics and Communication Engineering from NIT Patna. Born and raised up in Kota, Rajasthan",
  "I have secured 2nd rank in IEEE Extreme Programming Challenge'15.0 NITP. My core interests are Web development and Problem Solving",
  "I hold a rating of 1765 (max) on Leetcode",
];

export const workExp = [
  {
    place: "Larsen & Toubro PES",
    tenure: "July 2024 - Oct 2024",
    role: "Graduate Engineer Trainee",
    detail:
      "I learned about the design and manufacturing processes of defense projects, covering project management, CRM tools, testing, and building. I gained hands-on experience in 3D modeling, Python, AI-ML, IoT, and using Power BI for data visualization.",
  },
  {
    place: "Bosscoder Academy",
    tenure: "March 2024 - June 2024",
    role: "Software Developer",
    detail:
      "I developed and maintained the company's website, ensuring a seamless user experience. I collaborated with the team to implement new features and optimize existing code, contributing to the company's growth and success",
  },
  {
    place: "HUGG.CO.IN",
    tenure: "June 2023 - July 2023",
    role: "Frontend Developer",
    detail:
      "I designed and built user interfaces for a mental health organization's website. I continuously learnt and grew in the field of web development while maintaining high coding standards to contribute effectively to the organization's mission",
  },
  {
    place: "IEEE SB NITP",
    tenure: "July 2023 - April 2024",
    role: "Chairperson",
    detail:
      "Visionary leader of the IEEE Student Branch NIT Patna, coordinating technical workshops and seminars. I collaborated with the team, managed budgets, and represented the branch at IEEE meetings",
  },
  {
    place: "IEEE SB NITP",
    tenure: "July 2022 - July 2023",
    role: "Treasurer",
    detail:
      "Oversaw budget allocation and financial management. Collaborated with the executive team to plan and execute events, ensured compliance with financial regulations, and maintained transparent financial records",
  },
];

export const comments = [
  {
    name: "nitinrathore27",
    post: "Problem Solver",
    comment:
      "On LeetCode, I've tackled numerous algorithmic problems, delving into data structures, dynamic programming, and more. My solutions demonstrate a systematic approach to problem-solving, always striving for optimized and elegant code.",
    img: "./logoleetcode.png",
    url: "https://leetcode.com/nitinrathore27/",
  },
  {
    name: "aaharanitin27",
    post: "Problem Solver",
    comment:
      "GeeksforGeeks mirrors my dedication to continuous learning. I delve into detailed explanations of coding problems, elevating my coding proficiency. I've conquered numerous challenges, cementing my understanding of complex concepts.",
    img: "./logogfg.png",
    url: "https://auth.geeksforgeeks.org/user/aaharanitin27",
  },
  {
    name: "Nitinrathore27",
    post: "Creative Manager",
    comment:
      "👋 Hello World! |  Welcome to my GitHub repository! Here, I unleash my passion for coding and showcase projects that reflect my problem-solving skills and love for technology.",
    img: "./logogithub.png",
    url: "https://github.com/Nitinrathore27",
  },
  {
    name: "rathore.nitin",
    post: "Problem Solver",
    comment:
      "As an active participant on Codeforces, I've enjoyed the adrenaline rush of competitive programming. Solving intense contests and interacting with the coding community has significantly enriched my logical thinking and coding abilities.",
    img: "./logocodeforces.png",
    url: "https://codeforces.com/profile/rathore.nitin",
  },
  {
    name: "Nitin Rathore",
    post: "Social Profile",
    comment:
      "Welcome to my LinkedIn profile! I am a highly motivated individual with a strong passion for problem-solving and competitive coding. With a commitment to continuous learning, I thrive on challenges and continuously strive to enhance my coding proficiency.",
    img: "./logolinkdin.png",
    url: "https://www.linkedin.com/in/nitin-rathore-253296200/",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
