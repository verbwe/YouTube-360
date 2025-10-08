var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-area",
      "name": "dining area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4352771961354611
      },
      "linkHotspots": [
        {
          "yaw": 0.9725536839564732,
          "pitch": 0.05085627860322539,
          "rotation": 7.0685834705770345,
          "target": "2-kitchen"
        },
        {
          "yaw": 3.0271984104213683,
          "pitch": 0.09262503790039389,
          "rotation": 0,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4352771961354611
      },
      "linkHotspots": [
        {
          "yaw": -0.3020971522710454,
          "pitch": 0.038789957971467004,
          "rotation": 6.283185307179586,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.979621245062976,
          "pitch": 0.09427176983103003,
          "rotation": 0,
          "target": "3-salon"
        },
        {
          "yaw": -0.7202706342808547,
          "pitch": -0.009639402987302148,
          "rotation": 10.995574287564278,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4352771961354611
      },
      "linkHotspots": [
        {
          "yaw": -2.1999613307348476,
          "pitch": 0.13173689371512864,
          "rotation": 0.7853981633974483,
          "target": "0-dining-area"
        },
        {
          "yaw": 2.7472734052999215,
          "pitch": 0.1610854799089303,
          "rotation": 6.283185307179586,
          "target": "1-living-room"
        },
        {
          "yaw": -2.869172719255925,
          "pitch": 0.08058040980066217,
          "rotation": 0.7853981633974483,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.026375970170231966,
        "pitch": 0.0077821420816999165,
        "fov": 1.4352771961354611
      },
      "linkHotspots": [
        {
          "yaw": -1.743189441088024,
          "pitch": 0.11168744245912876,
          "rotation": 6.283185307179586,
          "target": "1-living-room"
        },
        {
          "yaw": 2.97573313136634,
          "pitch": 0.06395942286664535,
          "rotation": 0,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
