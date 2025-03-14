import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Sort events by date in descending order
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index every 5 seconds
      setIndex((prevIndex) =>
        prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [byDateDesc]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.title}>
          {/* Use a div with a unique key instead of an unkeyed fragment */}
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}>
            <img src={event.cover} alt={event.description} />
            {/* Replace hardcoded alt "forum" with event.description */}
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((paginationEvent, radioIdx) => (
                <input
                  key={paginationEvent.date} // Use event.date as the unique key
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx} // Use index to indicate the current displayed image position
                  readOnly // Added to prevent user from modifying the radio button
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;