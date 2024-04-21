import ScrollTrigger from "react-scroll-trigger";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import React, { useState } from 'react'
const Stats = () => {
  const [enter, setenter] = useState(false);
  return (
    <div>
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <ScrollTrigger onEnter={()=>setenter(true)} onExit={()=>setenter(false)}>
           { enter &&<CountUp className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white sm:text-2xl" start={0} end={300} duration={2} delay={0} />
} <span className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white sm:text-2xl">+</span>
          </ScrollTrigger>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}

    </section>
    
    </div>
  )
}

export default Stats
