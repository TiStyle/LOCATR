 const convertLocationToMarker = function (location){
    return new google.maps.Marker({
        position: location,
        label: location.label,
        title: location.label,
        phone: location.phone,
        mail: location.mail,
        imageSrc: location.imageSrc,
        type: location.type
    })
}

Array.prototype.toMarkers = function(){
    return this.map(location => convertLocationToMarker(location));
}
