import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Arduino Hovercraft",
    description:
      "Alongside a group of 4, I programmed a hovercraft using the Arduino Uno R3 chip. The IR remote controlled hovercraft uses fans to go various directions, stop, and reverse. The speed is changeable. The code was written in Arduino C++    ",
    image: "/hoverboard.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://youtu.be/kxlDmpPKte0",
  },
  {
    name: "TetrisBrae",
    description: "Built my own version of Tetris using pygame library, with a built in login screen, password & username authenticator. Followed Software Development Life Cycle (SDLC), utilized classes, file reading, etc",
    image: "/tetrisbrae.jpg",
    github: "https://github.com/GBG7/TetrisBrae",
    link: "https://github.com/GBG7/TetrisBrae",
  },
  {
    name: "Breakout Pygame",
    description:
      "Programmed my own version of breakout using pygame library. That's it really.",
    image: "/breakoutproject.png",
    github: "https://github.com/GBG7/BreakoutTaha/tree/main",
    link: "https://github.com/GBG7/BreakoutTaha/tree/main",
  },
  {
    name: "Javascript Rock-Paper-Scissors",
    description:
      "Programmed my own version of Javascript RPS using the ProcessingJS JavaScript library. This program was one of my first ever games developed, and taught me a great deal of programming basics. Use the Khan Academy JS compiler for best experience.",
    image: "/rpsjs.webp",
    github: "https://github.com/GBG7/rpsjavascript",
    link: "https://www.khanacademy.org/computer-programming/new-program/5137397628321792",
  },
  {
    name: "Arduino IoT line-tracking robot",
    description:
      "Alongside my team partner, I built and programmed an line-tracking robot built from the Arduino IoT chip. Robot would follow a black line, and if off course, it would spin until it detects a black line again. Robot was connected to the internet using adafruit and could be controlled wirelessly.",
    image: "/arduinocompletion.jpg",
    github: "https://imgur.com/a/hxekMNm",
    link: "https://imgur.com/a/hxekMNm",
  },
  {
    name: "Personal portfolio website",
    description:
      "Built a personal portfolio website using css, html and javascript. Whilst the programming is inefficient and deprecated, the website looks relatively modern. In total, there are over 3000+ lines of code written for the site by myself alone, and it is still under development.",
    image: "/personalsite.png",
    github: "https://github.com/GBG7/personal/tree/master",
    link: "https://gbg7.github.io/personal/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col p-3 text-center md:p-3 md:text-left animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image 
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
