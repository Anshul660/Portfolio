import type { Skill } from '@/types';

export const skills: Skill[] = [
    // Programming Languages
    {
        id: 'languages',
        name: 'Languages',
        category: 'backend',
        icon: '💻',
        proficiency: 90,
        yearsOfExperience: 2,
        description: 'Java, JavaScript, SQL, C++, TypeScript (Basics)',
    },
    // Backend & Frameworks
    {
        id: 'backend',
        name: 'Backend Technologies',
        category: 'backend',
        icon: '⚙️',
        proficiency: 90,
        yearsOfExperience: 1,
        description: 'Spring Boot, Spring MVC, REST APIs, Hibernate, JPA, Node.js, Express.js',
    },
    // Frontend Development
    {
        id: 'frontend',
        name: 'Frontend Development',
        category: 'frontend',
        icon: '🎨',
        proficiency: 85,
        yearsOfExperience: 1,
        description: 'React.js, HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS',
    },
    // Databases
    {
        id: 'databases',
        name: 'Databases',
        category: 'data',
        icon: '🗄️',
        proficiency: 85,
        yearsOfExperience: 2,
        description: 'MySQL, MongoDB, CRUD Operations',
    },
    // Tools & Platforms
    {
        id: 'tools',
        name: 'Tools & Platforms',
        category: 'tools',
        icon: '🔧',
        proficiency: 85,
        yearsOfExperience: 1,
        description: 'Git, GitHub, VS Code, Postman, Maven, Docker (Basics)',
    },
    // Concepts & Methodologies
    {
        id: 'concepts',
        name: 'Concepts & Practices',
        category: 'tools',
        icon: '📚',
        proficiency: 80,
        yearsOfExperience: 1,
        description: 'REST APIs, CRUD Operations, Object-Oriented Programming, Agile, SDLC',
    },
];
        yearsOfExperience: 1,
        description: 'Selenium, Playwright, Browser Automation, Debugging',
    },
];

export const softSkills = [
    { id: 'teamwork', name: 'Teamwork', icon: '🤝' },
    { id: 'leadership', name: 'Leadership', icon: '👥' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'time-management', name: 'Time Management', icon: '⏰' },
    { id: 'active-listener', name: 'Active Listener', icon: '👂' },
];

export const skillCategories = [
    { id: 'backend', name: 'Backend', color: 'primary' },
    { id: 'ai', name: 'AI & ML', color: 'secondary' },
    { id: 'data', name: 'Data', color: 'accent' },
    { id: 'frontend', name: 'Frontend', color: 'primary' },
    { id: 'devops', name: 'DevOps', color: 'secondary' },
    { id: 'tools', name: 'Tools', color: 'accent' },
] as const;
