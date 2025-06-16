import { motion } from "framer-motion";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

const PROJECTS = [
  {
    title: "Room Rental System",
    image: project4,
    description:
      "Full-stack web app managing rental listings with user authentication and booking. Built with Django & PostgreSQL; React frontend integration planned.",
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "React (Planned)"],
  },
  {
    title: "E-Commerce System",
    image: project2,
    description:
      "Python backend for product management, order processing, and inventory tracking. Scalable architecture with plans for Django + React full-stack.",
    technologies: ["Python", "MySQL", "CLI Logic", "Django (Planned)"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Personal portfolio built with React.js showcasing projects, skills, and contacts. Responsive with interactive routing using React Router.",
    technologies: ["React.js", "CSS", "React Router"],
  },
  // {
  //   title: "CRUD API Project",
  //   image: project1,
  //   description:
  //     "Django REST API with full CRUD operations for data management. Secure endpoints and structured backend learning project.",
  //   technologies: ["Django REST Framework", "Python", "PostgreSQL"],
  // },
  {
    title: "University Database Management",
    image: project2,
    description:
      "Relational database design for university records using PostgreSQL and Oracle SQL. Normalized tables, indexing, and constraints ensure data integrity.",
    technologies: ["PostgreSQL", "Oracle SQL", "Database Design", "ER Modeling"],
  },
  {
    title: "Data Analysis with Python",
    image: project4,
    description:
      "Performed exploratory data analysis (EDA) on real datasets using Pandas and NumPy. Visualizations with Matplotlib and Seaborn reveal key insights.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
  },
  // {
  //   title: "AWS Data Engineering (Academy Labs)",
  //   image: project3,
  //   description:
  //     "Built ETL pipelines & dashboards with AWS Glue, S3, Kinesis, and QuickSight. Focused on real-time data ingestion, transformation, and analytics visualization.",
  //   technologies: ["AWS", "S3", "Glue", "Kinesis", "QuickSight"],
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center lg:flex-nowrap"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 px-4"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
