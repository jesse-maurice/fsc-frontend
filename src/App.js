import './App.css';

import FscSetup from './components/common/FscSetup';
import Hero from './components/common/Hero';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <>
      <div className="w-full fsc-background bg-[#d6dbe5] bg-opacity-10">
        {/* <img
          className="absolute z-0 object-fill h-full lg:w-full md:w-full"
          src={fscbackground}
          alt="fsc background 2"
          loading="lazy"
        ></img> */}
        <Navbar />
        <Hero />
        <FscSetup />
      </div>
    </>
  );
}

export default App;
