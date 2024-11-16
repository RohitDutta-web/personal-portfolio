import Nav from "../navBar/nav"
import { Banner } from "../banner/banner"
import About from "../about/about"
import Path from "../path/path"
import Skills from "../skills/skills"
import Project_section from "../projects/project_section"

import Contact from "../contact/contact"
import { ScrollProvider } from "../../lib/context"

export default function Home() {
  return (
    <>
      <ScrollProvider >
        <Nav />
        <Banner />
        <About />
        <Path />
        <Skills />
        <Project_section />
        <Contact />

      </ScrollProvider>
    </>
  )
}
