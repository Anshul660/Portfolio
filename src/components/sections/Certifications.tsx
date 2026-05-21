import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card, { CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { certificates } from '@/data/certificates';
import { Award } from 'lucide-react';

export default function Certifications() {
    return (
        <Section id="certifications" background="muted">
            <SectionHeader
                title="Certifications & Achievements"
                subtitle="Professional credentials and training completed"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card variant="glass" hover>
                            <CardBody>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                            {cert.description}
                                        </p>
                                        <Badge variant="neutral" size="sm">
                                            {cert.completedDate}
                                        </Badge>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
