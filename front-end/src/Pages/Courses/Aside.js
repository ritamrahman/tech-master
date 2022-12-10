import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Aside = () => {
  const corsesName = useLoaderData();
  return (
    <aside className="lg:w-1/4 dark:bg-fadeMidNight py-2 px-2 min-h-full">
      <h1 className="text-4xl text-center text-black dark:text-white my-6">Courses</h1>
      <ul className="menu w-auto rounded-box mx-auto my-4 bg-dimWhite dark:bg-midnight">
        {corsesName?.map((course) => (
          <li className="my-2 text-black  dark:text-white" key={course?.id}>
            <Link to={`/courses/${course?.id}`} className="flex justify-center">
              {course?.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
