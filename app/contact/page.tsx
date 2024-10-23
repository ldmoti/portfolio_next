import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: "url('/images/Modern Software Development Illustration With Tech Icons And Text.png')".replace(/&/g, '&amp;'),
    }}>
      <div className="backdrop-blur-sm bg-black bg-opacity-50 min-h-screen p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Get in Touch</h1>
          <p className="text-lg mb-12 text-center text-white">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <form className="flex flex-col" action="#" method="post">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-white">Name:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-white bg-opacity-20 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-white">Email:</label>
                <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-white bg-opacity-20 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-white">Message:</label>
                <textarea id="message" name="message" rows={5} required className="w-full p-2 rounded bg-white bg-opacity-20 text-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 self-start">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
