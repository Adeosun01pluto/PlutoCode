const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  // {
  //   name: "Skills",
  //   link: "#skills",
  // },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 85, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Pluto brought creativity and precision to the team, delivering a smooth user experience with real-time logistics and order tracking features. His frontend work helped HandyRide launch faster.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Engineer (Contract)",
    date: "April 2025 - June 2025",
    responsibilities: [
      "Developed and maintained the HandyRide.ng logistics and food delivery platform with real-time tracking.",
      "Implemented real-time features and order updates using Firebase.",
      "Built responsive UIs with React.js and Tailwind CSS optimized for mobile users.",
    ],
  },
  {
    review:
      "Working with Pluto was seamless—he translated ideas into functional, scalable applications. Every delivery was top-notch and efficient.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer (Freelance)",
    date: "2024 - 2025",
    responsibilities: [
      "Built and deployed responsive web apps for clients using React.js, TypeScript, and Tailwind CSS.",
      "Collaborated with clients to understand needs and deliver tailored digital solutions.",
      "Focused on building accessible and scalable frontend components.",
    ],
  },
  {
    review:
      "Pluto’s teaching style was hands-on and impactful. He helped our students grasp complex frontend concepts with ease.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Frontend Development Instructor",
    date: "September 2023 - April 2024",
    responsibilities: [
      "Taught React.js, Next.js, and Tailwind CSS through live projects and mentorship sessions.",
      "Reviewed students’ code, ensuring clean, optimized, and scalable solutions.",
      "Guided learners in debugging, UI/UX design, and performance tuning.",
    ],
  },
  // {
  //   review:
  //     "Pluto’s work on the Jhay platform was a game changer. He delivered real-time features and a clean UI that users loved.",
  //   imgPath: "/images/exp4.png",
  //   logoPath: "/images/logo4.png",
  //   title: "Frontend Engineer (Contract)",
  //   date: "January 2023 - March 2023",
  //   responsibilities: [
  //     "Developed Jhay, a P2P transaction platform with secure login and real-time updates using Firebase.",
  //     "Built intuitive chat features and live transaction tracking.",
  //     "Crafted sleek and responsive UI components with React.js and Tailwind CSS.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Chika Nwosu",
    mentions: "@chika-handyride",
    review:
      "Pluto delivered a frontend that truly elevated the HandyRide platform. The real-time features and mobile responsiveness he implemented made a huge difference in how our customers interact with the service. Highly dependable and quick to respond.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Tolu Adebayo",
    mentions: "@tolu_uiux",
    review:
      "As a designer, I’ve worked with several frontend devs, but Pluto stands out. He translated my Figma designs into pixel-perfect components using React and Tailwind. Always collaborative and solution-driven.",
    imgPath: "/images/client2.png",
  },
  {
    name: "James Owolabi",
    mentions: "@jameso.dev",
    review:
      "Pluto was the lead frontend developer on the Jhay P2P project, and his work was crucial in launching on time. From real-time chat to live transaction updates, he handled everything with precision and speed.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Sarah Benson",
    mentions: "@sarahcodes",
    review:
      "Pluto mentored our dev cohort at Alpha Tech Hub and brought an incredible energy to the classroom. His teaching made complex topics like React hooks and API integrations easy to grasp. The students loved him!",
    imgPath: "/images/client4.png",
  },
  {
    name: "David Ajayi",
    mentions: "@davtechagency",
    review:
      "We hired Pluto to build a landing page for a product launch. He exceeded expectations, delivering fast-loading, responsive pages that helped us convert more users. Professional and creative!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Halima Yusuf",
    mentions: "@halimastudio",
    review:
      "Pluto’s freelance work for my photography portfolio site was flawless. He implemented animations, galleries, and a contact form with perfect responsiveness across devices. Super reliable and easy to work with.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "whatsapp",
    imgPath: "/images/whatsapp.png", // Make sure you have a whatsapp.png image in your public/images folder
    link: "https://wa.me/417040877605", // Updated for Switzerland (41) and your number, assuming local format
  },
  {
    name: "x", // This is for Twitter
    imgPath: "/images/x.png",
    link: "https://x.com/engineer_pluto",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/adeosun-pluto-11489a24b/",
  },
  {
    name: "tiktok", // Make sure you have a tiktok.png image
    imgPath: "/images/tiktok.png",
    link: "https://www.tiktok.com/@codeby_pluto", // TikTok profile URL
  }
]
export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
