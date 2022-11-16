import React from "react";
import { Popup } from "react-map-gl";
import * as cssModule from "../scss";

const PopUp = ({ popupInfo, setPopupInfo }) => {
  const Card = ({ title, desc }) => (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );

  return (
    <Popup
      longitude={popupInfo.geometry.coordinates[0]}
      latitude={popupInfo.geometry.coordinates[1]}
      onClose={() => setPopupInfo(null)}
    >
      <div className={cssModule.Components.popUp}>
        <Card title="Nama" desc={popupInfo.properties.Nama} />
        <Card title="Status" desc={popupInfo.properties.Status} />
        <Card title="Angka" desc={popupInfo.properties.Angka} />
      </div>
    </Popup>
  );
};

export default PopUp;
