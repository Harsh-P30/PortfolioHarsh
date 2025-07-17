import React from 'react';

function BlogCard({ img, title, description, link, active }) {
  return (
    <div
      className={`snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-3xl bg-cover bg-center relative overflow-hidden shadow-xl transition-all ${
        active ? 'scale-105 opacity-100' : 'scale-95 opacity-50'
      }`}
      style={{ backgroundImage: `url(${img})` }}
    >
      
      <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-sm md:text-base mb-4">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black px-4 py-1 rounded-full font-semibold flex items-center gap-2 w-fit">
            Read more →
          </button>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
