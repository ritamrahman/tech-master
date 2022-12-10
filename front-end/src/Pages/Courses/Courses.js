import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Aside from "./Aside";

const Courses = () => {
  const allCorses = useLoaderData();
  console.log(allCorses);
  return (
    <section className="scroll-m-0 relative flex flex-col-reverse lg:flex-row lg:justify-between lg:w-full  bg-white dark:bg-midnight">
      {/* aside start */}
      <Aside />
      {/* aside end */}

      {/* right side start */}
      <div className="lg:flex-1 px-5 py-4 bg-dimWhite dark:bg-midnight">
        {/* cards container start */}
        <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {allCorses?.map((course) => (
            <Card
              id={course.id}
              image={course.image}
              name={course.name}
              shortDes={course.shortDes}
              duration={course.duration}
              lectures={course.lectures}
            />
          ))}
        </div>
        {/* cards container end */}
      </div>
      {/* right side end */}
    </section>
  );
};

export default Courses;
