import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ResumeDownloadButton = () => {
    const [downloading, setDownloading] = useState(false);

    const downloadResume = () => {
        setDownloading(true);
        
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = 'assets/resume.pdf';
        link.download = 'resume.pdf'; // This will be the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset the downloading state after a brief delay
        setTimeout(() => {
            setDownloading(false);
        }, 1500);
    };

    return (
        <motion.button
            onClick={downloadResume}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {downloading ? (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="downloading"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Here you go
                    </motion.p>
                ) : (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="resume"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download my resume
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default ResumeDownloadButton;