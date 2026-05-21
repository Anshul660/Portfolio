export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    completedDate: string;
    description: string;
    image?: string;
    certificateUrl?: string;
}

export const certificates: Certificate[] = [
    {
        id: '1',
        title: 'Front-End Web Development',
        issuer: 'Udemy',
        completedDate: 'Jan 2024',
        description: 'Comprehensive training in front-end web development with HTML, CSS, and JavaScript.',
    },
    {
        id: '2',
        title: 'React JS Essential Training',
        issuer: 'LinkedIn Learning',
        completedDate: 'May 2024',
        description: 'Professional training in React.js fundamentals and advanced concepts.',
    },
];
