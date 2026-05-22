import { motion } from 'framer-motion';

export const Loader = ({ finishLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      onAnimationComplete={finishLoading}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mb-6"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-black tracking-[-0.1em] text-primary"
        >
          AAYUSH<span className="text-accent">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="mt-4 text-[9px] font-black uppercase tracking-[0.5em] text-secondary/40"
        >
          Initializing Systems
        </motion.div>
      </div>
    </motion.div>
  );
};
