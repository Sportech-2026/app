import React from "react";
import { motion } from "framer-motion";

const Book3D = ({
  width = 230,
  height = 350,
  depth = 50, // Thickness of the book
  frontImage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
  backImage = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
  spineColor = "#8B4513", // Fallback color if no image
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
        perspective: "1200px", // Crucial for 3D effect
      }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{
          width: width,
          height: height,
          position: "relative",
          transformStyle: "preserve-3d", // Allows children to exist in 3D space
          cursor: "pointer",
        }}
        variants={{
          rest: {
            rotateY: -25,
            rotateX: 5,
            z: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
          hover: {
            rotateY: -45,
            rotateX: 0,
            z: 50, // Float up
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
      >
        {/* --- FRONT COVER --- */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: `translateZ(${depth / 2}px)`,
            borderRadius: "4px 8px 8px 4px",
            backgroundImage: `url(${frontImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow:
              "inset 4px 0 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
            {/* Gloss/Lighting overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 20%)',
                borderRadius: 'inherit'
            }} />
        </motion.div>

        {/* --- BACK COVER --- */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "visible", // Visible so we see it when rotated
            transform: `translateZ(-${depth / 2}px) rotateY(180deg)`,
            borderRadius: "4px 8px 8px 4px",
            backgroundImage: `url(${backImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#333",
            boxShadow: "inset 4px 0 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* --- SPINE (Left) --- */}
        <motion.div
          style={{
            position: "absolute",
            width: depth,
            height: height,
            left: 0,
            transformOrigin: "left",
            transform: `rotateY(90deg) translateX(-${depth / 2}px)`,
            backgroundColor: spineColor,
            // Realistic spine gradient
            background: `linear-gradient(to right, 
              rgba(255,255,255,0.2) 0%, 
              ${spineColor} 20%, 
              ${spineColor} 80%, 
              rgba(0,0,0,0.3) 100%)`,
          }}
        />

        {/* --- PAGES (Right) --- */}
        <motion.div
          style={{
            position: "absolute",
            width: depth - 4, // Slightly recessed
            height: height - 10, // Slightly shorter than cover
            right: 0,
            top: 5,
            transformOrigin: "right",
            transform: `rotateY(90deg) translateX(${depth / 2}px)`,
            background:
              "linear-gradient(to right, #fff 0%, #f9f9f9 20%, #eee 100%)",
            // Striations to look like paper pages
            backgroundImage: `linear-gradient(to bottom, #ccc 1px, transparent 1px)`,
            backgroundSize: "100% 4px",
          }}
        />

        {/* --- PAGES (Top) --- */}
        <motion.div
          style={{
            position: "absolute",
            width: width - 5,
            height: depth - 4,
            top: 0,
            left: 2, // Offset for spine
            transformOrigin: "top",
            transform: `rotateX(90deg) translateY(-${depth / 2}px)`,
            background: "#fff",
            backgroundImage: `linear-gradient(to right, #ccc 1px, transparent 1px)`,
            backgroundSize: "4px 100%",
          }}
        />

         {/* --- PAGES (Bottom) --- */}
         <motion.div
          style={{
            position: "absolute",
            width: width - 5,
            height: depth - 4,
            bottom: 0,
            left: 2,
            transformOrigin: "bottom",
            transform: `rotateX(-90deg) translateY(${depth / 2}px)`,
            background: "#fff",
            backgroundImage: `linear-gradient(to right, #ccc 1px, transparent 1px)`,
            backgroundSize: "4px 100%",
          }}
        />

        {/* --- DROP SHADOW (Floats on the floor) --- */}
        <motion.div 
            variants={{
                rest: { opacity: 0.5, scale: 1, y: 40 },
                hover: { opacity: 0.3, scale: 1.1, y: 80, filter: "blur(20px)" }
            }}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 20,
                width: width - 40,
                height: depth,
                background: 'black',
                filter: 'blur(15px)',
                zIndex: -1,
                transform: `rotateX(90deg) translateZ(-${height/2 + 20}px)` // Place below book
            }}
        />

      </motion.div>
    </div>
  );
};

export default Book3D;