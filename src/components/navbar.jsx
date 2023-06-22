import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      id="NavBar"
      className="w-100vw flex justify-center items-center relative  smooth-trasnsition "
    >
      {!showModal && (
        <div className="w-80p  2xl:w-60vw flex justify-between  py-8 md:py-10 md:px-10 px-4">
          <div>
            <h1 className="font-lg">
              I&apos;m <span className="font-bold">nani</span>
            </h1>
          </div>

          <div className=" md:flex hidden gap-10">
            <a className="nav-element" href="#about">
              About
            </a>
            <a className="nav-element" href="#work">
              Work
            </a>
            <a className="nav-element" href="#initiatives">
              Initiatives
            </a>
            <a className="nav-element" target="_blank" href="https://blog.nanisamireddy.dev">
              Blog
            </a>
            <a className="nav-element" href="#contact">
              Contact
            </a>
          </div>
          <div className="block md:hidden">
            <span
              onClick={() => setShowModal(true)}
              className="material-symbols-outlined"
            >
              menu
            </span>
          </div>
        </div>
      )}
      {/* mobile modal */}
      {showModal && (
        <div className=" z-50 flex flex-col justify-center  navmobileblur md:hidden  absolute h-100vh w-100vw top-0 left-0">
          <div className="w-full flex justify-end">
            <span
              onClick={() => setShowModal(false)}
              className="material-symbols-outlined p-10 absolute text-3xl"
            >
              close
            </span>
          </div>
          <div className="text-2xl h-full font-bold flex flex-col justify-center items-center gap-10">
            <a href="#about" onClick={() => setShowModal(false)}>
              About
            </a>
            <a onClick={() => setShowModal(false)} href="#work">
              Work
            </a>
            <a onClick={() => setShowModal(false)} href="#initiatives">
              Initiatives
            </a>
            <a onClick={() => setShowModal(false)} href="https://blog.nanisamireddy.dev" target="_blank" >
              Blog
            </a>
            <a onClick={() => setShowModal(false)} href="#contact">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
