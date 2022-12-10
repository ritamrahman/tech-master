import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loading && toast.success("Enroll successful");
  }, [loading]);
  const course = useLoaderData();
  console.log(course);

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="w-full text-center flex justify-center items-center flex-col">
          <div className="relative w-full flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/RDnyG09/119925-congrats-unscreen.gif" alt="" className="z-10" />
            <h1 className="absolute text-3xl md:text-5xl lg:text-6xl font-black text-goldText z-20">Congratulations</h1>
          </div>
          <h2 className="my8 text-md text-center md:text-xl lg:text-4xl">{course[0].name} Now It's Your's</h2>
          <p className="">Happy Watching</p>

          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 my-5 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
