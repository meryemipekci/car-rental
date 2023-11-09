import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  //todo
  const scrollTo = () => {
    const ele: HTMLElement | null = document.getElementById("catalogue");
    ele?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Start the trip, feel the freedom</h1>
        <p className="hero__subtitle text-gray-200">
          Ready for an unforgettable journey with gold standard service will
          you?Experience renting a car with Gold Options. You can crown each
          moment so that it becomes truly memorable.
        </p>

        <CustomButton
          title="Discover cars"
          design="mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          src="/hero.png"
          className="img-fluid object-contain"
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
