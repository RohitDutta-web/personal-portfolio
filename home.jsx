import Nav from "./src/components/navBar/nav"
import { Banner } from "./src/components/banner/banner"
import About from "./src/components/about/about"


export default function Home() {
  return (
    <>
      <div >
      <Nav />
        <Banner />
        <About/>
      </div>
    </>
  )
}
