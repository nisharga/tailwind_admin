import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const ContributionsChart = () => {
  const data = [
    {
      name: "20",
      Employee: 20,
      Employer: 20,
      Total_Interest: 20,  
    },
    {
      name: "25",
      Employee: 25,
      Employer: 25,
      Total_Interest: 25,  
    },
    {
      name: "30",
      Employee: 30,
      Employer: 30,
      Total_Interest: 30,  
    },
    {
      name: "35",
      Employee: 35,
      Employer: 35,
      Total_Interest: 35,  
    }, 
    {
      name: "40",
      Employee: 40,
      Employer: 40,
      Total_Interest: 40,  
    },
    {
      name: "60",
      Employee: 60,
      Employer: 60,
      Total_Interest: 60,  
    },
     {
      name: "65",
      Employee: 75,
      Employer: 75,
      Total_Interest: 150,  
    },
    // Add more data entries as needed
  ];
  
  return (
    <div>
       <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip /> 
      <Bar dataKey="Employer" stackId="a" fill="#0800A3" />
      <Bar dataKey="Employee" stackId="a" fill="#4935FF" />
      <Bar dataKey="Total_Interest" stackId="a" fill="#85AFFF" /> {/* New data series */}
      <Legend  />
    </BarChart>
    </div>
  )
}

export default ContributionsChart