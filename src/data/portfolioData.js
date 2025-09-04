// src/data/portfolioData.js
// 🎨 EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO

const portfolioData = {
  // Personal Information
  personal: {
    name: "Omini, Frank", // 👈 Change to your name
    title: "Full Stack Developer & Software Engineer", // 👈 Your job title
    logo: "OF", // 👈 Your logo/initials
    profileImage: "/images/studiopiix.jpg", // 👈 Your photo URL or "/images/profile.jpg"
    email: "ominifrank@gmail.com", // 👈 Your email
    phone: "+(234) 08072009417 ", // 👈 Your phone
    location: "Cross River, Nigeria", // 👈 Your location
    bio: "I'm a passionate full-stack developer with 5+ years of experience creating web applications and digital experiences. I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, beautiful designs.", // 👈 Your bio
    tagline: "I create beautiful, responsive web applications. Passionate about clean code and innovative solutions.", // 👈 Your tagline
    resumeUrl: "/documents/resume.pdf" // 👈 Add your resume to public/documents/
  },

  // Social Links
  social: {
    github: "https://github.com/ubifranklin",
    linkedin: "https://linkedin.com/in/omini_frank",
    twitter: "https://twitter.com/ominifrank",
    portfolio: "https://ominifrank.dev",
    instagram: "https://instagram.com/frankkex"
  },

  // Skills (name and percentage 0-100)
  skills: [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "CSS/SASS", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 90 },
    { name: "Figma", level: 85 }
  ],

  // Services/Expertise
  services: [
  
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Flutter for iOS and Android."
    },
    {
      icon: "💻",
      title: "Software Engineering",
      description: "Designing, developing, and deploying scalable software solutions with clean architecture, optimized algorithms, and reliable performance across platforms."
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Building robust server-side applications, RESTful APIs, and microservices with secure authentication, data processing, and high availability."
    },
    {
      icon: "🌐",
      title: "Frontend Development",
      description: "Developing responsive, accessible, and high-performance user interfaces using modern frameworks such as React, with a focus on maintainability."
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on cloud platforms (AWS, Azure, Firebase), implementing CI/CD pipelines, and ensuring scalability and reliability."
    },
    {
      icon: "🗄️",
      title: "Database Engineering",
      description: "Designing and optimizing relational and NoSQL databases, ensuring data integrity, indexing, and efficient query performance for large-scale systems."
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Built with React, Node.js, and integrated with Stripe for payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop", // 👈 Replace with your project image
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Material-UI"],
      liveLink: "https://ecommerce-demo.netlify.app",
      githubLink: "https://github.com/johndoe/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Investment Portfolio Tracker",
      description: "Real-time investment tracking dashboard with data visualization, portfolio analytics, and market insights. Features include stock price tracking, profit/loss calculation, and interactive charts.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop", // 👈 Replace with your project image
      tech: ["React", "Chart.js", "Alpha Vantage API", "Redux", "CSS3"],
      liveLink: "https://investment-tracker-demo.netlify.app",
      githubLink: "https://github.com/johndoe/investment-tracker",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management tool that allows users to schedule posts, track engagement, and analyze performance across multiple platforms. Built with modern React and integrated with social media APIs.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop", // 👈 Replace with your project image
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "OAuth"],
      liveLink: "https://social-dashboard-demo.netlify.app",
      githubLink: "https://github.com/johndoe/social-media-dashboard",
      featured: true
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      liveLink: "https://taskmaster-app.netlify.app",
      githubLink: "https://github.com/johndoe/task-management",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["React", "OpenWeather API", "Geolocation", "Chart.js"],
      liveLink: "https://weather-forecast-pro.netlify.app",
      githubLink: "https://github.com/johndoe/weather-app",
      featured: false
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description: "A community-driven platform for sharing and discovering recipes with user reviews, ratings, and meal planning features.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      liveLink: "https://recipe-share-platform.netlify.app",
      githubLink: "https://github.com/johndoe/recipe-platform",
      featured: false
    },
    {
      id: 7,
      title: "FinTech E-Banking Platform",
      description: "A secure digital banking platform offering user account management, fund transfers, bill payments, loan applications, and real-time transaction monitoring. Features two-factor authentication and an intuitive dashboard.",
      image: "/images/fintech", // 👈 Replace with your project image
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
      liveLink: "https://fintech-banking-demo.netlify.app",
      githubLink: "https://github.com/johndoe/fintech-ebanking-platform",
      featured: true
    },
    {
      id: 8,
     title: "M-Health Platform",
      description: "A mobile-first healthcare platform connecting patients with doctors for online consultations, prescriptions, and health record management. Includes appointment scheduling, video chat, and AI-powered symptom checker.",
      image: "/images/mhealthui-ux.jpg", // 👈 Replace with your project image
      tech: ["React Native", "Firebase", "Node.js", "Express", "Twilio API", "Tailwind CSS"],
      liveLink: "https://mhealth-demo.netlify.app",
      githubLink: "https://github.com/johndoe/mhealth-platform",
      featured: true
    },
    {
      id: 9,
      title: "Online Betting Platform",
      description: "An interactive online sports betting and gaming platform with live odds, secure wallet integration, bet history, and real-time score tracking. Includes responsible gaming controls and admin analytics dashboard.",
      image: "/images/betting.jpeg", // 👈 Replace with your project image
      tech: ["React", "Redux", "Node.js", "PostgreSQL", "Socket.io", "Material-UI"],
      liveLink: "https://betting-demo.netlify.app",
      githubLink: "https://github.com/johndoe/betting-platform",
      featured: true
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "John delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Working with John was a game-changer for our startup. He transformed our ideas into a beautiful, functional product that our users love."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "John's design skills and technical knowledge are outstanding. He created a website that perfectly represents our brand and drives results."
    }
  ],

  // Contact Form Configuration
  contact: {
    formspreeEndpoint: "https://formspree.io/f/your-form-id", // 👈 Replace with your Formspree endpoint
    emailjs: {
      serviceId: "your_service_id",
      templateId: "your_template_id",
      publicKey: "your_public_key"
    }
  },

  // Colors & Theme
  theme: {
    primary: "#4f46e5", // Indigo
    secondary: "#ef4444", // Red
    accent: "#f59e0b", // Amber
    success: "#10b981", // Emerald
    dark: "#1f2937", // Gray-800
    light: "#f9fafb", // Gray-50
    text: "#374151", // Gray-700
    textLight: "#6b7280" // Gray-500
  },

  // Animation & UI Settings
  settings: {
    enableAnimations: true,
    enableParticles: false,
    enableDarkMode: false,
    showScrollProgress: true,
    enableTypingAnimation: true
  }
};

export default portfolioData;