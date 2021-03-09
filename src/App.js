import {
  MapContainer,
  TileLayer,
  LayerGroup,
  Marker,
  Popup,
} from "react-leaflet";
import useStyles from "./useStyles";

function App() {
  const classes = useStyles();
  return (
    <div>
      <MapContainer
        className={classes.mapContainer}
        center={[-28.995409163308832, 25.093833387362697]}
        zoom={6}
        scrollWheelZoom={false}
        preferCanvas={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
          zIndex={200}
          pane="tilePane"
        />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png"
          zIndex={350}
          pane="tilePane"
        />
        <LayerGroup>
          {/* <TileLayer
            // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png"
            bounds={{
              a: { lat: -30.0018, lng: 30.1939 },
              b: { lat: -34.2128, lng: 22.7358 },
            }}
            pane="overlayPane"
          /> */}
        </LayerGroup>

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
