import News from "../images/News.jpg"
import APIs from "../images/APIs.png"
import PlantStore from "../images/PlantStore.png"
import HotelBookingApp from "../images/HotelBookingApp.png";

export const Bio = {
  name: "Ayush Verma",
  roles: "Software Developer",
  description:
    "I have 2+ years of experience. I specialize in developing scable & secure Microservices using C# in ASP.NET Core Web API. I'm also proficient in JavaScript, React JS, and Express JS for building robust and scalable frontend &  backend systems. Excellent analytical, problem-solving skills and commited to delivering high-quality code, with a track record of meeting & exceeding project goals. I'm passionate about learning new technologies and thrive on tackling new challenges with a positive attitude and a growth mindset.",
  github: "https://github.com/Ayush1099",
  resume: "https://drive.google.com/file/d/1xn1o1MZVVUgJKuvncN1hff16RfNk1aRQ/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/ayush-verma-110283190/",
  emailId: "ayush99verma@gmail.com",
  phone: "7972352688 / 9421801348",
  country: ", India",
  state: "Goa"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React JS",
        image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "C#",
        image: "https://cdn.worldvectorlogo.com/logos/c--4.svg"
      },
      {
        name: "C++",
        image: "https://cdn.worldvectorlogo.com/logos/c.svg"
      },
      {
        name: "Node JS",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express JS",
        image: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "MySQL",
        image: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg",
      },
      {
        name: "REST API",
        image: "https://cdn-icons-png.flaticon.com/512/10195/10195226.png?ga=GA1.1.238019527.1696140306"
      },
      {
        name: "ASP.NET Core",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "GitHub",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "VS Code",
        image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
      },
      {
        name: "Visual Studio",
        image: "https://cdn.worldvectorlogo.com/logos/visual-studio-2013.svg",
      },
      {
        name: "Azure DevOps",
        image: "https://149765861.v2.pressablecdn.com/wp-content/uploads/2020/01/devops.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png",
    role: "System Engineer",
    company: "Infosys Ltd.",
    date: "1st May 2022 - Present",
    desc: ["Collaborated with cross-functional teams in a fast-paced agile environment providing user story updates in daily scrum calls.",
    "Developed Microservices using C# in ASP.NET Core Web API 6.0 following CQRS design pattern.",
    "Implemented SOLID Principles using Singleton and Dependency Injection pattern.",
    "Unit tested Microservices using XUnit, achieving code coverage above 80%.",
    "Integrated Swagger for API documentation and testing/troubleshooting.",
    "Worked on migration of MuleSoft Application to .NET Core.",
    "Implemented JWT mechanism for authentication, authorization and Fluent Validation for request parameters.",
    "Contributed to the development of an Audit Framework for a specific application, ensuring comprehensive user activity logging and contributing to system accountability.",
    "Consulted with QA engineers to test specific work items, resolve bugs and address customer’s feedback.",
    "Mentored team members on processes, application features and provided constructive feedback on PRs resulting in increased team productivity."],
    skills: ["C#", "ASP.NET Core Web API", ".NET Framework", "Microservices", "CQRS", "Unit Testing (XUnit)"]
  },
  {
    id: 1,
    img: "https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png",
    role: "System Engineer Trainee",
    company: "Infosys Ltd",
    date: "17th February 2022 – 28th April 2022",
    desc: ["Received training in Java, C#, .NET Core, MySQL and MS SQL."],
    skills: ["Java", "C#", "ASP.NET Core Web API", "MySQL", "MSSQL"],
  },
  {
    id: 2,
    img: "https://ritgoa.ac.in/wp-content/uploads/2021/06/Anant-Infomedia-Pvt.-Ltd..jpg",
    role: "Software Support Executive",
    company: "Anant Infomedia Pvt Ltd",
    date: "4th October 2021 - 12th February 2022",
    desc: ["Contributed to coding, testing & debugging websites of various projects.", "Developed new features from scratch by modifying frontend & backend web pages."],
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Angular", "CodeIgniter", "SQL Server",],
  },
];

export const education = [
  {
    id: 0,
    img: "https://pccegoa.edu.in/wp-content/uploads/2022/03/cropped-NEW-PCCE-LOGO.png",
    school: "Padre Conceicao College of Engineering – Goa University",
    degree: "Bachelor’s Degree in Mechanical Engineering",
    date: "2017-2021",
    grade: "70.6%",
  },
  {
    id: 1,
    img: "https://www.vidyavikasacademy.edu.in/new/wp-content/uploads/2021/06/logopage-235x300.png",
    school: "Vidya Vikas Academy - Goa",
    date: "2017",
    grade: "72.8%",
    degree: "Higher Secondary (12th)",
  },
  {
    id: 2,
    img: "https://www.vidyavikasacademy.edu.in/new/wp-content/uploads/2021/06/logopage-235x300.png",
    school: "Vidya Vikas Academy - Goa",
    date: "2015",
    grade: "8.8 CGPA",
    degree: "Senior Secondary (10th)",
  },
];

export const projects = [
  {
    id: 0,
    title: "News App",
    image: News,
    description: ["This is a News Application which shows Daily news of various categories. Developed Using Function based component"],
    tags: ["JavaScript", "React JS", "HTML", "CSS", "Style-Components", "GitHub"],
    github: "https://github.com/Ayush1099/NewsApp",
  },
  {
    id: 1,
    title: "APIs",
    image: APIs,
    description: ["This is a Backend Application consisting of two APIs of type GET and POST method to create and fetch User Details from DB. Implemented JWT mechanism for Authentication and Authorization. Integrated Swagger for API Documentation and Testing. Implemented validations for Request parameters."],
    tags: ["JavaScript", "Node JS", "Express JS", "MongoDB", "Postman", "Swagger", "GitHub"],
    github: "https://github.com/Ayush1099/APIs",
  },
  {
    id: 2,
    title: "Plant Store",
    image: PlantStore,
    description: ["This is an Plant Store application where the user can perform CRUD operations like Create, Read, Update and Delete Plants. It has a Cart feature using which the user can purchase the plants."],
    tags: ["JavaScript", "ASP.NET Core MVC", "C#", "MSSQL", "GitHub"],
    github: "https://github.com/Ayush1099/PlantStore.git",
  },
  {
    id: 3,
    title: "Hotel Booking App",
    image: HotelBookingApp,
    description: ["This is a Hotel Booking App where the user can Book Hotels and also Update and Delete the Bookings. Implemented JWT mechanism for Authentication and Authorization. Implemented Error Handling Middleware."],
    tags: ["JavaScript", "React JS", "Node JS", "Express JS", "MongoDB", "GitHub"],
    github: "https://github.com/Ayush1099/HotelBookingApp.git",
  },
];