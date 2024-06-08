import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleTable from "../Components/SingleTable";
import SingleCard from "../Components/SingleCard";





const apiurl = "http://localhost:3000/users";
function Apnaapi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(apiurl);
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  

    return (
        <div>
        {/*<Mytable data = {data} loading = {loading}></Mytable>  */}
        <SingleCard data={data} loading = {loading}></SingleCard>
        {/* <SingleTable data= {data} loading={loading}></SingleTable> */}
        </div>
    )
}

export default Apnaapi;
