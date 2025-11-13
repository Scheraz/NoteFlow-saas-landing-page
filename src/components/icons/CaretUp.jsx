import { motion } from "motion/react"; // keep what works in your project

export default function CaretUp({
  width = 1.5,
  className,
  alt,
  activeQuestion, // expected boolean
}) {
  // variants for open/closed
  const variants = {
    closed: { rotate: 0 },
    open: { rotate: -180 },
  };

  return (
    <motion.svg
      key={activeQuestion ? "open" : "closed"} // forces re-eval on change
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      alt={alt}
      variants={variants}
      animate={activeQuestion ? "open" : "closed"}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      // IMPORTANT: make the SVG rotate around its center
      style={{
        originX: 0.5, // center X
        originY: 0.5, // center Y
        transformBox: "fill-box", // ensure origin refers to the SVG bounding box
      }}
    >
      <path
        d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.08002 15.0501"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
