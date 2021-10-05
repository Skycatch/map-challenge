/**
 * This file simulates an external API call to a service called "Fivesquare".
 */

const Fivesquare = {

  nearestLocations: async () => {
    return {
      data: [
        {
          category: "Breakfast",
          places: [
            {
              "id": 70111470,
              "name": "The Little Things",
              "pictures": [
                { width: 150, height: 200, url: "https://igx.5sq.net/img/general/6ab436-8de7.jpg" },
                { width: 200, height: 200, url: "https://igx.5sq.net/img/general/de6ee953-e8eb_duy-sdfsdlcg.jpg" }
              ],
              "url": "https://5square.com/places/70111470",
              "rating": 4.0,
              "location": {
                "lat": 20.67771721359616,
                "lng": -103.36517472441692
              },
              "bookmark": []
            },
            {
              "id": 654356453,
              "name": "Khan's Tent",
              "pictures": [
                { width: 200, height: 200, url: "https://igx.5sq.net/img/general/6_d9b4dds_0-36-8de7.jpg" },
                { width: 150, height: 200, url: "https://igx.5sq.net/img/general/qWQ19b436-8de7.jpg?token=adfsadfasd" }
              ],
              "url": "https://5square.com/places/654356453",
              "location": {
                "lat": 20.67145355985348,
                "lng": -103.37796349563101
              },
              "rating": 5.0,
              "bookmark": [{ id: 432534, time: 65876586 }]
            }
          ]
        },
        {
          category: "Lunch",
          places: [
            {
              "id": 65432445,
              "name": "The Harp",
              "pictures": [
                { width: 150, height: 200, url: "https://igx.5sq.net/img/general/65Ds9b436-8_d-e7__dsfudy29.jpg" },
                { width: 200, height: 200, url: "https://igx.5sq.net/img/general/6Z1d9b4jfubhchd_36-8de7.jpg?dhu3l=aduuud" }
              ],
              "url": "https://5square.com/places/65432445",
              "rating": 4.0,
              "location": {
                "lat": 20.68016639253583,
                "lng": -103.38221211425581
              },
              "bookmark": []
            },
            {
              "id": 675465,
              "name": "Afreddo Gelateria",
              "pictures": [
                { width: 200, height: 200, url: "https://igx.5sq.net/img/general/6519b436-8de7hh__ds-addf.jpg" },
                { width: 150, height: 200, url: "https://igx.5sq.net/img/general/6sdf19b43dds6-8ssde7.jpg?receipt=duls23d" },
                { width: 300, height: 200, url: "https://igx.5sq.net/img/general/6Wd19hduHD436-8d_e7-dHUDl-1.jpg" }
              ],
              "url": "https://5square.com/places/675465",
              "rating": 5.0,
              "location": {
                "lat": 20.668602708730358,
                "lng": -103.36693425304831
              },
              "bookmark": [{ id: 432534, time: 65876586 }]
            }
          ]
        }
      ]
    }
  }
}

module.exports = Fivesquare