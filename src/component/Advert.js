import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Advert() {
  const imgUrl =
    "https://images.unsplash.com/photo-1544651197-089c3afe06d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  const [image, setImage] = useState(imgUrl);

  const navigate = useNavigate();
  return (
    <div style={{ margin: "20px, auto", alignContent: "center" }}>
      <div>
        <h1 style={{ color: "wheat", textAlign: "center" }}>
          Booking Completed
        </h1>
        <div style={{ textAlign: "-webkit-center" }}>
          <img
            src={image}
            alt="taxi_image"
            style={{
              width: "700px",
              height: "400px",
              borderRadius: "10px",
              alignSelf: "center",
              marginTop:"10px",
              marginBottom: "10px"
            }}
          />
        </div>
        <div style={{display:"grid", gridAutoFlow:"column", textAlign: "-webkit-center"}}>
        <div >
          <Button
            variant="outlined"
            type="submit"
            style={{ color: "wheat" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to homePage
          </Button>
        </div>
        <div >
          <Button
            variant="outlined"
            type="submit"
            style={{ color: "wheat" }}
            onClick={() => {
              navigate("/trips");
            }}
          >
           View trip status
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
