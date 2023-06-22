import MakeCenter from "../components/make-center";
import FullCard from "../components/cards/full-card";
import { initiativesData } from "../data/initiatives";
import { data } from "../data/data";
const Initives = () => {
  return (
    <div id="initiatives">
      <MakeCenter>
        <h1 className="heading">My Initiatives</h1>
        <div className="flex flex-col gap-10">
          {data.initiatives.map((project) => (
            <>
              <FullCard project={project} />
            </>
          ))}
        </div>
      </MakeCenter>
    </div>
  );
};

export default Initives;
