import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Courtly Arts",
    description:
      " I am enamored by the courtly arts, as they bring me great pleasure and allow me to escape the demands of royal life. The beauty and grace of music, dance, and poetry provide moments of respite and inspiration within the grandeur of the royal court.",
    image: "/1123.webp",
    github: "https://en.wikipedia.org/wiki/Saturn_Devouring_His_Son",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/330px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
  },
  {
    name: "Reading and Intellectual Pursuits",
    description: "I enjoy reading and intellectual pursuits because they broaden my understanding of the world and stimulate my mind. They provide me with knowledge, insights, and the opportunity to explore diverse perspectives, enriching my role as a queen.",
    image: "/tetrisbrae.jpg",
    github: "https://en.wikipedia.org/wiki/Saturn_Devouring_His_Son",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/330px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
  },
  {
    name: "Music",
    description:
      "I find joy in music because it stirs my emotions and transports me to a realm of beauty and expression. Whether it's the soothing melodies or the uplifting rhythms, music has the power to uplift my spirit and provide a respite from the demands of royal life.",
    image: "/breakoutproject.webp",
    github: "",
    link: "https://www.youtube.com/playlist?list=PL4v870MCrPdWh7ry6eUdi6D49-9VMVB-Y",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Interests
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
