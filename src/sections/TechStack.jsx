// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import TitleHeader from "../components/TitleHeader";
// import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
// import { techStackIcons } from "../constants";
// // import { techStackImgs } from "../constants";

// const TechStack = () => {
//   // Animate the tech cards in the skills section
//   useGSAP(() => {
//     // This animation is triggered when the user scrolls to the #skills wrapper
//     // The animation starts when the top of the wrapper is at the center of the screen
//     // The animation is staggered, meaning each card will animate in sequence
//     // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
//     gsap.fromTo(
//       ".tech-card",
//       {
//         // Initial values
//         y: 50, // Move the cards down by 50px
//         opacity: 0, // Set the opacity to 0
//       },
//       {
//         // Final values
//         y: 0, // Move the cards back to the top
//         opacity: 1, // Set the opacity to 1
//         duration: 1, // Duration of the animation
//         ease: "power2.inOut", // Ease of the animation
//         stagger: 0.2, // Stagger the animation by 0.2 seconds
//         scrollTrigger: {
//           trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
//           start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
//         },
//       }
//     );
//   });

//   return (
//     <div id="skills" className="flex-center section-padding">
//       <div className="w-full h-full md:px-10 px-5">
//         <TitleHeader
//           title="How I Can Contribute & My Key Skills"
//           sub="🤝 What I Bring to the Table"
//         />
//         <div className="tech-grid">
//           {/* Loop through the techStackIcons array and create a component for each item. 
//               The key is set to the name of the tech stack icon, and the classnames are set to 
//               card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
//               classes are only applied on larger screens. */}
//           {techStackIcons.map((techStackIcon) => (
//             <div
//               key={techStackIcon.name}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               {/* The tech-card-animated-bg div is used to create a background animation when the 
//                   component is hovered. */}
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
//                     which renders the 3D model of the tech stack icon. */}
//                 <div className="tech-icon-wrapper">
//                   <TechIconCardExperience model={techStackIcon} />
//                 </div>
//                 {/* The padding-x and w-full classes are used to add horizontal padding to the 
//                     text and make it take up the full width of the component. */}
//                 <div className="padding-x w-full">
//                   {/* The p tag contains the name of the tech stack icon. */}
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* This is for the img part */}
//           {/* {techStackImgs.map((techStackIcon, index) => (
//             <div
//               key={index}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 <div className="tech-icon-wrapper">
//                   <img src={techStackIcon.imgPath} alt="" />
//                 </div>
//                 <div className="padding-x w-full">
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;
import React, { useState, useEffect, useRef } from "react";

import TitleHeader from "../components/TitleHeader";
// Assuming techStackIcons provides placeholder data for your showcase items.
// Replace with your actual project data source when ready.
import { techStackIcons } from "../constants";

const ShowcaseSection = () => {
  const showcaseGridRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});
  // Use a ref for each individual card to apply the glow effect
  const cardRefs = useRef([]);

  // Function to handle mouse movement for the glow effect
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
            // Unobserve the element once it's visible if you only want the animation to run once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the item is visible
      }
    );

    // Observe each item in the showcase grid
    if (showcaseGridRef.current) {
      Array.from(showcaseGridRef.current.children).forEach((item, index) => {
        item.dataset.index = index; // Assign a data-index for state tracking
        observer.observe(item);
      });
    }

    return () => {
      // Cleanup observer on component unmount
      if (showcaseGridRef.current) {
        Array.from(showcaseGridRef.current.children).forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      id="showcase-section"
      className="flex justify-center items-center py-16 px-5 md:px-10 min-h-screen bg-black"
    >
      <div className="w-full max-w-7xl">
        <TitleHeader
          title="My Creative Portfolio & Projects"
          sub="✨ A Glimpse Into My Work"
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          ref={showcaseGridRef}
        >
          {techStackIcons.map((item, index) => (
            <div
              key={item.name || index}
              ref={(el) => (cardRefs.current[index] = el)} // Assign ref for glow effect
              onMouseMove={handleMouseMove(index)} // Mouse move handler for glow
              className={`
                card card-border rounded-xl p-6 relative overflow-hidden
                flex flex-col items-center text-center
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
              style={{
                transitionDelay: visibleItems[index] ? `${index * 120}ms` : "0ms",
                transitionDuration: "800ms", // Slower, smoother animation
                transitionProperty: "opacity, transform",
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother ease-out
                // CSS variables for the glow effect
                "--start": "0deg",
              }}
            >
              {/* The glow element */}
              <div className="glow absolute inset-0 rounded-xl pointer-events-none"></div>

              {/* Card content - ensure it's above the glow effect */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Example of star ratings inspired by GlowCard */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="size-5" />
                  ))}
                </div>

                {/* Icon/Image Placeholder - using a larger, more prominent placeholder */}
                <div className="mb-4 text-6xl text-blue-400 font-bold">
                  {/* Replace with your actual project icon/image. You can use an <img> tag here. */}
                  {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{item.name} Showcase</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  This project demonstrates {item.name}'s application in a real-world scenario.
                  It highlights key features and innovative solutions.
                </p>

                {/* Call to Action/Link */}
                <button
                  className="
                    mt-auto py-2 px-6 bg-blue-600 text-white rounded-lg
                    hover:bg-blue-700 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  "
                >
                  Explore Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;