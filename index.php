<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Routing Example</title>
        <meta name="description" content="Quality of Life Dashboard">

        <!-- Mobile viewport optimized: j.mp/bplateviewport -->
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <!-- Stylesheets -->
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap-responsive.css">
         <link href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" rel="stylesheet">
         <style>
         .map {
    height: 100%;
    border: 1px solid #a5a5a5;
    -moz-box-shadow: 5px 5px 5px #d2d2d2;
    -webkit-box-shadow: 5px 5px 5px #d2d2d2;
    box-shadow: 5px 5px 5px #d2d2d2;
}
demo {
    height: 450px;
    position: relative;
}
.demo .height-controlled {
    height: 100%;
}
         </style>
    </head>
    <body>

<div class='header'>
<h1>Routing Examples</h1>
</div>
<div class="container">
<div class="row-fluid" >
<div class="span2">
<div id='router'>
</div>
<div id='clocation'>
</div>
<div id='destination'>
</div>
<p id='tester'></p>
</div>
<div class="span10  demo">
<p>Dar-es-salaam Daladala Routing</p>
  <div id="map-container-1" class="map" style='height:500px !important;'></div>

</div>
</div>
</div>

<script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"type="text/javascript"></script>
<script src="js/prettify.js" type="text/javascript"></script>
<script src='js/jquery-1.8.1.min.js' ></script>
<script src="js/lvector.js" type="text/javascript"></script>
<script src="js/geojson.js" type="text/javascript"></script>
    </body>
</html>
