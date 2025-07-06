import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const handyRide = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, handyRide.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
    // Handler to open project URL
  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.warn("No URL provided for this project.");
    }
  };
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper"
            onClick={() => handleProjectClick("https://handyride.ng/")}
          >
            <div className="image-wrapper">
              <img src="/images/handyride.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called HandyRide
              </h2>
              <p className="text-white-50 md:text-xl">
                A Web app built with React, TailwindCSS, Firebase for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}
              onClick={() => handleProjectClick("https://urbandrip.vercel.app/")}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/Urbandrip.png"
                  alt="Library Management Platform"
                />
              </div>
              <h3>UrbanDrip is a modern e-commerce platform specializing in unisex streetwear.</h3>
            </div>

            <div className="project" ref={ycDirectoryRef}
              onClick={() => handleProjectClick("https://jhayexchange.netlify.app/")}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/jhay.png" alt="YC Directory App" />
              </div>
              <h3>Local peer-to-peer Crypto platform </h3>
            </div>
          </div>
        </div>
        <div className="showcaselayout my-12">
        
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}
              onClick={() => handleProjectClick("https://propsure.vercel.app/")}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/propsure.png"
                  alt="Property Management Platform"
                />
              </div>
              <h3>The Property Management Platform</h3>
            </div>

            <div className="project" ref={ycDirectoryRef}
              onClick={() => handleProjectClick("https://quicktaxx.vercel.app/")}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/quicktax.png" alt="Library Management Platform" />
              </div>
              <h3>An intuitive web application designed to simplify tax preparation</h3>
            </div>
          </div>

          <div ref={rydeRef} className="first-project-wrapper"
            onClick={() => handleProjectClick("https://wanderwisee.vercel.app/")}
          >
            <div className="image-wrapper">
              <img src="/images/wanderwise.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                An intelligent travel planning platform providing users with personalized recommendations
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with HTML, React JS, TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
