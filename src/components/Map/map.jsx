import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaMapMarker } from "react-icons/fa";
import * as data from "./data.json";
import MyNavbar from "../MyNavbar";
import { Link, useHistory } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

function Map(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let history = useHistory();

  function logout() {
    props.changeAuthStatus();
    history.push("/");
  }

  const [viewport, setViewport] = useState({
    latitude: 19.0759899,
    longitude: 72.8773928,
    zoom: 10
  });

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="Map-section" id="map">
      <MyNavbar />
      <div className="container">
        <h1
          className="display-3"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Our Centers
        </h1>
        <div className="d-flex flex-row">
          <ReactMapGL
            className="col-lg-12"
            {...viewport}
            width="1800px"
            height="540px"
            mapboxApiAccessToken={
              "pk.eyJ1IjoiYXB1cnYxMSIsImEiOiJja20yNGg1NWMwNXVrMndvenZmdWo1OXJqIn0.vYZwHwi6YCF6Eknusw0zOA"
            }
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {data.Stations.map((station) => (
              <Marker
                key={station.ID}
                latitude={station.coordinates[0]}
                longitude={station.coordinates[1]}
              >
                <FaMapMarker
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(station);
                  }}
                />
              </Marker>
            ))}

            {selectedPark ? (
              <Popup
                latitude={selectedPark.coordinates[0]}
                longitude={selectedPark.coordinates[1]}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <div>
                  <h6>{selectedPark.info}</h6>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </div>
  );
}

export default Map;
