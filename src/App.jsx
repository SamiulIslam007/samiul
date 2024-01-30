import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="text-3xl md:text-5xl text-white">
          Hi I am{" "}
          <span>
            <Typewriter
              words={["Samiul Islam.", "a web developer."]}
              loop={true}
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
