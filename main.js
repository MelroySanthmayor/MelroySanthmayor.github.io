new Vue({                              //initailising vue instance
  el: "#app",
  data: {
    map: null,
    tileLayer: null,
    visible: 0,
    layers: [{                             //array of markers
        id: 0,
        name: "Stadiums",
        active: false,
        features: [{
            id: 0,
            name: "Feroz Shah Kotla Stadium",
            type: "marker",
            content: '<b>Wed May 2 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>32nd match - Delhi Daredevils v Rajasthan Royals</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [28.6377383, 77.24302369999998],
            imageurl: "images/feroz%20shah%20kotla.png"
          },
          {
            id: 1,
            name: "Eden Gardens",
            type: "marker",
            content: '<b>Thu May 3 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>33rd match - Kolkata Knight Riders v Chennai Super Kings</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [22.5646081, 88.34326450000003],
            imageurl: "images/eden_garden.jpg"
          },

          {
            id: 2,
            name: "Holkar Cricket Stadium",
            type: "marker",
            content: '<b>Fri May 4 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>34th match - Kings XI Punjab v Mumbai Indians</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [22.7242543, 75.87965680000002],
            imageurl: "images/Holkar%20Stadium.jpg"
          },

          {
            id: 3,
            name: "Wankhede Stadium",
            type: "marker",
            content: '<b>Sat May 5 (20 ovs) 16:00 local (10:30 GMT)</b><br><b>35th match - Chennai Super Kings v Royal Challengers </b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [18.9395596, 72.82574900000009],
            imageurl: "images/wankhede.jpg"
          },
          {
            id: 4,
            name: "Rajiv Gandhi International Stadium",
            type: "marker",
            content: '<b>Sat May 5 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>36th match - Sunrisers Hyderabad v Delhi Daredevils</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [17.4065262, 78.5504704],
            imageurl: "images/Rajiv_gandhi_stadium.jpg"

          },
          {
            id: 5,
            name: "Punjab Cricket Association Bindra Stadium",
            type: "marker",
            content: '<b>Sun May 6 (20 ovs) 16:00 local (10:30 GMT)</b><br><b>37th match - Mumbai Indians v Kolkata Knight Riders</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [30.690889, 76.73753099999999],
            imageurl: "images/punjab-cricket-association%20bindra-stadium-mohali.jpg"
          },
          {
            id: 6,
            name: "MA Chidambaram Stadium",
            type: "marker",
            content: '<b>Sun May 6 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>38th match - Kings XI Punjab v Rajasthan Royals</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [13.0628075, 80.27928020000002],
            imageurl: "images/MA%20Chidambaram.jpg"
          },
          {
            id: 7,
            name: "Sawai Mansingh Stadium",
            type: "marker",
            content: '<b>Mon May 7 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>39th match - Sunrisers Hyderabad v Royal Challengers </b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            coords: [26.8940429, 75.8032531],
            imageurl: "images/wankhede.jpg"
          },
          {
            id: 8,
            name: "Chinnaswamy Stadium",
            type: "marker",
            coords: [12.9788139, 77.59959320000007],
            content: '<b>Tue May 8 (20 ovs) 20:00 local (14:30 GMT)</b><br><b>40th match - Rajasthan Royals v Kings XI Punjab</b><br><a href="https://www.firstpost.com/firstcricket/points-table/series/IPL-2018.html">Points Table</a>',
            imageurl: "http://2.bp.blogspot.com/-esq2wFBYqaU/UBEfsqjJkQI/AAAAAAAAAeU/X7GKV2xVU_s/s640/Ipl+Season+Banglore+stadiun.jpg"
          }
        ]
      },
      {
        id: 1,
        name: "Prominent Players and IPL Teams",
        active: false,
        features: [{
            id: 0,
            name: "Sachin Tendulkar",
            type: "playerIcon",
            content: '<b>The MasterBlaster!</b><br><b>To know more about him click the link below</b><br><a href="https://en.wikipedia.org/wiki/Sachin_Tendulkar">click here</a>',
            coords: [20, 72.82574900000009],
            icon: sachinIcon = L.icon({
              iconUrl: "images/sachintendulkar%20-%20Copy.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 1,
            name: "Mahendra Singh Dhoni",
            type: "playerIcon",
            content: '<b>Former Captain of the Indian team</b><br><b>To know more about him click the link below</b><br><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi6qPqt5uPaAhWbDisKHelIBb0YABAAGgJzZg&ohost=www.google.co.in&cid=CAESEeD2HXwL-HyVdZzFDes2Z3YR&sig=AOD64_0uz6MhKsOgrpI9R1Awy-XTf0x4Dw&q=&ved=0ahUKEwjjpvWt5uPaAhWLro8KHVxGA_EQ0QwIJg&adurl=">Click here</a>',
            coords: [23.3440997, 85.30956200000003],
            icon: dhoniIcon = L.icon({
              iconUrl: "images/dhoni.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 2,
            name: "Sourav Ganguly",
            type: "playerIcon",
            content: '<b>A gem of a Player from this state!</b><br><b>To know more about him click the link below</b><br><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjh19WH5-PaAhXYHCsKHWTxDUwYABAAGgJzZg&ohost=www.google.co.in&cid=CAESEeD24KjjmMO_JJkvWQZ_eK90&sig=AOD64_257izLurwYrvgQVd4O0SsXs0C4pA&q=&ved=0ahUKEwiY3c6H5-PaAhVEwI8KHXK4CqAQ0QwIJg&adurl=">Click here</a>',
            coords: [22.2324214, 87.86147929999993],
            icon: gangulyIcon = L.icon({
              iconUrl: "images/ganguly.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 3,
            name: "Chennai Super Kings",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [16.0826802, 80.27071840000008],
            icon: cskIcon = L.icon({
              iconUrl: "images/csk.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 4,
            name: "Rahul Dravid",
            type: "playerIcon",
            content: '<b>A gem of a Player from this state!</b><br><b>To know more about him click the link below</b><br><a href="https://en.wikipedia.org/wiki/Rahul_Dravid">Click here</a>',
            coords: [12.9715987, 77.59456269999998],
            icon: dravidIcon = L.icon({
              iconUrl: "images/dravid.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 5,
            name: "Delhi daredevils",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [28.7040592, 77.10249019999992],
            icon: daredevilsIcon = L.icon({
              iconUrl: "images/dd-3.png",
              iconSize: [60, 60],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 6,
            name: "Kings X1 Punjab",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [31.1471305, 75.34121789999995],
            icon: kingsIcon = L.icon({
              iconUrl: "images/kings.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 7,
            name: "Kolkatta Knight Riders",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [22.572646, 88.36389499999996],
            icon: kkrIcon = L.icon({
              iconUrl: "images/kkr.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 0,
            name: "Mumbai Indians",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [19.0759837, 74.87765590000004],
            icon: miIcon = L.icon({
              iconUrl: "images/mi-logo.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 8,
            name: "Rajasthan Royals",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [27.0238036, 74.21793260000004],
            icon: rajasthanroyalsIcon = L.icon({
              iconUrl: "images/rajasthan%20royals%20logo.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 9,
            name: "Royal Challengers Bangalore",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [12.977000355908677, 76.62742042541504],
            icon: rcbIcon = L.icon({
              iconUrl: "images/Rcb.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          },
          {
            id: 10,
            name: "Virat Kohli",
            type: "playerIcon",
            content: '<b>The current Dynamic captain of the Indain team</b><br><b>To know more about him click the link below</b><br><a href="http://www.espncricinfo.com/india/content/player/253802.html">Click here</a>',
            coords: [29.70354797713945, 76.0793802871276],
            icon: viratIcon = L.icon({
              iconUrl: "images/Virat_Kohli.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1],
              opacity: 0.7
            })
          },

          {
            id: 11,
            name: "Sunrisers Hyderabad",
            type: "playerIcon",
            content: '<b>Home ground of this team!</b><br><a href="">Team Roster details</a>',
            coords: [17.385044, 78.486671],
            icon: sunrisersIcon = L.icon({
              iconUrl: "images/sunrisers.png",
              iconSize: [70, 70],
              popupAnchor: [0, -1]
            })
          }
        ]
      }
    ]
  },
  mounted() {                           //lifecycle hook
    this.initMap();
    this.initLayers();
  },
  methods: {                            //to toggle markers
    layerChanged(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);

      layer.features.forEach(feature => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
    upcoming_matches() {                     //function for showing the upcoming matches upto the count of 8
      const layer = this.layers.find(layer => layer.id === 0);
      if (this.visible <8){
      layer.features[this.visible].leafletObject.addTo(this.map).openPopup();
      }
      if (this.visible > 0) {
        layer.features[this.visible - 1].leafletObject.removeFrom(this.map)
      }
      this.visible++;
    },
    initLayers() {                             //intialising layers
      this.layers.forEach(layer => {
        const markerFeatures = layer.features.filter(
          feature => feature.type === "marker"
        );
        const playerFeatures = layer.features.filter(
          feature => feature.type === "playerIcon"
        );

        markerFeatures.forEach(feature => {
          feature.leafletObject = L.marker(feature.coords)// establishing markers
            .bindPopup(
              "<img class='image' src=" +
              feature.imageurl +
              " />" +
              "<br>" +"    "+
              feature.name + "<br>" +
              feature.content
            );
        });

        playerFeatures.forEach(feature => {           //establishing markers
          feature.marker = L.marker(feature.coords, {
            icon: feature.icon
          })
          feature.leafletObject = feature.marker.bindPopup(feature.name + "<br>" +
            feature.content
          );
        });
      });
      var _layers = this.layers;

      this.map.on('zoomend', function () {               //onzoomout hide playericons and Team icons
        console.log(this);
        console.log(_layers);
        if (this.getZoom() < 7) {

          _layers[1].features.forEach(feature => {
            feature.leafletObject.removeFrom(this);
          });



        } else {
          _layers[1].features.forEach(feature => {
            feature.leafletObject.addTo(this);
          });
        }
      });
    },
    initMap() {                        //init function to intialise leaflet mapobject
      console.log("in init map");
      this.map = L.map("map");
      this.map.setView([12.9715987, 77.59456269999998], 5);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);      //adding the tilelayer of the map

    }
  }
});