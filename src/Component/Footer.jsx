import React from 'react'
import { SiRefinedgithub, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb";


function Footer() {
  return (
    <footer id="footer" className="w-full bg-back py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-6">

        {/* Group 1: GitHub & Leetcode */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Harsh-P30"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
            className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
          >
            <SiRefinedgithub />
            <p className="font-fira text-sm italic">Github</p>
          </a>

          <a
            href="https://leetcode.com/u/harsh_p30/"
            target="_blank"
            rel="noopener noreferrer"
            id="leetcode"
            className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
          >
            <SiLeetcode />
            <p className="font-fira text-sm italic">Leetcode</p>
          </a>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harshPrasad30"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin"
          className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
        >
          <FaLinkedinIn />
          <p className="font-fira text-sm italic">LinkedIn</p>
        </a>

        <a
          href="https://drive.google.com/file/d/1qO166YUudik-2Erv-B6W8_FAJMs2RBqi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          id="resume"
          className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
        >
          <TbFileCv />
          <p className="font-fira text-sm italic">Resume</p>
        </a>





        {/* Group 2: Gmail & Instagram */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:harshprasad1204@gmail.com"
            id="gmail"
            className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
          >
            <BiLogoGmail />
            <p className="font-fira text-sm italic">Gmail</p>
          </a>

          <a
            href="https://www.instagram.com/harsh._.p30/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              id="instagram"
              className="flex items-center gap-2 text-xl p-2 px-4 rounded-full border border-gray hover:text-gray transition"
            >
              <FaInstagram />
              <p className="font-fira text-sm italic">Instagram</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
