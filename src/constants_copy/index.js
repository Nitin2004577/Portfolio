// 🖼️ Import all project images
import project1 from "/src/assets/images/project-1.jpg"; // CRUD API
import project2 from "/src/assets/images/project-2.jpg"; // E-Commerce
import project3 from "/src/assets/images/project-3.jpg"; // Portfolio
import project4 from "/src/assets/images/project-4.jpg"; // Room Rental
import project5 from "/src/assets/images/project-2.jpg"; // University DB
import project6 from "/src/assets/images/project-1.jpg"; // Data Analysis
import project7 from "/src/assets/images/project-4.jpg"; // AWS Data Eng

// 🧠 Hero Text
export const HERO_CONTENT = `I am an aspiring Full Stack Developer with a strong foundation in React.js, Django, Python, and SQL. Currently pursuing a B.Sc. (Hons) in Computing at Itahari International College, I specialize in building scalable, secure, and user-friendly web applications. I am passionate about learning modern web technologies and delivering real-world software solutions.`;

// 👤 About Me Text
export const ABOUT_TEXT = `I am a dedicated and highly motivated Computer Science student specializing in full-stack web development. My skill set includes React.js for frontend development and Django for backend development, along with database technologies like PostgreSQL and MySQL. I have hands-on experience building projects like a Room Rental System, E-commerce platform, and a personal developer portfolio. With a passion for clean architecture, code maintainability, and continuous learning, I aim to contribute to impactful and efficient web solutions.`;

// 💼 Experience
export const EXPERIENCES = [
  {
    year: "Jan 2024 – Feb 2024",
    role: "Frontend Developer Intern",
    company: "Remote Internship",
    description: `Developed and styled responsive webpages using HTML, CSS, and JavaScript. Improved UI consistency and collaborated with team members to refine design and layout across multiple web pages.`,
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

// 💻 Projects
export const PROJECTS = [
  {
    title: "Room Rental System",
    image: project4,
    description:
      "Full-stack web application to manage rental listings with user authentication and booking features. Built using Django (backend) and PostgreSQL, with plans for React integration in the frontend.",
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "React (Planned)"],
  },
  {
    title: "E-Commerce System",
    image: project2,
    description:
      "A Python-based backend system for product management, order processing, and inventory tracking. Designed with a scalable structure and planned to be expanded into a Django + React full-stack application.",
    technologies: ["Python", "MySQL", "CLI Logic", "Django (Planned)"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Personal portfolio website developed using React.js to showcase projects, skills, and contact information. Responsive layout and interactive routing built with React Router.",
    technologies: ["React.js", "CSS", "React Router"],
  },
  {
    title: "CRUD API Project",
    image: project1,
    description:
      "Built a Django REST API with full CRUD operations for managing data. Includes secure endpoints, models, and structured data handling for backend learning.",
    technologies: ["Django REST Framework", "Python", "PostgreSQL"],
  },
  {
    title: "University Database Management System",
    image: project5,
    description:
      "Designed a relational database for university record management using PostgreSQL and Oracle SQL. Implemented normalized tables, indexing, and constraints to ensure data integrity and performance.",
    technologies: ["PostgreSQL", "Oracle SQL", "Database Design", "ER Modeling"],
  },
  {
    title: "Data Analysis Using Python",
    image: project6,
    description:
      "Performed exploratory data analysis (EDA) using Pandas and NumPy on real-world datasets. Visualized insights using Matplotlib and Seaborn to understand patterns and support business decisions.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
  },
  {
    title: "AWS Data Engineering (Academy Labs)",
    image: project7,
    description:
      "Built ETL pipelines and dashboards using AWS Glue, S3, Kinesis, and Quicksight. Focused on real-time data ingestion, transformation, and visualization for data analytics workloads.",
    technologies: ["AWS", "S3", "Glue", "Kinesis", "Quicksight"],
  },
];

// 📬 Contact
export const CONTACT = {
  address: "Itahari, Province No. 1, Nepal",
  phoneNo: "+977 980000000",
  email: "shahnitin500@gmail.com",
  Github: "https://github.com/Nitin2004577",
  Linkdin: "https://www.linkedin.com/in/nitin-kumar-shah-689229326/",
};
