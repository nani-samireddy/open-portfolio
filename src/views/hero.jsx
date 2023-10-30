import MakeCenter from "../components/make-center";
import { data } from "../data/data";
const Hero = () => {
  return (
    <div id="about">
      <MakeCenter>
        <h1 className="text-5xl md:text-6xl lg:text-7xl  leading-normal lg:leading-relaxed py-20">
          I’m <span className="font-bold">{data.name}</span> - an enthusiastic
          <span className="font-medium">designer & developer</span> based in
          India.
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-normal lg:leading-relaxed pb-20 ">
          {data.aboutMe}
        </p>
      </MakeCenter>
    </div>
  );
};

export default Hero;
