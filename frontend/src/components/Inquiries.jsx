import React from "react";

const Inquiries = () => {
  return (
    <div
      id="inquiries"
      className="flex flex-col justify-center items-center w-screen bg-white 2xl:pb-[100px]"
    >
      <div data-aos="fade-up">
        <div className="container flex md:flex-row sm:flex-col-reverse justify-center items-center md:pt-[100px] md:pb-[100px] sm:pt-[50px] sm:pb-[50px] mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-[#C8AE7D]">
            <div className="flex">
              <h1 className="font-bold uppercase text-[#765827] sm:text-3xl text-5xl">
                Send me a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full text-white
				  hover:bg-white hover:text-[#65451F] dark:bg-[#765827]"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="w-full lg:-mt-92 md:-ml-8 lg:w-2/6 px-8 py-12 ml-auto c] rounded-2xl bg-[#765827]">
            <div className="flex flex-col text-white">
              <h1 className="font-bold text-white uppercase sm:text-3xl md:text-4xl my-4">
                HIRE ME
              </h1>
              <p className="text-white">
                As a recent graduate, I bring the energy of a fresh perspective
                and the dedication of a determined learner, poised to contribute
                effectively and learn eagerly within your esteemed organization.
              </p>
              <p className="text-white"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
