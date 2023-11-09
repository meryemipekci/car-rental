import { generateImage } from "../../utils";
import { CarType } from "../types";
import { AnimatePresence, motion } from "framer-motion";

type DetailProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};

const DetailModal = ({ isOpen, closeModal, car }: DetailProps) => {
  console.log(DetailModal);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="p-5 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl "
          >
            {/* kapatma butonu */}
            <button
              onClick={closeModal}
              className="cursur-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="close" />
            </button>
            {/*  > fotograflar  */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-[120px] bg-pattern bg-cover bg-center rounded-lg">
                <img className="h-full mx-auto" src={generateImage(car)} />
              </div>
              {/* kucuk resimler */}
              <div className="flex gap-1 overflow-hidden">
                <div className="flex-1 flex relative w-full h-20 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "29")}
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 -translate-y-3 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "33")}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "13")}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* araba bilgilerini objeden diziye cevirip donme */}
            {Object.entries(car)
              .filter((i) => i[0] !== "year")
              .map(([key, value]) => (
                <div className="flex justify-between leading-3 text-sm h-[50px] my-[-16px] ">
                  <h4 className="capitalize text-gray ">
                    {key.replace("_", " ")}
                  </h4>
                  <p className=" text-black-100 font-semibold ">{value}</p>
                </div>
              ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
