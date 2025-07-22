import React, { useRef, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import blog4 from '../../assets/blog4.webp';
import blog5 from '../../assets/blog5.png';
import blog6 from '../../assets/blog6.jpg';
import blog7 from '../../assets/blog7.jpg';

const blogs = [
  
  {
    img: blog1,
    title: "Why Frontend",
    description: "Why I Chose Frontend Development — And What I’ve Learned So Far",
    link :"https://dev.to/harsh_p30/why-i-chose-frontend-development-and-what-ive-learned-so-far-2keg"
  },
  {
    img: blog3,
    title: "Why React",
    description: "Why I Chose React as a Frontend Developer — My Journey So Far",
    link :"https://dev.to/harsh_p30/why-i-chose-react-as-a-frontend-developer-my-journey-so-far-4ghj"

  },
  {
    img: blog2,
    title: "Why Tailwind",
    description: "Why I Chose Tailwind CSS as a Frontend Developer — And Never Looked Back",
    link :"https://dev.to/harsh_p30/why-i-chose-tailwind-css-as-a-frontend-developer-and-never-looked-back-1b0p"
  },
  {
    img: blog4,
    title: "Tailwind Tricks",
    description: "7 Tailwind CSS Tricks That Boost My Frontend Workflow",
    link :" https://dev.to/harsh_p30/7-tailwind-css-tricks-that-boost-my-frontend-workflow-9l2"
   
  },
  {
    img: blog5,
    title: "React Hooks",
    description: "What Are React Hooks? A Beginner-Friendly Guide with Examples.",
    link :" https://dev.to/harsh_p30/what-are-react-hooks-a-beginner-friendly-guide-with-examples-1c3g"

  },
  {
    img: blog6,
    title: "CDN: The Shortcut to a Faster Website",
    description: "Ever wonder why some websites feel instant while yours takes ages to load? The secret weapon is often a CDN—a Content Delivery Network.",
    link :" https://dev.to/harsh_p30/cdn-the-shortcut-to-a-faster-website-1bal"

  },
  {
    img: blog7,
    title: "Two Dev talk on Bundlers",
    description: "A Funny Chat About Bundlers.",
    link :" https://dev.to/harsh_p30/a-funny-chat-about-bundlers-8ki"

  },
];

export default function BlogSlider() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((activeIndex + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const cardWidth = container?.children[0]?.offsetWidth || 300;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative w-19/20">
      {/* Arrows */}
      <button
        onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:scale-110"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={() => scrollToIndex(Math.min(activeIndex + 1, blogs.length - 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:scale-110"
      >
        <FaArrowRight />
      </button>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 py-12 scrollbar-hide scroll-smooth"
      >
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            img={blog.img}
            title={blog.title}
            description={blog.description}
            link={blog.link}
            active={idx === activeIndex+1}
          />
        ))}
      </div>
    </div>
  );
}
