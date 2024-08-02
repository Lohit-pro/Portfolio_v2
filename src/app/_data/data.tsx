export type Skill =
  | "FaAngular"
  | "BiLogoSpringBoot"
  | "SiFastapi"
  | "SiFlask"
  | "SiJavascript"
  | "FaHtml5"
  | "FaCss3Alt"
  | "MdOutlineSecurity";

export type Experience = {
  role: string;
  mode: string;
  company: string;
  logo: string;
  description: string;
  skills: Skill[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer - Intern",
    mode: "Hybrid",
    company: "Société Générale",
    logo: "https://lohit-pro.vercel.app/skills/societe_generale.png",
    description:
      "Currently, I am working on building and managing software meant for Financial Risk Management (FRM) in a European-based multinational corporation (MNC).",
    skills: ["FaAngular", "BiLogoSpringBoot", "SiFlask", "SiFastapi"],
  },
  {
    role: "Community Moderator",
    mode: "Remote",
    company: "Discord Server",
    logo: "https://lohit-pro.vercel.app/skills/discord.png",
    description:
      "A moderator in community filled with Car enthusiasts. My role is to resolve conflicts amongst the members, enforce the rules set by admin, assist users in the server and provide feedback. I really am happy being a Mod and manage the server.",
    skills: ["MdOutlineSecurity"],
  },
  {
    role: "Jr. Frontend Engineer",
    mode: "Remote",
    company: "Team Adverseflow",
    logo: "https://lohit-pro.vercel.app/skills/adverseflow.png",
    description:
      "A bit experienced as frontend web developer for five months. Developed the web pages like landing page, member area, redirect page, TOS page and others with the fellow developers in the team.",
    skills: ["FaHtml5", "FaCss3Alt", "SiJavascript"],
  },
];

