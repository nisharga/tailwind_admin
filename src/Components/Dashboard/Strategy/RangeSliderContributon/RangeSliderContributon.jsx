 

const RangeSliderContributon = ({setContribution, contribution}) => {
    const handleChange = (event) => {
        setContribution(event.target.value);
      }; 
  return (
    <div className="w-[100%] pr-3 mx-auto  ">
      <input
        type="range"
        min="1"
        max="20"
        step="1"
        value={contribution}
        onChange={handleChange} 
        className="slider"
      />
    </div>
  )
}

export default RangeSliderContributon