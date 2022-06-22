import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const SingleLaunch = ({
  ships,
  mission_name,
  launch_date_local,
  rocket_Id,
}) => {
  const history = useNavigate();

  function handleClick() {
    history(`/details/${rocket_Id}`);
  }

  return (
    <div>
      <MDBCard
        className="text-center mt-4 mb-4 cardBackground"
        style={{
          height: "100%",
          padding: "15px",
          borderRadius: "20px",
          boxShadow: "0px 5px 15px 0px rgb(0 0 0 / 20%)",
        }}
      >
        <MDBCardImage
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
          fluid
          alt="..."
          style={{
            height: "250px",
          }}
        />

        <MDBCardBody>
          <MDBCardTitle
            className="cardName"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "200px",
            }}
          >
            {mission_name}
          </MDBCardTitle>
          <MDBCardText style={{ fontSize: "12px" }}>
            {launch_date_local}
          </MDBCardText>
          <MDBBtn style={{ backgroundColor: "#0c7a47" }} onClick={handleClick}>
            Details
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SingleLaunch;