export const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    description: "Library is a online ecommerce website with a big set of books in every genre. Built with love using HTML, CSS, JavaScript, React.",
    imageUrl: "https://lohit-pro.vercel.app/projects/library.png",
    skills: ["FaReact", "RiTailwindCssFill", "FaHtml5", "FaCss3Alt", "SiJavascript"],
    githubUrl: "https://github.com/Lohit-pro/library",
    url: "https://lohit-pro-library.vercel.app/"
  },
  {
    id: 2,
    name: "1:1 Netflix Clone",
    description: "A 1:1 copy of your favourite video streaming platform. Netflix and chill. Built with love using JavaScript, React, Redux, Firebase.",
    imageUrl: "https://lohit-pro.vercel.app/projects/netflix.png",
    skills: ["FaReact", "RiTailwindCssFill", "SiJavascript", "SiRedux", "IoLogoFirebase"],
    githubUrl: "https://github.com/Lohit-pro/Netflix-Clone",
    url: "https://netflix-clone-wine-beta.vercel.app/"
  },
  {
    id: 3,
    name: "FakeStake - OpenSource",
    description: "Contributing to the FakeStake project, an open-source Next.js application, where I developed a Minesweeper game as a key feature. Additionally, I played a significant role in designing and implementing the user interface, leveraging Next.js's capabilities to create a responsive and dynamic user experience. My work involved optimizing component interactions and ensuring seamless integration with the app's core functionalities.",
    videoUrl: "https://lohit-pro.vercel.app/projects/FakeStake.mp4",
    skills: ["SiNextdotjs", "RiTailwindCssFill", "SiJavascript"],
    githubUrl: "https://github.com/Lohit-pro/FakeStake",
    url: "https://fakestake.vercel.app/"
  },
  {
    id: 4,
    name: "Supply Chain Management using Blockchain",
    description: "Led the way in building AutoBloc's user interface with React.js and Material-UI. Me and my team designed a smooth and user-friendly experience, adding extra security by integrating Metamask wallets. My focus on simplicity and the use of Material-UI components played a key role in making AutoBloc a success.",
    videoUrl: "https://lohit-pro.vercel.app/projects/autobloc_project.mp4",
    skills: ["FaReact", "RiTailwindCssFill", "SiJavascript", "SiMui", "SiSolidity"],
    githubUrl: "https://github.com/Lohit-pro/AutoBlock---BlockChain-based-Automotive-SupplyChain-Management",
    url: ""
  },
  {
    id: 5,
    name: "Team Adverseflow",
    description: "A frontend web developer for five months. Developed the web pages like landing page, member area, redirect page, TOS page and others with the fellow developers in the team.",
    videoUrl: "https://lohit-pro.vercel.app/projects/adverseflow_project.mp4",
    skills: ["FaHtml5", "FaCss3Alt", "SiJavascript"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
  {
    id: 6,
    name: "Driving Affordance using Semantic segmentation",
    description: "Developed a ML model for driving and parking area detection using SegNet architecture, a type of convolutional neural network specifically designed for semantic segmentation, to accurately identify drivable and parkable areas in real-world images. Accuracy: 69.2% on a Cityscapes dataset.",
    videoUrl: "https://lohit-pro.vercel.app/projects/affordance_project.mp4",
    skills: ["FaPython", "SiTensorflow", "SiOpencv"],
    githubUrl: "https://github.com/Lohit-pro/Driving-Affordance-using-SegNet",
    url: ""
  },
  {
    id: 7,
    name: "LiDAR based 3D object detection for autonomous driving",
    description: "Implemented LiDAR-based 3D object detection system for autonomous vehicles using YOLO v4 architecture and Velodyne HDL64 LiDAR(Light Detection and Ranging) sensor, achieving 67.1% accuracy for car detection, 68% accuracy for pedestrian detection, and 72.3% accuracy for cyclist detection.",
    videoUrl: "https://lohit-pro.vercel.app/projects/lidar_project.webm",
    skills: ["FaPython", "SiPytorch"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
  {
    id: 8,
    name: "American Signed Language detection",
    description: "Dive into the world of Computer Vision and Machine Learning. This application employs advanced techniques to interpret American Sign Language (ASL) through real-time hand sign recognition. Made custom dataset for each alphabet using openCV. Note that the video above is just for representation, my original video is missing out, will re-run the code and record the original output soon.",
    videoUrl: "https://lohit-pro.vercel.app/projects/asl_project.mp4",
    skills: ["FaPython", "SiPytorch", "SiOpencv"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
  {
    id: 9,
    name: "Street lights simulation using ARM LPC2148 uC",
    description: "Designed a demo model of street lights which work on the input from Analog to Digital signal Converter(ADC). Using a ARM LPC2148 board and an ADC sensor to take the input, We could switch ON the light when sun light intensity is low and vice versa.",
    videoUrl: "https://lohit-pro.vercel.app/projects/street_light_project.mp4",
    skills: ["CiMicrochip"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
  {
    id: 10,
    name: "Learning Management System Clone",
    description: "To take a break from my ongoing exams, I decided to put my Tailwind CSS skills to the test by quickly cloning my university's Learning Management System's login page. The results are showcased in the above video :)",
    videoUrl: "https://lohit-pro.vercel.app/projects/lms_clone_project.mp4",
    skills: ["FaHtml5", "FaCss3Alt", "RiTailwindCssFill"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
  {
    id: 11,
    name: "Elevator simulation using Digital Circuits",
    description: "In the above proteus simulation, we had used Universal Shift Resistors (USRs) for lifting up the digital ON(1) logic and also to bring down the digital ON(1) logic. The digital ON denotes the elevator position in the building and the LEDs denote the floors of the building. We had designed it for 12 floors.",
    videoUrl: "https://lohit-pro.vercel.app/projects/elevator_project.mp4",
    skills: ["LuBinary", "SiProteus"],
    githubUrl: "https://github.com/Lohit-pro",
    url: ""
  },
];

