import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
const detectLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation(
        `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`
      );
    },
    (error) => {
  console.log(error);
  alert(error.message);
}
  );
};
  return (
    <div className="w-full max-w-3xl mt-10 bg-white rounded-3xl shadow-xl p-6">
      <div className="flex gap-4 items-center">

        <select className="border rounded-2xl p-4">
          <option>Select Location</option>
          <option>Udaipur</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
        </select>

        <select className="border rounded-2xl p-4">
          <option>Select Sport</option>
          <option>Badminton</option>
          <option>Football</option>
          <option>Cricket</option>
          <option>Pickleball</option>
        </select>
<button
  onClick={detectLocation}
  className="px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200"
>
  📍 Detect Location
</button>
        <button
  onClick={() => navigate("/games")}
  className="bg-black text-white rounded-2xl font-semibold px-6 hover:scale-105 transition"
>
  Find Games
</button>
{location && (
  <p className="text-sm text-gray-500">
    Location: {location}
  </p>
)}
      </div>
    </div>
  );
}

export default SearchBox;