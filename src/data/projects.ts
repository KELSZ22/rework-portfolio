import { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    id: 2,
    title: "ACE Agency Website",
    description:
      "Ace Agency is a job-matching platform where applicants can easily find and apply for jobs, while employers can post openings and inquire directly with qualified candidates.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and TypeScript. Features include user authentication, product management, shopping cart, order processing, payment integration, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory tracking.",
    image: "/app-images/ace-agency.png",
    technologies: ["Next.js", "TypeScript"],
    category: "Web Development",
    live: "https://demo-agency-black.vercel.app/",
  },
  {
    id: 12,
    title: "Paymo: Payroll System",
    description:
      "Paymo Payroll is a dynamic payroll system with role-based access, allowing secure, organized management of salaries, departments, and employee data. It streamlines payroll processing while adapting to multiple teams and organizational structures.",
    longDescription:
      "A full-featured payroll system built with Laravel Inertia and TypeScript. Features include employee management, salary calculations, tax deductions, payment processing, timesheet tracking, and comprehensive reporting. The system ensures accurate payroll processing and compliance with labor regulations.",
    image: "/app-images/paymo.png",
    technologies: ["Laravel", "Inertia.js", "TypeScript"],
    category: "Web Development",
    live: "https://paymo.kelsz.dev/",
  },
  {
    id: 13,
    title: "ACE Agency CMS",
    description:
      "Ace Agency CMS features a robust role-based access control system, allowing secure management of job postings, employer inquiries, and platform content. It ensures that each user level has the right permissions for efficient and organized workflow.",
    longDescription:
      "A powerful content management system built with Laravel Inertia and TypeScript. Features include content creation and editing, user management, role-based access control, media library, SEO tools, and analytics dashboard. The system provides an intuitive interface for managing website content and digital assets.",
    image: "/app-images/ace-cms.png",
    technologies: ["Laravel", "Inertia.js", "TypeScript"],
    category: "Web Development",
    live: "https://ace-cms.kelsz.dev/login",
  },
  {
    id: 11,
    title: "Production Budget Estimate",
    description:
      "Production Budget Estimate is a planning tool used to outline and manage the projected costs of a film or production, helping teams allocate resources, track expenses, and stay within budget.",
    longDescription:
      "A comprehensive budget estimation system built with Laravel Inertia and TypeScript. Features include project cost calculation, resource allocation, budget tracking, expense management, financial reporting, and forecasting tools. The system helps production teams plan and manage budgets effectively.",
    image: "/app-images/production-budget.png",
    technologies: ["Laravel", "Inertia.js", "TypeScript"],
    category: "Web Development",
    live: "https://production-budget.kelsz.dev/",
  },
  // {
  //   id: 1,
  //   title: "Pasadax Application",
  //   description:
  //     "Pasadax is a mobile transportation app designed for tricycles, offering a convenient and reliable way for passengers to book rides—similar to Grab, but built specifically for local tricycle services.",
  //   longDescription:
  //     "A fully featured mobile application built with React Native. Features include user authentication, real-time updates, offline functionality, push notifications, and smooth animations. The app provides an excellent user experience with responsive design and optimized performance.",
  //   image: "/app-images/pasadax.png",
  //   technologies: ["React Native"],
  //   category: "Mobile Development",
  //   live: "https://pasadax.mytao.id/",
  // },
  // {
  //   id: 3,
  //   title: "Tinda Plus App",
  //   description:
  //     "Tinda Plus is a mobile POS application that helps businesses manage sales, inventory, and transactions directly from their phone—simple, fast, and efficient for everyday store operations.",
  //   longDescription:
  //     "A comprehensive mobile application built with React Native. Features include real-time synchronization, offline mode, push notifications, user management, inventory tracking, and sales reporting. The app provides a seamless experience for managing business operations on the go.",
  //   image: "/app-images/tinda-plus.png",
  //   technologies: ["React Native"],
  //   category: "Mobile Development",
  //   live: "https://tindaplus.mytao.id/",
  // },
  {
    id: 4,
    title: "Alphera ERP",
    description:
      "Alphera ERP is a streamlined system for sea-based agencies, designed to manage crew applications, records, and workflows efficiently from recruitment to deployment.",
    longDescription:
      "A full-featured ERP system built with Laravel Inertia and React. Features include inventory management, accounting, human resources, sales and purchase management, reporting dashboards, and multi-user access control. The system streamlines business operations and provides real-time insights.",
    image: "/app-images/alphera.png",
    technologies: ["Laravel", "Inertia.js", "React"],
    category: "Web Development",
    live: "#",
    requiresCredentials: true,
  },
  // {
  //   id: 5,
  //   title: "My Tao App",
  //   description:
  //     "TAO is a mobile platform that connects Filipinos to essential government services, financial aid, training, gig jobs, and local updates—all through a secure digital ID designed for every barangay in the country.",
  //   longDescription:
  //     "A feature-rich mobile application built with Ionic framework. Features include cross-platform support, native device integration, offline capabilities, push notifications, and smooth user experience. The app delivers consistent performance across iOS and Android platforms.",
  //   image: "/app-images/my-tao-app.png",
  //   technologies: ["Ionic"],
  //   category: "Mobile Development",
  //   live: "https://www.mytao.id/",
  // },
  // {
  //   id: 6,
  //   title: "Tinda Plus CMS",
  //   description:
  //     "CTinda Plus CMS is a web-based platform that lets businesses manage their mobile POS operations, including sales, inventory, and reports, all in one centralized dashboard.",
  //   longDescription:
  //     "A comprehensive content management system built with Laravel Inertia and React. Features include content creation and editing, user management, role-based permissions, media library, SEO optimization, and analytics. The system provides an intuitive interface for managing business content and digital assets.",
  //   image: "/app-images/tinda-plus-cms.png",
  //   technologies: ["Laravel", "Inertia.js", "React"],
  //   category: "Web Development",
  //   live: "#",
  //   requiresCredentials: true,
  // },
  {
    id: 7,
    title: "Polland Hopia",
    description:
      "Polland Hopia is an inventory management system designed to track stock, sales, and supplies efficiently, helping businesses stay organized and maintain smooth operations.",
    longDescription:
      "A comprehensive e-commerce platform built with Laravel backend, React frontend, and TanStack for state management. Features include product catalog, shopping cart, order management, payment processing, user authentication, and admin dashboard. The platform provides excellent performance with optimized state management.",
    image: "/app-images/polland.png",
    technologies: ["Laravel", "React", "TanStack"],
    category: "Web Development",
    live: "#",
    requiresCredentials: true,
  },
  // {
  //   id: 8,
  //   title: "E Impok App",
  //   description:
  //     "E-Impok is an online savings and paluwagan platform that helps users securely save, manage contributions, and track their group savings conveniently from their mobile device.",
  //   longDescription:
  //     "A mobile application built with React Native for managing personal finances and savings. Features include expense tracking, savings goals, budget planning, transaction history, financial reports, and secure data storage. The app helps users manage their finances effectively with an intuitive interface.",
  //   image: "/placeholder-project.jpg",
  //   technologies: ["React Native"],
  //   category: "Mobile Development",
  //   live: "https://chatbot.kelsz.dev",
  // },
  {
    id: 9,
    title: "King Panda CMS",
    description:
      "King Panda CMS is a content management system for car dealerships, allowing users to manage listings, promotions, and inventory efficiently from a centralized platform.",
    longDescription:
      "A robust content management system built with Laravel Inertia and TypeScript. Features include content creation and management, user roles and permissions, media handling, SEO tools, and analytics dashboard. The system leverages TypeScript for type safety and improved developer experience.",
    image: "/app-images/kp-cms.png",
    technologies: ["Laravel", "Inertia.js", "TypeScript"],
    category: "Web Development",
    live: "",
    requiresCredentials: true,
  },
  {
    id: 10,
    title: "King Panda Car Deals",
    description:
      "King Panda Car Deals is a car dealership platform that allows users to browse and purchase vehicles online, with features like inventory management, customer inquiries, and appointment scheduling.",
    longDescription:
      "A comprehensive car dealership platform built with Next.js and TypeScript. Features include vehicle listings, search and filtering, inventory management, customer inquiries, appointment scheduling, and admin dashboard. The platform provides excellent performance with server-side rendering and type safety.",
    image: "/app-images/kpsf.png",
    technologies: ["Next.js", "TypeScript"],
    category: "Web Development",
    live: "https://car-deals-store-front.vercel.app/",
  },
];
