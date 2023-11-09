import { ButtonProps } from "../types";

const CustomButton = ({
  title,
  design,
  handleClick,
  btnType,
  disabled,
  rIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"} //gonderildiyse btn type gonderilmediyse "button"
      className={`custom-btn bg-primary-blue transition rounded-full hover:bg-blue-800 text-white${design}`}
      onClick={handleClick}
    >
      <span className="flex-1"> {title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="right-arrow" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
