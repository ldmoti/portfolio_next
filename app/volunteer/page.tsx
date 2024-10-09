import React from 'react';
import Image from 'next/image';

export default function VolunteerActivity() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: "url('/images/Modern Software Development Illustration With Tech Icons And Text.png')",
    }}>
      <div className="backdrop-blur-sm bg-black bg-opacity-50 min-h-screen p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Volunteer Experience</h1>
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
      </div>
    </main>
  );
}