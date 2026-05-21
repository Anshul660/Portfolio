import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import Button from './Button';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    issuer: string;
}

export default function CertificateModal({ isOpen, onClose, title, issuer }: CertificateModalProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-gray-100 dark:border-gray-800 z-10 p-4 md:p-6 flex flex-col items-center justify-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full flex flex-col items-center">
                            {/* Certificate Image or Placeholder */}
                            <div className="w-full aspect-[4/3] max-w-3xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-850 dark:to-gray-800 rounded-xl border border-dashed border-primary-200 dark:border-gray-700 flex flex-col items-center justify-center relative overflow-hidden group">
                                {!imageError && (
                                    <img
                                        src="/assets/mealo_certificate.png"
                                        alt={`${issuer} Internship Certificate`}
                                        className="absolute inset-0 w-full h-full object-contain p-2 rounded-xl transition-opacity duration-300 z-10"
                                        onLoad={() => setImageLoaded(true)}
                                        onError={() => {
                                            setImageLoaded(false);
                                            setImageError(true);
                                        }}
                                    />
                                )}
                                
                                {/* Placeholder Graphic (Only shown if image is NOT loaded or has error) */}
                                {(!imageLoaded || imageError) && (
                                    <div className="z-0 flex flex-col items-center max-w-md text-center p-6 select-none pointer-events-none">
                                        <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                                            <Award className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            Internship Certificate
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                                            This certifies that <strong className="text-primary-600 dark:text-primary-400">Anshul Lodhi</strong> successfully completed the Full Stack Developer Internship at <strong>{issuer}</strong>.
                                        </p>
                                        <div className="glass-card p-3 rounded-lg border border-primary-100 dark:border-gray-700 max-w-sm">
                                            <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                                                💡 Setup Instruction: To replace this placeholder with your real certificate image, place your image file named `mealo_certificate.png` in the `public/assets/` folder of this project!
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Additional Info (Only shown if image is NOT loaded) */}
                            {(!imageLoaded || imageError) && (
                                <div className="mt-6 text-center animate-fade-in">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        Issued by {issuer} • Dec 2024 - June 2025
                                    </p>
                                </div>
                            )}

                            <div className="mt-4 flex gap-4 w-full sm:w-auto z-10">
                                <Button
                                    variant="primary"
                                    onClick={onClose}
                                    className="w-full sm:w-auto"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
