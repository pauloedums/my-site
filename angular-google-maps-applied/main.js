angular
.module('app',  ['uiGmapgoogle-maps'])
/*******************************************************************************************************
/* Google Maps integration and Controller
/*******************************************************************************************************/
.controller("mapsCtrl", function($scope, $timeout, uiGmapGoogleMapApi){

    uiGmapGoogleMapApi.then(function(maps) {
        // map initial positions and options
        $scope.map = {
            center: { latitude: 48.2329668, longitude: -157.8583333 },
            zoom: 10,
            infobox: {},
            bounds: {},
            events: {
                idle: function(){}
            },
            icon: {url:"public/images/map-marker-icon.png"},
            searchbox: {
                template:'searchbox.tpl.html', 
                events:{
                    // function to re-center after choose a city in the search box
                    places_changed: function (searchBox) {
                        var place = searchBox.getPlaces();
                        var myBounds = new google.maps.LatLngBounds();
                        if (!place || place == 'undefined') {
                            return;
                        }

                        // refresh the map
                        $scope.map = {
                            center:{
                                latitude:place[0].geometry.location.lat(),
                                longitude:place[0].geometry.location.lng()
                            },
                            zoom:12,
                            bounds: $scope.map.bounds,
                            events: {
                                // refresh citys on change map
                                idle: function (map) {
                                    $timeout(function() {
                                        var visibleMarkers = [];
                                        $('#list-cities').empty();
                                        angular.forEach($scope.citiesMarkers, function(marker, key) {
                                            if ($scope.map.bounds.southwest.latitude < marker.latitude 
                                                && marker.latitude < $scope.map.bounds.northeast.latitude 
                                                && $scope.map.bounds.southwest.longitude < marker.longitude 
                                                && marker.longitude < $scope.map.bounds.northeast.longitude) {
                                                visibleMarkers.push(marker);
                                                var contentMarker = '<li class="list-cities-item"><a href="#" rel="'+ marker.city +'"><span class="cityItemTitle">'+ marker.city +'</span><span class="cityItemAdress">'+ marker.state +'</span></a></li>';
                                                jQuery('#list-cities').append(contentMarker);
                                            }
                                        });
                                        $scope.visibleMarkers = visibleMarkers;

                                        // click on an city in the list 
                                        jQuery('.list-cities-item a').on('click', function(){
                                            citySelectedClick($(this).attr('rel'), $(this).find(' .cityItemTitle').text());
                                            jQuery('#list-cities').empty();
                                        });
                                    },0);
                                }
                            }
                        }
                    }
                }
            }
        };

        var infowindow = new google.maps.InfoWindow();
        // function to click on the marker
        $scope.marker = {
            click: function(marker, eventName, model, args) {

                console.log(model);
                infowindow.close();
                var contentModel = '<div id="infoWindowContent"><div id="firstHeading" class="infowindowTitle">' + model.city + '</div><div class="infowindowAdress">' + model.state + '</div><div class="infowindowSelecionar"><a id="selectCity">SELECT THIS</a></div></div>';
                infowindow = new google.maps.InfoWindow({content: contentModel});
                infowindow.open($scope.map, marker);
                $scope.map.zoom = 12;
                $scope.map.center = { latitude:marker.getPosition().lat(), longitude:marker.getPosition().lng()};
                jQuery('#selectCity').on('click', function(){
                    citySelectedClick(model.city, model.state);
                });
            }
        };

        // remove mouse wheel
        $scope.options = {
          scrollwheel: false
        };

        // arrays to be populated
        $scope.markersObjs = [];
        var markers = [], latitude = [], longitude = [], dataMarker = [], city =[], state = [];

        // json to populate arrays and markers
        jQuery.getJSON("public/repository/cities.json", function(content) {
            markers.push(content);
            for(var i = 0; i < markers[0].length; i++){
                city.push(content[i].city);
                state.push(content[i].state);
                latitude.push(content[i].latitude);
                longitude.push(content[i].longitude);

                dataMarker.push(createMarker(i, latitude[i], longitude[i],city[i], state[i] ));
            };
            $scope.markersObjs = markers;
        });

        // $scope that populate the object with markers
        $scope.citiesMarkers = dataMarker;

        // function to create markers
        var createMarker = function(i, lat, long, city, state, idKey) {
          
          if (idKey == null) { idKey = "id"; }
          var ret = { latitude: lat, longitude: long, city: city, state: state };
          ret[idKey] = i;
          return ret;
        
        };

        // function to select a city
        var citySelectedClick = function(city, state){

            $scope.cidade = city;
            $scope.estado = state;

            jQuery('#list-cities').empty();

            jQuery('#citySelected').val(city);
            jQuery('#city').val(state);
        };

    });    
});