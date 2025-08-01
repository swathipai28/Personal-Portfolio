// src/data/portfolioData.ts
import { FaLaptopCode, FaBook, FaMedal, FaEnvelope, FaGithub, FaLinkedin, FaCodeBranch, FaCogs, FaDatabase, FaTools, FaPython, FaJs, FaCuttlefish, FaReact, FaNodeJs, FaServer, FaChartLine, FaFlask, FaEthereum, FaHandshake, FaGlobe, FaStar, FaAward, FaCloud, FaUsers } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiRedis, SiNginx, SiPytorch, SiOpenai, SiGooglecloud } from 'react-icons/si';

// Define types for better organization and type safety (if using TypeScript)
interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface Skill {
  name: string;
  icon?: React.ElementType;
  category: 'Languages' | 'Frameworks & Tools' | 'Databases' | 'Dev Tools' | 'Soft Skills' | 'Spoken Languages';
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string[]; // Array of paragraphs
  techStack: string[];
  techIcons?: React.ElementType[]; // Optional icons
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  dateRange: string;
  yourRole?: string;
  impact?: string[];
  features?: string[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/swathi-pai-a112ab26a', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/swathipai28', icon: FaGithub },
  { name: 'Email', url: 'mailto:swathipaii2004@gmail.com', icon: FaEnvelope },
];

export const heroData = {
  name: 'Swathi N Pai',
  tagline: 'Full-Stack Developer | AI/ML Enthusiast | Building Intelligent & Scalable Solutions',
  shortIntro: 'A passionate Computer Science student with a strong foundation in MERN stack, AI/ML, and blockchain technologies, dedicated to crafting innovative solutions that make an impact.',
  resumeUrl: '/assets/pdf/Final Resume.pdf', // Path to your resume PDF in public/assets/pdf/
location: 'Mangaluru, India',
phone: '+91-9154495854', // Added phone number as per your resume
 email: 'swathipaii2004@gmail.com'
};

export const aboutData = {
  intro: "Hello! I'm Swathi N Pai, a dedicated and innovative Computer Science student currently pursuing my B.E. at Sahyadri College of Engineering. With a strong academic record (9.8 CGPA) and a drive to solve complex problems, I thrive at the intersection of web development and artificial intelligence.",
  paragraph1: "My journey into technology is fueled by a passion for building robust, scalable, and intelligent systems. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack web applications and delve into Python, PyTorch, and Flask for cutting-edge AI/ML and deep learning projects. I'm always eager to learn new technologies and apply them to real-world challenges.",
  paragraph2: "Beyond the code, I believe in effective communication, strong leadership, and collaborative teamwork. My experience leading projects and participating in hackathons has honed my decision-making abilities and my capacity to deliver under pressure. I'm excited to leverage my skills to contribute to impactful and innovative projects.",
};

export const skillsData: Skill[] = [
  // Technical Skills
  { name: 'C', category: 'Languages', icon: FaCuttlefish },
  { name: 'C++', category: 'Languages', icon: SiCplusplus },
  { name: 'Java', category: 'Languages', icon: FaCuttlefish },
  { name: 'HTML', category: 'Languages', icon: FaCodeBranch },
  { name: 'CSS', category: 'Languages', icon: FaCodeBranch },

  { name: 'React.js', category: 'Frameworks & Tools', icon: FaReact },
  { name: 'Node.js', category: 'Frameworks & Tools', icon: FaNodeJs },
  { name: 'Express.js', category: 'Frameworks & Tools', icon: FaServer },
  { name: 'REST APIs', category: 'Frameworks & Tools', icon: FaChartLine },
  { name: 'Flask', category: 'Frameworks & Tools', icon: FaFlask },
  { name: 'PyTorch', category: 'Frameworks & Tools', icon: SiPytorch },
  { name: 'Blockchain', category: 'Frameworks & Tools', icon: FaEthereum },

  { name: 'SQL', category: 'Databases', icon: FaDatabase },
  { name: 'MySQL', category: 'Databases', icon: SiMysql },
  { name: 'MongoDB', category: 'Databases', icon: SiMongodb },

  { name: 'Git', category: 'Dev Tools', icon: FaTools },
  { name: 'GitHub', category: 'Dev Tools', icon: FaGithub },
  { name: 'Postman', category: 'Dev Tools', icon: FaTools },



  // Soft Skills
  { name: 'Communication', category: 'Soft Skills', icon: FaHandshake },
  { name: 'Leadership', category: 'Soft Skills', icon: FaStar },
  { name: 'Decision-making', category: 'Soft Skills', icon: FaStar },
  { name: 'Teamwork', category: 'Soft Skills', icon: FaUsers }, // Assuming FaUsers for teamwork
  
  // Spoken Languages
  { name: 'English', category: 'Spoken Languages', icon: FaGlobe },
  { name: 'Hindi', category: 'Spoken Languages', icon: FaGlobe },
  { name: 'Konkani', category: 'Spoken Languages', icon: FaGlobe },
  { name: 'Kannada', category: 'Spoken Languages', icon: FaGlobe },
  { name: 'Japanese (basic)', category: 'Spoken Languages', icon: FaGlobe },
];

