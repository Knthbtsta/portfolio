import React from "react";
import Typewriter from "./Typewriter";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex flex-col justify-center items-center 2xl:pt-[100px] sm:pb-[30px]">
        <img
          src="me4.jpg"
          alt="React Image"
          className="rounded-full border-solid border-[10px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[300px] xl:h-[300px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-[200px] sm:h-[200px] border-[#C8AE7D]"
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:pb-[100px] px-[20px] md:pb-[200px] w-full">
        <h1 className="text-center text-[#65451F] sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl pb-[10px]">
          Hi I'm
        </h1>
        <h1 className="text-center text-[#765827] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl pb-[10px]">
          <Typewriter text="John Kenneth O. Bautista" delay={70} />
        </h1>
        <h1 className="text-center text-[#765827] sm:text-base  md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-3xl pb-[10px]">
          <Typewriter
            text="IT student with Programming and Hardware Servicing Skills"
            delay={70}
          />
        </h1>
        <a
          data-aos="fade-up"
          href="#Menu"
          className="flex flex-col justify-center items-center px-3 py-4 font-medium text-center sm:w-[130px] sm:h-[40px] sm:text-sm md:w-[200px] md:h-[50px] md:text-lg lg:w-[200px] lg:h-[50px] lg:text-lg xl:w-[250px] xl:h-[50px] xl:text-2xl 2xl:w-[250px] 2xl:h-[50px] 2xl:text-2xl text-white bg-[#765827] rounded-lg hover:bg-[#C8AE7D] hover:text-[#65451F] dark:bg-[#765827]"
        >
          GET STARTED
        </a>
      </div>
    </div>

    // <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pb-[50px] lg:pb-[50px] xl:pb-[50px] 2xl:pb-[50px]">
    //   <img
    //     src="me4.jpg"
    //     alt="React Image"
    //     className="rounded-full border-solid border-[10px] md:h-[400px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:rounded-full md:border-solid md:border-[15px] lg:h-[450px] lg:w-[450px] lg:rounded-full lg:border-solid lg:border-[15px] xl:h-[500px] xl:w-[500px] xl:rounded-full xl:border-solid xl:border-[20px] 2xl:h-[550px] 2xl:w-[550px] 2xl:rounded-full 2xl:border-solid 2xl:border-[25px] border-[#C8AE7D]"
    //   />
    // </div>
    //     <div className="flex flex-col bg-white">
    //       <div className="">
    //       <h1 className="text-4xl text-[#765827] md:text-7xl">HI I'M</h1>
    //       <h1 className="text-3xl text-[#C8AE7D] md:text-6xl">John Kenneth O. Bautista</h1>
    //     </div>
    //     <div className=''>
    //     <img src="me4.jpg" alt="React Image" className='w-[700px] h-[700px] rounded-full'/>
    //     </div>
    // </div>
  );
};

export default Home;
