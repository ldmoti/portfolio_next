import React from 'react';
import Image from 'next/image';

export default function Skills() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: "url('/images/Modern Software Development Illustration With Tech Icons And Text.png')",
    }}>
      <div className="backdrop-blur-sm bg-black bg-opacity-50 min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/web_deveopment_icon.svg" alt="Web Development" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Web Development</h3>
              <p className="text-gray-300">HTML, CSS, JavaScript, Tailwind, Bootstrap, Bulma</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/database.png" alt="Database Management" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Database Management</h3>
              <p className="text-gray-300">SQL (MySQL, PostgreSQL), NoSQL (MongoDB), SQLite</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/testing.png" alt="Automated Testing" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Automated Testing</h3>
              <p className="text-gray-300">Unit testing, Integration testing, End-to-end testing, Widget testing, State management testing</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/mobile.jpg" alt="Mobile Development" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Mobile Development</h3>
              <p className="text-gray-300">React Native, Flutter, Android Studio, Dart, Kotlin, XML</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/versions_control.jpg" alt="Version Control" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Version Control</h3>
              <p className="text-gray-300">Git, GitHub</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/programming.jpg" alt="Programming" width={100} height={100} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">Programming</h3>
              <p className="text-gray-300">Python, Java, C, C++, Assembly</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Most Used Languages</h3>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg inline-block">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ldmoti&langs_count=9&theme=dark" 
                alt="Most Used Languages" 
                width={400} 
                height={300} 
                className="mx-auto"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Skills & Technologies</h3>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg inline-block">
              <img 
                src="https://skillicons.dev/icons?i=js,html,css,tailwind,bootstrap,bulma,mysql,mongodb,sqlite,reactnative,flutter,androidstudio,dart,kotlin,xml,git,figma,python,java,c,c++,cs,assembly,go,nodejs,nextjs,express,prisma,heroku,vercel" 
                alt="Skills and Technologies" 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}