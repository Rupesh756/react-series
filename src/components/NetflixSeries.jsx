import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-cols-3 gap-40">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};
export default NetflixSeries;

export const Header = () => {
  return (
    <div className="bg-sky-400 text-white p-20">
      <h2>List of NETFLIX Series</h2>
    </div>

  )
};
export const Footer = () => {
  return <h3 className=''>Copyrigth by @rupesh73</h3>
}