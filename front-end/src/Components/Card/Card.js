import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, shortDes, duration, lectures }) => {
  return (
    <Link to={`/courses/${id}`}>
      <div className="card bg-white dark:bg-fadeMidNight shadow-xl">
        <figure className="p-4">
          <img src={image} alt="Shoes" className="min-w-full max-h-52 object-contain" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black dark:text-white">{name}</h2>
          <p className="text-black dark:text-dimWhite dark:text-opacity-50">{shortDes.slice(0, 80)}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-fadeMidNight dark:text-white dark:text-opacity-75">
              Duration: {duration}
            </div>
            <div className="badge badge-outline text-fadeMidNight dark:text-white dark:text-opacity-75">
              lectures: {lectures}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
