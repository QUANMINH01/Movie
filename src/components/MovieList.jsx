import React from "react";
import Carousel from "react-multi-carousel";
import Modal from "react-modal";
import YouTube from "react-youtube";
import "react-multi-carousel/lib/styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    backgroundColor: "black",
    border: "none",
  },
  overlay: {
    zIndex: 9998,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
export const MovieList = ({ title, data = [] }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [trailerKey, setTrailerKey] = React.useState("");

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const movieKeyData = await movieKey.json();
      setTrailerKey(movieKeyData.results[0]?.key || "");
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.error("Error fetching trailer:", error);
    }
  };
  return (
    <div className="text-white p-10 mt-6">
      <h2 className="uppercase text-xl font-semibold mb-6">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] relative group"
            onClick={() => handleTrailer(item.id)}
          >
            <div className=" group-hover:scale-105 transition-transform duration-300 rounded-lg ease-in-out w-full h-full cursor-pointer">
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
      </Carousel>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
    </div>
  );
};
