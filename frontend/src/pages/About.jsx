import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div
        data-aos="zoom-in-down"
        className="flex flex-col md:grid-cols-1 lg:flex-row justify-center lg:h-screen items-center w-screen bg-white sm:py-[50px] "
      >
        <div className="w-full flex flex-col justify-center items-center sm:pt-[50px] lg:pt-[0px] md:w-2/4 lg:w-1/2 xl:w-2/4 2xl:w-2/4">
          <img
            src="me4.jpg"
            alt="React Image"
            className="rounded-full border-solid border-[10px] first-letter:sm:w-[200px] sm:h-[200px] md:h-[350px] md:w-[350px] md:rounded-full md:border-solid md:border-[15px] lg:h-[450px] lg:w-[450px] lg:rounded-full lg:border-solid lg:border-[15px] xl:h-[500px] xl:w-[500px] xl:rounded-full xl:border-solid xl:border-[20px] 2xl:h-[650px] 2xl:w-[650px] 2xl:rounded-full 2xl:border-solid 2xl:border-[25px] border-[#C8AE7D]"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 sm:pt-[20px] md:pt-[50px] lg:pt-[50px]">
          <h1 className="text-[#765827] text-center sm:text-2xl md:text-4xl lg:pt-[60px] xl:pt-[50px] 2xl:pt-[60px] lg:text-4xl xl:text-5xl xl:mx-[90px] 2xl:text-6xl pb-[10px]">
            ABOUT MYSELF
          </h1>
          <p className="text-[#C8AE7D] text-center sm:pb-[100px] sm:text-sm md:text-2xl lg:text-2xl sm:mx-[30px] md:mx-[40px] lg:mx-[30px] xl:text-2xl xl:mx-[40px] 2xl:text-4xl 2xl:mx-[90px]">
            I'm John Kenneth O. Bautista, a tech enthusiast from Technological
            University of the Philippines Manila. Proficient in Hardware
            Servicing, Programming, and Basic Web Development, I wield languages
            like Java, HTML, CSS, and JavaScript, including the dynamic Reac
            JS. Let's embark on a journey of innovation and discovery in the
            ever-changing tech world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
