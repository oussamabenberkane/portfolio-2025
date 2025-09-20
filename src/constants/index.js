export const myProjects = [
    {
        id: 1,
        title: "Voteer Platform",
        description:
            "Backend system powering 5 frontend apps with real-time voting and up to 100 concurrent users.",
        subDescription: [
            "⚡ Optimized performance with Hazelcast distributed caching and vertical scaling.",
            "☁️ Managed AWS migration (Ireland → Paris) and built a staging environment for smoother deployments.",
            "🔧 Designed scalable backend architecture supporting multiple clients and live usage.",
        ],
        href: "https://voteer.com",
        logo: "/assets/logos/voteer.jpeg",
        image: "/assets/projects/voteer.mp4",
        tags: [
            { id: 1, name: "Java", path: "/assets/logos/java.svg" },
            { id: 2, name: "Spring Boot", path: "/assets/logos/spring.svg" },
            { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
            { id: 4, name: "AWS", path: "/assets/logos/aws.svg" },
        ],
    },
    {
        id: 2,
        title: "IDS Delivery Management Platform",
        description:
            "Freelance project for a Canadian regional delivery company.",
        subDescription: [
            "🚚 Delivery management with proof-of-delivery photos and automatic geolocation for each transaction (pharmacy, agent, date, quantity).",
            "📊 Dashboard with monthly/yearly statistics and Excel export, improving visibility into operations.",
            "🖥️ Web platform (React + Tailwind) for managers, and a companion mobile app (React Native) for delivery agents.",
            "👥 50+ pharmacies and 90+ delivery agents before internal company conflicts halted production rollout.",
        ],
        href: "https://idslivraisonexpress.com",
        logo: "/assets/logos/ids.png",
        image: "/assets/projects/ids.mp4",
        tags: [
            { id: 1, name: "Java", path: "/assets/logos/java.svg" },
            { id: 2, name: "Spring Boot", path: "/assets/logos/spring.svg" },
            { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
            { id: 4, name: "React", path: "/assets/logos/react.svg" },
            { id: 5, name: "React Native", path: "/assets/logos/react.svg" },
            { id: 6, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
        ],
    }, {
        id: 3,
        title: "Esprit Livre Bookstore",
        description:
            "E-commerce platform for an Algerian bookstore with multilingual support and full order management.",
        subDescription: [
            "📚 Mobile-first bookstore app with catalog browsing, search, filters, and secure checkout.",
            "🌍 Multilingual (FR/EN/AR) with RTL support, making it accessible to a wide audience.",
            "🛒 Admin panel for managing books, orders, users, and analytics with real-time updates.",
        ],
        href: "https://espritlivre.com",
        logo: "/assets/logos/coming-soon.png",
        image: "/assets/projects/coming-soon.mp4",
        tags: [
            { id: 1, name: "Java", path: "/assets/logos/java.svg" },
            { id: 2, name: "Spring Boot", path: "/assets/logos/spring.svg" },
            { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
            { id: 4, name: "React", path: "/assets/logos/react.svg" },
            { id: 6, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
        ],
    }
    ,
    {
        id: 4,
        title: "Barreau de Béjaïa Portal",
        description:
            "Official web portal for 1,000+ lawyers with multilingual support and document system.",
        subDescription: [
            "🌐 Built and deployed with Django + SQLite backend and responsive Bootstrap frontend.",
            "📄 Enabled real-time publishing of announcements, activities, and downloadable forms.",
            "📱 Designed scalable and mobile-friendly architecture to improve transparency.",
        ],
        href: "https://barreaubejaia.com",
        logo: "/assets/logos/barreau.svg",
        image: "/assets/projects/barreau.mp4",
        tags: [
            { id: 1, name: "Django", path: "/assets/logos/django.svg" },
            { id: 2, name: "SQLite", path: "/assets/logos/sqlite.svg" },
            { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
            { id: 4, name: "HTML5", path: "/assets/logos/html5.svg" },
        ],
    },
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "https://wa.me/213549697533?text=Hello%20Oussama,%20I%20found%20your%20portfolio!",
        icon: "/assets/socials/whatsApp.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/oussama-benberkane",
        icon: "/assets/socials/linkedIn.svg",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/oussbytheway",
        icon: "/assets/socials/instagram.svg",
    },
];

export const experiences = [
    {
        title: "Tech-Instinct · Full Time",
        job: "Nov 2023 - Present",
        date: "Back End Engineer",
        contents: [
            "🚀 Engineered and optimized the Voteer backend, powering 5 frontend apps with 100+ concurrent users; boosted performance with Hazelcast caching and vertical scaling.",
            "☁️ Led AWS migration from Ireland to Paris, creating a dedicated staging environment that improved reliability and streamlined deployments.",
            "🛠️ Designed the backend architecture for the FAST after-sales service module in a microservice setup; contributed to enabling offline-first PWA functionality.",
            "🤝 Mentored a backend intern on an accounting app API, teaching best practices in Spring Boot, API design, and integration testing.",
        ],
    },
    {
        title: "University of Bejaia · Full Time",
        job: "Sep 2023 - Jan 2024",
        date: "Adjunct Professor",
        contents: [
            "📚 Taught Object-Oriented Programming workshops to 2nd-year Computer Engineering students, making complex concepts accessible through practical coding sessions.",
        ],
    },
    {
        title: "MSolution · Part Time",
        job: "Jan 2023 - Nov 2023",
        date: "Fullstack Developer",
        contents: [
            "🌐 Developed and launched barreaubejaia.com, the official portal for 1,000+ regional lawyers, offering multilingual access (Arabic, French, English).",
            "⚡ Built with Django + SQLite and a responsive Bootstrap frontend; enabled real-time announcements, council updates, and instant document downloads.",
            "📱 Delivered a scalable, mobile-friendly platform that improved transparency and streamlined communication between the bar council and its members.",
        ],
    },
    {
        title: "CHU Béjaïa · Full Time",
        job: "May 2023 - Jul 2023",
        date: "Deep Learning Intern",
        contents: [
            "🧠 Trained a CNN model on 1,700+ MRI images (with augmentation) using TensorFlow, achieving 93% accuracy in neurosurgical decision prediction.",
            "💻 Integrated the model into a Django web app, allowing medical students to practice surgical decision-making through interactive MRI quizzes.",
            "🎯 Delivered the solution as a decision-support and training tool, reducing dependency on real patient cases in early-stage education.",
        ],
    },
    // {
    //     title: "Rival School · Part Time",
    //     job: "Apr 2023 - Jun 2023",
    //     date: "Coding Instructor",
    //     contents: [
    //         "👨‍🏫 Introduced students to Python fundamentals, core programming principles, and problem-solving strategies through engaging, hands-on lessons.",
    //     ],
    // },
];

export const reviews = [
    {
        name: "Basketball",
        username: "@soummamclub",
        body: "Vice-President of Soummam Basketball Club Akbou. I still play actively and enjoy the community and team spirit around the game.",
        img: "/assets/hobbies/basketball.png",
    },
    {
        name: "Music",
        username: "@guitar",
        body: "I sing and play guitar solo at home and sometimes jam with friends.",
        img: "/assets/hobbies/guitar.png",
    },
    {
        name: "Fitness and Well-being",
        username: "@balance",
        body: "When I'm not playing basketball, I split my time between the gym and yoga.",
        img: "/assets/hobbies/wellbeing.png",
    },
    {
        name: "Cooking",
        username: "@chef",
        body: "I enjoy cooking traditional Algerian food and experimenting with new recipes, mostly for myself and sometimes friends.",
        img: "/assets/hobbies/cooking.png",
    },
    {
        name: "Gaming",
        username: "@indiegames",
        body: "I like playing indie and story-driven games casually in my free time.",
        img: "/assets/hobbies/gaming.png",
    },
    {
        name: "Reading",
        username: "@books",
        body: "I read philosophy and novels, and I prefer holding a physical book in my hands.",
        img: "/assets/hobbies/reading.png",
    },
    {
        name: "Teaching",
        username: "@mentor",
        body: "I love sharing knowledge, teaching high-schoolers my favorite subjects.",
        img: "/assets/hobbies/teaching.png",
    },
    {
        name: "Storytelling",
        username: "@movies",
        body: "I enjoy movies, series, and documentaries.",
        img: "/assets/hobbies/cinema.png",
    },
];
