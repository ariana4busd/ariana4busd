import { motion } from "framer-motion";

export function CheckIcon({ className }) {
  return (
    <motion.svg
      className={className}
      id="ic_checkmark"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
        initial={{
          opacity: 0,
          pathLength: 0,
          fill: "none",
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          fill: "none",
          transition: {
            pathLength: {
              delay: 0.12,
              type: "spring",
              duration: 1,
              bounce: 0,
            },
            opacity: { delay: 0.15, duration: 0.01 },
          },
        }}
      />
    </motion.svg>
  );
}
