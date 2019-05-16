var map;
var rest =  {
    north: 79.99,
    south: -79.99,
    west: -179.99,
    east: 179.99,
};

locations = [
    {id:1, lat: -31.563910, lng: 147.154312, lab: 'q', info:'<h1>q</h1>'},
    {id:2,lat: -33.718234, lng: 150.363181, lab: 'w', info:'<h1>tewxt</h1>'},
    {id:3,lat: -33.727111, lng: 150.371124, lab: 'e', info:'<h1>text</h1>'},
    {id:4,lat: -33.848588, lng: 151.209834, lab: 'r', info:'<h1>text</h1>'},
    {id:5,lat: -33.851702, lng: 151.216968, lab: 't', info:'<h1>text</h1>'},
    {id:6,lat: -34.671264, lng: 150.863657, lab: 'y', info:'<h1>text</h1>'},
    {id:7,lat: -35.304724, lng: 148.662905, lab: 'u', info:'<h1>text</h1>'},
    {id:8,lat: -36.817685, lng: 175.699196, lab: 'i', info:'<h1>text</h1>'},
    {id:9,lat: -36.828611, lng: 175.790222, lab: 'o', info:'<h1>text</h1>'},
    {id:10,lat: -37.750000, lng: 145.116667, lab: 'p', info:'<h1>text</h1>'},
    {id:11,lat: -37.759859, lng: 145.128708, lab: 'a', info:'<h1>text</h1>'},
    {id:12,lat: -37.765015, lng: 145.133858, lab: 's', info:'<h1>text</h1>'},
    {id:13,lat: -37.770104, lng: 145.143299, lab: 'd', info:'<h1>text</h1>'},
    {id:14,lat: -37.773700, lng: 145.145187, lab: 'f', info:'<h1>text</h1>'},
    {id:15,lat: -37.774785, lng: 145.137978, lab: 'g', info:'<h1>text</h1>'},
    {id:16,lat: -37.819616, lng: 144.968119, lab: 'h', info:'<h1>text</h1>'},
    {id:17,lat: -38.330766, lng: 144.695692, lab: 'j', info:'<h1>text</h1>'},
    {id:18,lat: -39.927193, lng: 175.053218, lab: 'k', info:'<h1>text</h1>'},
    {id:19,lat: -41.330162, lng: 174.865694, lab: 'l', info:'<h1>text</h1>'},
    {id:20,lat: -42.734358, lng: 147.439506, lab: 'z', info:'<h1>text</h1>'},
    {id:21,lat: -42.734358, lng: 147.501315, lab: 'x', info:'<h1>text</h1>'},
    {id:22,lat: -42.735258, lng: 147.438000, lab: 'c', info:'<h1>eror</h1>'},
    {id:23, lat: -43.999792, lng: 170.463352, lab: 'v', info:'<h1>text</h1>'}
  ];

initMap = function(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -31.563910, lng: 147.154312},
        zoom: 16,
        disableDefaultUI: true,
        restriction: {
            latLngBounds: rest,
            strictBounds: false,
        }
    });
    markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          id: location.id,
          position: location,
          label: location.lab,
          title: 'locations.info',
          info: locations.info,
        });
    });

    var infowindow = null;
    
    infowindow = new google.maps.InfoWindow({
        content: "holding..."
    });

    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
        google.maps.event.addListener(marker, 'click', function () {      
            console.log(this.id);
            index = this.id;
            infowindow.setContent(locations[index].info);
            infowindow.open(map, this);
        });
    }

    var markerCluster = new MarkerClusterer(map, markers,{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
};
