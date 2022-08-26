import './myMapComponent.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMapComponent() {
	return (
		<>
			<div id="map">
				<MapContainer center={[48.364604, 18.202693]} zoom={13} scrollWheelZoom={false}>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={[48.364604, 18.202693]}>
						<Popup>Get Well, a.s.</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
}

export default MyMapComponent;
