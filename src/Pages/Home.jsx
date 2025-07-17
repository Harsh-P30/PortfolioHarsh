import React from 'react'
import { NavLink, useLocation } from 'react-router';
import { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { SiRefinedgithub } from "react-icons/si";
import meImg from '../assets/me.jpg';
import BlogSlider from '../Component/Cards/BlogSlider';





function Home() {


  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <div className='bg-back w-full py-28 px-4 sm:px-8 md:px-16 lg:px-24'>

      {/* Top Title + Projects */}
      <div className='text-white flex flex-col lg:flex-row items-center justify-between gap-6'>
        <h1 className='font-fira text-5xl sm:text-6xl md:text-9xl font-bold tracking-wide text-center md:text-left'>
          Frontend
        </h1>

        <li className='list-none'>
          <NavLink to="projects" className='flex gap-2 sm:gap-4 items-center'>
            <h1 className='px-6 sm:px-10 bg-white italic font-fira text-black py-2 border rounded-full text-sm sm:text-base'>
              Projects
            </h1>
            <p className="text-black p-2 sm:p-3 rounded-full bg-white hover:-rotate-45">
              <FaArrowRightLong />
            </p>
          </NavLink>
        </li>
      </div>

      {/* Goal + Developer */}
      <div className='text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-6 my-10'>
        <p className='text-gray text-center md:text-left'>
          My goal is to <span className='italic text-white'>write maintainable, clean</span><br />
          and <span className='italic text-white'>understandable code</span> to make development enjoyable.
        </p>
        <h1 className='font-fira text-5xl sm:text-6xl md:text-9xl font-bold tracking-wide'>
          Developer
        </h1>
      </div>


      <section id="blog">
        <h2 className="text-white font-fira py-16 text-sm sm:text-base">.../Blogs...</h2>
        <div className='flex justify-center'>
          <BlogSlider />
        </div>
      </section>





      {/* About Me */}
      <div className='text-white my-16 flex sm:text-base'>
        <div id="about" className='xl:flex items-center'>
          <p className='text-white font-fira py-16 text-sm sm:text-base'>.../About me...</p>
          <p className='text-gray mt-4 xl:relative top-14 left-11/12'>
            I am
            <span className='text-lg'> Harsh.</span>  A <span className='text-white italic'>Frontend Developer.</span><br />
            I'm passionate about delivering the <span className='text-white italic'>best design and development solutions.</span>
          </p>
        </div>
      </div>

      {/* Skills + Image */}
      <div className='text-white flex flex-col lg:flex-row gap-10'>

        {/* Left - Skills */}
        <div className='w-full flex flex-col gap-6'>

          {/* Frontend Box */}
          <div className='px-6 py-6 border bg-white text-black rounded-3xl'>
            <h1 className='font-fira text-xl'>Frontend</h1>
            <p className='font-fira text-gray-600 text-sm'>
              JavaScript / React / Redux Toolkit / HTML5<br />
              DOM / Responsive Design
            </p>
          </div>

          {/* Styles + GitHub */}
          <div className='flex flex-col sm:flex-row gap-6 items-start'>

            <div className='border rounded-3xl px-6 py-6 w-full'>
              <h1 className='font-fira text-xl'>Styles</h1>
              <p className='font-fira text-gray-400 text-sm'>
                CSS3 / TailwindCSS / BootStrap / Material UI<br />
                SCSS / SASS / SPA
              </p>
            </div>

            <div className='flex flex-col items-start'>
              <a href="https://github.com/Harsh-P30" target='_blank' rel="noopener noreferrer">
                <div className='flex items-center gap-2 text-xl text-white p-4 rounded-full border border-gray'>
                  <SiRefinedgithub />
                </div>
                <div className='flex items-center gap-2 text-xl text-black bg-white -rotate-45 font-thin p-4 rounded-full border border-gray relative -top-13 left-8 hover:rotate-0'>
                  <FaArrowRightLong />
                </div>
              </a>
            </div>
          </div>

          {/* Other Box */}
          <div className='border rounded-3xl px-6 py-6'>
            <h1 className='font-fira text-xl'>Other</h1>
            <p className='font-fira text-gray-400 text-sm'>
              <span className='bg-white text-black px-2'>Programming Language</span><br />
              <span className='bg-white text-black px-2'>C / Cpp / JavaScript / Python</span>
              <br />
              Data Structures / OOP / Version Control / Operating Systems / DBMS<br />
              Git / GitHub / VS Code / Vercel / Netlify / Figma / Webpack / Babel<br />
              Vite / JSON / REST APIs
            </p>
          </div>

        </div>

        {/* Right - Image */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center bg-no-repeat scale-100 h-80 md:h-[500px] rounded-2xl"
          style={{ backgroundImage: `url(${meImg})` }}
        ></div>
      </div>

      {/* Education Heading */}
      <p className='text-white font-fira py-16 text-sm sm:text-base'>.../Education...</p>

      {/* Education Cards */}
      <div className='flex flex-col gap-6'>

        {/* B Tech */}
        <div className='px-6 py-6 border bg-white text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-300'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
            <h1 className='font-fira text-xl'>B Tech</h1>
          </div>
          <p className='font-fira text-gray-600 text-sm'>Computer Science and Engineering</p>
          <div className='flex flex-col sm:flex-row justify-between text-sm'>
            <p>Manav Rachna International Institute of Research and Studies</p>
            <p>2021-25</p>
          </div>
          <p>CGPA 7.045</p>
        </div>

        {/* Higher Secondary */}
        <div className='px-6 py-6 border bg-black text-white rounded-3xl hover:bg-white hover:text-black transition-all duration-300'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
            <h1 className='font-fira text-xl'>Higher Secondary</h1>
          </div>
          <p className='font-fira text-gray text-sm'>Non-medical Science</p>
          <div className='flex flex-col sm:flex-row justify-between text-sm'>
            <p>Marwari College, Darbhanga – BSEB Board</p>
            <p>2020-21</p>
          </div>
          <p>64.2%</p>
        </div>

        {/* Matriculation */}
        <div className='px-6 py-6 border bg-black text-white rounded-3xl hover:bg-white hover:text-black transition-all duration-300'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
            <h1 className='font-fira text-xl'>Matriculation</h1>
          </div>
          <div className='flex flex-col sm:flex-row justify-between text-sm'>
            <p>Chandeshwar High School, Madhubani – BSEB Board</p>
            <p>2018-19</p>
          </div>
          <p>72.8%</p>
        </div>

      </div>
    </div>
  )
}

export default Home
