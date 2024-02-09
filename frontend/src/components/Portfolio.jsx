import React from "react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex-col p-10 w-screen justify-center items-center"
    >
      <div data-aos="zoom-in-down">
        <div>
          <h1 className="text-center text-[#765827] sm:my-[10px] md:mt-[70px] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
            PORTFOLIO
          </h1>
          <p className="text-[#765827] md:mt-[30px] text-center sm:text-sm 2xl:text-lg lg:text-lg md:text-lg">
            I invite you to explore my portfolio, a curated collection
            showcasing my projects and accomplishments, demonstrating my
            expertise and creativity in IT field...
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[60px] sm:mx-[10px] sm:pb-[140px] md:pb-[100px]">
          <div className="flex flex-col w-full md:h-[450px]">
            <img
              className="h-1/2 object-cover rounded-t-[15px]"
              src="/proj1.png"
              alt="Student Record Management System TUPM (C++)"
            />
            <div className="flex-1 bg-[#765827] rounded-b-[15px] ">
              <div className="px-6 py-4">
                <p className="text-white text-base">
                  Generic Document Request Management TUPM (JAVA)
                </p>
              </div>
              <div className="px-6 sm:pb-[5px]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  NETBEANS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JAVA
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaDerby
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:h-[450px]">
            <img
              className="h-1/2 object-cover rounded-t-[15px]"
              src="/proj2.png"
              alt="Student Record Management System TUPM (C++)"
            />
            <div className="flex-1 bg-[#765827] rounded-b-[15px] ">
              <div className="px-6 py-4">
                <p className="text-white text-base">
                  Zane's FoodHub Ordering &amp; Sales Record System (JAVA)
                </p>
              </div>
              <div className="px-6 sm:pb-[5px]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  NETBEANS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JAVA
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaDerby
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:h-[450px]">
            <img
              className="h-1/2 object-cover rounded-t-[15px]"
              src="/proj3.png"
              alt="Student Record Management System TUPM (C++)"
            />
            <div className="flex-1 bg-[#765827] rounded-b-[15px] ">
              <div className="px-6 py-4">
                <p className="text-white text-base">
                  Student Record Management System TUPM (C++)
                </p>
              </div>
              <div className="px-6 sm:pb-[5px]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  CODEBLOCK
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  C++
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:h-[450px]">
            <img
              className="h-1/2 object-cover rounded-t-[15px]"
              src="/proj4.png"
              alt="Student Record Management System TUPM (C++)"
            />
            <div className="flex-1 bg-[#765827] rounded-b-[15px] ">
              <div className="px-6 py-4">
                <p className="text-white text-base">
                  MilkTEAktok Customer Profile and Ordering System (DATABASE)
                  Using DosBox (DBASE) (C++) (ORDERING SYSTEM)
                </p>
              </div>
              <div className="px-6 sm:pb-[10px]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DosBox
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:h-[450px]">
            <img
              className="h-1/2 object-cover rounded-t-[15px]"
              src="/proj4.png"
              alt="Student Record Management System TUPM (C++)"
            />
            <div className="flex-1 bg-[#765827] rounded-b-[15px] ">
              <div className="px-6 py-4">
                <p className="text-white text-base">
                  MilkTEAktok Customer Profile and Ordering System (DATABASE)
                  Using DosBox (DBASE) (C++) (CUSTOMER PROFILE MANAGEMENT)
                </p>
              </div>
              <div className="px-6 sm:pb-[10px]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DosBox
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
