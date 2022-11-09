import * as React from "react"
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

const { useLayoutEffect, useRef } = React;

const IndexPage = () => {
  const app = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.to(".box", { 
      duration: 2,
      x: 200,
      rotation: 360,
      backgroundColor: '#8d3dae',
    })
      .then(gsap.to(".circle", { x: 40, fill: 'blue', }))
      .then(
        gsap.to(".svgBox", { 
          duration: 2,
          x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
          xPercent: -100,
          // or target SVG attributes
          attr: {
            fill: '#8d3dae',
            rx: 50, 
          },
        })
      )
    
    }, app);    
    return () => ctx.revert();
  });

  return (
    <main  ref={app} className="App">
      <div className="selector">
        <h1 className="text-3xl">GSAP Test</h1>
      </div>
      <section className="w-full flex justify-center">
        <div className="box bg-green-600 hover:bg-cyan-600 h-16 w-16 rounded-sm"></div>
      </section>
      <section className="w-full flex justify-center">
        <div className="circle bg-green-600 hover:bg-cyan-600 h-16 w-16 rounded-full"></div>
      </section>
      <section className="w-full flex justify-center">
        <svg id="svg" viewBox="0 0 100 100" className="h-40">
          <rect className="svgBox" fill="#28a92b" x="0" y="35" width="30" height="30" rx="2" />
        </svg>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
