import { useRef, memo } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
        <p>My name is {bioData.age}</p>
      </p>
    </div>
  );
});

Counts.propTypes = {
  bioData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

// export default memo(Counts);
