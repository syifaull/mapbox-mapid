import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as Components from "./components";
import * as Configs from "./configs";

function App() {
  const { Datas } = useSelector((state) => state.dataApi);

  const [popupInfo, setPopupInfo] = useState(null);
  const [styleId, setStyleId] = useState("light");

  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const FilterColor = ({ color }) =>
    Datas?.map((data, index) => (
      <>
        {color ? (
          <>
            {data.properties.Status === color ? (
              <Components.Layer setPopupInfo={data} data={data} key={index} />
            ) : null}
          </>
        ) : (
          <>
            {Datas?.map((data, index) => (
              <Components.Layer setPopupInfo={data} data={data} key={index} />
            ))}
          </>
        )}
      </>
    ));

  useEffect(() => {
    dispatch(Configs.GetApi());
  }, [dispatch]);

  const styles = {
    light: "mapbox://styles/mapbox/outdoors-v9",
    dark: "mapbox://styles/vinoarystio/cl6ttky7b000y14my3f7khdlk",
  };

  // const showPopUp = () =>
  //   Datas?.map((item, index) => {
  //     return <Components.PopUp></Components.PopUp>;
  //   });

  console.log(FilterColor);
  return (
    <Map
      style={{ width: "90%", height: "100vh" }}
      mapStyle={styles[styleId]}
      initialViewState={{
        longitude: 107.608238,
        latitude: -6.914864,
        zoom: 12,
      }}
      mapboxAccessToken={token}
    >
      <Routes>
        <Route path="/" element={<FilterColor />} />
        <Route path="status-merah" element={<FilterColor color="Merah" />} />
        <Route path="status-hijau" element={<FilterColor color="Hijau" />} />
        <Route path="status-kuning" element={<FilterColor color="Kuning" />} />
      </Routes>

      {popupInfo && (
        <Components.PopUp popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
      )}

      {/* <Components.PopUp popupInfo={popupInfo} setPopupInfo={setPopupInfo} /> */}

      <Components.Menu setStyleId={setStyleId} />
    </Map>
  );
}

export default App;
