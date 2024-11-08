import Nav from "./src/components/navBar/nav"
import { Banner } from "./src/components/banner/banner"
import About from "./src/components/about/about"
import Path from "./src/components/path/path"
import Skills from "./src/components/skills/skills"



export default function Home() {
  return (
    <>
      <div >
      <Nav />
        <Banner />
        <About />
        <Path />
        <Skills />
     
      </div>
    </>
  )
}
