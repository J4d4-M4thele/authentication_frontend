import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useState([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if(!cookies.token) {
                navigate("/login")
            }
            const {data} = await axios.post();
        }
    })
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default Home;
