import React from 'react'
import LangCard from '../Component/Cards/LangCard'

function Experience() {
  return (
    <div className='bg-back sm:px-8 md:px-16 lg:px-24 '>

        <div className='p-16 lg:px-28'>
            <h1 className='text-white font-fira text-sm sm:text-base  sm:relative right-32 pb-8' >.../Experience...</h1>

            <div id='tbpc' className=' gap-6 text-white text-xs sm:text-base md:flex w-full'>
                <div id='left' className='md:w-3/4'>
                    <h1 className='text-lg font-fira'>Arshee Engineering & Innovations Pvt. Ltd.</h1>
                    <p className='py-6 text-gray'>I have been working as a <span className='text-blue-500'>Software Engineer Trainee</span> at Arshee Engineering & Innovations Pvt. Ltd. since August 2025, where I independently designed and developed a full-stack HRMS/ERP platform with modules including Attendance, Payroll, Recruitment, Appraisals, and Employee Onboarding. I have built and maintained scalable REST APIs using Django and Django REST Framework, optimized MongoDB schemas for efficient data processing, integrated biometric attendance systems, and developed analytics dashboards.</p>
                    <div className='py-6 flex flex-wrap gap-6'>
                        <LangCard name='Python' />
                        <LangCard name='Django' />
                        <LangCard name='Django REST Framework' />
                        <LangCard name='Djongo' />
                        <LangCard name='MongoDB' />
                        <LangCard name='HTML5' />
                        <LangCard name='CSS'/>
                        <LangCard name='Bootstrap' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Experience