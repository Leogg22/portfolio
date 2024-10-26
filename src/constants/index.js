import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";
export const HERO_CONTENT = `I’m a Computer Science student with a solid foundation in full-stack development, skilled in crafting scalable applications using C#, MySQL, and C++. With hands-on experience from multiple projects and internships, I’m focused on developing innovative tech solutions that enhance usability and drive impact.`;

export const EDUCATION =  [
    {
        year: "2024 - 2028",
        degree: "Bachelor of Science in Computer Science",
        institution: "South Texas College",
        location: "South Texas, TX",
        description: "Studying core computer science concepts including software engineering, data structures, algorithms, and artificial intelligence."
    },
    {
        year: "2020 - 2024",
        degree: "High School Diploma with a focus on Technical Programming",
        institution: "Reynosa Technical High School",
        location: "Reynosa, Tamaulipas, Mexico",
        description: "Completed coursework in programming fundamentals, database design, and systems analysis, with hands-on experience in C, MySQL, and Access."
    }
];

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Software Engineering Intern",
    company: "Reynosa Technical Support",
    description: `Assisted users with technical support, performed preventive and corrective maintenance on computer systems, managed local networks, and contributed to hardware and software sales. Gained hands-on experience in troubleshooting and system maintenance.`,
    technologies: ["Technical Support", "Networking", "Hardware Maintenance", "Sales"],
  },
  {
    year: "2023 - 2024",
    role: "Software Engineering Intern",
    company: "Computation Solutions",
    description: `Developed software solutions as a solo engineer, focusing on building and maintaining custom applications. Collaborated with team members to meet project goals and ensured smooth software performance through rigorous testing and debugging.`,
    technologies: ["C#", "MySQL", "Azure"],
  },
  {
    year: "2021",
    role: "Project Lead - FanID",
    company: "High School Project",
    description: `Led a team in designing and implementing a ticketing system for a soccer league. Oversaw development, from database design to application logic, and coordinated project tasks among team members.`,
    technologies: ["C", "Database Design", "Project Management"],
  },
  {
    year: "2020",
    role: "Freelance Developer",
    description: `Developed and customized relational databases and e-commerce platforms for small businesses. Created instructional videos for database setup and design in Access and MySQL.`,
    technologies: ["Access", "MySQL", "WordPress"],
  },
];

export const PROJECTS = [
  {
    title: "FanID Ticketing System",
    image: project1,
    description:
      "A ticket management system designed for a soccer league, featuring secure user authentication, ticket purchase, and database integration for real-time tracking.",
    technologies: ["C", "Database Design", "Project Management"],
  },
  {
    title: "Cyberpuerta Store Database",
    image: project2,
    description:
      "A relational database modeled after an e-commerce store, including interconnected tables for products, sales, and customer data, with efficient querying capabilities.",
    technologies: ["Microsoft Access", "MySQL"],
  },
  {
    title: "E-Commerce Website",
    image: project3,
    description:
      "A comprehensive e-commerce platform with product catalog, shopping cart, and checkout functionalities, customized for small business needs.",
    technologies: ["WordPress", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Currency Exchange System",
    image: project4,
    description:
      "A currency exchange application that allows users to view and calculate exchange rates, with secure and optimized data handling.",
    technologies: ["C#", "Visual Studio Code", "MySQL"],
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
