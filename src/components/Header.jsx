import Navbar from "./Navbar";
import samiulImg from "./samiul.jpeg";
import { Typewriter } from "react-simple-typewriter";
import DownloadButton from "./DownloadButton";
function Header() {
  return (
    <header className=" ">
      <Navbar />
      <div className=" bg-bgPrimary h-[90vh] flex flex-col items-center justify-center">
        <div className="container mx-auto  text-center ">
          <div className="w-[200px] h-[200px] mx-auto ">
            <img
              src={samiulImg}
              alt="samiul"
              className=" rounded-[50%] bg-center border-[#0e1525] border-[7px] outline-8 outline outline-red-500"
            />
          </div>
          <h1 className="text-[#ffffff] mt-7 text-3xl md:text-4xl font-semibold">
            Hi, I am{" "}
            <span className="text-[#d73131]">
              <Typewriter
                words={["Samiul Islam.", "Joy."]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-[#d73131] mt-5 text-2xl md:text-4xl font-semibold">
            I am a{" "}
            <span className="text-white">
              <Typewriter
                words={["programmer.", "web developer.", "learner."]}
                loop={false}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        <DownloadButton />
      </div>
    </header>
  );
}

export default Header;
