import React from "react";

const AchievementCard = ({ achievement, setModaldata }) => {
  const { img, name } = achievement;
  return (
    <div>
      <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient- bg-gray-900 to-[#202327] -hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        {/* <h1 className="text-3xl text-center"> My Achievement Card {price}</h1> */}
        <div>
          {/* The button to open modal */}
          <label onClick={() => setModaldata(achievement)} htmlFor="_id">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                className="w-full h-60 object-cover hover:scale-110 duration-300 cursor-pointer"
                src={img}
                alt="Img"
              ></img>
            </div>
            <div className="text-white mt-5">
              <h1 className="text-2xl">{name}</h1>
            </div>
          </label>

          {/* Put this part before </body> tag */}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
