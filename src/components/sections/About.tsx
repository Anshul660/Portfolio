import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { Download, Code, Palette, Rocket } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            icon: Code,
            title: 'Technical Excellence',
            description: 'Mastering modern web technologies and best practices',
        },
        {
            icon: Palette,
            title: 'Design Thinking',
            description: 'Creating beautiful, user-centric interfaces',
        },
        {
            icon: Rocket,
            title: 'Performance Focus',
            description: 'Building fast, optimized, and accessible applications',
        },
    ];

    const timeline = [
        { year: '2026', event: 'PG-DAC at C-DAC, Bengaluru (Aug 2025 - Feb 2026)' },
        { year: '2025', event: 'Full Stack Developer Intern at Mealo Solutions (Dec 2024 - June 2025)' },
        { year: '2025', event: 'Graduated B.Tech in CSE from Technocrats Institute (80% CGPA)' },
        { year: '2024', event: 'React JS Essential Training - LinkedIn Learning' },
        { year: '2024', event: 'Front-End Web Development - Udemy' },
        { year: '2021', event: 'Started B.Tech in CSE' },
    ];

    return (
        <Section id="about" background="muted">
            <SectionHeader
                title="About Me"
                subtitle="Passionate about creating exceptional digital experiences"
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                        <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl">
                            👨‍💻
                        </div>
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 glass-card p-6">
                        <div className="text-3xl font-bold gradient-text">1+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Year of Learning</div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Full Stack Developer | Java Spring Boot & MERN Stack
                    </h3>

                    <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                        <p>
                            Computer Science graduate skilled in Java Full Stack Development using Spring Boot, REST APIs, MySQL, and React.js.
                            Currently pursuing PG-DAC at C-DAC Bengaluru, I have hands-on experience building scalable web applications with modern tech stacks.
                        </p>
                        <p>
                            With internship experience at Mealo Solutions developing MERN stack applications, I specialize in building responsive applications,
                            developing secure APIs, and working with modern development tools. My B.Tech from Technocrats Institute of Technology Excellence
                            (80% CGPA) strengthened my foundation in data structures, algorithms, and software engineering principles.
                        </p>
                        <p>
                            I'm passionate about creating user-centric applications and contributing to impactful tech solutions. A strong communicator,
                            collaborative team player, and eager to grow in a dynamic development environment.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {highlight.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.open(siteConfig.resume, '_blank')}
                        leftIcon={<Download className="w-5 h-5" />}
                    >
                        Download Resume
                    </Button>
                </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    My Journey
                </h3>
                <div className="max-w-3xl mx-auto">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-6 mb-8 last:mb-0"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {item.year}
                                </div>
                                {index < timeline.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />
                                )}
                            </div>
                            <div className="pb-8">
                                <p className="text-lg text-gray-900 dark:text-white">{item.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
