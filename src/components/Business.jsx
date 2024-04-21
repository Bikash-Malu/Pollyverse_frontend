import { Tilt } from "react-tilt";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const FeatureCard = ({ icon, title, content, index }) => (
  <Tilt className={`flex flex-row p-6 rounded-[20px]  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} options={defaultOptions}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3" >
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </Tilt>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Transforming Concepts into 3D Realities,<br className="sm:block hidden" /> From Concept to Creation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Bring Your Imagination to Life
        ,Creating Worlds in Every Detail,
        Design, Render, Repeat,
        Where Ideas Take Shape,
        Crafting Reality, One Pixel at a Time.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
