import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card, { CardBody, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';

// Anshul Lodhi's Projects
const projects = [
    {
        id: '1',
        title: 'PlaceHub - College Placement Portal',
        description: 'A full-stack placement management system using Spring Boot, Spring MVC, Thymeleaf, and MySQL. Implemented RESTful APIs for student registration, company management, and job application handling.',
        image: '🏢',
        tags: ['Spring Boot', 'Spring MVC', 'Spring Security', 'MySQL', 'Thymeleaf', 'REST APIs', 'JPA', 'Hibernate'],
        category: 'web',
        featured: true,
    },
    {
        id: '2',
        title: 'Smart Car Parking Management System',
        description: 'Built a responsive MERN stack web application to automate parking management operations with real-time slot availability, booking management, and vehicle tracking.',
        image: '🅿️',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Bootstrap'],
        category: 'web',
        featured: true,
        githubUrl: 'https://github.com/Anshul660/carParkingManagementSystem',
    },
    {
        id: '3',
        title: 'E-commerce Web Application',
        description: 'Built an online platform with features like product browsing, shopping cart, and checkout process. Integrated Firebase Authentication for secure user login and registration.',
        image: '🛒',
        tags: ['React.js', 'Node.js', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
        category: 'web',
        githubUrl: 'https://github.com/Anshul660/ReactProject/tree/main/e-comemerce',
    },
];

const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Full Stack Projects' },
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((proj) => proj.category === selectedCategory);

    return (
        <Section id="projects" background="muted">
            <SectionHeader
                title="Featured Projects"
                subtitle="Showcasing my best work and creative solutions"
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <Badge
                        key={category.id}
                        variant={selectedCategory === category.id ? 'primary' : 'neutral'}
                        size="lg"
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </Badge>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card variant="glass" hover className="h-full flex flex-col">
                            {/* Project Image/Icon */}
                            <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-t-xl flex items-center justify-center text-6xl relative overflow-hidden">
                                {project.image}
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="warning" size="sm">
                                            Featured
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            <CardBody className="flex-grow">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant="neutral" size="sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardBody>

                            <CardFooter className="flex gap-3">
                                {project.githubUrl && (
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                        leftIcon={<Github className="w-4 h-4" />}
                                        className="flex-1"
                                    >
                                        View on GitHub
                                    </Button>
                                )}
                                {project.liveUrl && (
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => window.open(project.liveUrl, '_blank')}
                                        leftIcon={<ExternalLink className="w-4 h-4" />}
                                        className="flex-1"
                                    >
                                        Visit Website
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
