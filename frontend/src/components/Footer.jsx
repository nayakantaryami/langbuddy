import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  
  return (
    <footer className="w-full p-4 text-center border-t border-base-300 mt-auto bg-transparent" >
      <p className="text-sm mb-2">
        Made by <span className="font-semibold">Antaryami Nayak</span> |{" "}
        <a
          href="mailto:nayakantaryami324@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Contact Me
        </a>
      </p>
      <div className="flex justify-center gap-4 text-lg mt-2">
        <a
          href="https://www.linkedin.com/in/antaryami-nayak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/nayakantaryami"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://x.com/noob_usert"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
