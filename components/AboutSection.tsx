import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Diplomacy" },
  { skill: "Persuasion" },
  { skill: "Cunning" },
  { skill: "Manipulation" },
  { skill: "Lack of Empathy" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl pt-14 md:pt-3">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col p-10 space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-20 md:flex-row md:text-left text-lg">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p className = "text-center md:text-left">
            Greetings, I am Gertrude, the Queen of Denmark, and Hamlet's mother.
            </p>
            <br />
            <p className = "text-center md:text-left" >
            Within the intricacies of the royal court, I navigate with a shrewd and discerning eye, ever mindful of the power dynamics and the preservation of my control over the monarchy.
            </p>
            <br />
            <p className = "text-center md:text-left">
            I enjoy the privileges that come with power and the admiration of the court. However, true happiness is often elusive amidst the challenges of my life.
            </p>
            <br />
            <p className = "text-center md:text-left">
            I relish in,{" "}
              <span className="font-bold text-teal-500">
                maintaining power and control,
              </span>{" "}
              and safeguarding the stability of the monarchy and my position at the helm.
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
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:pt-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
