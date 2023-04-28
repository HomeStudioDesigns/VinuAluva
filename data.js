var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.365120782194846
      },
      "linkHotspots": [
        {
          "yaw": -2.1247483124396798,
          "pitch": 0.20204971876389877,
          "rotation": 0,
          "target": "1-pooja"
        },
        {
          "yaw": 2.0465671230903277,
          "pitch": 0.3920890812868496,
          "rotation": 0,
          "target": "2-stairdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pooja",
      "name": "POOJA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.19825387800946,
          "pitch": 0.08099766401634767,
          "rotation": 0,
          "target": "2-stairdining"
        },
        {
          "yaw": -1.5635504159696545,
          "pitch": 0.33368176681857165,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stairdining",
      "name": "STAIR/DINING",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7527803047879722,
          "pitch": 0.48955678293760485,
          "rotation": 0,
          "target": "7-first-floor"
        },
        {
          "yaw": -1.1305648032310458,
          "pitch": 0.0896565663425477,
          "rotation": 0,
          "target": "6-bed-room-02-"
        },
        {
          "yaw": -2.1388554016860652,
          "pitch": 0.06623056511266867,
          "rotation": 0,
          "target": "5-bed-room-01"
        },
        {
          "yaw": 0.6781747336416561,
          "pitch": 0.4171573516994336,
          "rotation": 0,
          "target": "3-wash"
        },
        {
          "yaw": 2.8349983903422338,
          "pitch": 0.3766756028656211,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.2314632281250617,
          "pitch": 0.10101279580980105,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash",
      "name": "WASH",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3913622912146764,
          "pitch": -0.024581571290902104,
          "rotation": 0,
          "target": "5-bed-room-01"
        },
        {
          "yaw": -2.0798019671199963,
          "pitch": -0.07104290095806576,
          "rotation": 0,
          "target": "6-bed-room-02-"
        },
        {
          "yaw": -1.9693344177317336,
          "pitch": 0.2414539481115643,
          "rotation": 0,
          "target": "2-stairdining"
        },
        {
          "yaw": -2.6761270622094475,
          "pitch": 0.4712352895383347,
          "rotation": 0,
          "target": "2-stairdining"
        },
        {
          "yaw": -2.9080055657848014,
          "pitch": 0.12610795335221425,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 2.2195069323604617,
          "pitch": 0.203661403868729,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.112232840309437,
          "pitch": 0.1581207342428108,
          "rotation": 0,
          "target": "2-stairdining"
        },
        {
          "yaw": -2.551827000603703,
          "pitch": 0.2527805326215944,
          "rotation": 0,
          "target": "3-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bed-room-01",
      "name": "BED ROOM 01",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2073878421617295,
          "pitch": 0.015245329259185425,
          "rotation": 0,
          "target": "2-stairdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bed-room-02-",
      "name": "BED ROOM 02 ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.00853275123748,
          "pitch": -0.007507515909168205,
          "rotation": 0,
          "target": "2-stairdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-first-floor",
      "name": "FIRST FLOOR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3399843449204578,
          "pitch": 0.029701225154358468,
          "rotation": 0,
          "target": "10-bed-room-04"
        },
        {
          "yaw": -3.042514715606501,
          "pitch": 0.031080572666715156,
          "rotation": 0,
          "target": "8-bed-room-03"
        },
        {
          "yaw": -0.5565115697458296,
          "pitch": 0.6348661521598551,
          "rotation": 0,
          "target": "2-stairdining"
        },
        {
          "yaw": -2.4470684381933676,
          "pitch": 0.09942482865251279,
          "rotation": 0,
          "target": "12-home-theatre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bed-room-03",
      "name": "BED ROOM 03",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0073957443039312,
          "pitch": 0.1351601253499375,
          "rotation": 0,
          "target": "7-first-floor"
        },
        {
          "yaw": -1.6957459757092046,
          "pitch": 0.17098398706178486,
          "rotation": 0,
          "target": "9-toilet-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-toilet-03",
      "name": "TOILET 03",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0092294239165085,
          "pitch": 0.27786263199975636,
          "rotation": 0,
          "target": "8-bed-room-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bed-room-04",
      "name": "BED ROOM 04",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7542049479541966,
          "pitch": 0.1183024054667321,
          "rotation": 0,
          "target": "7-first-floor"
        },
        {
          "yaw": 2.4572729426815823,
          "pitch": 0.07834758583668489,
          "rotation": 0,
          "target": "11-dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-dressing",
      "name": "DRESSING",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5870102627134948,
          "pitch": 0.2332642112810852,
          "rotation": 0,
          "target": "7-first-floor"
        },
        {
          "yaw": -0.32027747121830785,
          "pitch": 0.4449511228678986,
          "rotation": 0,
          "target": "10-bed-room-04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-home-theatre",
      "name": "HOME THEATRE",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4930598065654319,
          "pitch": 0.11238598229973817,
          "rotation": 0,
          "target": "7-first-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VINU ALUVA 02",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
