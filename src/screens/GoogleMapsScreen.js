import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import NavigationButton from "../Components/NavigationButton";
import MapView from "react-native-maps";

const GoogleMapsScreen = () => {
	return (
		<View style={styles.container}>
			{/*<MapView
				style={styles.mapStyle}
				customMapStyle={mapStyle}
				initialRegion={{
					latitude: 54.0406827,
					longitude: -6.1853137,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03
				}}
			/>*/}
			<View
				style={styles.ovewrlayView}>
				<NavigationButton
					title="AR View"
					icon="globe"
					navName="Index"
					style={{ position: "absolute", bottom: 250 }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	mapStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	overlayButton: {
		position: "absolute",
		bottom: 50
    },
    ovewrlayView:{
        position: "absolute", //use absolute position to show button on top of the map
        top: "0%", //for center align
        alignSelf:'center'
    }
});

export default GoogleMapsScreen;

const mapStyle = [
	{
		elementType: "geometry",
		stylers: [
			{
				color: "#ebe3cd"
			}
		]
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#523735"
			}
		]
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#f5f1e6"
			}
		]
	},
	{
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#c9b2a6"
			}
		]
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#dcd2be"
			}
		]
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#ae9e90"
			}
		]
	},
	{
		featureType: "landscape.natural",
		elementType: "geometry",
		stylers: [
			{
				color: "#dfd2ae"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#dfd2ae"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#93817c"
			}
		]
	},
	{
		featureType: "poi.park",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#a5b076"
			}
		]
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#447530"
			}
		]
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f1e6"
			}
		]
	},
	{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
			{
				color: "#fdfcf8"
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				color: "#f8c967"
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#e9bc62"
			}
		]
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry",
		stylers: [
			{
				color: "#e98d58"
			}
		]
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#db8555"
			}
		]
	},
	{
		featureType: "road.local",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#806b63"
			}
		]
	},
	{
		featureType: "transit.line",
		elementType: "geometry",
		stylers: [
			{
				color: "#dfd2ae"
			}
		]
	},
	{
		featureType: "transit.line",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#8f7d77"
			}
		]
	},
	{
		featureType: "transit.line",
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#ebe3cd"
			}
		]
	},
	{
		featureType: "transit.station",
		elementType: "geometry",
		stylers: [
			{
				color: "#dfd2ae"
			}
		]
	},
	{
		featureType: "water",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#b9d3c2"
			}
		]
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#92998d"
			}
		]
	}
];