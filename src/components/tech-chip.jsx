const TechChip = ({ tech }) => {
  return (
    <>
      <div className="tech-chip gap-2 w-max py-2 px-3 flex justify-center items-center">
        <img
          className="h-4 w-4 object-cover rounded-full"
          src={tech.image}
          alt={tech.name}
        />
        <p className=" text-xs">{tech.name}</p>
      </div>
    </>
  );
};

export default TechChip;
