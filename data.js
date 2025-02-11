var APP_DATA = {
  "scenes": [
    {
      "id": "0-1_vestuario",
      "name": "1_Vestuario",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.125218522831757,
        "pitch": 0.04654311847477999,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.037577780919107795,
          "pitch": 0.13890238868120086,
          "rotation": 0,
          "target": "1-2_ducha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2_ducha",
      "name": "2_Ducha",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00023394040041324615,
          "pitch": 0,
          "rotation": 0,
          "target": "0-1_vestuario"
        },
        {
          "yaw": -3.131368260360933,
          "pitch": -0.012675725174748464,
          "rotation": 0,
          "target": "2-3_pasillo_ducha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3_pasillo_ducha",
      "name": "3_Pasillo_Ducha",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03198226871674592,
          "pitch": 0.13244984544988014,
          "rotation": 0,
          "target": "1-2_ducha"
        },
        {
          "yaw": 1.5245132042932168,
          "pitch": 0.5275783899335575,
          "rotation": 0,
          "target": "3-4_pasillo_litografia"
        },
        {
          "yaw": -1.546534665828709,
          "pitch": 0.48329772706058627,
          "rotation": 0,
          "target": "13-14_pasillo_metalizacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4_pasillo_litografia",
      "name": "4_Pasillo_Litografia",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01604411431467412,
          "pitch": 0.11263593172711239,
          "rotation": 0,
          "target": "4-5_litografia_entrada"
        },
        {
          "yaw": -1.6263837841800104,
          "pitch": 0.32057231174568734,
          "rotation": 0,
          "target": "2-3_pasillo_ducha"
        },
        {
          "yaw": 1.580253427270141,
          "pitch": 0.4773727009978188,
          "rotation": 0,
          "target": "7-8_pasillo_hornos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5_litografia_entrada",
      "name": "5_Litografia_Entrada",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06774886971185978,
          "pitch": 0.008635845905001105,
          "rotation": 0,
          "target": "5-6_litografia_ventana"
        },
        {
          "yaw": 1.8387906575464203,
          "pitch": 0.24943173220971104,
          "rotation": 0,
          "target": "6-7_litografia_spinner"
        },
        {
          "yaw": -2.9463900981485374,
          "pitch": 0.06525041470927562,
          "rotation": 0,
          "target": "3-4_pasillo_litografia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6_litografia_ventana",
      "name": "6_Litografia_Ventana",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.911517192988656,
          "pitch": -0.030266594134447544,
          "rotation": 0,
          "target": "6-7_litografia_spinner"
        },
        {
          "yaw": -2.8269933892597265,
          "pitch": 0.08466099443540998,
          "rotation": 0,
          "target": "4-5_litografia_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7_litografia_spinner",
      "name": "7_Litografia_Spinner",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.190888096406079,
          "pitch": 0.27154888220717766,
          "rotation": 0,
          "target": "4-5_litografia_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8_pasillo_hornos",
      "name": "8_Pasillo_Hornos",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0482802095774133,
          "pitch": -0.0025437661560161473,
          "rotation": 0,
          "target": "8-9_hornos_entrada"
        },
        {
          "yaw": -3.0721127780090622,
          "pitch": 0.4577898453282092,
          "rotation": 0,
          "target": "3-4_pasillo_litografia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9_hornos_entrada",
      "name": "9_Hornos_Entrada",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7408744579894311,
          "pitch": 0.11013291102206857,
          "rotation": 0,
          "target": "7-8_pasillo_hornos"
        },
        {
          "yaw": 3.039823116888546,
          "pitch": -0.0015200594525808242,
          "rotation": 0,
          "target": "9-10_hornos_ventana"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10_hornos_ventana",
      "name": "10_Hornos_Ventana",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.062001923498535,
          "pitch": 0.1624049492279056,
          "rotation": 0,
          "target": "10-11_servicio_hornos_entrada"
        },
        {
          "yaw": -2.9132445231839377,
          "pitch": 0.0780479653782642,
          "rotation": 0,
          "target": "8-9_hornos_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11_servicio_hornos_entrada",
      "name": "11_Servicio_Hornos_Entrada",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.758974778355455,
          "pitch": 0.11379003646333885,
          "rotation": 0,
          "target": "11-12_servicio_hornos"
        },
        {
          "yaw": 0.011404023392429963,
          "pitch": 0.026962117683112297,
          "rotation": 0,
          "target": "9-10_hornos_ventana"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12_servicio_hornos",
      "name": "12_Servicio_Hornos",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7868542603550264,
          "pitch": 0.11688881702812637,
          "rotation": 0,
          "target": "12-13_servicio_hornos_quimicos"
        },
        {
          "yaw": 0.8740900316486346,
          "pitch": 0.09148599582357164,
          "rotation": 0,
          "target": "10-11_servicio_hornos_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-13_servicio_hornos_quimicos",
      "name": "13_Servicio_Hornos_Quimicos",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7294233238469587,
        "pitch": 0.023696684487019226,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7808207635930344,
          "pitch": 0.10379334704851573,
          "rotation": 0,
          "target": "11-12_servicio_hornos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-14_pasillo_metalizacion",
      "name": "14_Pasillo_Metalizacion",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.35440869504783024,
          "pitch": 0.22026582204413003,
          "rotation": 0,
          "target": "14-15_medicion_entrada"
        },
        {
          "yaw": -1.5507033758968554,
          "pitch": 0.1680512041033566,
          "rotation": 0,
          "target": "16-17_metalizacion_ald"
        },
        {
          "yaw": 1.60830197388219,
          "pitch": 0.6277692537123283,
          "rotation": 0,
          "target": "2-3_pasillo_ducha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-15_medicion_entrada",
      "name": "15_Medicion_Entrada",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1288908235961781,
          "pitch": 0.03504039272397108,
          "rotation": 0,
          "target": "15-16_medicion_ventana"
        },
        {
          "yaw": -3.072411512712087,
          "pitch": 0.0016481649987074576,
          "rotation": 0,
          "target": "13-14_pasillo_metalizacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-16_medicion_ventana",
      "name": "16_Medicion_Ventana",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0663499942545602,
          "pitch": 0.09790322566461818,
          "rotation": 0,
          "target": "14-15_medicion_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-17_metalizacion_ald",
      "name": "17_Metalizacion_ALD",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.003561896432636047,
        "pitch": 0.14591652851837011,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.9764926186697114,
          "pitch": 0.03334192107374356,
          "rotation": 0,
          "target": "18-19_metalizacion_evaporadora"
        },
        {
          "yaw": 2.672951471634528,
          "pitch": 0.1812705229479672,
          "rotation": 0,
          "target": "13-14_pasillo_metalizacion"
        },
        {
          "yaw": -0.9962490817213734,
          "pitch": 0.16290072327591787,
          "rotation": 0,
          "target": "17-18_metalizacion_pecvd"
        },
        {
          "yaw": 0.020115720614899857,
          "pitch": 0.12264801454729835,
          "rotation": 0,
          "target": "19-20_metalizacion_sputtering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-18_metalizacion_pecvd",
      "name": "18_Metalizacion_PECVD",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0799556282923284,
          "pitch": 0.04343477105817506,
          "rotation": 0,
          "target": "16-17_metalizacion_ald"
        },
        {
          "yaw": 2.9931913897962428,
          "pitch": -0.0025230126636692773,
          "rotation": 0,
          "target": "18-19_metalizacion_evaporadora"
        },
        {
          "yaw": 1.9533741763965278,
          "pitch": 0.07004713430491805,
          "rotation": 0,
          "target": "19-20_metalizacion_sputtering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-19_metalizacion_evaporadora",
      "name": "19_Metalizacion_Evaporadora",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5353622299930354,
          "pitch": 0.11633146311965703,
          "rotation": 0,
          "target": "16-17_metalizacion_ald"
        },
        {
          "yaw": -2.1420011522568014,
          "pitch": 0.08896195363850978,
          "rotation": 0,
          "target": "19-20_metalizacion_sputtering"
        },
        {
          "yaw": 2.877799818071244,
          "pitch": 0.09773870138280927,
          "rotation": 0,
          "target": "17-18_metalizacion_pecvd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-20_metalizacion_sputtering",
      "name": "20_Metalizacion_Sputtering",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.30787109996600215,
          "pitch": 0.08142940624443007,
          "rotation": 0,
          "target": "20-21_servicio_metalizacion_entrada"
        },
        {
          "yaw": -2.7773393259115977,
          "pitch": 0.17366466551019322,
          "rotation": 0,
          "target": "18-19_metalizacion_evaporadora"
        },
        {
          "yaw": -2.151066629036441,
          "pitch": 0.020577291039067802,
          "rotation": 0,
          "target": "16-17_metalizacion_ald"
        },
        {
          "yaw": -1.3576823840652814,
          "pitch": 0.03166871521887771,
          "rotation": 0,
          "target": "17-18_metalizacion_pecvd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-21_servicio_metalizacion_entrada",
      "name": "21_Servicio_Metalizacion_Entrada",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05843940164732686,
          "pitch": 0.11513895243215622,
          "rotation": 0,
          "target": "19-20_metalizacion_sputtering"
        },
        {
          "yaw": 1.6223565708843228,
          "pitch": 0.18756261854115763,
          "rotation": 0,
          "target": "21-22_servicio_metalizacion_bombas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-22_servicio_metalizacion_bombas",
      "name": "22_Servicio_Metalizacion_Bombas",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3447396092631454,
          "pitch": 0.15393463541253638,
          "rotation": 0,
          "target": "20-21_servicio_metalizacion_entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SalaBlancaUPC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
