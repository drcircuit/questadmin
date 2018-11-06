const database = {};
module.exports = function (namespace) {
    database[namespace] = [{
            "room": "Dining Room",
            "startingRoom": false,
            "id": "diningroom",
            "doors": [
              {
                "position": {
                  "upperLeftCorner": {
                    "x": 0,
                    "y": 78
                  },
                  "lowerRightCorner": {
                    "x": 25,
                    "y": 200
                  }
                },
                "entryTo": "livingroom",
                "message": "Enter Living Room",
                "unlockedBy": "default"
              },
              {
                "position": {
                  "upperLeftCorner": {
                    "x": 111,
                    "y": 2
                  },
                  "lowerRightCorner": {
                    "x": 227,
                    "y": 90
                  }
                },
                "entryTo": "secretroom",
                "message": "Nice picture...",
                "unlockedBy": "silverkey"
              }
            ],
            "focusItems": [
              {
                "item": "Cheeze",
                "id": "cheeze",
                "position": {
                  "upperLeftCorner": {
                    "x": 127,
                    "y": 102
                  },
                  "lowerRightCorner": {
                    "x": 153,
                    "y": 119
                  }
                },
                "reveals": "weight",
                "sprite": {
                  "closed": "cheeze.png"
                },
                "state": "closed",
                "openedBy": "mouse",
                "unclosable": true,
                "pickupItems": [
                  {
                    "item": "A weight",
                    "id": "weight",
                    "type": "useable",
                    "singleUse": true,
                    "opens": "clock",
                    "position": {
                      "upperLeftCorner": {
                        "x": 132,
                        "y": 115
                      },
                      "lowerRightCorner": {
                        "x": 148,
                        "y": 127
                      }
                    },
                    "state": "hidden",
                    "sprite": {
                      "normal": "weight.png",
                      "inventory": "weight_i.png"
                    }
                  }
                ]
              }
            ],
            "pickupItems": [],
            "sprite": {
              "normal": "diningroom.png",
              "sunglasses": "shades_diningroom.png"
            }
          }
    ];
    return {
        all: function () {
            return database[namespace];
        },
        find: function (id) {
            var room = database[namespace].filter((r)=>r.id === id);
            return !room ? {} : room[0];
        },
        save: function (id, data) {
            database[namespace].push(data);
        },
        delete: function (id) {
            console.log(database);
            try {
                console.log("Not Implemented");
            } catch (e) {
                console.log(e);
            }
            console.log(database);

        }
    }
}