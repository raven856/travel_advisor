import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
   // open_now: 'false',
  },
  headers: {
    'X-RapidAPI-Key': '5b8ab142c1msh40f4d9fc6205921p170129jsn8b9c43d69dcb',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const {data: {data}} = await axios.get(URL, {
          url: URL,
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
           // open_now: 'false',
          },
          headers: {
            'X-RapidAPI-Key': '5b8ab142c1msh40f4d9fc6205921p170129jsn8b9c43d69dcb',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }
    catch(error) {
        console.log(error);
    }
};