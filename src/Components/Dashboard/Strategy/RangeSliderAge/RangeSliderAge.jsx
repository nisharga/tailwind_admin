 
import './RangeSliderAge.css';

const RangeSliderAge = ({setValue, value}) => { 
  const handleChange = (event) => {
    setValue(event.target.value);
  }; 
  return (
    <div className="w-[100%] pr-3 mx-auto  ">
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={value}
        onChange={handleChange} 
        className="slider"
      />
    </div>
  );
};

export default RangeSliderAge;
