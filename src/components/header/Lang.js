"use client"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Lang = ({ hide }) => {
    const { i18n } = useTranslation();

    const changeLanguage = async (lang) => {
        try {
            await i18n.changeLanguage(lang);
            console.log(`Language changed to ${lang}`);
            hide()
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 top-0 left-0 w-full h-screen bg-[#0007] backdrop-blur-lg flex justify-center items-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center gap-4"
            >
                <h2 className="text-2xl font-bold text-[#dd2a5b] mb-4">Select Language</h2>
                <button
                    onClick={() => changeLanguage("ar")}
                    className="w-32 px-4 py-2 text-sm font-medium text-white bg-[#dd2a5b] border-2 border-[#dd2a5b] rounded-lg hover:bg-white hover:text-[#dd2a5b] transition-all"
                >
                    العربية
                </button>
                <button
                    onClick={() => changeLanguage("fr")}
                    className="w-32 px-4 py-2 text-sm font-medium text-white bg-[#dd2a5b] border-2 border-[#dd2a5b] rounded-lg hover:bg-white hover:text-[#dd2a5b] transition-all"
                >
                    Français
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Lang;
