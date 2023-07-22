import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Counter = () => {
  return (
    <div className="flex justify-center content-center">
        <div className="w-[100px] p-2">
            <CircularProgressbar 
            value = {78} 
            text = {`${78}%`}
            styles={buildStyles({
                textColor: "red",
                pathColor: "#22D6AA",
                trailColor: "#D3F7EE"
              })}
            />
            <h3 className="text-md text-center">Avarage</h3>
         </div>
         
         <div className="w-[100px] p-2 mx-3">
            <CircularProgressbar 
            value = {95} 
            text = {`${95}%`}
            styles={buildStyles({
                textColor: "red",
                pathColor: "#22D6AA",
                trailColor: "#D3F7EE"
              })}
            />
            <h3 className="text-md text-center">Top</h3>
         </div>

         <div className="w-[100px] p-2">
            <CircularProgressbar 
            value = {59} 
            text = {`${59}%`}
            styles={buildStyles({
                textColor: "red",
                pathColor: "#22D6AA",
                trailColor: "#D3F7EE"
              })}
            />
            <h3 className="text-md text-center">Me</h3>
         </div>
    </div>
  )
}

export default Counter