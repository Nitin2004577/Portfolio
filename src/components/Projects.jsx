import { motion } from "framer-motion";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

const projects = [
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
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-neutral-900">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-lg"
      >
        Selected Projects
      </motion.h2>

      <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-sm">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-300 mb-4 leading-relaxed tracking-wide">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-neutral-800/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-purple-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
