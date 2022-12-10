import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
  orientation: "landscape",
  unit: "in",
  format: [8, 2],
};

const CoursesDetails = () => {
  const course = useLoaderData();
  // const [duration, image, lectures, name, shortDes, feature] = course[0];
  console.log(course);

  return (
    <section className=" bg-white dark:bg-midnight px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20">
      {/* header */}
      <header className="w-full mb-10">
        {/* left side start */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            {/* title */}
            <h2 className="max-w-3xl text-center text-[40px] lg:text-[66px] font-bold tracking-tight text-black dark:text-white lg:leading-tight sm:leading-none mb-6">
              {`${course[0].name} Master With Hands-On, Practical Lessons`}
            </h2>
            {/* shortDes  */}
            <p className="text-black dark:text-darkText text-base md:text-lg my-3 text-center">{course[0].shortDes}</p>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center items-center lg:space-x-3 lg:mt-7 ">
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-gs to-ge text-white"
            >
              <Link to={`/courses/${course[0].id}/checkout`}>Buy the course</Link>
            </button>

            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => (
                <button
                  type="button"
                  onClick={toPdf}
                  className="px-8 py-3 font-semibold rounded-full bg-fadeMidNight text-white"
                >
                  <Link to="/courses">Download PDF</Link>
                </button>
              )}
            </Pdf>
          </div>
        </div>
      </header>
      {/* main */}
      <main>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            {/* featuredImage */}
            <div>
              <img src={course[0]?.feature?.featuredImage} alt="" className="rounded-3xl" />
            </div>
            {/* badge */}
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            {/* body heading */}
            <h2 className="max-w-lg mb-6 font-sans text-2xl text-center font-bold leading-none tracking-tight text-fadeMidNight dark:text-white sm:text-4xl md:mx-auto capitalize">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern id="ea469ae8-e6ec-4aca-8875-fc402da4d16e" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)" width="52" height="24" />
                </svg>
              </span>{" "}
              What you will learn from this course
            </h2>
            {/* body dise */}
            <p className="text-base opacity-50 text-fadeMidNight  dark:text-dimWhite dark:opacity-50 md:text-lg  text-center ">
              This course was selected for our collection of top-rated courses
            </p>
          </div>
          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
            {/* options container start */}
            {course[0]?.feature?.options?.map((f) => (
              <>
                {/* options start */}
                <div className="max-w-md sm:mx-auto sm:text-center" key={f.id}>
                  {/* option img */}
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 text-midnight dark:text-white opacity-60"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5 text-fadeMidNight dark:text-dimWhite opacity-70">
                    {f.point}
                  </h6>
                </div>
                {/* options end */}
              </>
            ))}
          </div>
          {/* options container end */}
          {/* Description */}
          <div ref={ref} options={options} className="w-full flex flex-col justify-center items-center my-9">
            <h1 className="max-w-lg mb-6 font-sans text-2xl text-center font-bold leading-none tracking-tight text-fadeMidNight dark:text-white sm:text-4xl md:mx-auto capitalize">
              Description
            </h1>
            <p className="px-16">{course[0].des}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-gs to-ge text-white"
          >
            <Link to={`/courses/${course[0].id}/checkout`}>Buy the course</Link>
          </button>
        </div>
      </main>
      {/* <div className="pdf hidden">

      </div> */}
    </section>
  );
};

export default CoursesDetails;
