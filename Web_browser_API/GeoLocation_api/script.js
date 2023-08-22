function curSuccess(pos){
    const coords = pos.coords;
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy}+ meters`)
    console.log(pos);
}

function curError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);