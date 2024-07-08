import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 3,
        name: 'Payr',
        description: 'The Student Scheduling and Mentorship App is designed to facilitate effective time management and mentorship for students. The app enables students to schedule their study time, receive guidance from mentors, and allows guardians to monitor the progress of their child. This platform aims to enhance academic performance through structured schedules and personalized mentorship.',
        tools: ['React', "tailwind","Javascript"],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 1,
        name: 'AI Chat Bot',
        description: "This project integrates OpenAI's ChatGPT with a full-stack application, featuring a React-based chat interface, a Node.js and Express backend, and secure API interactions. It includes user authentication, efficient state management, and demonstrates use cases like customer support, virtual assistance, and educational tools, showcasing scalable and responsive AI-driven conversational capabilities.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'React', 'MUI',"Javascript"],
        role: 'Full stack developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Restaurant  App',
        description: 'The Full-Stack Restaurant Ordering App is a comprehensive web application designed to streamline the food ordering process for both customers and restaurant staff. The application allows customers to browse the menu, place orders, and make payments, while providing restaurant staff with a clear view of incoming orders, order statuses, and customer details.',
        tools: ['React', 'Tailwind CSS', "Javascript", "MongoDB", "Express","Redux","JWT"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },