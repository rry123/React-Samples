import React, { useEffect, useState } from "react";
import axios from "axios";
import { Try } from "@mui/icons-material";
import Mytable from "./Mytable";
import Mytab from "./Mytab";





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
        <Mytab data = {data} loading = {loading}></Mytab>
        </div>
    )
}

export default Apnaapi;
