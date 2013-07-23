var myLayer = L.geoJson();
var ids=new Array(),mytarget=new Array(),mysource=new Array();
var marker1,marker2;
var i=0,text="<p>hapo vipi  ",tag=0,sos=0,updator="",k=0,startpoint="",endpoint="";

/**
*Initialize the main map and other component on window.ready event
*/
$(document).ready(function() {
var geos=getGeoJSON(4617,"finalroad","gid,length,route,via,source,target","","",false,"","json","","");

                map1 = new L.Map("map-container-1", {
                    center: new L.LatLng(-6.85553, 39.375),
                    zoom: 10,
                    minZoom: 4,
                    layers: [
                        new L.TileLayer("http://tile.stamen.com/tanzania/{z}/{x}/{y}.jpg", {
                            maxZoom: 20,
                            attribution: 'Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
                        })
                    ]
                });
                myLayer.addTo(map1);
 marker1 = new L.marker(map1.getCenter());
marker2 = new L.marker(map1.getCenter());

          myLayer.on('click', onMapClick);
                });
/*
*function used to get geojson data from the server and add the vector layer to the map.
*/
function getGeoJSON(srid,geotable,fields,source,target,hassource,parameters,format,limit,routing){
$.ajax({
    type: "GET",
    url: "http://localhost/postgis_api/v1/ws_geo_attributequery.php",
    data: {
        "srid":srid,
        "geotable":geotable,
        "fields": fields,
        "source":source,
        "target":target,
        "hassource":hassource,
        "parameters":parameters,
        "format":format,
        "limit": limit
    },
    dataType: "json",
    success: function(data) {
    if(data.total_rows!=0){
        $.each(data.rows, function(i, mydatas) {
        var prop={"source":mydatas.row.source,"target":mydatas.row.target,"via":mydatas.row.via,"route":mydatas.row.route};
        var geometry='{"type":'+mydatas.row.geojson.type+',"coordinates":'+mydatas.row.geojson.coordinates+'}';
       var jsoner=property(prop,mydatas.row.geojson.type,mydatas.row.geojson.coordinates);
       if(routing=="short" && (i<=(parseInt(data.total_rows)-2)) && (i>=(parseInt(data.total_rows)/2)-1)){
       endpoint=mydatas.row.route;
       var ends=endpoint.split("-");
       var starts=startpoint.split("-");
       console.log("ends:"+ends[0]+",starts"+starts[0]);
        document.getElementById("router").innerHTML="<p>Route"+mydatas.row.route+" <br/> via "+mydatas.row.via+"<br/>"+data.total_rows+"<br/>"+router(startpoint,endpoint)+"</p>";
       }
        });
      }else{
        document.getElementById("clocation").innerHTML="<p>Sorry We don't have route on those locations</p>";

      }
        return data;
    },
    error: function(error, status, desc) {
        console.log(error);
        return error+"@"+desc;
    }
});
}

/**
*Function used to build together the geojson data and adding the layer to map
*/
function property(mypro,type,mygeo){
var jsons={"property":mypro,"type":"LineString","coordinates":mygeo};
  myLayer.addData(jsons);
}

function router(startpoint,endpoint){
var myroute="";
var starts=startpoint.split("-");
var ends=startpoint.split("-");
if(starts[0]==ends[0]){
myroute=starts[0]+"-"+ends[1];
}else if(starts[0]==ends[1]){
myroute=starts[0]+"-"+ends[0];
}else if(starts[1]==ends[0]){
myroute=starts[1]+"-"+ends[1];
}else if(starts[1]==ends[1]){
myroute=starts[1]+"-"+ends[0];
}
return myroute;
}
/**
*This function is used to called when the point is clicked on map(road point)
*/
 function onMapClick(e) {
 console.log(e);
  var street=e.layer.feature.property.route;
  var place=e.layer.feature.property.via;
          var showinfo="<ul><li>StreetName:"+street+"</li><li>PlaceName:"+place+"</li></ul>";
              markTile(e,e);
        if(i==0){
        startpoint=e.layer.feature.property.route;
       sos=e.layer.feature.property.source;
       text+="init_sou_"+sos+"<br/>";
        text+="init_tag_"+tag+"<br/>";
 document.getElementById("clocation").innerHTML="<h6>Source Info</h6>"+showinfo+"<br/>";
       }
       if(i==1){
        i=-1;
        tag=e.layer.feature.property.target;
         // getShortestPath(sos,tag);
      getGeoJSON(4617,"finalroad","gid,length,route,via,source,target",sos,tag,false,"","json","","short");

        text+="finaal_sou_"+sos+"<br/>";
        text+="final_tag_"+tag+"<br/>";
          document.getElementById("destination").innerHTML="<h6>Destination Info</h6>"+showinfo+"<br/>";
        sos="";
        tag="";
        }
      i++; k++;
}

/**
*This function is used for adding the marker to clicked point on the map, for this project, source and destination
*/
function markTile(feature,event,content){
     if(i==0){
     if(k==3){
     }
        map1.removeLayer(marker1);
        marker1.setLatLng(event.latlng);
        map1.addLayer(marker1);
        }
        if(i==1){
       map1.removeLayer(marker2);
       marker2.setLatLng(event.latlng);
        map1.addLayer(marker2);

        }
}
