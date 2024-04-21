import { banner2, card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Helpful Robot with a Gift <br className="sm:block hidden" /> in way of revolation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      a friendly-looking robot holding a blue gift box. The robot appears to be made of metal and has a cylindrical body, two arms, and a large head with antennae. The robot’s friendly appearance is conveyed through its large eyes and a  wide smile
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={banner2} alt="billing" className="w-[90%] h-[100%] rounded-2xl" />
    </div>
  </section>
);

export default CardDeal;
