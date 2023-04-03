import React, { useEffect, useState } from "react";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  const [achievement, setAchievement] = useState([]);
  const [modaldata, setModaldata] = useState({});
  useEffect(() => {
    fetch("achievement.json")
      .then((res) => res.json())
      .then((data) => setAchievement(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center text-white font-bold my-5 italic">
          {" "}
          My Achievement
        </h1>
      </div>
      <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievement.map((achievement) => (
          <AchievementCard
            key={achievement._id}
            setModaldata={setModaldata}
            achievement={achievement}
          ></AchievementCard>
        ))}
      </div>
      {modaldata && (
        <>
          <input type="checkbox" id="_id" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="_id"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{modaldata.title}</h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Achievement;
