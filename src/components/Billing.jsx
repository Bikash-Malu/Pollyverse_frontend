import { apple, banner1, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={banner1} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Contrasting Shapes<br className="sm:block hidden" /> 
       Collection of Modern Vases
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The vase on the left is the shortest and widest, with a rounded body and a narrow neck.
 The middle vase is the tallest and thinnest, with a long, slender body and a slightly wider neck. The vase on the right is shorter and wider than the middle vase, with a curved body and a wide neck.
      </p>
    </div>
  </section>
);

export default Billing;
