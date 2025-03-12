var APP_DATA = {
  "scenes": [
    {
      "id": "0-vestuari",
      "name": "Vestuari",
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
        "yaw": 0.10789308103237438,
        "pitch": 0.07377124917759659,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -0.028727189766872385,
          "pitch": 0.1354139129105416,
          "rotation": 0,
          "target": "1-dutxa-daire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.19227689448155516,
          "pitch": 0.13358612611549425,
          "title": "Vestuari",
          "text": "<div style=\"color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 14px; line-height: 19px; white-space: pre;\"><span id=\"docs-internal-guid-628a65a8-7fff-0003-00cc-64c21a8f5e70\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(255, 255, 255); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; text-wrap-mode: wrap;\">La sala de vestuari d'una sala blanca és una zona de transició dissenyada per garantir que les persones que accedeixen a la sala blanca estiguin correctament netes i protegides. En aquesta sala, els treballadors es posen roba especial, com bates o vestits de protecció, guants, màscares i botes, per evitar la contaminació de les sales blanques amb partícules, microorganismes o altres contaminants. </span></span></div>"
        }
      ]
    },
    {
      "id": "1-dutxa-daire",
      "name": "Dutxa d'Aire",
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
        "yaw": 3.1214087782295614,
        "pitch": 0.06553186290581436,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 3.1214087782295614,
          "pitch": 0.06553186290581436,
          "rotation": 0,
          "target": "2-passads-dutxa"
        },
        {
          "yaw": -0.022136899719420455,
          "pitch": 0.1815830836413248,
          "rotation": 0,
          "target": "0-vestuari"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7464731718782573,
          "pitch": 0.14562636201291923,
          "title": "Dutxa d'aire",
          "text": "<span id=\"docs-internal-guid-0b783261-7fff-190d-b9a2-b4b3e4d4747a\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Dispositiu utilitzat a les sales blanques i altres entorns controlats per eliminar partícules de pols o contaminants de la roba o el cos de les persones abans d'entrar a la zona neta. Funciona mitjançant un flux d'aire filtrat que es projecta sobre la persona, eliminant qualsevol partícula en suspensió.</span></span>"
        }
      ]
    },
    {
      "id": "2-passads-dutxa",
      "name": "Passadís Dutxa",
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
        "yaw": 3.108552730851507,
        "pitch": 0.0897653519404713,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -0.029047054160205477,
          "pitch": 0.13897988600427347,
          "rotation": 0,
          "target": "1-dutxa-daire"
        },
        {
          "yaw": 1.53920412638446,
          "pitch": 0.5906415470425568,
          "rotation": 0,
          "target": "3-passads-litografia"
        },
        {
          "yaw": -1.5834332358362389,
          "pitch": 0.5972160305298342,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passads-litografia",
      "name": "Passadís Litografia",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-litografia-entrada"
        },
        {
          "yaw": 1.5761543500235042,
          "pitch": 0.5133396567614987,
          "rotation": 0,
          "target": "7-passads-forns"
        },
        {
          "yaw": -1.6503403949320568,
          "pitch": 0.5708646785623444,
          "rotation": 0,
          "target": "2-passads-dutxa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-litografia-entrada",
      "name": "Litografia Entrada",
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
        "yaw": 0.16030622460633204,
        "pitch": -0.01644305614662045,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.05767105583242227,
          "pitch": 0.031429115343641456,
          "rotation": 0,
          "target": "5-litografia-finestra"
        },
        {
          "yaw": 1.8239034872646016,
          "pitch": 0.34839194902653503,
          "rotation": 0,
          "target": "6-litografia-spinner"
        },
        {
          "yaw": -2.9795768669664273,
          "pitch": 0.07538886271944101,
          "rotation": 0,
          "target": "3-passads-litografia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4317599904970297,
          "pitch": 0.32263693399812965,
          "title": "Alineadora",
          "text": "<span id=\"docs-internal-guid-a33de025-7fff-0b0d-ce3a-2eb7d9772da5\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Màquina utilitzada en la fabricació de dispositius amb una geometria controlada, permetent la fabricació de circuits integrats. El seu principi de funcionament es basa en&nbsp; exposar una màscara fotogràfica sobre una capa de material fotosensible (resina). Permet transferir patrons precisos, garantint una alta resolució en els processos de fabricació. El procés pot repetir-se varies vegades, motiu per el qual el sistema permet alinear màscares. La resolució final dependrà de la longitud d’ona utilitzada. En aquest cas utilitzem llum ultraviolada, permeten resolucions de l’ordre del micròmetre.</span></span>"
        },
        {
          "yaw": 0.7166985715220449,
          "pitch": 0.20929573447788918,
          "title": "Banc litogràfic",
          "text": "<span style=\"font-family: Calibri, sans-serif; font-size: 14.6667px; white-space-collapse: preserve;\">En aquest banc, es poden dur a terme tasques com el revelat de la resina fotosensible després de l'exposició a la llum, utilitzant dissolvents especialitzats, i netejar superfícies amb productes com acetona (per eliminar restes de resina) i isopropanol (per netejar les superfícies abans i després de les exposicions).</span>"
        }
      ]
    },
    {
      "id": "5-litografia-finestra",
      "name": "Litografia Finestra",
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
        "yaw": -0.05870507014460813,
        "pitch": 0.08009449910710487,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -2.818040021778195,
          "pitch": 0.11758775225919038,
          "rotation": 0,
          "target": "4-litografia-entrada"
        },
        {
          "yaw": 2.8482666164755415,
          "pitch": 0.04637622478759873,
          "rotation": 0,
          "target": "6-litografia-spinner"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.246824686513838,
          "pitch": 0.39606379048158225,
          "title": "Banc litogràfic",
          "text": "<span id=\"docs-internal-guid-aeee6b67-7fff-2362-6b48-4dba75dac5e0\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">En aquest banc, es poden dur a terme tasques com el revelat de la resina fotosensible després de l'exposició a la llum, utilitzant dissolvents especialitzats, i netejar superfícies amb productes com acetona (per eliminar restes de resina) i isopropanol (per netejar les superfícies abans i després de les exposicions).</span></span>"
        },
        {
          "yaw": 1.1238025713428623,
          "pitch": 0.1509692114614971,
          "title": "Banc d'ultrasons",
          "text": "<span id=\"docs-internal-guid-e4fd42b1-7fff-f1fb-710b-54b18e459b7f\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per netejar, agitar o processar materials mitjançant ones d'ultrasons (vibracions d’alta freqüència).</span></span>"
        }
      ]
    },
    {
      "id": "6-litografia-spinner",
      "name": "Litografia Spinner",
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
        "yaw": -0.20943951023931717,
        "pitch": 0.3793949957704825,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -2.1908777432027264,
          "pitch": 0.18003147725418067,
          "rotation": 0,
          "target": "4-litografia-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06677757864654943,
          "pitch": 0.6821241878456448,
          "title": "Spinner",
          "text": "<span id=\"docs-internal-guid-9e632d93-7fff-e92e-fda0-57c35284a068\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Màquina utilitzada per aplicar uniformement una capa fina de resina fotosensible (</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">photoresist</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">), sobre una superfície plana. Aquest procés s’anomena en anglès spin-coating. </span></span>"
        }
      ]
    },
    {
      "id": "7-passads-forns",
      "name": "Passadís Forns",
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
        "yaw": 0.17770625111214322,
        "pitch": 0.027400749694535875,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -0.0594802350462853,
          "pitch": 0.057237286104898644,
          "rotation": 0,
          "target": "10-servei-forns-entrada"
        },
        {
          "yaw": -3.1389501143824674,
          "pitch": 0.5585124793426779,
          "rotation": 0,
          "target": "3-passads-litografia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-forns-entrada",
      "name": "Forns Entrada",
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
        "yaw": 3.0461575283583553,
        "pitch": 0.0541480873911766,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 3.0461575283583553,
          "pitch": 0.0541480873911766,
          "rotation": 0,
          "target": "9-forns-finestra"
        },
        {
          "yaw": 0.7439629400077781,
          "pitch": 0.17315728395426433,
          "rotation": 0,
          "target": "7-passads-forns"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2270696854070655,
          "pitch": 0.18471674751012657,
          "title": "Banc químic",
          "text": "<span id=\"docs-internal-guid-d94e9369-7fff-839c-1de6-bb0afdaa0bbe\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Un banc químic és una estació de treball en una sala blanca dissenyada per manipular productes químics de manera segura i controlada.</span></span>"
        },
        {
          "yaw": -0.9423523242343119,
          "pitch": -0.1607593126569924,
          "title": "Forn de recuits",
          "text": "<span id=\"docs-internal-guid-11cb9e86-7fff-4ec1-21c1-1f0388a4bf0b\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per escalfar materials en presència d’un gas inert (Nitrogen) a una temperatura controlada. Aquest procés alleuja tensions internes, millora la ductilitat i ajusta propietats com la resistivitat o l’estructura cristal·lina.</span></span>"
        }
      ]
    },
    {
      "id": "9-forns-finestra",
      "name": "Forns Finestra",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.9931304026238212,
          "pitch": 0.1503613164696045,
          "rotation": 0,
          "target": "10-servei-forns-entrada"
        },
        {
          "yaw": -2.9317607409200335,
          "pitch": 0.07266076812701527,
          "rotation": 0,
          "target": "8-forns-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9328284771788145,
          "pitch": 0.31661160681265876,
          "title": "Banc químic",
          "text": "<span id=\"docs-internal-guid-d94e9369-7fff-839c-1de6-bb0afdaa0bbe\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Un banc químic és una estació de treball en una sala blanca dissenyada per manipular productes químics de manera segura i controlada.</span></span>"
        },
        {
          "yaw": 2.13226350997928,
          "pitch": -0.10054180862973894,
          "title": "Forn d'oxidació",
          "text": "<span id=\"docs-internal-guid-1bdfb2d8-7fff-e40e-f178-f252c0eaeed8\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per escalfar materials a alta temperatura en presència d’oxigen o gasos oxidants per formar una capa d'òxid superficial. Aquest òxid tèrmic és un dielèctric de gran qualitat i s’utilitzen per a fabricar l`òxid de porta en dispositius MOSFET basats en silici.</span></span>"
        },
        {
          "yaw": 2.141415844252993,
          "pitch": 0.34082680841352264,
          "title": "Forn de difusió",
          "text": "<span id=\"docs-internal-guid-ac4760f2-7fff-aa3d-1d29-7dda8a222499\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat en la fabricació de semiconductors, per introduir impureses controlades (dopants) en un semiconductor, com ara el silici. Mitjançant escalfament a alta temperatura i l’ús de gasos reactius, es difonen els àtoms dopants al interior de la xarxa cristal·lina, permetent controlar les propietats elèctriques del semiconductor (conductivitat).</span></span>"
        }
      ]
    },
    {
      "id": "10-servei-forns-entrada",
      "name": "Servei Forns Entrada",
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
        "yaw": -2.948019772914053,
        "pitch": 0.06323249929508279,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -2.905254564369418,
          "pitch": 0.3220562073991591,
          "rotation": 0,
          "target": "11-servei-forns"
        },
        {
          "yaw": -0.06360016587530737,
          "pitch": 0.1328411286547837,
          "rotation": 0,
          "target": "9-forns-finestra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-servei-forns",
      "name": "Servei Forns",
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
          "yaw": 0.8700238848272797,
          "pitch": 0.1291529303221317,
          "rotation": 0,
          "target": "10-servei-forns-entrada"
        },
        {
          "yaw": -0.7747218409357064,
          "pitch": 0.1653841319989997,
          "rotation": 0,
          "target": "12-armaris-qumics"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-armaris-qumics",
      "name": "Armaris Químics",
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
        "yaw": -0.5965985055868135,
        "pitch": 0.01264649985902011,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.8504886805378291,
          "pitch": 0.18494410379592274,
          "rotation": 0,
          "target": "11-servei-forns"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-passads-metalitzaci",
      "name": "Passadís Metalització",
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
        "yaw": -0.5902386197653531,
        "pitch": 0.1956276942060846,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.30465489723002825,
          "pitch": 0.0966418225368244,
          "rotation": 0,
          "target": "14-caracteritzaci-entrada"
        },
        {
          "yaw": -1.5249200775310747,
          "pitch": 0.006864875071531884,
          "rotation": 0,
          "target": "16-metalitzaci-ald"
        },
        {
          "yaw": 1.5596085267401358,
          "pitch": 0.39414605564659944,
          "rotation": 0,
          "target": "2-passads-dutxa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-caracteritzaci-entrada",
      "name": "Caracterització Entrada",
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
        "yaw": 0.07615982190520754,
        "pitch": 0.1411788706305792,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.12272321257024288,
          "pitch": 0.005209115964248667,
          "rotation": 0,
          "target": "15-caracteritzaci-finestra"
        },
        {
          "yaw": -3.0617591857242044,
          "pitch": 0.0428521884576174,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5387440303527624,
          "pitch": 0.3879436261960443,
          "title": "Equip Sinton",
          "text": "<span id=\"docs-internal-guid-afed89f9-7fff-e4e3-e565-8d4d18f2860f\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Aquest equip permet mesurar&nbsp; el temps de vida de portadors fotogenerats en el semiconductor. S’empra de manera habitual en el silici cristal.li i permet controlar el temps de vida dels portadors després de cada procés tecnològic. És un equip bàsic per a la fabricació de cèl·lules solars de silici cristal·lí.</span></span>"
        },
        {
          "yaw": -1.0629095833375466,
          "pitch": 0.1509577538532625,
          "title": "Microscopi òptic",
          "text": "<span id=\"docs-internal-guid-d7d8b216-7fff-1f44-465e-df6e31e88ee1\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Un microscopi òptic és un instrument que utilitza llum visible per ampliar imatges d'objectes petits, permetent la visualització detallada de superfícies o estructures a una escala microscòpica.</span></span>"
        },
        {
          "yaw": -1.812978645229773,
          "pitch": 0.17679376176741002,
          "title": "Lupa",
          "text": "<span id=\"docs-internal-guid-de34de5f-7fff-6759-36bb-e72262053afc\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Una lupa és una lent de baixa potència que es fa servir per ampliar imatges d'objectes petits. Tot i que la seva amplificació és molt menor que la d’un microscopi òptic, la lupa és útil per observacions ràpides i per veure detallades estructures a mida petita, com ara imperfeccions a superfícies o components de circuits.</span></span>"
        }
      ]
    },
    {
      "id": "15-caracteritzaci-finestra",
      "name": "Caracterització Finestra",
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
        "yaw": 0.22056304553931305,
        "pitch": -0.006323249929508279,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -3.1019713050368374,
          "pitch": 0.05928819087908366,
          "rotation": 0,
          "target": "14-caracteritzaci-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.141821402681174,
          "pitch": 0.4132904728507931,
          "title": "Perfilòmetre",
          "text": "<span id=\"docs-internal-guid-14c59beb-7fff-8fe7-0e16-302cfe1b86ec\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per mesurar el perfil o les irregularitats de capes fines (&lt; 1 micròmetre), proporcionant informació detallada sobre la seva topografia. Es basa en una punta metàl.lica que ressegueix la superficie de la capa fina. Molt útil per a mesurar el gruix d’una capa fina.</span></span>"
        },
        {
          "yaw": -1.1906988198153066,
          "pitch": 0.1546996456663159,
          "title": "<span id=\"docs-internal-guid-114a44aa-7fff-03a4-49dd-3ec2a952c510\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">El·lipsòmetre</span></span>",
          "text": "<span id=\"docs-internal-guid-69eed617-7fff-21a0-0890-a78fc6f227ef\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per mesurar les propietats òptiques, com l'índex de refracció i el gruix de les capes fines de materials. El principi de funcionament es basa en el canvi de de la polarització de la llum quan es reflecteix sobre una superficie…</span></span>"
        },
        {
          "yaw": -2.030921935507095,
          "pitch": 0.2090638184209137,
          "title": "Equip de 4 puntes",
          "text": "<span id=\"docs-internal-guid-54e400e8-7fff-9480-1f35-d0d64f3bfd30\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per conèixer la resistència de quadre (</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">R</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\"><span style=\"font-size:0.6em;vertical-align:sub;\">sh</span></span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">) d’un material.</span></span>"
        }
      ]
    },
    {
      "id": "16-metalitzaci-ald",
      "name": "Metalització ALD",
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
        "yaw": 0.71875676662148,
        "pitch": 0.2170982475797807,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 2.70643570564786,
          "pitch": 0.144718060206948,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        },
        {
          "yaw": -0.9198996441431184,
          "pitch": 0.19197899856948197,
          "rotation": 0,
          "target": "17-metalitzaci-pecvd"
        },
        {
          "yaw": 0.07073847847605208,
          "pitch": 0.12241921320332949,
          "rotation": 0,
          "target": "19-metalitzaci-sputtering"
        },
        {
          "yaw": 0.995648583795969,
          "pitch": 0.10967783450042567,
          "rotation": 0,
          "target": "18-metalitzaci-evaporadora"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6185585099213933,
          "pitch": 0.28631926109233063,
          "title": "Atomic Layer Deposition (ALD)",
          "text": "<span id=\"docs-internal-guid-c5f97b07-7fff-39f6-16f6-08a73478775c\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">És una tècnica de&nbsp; dipòsit de pel·lícules fines a partir de reaccions químiques controlades a escala atòmica. A través d'aquest procés, s'aconsegueixen capes molt fines, uniformes, conformals i amb una alta precisió en el control del gruix, ideal per la fabricació de dispositius semiconductors. El procés es realitza a l’interior d’una cambra d'alt buit (1·10-4 mbar). No es considera un procés CVD (Chemical Vapour Deposition). En un procés CVD es produeixen reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</span></span>"
        }
      ]
    },
    {
      "id": "17-metalitzaci-pecvd",
      "name": "Metalització PECVD",
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
          "yaw": -2.245209391679712,
          "pitch": 0.1358707385841047,
          "rotation": 0,
          "target": "16-metalitzaci-ald"
        },
        {
          "yaw": 3.051993724317981,
          "pitch": 0.07663784098626003,
          "rotation": 0,
          "target": "18-metalitzaci-evaporadora"
        },
        {
          "yaw": 1.8714184242575689,
          "pitch": 0.10073900500716526,
          "rotation": 0,
          "target": "19-metalitzaci-sputtering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1993881112341782,
          "pitch": 0.27812749720375507,
          "title": "Plasma Enhanced Chemical Vapour Deposition (PECVD)",
          "text": "<span id=\"docs-internal-guid-0d46c628-7fff-8e2d-944d-2e82f252f056\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">És un sistema utilitzat per dipositar pel·lícules fines a partir de precursors gasosos mitjançant un procés químic, procés activat per un plasma de radiofreqüència a 13.56 MHz. És l’equip utilitzat per a dipositar el silici amorf hidrogenat (a-Si:H). El a-Si:H és el semiconductor que s’utilitza per a fabricar els transistors en capa fina (Thin-Film Transistor TFT) que acompanya a tots els píxels de les pantalles de mòbil i ordinadors.</span></span>"
        }
      ]
    },
    {
      "id": "18-metalitzaci-evaporadora",
      "name": "Metalització Evaporadora",
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
          "yaw": 1.6582251387241635,
          "pitch": 0.25942241615956974,
          "rotation": 0,
          "target": "16-metalitzaci-ald"
        },
        {
          "yaw": 2.7756267444732394,
          "pitch": 0.18762763684548212,
          "rotation": 0,
          "target": "17-metalitzaci-pecvd"
        },
        {
          "yaw": -2.364321190012845,
          "pitch": 0.12230399588196406,
          "rotation": 0,
          "target": "19-metalitzaci-sputtering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.48744724568135034,
          "pitch": -0.27567485293072735,
          "title": "Evaporadora tèrmica",
          "text": "<span id=\"docs-internal-guid-34a4fbf6-7fff-d400-51ea-a065603d412a\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip utilitzat per dipositar materials a una superfície mitjançant la tècnica d’evaporació o sublimació tèrmica.&nbsp; El procés es fa sota condicions d’alt buit (de l’ordre de 10-6 mbar) a l’interior d’una cambra de buit . En aquest procés, el material s’escalfa passant d’estat sòlid a líquid i de líquid a gas (evaporació tèrmica), o bé d’estat sòlid a gas (sublimació) recobrint tota la càmara amb una capa fina. És un procés de dipòsit no conformal. Es considera un procés PVD (Physical Vapour Deposition) en el que no hi han reaccions reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</span></span>"
        }
      ]
    },
    {
      "id": "19-metalitzaci-sputtering",
      "name": "Metalització Sputtering",
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
        "yaw": -0.243381348079863,
        "pitch": 0.035831749600546914,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.3193471819015592,
          "pitch": 0.09933729309346795,
          "rotation": 0,
          "target": "20-servei-metalitzaci"
        },
        {
          "yaw": -2.8201728692907118,
          "pitch": 0.07361829337341774,
          "rotation": 0,
          "target": "18-metalitzaci-evaporadora"
        },
        {
          "yaw": -2.118589713569616,
          "pitch": 0.0581119114385551,
          "rotation": 0,
          "target": "16-metalitzaci-ald"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9903128370300784,
          "pitch": -0.058992116315573995,
          "title": "Polvorització catòdica (Sputtering)",
          "text": "<span id=\"docs-internal-guid-d8304e4c-7fff-a802-1905-f26f44eed034\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">Equip de dipòsit molt versàtil que permet el dipòsit de capes fines conformals. Es basa en arrencament de material d’un target (polvorització) que es diposita sobre el substrat. Aquest arrencament sol realitzar-se a partir del bombardeig d’ions (Argó). Per facilitar el procés es sol utilitzar un imant que concentra el bombardeig d’ions sobre el target (polvorització catòdica, o </span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">magnetron sputtering</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">). Es un procés PVD i és realitzat en condicions d’alt buit (10-6 mbar).</span></span>"
        }
      ]
    },
    {
      "id": "20-servei-metalitzaci",
      "name": "Servei Metalització",
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
        "yaw": 1.5817049662602907,
        "pitch": 0.09120808989230156,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -0.06855236813749421,
          "pitch": 0.31602411932042074,
          "rotation": 0,
          "target": "19-metalitzaci-sputtering"
        },
        {
          "yaw": 1.5817049662602907,
          "pitch": 0.09120808989230156,
          "rotation": 0,
          "target": "21-servei-metalitzaci-bombes"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-servei-metalitzaci-bombes",
      "name": "Servei Metalització Bombes",
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
        "yaw": 0.7425529266843007,
        "pitch": 0.08430999906011039,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -2.4156991052635313,
          "pitch": 0.13000702808845688,
          "rotation": 0,
          "target": "20-servei-metalitzaci"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TourSalaBlancaUPC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
