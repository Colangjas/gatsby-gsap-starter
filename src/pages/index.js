import * as React from "react"
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);


const IndexPage = () => {
  gsap.to(".box", { 
    duration: 2,
    x: 200,
    rotation: 360,
  });
  return (
    <main>
      <div className="selector">
        <h1 className="text-3xl">GSAP Test</h1>
      </div>
      <section className="w-full flex justify-center">
        <div className="box green h-12 w-12"></div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
