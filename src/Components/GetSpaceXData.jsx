import { useQuery, gql } from "@apollo/client";
import SingleLaunch from "./SingleLaunch";
import { Row, Col } from "react-bootstrap";
import "../App.css";

const GET_SPACE_X_DATA = gql`
  query getLaunches {
    launchesPast(limit: 12) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      ships {
        name
        image
        id
      }
      rocket {
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
        rocket {
          id
          name
          description
        }
      }
    }
  }
`;

const GetSpaceXData = () => {
  const { loading, error, data } = useQuery(GET_SPACE_X_DATA);

  console.log({ data });

  if (loading) return <div>LOADING...</div>;
  else {
    return (
      <div>
        <div className="container" style={{ width: "1000px" }}>
          <h1 className="header">Apollo Client</h1>
          <Row>
            {data.launchesPast.map((launch, key) => (
              <Col className="col-lg-3 col-md-4 col-sm-8">
                <SingleLaunch
                  key={`dataSpaceX${key}`}
                  ships={launch.ships}
                  mission_name={launch.mission_name}
                  launch_date_local={launch.launch_date_local}
                  rocket_Id={launch.rocket.rocket.id}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
};

export default GetSpaceXData;
