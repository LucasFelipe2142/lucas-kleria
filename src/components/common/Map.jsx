import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Map() {
  const position = { lat: -16.743766498475242, lng: -43.85451755858612 };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCIKmprLWpQY4BbLOuOV4wyne4OSyRrXAs",
  });

  const mapStyles = [
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  return isLoaded ? (
    <ContainerMap>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "250px" }}
        center={position}
        zoom={16}
        options={{ styles: mapStyles }}
      >
        <Marker
          position={position}
          label={{
            text: "Igreja São Pedro e São Paulo",
            className: "map-marker-label",
          }}
        />
      </GoogleMap>
    </ContainerMap>
  ) : (
    <></>
  );
}

const ContainerMap = styled.div`
  width: 100%;
  height: 250px;
  .map-marker-label {
    margin-top: -35px;
    color: #000080;
  }
`;
