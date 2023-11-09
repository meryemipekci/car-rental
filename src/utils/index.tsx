import { CarType, filterType } from "../components/types";
import { colors } from "../contants";

const options = {
  headers: {
    "X-RapidAPI-Key": "aaa87057c5mshd59e724c7729e2fp1401ffjsnc9179aababe1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "bmw",
    model = "",
    limit = "5",
    year = "",
    fuel = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    options
  );

  return await res.json();
}
// fotograf url i olusturan bir method

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelfamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  if (angle) {
    url.searchParams.append("angle", angle);
  }
  //rastgele renk secimi

  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  // console.log(url);
  return String(url);
};
