import { Typewriter } from "react-simple-typewriter";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="text-4xl md:text-5xl text-white">
          Hi I am{" "}
          <span>
            <Typewriter
              words={["Samiul Islam."]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </>
  );
}

export default App;
