import styles from "../style";
import { banner, discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import {Typewriter } from "react-simple-typewriter";
import Stats from "./Stats";
import Business from "./Business";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Hero = () => {
  return (
    <div>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      
      </div>
    </div>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       

        <div className="flex flex-row justify-between items-center w-full">
          <h6 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next Step to <br className="sm:block hidden" />{" "}
            
            <span className="text-gradient text-6xl"> <Typewriter
            words={["3d Modeling. ", "3d Rendering."]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="#ffffff"
            cursorBlinking="true"
          
          /></span>{" "}
          </h6>
        </div>

        <h4 className="font-poppins font-semibold ss:text-[62px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For New Revolation
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to our immersive 3D rendering webpage, where you can experience the magic of three-dimensional graphics right from your browser. Dive into a world of stunning visuals and interactive models that bring concepts to life with unparalleled realism.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={banner} alt="billing" className="w-[90%] h-[100%] relative z-[5] rounded-3xl"  />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    
    </section>
    <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Stats/>
      </div>
    </section>
    <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Business />
      </div>
    </section>
    <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Billing/>
      </div>
    </section>
    <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <CardDeal/>
      </div>
    </section>
    <Footer/>
    
    </div>

  );
};
export default Hero;
