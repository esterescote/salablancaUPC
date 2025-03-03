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
        "yaw": 0.165748982151106,
        "pitch": 0.07157332552524664,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.037577780919107795,
          "pitch": 0.13890238868120086,
          "rotation": 0,
          "target": "1-dutxa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.25060901260403234,
          "pitch": 0.11631377651973551,
          "title": "Vestuari",
          "text": "La sala de vestuari d'una sala blanca és la zona de transició dissenyada per garantir que les persones que accedeixen a la sala blanca estiguin correctament <b>netes i protegides.&nbsp;</b><div><br><div>En aquesta sala, els treballadors es posen <b>roba especial</b>, com bates o vestits de protecció, guants, màscares i botes per evitar la contaminació de les sales blanques amb partícules, microorganismes o altres contaminants.</div></div>"
        }
      ]
    },
    {
      "id": "1-dutxa",
      "name": "Dutxa d'aire",
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
        "yaw": -3.050814621974313,
        "pitch": -0.0009101893472909239,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.00023394040041324615,
          "pitch": 0,
          "rotation": 0,
          "target": "0-vestuari"
        },
        {
          "yaw": -3.131368260360933,
          "pitch": -0.012675725174748464,
          "rotation": 0,
          "target": "2-passads-dutxa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6145768005374528,
          "pitch": 0.34493040210497306,
          "title": "Dutxa d'aire",
          "text": "Dispositiu utilitzat a les sales blanques i altres entorns controlats per <b>eliminar partícules</b> de pols o contaminants de la roba o el cos de les persones abans d'entrar a la zona neta.&nbsp;<div><br></div><div>Funciona mitjançant un <b>flux d'aire filtrat</b> que es projecta sobre la persona, eliminant qualsevol partícula en suspensió.</div>"
        }
      ]
    },
    {
      "id": "2-passads-dutxa",
      "name": "Passadís dutxa",
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
          "yaw": 3.2343,
          "pitch": 0.30029327301218345,
          "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.03185467650530782,
          "pitch": 0.13802399682128907,
          "rotation": 0,
          "target": "1-dutxa"
        },
        {
          "yaw": 1.5245132042932168,
          "pitch": 0.5275783899335575,
          "rotation": 0,
          "target": "3-passads-litografia"
        },
        {
          "yaw": -1.546534665828709,
          "pitch": 0.48329772706058627,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passads-litografia",
      "name": "Passadís litografia",
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
        "yaw": 0.7268629818018049,
        "pitch": 0.5129449840823046,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.01604411431467412,
          "pitch": 0.11263593172711239,
          "rotation": 0,
          "target": "4-litografia-entrada"
        },
        {
          "yaw": -1.6263837841800104,
          "pitch": 0.32057231174568734,
          "rotation": 0,
          "target": "2-passads-dutxa"
        },
        {
          "yaw": 1.580253427270141,
          "pitch": 0.4773727009978188,
          "rotation": 0,
          "target": "7-passads-forns"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-litografia-entrada",
      "name": "Litografia entrada",
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
        "yaw": 0.02486680864408264,
        "pitch": 0.2552146972187135,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.06774886971185978,
          "pitch": 0.008635845905001105,
          "rotation": 0,
          "target": "5-litografia-finestra"
        },
        {
          "yaw": 1.8387906575464203,
          "pitch": 0.24943173220971104,
          "rotation": 0,
          "target": "6-litogragia-spinner"
        },
        {
          "yaw": -2.9463900981485374,
          "pitch": 0.06525041470927562,
          "rotation": 0,
          "target": "3-passads-litografia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.439130586082575,
          "pitch": 0.280807526042647,
          "title": "Alineadora",
          "text": "Màquina utilitzada en la fabricació de dispositius amb una geometria controlada, permetent la fabricació de circuits integrats.&nbsp;<div><br></div><div>El seu principi de funcionament es basa en <b>exposar una màscara fotogràfica </b>sobre una capa de <b>material fotosensible</b> (resina).&nbsp;</div><div><br></div><div>Permet transferir patrons precisos, garantint una alta resolució en els processos de fabricació. El procés pot repetir-se varies vegades, motiu pel qual el sistema permet alinear màscares.&nbsp;</div><div><br></div><div>La resolució final dependrà de la longitud d'ona utilitzada. En aquest cas s'utilitza llum ultraviolada, permetent resolucions de l'ordre del micròmetre.</div>"
        }
      ]
    },
    {
      "id": "5-litografia-finestra",
      "name": "Litografia finestra",
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
        "yaw": 0.3295,
        "pitch": 0.0009101893472891476,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.911517192988656,
          "pitch": -0.030266594134447544,
          "rotation": 0,
          "target": "6-litogragia-spinner"
        },
        {
          "yaw": -2.8269933892597265,
          "pitch": 0.08466099443540998,
          "rotation": 0,
          "target": "4-litografia-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3539434330020326,
          "pitch": 0.46377193494281244,
          "title": "Banc litogràfic",
          "text": "En aquest banc, es poden dur a terme tasques com el<b> revelat de la resina fotosensible</b> després de l'exposició a la llum, utilitzant <b>dissolvents </b>especialitzats, i netejar superfícies amb productes com acetona (per eliminar restes de resina) i isopropanol (per netejar les superfícies abans i després de les exposicions)."
        },
        {
          "yaw": 1.17534623582862,
          "pitch": 0.14910846228792352,
          "title": "Equip d'ultrasons",
          "text": "Equip utilitzat per <b>netejar, agitar o processar</b> materials mitjançant ones d'ultrasons (vibracions d'alta freqüència)."
        }
      ]
    },
    {
      "id": "6-litogragia-spinner",
      "name": "Litogragia spinner",
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
          "target": "4-litografia-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12902986098169045,
          "pitch": 0.7051761251885473,
          "title": "Spinner",
          "text": "Màquina utilitzada per aplicar uniformement una capa fina de&nbsp;<b>resina fotosensible</b>&nbsp;(<i>photoresist</i>), sobre una superfície plana. Aquest procés s'anomena en anglès&nbsp;<b>spin-coating.</b>"
        }
      ]
    },
    {
      "id": "7-passads-forns",
      "name": "Passadís forns",
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
          "target": "8-forns-entrada"
        },
        {
          "yaw": -3.0721127780090622,
          "pitch": 0.4577898453282092,
          "rotation": 0,
          "target": "3-passads-litografia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-forns-entrada",
      "name": "Forns entrada",
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
        "yaw": 2.9876215850696948,
        "pitch": 0.119449038759317,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7408744579894311,
          "pitch": 0.11013291102206857,
          "rotation": 0,
          "target": "7-passads-forns"
        },
        {
          "yaw": 3.039823116888546,
          "pitch": -0.0015200594525808242,
          "rotation": 0,
          "target": "9-forns-finestra"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9094360114892979,
          "pitch": -0.17665809294125268,
          "title": "Forn de recuits",
          "text": "Equip utilitzat per escalfar materials en presència d'un <b>gas inert</b> (Nitrogen) a una temperatura controlada.&nbsp;<div><br></div><div>Aquest procés <b>alleuja tensions</b> internes, <b>millora la ductilitat</b> i <b>ajusta propietats</b> com la resistivitat o l'estructura cristal·lina.&nbsp;</div>"
        },
        {
          "yaw": 2.308679169674045,
          "pitch": 0.1647839024384652,
          "title": "Banc químic",
          "text": "Un banc químic és una estació de treball en una sala blanca dissenyada per&nbsp;<b>manipular productes químics</b>&nbsp;de manera segura i controlada."
        }
      ]
    },
    {
      "id": "9-forns-finestra",
      "name": "Forns finestra",
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
        "yaw": 2.125988323771134,
        "pitch": 0.11559404710580168,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.062001923498535,
          "pitch": 0.1624049492279056,
          "rotation": 0,
          "target": "10-servei-forns-entrada"
        },
        {
          "yaw": -2.9132445231839377,
          "pitch": 0.0780479653782642,
          "rotation": 0,
          "target": "8-forns-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.127730513936662,
          "pitch": -0.0877706679200756,
          "title": "Forn d'oxidació",
          "text": "Equip utilitzat per escalfar materials a alta temperatura en presència d'oxigen o gasos oxidants per formar una capa d'<b>òxid superficial</b>.<div><br></div><div>Aquest òxid tèrmic és un dielèctric de gran qualitat i s'utilitzen per a fabricar l'òxid de porta en dispositius MOSFET basats en silici.</div>"
        },
        {
          "yaw": 2.1334422025416586,
          "pitch": 0.25863286796293394,
          "title": "Forn de difusió",
          "text": "Equip utilitzat en la fabricació de semiconductors, per introduir <b>impureses controlades</b> (dopants) en un semiconductor, com ara el silici.&nbsp;<div><br></div><div>Mitjançant escalfament a alta temperatura i l'ús de gasos reactius, es difonen els àtoms dopants a l'interior de la xarxa cristal·lina, permetent controlar les propietats elèctriques del semiconductor (conductivitat).</div>"
        },
        {
          "yaw": -1.833031251869171,
          "pitch": 0.23185361134899019,
          "title": "Banc químic",
          "text": "Un banc químic és una estació de treball en una sala blanca dissenyada per <b>manipular productes químics</b> de manera segura i controlada."
        }
      ]
    },
    {
      "id": "10-servei-forns-entrada",
      "name": "Servei Forns entrada",
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
        "yaw": -2.449451414974231,
        "pitch": 0.07008457974131233,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.758974778355455,
          "pitch": 0.11379003646333885,
          "rotation": 0,
          "target": "11-servei-forns"
        },
        {
          "yaw": 0.011404023392429963,
          "pitch": 0.026962117683112297,
          "rotation": 0,
          "target": "9-forns-finestra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-servei-forns",
      "name": "Servei forns",
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
          "target": "12-servei-forns-qumics"
        },
        {
          "yaw": 0.8740900316486346,
          "pitch": 0.09148599582357164,
          "rotation": 0,
          "target": "10-servei-forns-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-servei-forns-qumics",
      "name": "Servei forns químics",
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
          "target": "11-servei-forns"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-passads-metalitzaci",
      "name": "Passadís metalització",
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
        "yaw": -0.612646186414338,
        "pitch": 0.26281717402992477,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.35440869504783024,
          "pitch": 0.22026582204413003,
          "rotation": 0,
          "target": "14-medici-entrada"
        },
        {
          "yaw": -1.5507033758968554,
          "pitch": 0.1680512041033566,
          "rotation": 0,
          "target": "16-metaltizaci-ald"
        },
        {
          "yaw": 1.5912411630644074,
          "pitch": 0.481877356499016,
          "rotation": 0,
          "target": "2-passads-dutxa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-medici-entrada",
      "name": "Medició entrada",
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
        "yaw": -0.0017741791537204676,
        "pitch": 0.2939416766992622,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.1288908235961781,
          "pitch": 0.03504039272397108,
          "rotation": 0,
          "target": "15-medici-finestra"
        },
        {
          "yaw": -3.072411512712087,
          "pitch": 0.0016481649987074576,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5995872180313961,
          "pitch": 0.46873523404254414,
          "title": "Equip Sinton",
          "text": "Aquest equip permet mesurar el <b>temps de vida de portadors foto-generats en el semiconductor</b>.&nbsp;<div><br></div><div>S'empra de manera habitual en el silici cristal·lí i permet controlar el temps de vida dels portadors després de cada procés tecnològic.&nbsp;</div><div><br></div><div>És un equip bàsic per a la fabricació de cèl·lules solars de silici cristal·lí.</div>"
        },
        {
          "yaw": -1.0305391030562028,
          "pitch": 0.32758678223125237,
          "title": "Microscopi òptic",
          "text": "Un microscopi òptic és un instrument que utilitza&nbsp;<b>llum visible</b>&nbsp;per&nbsp;<b>ampliar imatges</b>&nbsp;d'objectes petits, permetent la&nbsp;<b>visualització detallada</b>&nbsp;de superfícies o estructures a una&nbsp;<b>escala microscòpica</b>."
        },
        {
          "yaw": -1.8273265543998267,
          "pitch": 0.364563305855091,
          "title": "Lupa",
          "text": "La lupa és una <b>lent de baixa potència</b> que es fa servir per <b>ampliar imatges</b> d'objectes petits.&nbsp;<div><br></div><div>Tot i que la seva amplificació és molt menor que la d'un microscopi òptic, la lupa és útil per <b>observacions ràpides</b> i per veure detallades estructures a mida petita, com ara imperfeccions a superfícies o components de circuïts.</div>"
        }
      ]
    },
    {
      "id": "15-medici-finestra",
      "name": "Medició finestra",
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
        "yaw": 0.1200,
        "pitch": 0.15769030441795095,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.0663499942545602,
          "pitch": 0.09790322566461818,
          "rotation": 0,
          "target": "14-medici-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0977327426488994,
          "pitch": 0.4662082429901062,
          "title": "Perfilòmetre",
          "text": "Equip utilitzat per <b>mesurar el perfil o les irregularitats de capes fines</b> (&lt;1 micròmetre), proporcionant informació detallada sobre la seva <b>topografia</b>.&nbsp;<div><br></div><div>Es basa en una punta metàl·lica que ressegueix la superfície de la capa fina. Molt útil per a mesurar el gruix de la capa fina.&nbsp;</div>"
        },
        {
          "yaw": -1.1794347810322972,
          "pitch": 0.3388533279377235,
          "title": "El·lipsòmetre",
          "text": "Equip utilitzat per <b>mesurar les propietats òptiques</b>, com l'índex de funcionament es basa en el canvi de la polarització de la llum quan es reflecteix sobre una superfície..."
        },
        {
          "yaw": -2.0491926723032847,
          "pitch": 0.35884126797396476,
          "title": "Equip de 4 puntes",
          "text": "Equip utilitzat per conèixer la resistència de quadre (<span id=\"docs-internal-guid-4c23d27f-7fff-9130-a3fb-e6b666f3af6f\"><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\">R</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline; white-space-collapse: preserve;\"><span style=\"font-size:0.6em;vertical-align:sub;\">sh</span></span></span>) d'un material.&nbsp;&nbsp;"
        },
        {
          "yaw": -2.315825663452669,
          "pitch": 0.25274662341384513,
          "title": "Microscopi òptic",
          "text": "Un microscopi òptic és un instrument que utilitza&nbsp;<b>llum visible</b>&nbsp;per&nbsp;<b>ampliar imatges</b>&nbsp;d'objectes petits, permetent la&nbsp;<b>visualització detallada</b>&nbsp;de superfícies o estructures a una&nbsp;<b>escala microscòpica</b>."
        }
      ]
    },
    {
      "id": "16-metaltizaci-ald",
      "name": "Metaltizació ALD",
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
          "target": "18-metaltizaci-evaporadora"
        },
        {
          "yaw": 2.672951471634528,
          "pitch": 0.1812705229479672,
          "rotation": 0,
          "target": "13-passads-metalitzaci"
        },
        {
          "yaw": -0.9962490817213734,
          "pitch": 0.16290072327591787,
          "rotation": 0,
          "target": "17-metaltizaci-pecvd"
        },
        {
          "yaw": 0.020115720614899857,
          "pitch": 0.12264801454729835,
          "rotation": 0,
          "target": "19-metaltizaci-sputtering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3083609573163013,
          "pitch": 0.49139314416317426,
          "title": "Atomic Layer Deposition (ALD)",
          "text": "És una tècnica de <b>dipòsit de pel·lícules fines</b> a partir de reaccions químiques controlades a escala atòmica.<div><br></div><div>A través d'aquest procés, s'aconsegueixen capes molt fines, uniformes, conformals i amb una alta precisió en el control del gruix, ideal per la <b>fabricació de dispositius semiconductors.&nbsp;</b></div><div><br></div><div>El procés es realitza a l'interior d'una <b>cambra d'alt buit</b> (10-6 mbar) i no es considera un procés CVD (<i>Chemical Vapour Deposition</i>).&nbsp;</div><div><br></div><div>En un procés CVD es produeixen reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</div>"
        }
      ]
    },
    {
      "id": "17-metaltizaci-pecvd",
      "name": "Metaltizació PECVD",
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
        "yaw": 0.09000107818859249,
        "pitch": 0.37178738921285337,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.0799556282923284,
          "pitch": 0.04343477105817506,
          "rotation": 0,
          "target": "16-metaltizaci-ald"
        },
        {
          "yaw": 2.9931913897962428,
          "pitch": -0.0025230126636692773,
          "rotation": 0,
          "target": "18-metaltizaci-evaporadora"
        },
        {
          "yaw": 1.9533741763965278,
          "pitch": 0.07004713430491805,
          "rotation": 0,
          "target": "19-metaltizaci-sputtering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6039388942580715,
          "pitch": 0.1993654317913638,
          "title": "Atomic Layer Deposition (ALD)",
          "text": "És una tècnica de&nbsp;<b>dipòsit de pel·lícules fines</b>&nbsp;a partir de reaccions químiques controlades a escala atòmica.<div><br></div><div>A través d'aquest procés, s'aconsegueixen capes molt fines, uniformes, conformals i amb una alta precisió en el control del gruix, ideal per la&nbsp;<b>fabricació de dispositius semiconductors.&nbsp;</b></div><div><br></div><div>El procés es realitza a l'interior d'una&nbsp;<b>cambra d'alt buit</b>&nbsp;(10-6 mbar) i no es considera un procés CVD (<i>Chemical Vapour Deposition</i>).&nbsp;</div><div><br></div><div>En un procés CVD es produeixen reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</div>"
        },
        {
          "yaw": -0.15169535687849312,
          "pitch": 0.23327906823029565,
          "title": "Plasma Enhanced Chemical Vapour Deposition (PECVD)",
          "text": "És un sistema utilitzat per <b>dipositar pel·lícules fines</b> a partir de <b>precursors gasosos</b> mitjançant un procés químic, procés activat per un <b>plasma </b>de radiofreqüència a 13.56 MHz.&nbsp;<div><br></div><div>És l'equip utilitzat per dipositar el silici amorf hidrogenat (a-Si:H).</div><div><br></div><div>El<b> a-Si:H</b> és el semiconductor que s'utilitza per fabricar els <b>transistors en capa fina</b> (<i>Thin-Film Transistor</i>, TFT) que acompanya a tots els píxels de les pantalles de mòbil i ordinadors.</div>"
        }
      ]
    },
    {
      "id": "18-metaltizaci-evaporadora",
      "name": "Metaltizació evaporadora",
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
        "yaw": -0.683515755222599,
        "pitch": 0.24894648844545486,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5353622299930354,
          "pitch": 0.11633146311965703,
          "rotation": 0,
          "target": "16-metaltizaci-ald"
        },
        {
          "yaw": -2.1420011522568014,
          "pitch": 0.08896195363850978,
          "rotation": 0,
          "target": "19-metaltizaci-sputtering"
        },
        {
          "yaw": 2.877799818071244,
          "pitch": 0.09773870138280927,
          "rotation": 0,
          "target": "17-metaltizaci-pecvd"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2377137518742334,
          "pitch": 0.2074072142583212,
          "title": "Atomic Layer Deposition (ALD)",
          "text": "És una tècnica de&nbsp;<b>dipòsit de pel·lícules fines</b>&nbsp;a partir de reaccions químiques controlades a escala atòmica.<div><br></div><div>A través d'aquest procés, s'aconsegueixen capes molt fines, uniformes, conformals i amb una alta precisió en el control del gruix, ideal per la&nbsp;<b>fabricació de dispositius semiconductors.&nbsp;</b></div><div><br></div><div>El procés es realitza a l'interior d'una&nbsp;<b>cambra d'alt buit</b>&nbsp;(10-6 mbar) i no es considera un procés CVD (<i>Chemical Vapour Deposition</i>).&nbsp;</div><div><br></div><div>En un procés CVD es produeixen reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</div>"
        },
        {
          "yaw": -0.6348256530737739,
          "pitch": -0.06984968449995499,
          "title": "Evaporadora tèrmica",
          "text": "Equip utilitzat per <b>dipositar materials a una superfície </b>mitjançant la tècnica<b> d'evaporació o sublimació tèrmica.&nbsp;</b><div><br></div><div>El procés es fa sota condicions d'alt buit (de l'ordre de 10-6 mbar) a l'interior d'una cambra de buit.&nbsp;</div><div><br></div><div>En aquest procés, el material s'escalfa passant <b>d'estat sòlid a líquid i de líquid a gas</b> (evaporació tèrmica), o bé <b>d'estat sòlid a gas</b> (sublimació) recobrint tota la cambra amb una capa fina.</div><div><br></div><div>És un procés de dipòsit <b>no conformal</b>. Es considera un procés PVD (<i>Phisical Vapour Deposition</i>) en el que no hi ha reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</div>"
        },
        {
          "yaw": -2.4541020910120217,
          "pitch": 0.18136492940918814,
          "title": "Polvorització catòdica (<i>Sputtering</i>)",
          "text": "Equip de dipòsit molt versàtil que permet el&nbsp;<b>dipòsit de capes fines conformals.</b>&nbsp;<div><br></div><div>Es basa en arrencament de material d'un&nbsp;<i>target&nbsp;</i>(<b>polvorització</b>) que es diposita sobre el substrat.&nbsp;</div><div><br></div><div>Aquest arrencament sol realitzar-se a partir del bombardeig d'ions (Argó).&nbsp;</div><div><br></div><div>Per facilitar el procés es sol utilitzar un imant que concentra el bombardeig d'ions sobre el&nbsp;<i>target&nbsp;</i>(polvorització catòdica, o&nbsp;<i>magnetron sputtering</i>).&nbsp;</div><div><br></div><div>És un procés PVD i és realitzat en condicions d'alt buit (10-6 mbar).</div>"
        }
      ]
    },
    {
      "id": "19-metaltizaci-sputtering",
      "name": "Metaltizació sputtering",
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
        "yaw": -0.5289542403451701,
        "pitch": 0.17771447005834062,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.30787109996600215,
          "pitch": 0.08142940624443007,
          "rotation": 0,
          "target": "20-servei-metaltizaci-"
        },
        {
          "yaw": -2.7773393259115977,
          "pitch": 0.17366466551019322,
          "rotation": 0,
          "target": "18-metaltizaci-evaporadora"
        },
        {
          "yaw": -2.151066629036441,
          "pitch": 0.020577291039067802,
          "rotation": 0,
          "target": "16-metaltizaci-ald"
        },
        {
          "yaw": -1.3576823840652814,
          "pitch": 0.03166871521887771,
          "rotation": 0,
          "target": "17-metaltizaci-pecvd"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9682038616897906,
          "pitch": -0.01553595675666486,
          "title": "Evaporadora tèrmica",
          "text": "Equip utilitzat per&nbsp;<b>dipositar materials a una superfície&nbsp;</b>mitjançant la tècnica<b>&nbsp;d'evaporació o sublimació tèrmica.&nbsp;</b><div><br></div><div>El procés es fa sota condicions d'alt buit (de l'ordre de 10-6 mbar) a l'interior d'una cambra de buit.&nbsp;</div><div><br></div><div>En aquest procés, el material s'escalfa passant&nbsp;<b>d'estat sòlid a líquid i de líquid a gas</b>&nbsp;(evaporació tèrmica), o bé&nbsp;<b>d'estat sòlid a gas</b>&nbsp;(sublimació) recobrint tota la cambra amb una capa fina.</div><div><br></div><div>És un procés de dipòsit&nbsp;<b>no conformal</b>. Es considera un procés PVD (<i>Phisical Vapour Deposition</i>) en el que no hi ha reaccions químiques entre els diferents compostos presents a la cambra abans de formar la capa fina.</div>"
        },
        {
          "yaw": -0.8485375181409367,
          "pitch": 0.16904487453635397,
          "title": "Polvorització catòdica (<i>Sputtering</i>)",
          "text": "Equip de dipòsit molt versàtil que permet el <b>dipòsit de capes fines conformals.</b>&nbsp;<div><br></div><div>Es basa en arrencament de material d'un <i>target </i>(<b>polvorització</b>) que es diposita sobre el substrat.&nbsp;</div><div><br></div><div>Aquest arrencament sol realitzar-se a partir del bombardeig d'ions (Argó).&nbsp;</div><div><br></div><div>Per facilitar el procés es sol utilitzar un imant que concentra el bombardeig d'ions sobre el <i>target </i>(polvorització catòdica, o <i>magnetron sputtering</i>).&nbsp;</div><div><br></div><div>És un procés PVD i és realitzat en condicions d'alt buit (10-6 mbar).</div>"
        }
      ]
    },
    {
      "id": "20-servei-metaltizaci-",
      "name": "Servei metaltizació ",
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
        "yaw": 1.699056095427193,
        "pitch": 0.1416371503445255,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.05843940164732686,
          "pitch": 0.11513895243215622,
          "rotation": 0,
          "target": "19-metaltizaci-sputtering"
        },
        {
          "yaw": 1.6223565708843228,
          "pitch": 0.18756261854115763,
          "rotation": 0,
          "target": "21-servei-metaltizaci-bombes"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-servei-metaltizaci-bombes",
      "name": "Servei metaltizació bombes",
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
        "yaw": 0.7551220437200001,
        "pitch": 0.24279300838955464,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.3447396092631454,
          "pitch": 0.15393463541253638,
          "rotation": 0,
          "target": "20-servei-metaltizaci-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SalaBlancaUPC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
