var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
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
        "yaw": 0.48819984474839906,
        "pitch": 0.18313300964182133,
        "fov": 1.4185322104917357
      },
      "linkHotspots": [
        {
          "yaw": 1.9882062163224274,
          "pitch": 0.34217050420194894,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 1.6318583959927357,
          "pitch": 0.20992605238263806,
          "rotation": 0,
          "target": "2-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "FAMILY LIVING",
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
          "yaw": -1.7364250289011238,
          "pitch": 0.6308578407745706,
          "rotation": 0,
          "target": "4-wash"
        },
        {
          "yaw": -2.0957321313578774,
          "pitch": 0.2202756552072458,
          "rotation": 10.995574287564278,
          "target": "3-bedroom-01"
        },
        {
          "yaw": -1.22100898182741,
          "pitch": 0.21077777633603745,
          "rotation": 1.5707963267948966,
          "target": "5-bedroom-02"
        },
        {
          "yaw": 1.2055606840072706,
          "pitch": 0.15679869419147785,
          "rotation": 0,
          "target": "6-dining-kitchen"
        },
        {
          "yaw": 1.540128963596687,
          "pitch": 0.018751734180426638,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -0.7509121058292969,
          "pitch": 0.519308427124745,
          "rotation": 0,
          "target": "2-upper-living"
        },
        {
          "yaw": 3.022312928427837,
          "pitch": 0.4241087129713783,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-upper-living",
      "name": "UPPER LIVING",
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
          "yaw": 0.14069163374797888,
          "pitch": 0.7683401134753698,
          "rotation": 5.497787143782138,
          "target": "1-family-living"
        },
        {
          "yaw": 1.866282091658035,
          "pitch": 0.21859462292860599,
          "rotation": 0,
          "target": "9-bedroom-04"
        },
        {
          "yaw": -2.465943208743534,
          "pitch": 0.07502189992645114,
          "rotation": 5.497787143782138,
          "target": "8-bedroom-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-01",
      "name": "BEDROOM 01",
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
          "yaw": -1.2369280891278223,
          "pitch": 0.36990533235113254,
          "rotation": 5.497787143782138,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash",
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
          "yaw": -0.9284934740088904,
          "pitch": 0.2212888827364914,
          "rotation": 5.497787143782138,
          "target": "3-bedroom-01"
        },
        {
          "yaw": 0.916355365532878,
          "pitch": 0.1689852609517164,
          "rotation": 0.7853981633974483,
          "target": "5-bedroom-02"
        },
        {
          "yaw": -3.140597597365616,
          "pitch": 0.5560109325656697,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": -2.30017152920356,
          "pitch": 0.36350319033426715,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 2.8110248036283867,
          "pitch": 0.02778587040446112,
          "rotation": 0,
          "target": "6-dining-kitchen"
        },
        {
          "yaw": 1.5415830346554875,
          "pitch": 0.5955214527139745,
          "rotation": 0,
          "target": "2-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-02",
      "name": "BEDROOM 02",
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
          "yaw": 0.9938241320199808,
          "pitch": 0.43601595107177005,
          "rotation": 0.7853981633974483,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-kitchen",
      "name": "DINING-KITCHEN",
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
          "yaw": -1.645082361512431,
          "pitch": 0.2160533597309957,
          "rotation": 0,
          "target": "4-wash"
        },
        {
          "yaw": -1.5629556407629828,
          "pitch": 0.39774089367452703,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 2.2605040654230226,
          "pitch": 0.5285261564298942,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -2.2209147157682274,
          "pitch": 0.14178952613152163,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -1.3127398046916134,
          "pitch": 0.23146698764643858,
          "rotation": 7.0685834705770345,
          "target": "2-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
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
          "yaw": -2.540504578937181,
          "pitch": 0.515701671412085,
          "rotation": 6.283185307179586,
          "target": "6-dining-kitchen"
        },
        {
          "yaw": 3.07537762134241,
          "pitch": 0.16120382196430327,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-03",
      "name": "BEDROOM 03",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-04",
      "name": "BEDROOM 04",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "VINU, ALUVA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
