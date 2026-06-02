import {
  Project,
  Skill,
  Experience,
  Testimonial,
  Certification,
} from "./types";

export const SKILLS: Skill[] = [
  {
    name: "Python",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "OpenAI API",
    category: "AI/ML",
    icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Three.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    category: "DevOps",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Image Generator",
    description:
      "A generative AI tool creating art from text prompts using Stable Diffusion.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Python", "React", "PyTorch"],
    link: "https://github.com/aniketdeogaonkar/ai-image-generator",
  },
  {
    id: 2,
    title: "Smart Portfolio 3D",
    description:
      "Interactive 3D portfolio website with immersive scroll experiences.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Three.js", "R3F", "GSAP"],
    link: "https://github.com/AniketDeogaonkar/3d_Portfolio",
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    description:
      "Real-time financial data visualization platform with predictive analytics.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["React", "D3.js", "Node.js"],
    link: "https://github.com/aniketdeogaonkar",
  },
  {
    id: 4,
    title: "HealthAI Assistant",
    description: "Chatbot for preliminary medical diagnosis support using NLP.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["NLP", "FastAPI", "Redis"],
    link: "https://github.com/aniketdeogaonkar/health-ai",
  },
  {
    id: 5,
    title: "E-Commerce Microservices",
    description:
      "Scalable backend architecture for high-traffic online stores.",
    image: "https://picsum.photos/600/400?random=5",
    tags: ["Docker", "Kubernetes", "Go"],
    link: "https://github.com/aniketdeogaonkar/ecommerce-microservices",
  },
  {
    id: 6,
    title: "Social Sentiment Analyzer",
    description:
      "Live Twitter/X sentiment analysis dashboard for brand monitoring.",
    image: "https://picsum.photos/600/400?random=6",
    tags: ["Kafka", "React", "Spark"],
    link: "https://github.com/aniketdeogaonkar/social-sentiment",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "Tech Innovators Inc.",
    period: "2024 – Present",
    type: "work",
    logo: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png", // Generic tech company logo
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Solutions Studio",
    period: "2023 – 2024",
    type: "work",
    logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png", // Generic code agency logo
  },
  {
    id: 3,
    role: "BTech Information Technology",
    company: "University of Technology",
    period: "2020 – 2024",
    type: "education",
    logo: "https://cdn-icons-png.flaticon.com/512/807/807483.png", // Generic university logo
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    link: "https://www.credential.net/",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://aws.amazon.com/verification",
  },
  {
    id: 3,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2023",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    link: "https://www.coursera.org/account/accomplishments",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at StartUpX",
    text: "Aniket brings a unique blend of AI expertise and frontend polish. Highly recommended!",
    avatar: "👩‍💻",
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Lead Developer",
    text: "His code is clean, modular, and the 3D implementations are simply stunning.",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Jessica Lee",
    role: "Product Manager",
    text: "Delivered the project ahead of schedule with exceptional attention to detail.",
    avatar: "🚀",
  },
];
