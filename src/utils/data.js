import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
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
    name: "Flutter Devloapment",
    projects: 1,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const AboutMe = [
"I am Nitin Rathore, Btech final year student at NIT Patna ECE Department. I was born and raised up in Kota, Rajasthan",
"I am a person who belives in the importance of technological advancement and software revolutions",
"I have deep intrest in Problem Solving & Web Devloapment" 
];

export const workExp = [
   {
    place: "HUGG.CO.IN",
    tenure: "June 2023 - July 2023",
    role: "Frontend Developer",
    detail:
      "I designed and build user interfaces for a mental health organization's website, ensuring a welcoming and accessible digital experience , Continuously learn and grow in the field of web development while maintaining high coding standards to contribute effectively to the organization's mission.",
    },
  {
    place: "IEEE SB NITP",
    tenure: "July 2023 - Present",
    role: "Chairperson",
    detail: 
     "Visionary leader of IEEE Student Branch,coordinating technical , workshops & seminars,Collaborate with team, manage budgets, and represent the branch at IEEE meetings,Foster academic engagement, professional development, and membership growth.",  
    },
    {
      place: "IEEE SB NITP",
      tenure: "July 2022 - July 2023",
      role: "Treasurer",
      detail:
        " Treasurer overseeing budget allocation and financial management,Collaborate with Chairperson and executive team to plan and execute events,Ensure compliance with financial regulations and maintain transparent financial records.",  
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
    url : "https://www.linkedin.com/in/nitin-rathore-253296200/",
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
