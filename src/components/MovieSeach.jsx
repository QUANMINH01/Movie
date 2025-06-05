import React from "react";
import PropTypes from "prop-types";

const MovieSeach = ({ title, data }) => {
  return (
    <div className="text-white p-10 mt-6">
      <h2 className="uppercase text-xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data &&
          data.map((item) => (
            <div key={item.id} className="w-[200px] h-[300px] relative group">
              <div className="group-hover:scale-105 transition-transform duration-300 rounded-lg ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6">
                  <p className="uppercase text-md ">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieSeach.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieSeach;
