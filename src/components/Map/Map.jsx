import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab";
import useStyles from './styles';
import mapStyles from '../../mapStyles';

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    //var coordinates = {lat: 0, lng: 0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC5nvkWm-y6a8xM3PoHZ_Ja1LY2Vi6NLxs'}}
                //defaultCenter= {{lat:0, lng:0}}
                defaultCenter={coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin= {[50,50,50,50]}
                //options = {''}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange= {(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw, })
                }}
                onChildClick= {null}
            >

            </GoogleMapReact>
        </div>
    );
};
export default Map;