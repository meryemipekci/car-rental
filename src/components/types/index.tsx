import { MouseEventHandler } from "react";

//buton bileseninin aldigi proplarin tipini tanımlama
export type ButtonProps = {
  title: string;
  design?: string;
  disabled?: boolean;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler;
};
export type OptionType = {
  label: string;
  value: string;
};

export type filterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};

//araabanın bilgileri

export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  yearnumber19: number;
};
