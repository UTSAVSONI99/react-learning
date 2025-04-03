import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import "./index.css";
import "./app.css";

function Location() {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});
  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    getVisitorIp();
  }, []);

  // Fetch the user's IP address
  const getVisitorIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip); // Update state with the fetched IP address
    } catch (error) {
      console.error("Failed to fetch IP address:", error);
    }
  };

  // Handle changes in the input field
  const handleChange = (e) => {
    setIpAddress(e.target.value);
  };

  // Fetch location information based on the IP address
  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`https://ip-api.com/json/${ipAddress}`);
      const data = await response.json();
      setGeoInfo(data); // Update state with the fetched geolocation info
    } catch (error) {
      console.error("Failed to retrieve Location Info:", error);
    }
  };

  return (
    <div className="location">
      <h3>IP to Location</h3>
      <div className="form-area">
        {/* <input
                    type="text"
                    value={ipAddress}
                    onChange={handleChange}
                    placeholder="Enter IP Address"
                /> */}
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            console.log(newContent);
            setContent(newContent);
          }}
        />
        <button onClick={fetchIPInfo}>Get Info</button>
      </div>
      {geoInfo.status === "success" ? (
        <div className="geo-info">
          <h4>Location Information:</h4>
          <p>
            <strong>IP Address:</strong> {geoInfo.query}
          </p>
          <p>
            <strong>Country:</strong> {geoInfo.country}
          </p>
          <p>
            <strong>Region:</strong> {geoInfo.regionName}
          </p>
          <p>
            <strong>City:</strong> {geoInfo.city}
          </p>
          <p>
            <strong>Latitude:</strong> {geoInfo.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {geoInfo.lon}
          </p>
          <p>
            <strong>ISP:</strong> {geoInfo.isp}
          </p>
        </div>
      ) : (
        geoInfo.status === "fail" && <p>Error: {geoInfo.message}</p>
      )}
    </div>
  );
}

export default Location;
