import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
function Header() {
  return (
    <header className=" ">
      <Navbar />
      <div className=" bg-bgPrimary h-[90vh] flex items-center justify-start">
        <div className="container mx-auto  text-center ">
          <h1 className="text-[#ffffff] text-4xl font-semibold">
            Hi, I am{" "}
            <span className="text-[#d73131]">
              <Typewriter
                words={["Samiul Islam."]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-[#d73131] mt-5 text-4xl font-semibold">
            I am a{" "}
            <span className="text-white">
              <Typewriter
                words={["front end developer.", "web developer."]}
                loop={false}
                cursor
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
