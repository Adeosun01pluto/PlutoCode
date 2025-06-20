// import { socialImgs } from "../constants";
import { FaWhatsapp, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa'; // Import specific icons


const Footer = () => {
  const socialImgs = [
  {
    name: "whatsapp",
    Icon: FaWhatsapp, // Using the imported React Icon component
    link: "https://wa.me/2347040877605", // Assuming current location Switzerland, and number format
  },
  {
    name: "x", // For Twitter, FaTwitter is commonly used
    Icon: FaTwitter,
    link: "https://x.com/engineer_pluto",
  },
  {
    name: "linkedin",
    Icon: FaLinkedinIn, // FaLinkedinIn for the LinkedIn icon
    link: "https://www.linkedin.com/in/adeosun-pluto-11489a24b/",
  },
  {
    name: "tiktok",
    Icon: FaTiktok, // FaTiktok for the TikTok icon
    link: "https://www.tiktok.com/@codeby_pluto",
  },
];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials flex space-x-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-10 h-10 flex items-center justify-center rounded-full icon transition-colors text-white text-2xl"
              aria-label={`Link to ${socialImg.name}`}
            >
              {/* Render the React Icon component here */}
              <socialImg.Icon /> 
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adeosun Qozeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
