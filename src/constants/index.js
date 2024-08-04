import { kozocom, dniit } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    php,
    mui,
    vue,
    laravel,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: vue,
        name: "VueJs",
        type: "Frontend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Framework",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern",
        company_name: "DNIIT - DANANG UNIVERSITY",
        icon: dniit,
        iconBg: "#accbe1",
        date: "Nov 2020 - Jan 2021",
        points: [
            "Learn about MLJAR in simple income classification.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "KOZOCOM VIET NAM",
        icon: kozocom,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js, VueJs Laravel Framework.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JesterJz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jester-jz',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Face Recognition - Computer Vision',
        description: 'Face Recognition - Computer Vision Project. Using Haarcascade classifier and CNN model.',
        link: 'https://github.com/JesterJz/Face-recognition',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'VietNam Language Model',
        description: 'The next word predict Vietnamese language modeling.',
        link: 'https://github.com/JesterJz/Language-modeling',
    },
];