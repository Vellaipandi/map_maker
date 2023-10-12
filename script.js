// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [77.07349215915802,11.066288084545317],
    [78.0792231622238,10.393008323577435],
    [78.05161186221702,9.944579314799427],
    [78.10519668120133,9.955813390831839],
    [77.9303400094687,9.631139728099878,],
    [77.8767025676807,9.37625202534517],
    [77.86207417446579,9.097103771001684],
    [78.10100459697594,8.899642968230642],
    [77.7840560773196,8.634589490282632],

  ];
  
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.07349215915802,11.066288084545317],
    zoom: 14,
  });
  
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker= new mapboxgl.Marker()
              .setLngLat([77.07349215915802,11.066288084545317])
              .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(()=> {
      if (counter>=busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      },1000);
  }
  
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  