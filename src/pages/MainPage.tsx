import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { fetchCars } from "../utils";
import { CarType } from "../components/types";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../contants";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    //url deki butun paramlari alı ve obje olusturur
    const paramOBJ = Object.fromEntries(params.entries());
    // console.log("param obj bak", paramOBJ);

    //arabaa veerilerini al
    fetchCars(paramOBJ).then((res: CarType[]) => setCars(res));
  }, []);
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car catalogue</h1>
          <p>Find cars that interest you</p>
        </div>
        {/* filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel type" options={fuels} />
            <CustomFilter title="year of production" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          //arabalar gelmediyse ekrana uyari basilir
          <div className="home__error-container">
            <h2>Sorry, no result found</h2>
          </div>
        ) : (
          //veri geidiyse ekrana kartlar basilir
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
