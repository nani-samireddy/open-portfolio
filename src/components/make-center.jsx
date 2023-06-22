const MakeCenter = (props) => {
  return (
    <div className="w-100vw flex justify-center py-10">
      <div className="w-80p 2xl:w-60vw min-h-90vh flex flex-col justify-center items-center">
        {props.children}
      </div>
    </div>
  );
};

export default MakeCenter;
