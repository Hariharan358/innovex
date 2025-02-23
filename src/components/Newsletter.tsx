import React from 'react';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Join our newsletter</h2>
            <p className="text-xl text-gray-600">
              Join our newsletter to stay up to date on academy news, events, camps, and special deals.
            </p>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;