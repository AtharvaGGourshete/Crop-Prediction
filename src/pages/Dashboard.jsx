import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import useCropData from '../hooks/useCropData';

const Dashboard = () => {
  const { state } = useLocation();
  console.log('Form Data:', state); // Debug form input
  const { soilType, location, month, area } = state || {};
  const { data, loading } = useCropData(location);

  if (loading) return <div>Loading...</div>;
  if (!data.length) return (<><div className='mt-20 text-center text-2xl mt-60 text-red-500'><span className='block'>Fill the form to access the dashboard</span>
  <Link to={"/form"}><span className='text-gray-400 hover:text-gray-300  hover:underline'>click here to fill the form</span></Link></div></>);

  // Get the top 2 highest-priced crops
  const sortedCrops = [...data]
    .map((item) => ({
      ...item,
      Modal_x0020_Price: parseFloat(item.Modal_x0020_Price) || 0,
    }))
    .sort((a, b) => b.Modal_x0020_Price - a.Modal_x0020_Price);
  console.log('Sorted Crops:', sortedCrops);
  const topTwoCrops = sortedCrops.slice(0, 2);
  console.log('Top 2 Crops:', topTwoCrops);

  // Prepare data for the LineChart
  const chartData = topTwoCrops.map((crop) => ({
    name: `${crop.Commodity} (${crop.Market})`,
    price: crop.Modal_x0020_Price,
  }));
  console.log('Chart Data:', chartData);

  // Dummy profitability calculation
  const baseCostPerUnitArea = 1000;
  const profitabilityData = topTwoCrops.map((crop) => {
    const totalRevenue = crop.Modal_x0020_Price * area;
    const totalCost = baseCostPerUnitArea * area;
    const profit = totalRevenue - totalCost;
    return ((profit / totalCost) * 100).toFixed(2);
  });

  return (
    <div className='mt-20'>
      <h1>Dashboard</h1>
      <h2>Top 2 Highest Priced Crops in {location}</h2>

      {topTwoCrops.map((crop, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>Crop {index + 1}</h3>
          <p>
            Commodity: {crop.Commodity} <br />
            Market: {crop.Market} <br />
            Price: ₹{crop.Modal_x0020_Price} <br />
            Location: {location} <br />
            Soil Type: {soilType} <br />
            Month: {month} <br />
            Area: {area} sq. units <br />
            Profitability: {profitabilityData[index]}%
          </p>
        </div>
      ))}

      <h2>Price Comparison</h2>
      <LineChart
        key={location}
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Price (₹)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          name="Crop Price"
        />
      </LineChart>
      <div className="flex justify-center mt-40">
        <span className="text-5xl">Explore Premium Plans</span>
      </div>
      <div className="mt-5 flex justify-center">
        <Link to={"/premiumplans"}><Button className="bg-green-600 mb-40 cursor-pointer">Upgrade to Premium</Button></Link>
      </div>
    </div>
  );
};

export default Dashboard;