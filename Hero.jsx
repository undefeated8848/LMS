import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div
      className="hero flex flex-col items-center justify-center w-full 
      mt-10 md:mt-20 
      px-7 md:px-0 space-y-4 text-center"
    >
      <h1 className="head md:text-home-heading-large text-home-heading-small 
      relative font-bold text-gray-800 max-w-3xl">
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">fit your choice.</span>

        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-6 right-0"
        />
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content,
        and a supportive community to help you achieve your professional goals.
      </p>
      <SearchBar/>
    </div>
  );
};

export default Hero;
