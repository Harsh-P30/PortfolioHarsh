import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  // Grab the key from env variables safely
  const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || process.env.REACT_APP_WEB3FORMS_KEY;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: 'New message from portfolio',
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again.');
    }
  };

  const statusClass = status.includes('success')
    ? 'text-green-400'
    : status.includes('Sending')
    ? 'text-yellow-300'
    : status
    ? 'text-red-400'
    : 'text-gray-400';

  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg bg-black/40 border border-gray-700 shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-2">Contact Me</h2>
      <p className="text-sm text-gray-300 mb-6">Have a project or just want to say hi? Send a message and I’ll reply soon.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md"
          >
            {status === 'Sending...' && (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            )}
            <span>{status === 'Sending...' ? 'Sending...' : 'Send Message'}</span>
          </button>

          <div className={`text-sm ${status ? statusClass : 'text-gray-400'}`}>
            {status && <p>{status}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}