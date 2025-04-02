import { useState, useEffect } from "react";
export default function TodoDate() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formatedDate = date.toLocaleDateString();
      const formatedTime = date.toLocaleTimeString();
      setDateTime(`${formatedDate} -${formatedTime}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{dateTime}</h1>;
}
