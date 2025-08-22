"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full px-5 lg:px-20">
      <header className="flex items-center justify-between py-5 lg:py-5 lg:static relative mb-4 lg:mb-0">
        <p className="font-white font-arvo font-bold text-2xl">benjoe.dev</p>
        {!open ? (
          <button onClick={() => setOpen(true)}>
            <img src="/burger.png" className="h-7 lg:hidden" alt="" />
          </button>
        ) : (
          <button onClick={() => setOpen(false)}>
            <img src="/close.png" className="h-7 lg:hidden" alt="" />
          </button>
        )}
        {open && (
          <div
            className="bg-amber-100 lg:hidden flex flex-col items-center gap-5 font-semibold text-xl absolute top-[100%] 
        right-0 left-0 p-3 rounded "
          >
            <a
              className="transition-colors duration-300 hover:text-blue-500"
              href="#servicesSection"
            >
              Services
            </a>
            <a
              className="transition-colors duration-300 hover:text-blue-500"
              href="#worksSection"
            >
              Works
            </a>
            <a
              className="transition-colors duration-300 hover:text-blue-500"
              href="#experienceSection"
            >
              Experience
            </a>
            <a
              className="transition-colors duration-300 hover:text-blue-500"
              href="#notesSection"
            >
              Notes
            </a>
          </div>
        )}
        <div className="hidden lg:flex gap-12 font-semibold text-xl">
          <a
            className="transition-colors duration-300 hover:text-blue-500"
            href="#servicesSection"
          >
            Services
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-500"
            href="#worksSection"
          >
            Works
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-500"
            href="#experienceSection"
          >
            Experience
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-500"
            href="#notesSection"
          >
            Notes
          </a>
        </div>

        <a
          href=""
          className="hidden lg:block py-2 px-4 bg-blue-500/35 rounded-3xl "
        >
          camingalbenjoe@email.com
        </a>
      </header>
      <div className="lg:bg-[url('/bg.png')] bg-size-[550px] bg-no-repeat bg-center mb-10 lg:mb-0">
        <div
          className="lg:bg-[url('/image.png')] bg-size-[450px] bg-no-repeat bg-center 
      lg:h-[calc(100vh-100px)] flex flex-col justify-center gap-5 lg:gap-0 lg:grid lg:grid-cols-2 lg:justify-items-end items-center font-delius text-2xl px-10 z-1"
        >
          <p className="  font-bitcount-single text-3xl text-center lg:mr-auto">
            The name is <br />
            Benjoe Camingal
          </p>
          <p className="hidden lg:block">
            I&apos;m a fullstack web app developer
          </p>
          <p className="hidden lg:block mr-auto">
            Almost 4 years of experience
          </p>
          <p className="hidden lg:block">Degree Holder</p>
          <ul className="lg:hidden list-disc list-inside space-y-2">
            <li className="">I&apos;m a fullstack web app developer</li>
            <li className=" mr-auto">Almost 4 years of experience</li>
            <li className="">Degree Holder</li>
          </ul>
        </div>
      </div>
      <div>
        <section
          id="servicesSection"
          className="bg-blue-500/35 rounded-2xl p-5 lg:p-10  "
        >
          <p className="font-arvo text-2xl font-bold mb-4 md:mb-8">
            Services Offered
          </p>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
            <div className=" border rounded-2xl p-5 mb-5 md:mb-8 break-inside-avoid">
              <p className="font-bitcount-single text-xl">
                Programming Languages:
              </p>
              <ul className="list-disc list-inside font-delius">
                <li>Python</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className=" border rounded-2xl p-5  mb-5 md:mb-8 break-inside-avoid">
              <p className="font-bitcount-single text-xl">Frontend:</p>
              <ul className="list-disc list-inside font-delius">
                <li>Next.js</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className=" border rounded-2xl p-5  mb-5 md:mb-8 break-inside-avoid">
              <p className="font-bitcount-single text-xl">Backend:</p>
              <ul className="list-disc list-inside font-delius">
                <li>Django</li>
                <li>Django Rest Framework</li>
              </ul>
            </div>
            <div className=" border rounded-2xl p-5  mb-5 md:mb-8 break-inside-avoid">
              <p className="font-bitcount-single text-xl">Database:</p>
              <ul className="list-disc list-inside font-delius">
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className=" border rounded-2xl p-5  mb-5 md:mb-8 break-inside-avoid">
              <p className="font-bitcount-single text-xl">Tools:</p>
              <ul className="list-disc list-inside font-delius">
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="worksSection" className=" p-10 pb-0">
          <p className="font-arvo text-2xl font-bold mb-8">Works</p>
          <div className="columns-1 md:columns-2 gap-10 ">
            <div className=" border rounded-2xl p-5 mb-8 break-inside-avoid flex flex-col gap-y-4 font-delius">
              <p className="font-bitcount-single text-xl">Habit Tracker</p>
              <img src="/habit.png" alt="" />
              <p>
                This is a simple habit tracker application built with Next.js
                and Supabase. It allows users to create, track, and manage their
                habits.
              </p>
              <p>Technologies Used:</p>
              <ul className="list-disc list-inside font-delius">
                <li>Next.js</li>
                <li>Supabase</li>
                <li>Material-UI</li>
                <li>Chart.js</li>
                <li>Typescript</li>
              </ul>
              <a
                href="https://habit-tracker-rouge-eight.vercel.app/login"
                target="_blank"
                className="underline"
              >
                https://habit-tracker-rouge-eight.vercel.app/login
              </a>
            </div>
            <div className=" border rounded-2xl p-5 mb-8 break-inside-avoid flex flex-col gap-y-4 font-delius">
              <p className="font-bitcount-single text-xl">news.ai</p>
              <img src="/news.png" alt="" />
              <p>
                Welcome to News.ai! This is a news aggregator application that
                fetches the latest news from the Philippines and displays it in
                a user-friendly interface.
              </p>
              <p>Technologies Used:</p>
              <ul className="list-disc list-inside ">
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Axios</li>
              </ul>
              <a
                href="https://news-ai-orcin.vercel.app/"
                target="_blank"
                className="underline"
              >
                https://news-ai-orcin.vercel.app/
              </a>
            </div>
          </div>
        </section>
        <section id="experienceSection" className=" p-10 pb-0">
          <p className="font-arvo text-2xl font-bold mb-8">Experience</p>
          <div className="columns-1 gap-10 ">
            <div className=" border rounded-2xl p-5 mb-8 break-inside-avoid flex flex-col gap-y-4 font-delius">
              <p>
                Passionate web developer with hands-on experience building and
                deploying modern web applications. Skilled in both frontend and
                backend technologies, with a focus on creating clean, efficient,
                and user-friendly solutions.
              </p>
              <p className="font-semibold">Experience Summary:</p>
              <ul className="list-disc list-inside font-delius">
                <li>
                  Built and deployed full-stack web applications using Django,
                  React, and MySQL.
                </li>
                <li>
                  Developed REST APIs for seamless data communication between
                  frontend and backend.
                </li>
                <li>
                  Implemented responsive UI designs with modern frontend
                  frameworks like React and Next.js.
                </li>
                <li>
                  Integrated third-party APIs and authentication systems for
                  real-world project requirements.
                </li>
                <li>
                  Utilized version control (Git) and deployment tools for
                  efficient workflow management.
                </li>
                <li>
                  Collaborated with teams to gather requirements, troubleshoot,
                  and deliver functional solutions.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="notesSection" className=" p-10 ">
          <p className="font-arvo text-2xl font-bold mb-8">
            Developer&apos;s Note
          </p>
          <div className="columns-1 gap-10 ">
            <div className=" border rounded-2xl p-5 mb-8 break-inside-avoid flex flex-col gap-y-1 font-delius">
              <p>Mark Benjoe B. Camingal</p>
              <p>
                Bachelor of Industrial Technology - Computer Technology (July
                2025)
              </p>
              <p>San Juan, Batangas</p>
              <p>+63 938 645 4891</p>
              <p> Facebook: Benjoe Camingal</p>
              <p>
                Github:{" "}
                <a
                  href="https://github.com/benjoecamingal"
                  target="_blank"
                  className="underline text-blue-600"
                >
                  https://github.com/benjoecamingal
                </a>
              </p>

              <p className="font-semibold">Experience Summary:</p>
              <ul className="list-disc list-inside font-delius lg:grid grid-cols-2">
                <li>
                  Hardworking and committed to delivering high-quality results
                </li>
                <li>
                  Quick to adapt to new tools, frameworks, and project
                  requirements
                </li>
                <li>
                  Detail-oriented with a focus on writing clean and maintainable
                  code
                </li>
                <li>
                  Strong problem-solving mindset and eager to learn from
                  challenges
                </li>
                <li>
                  Collaborative and open to feedback for continuous improvement
                </li>
                <li>
                  Self-motivated with a habit of staying consistent and
                  disciplined
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
