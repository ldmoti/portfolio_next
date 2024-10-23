import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: "url('/images/Modern Software Development Illustration With Tech Icons And Text.png')",
    }}>
      <div className="backdrop-blur-sm bg-black bg-opacity-50 min-h-screen">
        <section id="home" className="p-8 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              <span className="block">Moti</span> 
              <span className="block">Leggese</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-white">Software Engineering Student</h2>
            <p className="mb-8 text-white text-lg">
              A passionate software engineering student focused on building innovative solutions.
            </p>
            <a href="#projects" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">See My Projects</a>
          </div>
        </section>

        <section id="projects" className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/flutter-project.jpg" alt="Project 1" width={300} height={200} className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Video Game Catalogue</h3>
              <p className="mb-4 text-gray-300">This project centers on creating a video game catalogue REST API tailored for Ethiopia. The user interface prioritizes seamless Authentication/Authorization processes, featuring easy Login, Signup, and Role Management.</p>
              <a href="https://github.com/hmyunis/flutter-2024-proj.git" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block">View on GitHub</a>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/flutter-project.jpg" alt="Project 2" width={300} height={200} className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Video Game Catalogue using riverpod</h3>
              <p className="mb-4 text-gray-300">Video Game Catalogue using flutter riverpod state Management.</p>
              <a href="https://github.com/hmyunis/flutter-2024-proj-riverpod.git" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block">View on GitHub</a>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Image src="/images/flutter-project.jpg" alt="Project 3" width={300} height={200} className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Video Game Catalogue using bloc</h3>
              <p className="mb-4 text-gray-300">Video Game Catalogue using flutter bloc state Management.</p>
              <a href="https://github.com/hmyunis/flutter-2024-proj.git" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="project-showcase" className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Project Showcase</h2>
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap cursor-grab pb-4 max-w-6xl mx-auto">
            <Image src="/images/login_page.jpg" alt="Login Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/registration_page.jpg" alt="Registration Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/explore_page.jpg" alt="Explore Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/favorites_page.jpg" alt="Favorites Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/profile_pagex.jpg" alt="Profile Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/profile_deletion.jpg" alt="Profile Deletion" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/profile_update.jpg" alt="Profile Update" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/role_managment.jpg" alt="Role Management" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/game_details.jpg" alt="Game Details" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/review.jpg" alt="Review" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/about_page.jpg" alt="About Page" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
            <Image src="/images/drawer.jpg" alt="Drawer" width={300} height={420} className="w-60 h-80 object-cover pointer-events-none inline-block rounded-lg" />
          </div>
        </section>

        <section id="skills" className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="md:w-1/2 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Most Used Languages</h3>
              <div className="inline-block">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ldmoti&langs_count=9&theme=transparent&text_color=FFFFFF&bg_color=00000000" 
                  alt="Most Used Languages" 
                  width={400} 
                  height={300} 
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">GitHub Streak</h3>
                <div className="inline-block">
                  <img 
                    src="https://github-readme-streak-stats.herokuapp.com?user=ldmoti&theme=react&background=EB545400" 
                    alt="GitHub Streak" 
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Portfolio Repository</h3>
                <div className="inline-block">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=ldmoti&repo=portfolio&theme=transparent&text_color=FFFFFF&bg_color=00000000" 
                    alt="Portfolio Repository" 
                    className="mx-auto"
                  />
                </div>
              </div>
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
        </section>

        <section id="volunteer" className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Volunteer Experience</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12 text-center text-white">
              I believe in the power of giving back to my community. My volunteer experiences have been incredibly rewarding, allowing me to make a tangible difference in the lives of others.
            </p>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg mb-8">
              <div className="flex justify-center mb-4">
                <Image src="https://ethiopiaact.org/wp-content/uploads/2018/10/EA-logo.svg" alt="ethiopiaact-logo" width={200} height={100} className="volunteer__experience-image" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center text-white">Ethiopia ACT (Community Health Project)</h2>
              <p className="text-lg mb-4 text-center text-gray-300">November 15, 2021 - January 2022</p>
              <p className="text-gray-300 mb-4">
                As an intern at Ethiopia ACT, I worked under the mentorship of social workers, nurses, and other project staff. My role focused on serving urban poor individuals and families facing chronic illnesses and economic challenges.
              </p>
              <p className="text-gray-300 mb-4">I provided direct assistance to beneficiaries, including:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Visiting sick, orphaned, and widowed beneficiaries in their communities/homes.</li>
                <li>Advocating for their needs to decision-makers.</li>
                <li>Updating electronic databases on beneficiaries.</li>
                <li>Assisting staff members in leveraging technology to improve service delivery.</li>
              </ul>
              <p className="text-gray-300">
                My time at Ethiopia ACT allowed me to gain valuable experience in social work practice, including support group care, beneficiary home visits, and needs assessments. I also learned the importance of effective communication, collaboration, and working with vulnerable populations.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg mb-8">
              <div className="flex justify-center mb-4">
                <Image src="/images/red_cross.svg" alt="Red Cross logo" width={200} height={100} className="volunteer__experience-image" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center text-white">Ethiopian Red Cross Society</h2>
              <p className="text-lg mb-4 text-center text-gray-300">2019/20 GC</p>
              <p className="text-gray-300 mb-4">
                I volunteered with the Ethiopian Red Cross Society, where I gained experience in various areas, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Database registration.</li>
                <li>Distribution of food and non-food items to city residents affected by emergencies (natural and man-made).</li>
                <li>Participation in annual tree plantation, sanitation, and cleaning campaigns.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12 text-center text-white">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
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
        </section>
      </div>
    </main>
  );
}