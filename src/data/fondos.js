const listaFondos = [
    {
      "Fondo": "Balanz Capital Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=551;1694"
    },
    {
      "Fondo": "Balanz Capital Ahorro - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=551;2225"
    },
    {
      "Fondo": "Balanz Capital Ahorro - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=551;2226"
    },
    {
      "Fondo": "Balanz Capital Ahorro - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=551;2227"
    },
    {
      "Fondo": "Balanz Capital Estrategia I USD - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1407;4101"
    },
    {
      "Fondo": "Balanz Capital Estrategia I USD - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1407;4102"
    },
    {
      "Fondo": "Balanz Capital Estrategia I USD - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1407;4103"
    },
    {
      "Fondo": "Balanz Capital Estrategia I USD - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1407;4104"
    },
    {
      "Fondo": "Balanz Capital Estrategia I USD - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1407;4105"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4639"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4640"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4641"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4642"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4643"
    },
    {
      "Fondo": "Balanz Capital Estrategia II USD - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1541;4647"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3355"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3356"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3357"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3358"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3359"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;3360"
    },
    {
      "Fondo": "Balanz Capital Money Market - Clase L Ley N\u00b0 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1213;4779"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;1006"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;1007"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;2343"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;2344"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;2345"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;2346"
    },
    {
      "Fondo": "Balanz Capital Renta Fija - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=499;2347"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;1593"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;1594"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;1595"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;1596"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;2164"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;2165"
    },
    {
      "Fondo": "Balanz Capital Renta Fija en Dolares - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=732;2166"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;1763"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;1764"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;1765"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;1766"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;2319"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;2320"
    },
    {
      "Fondo": "Balanz Capital Sudamericano - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=782;2321"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4664"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4665"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4666"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4667"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4668"
    },
    {
      "Fondo": "Balanz Crecimiento FCIA para el Fin. de la Infra. y la Econ. Real - Clase L Ley N\u00b027.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1547;4777"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4220"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4222"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4223"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4224"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4225"
    },
    {
      "Fondo": "Balanz Desarrollo FCI Ab para Finan Infra y Econ Real - Clase L Ley N\u00b027.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1438;4778"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3932"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3933"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3934"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3935"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3936"
    },
    {
      "Fondo": "Balanz Equity Selection - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1371;3937"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;1357"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;1358"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;1672"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;1673"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;2167"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;2168"
    },
    {
      "Fondo": "Balanz Excalibur Regisseur - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=657;2169"
    },
    {
      "Fondo": "Balanz Gestion - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2420"
    },
    {
      "Fondo": "Balanz Gestion - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2421"
    },
    {
      "Fondo": "Balanz Gestion - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2422"
    },
    {
      "Fondo": "Balanz Gestion - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2423"
    },
    {
      "Fondo": "Balanz Gestion - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2424"
    },
    {
      "Fondo": "Balanz Gestion - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=850;2425"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3410"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3411"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3412"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3413"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3414"
    },
    {
      "Fondo": "Balanz Infraestructura - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1233;3415"
    },
    {
      "Fondo": "Balanz Institucional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;1818"
    },
    {
      "Fondo": "Balanz Institucional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;1819"
    },
    {
      "Fondo": "Balanz Institucional - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;1820"
    },
    {
      "Fondo": "Balanz Institucional - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;1821"
    },
    {
      "Fondo": "Balanz Institucional - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;2228"
    },
    {
      "Fondo": "Balanz Institucional - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;2229"
    },
    {
      "Fondo": "Balanz Institucional - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=791;2230"
    },
    {
      "Fondo": "Balanz Opportunity - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2356"
    },
    {
      "Fondo": "Balanz Opportunity - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2357"
    },
    {
      "Fondo": "Balanz Opportunity - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2358"
    },
    {
      "Fondo": "Balanz Opportunity - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2359"
    },
    {
      "Fondo": "Balanz Opportunity - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2360"
    },
    {
      "Fondo": "Balanz Opportunity - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2361"
    },
    {
      "Fondo": "Balanz Opportunity - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=832;2362"
    },
    {
      "Fondo": "Balanz Performance I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3626"
    },
    {
      "Fondo": "Balanz Performance I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3627"
    },
    {
      "Fondo": "Balanz Performance I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3628"
    },
    {
      "Fondo": "Balanz Performance I - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3629"
    },
    {
      "Fondo": "Balanz Performance I - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3630"
    },
    {
      "Fondo": "Balanz Performance I - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1296;3631"
    },
    {
      "Fondo": "Balanz Performance II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3671"
    },
    {
      "Fondo": "Balanz Performance II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3672"
    },
    {
      "Fondo": "Balanz Performance II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3673"
    },
    {
      "Fondo": "Balanz Performance II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3674"
    },
    {
      "Fondo": "Balanz Performance II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3675"
    },
    {
      "Fondo": "Balanz Performance II - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1297;3676"
    },
    {
      "Fondo": "Balanz Performance III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3749"
    },
    {
      "Fondo": "Balanz Performance III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3750"
    },
    {
      "Fondo": "Balanz Performance III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3751"
    },
    {
      "Fondo": "Balanz Performance III - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3752"
    },
    {
      "Fondo": "Balanz Performance III - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3753"
    },
    {
      "Fondo": "Balanz Performance III - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1317;3754"
    },
    {
      "Fondo": "Balanz Performance IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1385;3985"
    },
    {
      "Fondo": "Balanz Performance IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1385;3986"
    },
    {
      "Fondo": "Balanz Performance IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1385;3987"
    },
    {
      "Fondo": "Balanz Performance IV - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1385;3988"
    },
    {
      "Fondo": "Balanz Performance IV - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1385;3989"
    },
    {
      "Fondo": "Balanz Performance V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1390;4006"
    },
    {
      "Fondo": "Balanz Performance V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1390;4007"
    },
    {
      "Fondo": "Balanz Performance V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1390;4008"
    },
    {
      "Fondo": "Balanz Performance V - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1390;4009"
    },
    {
      "Fondo": "Balanz Performance V - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1390;4010"
    },
    {
      "Fondo": "Balanz Performance VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4528"
    },
    {
      "Fondo": "Balanz Performance VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4529"
    },
    {
      "Fondo": "Balanz Performance VI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4530"
    },
    {
      "Fondo": "Balanz Performance VI - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4531"
    },
    {
      "Fondo": "Balanz Performance VI - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4533"
    },
    {
      "Fondo": "Balanz Performance VI - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1515;4534"
    },
    {
      "Fondo": "Balanz Performance XI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3969"
    },
    {
      "Fondo": "Balanz Performance XI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3970"
    },
    {
      "Fondo": "Balanz Performance XI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3971"
    },
    {
      "Fondo": "Balanz Performance XI - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3972"
    },
    {
      "Fondo": "Balanz Performance XI - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3973"
    },
    {
      "Fondo": "Balanz Performance XI - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1382;3974"
    },
    {
      "Fondo": "Balanz Performance XII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1474;4360"
    },
    {
      "Fondo": "Balanz Performance XII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1474;4361"
    },
    {
      "Fondo": "Balanz Performance XII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1474;4362"
    },
    {
      "Fondo": "Balanz Performance XII - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1474;4363S"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;1390"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;1391"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;2315"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;2328"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;2316"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;2317"
    },
    {
      "Fondo": "Balanz Renta Fija Estrategica - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=666;2318"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;1004"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;1005"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;1780"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;1781"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;2322"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;2323"
    },
    {
      "Fondo": "Balanz Retorno Total - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=498;2324"
    },
    {
      "Fondo": "BAVSA Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1479;4376"
    },
    {
      "Fondo": "BAVSA Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1479;4377"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4378"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4379"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4380"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4381"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4382"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4383"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4384"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4385"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4386"
    },
    {
      "Fondo": "BAVSA Cobertura - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1480;4388"
    },
    {
      "Fondo": "BAVSA FCIA Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1481;4389"
    },
    {
      "Fondo": "BAVSA FCIA Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1481;4390"
    },
    {
      "Fondo": "BAVSA FCIA Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1481;4391"
    },
    {
      "Fondo": "BAVSA FCIA Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1481;4392"
    },
    {
      "Fondo": "BAVSA Global I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4472"
    },
    {
      "Fondo": "BAVSA Global I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4473"
    },
    {
      "Fondo": "BAVSA Global I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4474"
    },
    {
      "Fondo": "BAVSA Global I - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4475"
    },
    {
      "Fondo": "BAVSA Global I - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4476"
    },
    {
      "Fondo": "BAVSA Global I - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4477"
    },
    {
      "Fondo": "BAVSA Global I - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4478"
    },
    {
      "Fondo": "BAVSA Global I - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4479"
    },
    {
      "Fondo": "BAVSA Global I - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4480"
    },
    {
      "Fondo": "BAVSA Global I - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1498;4481"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4172"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4173"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4174"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4175"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase W,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4176"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase X,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4177"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase Y,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4178"
    },
    {
      "Fondo": "BAVSA Pesos Plus - Clase Z,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1427;4179"
    },
    {
      "Fondo": "BAVSA Renta D\u00f3lares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1535;4618"
    },
    {
      "Fondo": "BAVSA Renta D\u00f3lares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1535;4619"
    },
    {
      "Fondo": "BAVSA Renta D\u00f3lares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1535;4620"
    },
    {
      "Fondo": "BM Active Renta Fija Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1236;3428"
    },
    {
      "Fondo": "BM Active Renta Fija Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1236;3429"
    },
    {
      "Fondo": "BM Smart Corto Plazo - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1503;4497"
    },
    {
      "Fondo": "BM Smart Corto Plazo - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1503;4498"
    },
    {
      "Fondo": "BM Smart Money Market - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1239;3442"
    },
    {
      "Fondo": "BM Smart Money Market - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1239;3443"
    },
    {
      "Fondo": "BPF Renta Fija Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1202;3292"
    },
    {
      "Fondo": "BPF Renta Fija Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1202;3293"
    },
    {
      "Fondo": "BPF Renta Fija Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1202;3294"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3504"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3505"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3506"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3507"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3508"
    },
    {
      "Fondo": "BPF Renta Fija Pesos - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1262;3509"
    },
    {
      "Fondo": "Bull Market Acciones Argentinas - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=847;2408"
    },
    {
      "Fondo": "Bull Market Acciones Argentinas - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=847;2409"
    },
    {
      "Fondo": "Bull Market Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=848;2410"
    },
    {
      "Fondo": "Bull Market Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=848;2411"
    },
    {
      "Fondo": "Chaco Abierto Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=581;1178"
    },
    {
      "Fondo": "Chaco Abierto Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=581;1179"
    },
    {
      "Fondo": "Chaco FCI Abierto Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=626;1262"
    },
    {
      "Fondo": "Chaco FCI Abierto Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=626;1263"
    },
    {
      "Fondo": "Chaco FCI Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=627;1264"
    },
    {
      "Fondo": "Chaco FCI Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=627;1265"
    },
    {
      "Fondo": "Chaco FCI Money Market - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1465;4332"
    },
    {
      "Fondo": "Chaco FCI Money Market - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1465;4333"
    },
    {
      "Fondo": "Chaco Renta Fija I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=580;1176"
    },
    {
      "Fondo": "Chaco Renta Fija I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=580;1177"
    },
    {
      "Fondo": "Champaqu\u00ed Ahorro Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1219;3374"
    },
    {
      "Fondo": "Champaqu\u00ed Ahorro Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1219;3375"
    },
    {
      "Fondo": "Champaqu\u00ed Ahorro Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1219;3376"
    },
    {
      "Fondo": "Champaqu\u00ed Cobertura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1260;3497"
    },
    {
      "Fondo": "Champaqu\u00ed Cobertura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1260;3498"
    },
    {
      "Fondo": "Champaqu\u00ed Cobertura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1260;3499"
    },
    {
      "Fondo": "Champaqu\u00ed Cobertura - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1260;3500"
    },
    {
      "Fondo": "Champaqu\u00ed Estrat\u00e9gico - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1308;3717"
    },
    {
      "Fondo": "Champaqu\u00ed Estrat\u00e9gico - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1308;3718"
    },
    {
      "Fondo": "Champaqu\u00ed Estrat\u00e9gico - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1308;3719"
    },
    {
      "Fondo": "Champaqu\u00ed Estrat\u00e9gico - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1308;3720"
    },
    {
      "Fondo": "Champaqu\u00ed FCI Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1257;3488"
    },
    {
      "Fondo": "Champaqu\u00ed FCI Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1257;3489"
    },
    {
      "Fondo": "Champaqu\u00ed FCI Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1257;3490"
    },
    {
      "Fondo": "Champaqu\u00ed FCI Abierto Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1257;3491"
    },
    {
      "Fondo": "Champaqu\u00ed Fondo Inmediato - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1209;3345"
    },
    {
      "Fondo": "Champaqu\u00ed Fondo Inmediato - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1209;3346"
    },
    {
      "Fondo": "Champaqu\u00ed Fondo Inmediato - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1209;3347"
    },
    {
      "Fondo": "Champaqui Fondo Inmediato Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1336;3820"
    },
    {
      "Fondo": "Champaqui Fondo Inmediato Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1336;3821"
    },
    {
      "Fondo": "Champaqui Fondo Inmediato Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1336;3822"
    },
    {
      "Fondo": "Champaqui Fondo Inmediato Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1336;3823"
    },
    {
      "Fondo": "Champaqui Renta D\u00f3lar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1526;4581"
    },
    {
      "Fondo": "Champaqui Renta D\u00f3lar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1526;4582"
    },
    {
      "Fondo": "Champaqui Renta D\u00f3lar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1526;4583"
    },
    {
      "Fondo": "Champaqui Renta D\u00f3lar - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1526;4584"
    },
    {
      "Fondo": "Champaqu\u00ed Renta Futura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1426;4164"
    },
    {
      "Fondo": "Champaqu\u00ed Renta Futura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1426;4165"
    },
    {
      "Fondo": "Champaqu\u00ed Renta Futura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1426;4166"
    },
    {
      "Fondo": "Champaqu\u00ed Renta Futura - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1426;4167"
    },
    {
      "Fondo": "Champaqui Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1544;4654"
    },
    {
      "Fondo": "Champaqui Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1544;4655"
    },
    {
      "Fondo": "Champaqui Renta Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1544;4656"
    },
    {
      "Fondo": "Champaqui Renta Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1544;4657"
    },
    {
      "Fondo": "Champaqui Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1492;4449"
    },
    {
      "Fondo": "Champaqui Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1492;4450"
    },
    {
      "Fondo": "Champaqui Renta Variable - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1492;4451"
    },
    {
      "Fondo": "Champaqui Renta Variable - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1492;4452"
    },
    {
      "Fondo": "Cima Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=594;1203"
    },
    {
      "Fondo": "Cima Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=594;1204"
    },
    {
      "Fondo": "Cima Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1193;3233"
    },
    {
      "Fondo": "Cima Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1193;3234"
    },
    {
      "Fondo": "Cima Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1193;3235"
    },
    {
      "Fondo": "Cima Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1197;3269"
    },
    {
      "Fondo": "Cima Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1197;3270"
    },
    {
      "Fondo": "Cima Renta Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1197;3271"
    },
    {
      "Fondo": "Cima Renta Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1197;3272"
    },
    {
      "Fondo": "Cima Renta Dolares Corto Plazo - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=755;1660"
    },
    {
      "Fondo": "Cima Renta Dolares Corto Plazo - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=755;2057"
    },
    {
      "Fondo": "Cima Renta Fija Argentina Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=556;1121"
    },
    {
      "Fondo": "Cima Renta Fija Argentina Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=556;1122"
    },
    {
      "Fondo": "Cima Renta Fija Argentina Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=556;1123"
    },
    {
      "Fondo": "Cima Renta Fija Nacional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=589;1191"
    },
    {
      "Fondo": "Cima Renta Fija Nacional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=589;1192"
    },
    {
      "Fondo": "Cima Renta Fija Nacional - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=589;3306"
    },
    {
      "Fondo": "Cima Renta Fija Nacional - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=589;4048"
    },
    {
      "Fondo": "Cima Renta Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=640;1298"
    },
    {
      "Fondo": "Cima Renta Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=640;1299"
    },
    {
      "Fondo": "Cima Renta Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=640;3300"
    },
    {
      "Fondo": "Cima Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=793;1853"
    },
    {
      "Fondo": "Cima Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=793;1854"
    },
    {
      "Fondo": "Cima Renta Variable - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=793;1855"
    },
    {
      "Fondo": "Cima Renta Variable - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=793;2677"
    },
    {
      "Fondo": "CMA Abierto Pymes,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=870;2506"
    },
    {
      "Fondo": "CMA Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=838;2383"
    },
    {
      "Fondo": "CMA Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=838;2384"
    },
    {
      "Fondo": "CMA Acciones - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=838;2385"
    },
    {
      "Fondo": "CMA Acciones - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=838;2386"
    },
    {
      "Fondo": "CMA Performance - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=653;1344"
    },
    {
      "Fondo": "CMA Performance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=653;1345"
    },
    {
      "Fondo": "CMA Proteccion - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=330;370"
    },
    {
      "Fondo": "CMA Proteccion - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=330;714"
    },
    {
      "Fondo": "CMA Renta Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=723;1566"
    },
    {
      "Fondo": "CMA Renta Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=723;1567"
    },
    {
      "Fondo": "CMA Renta Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=723;1568"
    },
    {
      "Fondo": "Cocos Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1469;4337"
    },
    {
      "Fondo": "Cocos Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1469;4338"
    },
    {
      "Fondo": "Cocos Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1469;4339"
    },
    {
      "Fondo": "Cocos Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1469;4340"
    },
    {
      "Fondo": "Cocos Ahorro Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1491;4447"
    },
    {
      "Fondo": "Cocos Ahorro Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1491;4448"
    },
    {
      "Fondo": "Cocos Daruma Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=876;2517"
    },
    {
      "Fondo": "Cocos Daruma Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=876;2518"
    },
    {
      "Fondo": "Cocos Daruma Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=876;2519"
    },
    {
      "Fondo": "Cocos Daruma Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=876;2520"
    },
    {
      "Fondo": "Cohen Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=461;887"
    },
    {
      "Fondo": "Cohen Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=461;888"
    },
    {
      "Fondo": "Cohen Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=461;2564"
    },
    {
      "Fondo": "Cohen Disp. Transitorias Ley 27260 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=713;1534"
    },
    {
      "Fondo": "Cohen Disp. Transitorias Ley 27260 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=713;1535"
    },
    {
      "Fondo": "Cohen Disp. Transitorias Ley 27260 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=713;1536"
    },
    {
      "Fondo": "Cohen Disp. Transitorias Ley 27260 - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=713;1537"
    },
    {
      "Fondo": "Cohen Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=447;854"
    },
    {
      "Fondo": "Cohen Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=447;855"
    },
    {
      "Fondo": "Cohen Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=447;1043"
    },
    {
      "Fondo": "Cohen Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=447;1044"
    },
    {
      "Fondo": "Cohen Renta Fija Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=714;1538"
    },
    {
      "Fondo": "Cohen Renta Fija Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=714;1539"
    },
    {
      "Fondo": "Cohen Renta Fija Argentina - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=714;1540"
    },
    {
      "Fondo": "Cohen Renta Fija Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=803;2088"
    },
    {
      "Fondo": "Cohen Renta Fija Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=803;2089"
    },
    {
      "Fondo": "Cohen Renta Fija Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=803;2090"
    },
    {
      "Fondo": "Cohen Renta Fija Dolares - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=803;2091"
    },
    {
      "Fondo": "Cohen Renta Fija Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=475;939"
    },
    {
      "Fondo": "Cohen Renta Fija Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=475;940"
    },
    {
      "Fondo": "Cohen Renta Fija Plus Titulos RP - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1174;3172"
    },
    {
      "Fondo": "Compass Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;795"
    },
    {
      "Fondo": "Compass Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;796"
    },
    {
      "Fondo": "Compass Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;798"
    },
    {
      "Fondo": "Compass Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;1874"
    },
    {
      "Fondo": "Compass Ahorro - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;1875"
    },
    {
      "Fondo": "Compass Ahorro - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;1876"
    },
    {
      "Fondo": "Compass Ahorro - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;4745"
    },
    {
      "Fondo": "Compass Ahorro - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=428;4746"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2109"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2110"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2111"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2112"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2113"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;2114"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;4743"
    },
    {
      "Fondo": "Compass Ahorro en Dolares - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=808;4744"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;671"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;672"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;673"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;1880"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;1881"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;1882"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;4761"
    },
    {
      "Fondo": "Compass Argentina Abierto PyMEs - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=377;4762"
    },
    {
      "Fondo": "Compass Best Ideas - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2103"
    },
    {
      "Fondo": "Compass Best Ideas - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2104"
    },
    {
      "Fondo": "Compass Best Ideas - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2105"
    },
    {
      "Fondo": "Compass Best Ideas - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2106"
    },
    {
      "Fondo": "Compass Best Ideas - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2107"
    },
    {
      "Fondo": "Compass Best Ideas - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;2108"
    },
    {
      "Fondo": "Compass Best Ideas - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;4747"
    },
    {
      "Fondo": "Compass Best Ideas - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=807;4748"
    },
    {
      "Fondo": "Compass Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;341"
    },
    {
      "Fondo": "Compass Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;342"
    },
    {
      "Fondo": "Compass Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;343"
    },
    {
      "Fondo": "Compass Crecimiento - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;1883"
    },
    {
      "Fondo": "Compass Crecimiento - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;1884"
    },
    {
      "Fondo": "Compass Crecimiento - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;1885"
    },
    {
      "Fondo": "Compass Crecimiento - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;4751"
    },
    {
      "Fondo": "Compass Crecimiento - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=318;4752"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;788"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;789"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;790"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;1871"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;1872"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;1873"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;4749"
    },
    {
      "Fondo": "Compass Crecimiento II - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=425;4750"
    },
    {
      "Fondo": "Compass Liquidez - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1212;3352"
    },
    {
      "Fondo": "Compass Liquidez - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1212;3353"
    },
    {
      "Fondo": "Compass Liquidez - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1212;3354"
    },
    {
      "Fondo": "Compass Liquidez - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1212;4757"
    },
    {
      "Fondo": "Compass Liquidez - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1212;4758"
    },
    {
      "Fondo": "Compass Opportunity - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;338"
    },
    {
      "Fondo": "Compass Opportunity - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;339"
    },
    {
      "Fondo": "Compass Opportunity - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;340"
    },
    {
      "Fondo": "Compass Opportunity - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;1865"
    },
    {
      "Fondo": "Compass Opportunity - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;1866"
    },
    {
      "Fondo": "Compass Opportunity - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;1867"
    },
    {
      "Fondo": "Compass Opportunity - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;4759"
    },
    {
      "Fondo": "Compass Opportunity - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=317;4760"
    },
    {
      "Fondo": "Compass Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;336"
    },
    {
      "Fondo": "Compass Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;274"
    },
    {
      "Fondo": "Compass Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;337"
    },
    {
      "Fondo": "Compass Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;1859"
    },
    {
      "Fondo": "Compass Renta Fija - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;1860"
    },
    {
      "Fondo": "Compass Renta Fija - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;1861"
    },
    {
      "Fondo": "Compass Renta Fija - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;4737"
    },
    {
      "Fondo": "Compass Renta Fija - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=274;4738"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;811"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;812"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;813"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;1896"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;1897"
    },
    {
      "Fondo": "Compass Renta Fija II - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=432;1899"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;799"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;800"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;801"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;1877"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;1878"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;1879"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;4739"
    },
    {
      "Fondo": "Compass Renta Fija III - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=429;4740"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1383"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1384"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1385"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1900"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1901"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;1902"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase H  Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;4741"
    },
    {
      "Fondo": "Compass Renta Fija IV - Clase I  Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=664;4742"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;955"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;956"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;1815"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;1889"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;1890"
    },
    {
      "Fondo": "Compass Renta Mixta - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=481;1892"
    },
    {
      "Fondo": "Compass Renta Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;953"
    },
    {
      "Fondo": "Compass Renta Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;954"
    },
    {
      "Fondo": "Compass Renta Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;1816"
    },
    {
      "Fondo": "Compass Renta Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;1886"
    },
    {
      "Fondo": "Compass Renta Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;1887"
    },
    {
      "Fondo": "Compass Renta Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=480;1888"
    },
    {
      "Fondo": "Compass Renta Plus II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1203;3311"
    },
    {
      "Fondo": "Compass Renta Plus II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1203;3312"
    },
    {
      "Fondo": "Compass Renta Plus II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1203;3313"
    },
    {
      "Fondo": "Compass Small Cap II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;791"
    },
    {
      "Fondo": "Compass Small Cap II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;792"
    },
    {
      "Fondo": "Compass Small Cap II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;1814"
    },
    {
      "Fondo": "Compass Small Cap II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;1868"
    },
    {
      "Fondo": "Compass Small Cap II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;1869"
    },
    {
      "Fondo": "Compass Small Cap II - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=426;1870"
    },
    {
      "Fondo": "Consultatio Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=553;1117"
    },
    {
      "Fondo": "Consultatio Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=553;1118"
    },
    {
      "Fondo": "Consultatio Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=553;1792"
    },
    {
      "Fondo": "Consultatio Acciones Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=216;1208"
    },
    {
      "Fondo": "Consultatio Acciones Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=216;216"
    },
    {
      "Fondo": "Consultatio Acciones Argentina - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=216;1634"
    },
    {
      "Fondo": "Consultatio Ahorro Plus Argentina F.C.I. - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=493;993"
    },
    {
      "Fondo": "Consultatio Ahorro Plus Argentina F.C.I. - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=493;994"
    },
    {
      "Fondo": "Consultatio Ahorro Plus Argentina F.C.I. - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=493;1035"
    },
    {
      "Fondo": "Consultatio Ahorro Plus Argentina F.C.I. RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1061;2975"
    },
    {
      "Fondo": "Consultatio Arbitraje - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=763;1690"
    },
    {
      "Fondo": "Consultatio Arbitraje - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=763;1691"
    },
    {
      "Fondo": "Consultatio Arbitraje - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=763;1692"
    },
    {
      "Fondo": "Consultatio Arbitraje RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1068;2983"
    },
    {
      "Fondo": "Consultatio Arbitraje RP D.596 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1068;3062"
    },
    {
      "Fondo": "Consultatio Balance Fund - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=89;1207"
    },
    {
      "Fondo": "Consultatio Balance Fund - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=89;89"
    },
    {
      "Fondo": "Consultatio Balance Fund RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1065;2980"
    },
    {
      "Fondo": "Consultatio Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=585;1183"
    },
    {
      "Fondo": "Consultatio Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=585;1184"
    },
    {
      "Fondo": "Consultatio Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=585;1185"
    },
    {
      "Fondo": "Consultatio Deuda Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=281;1073"
    },
    {
      "Fondo": "Consultatio Deuda Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=281;281"
    },
    {
      "Fondo": "Consultatio Deuda Argentina - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=281;1075"
    },
    {
      "Fondo": "Consultatio Deuda Argentina RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1066;2981"
    },
    {
      "Fondo": "Consultatio Estrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=648;1335"
    },
    {
      "Fondo": "Consultatio Estrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=648;1336"
    },
    {
      "Fondo": "Consultatio Estrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=648;1337"
    },
    {
      "Fondo": "Consultatio Fondo de Dinero - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1281;3568"
    },
    {
      "Fondo": "Consultatio Fondo de Dinero - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1281;3569"
    },
    {
      "Fondo": "Consultatio Fondo de Dinero - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1281;3570"
    },
    {
      "Fondo": "Consultatio Income Fund - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=215;1600"
    },
    {
      "Fondo": "Consultatio Income Fund - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=215;215"
    },
    {
      "Fondo": "Consultatio Income Fund RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1063;2977"
    },
    {
      "Fondo": "Consultatio Inmobiliario FCIC Ley 27260 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1192;3231"
    },
    {
      "Fondo": "Consultatio Inmobiliario FCIC Ley 27260 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1192;3232"
    },
    {
      "Fondo": "Consultatio Liquidez Ley 27260 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=710;1520"
    },
    {
      "Fondo": "Consultatio Liquidez Ley 27260 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=710;1521"
    },
    {
      "Fondo": "Consultatio Liquidez Ley 27260 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=710;1522"
    },
    {
      "Fondo": "Consultatio Liquidez Ley 27260 - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=710;1523"
    },
    {
      "Fondo": "Consultatio Multiestrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=769;1729"
    },
    {
      "Fondo": "Consultatio Multiestrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=769;1730"
    },
    {
      "Fondo": "Consultatio Multiestrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=769;1731"
    },
    {
      "Fondo": "Consultatio Multimercado I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1282;3571"
    },
    {
      "Fondo": "Consultatio Multimercado I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1282;3572"
    },
    {
      "Fondo": "Consultatio Multimercado I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1282;3573"
    },
    {
      "Fondo": "Consultatio Multimercado II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1283;3574"
    },
    {
      "Fondo": "Consultatio Multimercado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1283;3575"
    },
    {
      "Fondo": "Consultatio Multimercado II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1283;3576"
    },
    {
      "Fondo": "Consultatio Multimercado III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1279;3561"
    },
    {
      "Fondo": "Consultatio Multimercado III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1279;3562"
    },
    {
      "Fondo": "Consultatio Multimercado III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1279;3563"
    },
    {
      "Fondo": "Consultatio Multimercado IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1284;3577"
    },
    {
      "Fondo": "Consultatio Multimercado IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1284;3578"
    },
    {
      "Fondo": "Consultatio Multimercado IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1284;3579"
    },
    {
      "Fondo": "Consultatio Multimercado V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1285;3580"
    },
    {
      "Fondo": "Consultatio Multimercado V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1285;3581"
    },
    {
      "Fondo": "Consultatio Multimercado V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1285;3582"
    },
    {
      "Fondo": "Consultatio Renta Balanceada - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=539;1089"
    },
    {
      "Fondo": "Consultatio Renta Balanceada - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=539;1090"
    },
    {
      "Fondo": "Consultatio Renta Balanceada - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=539;1091"
    },
    {
      "Fondo": "Consultatio Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=824;2306"
    },
    {
      "Fondo": "Consultatio Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=824;2307"
    },
    {
      "Fondo": "Consultatio Renta Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=824;2308"
    },
    {
      "Fondo": "Consultatio Renta Fija Argentina F.C.I. - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=495;998"
    },
    {
      "Fondo": "Consultatio Renta Fija Argentina F.C.I. - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=495;999"
    },
    {
      "Fondo": "Consultatio Renta Fija Argentina F.C.I. RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1067;2982"
    },
    {
      "Fondo": "Consultatio Renta Local - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=538;1086"
    },
    {
      "Fondo": "Consultatio Renta Local - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=538;1087"
    },
    {
      "Fondo": "Consultatio Renta Local - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=538;1088"
    },
    {
      "Fondo": "Consultatio Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=517;1045"
    },
    {
      "Fondo": "Consultatio Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=517;1046"
    },
    {
      "Fondo": "Consultatio Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=517;1197"
    },
    {
      "Fondo": "Consultatio Renta Nacional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=532;1076"
    },
    {
      "Fondo": "Consultatio Renta Nacional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=532;1077"
    },
    {
      "Fondo": "Consultatio Renta Nacional - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=532;1078"
    },
    {
      "Fondo": "Consultatio Renta Nacional RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1069;2984"
    },
    {
      "Fondo": "Consultatio Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=514;1037"
    },
    {
      "Fondo": "Consultatio Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=514;1038"
    },
    {
      "Fondo": "Consultatio Renta Variable - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=514;3266"
    },
    {
      "Fondo": "Consultatio Renta y Capital - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=643;1305"
    },
    {
      "Fondo": "Consultatio Renta y Capital - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=643;1306"
    },
    {
      "Fondo": "Consultatio Renta y Capital - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=643;1307"
    },
    {
      "Fondo": "Consultatio Retorno Absoluto - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=662;1367"
    },
    {
      "Fondo": "Consultatio Retorno Absoluto - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=662;1368"
    },
    {
      "Fondo": "Consultatio Retorno Absoluto - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=662;1369"
    },
    {
      "Fondo": "Consultatio Tactico - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=756;1663"
    },
    {
      "Fondo": "Consultatio Tactico - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=756;1664"
    },
    {
      "Fondo": "Consultatio Tactico - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=756;1665"
    },
    {
      "Fondo": "CYC Dolares Renta Fija - Clase U,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1246;3461"
    },
    {
      "Fondo": "CYC Liquidez,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1316;3748"
    },
    {
      "Fondo": "CYC Pesos Renta Fija - Clase U,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1247;3462"
    },
    {
      "Fondo": "CYC Renta Fija en Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=813;2207"
    },
    {
      "Fondo": "CYC Renta Fija en Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=813;2208"
    },
    {
      "Fondo": "CYC Renta Fija en Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=813;2209"
    },
    {
      "Fondo": "CYC Renta Fija en Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=813;2210"
    },
    {
      "Fondo": "CYC Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=815;2220"
    },
    {
      "Fondo": "CYC Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=815;2221"
    },
    {
      "Fondo": "CYC Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=815;2222"
    },
    {
      "Fondo": "CYC Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=815;2224"
    },
    {
      "Fondo": "Delta Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;661"
    },
    {
      "Fondo": "Delta Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;662"
    },
    {
      "Fondo": "Delta Acciones - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;1934"
    },
    {
      "Fondo": "Delta Acciones - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;1917"
    },
    {
      "Fondo": "Delta Acciones - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;1916"
    },
    {
      "Fondo": "Delta Acciones - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;3223"
    },
    {
      "Fondo": "Delta Acciones - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;4718"
    },
    {
      "Fondo": "Delta Acciones - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=370;4719"
    },
    {
      "Fondo": "Delta Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=371;663"
    },
    {
      "Fondo": "Delta Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=371;664"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;931"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;932"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;1805"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;2388"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;2387"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;4724"
    },
    {
      "Fondo": "Delta Ahorro Plus - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=473;4725"
    },
    {
      "Fondo": "Delta Crecimiento Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=572;1160"
    },
    {
      "Fondo": "Delta Crecimiento Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=572;1161"
    },
    {
      "Fondo": "Delta Empresas Argentinas Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=452;866"
    },
    {
      "Fondo": "Delta Empresas Argentinas Pymes - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=452;2574"
    },
    {
      "Fondo": "Delta Federal I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=469;921"
    },
    {
      "Fondo": "Delta Federal I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=469;922"
    },
    {
      "Fondo": "Delta Federal I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=469;923"
    },
    {
      "Fondo": "Delta Federal I - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=469;1919"
    },
    {
      "Fondo": "Delta Federal I - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=469;1918"
    },
    {
      "Fondo": "Delta Gestion Abierto Pyme I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1318;3755"
    },
    {
      "Fondo": "Delta Gestion Abierto Pyme I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1318;3756"
    },
    {
      "Fondo": "Delta Gestion Abierto Pyme I - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1318;3757"
    },
    {
      "Fondo": "Delta Gestion I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=492;1806"
    },
    {
      "Fondo": "Delta Gestion I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=492;992"
    },
    {
      "Fondo": "Delta Gestion I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=492;1807"
    },
    {
      "Fondo": "Delta Gestion II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=491;1809"
    },
    {
      "Fondo": "Delta Gestion II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=491;991"
    },
    {
      "Fondo": "Delta Gestion II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=491;1810"
    },
    {
      "Fondo": "Delta Gestion III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=603;1223"
    },
    {
      "Fondo": "Delta Gestion IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=418;769"
    },
    {
      "Fondo": "Delta Gestion IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=418;770"
    },
    {
      "Fondo": "Delta Gestion IV - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=418;3221"
    },
    {
      "Fondo": "Delta Gestion IV - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=418;3230"
    },
    {
      "Fondo": "Delta Gestion IX - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;2645"
    },
    {
      "Fondo": "Delta Gestion IX - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;2646"
    },
    {
      "Fondo": "Delta Gestion IX - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;2647"
    },
    {
      "Fondo": "Delta Gestion IX - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;2648"
    },
    {
      "Fondo": "Delta Gestion IX - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;3168"
    },
    {
      "Fondo": "Delta Gestion IX - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=894;2649"
    },
    {
      "Fondo": "Delta Gestion V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=670;1811"
    },
    {
      "Fondo": "Delta Gestion V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=670;1402"
    },
    {
      "Fondo": "Delta Gestion VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=678;1812"
    },
    {
      "Fondo": "Delta Gestion VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=678;1424"
    },
    {
      "Fondo": "Delta Gestion VI - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=678;2464"
    },
    {
      "Fondo": "Delta Gestion VI - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=678;4720"
    },
    {
      "Fondo": "Delta Gestion VI - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=678;4721"
    },
    {
      "Fondo": "Delta Gestion VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=757;1666"
    },
    {
      "Fondo": "Delta Gestion VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=757;1667"
    },
    {
      "Fondo": "Delta Gestion VII - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=757;1813"
    },
    {
      "Fondo": "Delta Gestion X - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1215;3366"
    },
    {
      "Fondo": "Delta Gestion XI - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1275;3551"
    },
    {
      "Fondo": "Delta Gestion XII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1373;3939"
    },
    {
      "Fondo": "Delta Gestion XII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1373;3940"
    },
    {
      "Fondo": "Delta Gestion XII - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1373;3941"
    },
    {
      "Fondo": "Delta Internacional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;773"
    },
    {
      "Fondo": "Delta Internacional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;774"
    },
    {
      "Fondo": "Delta Internacional - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;1931"
    },
    {
      "Fondo": "Delta Internacional - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;1930"
    },
    {
      "Fondo": "Delta Internacional - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;3204"
    },
    {
      "Fondo": "Delta Internacional - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;4728"
    },
    {
      "Fondo": "Delta Internacional - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=420;4729"
    },
    {
      "Fondo": "Delta Latinoamerica - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=375;668"
    },
    {
      "Fondo": "Delta Latinoamerica - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=375;669"
    },
    {
      "Fondo": "Delta Moneda - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=408;737"
    },
    {
      "Fondo": "Delta Moneda - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=408;738"
    },
    {
      "Fondo": "Delta Moneda - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=408;3583"
    },
    {
      "Fondo": "Delta Moneda - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=408;1921"
    },
    {
      "Fondo": "Delta Moneda - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=408;1920"
    },
    {
      "Fondo": "Delta Multimercado I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;937"
    },
    {
      "Fondo": "Delta Multimercado I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;915"
    },
    {
      "Fondo": "Delta Multimercado I - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;1923"
    },
    {
      "Fondo": "Delta Multimercado I - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;1922"
    },
    {
      "Fondo": "Delta Multimercado I - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;4726"
    },
    {
      "Fondo": "Delta Multimercado I - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=466;4727"
    },
    {
      "Fondo": "Delta Multimercado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1264;3514"
    },
    {
      "Fondo": "Delta Multimercado II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1264;3515"
    },
    {
      "Fondo": "Delta Patrimonio I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=858;2458"
    },
    {
      "Fondo": "Delta Patrimonio I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=858;2459"
    },
    {
      "Fondo": "Delta Patrimonio I - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=858;2463"
    },
    {
      "Fondo": "Delta Patrimonio I - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=858;2460"
    },
    {
      "Fondo": "Delta Patrimonio I - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=858;3169"
    },
    {
      "Fondo": "Delta Performance - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=614;1239"
    },
    {
      "Fondo": "Delta Performance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=614;1240"
    },
    {
      "Fondo": "Delta Performance - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=614;3608"
    },
    {
      "Fondo": "Delta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;715"
    },
    {
      "Fondo": "Delta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;716"
    },
    {
      "Fondo": "Delta Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;3737"
    },
    {
      "Fondo": "Delta Pesos - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;4713"
    },
    {
      "Fondo": "Delta Pesos - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;4715"
    },
    {
      "Fondo": "Delta Pesos - Clase X,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=394;3919"
    },
    {
      "Fondo": "Delta Recursos Naturales - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=402;725"
    },
    {
      "Fondo": "Delta Recursos Naturales - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=402;726"
    },
    {
      "Fondo": "Delta Recursos Naturales - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=402;1935"
    },
    {
      "Fondo": "Delta Recursos Naturales - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=402;1925"
    },
    {
      "Fondo": "Delta Recursos Naturales - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=402;1924"
    },
    {
      "Fondo": "Delta Renta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;659"
    },
    {
      "Fondo": "Delta Renta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;660"
    },
    {
      "Fondo": "Delta Renta - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;1822"
    },
    {
      "Fondo": "Delta Renta - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;1929"
    },
    {
      "Fondo": "Delta Renta - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;1928"
    },
    {
      "Fondo": "Delta Renta - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;4716"
    },
    {
      "Fondo": "Delta Renta - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=369;4717"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;1518"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;1519"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;3301"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;3302"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase K Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;4722"
    },
    {
      "Fondo": "Delta Renta Dolares - Clase L Ley N\u00ba 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=709;4723"
    },
    {
      "Fondo": "Delta Renta Dolares Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=829;2341"
    },
    {
      "Fondo": "Delta Renta Dolares Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=829;2342"
    },
    {
      "Fondo": "Delta Renta Dolares Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=829;3303"
    },
    {
      "Fondo": "Delta Renta Dolares Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=829;3304"
    },
    {
      "Fondo": "Delta Retorno Real - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=792;1852"
    },
    {
      "Fondo": "Delta Retorno Real - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=792;1842"
    },
    {
      "Fondo": "Delta Retorno Real - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=792;3450"
    },
    {
      "Fondo": "Delta Select - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=419;771"
    },
    {
      "Fondo": "Delta Select - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=419;772"
    },
    {
      "Fondo": "Delta Select - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=419;1927"
    },
    {
      "Fondo": "Delta Select - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=419;1926"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;1862"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;1863"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;1864"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;334"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;273"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;1455"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;4753"
    },
    {
      "Fondo": "Desarrollo Argentino I FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=273;4754"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;793"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;794"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;1456"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;1893"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;1894"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;1895"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase H Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;4755"
    },
    {
      "Fondo": "Desarrollo Argentino II FCI Abierto para el Fin. de la Infra. y la Econ. Real - Clase I Ley 27.743,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=427;4756"
    },
    {
      "Fondo": "Dracma Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1406;4096"
    },
    {
      "Fondo": "Dracma Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1406;4097"
    },
    {
      "Fondo": "Dracma Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1406;4098"
    },
    {
      "Fondo": "Dracma Abierto Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1406;4099"
    },
    {
      "Fondo": "Dracma Balanceado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2497"
    },
    {
      "Fondo": "Dracma Balanceado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2498"
    },
    {
      "Fondo": "Dracma Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2499"
    },
    {
      "Fondo": "Dracma Balanceado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2500"
    },
    {
      "Fondo": "Dracma Balanceado - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2501"
    },
    {
      "Fondo": "Dracma Balanceado - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=868;2502"
    },
    {
      "Fondo": "Dracma Estrategia Dolar I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1499;4482"
    },
    {
      "Fondo": "Dracma Estrategia Dolar I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1499;4483"
    },
    {
      "Fondo": "Dracma Estrategia Dolar I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1499;4484"
    },
    {
      "Fondo": "Dracma Estrategia Dolar I - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1499;4485"
    },
    {
      "Fondo": "Dracma FCIC Inmobiliario - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1324;3771"
    },
    {
      "Fondo": "Dracma FCIC Inmobiliario - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1324;3772"
    },
    {
      "Fondo": "Dracma Multiestrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1483;4397"
    },
    {
      "Fondo": "Dracma Multiestrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1483;4398"
    },
    {
      "Fondo": "Dracma Multiestrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1483;4399"
    },
    {
      "Fondo": "Dracma Multiestrategia - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1483;4400"
    },
    {
      "Fondo": "Dracma Renta Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1370;3928"
    },
    {
      "Fondo": "Dracma Renta Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1370;3929"
    },
    {
      "Fondo": "Dracma Renta Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1370;3930"
    },
    {
      "Fondo": "Dracma Renta Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1370;3931"
    },
    {
      "Fondo": "First Renta Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=743;1627"
    },
    {
      "Fondo": "First Renta Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=743;1628"
    },
    {
      "Fondo": "First Renta Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=743;3470"
    },
    {
      "Fondo": "First Renta Mixta I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1207;3336"
    },
    {
      "Fondo": "First Renta Mixta I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1207;3337"
    },
    {
      "Fondo": "First Renta Mixta I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1207;3338"
    },
    {
      "Fondo": "First Renta Mixta I - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1207;3339"
    },
    {
      "Fondo": "First Renta Mixta II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1251;3471"
    },
    {
      "Fondo": "First Renta Mixta II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1251;3472"
    },
    {
      "Fondo": "First Renta Mixta II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1251;3473"
    },
    {
      "Fondo": "First Renta Mixta II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1251;3474"
    },
    {
      "Fondo": "First Renta Mixta III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1238;3438"
    },
    {
      "Fondo": "First Renta Mixta III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1238;3439"
    },
    {
      "Fondo": "First Renta Mixta III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1238;3440"
    },
    {
      "Fondo": "First Renta Mixta III - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1238;3441"
    },
    {
      "Fondo": "First Renta Mixta IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1259;3493"
    },
    {
      "Fondo": "First Renta Mixta IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1259;3494"
    },
    {
      "Fondo": "First Renta Mixta IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1259;3495"
    },
    {
      "Fondo": "First Renta Mixta IV - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1259;3496"
    },
    {
      "Fondo": "First Renta Mixta V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1271;3539"
    },
    {
      "Fondo": "First Renta Mixta V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1271;3540"
    },
    {
      "Fondo": "First Renta Mixta V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1271;3541"
    },
    {
      "Fondo": "First Renta Mixta V - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1271;3542"
    },
    {
      "Fondo": "First Renta Mixta VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1298;3679"
    },
    {
      "Fondo": "First Renta Mixta VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1298;3680"
    },
    {
      "Fondo": "First Renta Mixta VI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1298;3681"
    },
    {
      "Fondo": "First Renta Mixta VI - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1298;3682"
    },
    {
      "Fondo": "First Renta Mixta VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1305;3706"
    },
    {
      "Fondo": "First Renta Mixta VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1305;3707"
    },
    {
      "Fondo": "First Renta Mixta VII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1305;3708"
    },
    {
      "Fondo": "First Renta Mixta VII - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1305;3709"
    },
    {
      "Fondo": "First Renta Mixta VIII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1405;4090"
    },
    {
      "Fondo": "First Renta Mixta VIII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1405;4091"
    },
    {
      "Fondo": "First Renta Mixta VIII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1405;4092"
    },
    {
      "Fondo": "First Renta Mixta VIII - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1405;4093"
    },
    {
      "Fondo": "First Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=744;1629"
    },
    {
      "Fondo": "First Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=744;1630"
    },
    {
      "Fondo": "First Renta Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=744;1631"
    },
    {
      "Fondo": "First Renta Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=744;1632"
    },
    {
      "Fondo": "Fundcorp Capital Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1248;3463"
    },
    {
      "Fondo": "Fundcorp Capital Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1248;3464"
    },
    {
      "Fondo": "Fundcorp Capital Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1248;3465"
    },
    {
      "Fondo": "Fundcorp Liquidez - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=888;2588"
    },
    {
      "Fondo": "Fundcorp Liquidez - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=888;2589"
    },
    {
      "Fondo": "Fundcorp Liquidez - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=888;2590"
    },
    {
      "Fondo": "Fundcorp Liquidez Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=887;2585"
    },
    {
      "Fondo": "Fundcorp Liquidez Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=887;2586"
    },
    {
      "Fondo": "Fundcorp Liquidez Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=887;2587"
    },
    {
      "Fondo": "Fundcorp Liquidez Plus - Clase D Art. 11 Decreto 99/2019 y mod,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=887;3322"
    },
    {
      "Fondo": "Fundcorp Long Performance - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=806;2100"
    },
    {
      "Fondo": "Fundcorp Long Performance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=806;2101"
    },
    {
      "Fondo": "Fundcorp Long Performance - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=806;2102"
    },
    {
      "Fondo": "Fundcorp Long Performance Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=805;2097"
    },
    {
      "Fondo": "Fundcorp Long Performance Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=805;2098"
    },
    {
      "Fondo": "Fundcorp Long Performance Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=805;2099"
    },
    {
      "Fondo": "Fundcorp Performance - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=761;1684"
    },
    {
      "Fondo": "Fundcorp Performance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=761;1685"
    },
    {
      "Fondo": "Fundcorp Performance - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=761;1686"
    },
    {
      "Fondo": "Fundcorp Performance Balanceado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1463;4326"
    },
    {
      "Fondo": "Fundcorp Performance Balanceado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1463;4327"
    },
    {
      "Fondo": "Fundcorp Performance Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1463;4328"
    },
    {
      "Fondo": "Fundcorp Performance Multiestrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1464;4329"
    },
    {
      "Fondo": "Fundcorp Performance Multiestrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1464;4330"
    },
    {
      "Fondo": "Fundcorp Performance Multiestrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1464;4331"
    },
    {
      "Fondo": "Fundcorp Performance Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=762;1687"
    },
    {
      "Fondo": "Fundcorp Performance Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=762;1688"
    },
    {
      "Fondo": "Fundcorp Performance Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=762;1689"
    },
    {
      "Fondo": "Gainvest Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=460;886"
    },
    {
      "Fondo": "Gainvest Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=460;3687"
    },
    {
      "Fondo": "Gainvest Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=460;3688"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;1103"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;2635"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;2636"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;2637"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;2638"
    },
    {
      "Fondo": "Gainvest Balanceado - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=545;2639"
    },
    {
      "Fondo": "Gainvest Balanceado II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1294;3620"
    },
    {
      "Fondo": "Gainvest Balanceado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1294;3621"
    },
    {
      "Fondo": "Gainvest Balanceado II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1294;3622"
    },
    {
      "Fondo": "Gainvest Balanceado III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1295;3623"
    },
    {
      "Fondo": "Gainvest Balanceado III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1295;3624"
    },
    {
      "Fondo": "Gainvest Balanceado III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1295;3625"
    },
    {
      "Fondo": "Gainvest Balanceado IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1319;3760"
    },
    {
      "Fondo": "Gainvest Balanceado IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1319;3761"
    },
    {
      "Fondo": "Gainvest Balanceado IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1319;3762"
    },
    {
      "Fondo": "Gainvest Balanceado V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1337;3824"
    },
    {
      "Fondo": "Gainvest Balanceado V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1337;3825"
    },
    {
      "Fondo": "Gainvest Balanceado V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1337;3826"
    },
    {
      "Fondo": "Gainvest Balanceado VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1440;4229"
    },
    {
      "Fondo": "Gainvest Balanceado VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1440;4230"
    },
    {
      "Fondo": "Gainvest Balanceado VI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1440;4231"
    },
    {
      "Fondo": "Gainvest Balanceado VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1441;4232"
    },
    {
      "Fondo": "Gainvest Balanceado VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1441;4233"
    },
    {
      "Fondo": "Gainvest Balanceado VII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1441;4234"
    },
    {
      "Fondo": "Gainvest Balanceado VIII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1442;4235"
    },
    {
      "Fondo": "Gainvest Balanceado VIII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1442;4236"
    },
    {
      "Fondo": "Gainvest Balanceado VIII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1442;4237"
    },
    {
      "Fondo": "Gainvest Capital - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=597;1210"
    },
    {
      "Fondo": "Gainvest Capital - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=597;1211"
    },
    {
      "Fondo": "Gainvest Capital II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=671;1403"
    },
    {
      "Fondo": "Gainvest Capital II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=671;1404"
    },
    {
      "Fondo": "Gainvest Capital III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=672;1405"
    },
    {
      "Fondo": "Gainvest Capital III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=672;1406"
    },
    {
      "Fondo": "Gainvest Capital NR D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1049;2959"
    },
    {
      "Fondo": "Gainvest Capital NR D.596 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1049;2960"
    },
    {
      "Fondo": "Gainvest Capital RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1050;2961"
    },
    {
      "Fondo": "Gainvest Capital RP D.596 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1050;2962"
    },
    {
      "Fondo": "Gainvest Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=598;1212"
    },
    {
      "Fondo": "Gainvest Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=598;1213"
    },
    {
      "Fondo": "Gainvest Crecimiento II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=673;1407"
    },
    {
      "Fondo": "Gainvest Crecimiento II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=673;1408"
    },
    {
      "Fondo": "Gainvest Crecimiento III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=674;1409"
    },
    {
      "Fondo": "Gainvest Crecimiento III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=674;1410"
    },
    {
      "Fondo": "Gainvest Estrategia I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=865;2491"
    },
    {
      "Fondo": "Gainvest Estrategia I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=865;2492"
    },
    {
      "Fondo": "Gainvest Estrategia II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=869;2503"
    },
    {
      "Fondo": "Gainvest Estrategia II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=869;2505"
    },
    {
      "Fondo": "Gainvest Estrategia III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1198;3274"
    },
    {
      "Fondo": "Gainvest Estrategia III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1198;3275"
    },
    {
      "Fondo": "Gainvest Estrategia IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1218;3372"
    },
    {
      "Fondo": "Gainvest Estrategia IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1218;3373"
    },
    {
      "Fondo": "Gainvest FF - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=347;580"
    },
    {
      "Fondo": "Gainvest FF - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=347;732"
    },
    {
      "Fondo": "Gainvest FF - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=347;3683"
    },
    {
      "Fondo": "Gainvest Global I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=834;2369"
    },
    {
      "Fondo": "Gainvest Global I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=834;2370"
    },
    {
      "Fondo": "Gainvest Global II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1188;3213"
    },
    {
      "Fondo": "Gainvest Global II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1188;3214"
    },
    {
      "Fondo": "Gainvest Global III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=895;2652"
    },
    {
      "Fondo": "Gainvest Global III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=895;2653"
    },
    {
      "Fondo": "Gainvest Global IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1217;3370"
    },
    {
      "Fondo": "Gainvest Global IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1217;3371"
    },
    {
      "Fondo": "Gainvest Global IX - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1388;3997"
    },
    {
      "Fondo": "Gainvest Global IX - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1388;3998"
    },
    {
      "Fondo": "Gainvest Global IX - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1388;3999"
    },
    {
      "Fondo": "Gainvest Global V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1348;3845"
    },
    {
      "Fondo": "Gainvest Global V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1348;3846"
    },
    {
      "Fondo": "Gainvest Global V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1348;3847"
    },
    {
      "Fondo": "Gainvest Global VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1347;3842"
    },
    {
      "Fondo": "Gainvest Global VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1347;3843"
    },
    {
      "Fondo": "Gainvest Global VI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1347;3844"
    },
    {
      "Fondo": "Gainvest Global VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1386;3990"
    },
    {
      "Fondo": "Gainvest Global VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1386;3991"
    },
    {
      "Fondo": "Gainvest Global VII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1386;3992"
    },
    {
      "Fondo": "Gainvest Global VIII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1387;3993"
    },
    {
      "Fondo": "Gainvest Global VIII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1387;3994"
    },
    {
      "Fondo": "Gainvest Global VIII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1387;3996"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;1033"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;1034"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;2626"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;2627"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;2628"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;2629"
    },
    {
      "Fondo": "Gainvest Infraestructura FCI Abierto - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=512;3282"
    },
    {
      "Fondo": "Gainvest Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=638;3945"
    },
    {
      "Fondo": "Gainvest Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=638;1295"
    },
    {
      "Fondo": "Gainvest Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=638;3946"
    },
    {
      "Fondo": "Gainvest PYMEs - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=465;913"
    },
    {
      "Fondo": "Gainvest PYMEs - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=465;914"
    },
    {
      "Fondo": "Gainvest PYMEs - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=465;3684"
    },
    {
      "Fondo": "Gainvest Regional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;1032"
    },
    {
      "Fondo": "Gainvest Regional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;2630"
    },
    {
      "Fondo": "Gainvest Regional - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;2631"
    },
    {
      "Fondo": "Gainvest Regional - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;2632"
    },
    {
      "Fondo": "Gainvest Regional - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;2633"
    },
    {
      "Fondo": "Gainvest Regional - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=511;2634"
    },
    {
      "Fondo": "Gainvest Regional NR D.596,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1045;2955"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;597"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;2617"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;2618"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;2619"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;2620"
    },
    {
      "Fondo": "Gainvest Renta Fija - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=353;2621"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;739"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;740"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;2622"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;2623"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;2624"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;2625"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=409;3283"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares RP D.596 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1042;2951"
    },
    {
      "Fondo": "Gainvest Renta Fija Dolares RP D.596 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1042;2952"
    },
    {
      "Fondo": "Gainvest Renta Fija Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=487;962"
    },
    {
      "Fondo": "Gainvest Renta Fija Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=487;3677"
    },
    {
      "Fondo": "Gainvest Renta Fija Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=487;3678"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;1104"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;2640"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;2641"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;2642"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;2643"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=544;2644"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus NR D.596,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1047;2957"
    },
    {
      "Fondo": "Gainvest Renta Fija Proteccion Plus RP D.596,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1048;2958"
    },
    {
      "Fondo": "Gainvest Renta Mixta RP D.596,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1044;2954"
    },
    {
      "Fondo": "Gainvest Renta Mixta Sustentable FCI ASG - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1315;3745"
    },
    {
      "Fondo": "Gainvest Renta Mixta Sustentable FCI ASG - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1315;3746"
    },
    {
      "Fondo": "Gainvest Renta Mixta Sustentable FCI ASG - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1315;3747"
    },
    {
      "Fondo": "Gainvest Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=510;1031"
    },
    {
      "Fondo": "Gainvest Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=510;3685"
    },
    {
      "Fondo": "Gainvest Renta Variable - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=510;3686"
    },
    {
      "Fondo": "Galileo Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=615;1243"
    },
    {
      "Fondo": "Galileo Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=615;2249"
    },
    {
      "Fondo": "Galileo Acciones - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=615;2250"
    },
    {
      "Fondo": "Galileo Acciones - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=615;2251"
    },
    {
      "Fondo": "Galileo Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=489;967"
    },
    {
      "Fondo": "Galileo Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=489;2260"
    },
    {
      "Fondo": "Galileo Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=489;2261"
    },
    {
      "Fondo": "Galileo Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=489;2262"
    },
    {
      "Fondo": "Galileo Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=616;1244"
    },
    {
      "Fondo": "Galileo Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=616;2252"
    },
    {
      "Fondo": "Galileo Ahorro Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=616;2253"
    },
    {
      "Fondo": "Galileo Ahorro Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=616;2254"
    },
    {
      "Fondo": "Galileo Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=446;845"
    },
    {
      "Fondo": "Galileo Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=446;2263"
    },
    {
      "Fondo": "Galileo Argentina - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=446;2264"
    },
    {
      "Fondo": "Galileo Argentina - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=446;2265"
    },
    {
      "Fondo": "Galileo Estrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=748;1640"
    },
    {
      "Fondo": "Galileo Estrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=748;1641"
    },
    {
      "Fondo": "Galileo Estrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=748;2258"
    },
    {
      "Fondo": "Galileo Estrategia - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=748;2259"
    },
    {
      "Fondo": "Galileo Event Driven - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=349;582"
    },
    {
      "Fondo": "Galileo Event Driven - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=349;583"
    },
    {
      "Fondo": "Galileo Event Driven - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=349;964"
    },
    {
      "Fondo": "Galileo Event Driven - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=349;965"
    },
    {
      "Fondo": "Galileo FCI Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=490;968"
    },
    {
      "Fondo": "Galileo FCI Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=490;969"
    },
    {
      "Fondo": "Galileo Fixed Income - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=842;2402"
    },
    {
      "Fondo": "Galileo Fixed Income - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=842;2403"
    },
    {
      "Fondo": "Galileo Income - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=747;1638"
    },
    {
      "Fondo": "Galileo Income - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=747;1639"
    },
    {
      "Fondo": "Galileo Multi Strategy - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1273;3545"
    },
    {
      "Fondo": "Galileo Multi Strategy - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1273;3546"
    },
    {
      "Fondo": "Galileo Multi Strategy II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1475;4364"
    },
    {
      "Fondo": "Galileo Multi Strategy II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1475;4365"
    },
    {
      "Fondo": "Galileo Multimercado II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=861;2482"
    },
    {
      "Fondo": "Galileo Multimercado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=861;2483"
    },
    {
      "Fondo": "Galileo Multimercado III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1245;3455"
    },
    {
      "Fondo": "Galileo Multimercado III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1245;3456"
    },
    {
      "Fondo": "Galileo Multimercado IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1272;3543"
    },
    {
      "Fondo": "Galileo Multimercado IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1272;3544"
    },
    {
      "Fondo": "Galileo Multimercado IX - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1476;4366"
    },
    {
      "Fondo": "Galileo Multimercado IX - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1476;4367"
    },
    {
      "Fondo": "Galileo Multimercado V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1383;3975"
    },
    {
      "Fondo": "Galileo Multimercado V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1383;3977"
    },
    {
      "Fondo": "Galileo Multimercado VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1384;3976"
    },
    {
      "Fondo": "Galileo Multimercado VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1384;3978"
    },
    {
      "Fondo": "Galileo Multimercado VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1478;4371"
    },
    {
      "Fondo": "Galileo Multimercado VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1478;4372"
    },
    {
      "Fondo": "Galileo Multimercado VIII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1477;4368"
    },
    {
      "Fondo": "Galileo Multimercado VIII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1477;4369"
    },
    {
      "Fondo": "Galileo Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=841;2398"
    },
    {
      "Fondo": "Galileo Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=841;2399"
    },
    {
      "Fondo": "Galileo Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=841;2400"
    },
    {
      "Fondo": "Galileo Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=841;2401"
    },
    {
      "Fondo": "Galileo Premium - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=543;1101"
    },
    {
      "Fondo": "Galileo Premium - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=543;1102"
    },
    {
      "Fondo": "Galileo Premium - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=543;2266"
    },
    {
      "Fondo": "Galileo Premium - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=543;2267"
    },
    {
      "Fondo": "Galileo Renta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=840;2394"
    },
    {
      "Fondo": "Galileo Renta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=840;2395"
    },
    {
      "Fondo": "Galileo Renta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=840;2396"
    },
    {
      "Fondo": "Galileo Renta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=840;2397"
    },
    {
      "Fondo": "Galileo Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=617;1245"
    },
    {
      "Fondo": "Galileo Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=617;2255"
    },
    {
      "Fondo": "Galileo Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=617;2256"
    },
    {
      "Fondo": "Galileo Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=617;2257"
    },
    {
      "Fondo": "Galileo Sustentable ASG - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1304;3704"
    },
    {
      "Fondo": "Galileo Sustentable ASG - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1304;3705"
    },
    {
      "Fondo": "Gestionar Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=579;1174"
    },
    {
      "Fondo": "Gestionar Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=579;1175"
    },
    {
      "Fondo": "Gestionar Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=608;1229"
    },
    {
      "Fondo": "Gestionar Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=608;1230"
    },
    {
      "Fondo": "GNNW SBS FCIC Ganadero W86,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1185;3205"
    },
    {
      "Fondo": "Goal Acciones Argentinas - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=6;680"
    },
    {
      "Fondo": "Goal Acciones Argentinas - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=6;6"
    },
    {
      "Fondo": "Goal Acciones Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=15;678"
    },
    {
      "Fondo": "Goal Acciones Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=15;15"
    },
    {
      "Fondo": "Goal Ahorro Max FCI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=494;996"
    },
    {
      "Fondo": "Goal Ahorro Max FCI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=494;997"
    },
    {
      "Fondo": "Goal Capital Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=396;718"
    },
    {
      "Fondo": "Goal Capital Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=396;719"
    },
    {
      "Fondo": "Goal Multiestrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1409;4107"
    },
    {
      "Fondo": "Goal Multiestrategia Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1408;4106"
    },
    {
      "Fondo": "Goal Performance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=596;1209"
    },
    {
      "Fondo": "Goal Performance II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=790;1817"
    },
    {
      "Fondo": "Goal Performance II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=790;1954"
    },
    {
      "Fondo": "Goal Performance III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1303;3703"
    },
    {
      "Fondo": "Goal Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=62;679"
    },
    {
      "Fondo": "Goal Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=62;62"
    },
    {
      "Fondo": "Goal Premium - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1378;3961"
    },
    {
      "Fondo": "Goal Premium - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1378;3962"
    },
    {
      "Fondo": "Goal Renta Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=174;675"
    },
    {
      "Fondo": "Goal Renta Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=174;174"
    },
    {
      "Fondo": "Goal Renta Dolar Estrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1366;3916"
    },
    {
      "Fondo": "Goal Renta Dolar Estrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1366;3917"
    },
    {
      "Fondo": "Goal Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=738;1609"
    },
    {
      "Fondo": "Goal Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=738;1610"
    },
    {
      "Fondo": "Goal Renta D\u00f3lares Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1214;3362"
    },
    {
      "Fondo": "Goal Renta D\u00f3lares Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1214;3363"
    },
    {
      "Fondo": "Goal Renta D\u00f3lares Plus - Clase C Art. 11 Decreto 99/2019 y mod,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1214;3364"
    },
    {
      "Fondo": "Goal Renta Global - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=201;201"
    },
    {
      "Fondo": "Goal Renta Global - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=201;995"
    },
    {
      "Fondo": "Goal Renta Global - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=201;2205"
    },
    {
      "Fondo": "Goal Renta Global - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=201;2206"
    },
    {
      "Fondo": "Goal Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=343;677"
    },
    {
      "Fondo": "Goal Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=343;565"
    },
    {
      "Fondo": "Goal Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=765;1697"
    },
    {
      "Fondo": "Goal Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=765;1698"
    },
    {
      "Fondo": "Goal Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=765;2200"
    },
    {
      "Fondo": "Goal Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=765;2201"
    },
    {
      "Fondo": "GSS Cobertura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=684;1442"
    },
    {
      "Fondo": "GSS Cobertura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=684;1443"
    },
    {
      "Fondo": "GSS Energia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=740;1614"
    },
    {
      "Fondo": "GSS Energia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=740;1615"
    },
    {
      "Fondo": "GSS I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=387;807"
    },
    {
      "Fondo": "GSS I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=387;702"
    },
    {
      "Fondo": "GSS II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=388;808"
    },
    {
      "Fondo": "GSS II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=388;703"
    },
    {
      "Fondo": "GSS III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=389;809"
    },
    {
      "Fondo": "GSS III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=389;704"
    },
    {
      "Fondo": "GSS Inmobiliario I FCIC,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1293;3619"
    },
    {
      "Fondo": "GSS Renta Fija Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=685;1444"
    },
    {
      "Fondo": "GSS Renta Fija Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=685;1445"
    },
    {
      "Fondo": "GSS Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=686;1446"
    },
    {
      "Fondo": "GSS Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=686;1447"
    },
    {
      "Fondo": "HF Acciones Argentinas - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=164;164"
    },
    {
      "Fondo": "HF Acciones Argentinas - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=164;963"
    },
    {
      "Fondo": "HF Acciones Argentinas Cash Lecaps D.596 - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=938;2754"
    },
    {
      "Fondo": "HF Acciones Argentinas Cash Lecaps D.596 - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=938;2755"
    },
    {
      "Fondo": "HF Acciones Lideres - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=29;29"
    },
    {
      "Fondo": "HF Acciones Lideres - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=29;384"
    },
    {
      "Fondo": "HF Acciones Lideres Cash Lecaps D.596 - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=939;2756"
    },
    {
      "Fondo": "HF Acciones Lideres Cash Lecaps D.596 - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=939;2757"
    },
    {
      "Fondo": "HF Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=165;3979"
    },
    {
      "Fondo": "HF Balanceado - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=165;165"
    },
    {
      "Fondo": "HF Balanceado - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=165;3954"
    },
    {
      "Fondo": "HF Desarrollo Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=866;2493"
    },
    {
      "Fondo": "HF Infraestructura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=897;3212"
    },
    {
      "Fondo": "HF Infraestructura - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=897;2655"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1292"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1293"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1432"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1433"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1904"
    },
    {
      "Fondo": "IAM Ahorro Pesos - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=636;1905"
    },
    {
      "Fondo": "IAM Estrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=774;1740"
    },
    {
      "Fondo": "IAM Estrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=774;1741"
    },
    {
      "Fondo": "IAM Estrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=774;1742"
    },
    {
      "Fondo": "IAM Estrategia - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=774;1743"
    },
    {
      "Fondo": "IAM Estrategia - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=774;1906"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1301"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1302"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1303"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1304"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1907"
    },
    {
      "Fondo": "IAM FCI Abierto Pymes - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=642;1908"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4557"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4558"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4559"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4560"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4561"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4562"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4563"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4564"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4565"
    },
    {
      "Fondo": "IAM Liquidez en D\u00f3lares - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1522;4566"
    },
    {
      "Fondo": "IAM Performance Americas - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;2389"
    },
    {
      "Fondo": "IAM Performance Americas - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;2390"
    },
    {
      "Fondo": "IAM Performance Americas - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;2391"
    },
    {
      "Fondo": "IAM Performance Americas - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;2392"
    },
    {
      "Fondo": "IAM Performance Americas - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;2393"
    },
    {
      "Fondo": "IAM Performance Americas - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;4094"
    },
    {
      "Fondo": "IAM Performance Americas - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=839;4095"
    },
    {
      "Fondo": "IAM Renta Balanceada - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1205;3318"
    },
    {
      "Fondo": "IAM Renta Balanceada - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1205;3319"
    },
    {
      "Fondo": "IAM Renta Balanceada - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1205;3320"
    },
    {
      "Fondo": "IAM Renta Balanceada - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1205;3321"
    },
    {
      "Fondo": "IAM Renta Capital - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1386"
    },
    {
      "Fondo": "IAM Renta Capital - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1387"
    },
    {
      "Fondo": "IAM Renta Capital - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1388"
    },
    {
      "Fondo": "IAM Renta Capital - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1389"
    },
    {
      "Fondo": "IAM Renta Capital - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1909"
    },
    {
      "Fondo": "IAM Renta Capital - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=665;1910"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1288"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1289"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1434"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1435"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1911"
    },
    {
      "Fondo": "IAM Renta Crecimiento - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=634;1912"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;1589"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;1590"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;1591"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;1592"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;1913"
    },
    {
      "Fondo": "IAM Renta Dolares - Clase F Art. 11 Decreto 99/2019 y mod,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=731;3291"
    },
    {
      "Fondo": "IAM Renta Global - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1349;3848"
    },
    {
      "Fondo": "IAM Renta Global - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1349;3849"
    },
    {
      "Fondo": "IAM Renta Global - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1349;3850"
    },
    {
      "Fondo": "IAM Renta Global - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1349;3851"
    },
    {
      "Fondo": "IAM Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1422;4153"
    },
    {
      "Fondo": "SMSV Renta en Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=784;1775"
    },
    {
      "Fondo": "SMSV Renta en Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=784;1776"
    },
    {
      "Fondo": "ST Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=696;1481"
    },
    {
      "Fondo": "ST Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=696;1482"
    },
    {
      "Fondo": "ST Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=696;1483"
    },
    {
      "Fondo": "ST Abierto Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=696;1484"
    },
    {
      "Fondo": "ST Estrategico - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=534;1080"
    },
    {
      "Fondo": "ST Estrategico - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=534;1081"
    },
    {
      "Fondo": "ST Estrategico - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=534;1786"
    },
    {
      "Fondo": "ST Gestion I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=804;2092"
    },
    {
      "Fondo": "ST Gestion I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=804;2093"
    },
    {
      "Fondo": "ST Gestion I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=804;2094"
    },
    {
      "Fondo": "ST Gestion I - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=804;2095"
    },
    {
      "Fondo": "ST Gestion II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=864;2487"
    },
    {
      "Fondo": "ST Gestion II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=864;2488"
    },
    {
      "Fondo": "ST Gestion II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=864;2489"
    },
    {
      "Fondo": "ST Gestion II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=864;2490"
    },
    {
      "Fondo": "ST Gesti\u00f3n III - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1415;4132"
    },
    {
      "Fondo": "ST Gesti\u00f3n III - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1415;4133"
    },
    {
      "Fondo": "ST Gesti\u00f3n III - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1415;4134"
    },
    {
      "Fondo": "ST Gestion IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1289;3605"
    },
    {
      "Fondo": "ST Gestion IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1289;3606"
    },
    {
      "Fondo": "ST Gestion IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1289;3607"
    },
    {
      "Fondo": "ST Gesti\u00f3n IX - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=785;1777"
    },
    {
      "Fondo": "ST Gesti\u00f3n IX - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=785;1778"
    },
    {
      "Fondo": "ST Gesti\u00f3n IX - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=785;1779"
    },
    {
      "Fondo": "ST Gestion V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1330;3796"
    },
    {
      "Fondo": "ST Gestion V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1330;3797"
    },
    {
      "Fondo": "ST Gestion V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1330;3798"
    },
    {
      "Fondo": "ST Gestion VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1368;3920"
    },
    {
      "Fondo": "ST Gestion VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1368;3921"
    },
    {
      "Fondo": "ST Gestion VI - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1368;3922"
    },
    {
      "Fondo": "ST Gestion VI - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1368;3923"
    },
    {
      "Fondo": "ST Gestion VII - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1423;4157"
    },
    {
      "Fondo": "ST Gestion VII - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1423;4158"
    },
    {
      "Fondo": "ST Gestion VII - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1423;4159"
    },
    {
      "Fondo": "ST Gestion VII - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1423;4160"
    },
    {
      "Fondo": "ST Global - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=676;1415"
    },
    {
      "Fondo": "ST Global - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=676;1416"
    },
    {
      "Fondo": "ST Global - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=676;1417"
    },
    {
      "Fondo": "ST Global - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=676;1418"
    },
    {
      "Fondo": "ST Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1199;4100"
    },
    {
      "Fondo": "ST Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1199;3279"
    },
    {
      "Fondo": "ST Infraestructura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1199;3280"
    },
    {
      "Fondo": "ST One Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=639;1787"
    },
    {
      "Fondo": "ST One Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=639;1296"
    },
    {
      "Fondo": "ST One Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=639;1297"
    },
    {
      "Fondo": "ST One Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=639;1312"
    },
    {
      "Fondo": "ST Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=567;1150"
    },
    {
      "Fondo": "ST Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=567;1151"
    },
    {
      "Fondo": "ST Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=567;1308"
    },
    {
      "Fondo": "ST Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=567;1309"
    },
    {
      "Fondo": "ST Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=568;1152"
    },
    {
      "Fondo": "ST Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=568;1153"
    },
    {
      "Fondo": "ST Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=568;1310"
    },
    {
      "Fondo": "ST Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=568;1311"
    },
    {
      "Fondo": "ST Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=647;1331"
    },
    {
      "Fondo": "ST Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=647;1332"
    },
    {
      "Fondo": "ST Renta Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=647;1333"
    },
    {
      "Fondo": "ST Renta Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=647;1334"
    },
    {
      "Fondo": "ST Renta Plus,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=535;1082"
    },
    {
      "Fondo": "ST Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=675;1411"
    },
    {
      "Fondo": "ST Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=675;1412"
    },
    {
      "Fondo": "ST Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=675;1413"
    },
    {
      "Fondo": "ST Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=675;1414"
    },
    {
      "Fondo": "ST Retorno Total Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=697;1485"
    },
    {
      "Fondo": "ST Retorno Total Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=697;1486"
    },
    {
      "Fondo": "ST Retorno Total Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=697;1487"
    },
    {
      "Fondo": "ST Retorno Total Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=697;1488"
    },
    {
      "Fondo": "ST Zero - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1222;3385"
    },
    {
      "Fondo": "ST Zero - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1222;3386"
    },
    {
      "Fondo": "ST Zero - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1222;3387"
    },
    {
      "Fondo": "ST Zero - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1222;3924"
    },
    {
      "Fondo": "Super Ahorro $ - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=151;151"
    },
    {
      "Fondo": "Super Ahorro $ - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=151;298"
    },
    {
      "Fondo": "Super Ahorro $ - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=151;3256"
    },
    {
      "Fondo": "Super Ahorro $ - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=151;3254"
    },
    {
      "Fondo": "Super Ahorro $ - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=151;3255"
    },
    {
      "Fondo": "Super Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=519;1048"
    },
    {
      "Fondo": "Super Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=519;1049"
    },
    {
      "Fondo": "Super Ahorro Plus - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=519;3259"
    },
    {
      "Fondo": "Super Ahorro Plus - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=519;3257"
    },
    {
      "Fondo": "Super Ahorro Plus - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=519;3258"
    },
    {
      "Fondo": "Super Ahorro U$S - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=152;152"
    },
    {
      "Fondo": "Super Ahorro U$S - Clase A ex Letes,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=152;401"
    },
    {
      "Fondo": "Super Ahorro U$S - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=152;299"
    },
    {
      "Fondo": "Super Ahorro U$S - Clase B ex Letes,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=152;402"
    },
    {
      "Fondo": "Super Bonos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=341;531"
    },
    {
      "Fondo": "Super Bonos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=341;1040"
    },
    {
      "Fondo": "Super Bonos - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=341;1374"
    },
    {
      "Fondo": "Super Bonos - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=341;3459"
    },
    {
      "Fondo": "Super Bonos - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=341;3460"
    },
    {
      "Fondo": "Superfondo Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=148;148"
    },
    {
      "Fondo": "Superfondo Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=148;304"
    },
    {
      "Fondo": "Superfondo Acciones - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=148;1373"
    },
    {
      "Fondo": "Superfondo Acciones - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=148;3457"
    },
    {
      "Fondo": "Superfondo Acciones - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=148;3458"
    },
    {
      "Fondo": "Superfondo Acciones Brasil - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=382;689"
    },
    {
      "Fondo": "Superfondo Acciones Brasil - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=382;690"
    },
    {
      "Fondo": "Superfondo Acciones Brasil - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=382;4375"
    },
    {
      "Fondo": "Superfondo Combinado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=631;1278"
    },
    {
      "Fondo": "Superfondo Combinado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=631;1279"
    },
    {
      "Fondo": "Superfondo Combinado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=631;1280"
    },
    {
      "Fondo": "Superfondo Combinado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=631;1281"
    },
    {
      "Fondo": "Superfondo Empresas Args. Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=649;1338"
    },
    {
      "Fondo": "Superfondo Empresas Args. Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=649;1339"
    },
    {
      "Fondo": "Superfondo Empresas Args. Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=649;1340"
    },
    {
      "Fondo": "Superfondo Equilibrado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=630;1274"
    },
    {
      "Fondo": "Superfondo Equilibrado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=630;1275"
    },
    {
      "Fondo": "Superfondo Equilibrado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=630;1276"
    },
    {
      "Fondo": "Superfondo Equilibrado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=630;1277"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1325"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1326"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1327"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1328"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1329"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;1330"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;3333"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;3334"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase K,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;3335"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase M Art. 11 Decreto 99/2019 y mod,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;3298"
    },
    {
      "Fondo": "Superfondo Estrategico - Clase N Art. 11 Decreto 99/2019 y mod,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=646;3299"
    },
    {
      "Fondo": "Superfondo Latinoamerica - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=213;213"
    },
    {
      "Fondo": "Superfondo Latinoamerica - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=213;302"
    },
    {
      "Fondo": "Superfondo Latinoamerica - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=213;4373"
    },
    {
      "Fondo": "Superfondo Latinoamerica - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=213;4374"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1940"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1941"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1942"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1943"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1944"
    },
    {
      "Fondo": "Superfondo Multiactivos Dolar - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=796;1945"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1319"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1320"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1321"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1322"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1323"
    },
    {
      "Fondo": "Superfondo Multirenta - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=645;1324"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;149"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;684"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;2197"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;1381"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;3241"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;3242"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;3243"
    },
    {
      "Fondo": "Superfondo Renta $ - Clase K,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=149;3332"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1313"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1314"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1315"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1316"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1317"
    },
    {
      "Fondo": "Superfondo Renta Balance - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=644;1318"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;166"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;305"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;1379"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;3247"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;3248"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;3249"
    },
    {
      "Fondo": "Superfondo Renta Fija - Clase K,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=166;3331"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1346"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1347"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1348"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1349"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1350"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;1351"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;2657"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;2658"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;2659"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares - Clase L,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=654;2660"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;1565"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;1564"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;1555"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;1556"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;2011"
    },
    {
      "Fondo": "Superfondo Renta Fija Dolares II - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=720;2012"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;1767"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;303"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;1768"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;1769"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;1382"
    },
    {
      "Fondo": "Superfondo Renta Fija Latam - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=154;1770"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1946"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1947"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1948"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1949"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1950"
    },
    {
      "Fondo": "Superfondo Renta Global - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=797;1951"
    },
    {
      "Fondo": "Superfondo Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=632;1282"
    },
    {
      "Fondo": "Superfondo Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=632;1283"
    },
    {
      "Fondo": "Superfondo Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=632;1284"
    },
    {
      "Fondo": "Superfondo Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=632;1285"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;51"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;683"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2160"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2198"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;1380"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2661"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2662"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2663"
    },
    {
      "Fondo": "Superfondo Renta Variable - Clase L,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=51;2664"
    },
    {
      "Fondo": "Superfondo Sustentable ASG - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1342;3829"
    },
    {
      "Fondo": "Supergestion - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;226"
    },
    {
      "Fondo": "Supergestion - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;1375"
    },
    {
      "Fondo": "Supergestion - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;1376"
    },
    {
      "Fondo": "Supergestion - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;1377"
    },
    {
      "Fondo": "Supergestion - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;1378"
    },
    {
      "Fondo": "Supergestion - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;3244"
    },
    {
      "Fondo": "Supergestion - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;3245"
    },
    {
      "Fondo": "Supergestion - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;3246"
    },
    {
      "Fondo": "Supergestion - Clase K,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=226;3329"
    },
    {
      "Fondo": "Supergestion Balanceado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=541;1095"
    },
    {
      "Fondo": "Supergestion Balanceado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=541;1096"
    },
    {
      "Fondo": "Supergestion Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=541;1097"
    },
    {
      "Fondo": "Supergestion Balanceado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=541;1250"
    },
    {
      "Fondo": "Supergestion Mix VI - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=406;730"
    },
    {
      "Fondo": "Supergestion Mix VI - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=406;731"
    },
    {
      "Fondo": "Supergestion Mix VI - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=406;2582"
    },
    {
      "Fondo": "Supergestion Mix VI - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=406;2583"
    },
    {
      "Fondo": "Supergestion Mix VI - Clase J,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=406;2584"
    },
    {
      "Fondo": "Tandem Dolares Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1511;4515"
    },
    {
      "Fondo": "Tandem Dolares Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1511;4516"
    },
    {
      "Fondo": "Tandem Dolares Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1511;4517"
    },
    {
      "Fondo": "Tandem Dolares Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1511;4518"
    },
    {
      "Fondo": "Tandem Pesos Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1510;4511"
    },
    {
      "Fondo": "Tandem Pesos Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1510;4512"
    },
    {
      "Fondo": "Tandem Pesos Ahorro Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1510;4513"
    },
    {
      "Fondo": "Tandem Pesos Ahorro Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1510;4514"
    },
    {
      "Fondo": "Tavelli Abierto Pymes,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=549;1111"
    },
    {
      "Fondo": "Tavelli Global,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=523;1057"
    },
    {
      "Fondo": "Tavelli Mix,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=199;199"
    },
    {
      "Fondo": "Tavelli Plus,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=147;147"
    },
    {
      "Fondo": "Tavelli Renta,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=334;385"
    },
    {
      "Fondo": "Terrazas Del Volcan Inmobiliario FCIC,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1320;3763"
    },
    {
      "Fondo": "Toronto Trust - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=52;52"
    },
    {
      "Fondo": "Toronto Trust - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=52;1154"
    },
    {
      "Fondo": "Toronto Trust - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=52;1155"
    },
    {
      "Fondo": "Toronto Trust Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=577;1170"
    },
    {
      "Fondo": "Toronto Trust Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=577;1171"
    },
    {
      "Fondo": "Toronto Trust Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=577;4519"
    },
    {
      "Fondo": "Toronto Trust Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=560;1132"
    },
    {
      "Fondo": "Toronto Trust Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=560;1133"
    },
    {
      "Fondo": "Toronto Trust Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=560;1134"
    },
    {
      "Fondo": "Toronto Trust Argentina 2021 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1310;3723"
    },
    {
      "Fondo": "Toronto Trust Argentina 2021 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1310;3724"
    },
    {
      "Fondo": "Toronto Trust Argentina 2021 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1310;3725"
    },
    {
      "Fondo": "Toronto Trust Argentina 2021 - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1310;3726"
    },
    {
      "Fondo": "Toronto Trust Balanceado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1416;4136"
    },
    {
      "Fondo": "Toronto Trust Balanceado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1416;4135"
    },
    {
      "Fondo": "Toronto Trust Balanceado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1416;4137"
    },
    {
      "Fondo": "Toronto Trust Balanceado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1416;4138"
    },
    {
      "Fondo": "Toronto Trust Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=775;1744"
    },
    {
      "Fondo": "Toronto Trust Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=775;1745"
    },
    {
      "Fondo": "Toronto Trust Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=775;1746"
    },
    {
      "Fondo": "Toronto Trust Gesti\u00f3n - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1394;4035"
    },
    {
      "Fondo": "Toronto Trust Global Capital - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=578;1172"
    },
    {
      "Fondo": "Toronto Trust Global Capital - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=578;1173"
    },
    {
      "Fondo": "Toronto Trust Global Capital - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=578;3273"
    },
    {
      "Fondo": "Toronto Trust Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1539;4634"
    },
    {
      "Fondo": "Toronto Trust Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1539;4635"
    },
    {
      "Fondo": "Toronto Trust Infraestructura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1539;4636"
    },
    {
      "Fondo": "Toronto Trust Infraestructura - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1539;4637"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;1599"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;1598"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;1597"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;3276"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;3277"
    },
    {
      "Fondo": "Toronto Trust Liquidez Dolar - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=733;3278"
    },
    {
      "Fondo": "Toronto Trust Multimercado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=561;1135"
    },
    {
      "Fondo": "Toronto Trust Multimercado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=561;1136"
    },
    {
      "Fondo": "Toronto Trust Multimercado - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=561;1137"
    },
    {
      "Fondo": "Toronto Trust Multimercado - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=561;2353"
    },
    {
      "Fondo": "Toronto Trust Renta Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1482;4393"
    },
    {
      "Fondo": "Toronto Trust Renta Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1482;4394"
    },
    {
      "Fondo": "Toronto Trust Renta Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1482;4395"
    },
    {
      "Fondo": "Toronto Trust Renta Dolar - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1482;4396"
    },
    {
      "Fondo": "Toronto Trust Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=562;1138"
    },
    {
      "Fondo": "Toronto Trust Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=562;1139"
    },
    {
      "Fondo": "Toronto Trust Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=562;1140"
    },
    {
      "Fondo": "Toronto Trust Renta Fija Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=563;1141"
    },
    {
      "Fondo": "Toronto Trust Renta Fija Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=563;1142"
    },
    {
      "Fondo": "Toronto Trust Renta Fija Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=563;1143"
    },
    {
      "Fondo": "Toronto Trust Renta Fija Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=563;3738"
    },
    {
      "Fondo": "Toronto Trust Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=776;1747"
    },
    {
      "Fondo": "Toronto Trust Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=776;1748"
    },
    {
      "Fondo": "Toronto Trust Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=776;1749"
    },
    {
      "Fondo": "Toronto Trust Special Opportunities,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=444;841"
    },
    {
      "Fondo": "Transatlantica Liquidez Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1280;3564"
    },
    {
      "Fondo": "Transatlantica Liquidez Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1280;3565"
    },
    {
      "Fondo": "Transatlantica Liquidez Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1280;3566"
    },
    {
      "Fondo": "Transatlantica Liquidez Pesos - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1280;3567"
    },
    {
      "Fondo": "Ualintec Ahorro Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1307;3713"
    },
    {
      "Fondo": "Ualintec Ahorro Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1307;3714"
    },
    {
      "Fondo": "Ualintec Ahorro Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1307;3715"
    },
    {
      "Fondo": "Ualintec Renta Fija Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1346;3839"
    },
    {
      "Fondo": "Ualintec Renta Fija Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1346;3840"
    },
    {
      "Fondo": "Ualintec Renta Fija Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1346;3841"
    },
    {
      "Fondo": "Ualintec Renta Variable Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1495;4459"
    },
    {
      "Fondo": "Ualintec Renta Variable Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1495;4460"
    },
    {
      "Fondo": "Ualintec Renta Variable Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1495;4461"
    },
    {
      "Fondo": "Valiant Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=874;2511"
    },
    {
      "Fondo": "Valiant Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=874;2512"
    },
    {
      "Fondo": "Valiant Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=873;2509"
    },
    {
      "Fondo": "Valiant Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=873;2510"
    },
    {
      "Fondo": "Valiant Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=856;2452"
    },
    {
      "Fondo": "Valiant Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=856;2453"
    },
    {
      "Fondo": "Valiant Renta Fija Balanceado I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1446;4248"
    },
    {
      "Fondo": "Valiant Renta Fija Balanceado I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1446;4249"
    },
    {
      "Fondo": "Valiant Renta Fija Balanceado II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1447;4250"
    },
    {
      "Fondo": "Valiant Renta Fija Balanceado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1447;4251"
    },
    {
      "Fondo": "Valiant Renta Fija Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=875;2513"
    },
    {
      "Fondo": "Valiant Renta Fija Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=875;2514"
    },
    {
      "Fondo": "Valiant Renta Fija Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=875;2515"
    },
    {
      "Fondo": "Valiant Renta Fija Dolares - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=875;2516"
    },
    {
      "Fondo": "Valiant Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=855;2450"
    },
    {
      "Fondo": "Valiant Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=855;2451"
    },
    {
      "Fondo": "Valiant Total Return - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=857;2454"
    },
    {
      "Fondo": "Valiant Total Return - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=857;2455"
    },
    {
      "Fondo": "Valiant Total Return - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=857;2456"
    },
    {
      "Fondo": "Valiant Total Return - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=857;2457"
    },
    {
      "Fondo": "Valiant Total Return RP,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1171;3142"
    },
    {
      "Fondo": "Zofingen Dollar Linked - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=821;2292"
    },
    {
      "Fondo": "Zofingen Dollar Linked - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=821;2293"
    },
    {
      "Fondo": "Zofingen Dollar Linked - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=821;2294"
    },
    {
      "Fondo": "Zofingen Factoring Abierto Pyme - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=814;2211"
    },
    {
      "Fondo": "Zofingen Factoring Abierto Pyme - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=814;2212"
    },
    {
      "Fondo": "Zofingen Factoring Abierto Pyme - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=814;2213"
    },
    {
      "Fondo": "Zofingen Factoring Abierto Pyme - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=814;2219"
    },
    {
      "Fondo": "Zofingen Infraestructura - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1411;4112"
    },
    {
      "Fondo": "Zofingen Infraestructura - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1411;4113"
    },
    {
      "Fondo": "Zofingen Infraestructura - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1411;4114"
    },
    {
      "Fondo": "Zofingen Multi Strategy I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1374;3947"
    },
    {
      "Fondo": "Zofingen Multi Strategy I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1374;3948"
    },
    {
      "Fondo": "Zofingen Multi Strategy I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1374;3949"
    },
    {
      "Fondo": "Zofingen Pesos 24 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=809;2127"
    },
    {
      "Fondo": "Zofingen Pesos 24 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=809;2128"
    },
    {
      "Fondo": "Zofingen Pesos 24 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=809;2129"
    },
    {
      "Fondo": "Zofingen Pesos 24 - Clase I,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=809;2135"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2231"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2232"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2233"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2235"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2236"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2237"
    },
    {
      "Fondo": "Zofingen Soberano Plus - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=816;2238"
    },
    {
      "Fondo": "IAM Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1422;4154"
    },
    {
      "Fondo": "IAM Renta Mixta - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1422;4155"
    },
    {
      "Fondo": "IAM Renta Mixta - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1422;4156"
    },
    {
      "Fondo": "IAM Renta Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;1286"
    },
    {
      "Fondo": "IAM Renta Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;1287"
    },
    {
      "Fondo": "IAM Renta Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;1440"
    },
    {
      "Fondo": "IAM Renta Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;1441"
    },
    {
      "Fondo": "IAM Renta Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;2008"
    },
    {
      "Fondo": "IAM Renta Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=633;2009"
    },
    {
      "Fondo": "IAM Renta Variable - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;803"
    },
    {
      "Fondo": "IAM Renta Variable - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;804"
    },
    {
      "Fondo": "IAM Renta Variable - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;1430"
    },
    {
      "Fondo": "IAM Renta Variable - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;1431"
    },
    {
      "Fondo": "IAM Renta Variable - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;1914"
    },
    {
      "Fondo": "IAM Renta Variable - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=430;1915"
    },
    {
      "Fondo": "IEB Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1220;3377"
    },
    {
      "Fondo": "IEB Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1220;3378"
    },
    {
      "Fondo": "IEB Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1220;3379"
    },
    {
      "Fondo": "IEB Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1220;3380"
    },
    {
      "Fondo": "IEB Ahorro - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1220;3381"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2329"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2330"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2331"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2332"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2333"
    },
    {
      "Fondo": "IEB Ahorro Plus - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=827;2334"
    },
    {
      "Fondo": "IEB Estrat\u00e9gico - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1517;4538"
    },
    {
      "Fondo": "IEB Estrat\u00e9gico - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1517;4539"
    },
    {
      "Fondo": "IEB Estructurado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1546;4662"
    },
    {
      "Fondo": "IEB Estructurado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1546;4663"
    },
    {
      "Fondo": "IEB Estructurado II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1548;4699"
    },
    {
      "Fondo": "IEB Estructurado II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1548;4700"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3224"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3225"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3226"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3227"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3228"
    },
    {
      "Fondo": "IEB Multiestrategia - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1191;3229"
    },
    {
      "Fondo": "IEB Multiestrategia II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1331;3799"
    },
    {
      "Fondo": "IEB Multiestrategia II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1331;3800"
    },
    {
      "Fondo": "IEB Multiestrategia II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1331;3801"
    },
    {
      "Fondo": "IEB Multiestrategia III - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1332;3803"
    },
    {
      "Fondo": "IEB Multiestrategia III - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1332;3804"
    },
    {
      "Fondo": "IEB Multiestrategia III - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1332;3805"
    },
    {
      "Fondo": "IEB Multiestrategia IV - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1333;3806"
    },
    {
      "Fondo": "IEB Multiestrategia IV - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1333;3807"
    },
    {
      "Fondo": "IEB Multiestrategia IV - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1333;3808"
    },
    {
      "Fondo": "IEB Multiestrategia V - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1334;3809"
    },
    {
      "Fondo": "IEB Multiestrategia V - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1334;3810"
    },
    {
      "Fondo": "IEB Multiestrategia V - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1334;3811"
    },
    {
      "Fondo": "IEB Pyme - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1225;3396"
    },
    {
      "Fondo": "IEB Pyme - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1225;3397"
    },
    {
      "Fondo": "IEB Pyme - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1225;3398"
    },
    {
      "Fondo": "IEB Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2598"
    },
    {
      "Fondo": "IEB Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2599"
    },
    {
      "Fondo": "IEB Renta Fija - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2600"
    },
    {
      "Fondo": "IEB Renta Fija - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2601"
    },
    {
      "Fondo": "IEB Renta Fija - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2602"
    },
    {
      "Fondo": "IEB Renta Fija - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=891;2603"
    },
    {
      "Fondo": "IEB Renta Fija Dolar - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=892;2604"
    },
    {
      "Fondo": "IEB Renta Fija Dolar - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=892;2605"
    },
    {
      "Fondo": "IEB Renta Fija Dolar - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=892;2606"
    },
    {
      "Fondo": "IEB Renta Fija D\u00f3lar 2 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1434;4204"
    },
    {
      "Fondo": "IEB Renta Fija D\u00f3lar 2 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1434;4205"
    },
    {
      "Fondo": "IEB Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2335"
    },
    {
      "Fondo": "IEB Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2336"
    },
    {
      "Fondo": "IEB Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2337"
    },
    {
      "Fondo": "IEB Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2338"
    },
    {
      "Fondo": "IEB Retorno Total - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2339"
    },
    {
      "Fondo": "IEB Retorno Total - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=828;2340"
    },
    {
      "Fondo": "IEB Value - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2592"
    },
    {
      "Fondo": "IEB Value - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2593"
    },
    {
      "Fondo": "IEB Value - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2594"
    },
    {
      "Fondo": "IEB Value - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2595"
    },
    {
      "Fondo": "IEB Value - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2596"
    },
    {
      "Fondo": "IEB Value - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=890;2597"
    },
    {
      "Fondo": "Integrae Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=715;1542"
    },
    {
      "Fondo": "Integrae Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=715;1543"
    },
    {
      "Fondo": "Integrae Renta Fija - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=717;1546"
    },
    {
      "Fondo": "Integrae Renta Fija - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=717;1547"
    },
    {
      "Fondo": "Integrae Renta Fija Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=837;2378"
    },
    {
      "Fondo": "Integrae Renta Fija Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=837;2379"
    },
    {
      "Fondo": "Integrae Renta Fija Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=837;2380"
    },
    {
      "Fondo": "Integrae SC Retorno Total - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=716;1544"
    },
    {
      "Fondo": "Integrae SC Retorno Total - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=716;1545"
    },
    {
      "Fondo": "Integrae SC Retorno Total - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=716;2440"
    },
    {
      "Fondo": "Integrae SC Retorno Total - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=716;2441"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2276"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2277"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2278"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2279"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2280"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2281"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2282"
    },
    {
      "Fondo": "Intervalores Ahorro - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=819;2283"
    },
    {
      "Fondo": "Intervalores Total Return - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2268"
    },
    {
      "Fondo": "Intervalores Total Return - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2269"
    },
    {
      "Fondo": "Intervalores Total Return - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2270"
    },
    {
      "Fondo": "Intervalores Total Return - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2271"
    },
    {
      "Fondo": "Intervalores Total Return - Clase E,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2272"
    },
    {
      "Fondo": "Intervalores Total Return - Clase F,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2273"
    },
    {
      "Fondo": "Intervalores Total Return - Clase G,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2274"
    },
    {
      "Fondo": "Intervalores Total Return - Clase H,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=818;2275"
    },
    {
      "Fondo": "Julio A. Roca Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1397;4049"
    },
    {
      "Fondo": "Julio A. Roca Ahorro Pesos,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=825;2313"
    },
    {
      "Fondo": "Julio A. Roca Valores Negociables,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=826;2314"
    },
    {
      "Fondo": "FBA Acciones Argentinas - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=433;814"
    },
    {
      "Fondo": "FBA Acciones Argentinas - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=433;815"
    },
    {
      "Fondo": "FBA Acciones Latinoamericana - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=383;693"
    },
    {
      "Fondo": "FBA Acciones Latinoamericana - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=383;694"
    },
    {
      "Fondo": "FBA Ahorro Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=287;287"
    },
    {
      "Fondo": "FBA Ahorro Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=287;895"
    },
    {
      "Fondo": "FBA Bonos Argentina - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=379;681"
    },
    {
      "Fondo": "FBA Bonos Argentina - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=379;682"
    },
    {
      "Fondo": "FBA Bonos Globales - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=435;818"
    },
    {
      "Fondo": "FBA Bonos Globales - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=435;819"
    },
    {
      "Fondo": "FBA Calificado - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=200;200"
    },
    {
      "Fondo": "FBA Calificado - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=200;356"
    },
    {
      "Fondo": "FBA Gestion I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=691;1459"
    },
    {
      "Fondo": "FBA Horizonte,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=322;350"
    },
    {
      "Fondo": "FBA Horizonte Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=745;1648"
    },
    {
      "Fondo": "FBA Horizonte Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=745;1633"
    },
    {
      "Fondo": "FBA Renta Fija D\u00f3lar I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=846;2407"
    },
    {
      "Fondo": "FBA Renta Fija D\u00f3lar I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=846;4554"
    },
    {
      "Fondo": "FBA Renta Fija Local - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=844;2405"
    },
    {
      "Fondo": "FBA Renta Fija Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=434;816"
    },
    {
      "Fondo": "FBA Renta Fija Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=434;817"
    },
    {
      "Fondo": "FBA Renta Mixta - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=690;1492"
    },
    {
      "Fondo": "FBA Renta Mixta - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=690;1458"
    },
    {
      "Fondo": "FBA Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=111;943"
    },
    {
      "Fondo": "FBA Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=111;944"
    },
    {
      "Fondo": "FBA Renta Publica I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=845;3550"
    },
    {
      "Fondo": "FBA Renta Publica I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=845;2406"
    },
    {
      "Fondo": "FBA Retorno Total I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=779;1803"
    },
    {
      "Fondo": "FBA Retorno Total I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=779;1757"
    },
    {
      "Fondo": "FCI Abierto Pymes Potencia Pyme - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=817;2240"
    },
    {
      "Fondo": "FCI Abierto Pymes Potencia Pyme - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=817;2241"
    },
    {
      "Fondo": "FCI Abierto Pymes Potencia Pyme - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=817;2242"
    },
    {
      "Fondo": "FCIC Inmobiliario Al Rio Ley 27260 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=727;1578"
    },
    {
      "Fondo": "FCIC Inmobiliario Al Rio Ley 27260 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=727;1579"
    },
    {
      "Fondo": "FCIC Inmobiliario Puerto Nizuc - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1445;4247"
    },
    {
      "Fondo": "Fima Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=21;21"
    },
    {
      "Fondo": "Fima Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=21;1843"
    },
    {
      "Fondo": "Fima Acciones Latinoamerica - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=851;2426"
    },
    {
      "Fondo": "Fima Acciones Latinoamerica - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=851;2427"
    },
    {
      "Fondo": "Fima Acciones Latinoamerica - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=851;2428"
    },
    {
      "Fondo": "Fima Ahorro Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=193;734"
    },
    {
      "Fondo": "Fima Ahorro Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=193;193"
    },
    {
      "Fondo": "Fima Ahorro Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=193;735"
    },
    {
      "Fondo": "Fima Ahorro Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=500;1008"
    },
    {
      "Fondo": "Fima Ahorro Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=500;1009"
    },
    {
      "Fondo": "Fima Ahorro Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=500;1010"
    },
    {
      "Fondo": "Fima Capital Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=540;1092"
    },
    {
      "Fondo": "Fima Capital Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=540;1093"
    },
    {
      "Fondo": "Fima Capital Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=540;1094"
    },
    {
      "Fondo": "Fima Cartera Sustentable FCI ASG - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1314;3742"
    },
    {
      "Fondo": "Fima Cartera Sustentable FCI ASG - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1314;3743"
    },
    {
      "Fondo": "Fima Cartera Sustentable FCI ASG - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1314;3744"
    },
    {
      "Fondo": "Fima FCI Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=558;1127"
    },
    {
      "Fondo": "Fima FCI Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=558;1128"
    },
    {
      "Fondo": "Fima FCI Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=558;1129"
    },
    {
      "Fondo": "Fima Mix Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1459;4312"
    },
    {
      "Fondo": "Fima Mix Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1459;4313"
    },
    {
      "Fondo": "Fima Mix Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1459;4314"
    },
    {
      "Fondo": "Fima Mix I - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=663;1370"
    },
    {
      "Fondo": "Fima Mix I - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=663;1371"
    },
    {
      "Fondo": "Fima Mix I - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=663;1372"
    },
    {
      "Fondo": "Fima Mix II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1313;3739"
    },
    {
      "Fondo": "Fima Mix II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1313;3740"
    },
    {
      "Fondo": "Fima Mix II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1313;3741"
    },
    {
      "Fondo": "Fima PB Acciones - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=22;22"
    },
    {
      "Fondo": "Fima PB Acciones - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=22;1193"
    },
    {
      "Fondo": "Fima Premium - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=345;575"
    },
    {
      "Fondo": "Fima Premium - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=345;576"
    },
    {
      "Fondo": "Fima Premium - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=345;3736"
    },
    {
      "Fondo": "Fima Premium - Clase P,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=345;4556"
    },
    {
      "Fondo": "Fima Renta Fija Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1460;4315"
    },
    {
      "Fondo": "Fima Renta Fija Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1460;4316"
    },
    {
      "Fondo": "Fima Renta Fija Dolares - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1460;4317"
    },
    {
      "Fondo": "Fima Renta Fija Internacional - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=852;2429"
    },
    {
      "Fondo": "Fima Renta Fija Internacional - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=852;2430"
    },
    {
      "Fondo": "Fima Renta Fija Internacional - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=852;2431"
    },
    {
      "Fondo": "Fima Renta Pesos - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=68;68"
    },
    {
      "Fondo": "Fima Renta Pesos - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=68;1241"
    },
    {
      "Fondo": "Fima Renta Pesos - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=68;1242"
    },
    {
      "Fondo": "Fima Renta Plus - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=191;191"
    },
    {
      "Fondo": "Fima Renta Plus - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=191;805"
    },
    {
      "Fondo": "Fima Renta Plus - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=191;806"
    },
    {
      "Fondo": "First Abierto Pymes - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=719;1551"
    },
    {
      "Fondo": "First Abierto Pymes - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=719;1552"
    },
    {
      "Fondo": "First Abierto Pymes - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=719;1553"
    },
    {
      "Fondo": "First Abierto Pymes - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=719;2556"
    },
    {
      "Fondo": "First Abierto Pymes II - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1265;3516"
    },
    {
      "Fondo": "First Abierto Pymes II - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1265;3517"
    },
    {
      "Fondo": "First Abierto Pymes II - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1265;3518"
    },
    {
      "Fondo": "First Abierto Pymes II - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1265;3519"
    },
    {
      "Fondo": "First Crecimiento - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1187;3207"
    },
    {
      "Fondo": "First Crecimiento - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1187;3208"
    },
    {
      "Fondo": "First Crecimiento - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1187;3209"
    },
    {
      "Fondo": "First Crecimiento - Clase D,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=1187;3210"
    },
    {
      "Fondo": "First Renta Agro FCIC Ley 27260 - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=835;2371"
    },
    {
      "Fondo": "First Renta Agro FCIC Ley 27260 - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=835;2372"
    },
    {
      "Fondo": "First Renta Agro FCIC Ley 27260 - Clase C,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=835;2373"
    },
    {
      "Fondo": "First Renta Dolares - Clase A,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=743;1625"
    },
    {
      "Fondo": "First Renta Dolares - Clase B,",
      "URL": "https://www.cafci.org.ar/ficha-fondo.html?q=743;1626"
    }
  ];

  export default listaFondos;