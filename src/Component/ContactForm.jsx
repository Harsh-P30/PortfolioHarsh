import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const phoneNumber = '+919199783011';

    const handleSend = (e) => {
        e.preventDefault();
        const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank'); 
    };

    return (
        <div className=" text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

            <form onSubmit={handleSend} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="p-3 rounded-lg bg-back border border-gray-600 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-3 rounded-lg bg-back border border-gray-600 focus:outline-none"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="p-3 rounded-lg bg-back border border-gray-600 focus:outline-none h-32"
                />
                <button
                    type="submit"
                    className="bg-white text-black hover:bg-back  hover:text-white hover:border-1 font-bold py-3 rounded-lg transition-all"
                >
                    Send on WhatsApp
                </button>
            </form>
        </div>
    );
}
