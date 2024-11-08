
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import HyperText from "../ui/hyper-text";
export function Banner() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden  bg-background p-20   min-w-screen">
        <p className="z-10 text-white text-lg mr-2 bg-transparent">Hi, I am </p>
        
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-green-400 opacity-70 bg-transparent">
          
        <HyperText
      className="text-4xl font-bold w-6"
      text="Rohit"
    />

      </p>
      <AnimatedGridPattern className={"absolute top-0 left-0 w-full " }
      />
      </div>
      <p className="w-full text-white bg-transparent text-center absolute top-1/2 flex justify-center"><div className="w-1/2  bg-transparent mt-14"> a passionate <span className="text-2xl font-bold text-green-400 opacity-70 bg-transparent">Full Stack Developer</span> with a love for continuous learning and a keen interest in technology. I thrive on building innovative solutions and exploring the latest trends in the tech world. Let's connect and create something amazing together!</div></p>
    </>

    
  );
}
