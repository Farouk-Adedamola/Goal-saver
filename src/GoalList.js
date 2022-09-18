import React, { useState } from "react";
import "./GoalList.css";

const GoalList = () => {
  const [goal, setGoal] = useState("");
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (goal) {
      const each = { id: new Date().getTime().toString(), goal };
      console.log(each);
      setList(() => {
        const eachGoal = [...list];
        eachGoal.unshift(each);
        return eachGoal;
      });
      setGoal("");
    }
  };

  const removeHandler = (id) => {
    const removeList = list.filter((each) => each.id !== id);
    setList(removeList);
  };

  return (
    <>
      <div className="container-div">
        <h3 className="header">Goal Saver</h3>
        <form onSubmit={submitHandler} className="form">
          <input
            className="input"
            type="text"
            id="goal"
            name="goal"
            value={goal}
            size="35"
            maxLength={30}
            onChange={(e) => setGoal(e.target.value)}
          />
          <div className="underlines"></div>
          <button type="submit" className="btn">
            Add Goal
          </button>
          {/* <div className="underline"></div> */}
        </form>
        <div>
          {list.map((items) => {
            const { id, goal } = items;
            return (
              <div key={id} className="list-container">
                <p className="goal">{goal}</p>
                <button
                  type="button"
                  className="button"
                  onClick={() => removeHandler(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GoalList;
