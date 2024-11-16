import Nav from "../navBar/nav"
import { Banner } from "../banner/banner"
import About from "../about/about"
import Path from "../path/path"
import Skills from "../skills/skills"
import Project_section from "../projects/project_section"

import Contact from "../contact/contact"
import { ScrollProvider } from "../../lib/context"
import { useEffect, useState } from 'react';
import Loading from '../loading/loading'

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or component loading
    const loadData = async () => {
      // Simulate a fetch call or any other async operation
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with your actual data fetching logic
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while loading
  }
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
