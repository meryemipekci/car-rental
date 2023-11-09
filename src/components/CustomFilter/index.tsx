import Select from "react-select";
import { OptionType } from "../types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[];
};
const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    //url e eklencek parametreyi belirleme
    const key = title === "Fuel type" ? "fuel" : "year";
    //eger bir deger secildiyse onu url ekle
    if (selected?.value) {
      params.set(key, selected.value.toLowerCase());
    } else {
      //egerki secilen secenegin value su bossa url den parametreyı kaldiriryoruz
      params.delete(key);
    }
    //url i guncelle
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        placeholder={title}
        options={options}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default CustomFilter;
