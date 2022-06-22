import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_ROCKET_DATA = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      country
      description
      company
      height {
        meters
      }
      first_flight
      active
      name
      type
      cost_per_launch
    }
  }
`;

const GetRocketData = () => {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_ROCKET_DATA, {
    variables: { id: params.rocketId },
  });

  if (loading) return <div>LOADING...</div>;
  else {
    const {
      active,
      company,
      cost_per_launch,
      country,
      description,
      first_flight,
      name,
      type,
      height,
    } = data.rocket;

    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="card mb-3"
          style={{
            marginTop: "250px",
            width: "500px",
            backgroundColor: "black",
            color: "white",
            opacity: "0.9",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
                alt=""
                style={{ width: "170px", height: "250px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{company}</p>
                <p className="card-text">
                  <small>{country}</small>
                </p>
                <p className="card-text">
                  <small>{first_flight}</small>
                </p>
                <p className="card-text">
                  <small>{cost_per_launch}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GetRocketData;
