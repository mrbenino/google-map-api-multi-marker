<?php 
  $dbServername = "localhost";
  $dbUsername = "root";
  $dbPassword = "";
  $dbName = "map";

  $conn = mysqli_connect( $dbServername, $dbUsername, $dbPassword, $dbName);
  $result = mysqli_query($conn, "SELECT * FROM markers");
  $resultCheck = mysqli_num_rows($result);

  if ($resultCheck > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      print_r($row);
    }
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      #map {
        height: 100%;
      }
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>map
</head>
<body>
    <h1>oops!</h1>

    <div id="map"></div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script src="template/js/gmamm.js"></script>
      
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJtiblvFBLLTpcamTLnXBQ7udOMNlrieQ&callback=initMap"></script>
</body>
</html>
