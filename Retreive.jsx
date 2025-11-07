import React, { useState, useEffect } from "react";

const Getdata = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [print, setPrint] = useState([]);

  const apicalls = async (apiURL) => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setPrint(data);
  };

  useEffect(() => {
    apicalls(url);
  }, []);

  return (
    <div>
      {print.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.id}</p>
          <p>{item.email}</p>
          <p>{item.address.street}</p>
          <p>{item.address.city}</p>
          <p>{item.phone}</p>
          <p>{item.website}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Getdata;
