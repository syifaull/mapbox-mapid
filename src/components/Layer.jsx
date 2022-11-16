import React from "react";
import { Source, Layer as Marker } from "react-map-gl";

const Layer = ({ data }) => {
  return (
    <>
      <Display
        title={data.key}
        type="circle"
        data={data}
        onClick={() => {
          console.log("test");
        }}
        color={{
          "circle-color": [
            "match",
            ["get", "Status"],
            "Merah",
            "#FF0000",
            "Hijau",
            "#008000",
            "Kuning",
            "#FFFF00",
            "#1B659D",
          ],
          "circle-radius": 10,
          "circle-stroke-width": ["get", "circle_stroke_width"],
          "circle-stroke-color": ["get", "circle_stroke_color"],
        }}
      />
    </>
  );
};

const Display = ({ title, data, color, type, onClick }) => {
  return (
    <>
      <Source key={title} id={title} type="geojson" data={data} />
      <Marker
        id={title}
        type={type}
        source={title}
        paint={color}
        onClick={onClick}
      />
    </>
  );
};

export default Layer;
