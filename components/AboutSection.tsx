import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "nextJS" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Arduino" },
  { skill: "C++" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Java" },
  { skill: "Scripting" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl pt-3">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col p-10 space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-20 md:flex-row md:text-left text-lg">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              My name is Taha and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-disciplined"}</span>, and
              <span className="font-bold">{" driven"}</span> student based in 
              Toronto, Canada.
            </p>
            <br />
            <p>
              I've attended Satec @WA Porter & Cederbrae Collegiate Institue highschools,
              and am an incoming {" "}
              <span className="font-bold text-teal-500">
                UofT Student
              </span>{" "}
              for the computer science program! 
            </p>
            <br />
            <p>
              I have a grand range of hobbies and passion that make a verstaile person. 
              I enjoy programming, playing video games, solving various puzzles like Rubik's Cubes. I also enjoy
              reading, playing sports, biking, weight lifting, and tinkering with my devices. 
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start md:pr-5">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold text-base"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.gif"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
