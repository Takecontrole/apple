import Image from "next/image";
import Button from "./Button";
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from "../styles/syles.module.css"
function Landing() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      
      background: "linear-gradient(to right, pink, violet )",
      backgroundClip: 'text',
      webkitBackgroundClip: "text",
      color: 'transparent',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: 'black' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ 
      color:'black',
      
    }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { background: "linear-gradient(to right, pink, violet )",
      backgroundClip: 'text',
      webkitBackgroundClip: "text",
      color: 'transparent', },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Сила', 'Вдохновение', 'Интеллект']), 2000))
    ref.current.push(setTimeout(() => set(['Сила', 'Интеллект']), 5000))
    ref.current.push(setTimeout(() => set(['Сила', 'Интеллекта']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8"> 
      
       <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
         {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))} 
        </span>
                </h1>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src="/iphone.png" layout="fill" objectFit="contain" alt=""/>
      </div>
    </section>
  );
}

export default Landing;
