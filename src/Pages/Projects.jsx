import React from 'react'
import LangCard from '../Component/Cards/LangCard'
import tbpcMobi from '../assets/Project/tbpcMobile.png'
import tbpcDesk from '../assets/Project/tbpcDesk.png'
import metromastiiMobi from '../assets/Project/metroMastiMobile.png'
import metromastiiDesk from '../assets/Project/metroMastiDesk.png'
import ecommerceMobi from '../assets/Project/ecommerceMobile.png'
import ecommerceDesk from '../assets/Project/ecommerceDesk.png'
import BlogSlider from '../Component/Cards/BlogSlider'


import { FaArrowRightLong } from 'react-icons/fa6'


function Projects() {
  return (
    <div className='bg-back sm:px-8 md:px-16 lg:px-24 '>



      <div className='p-16 lg:px-28'>
        <h1 className='text-white font-fira text-sm sm:text-2xl text-center sm:relative right-32 pb-8' >.../Projects...</h1>


        <div id='tbpc' className=' gap-6 text-white text-xs sm:text-base md:flex w-full'>

          <div id='left' className='md:w-3/4'>
            <h1 className='text-lg font-fira'>Tech Brothers Polymer Corporation</h1>

            <div className='py-6 flex flex-wrap gap-6'>
              <LangCard name='React.js' />
              <LangCard name='JavaScript' />
              <LangCard name='Redux Toolkit' />
              <LangCard name='TailwindCss' />
              <LangCard name='shadcn-ui' />
              <LangCard name='Vite' />
              <LangCard name='npm' />

            </div>
          </div>

          <div id="right" className='md:flex items-start gap-6'>

            <div className='h-2/3'>
              <img src={tbpcMobi} alt="" className='h-3/2' />
            </div>

            <div className='h-2/3'>

              <div>
                <a target='_blank' href="https://github.com/Harsh-P30/TBPC" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Github</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>

              <img src={tbpcDesk} alt="" className='h-full' />

              <div className='flex sm:justify-end'>
                <a target='_blank' href="https://tbpc.vercel.app/" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Go to..</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>
            </div>

          </div>

        </div>



        <div id='metromastii' className=' gap-6 text-white text-xs sm:text-base md:flex w-full mt-42'>

          <div id='right' className='md:w-3/4'>
            <h1 className='text-lg font-fira'>Metromastii</h1>

            <div className='py-6 flex flex-wrap gap-6'>
              <LangCard name='HTML5' />
              <LangCard name='CSS3' />
              <LangCard name='JavaScript' />
              <LangCard name='BootStrap' />
              <LangCard name='jQuery' />
            </div>
          </div>

          <div id="left" className='md:flex items-start gap-6'>

            <div className='h-2/3'>
              <img src={metromastiiMobi} loading='lazy' alt="" className='h-3/2 ' />
            </div>

            <div className='h-2/3'>

              <div>
                <a target='_blank' href="https://github.com/Harsh-P30/MetroMasti" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Github</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>

              <img src={metromastiiDesk} loading='lazy' alt="" className='h-full' />

              <div className='flex sm:justify-end'>
                <a target='_blank' href="https://metro-masti.vercel.app/#" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Go to..</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>

            </div>

          </div>

        </div>




        <div id='ecommerce' className=' gap-6 text-white text-xs sm:text-base md:flex w-full mt-42'>

          <div id='left' className='md:w-3/4'>
            <h1 className='text-lg font-fira'>Cara (Ecommerce Website)</h1>

            <div className='py-6 flex flex-wrap gap-6'>
              <LangCard name='HTML5' />
              <LangCard name='CSS' />
              <LangCard name='JavaScript' />
            </div>
          </div>

          <div id="right" className='md:flex items-start gap-6'>

            <div className='h-2/3'>
              <img src={ecommerceMobi} loading='lazy' alt="" className='h-3/2' />
            </div>

            <div className='h-2/3'>

              <div>
                <a target='_blank' href="https://github.com/Harsh-P30/E-commerce" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Github</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>

              <img src={ecommerceDesk} loading='lazy' alt="" className='h-full' />

              <div className='flex sm:justify-end'>
                <a target='_blank' href="https://e-commerce-pearl-ten-46.vercel.app/" className='flex px-2 py-4 items-center gap-2'>
                  <p className='border-1 font-fira text-gray py-2 px-4 rounded-full'>Go to..</p>
                  <p className="text-black p-2 sm:p-3 rounded-full bg-white -rotate-45 hover:rotate-0">
                    <FaArrowRightLong />
                  </p></a>
              </div>
            </div>

          </div>

        </div>


      </div>

      <section id="blog">
        <h2 className="text-white font-fira py-16 text-sm sm:text-base">.../Blogs...</h2>
        <div className='flex justify-center'>
          <BlogSlider />
        </div>
      </section>



    </div>
  )
}

export default Projects