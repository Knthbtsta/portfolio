import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true});
  }, []);
  return (
    <div
      id="Menu"
      className="flex-col p-10 justify-start items-center w-screen bg-white"
    >
      <div data-aos="zoom-in-down">
        <div>
          <h1 className="text-center text-[#765827] sm:my-[10px] md:mt-[70px] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
            LET'S GO!!!
          </h1>
          <p className="text-[#765827] md:mt-[30px] text-center sm:text-sm 2xl:text-lg lg:text-lg md:text-lg xl:mx-[100px] 2xl:mx-[200px]">
            My profile encompasses my comprehensive resume, an insightful 'About
            Me' section, and a transparent representation of my college grades.
            Together, they provide a well-rounded view of my qualifications and
            character.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[60px] sm:mx-[10px] xl:mx-[100px] 2xl:mx-[200px] sm:pb-[50px] md:pb-[40px] lg:pb-[120px] scroll-animtation">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col w-full h-[500px] sm:pb-[10px] md:pb-[10px]">
              <img
                className="md:h-2/4 sm:h-1/2 object-cover rounded-[15px]"
                src="/me.jpg"
                alt="Zane's FoodHub Ordering & Sales Record System (JAVA)"
              />
              <div className="flex-1 bg-white">
                <div className="px-6 py-4">
                  <p className="text-start text-[#65451F] md:text-3xl sm:text-base py-[10px]">
                    MY RESUME
                  </p>
                  <p className="text-[#65451F] sm:text-sm">
                    I would be delighted to share my comprehensive resume, which
                    highlights my diverse skill set, professional achievements,
                    and dedication to contributing value to your team.
                  </p>
                  <p className="text-blue-700 sm:pt-[20px] underline decoration-solid">
                    TAKE ME THERE
                  </p>
                </div>
              </div>
            </div>
          </a>
          <Link to="/about">
            <div className="flex flex-col w-full h-[500px] sm:pb-[10px] md:pb-[10px]">
              <img
                className="md:h-2/4 sm:h-1/2 object-cover rounded-[15px]"
                src="/me4.jpg"
                alt="Zane's FoodHub Ordering & Sales Record System (JAVA)"
              />
              <div className="flex-1 bg-white">
                <div className="px-6 py-4">
                  <p className="text-start text-[#65451F] md:text-3xl sm:text-base py-[10px]">
                    ABOUT MYSELF
                  </p>
                  <p className="text-[#65451F] sm:text-sm">
                    I invite you to learn more about me through my personal
                    statement, where I share insights into my background,
                    values, and the unique qualities I bring to the table.
                  </p>

                  <p className="text-blue-700 sm:pt-[20px] underline decoration-solid">
                    TAKE ME THERE
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <a href="/grades.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col w-full h-[500px] sm:pb-[10px] md:pb-[10px]">
              <img
                className="md:h-2/4 sm:h-1/2 object-cover rounded-[15px]"
                src="/m6.jpg"
                alt="Zane's FoodHub Ordering & Sales Record System (JAVA)"
              />
              <div className="flex-1 bg-white">
                <div className="px-6 py-4">
                  <p className="text-start text-[#65451F] md:text-3xl sm:text-base py-[10px]">
                    COLLEGE GRADES
                  </p>
                  <p className="text-[#65451F] sm:text-s  `m">
                    Included within my profile are my academic achievements,
                    showcasing my strong dedication and performance throughout
                    my college journey.
                  </p>
                  <p className="text-blue-700 sm:pt-[20px] underline decoration-solid">
                    TAKE ME THERE
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
