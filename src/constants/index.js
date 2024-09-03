import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const INTRO_CONTENT = `"I'm Om Argade, and I am currently pursuing my B.Tech in Computer Science at Sanjivani College of Engineering.With a strong interest in technology and innovation, I am dedicated to expanding my knowledge and skills to contribute meaningfully to the tech industry.`;

export const ABOUT_TEXT = `Currently studying a BTech in Computer Engineering, I'm excited to gain new abilities that will help me advance as a tech industry professional because I appreciate taking on challenging tasks. Domains such as web development, ReactJs, machine learning, and data science really fascinate me. Beyond academics, I am committed to continuous learning and actively seek opportunities to apply my knowledge in real-world projects.`;

export const INTERNSHIP = [
  {
    year: "Dec 2023 -  Feb 2024",
    role: "Full Stack Development Using React",
    company: "Sumago Infotech Pvt lmt.",
    description: `Developing web applications using JavaScript, React.js, and Node.js.`,
    technologies: ["Javascript", "Reactjs", "Bootstrap", "Html",'CSS'],
  },
  
   
];

export const PROJECTS = [
  {
    title: "Power Demand Forcasting Using Arima-Sarima",
    image: project1,
    description:
      "Developed a model with Arima and Sarima that makes predictions about the state of Maharashtra's future power usage based on data on past power consumption.",
    technologies: ["Mysql", "Arima", "Sarima", "Pandas", "Numpy","Seaborn","Matplotlib"],
  },
  {
    title: "Online BookStore Management System",
    image: project2,
    description:
      "Implemented a client server online bookstore website where user can register/login, browse books can add them to cart and can purchase the books from website.",
    technologies: ["HTML", "CSS", "Java", "Javascript","Servlet"],
  },
  {
    title: "Employee Churn Prediction Using Machine Learning",
    image: project4,
    description:
      "Employee churn prediction enables HR departments to identify which employees are most likely to leave the organization. This study employs machine learning to examine factors such as employee satisfaction, last evaluation scores, number of projects, average monthly hours, and time spent at the company. Additionally, it considers an employee's department, pay grade, promotions over the past five years, and work-related incidents. The goal is to predict if an employee will quit, providing a simple yes/no score regarding their likelihood of leaving",
    technologies: ["Logistic-Regression", "DecisionTreeClassifier", "RandomForestClassifier", "XGBClassifier"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills,internships and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Tailwindcss"],
  },

  {
    title: "Airbnb Clone (Ongoing project)",
    image: project3,
    description:
      "Airbnb is an American company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking .",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Tailwindcss","Nodejs"],
  },
  
];

export const CONTACT = {
  address: "Riddhi Siddhi Nagar,Kopargaon,Maharashtra ",
  phoneNo: "+91 9307567668 / +91 7588077710 ",
  email: "argadeom192@gmail.com",
};