export const projectsData: Project[] = [
  {
    id: 'deeplock',
    name: 'DeepLock – A Multimodal Deepfake Detection System',
    tagline: 'AI + Blockchain for Unforgeable Deepfake Verification',
    imageUrl: '/assets/images/deepfake.jpg',
    dateRange: 'April 2025 – Present',
    techStack: ['Python', 'Flask', 'PyTorch', 'Blockchain (Ethereum)', 'CNNs', 'RNNs', 'OpenCV'],
    techIcons: [FaPython, FaFlask, SiPytorch, FaEthereum, FaCogs],
    description: [
      "DeepLock is an innovative system designed to detect deepfake forgeries across various media types: images, videos, audio, and even handwritten signatures. It leverages advanced deep learning models to ensure authenticity.",
      "The system employs Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) for robust feature extraction and analysis. OpenCV and sophisticated frame analysis are utilized for detailed video and image scrutiny.",
      "A unique aspect of DeepLock is its integration with blockchain technology. Hashed detection verdicts are stored on Ethereum smart contracts, providing an immutable and auditable record of verification results, ensuring transparency and trust."
    ],
    yourRole: "Led the AI model development, including transfer learning and custom loss functions. Implemented blockchain integration for auditability.",
    impact: [
      "Achieved high accuracy in deepfake detection through optimized model architectures and fine-tuning.",
      "Ensures the integrity of digital media by providing verifiable and unalterable detection results.",
    ],
    githubUrl: 'https://github.com/BavithSuvarna/DeepFake.git', // Replace with actual repo
  },
  {
    id: 'asha-aid',
    name: 'AshaAid – A Village Health Tracker',
    tagline: 'MERN Stack Application for Rural Healthcare Management',
    imageUrl: '/assets/images/ashaaid.jpg',
    dateRange: 'May 2025 – June 2025',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
    techIcons: [FaReact, FaNodeJs, FaServer, SiMongodb],
    description: [
      "AshaAid is a comprehensive MERN stack application built to streamline health visit record management in rural communities.",
      "It features role-based access control, allowing ASHA workers, doctors, and administrators to securely manage and access patient data.",
      "Key functionalities include geo-tagging for visit locations, automated follow-up alerts, and specialized tracking for maternal care."
    ],
    yourRole: "Full-stack development, focusing on backend API design and frontend UI/UX for intuitive data entry and visualization.",
    impact: [
      "Improved maternal care tracking by 40%, ensuring timely interventions and better health outcomes.",
      "Provided a centralized dashboard and PDF export features for efficient reporting and data analysis.",
    ],
    githubUrl: 'https://github.com/swathipai28/Village-Health-Tracker.git', // Replace with actual repo
  },
  {
    id: 'neighbridge',
    name: 'NeighBridge – Smart Neighborhood Management System',
    tagline: 'Full-Stack Platform for Community Engagement',
    imageUrl: '/assets/images/neigh.webp',
    dateRange: 'Oct 2024 – Dec 2024',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    techIcons: [FaReact, FaNodeJs, FaServer, SiMysql],
    description: [
      "NeighBridge is a full-stack platform designed to enhance community management and engagement within neighborhoods.",
      "It provides robust role-based login, enabling residents, administrators, and committee members to interact seamlessly.",
      "Features include event creation, real-time announcements, direct contact management, and functionalities for community elections and amenity booking."
    ],
    yourRole: "Developed both frontend and backend components, with a focus on database schema design and query optimization.",
    impact: [
      "Optimized database queries, resulting in faster data retrieval and a more responsive user experience.",
      "Facilitated better communication and organization within neighborhood communities.",
    ],
    githubUrl: 'https://github.com/swathipai28/Neighbourhood_mgt_system.git', // Replace with actual repo
  },
  {
    id: 'rate-limiter-api-gateway',
    name: 'Rate Limiter API Gateway',
    tagline: 'Scalable API Throttling for Security & Load Management',
    imageUrl: '/assets/images/api.webp',
    dateRange: '2025',
    techStack: ['Node.js', 'Express.js', 'Redis', 'NGINX'],
    techIcons: [FaNodeJs, FaServer, SiRedis, SiNginx],
    description: [
      "A high-performance API Gateway designed to implement request rate limiting per user or IP address.",
      "It leverages Redis for efficient storage and retrieval of rate limiting data, ensuring fast and accurate throttling.",
      "NGINX acts as a reverse proxy, distributing incoming traffic and working in conjunction with Express.js logic to enforce the rate limits."
    ],
    yourRole: "Designed and implemented the core rate limiting logic and integrated Redis for caching and NGINX for proxying.",
    impact: [
      "Enhanced API security by preventing abuse and denial-of-service attacks.",
      "Ensured stable API performance under heavy load by effectively managing traffic.",
    ],
    githubUrl: 'https://github.com/ZenVidhath/ratelimterapp.git', // Replace with actual repo
  },
  {
    id: 'examination-management-system',
    name: 'Examination Management System',
    tagline: 'Efficient Platform for Exam Planning & Student Data Management',
    imageUrl: '/assets/images/exam.webp',
    dateRange: 'N/A', // If no specific date range
    techStack: ['Node.js', 'MySQL'],
    techIcons: [FaNodeJs, SiMysql],
    description: [
      "A system designed to streamline the complex process of examination management.",
      "It handles key aspects such as seat allocation, comprehensive exam planning, and efficient management of student data.",
      "The intuitive dashboard provides administrators with centralized control over examination processes."
    ],
    githubUrl: 'https://github.com/swathipai28/ExamManagementSystem', // Replace with actual repo
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio Website',
    tagline: 'Showcasing Skills & Projects in a Modern, Responsive Design',
    imageUrl: '/assets/images/portfolio.webp',
    dateRange: '2025',
    techStack: ['React, Typescript, Tailwind CSS'],
    description: [
       "This responsive and interactive personal portfolio website serves as a central hub to showcase my skills, projects, and achievements as a Full-Stack Developer and AI/ML enthusiast.",
      "Built with modern web technologies, it features a clean, intuitive UI/UX, smooth animations, and is fully optimized for various devices, ensuring an engaging experience for visitors.",
      "The site's modular and component-based architecture allows for easy updates and scalability, reflecting best practices in frontend development.",
      "It leverages data from structured TypeScript files, making content management straightforward and efficient."
    ],
    githubUrl: 'https://github.com/swathipai28/NeighBridge', 
  },
];


export const achievementsData: Achievement[] = [
  {
    id: 'techvision-2025',
    title: 'TechVision 2025 – 2nd Prize',
    description: 'Awarded for building DeepLock, an AI + Blockchain-based deepfake detection system, showcasing innovation in cybersecurity and AI.',
    icon: FaAward,
  },
  {
    id: 'akrithi-fest-2025',
    title: 'Akrithi Fest 2025 – 1st Prize in Research Symposium',
    description: 'Recognized for innovation in presenting ASL (American Sign Language) detection research using AI, demonstrating strong research and presentation skills.',
    icon: FaStar,
  },
  {
    id: 'devhost-hackathon-2024',
    title: 'Devhost Hackathon 2024 – Top 8 Finalist',
    description: 'Achieved top finalist status by building a working prototype under tight time constraints, highlighting rapid prototyping and problem-solving abilities.',
    icon: FaMedal,
  },
  {
    id: 'google-cloud-genai-study-jam',
    title: 'Google Cloud GenAI Study Jam',
    description: 'Successfully completed 15 skill badges in Google Cloud Generative AI, demonstrating proficiency in cutting-edge AI technologies and cloud platforms.',
    icon: FaCloud,
  },
];