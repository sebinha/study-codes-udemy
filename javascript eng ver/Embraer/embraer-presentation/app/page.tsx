"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [state, setState] = useState({
    title: "Oi,",
    titleTwo: "Me chamo",
    titleThree: "Victor",
  });
  const parallax = useRef(null!);
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;


  const embraerName = "/images/embraerName.png"
  const phenom300 = "/images/phenom300.jpeg"
  const embraerPlane = "/images/embraerPlane.png"
  const euJoinha = "/images/euJoinha.webp"
  const euEstudando = "/images/euEstudando.webp"
  const euObrigado = "/images/obrigado.webp"
  const teamwork = "/images/teamwork.png"
  const terraGirando = "/images/terraGirando.gif"
  const cloud = "/images/cloud.svg"
  return (
    <div>
      <Parallax
        ref={parallax}
        pages={5}
        className="y mandatory-scroll-snapping normal-stop"
      >
        <ParallaxLayer offset={0} speed={1} factor={1}>
          <Image alt="" src={phenom300} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={-0.1}
          speed={0.3}
          factor={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt=""
            width={100}
            height={100}
            style={{
              cursor: "pointer",
            }}
            className="breathing-button"
            onClick={() => parallax.current.scrollTo(1)}
            src={embraerPlane}
          />
          <Image alt="" width={500} height={500} src={embraerName} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={5}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer sticky={{ start: 1, end: 1.8 }}>
          <Image
            style={{
              cursor: "pointer",
              marginLeft: "2%",
            }}
            onClick={() => parallax.current.scrollTo(2)}
            alt=""
            className="breathing-button transition-transform rotate-90"
            width={100}
            height={100}
            src={embraerPlane}
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2, end: 2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul style={{ fontSize: "20px", textShadow: "0 0 10px #000" }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: '1rem' }}>
              Todo final de ano há uma entrega que integra hardware + software.
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: '1rem' }}>
              Palestras para universitários dentro da IBM sobre apps internos.
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: '1rem' }}>
              Projetos e atividades especiais (PAE) - IMT - Ciência dos Foguetes.
            </li>
          </ul>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          factor={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="home">
            <div className="home-intro">
              <h2>
                <div className="title">{state.title}</div>
                <div className="titleTwo">{state.titleTwo}</div>
                <div className="titleThree">{state.titleThree}</div>
              </h2>
              <div className="text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Sou FullStack Developer.",
                      "Sou Adepto ao Hardware.",
                      "Sou Entusiasta de RPG.",
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <Image
            alt=""
            width={15}
            height={15}
            src={cloud}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.72} factor={1} speed={0.2}>
          <Image
            style={{
              marginLeft: "78%",
            }}
            alt=""
            width={300}
            height={300}
            src={euJoinha}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            alt=""
            width={10}
            height={10}
            src={terraGirando}
            style={{ width: "30%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.72} factor={1} speed={0.2}>
          <Image
            style={{
              marginLeft: "5%",
            }}
            alt=""
            width={300}
            height={300}
            src={euEstudando}
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 2.9 }}>
          <Image
            style={{
              cursor: "pointer",
              marginLeft: "88%",
            }}
            onClick={() => parallax.current.scrollTo(3)}
            alt=""
            className="breathing-button transition-transform rotate-90"
            width={100}
            height={100}
            src={embraerPlane}
          />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 3.8 }}>
          <Image
            style={{
              cursor: "pointer",
              marginLeft: "2%",
            }}
            onClick={() => parallax.current.scrollTo(4)}
            alt=""
            className="breathing-button transition-transform rotate-90"
            width={100}
            height={100}
            src={embraerPlane}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image alt="" width={520} height={520} src={teamwork} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Uma Embraer.", "Um só time."],
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "100px",
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Obrigado!").start().pauseFor(10000000000);
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image alt="" width={500} height={500} src={euObrigado} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
