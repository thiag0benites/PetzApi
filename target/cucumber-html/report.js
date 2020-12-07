$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DeleteExcluir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: thi.fam2014@gmail.com"
    }
  ],
  "line": 4,
  "name": "Excluir uma  estação metereológica",
  "description": "Eu como usuário \r\nQuero excluir uma estação",
  "id": "excluir-uma--estação-metereológica",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@EXCLUIR"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "CT05 : Excluir estação",
  "description": "",
  "id": "excluir-uma--estação-metereológica;ct05-:-excluir-estação",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT05"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um DELETE para excluir a estacao com id \u003cid\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"204\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "excluir-uma--estação-metereológica;ct05-:-excluir-estação;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 14,
      "id": "excluir-uma--estação-metereológica;ct05-:-excluir-estação;;1"
    },
    {
      "cells": [
        "\"5fcda1b709e7430001b9cf77\""
      ],
      "line": 15,
      "id": "excluir-uma--estação-metereológica;ct05-:-excluir-estação;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 129800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CT05 : Excluir estação",
  "description": "",
  "id": "excluir-uma--estação-metereológica;ct05-:-excluir-estação;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT05"
    },
    {
      "line": 3,
      "name": "@EXCLUIR"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um DELETE para excluir a estacao com id \"5fcda1b709e7430001b9cf77\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"204\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5fcda1b709e7430001b9cf77",
      "offset": 51
    }
  ],
  "location": "DeleteExcluirSteps.que_envio_um_DELETE_para_excluir_a_estacao_com_id(String)"
});
formatter.write("07/12/2020 00:32:44: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! DELETE para Excluir estação enviado com sucesso!");
formatter.result({
  "duration": 1986143100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:44: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 204");
formatter.result({
  "duration": 327000,
  "status": "passed"
});
formatter.after({
  "duration": 30500,
  "status": "passed"
});
formatter.uri("GetConsultas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: thi.fam2014@gmail.com"
    }
  ],
  "line": 4,
  "name": "Consulta estação metereológica",
  "description": "Eu como usuário \nQuero consultar uma ou mais estações",
  "id": "consulta-estação-metereológica",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@CONSULTAR"
    }
  ]
});
formatter.before({
  "duration": 38400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "CT01 : Consulta todas estações",
  "description": "",
  "id": "consulta-estação-metereológica;ct01-:-consulta-todas-estações",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT01"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um GET para consultar todas as estacoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"200\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"consultaTodasEstacoes\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GetConsultasSteps.que_envio_um_GET_para_consultar_todas_as_estacoes()"
});
formatter.write("07/12/2020 00:32:45: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! GET para Consultar todas as estações enviado com sucesso!");
formatter.result({
  "duration": 582251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:45: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 200");
formatter.result({
  "duration": 287500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consultaTodasEstacoes",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:45: JSON resposta:\n[\n    {\n        \"id\": \"5fcc2ef309e7430001b9cf59\",\n        \"created_at\": \"2020-12-06T01:08:03.525Z\",\n        \"updated_at\": \"2020-12-06T01:08:03.525Z\",\n        \"external_id\": \"1\",\n        \"name\": \"Estação1\",\n        \"longitude\": -122.43,\n        \"latitude\": 37.76,\n        \"altitude\": 150,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcc653b09e7430001b9cf5e\",\n        \"created_at\": \"2020-12-06T04:59:39.992Z\",\n        \"updated_at\": \"2020-12-06T04:59:39.992Z\",\n        \"external_id\": \"2\",\n        \"name\": \"Estação2\",\n        \"longitude\": -122.43,\n        \"latitude\": 37.76,\n        \"altitude\": 150,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fccf0d809e7430001b9cf5f\",\n        \"created_at\": \"2020-12-06T14:55:20.974Z\",\n        \"updated_at\": \"2020-12-06T14:55:20.974Z\",\n        \"external_id\": \"3\",\n        \"name\": \"Estação3\",\n        \"longitude\": -122.43,\n        \"latitude\": 37.76,\n        \"altitude\": 150,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcd052c09e7430001b9cf60\",\n        \"created_at\": \"2020-12-06T16:22:04.38Z\",\n        \"updated_at\": \"2020-12-06T16:22:04.38Z\",\n        \"external_id\": \"4\",\n        \"name\": \"Estação4\",\n        \"longitude\": 12.43,\n        \"latitude\": 17.76,\n        \"altitude\": 10,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcd063509e7430001b9cf61\",\n        \"created_at\": \"2020-12-06T16:26:29.404Z\",\n        \"updated_at\": \"2020-12-06T16:26:29.404Z\",\n        \"external_id\": \"5\",\n        \"name\": \"Estação5\",\n        \"longitude\": 12.43,\n        \"latitude\": 17.76,\n        \"altitude\": 10,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcd080b09e7430001b9cf62\",\n        \"created_at\": \"2020-12-06T16:34:19.836Z\",\n        \"updated_at\": \"2020-12-06T16:34:19.836Z\",\n        \"external_id\": \"6\",\n        \"name\": \"Estação6\",\n        \"longitude\": 12.43,\n        \"latitude\": 17.76,\n        \"altitude\": 10,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcd08ae09e7430001b9cf63\",\n        \"created_at\": \"2020-12-06T16:37:02.666Z\",\n        \"updated_at\": \"2020-12-07T03:28:58.163Z\",\n        \"external_id\": \"7\",\n        \"name\": \"Eatação7\",\n        \"longitude\": -13.45,\n        \"latitude\": 10.76,\n        \"altitude\": 120,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcda17809e7430001b9cf75\",\n        \"created_at\": \"2020-12-07T03:28:56.264Z\",\n        \"updated_at\": \"2020-12-07T03:28:56.264Z\",\n        \"external_id\": \"8\",\n        \"name\": \"Eatação8\",\n        \"longitude\": 12.45,\n        \"latitude\": 17.76,\n        \"altitude\": 120,\n        \"rank\": 10\n    },\n    {\n        \"id\": \"5fcda17909e7430001b9cf76\",\n        \"created_at\": \"2020-12-07T03:28:57.224Z\",\n        \"updated_at\": \"2020-12-07T03:28:57.224Z\",\n        \"external_id\": \"9\",\n        \"name\": \"Eatação9\",\n        \"longitude\": 16.45,\n        \"latitude\": 18.76,\n        \"altitude\": 581,\n        \"rank\": 10\n    }\n]");
formatter.result({
  "duration": 359282600,
  "status": "passed"
});
formatter.after({
  "duration": 32100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "CT02 : Consulta estação",
  "description": "",
  "id": "consulta-estação-metereológica;ct02-:-consulta-estação",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para consultar a estacao com ID \u003cID\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "codigo de resposta e \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "valido o Schema \"consultaEstacao\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "valido o nome da estacao \u003cEstacao\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "consulta-estação-metereológica;ct02-:-consulta-estação;",
  "rows": [
    {
      "cells": [
        "ID",
        "Estacao"
      ],
      "line": 22,
      "id": "consulta-estação-metereológica;ct02-:-consulta-estação;;1"
    },
    {
      "cells": [
        "\"5fcc653b09e7430001b9cf5e\"",
        "\"Estação2\""
      ],
      "line": 23,
      "id": "consulta-estação-metereológica;ct02-:-consulta-estação;;2"
    },
    {
      "cells": [
        "\"5fcc2ef309e7430001b9cf59\"",
        "\"Estação1\""
      ],
      "line": 24,
      "id": "consulta-estação-metereológica;ct02-:-consulta-estação;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 31900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "CT02 : Consulta estação",
  "description": "",
  "id": "consulta-estação-metereológica;ct02-:-consulta-estação;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@CONSULTAR"
    },
    {
      "line": 14,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para consultar a estacao com ID \"5fcc653b09e7430001b9cf5e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "codigo de resposta e \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "valido o Schema \"consultaEstacao\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "valido o nome da estacao \"Estação2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5fcc653b09e7430001b9cf5e",
      "offset": 50
    }
  ],
  "location": "GetConsultasSteps.que_envio_um_GET_para_consultar_a_estacao_com_ID(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! GET para Consultar todas as estações enviado com sucesso!");
formatter.result({
  "duration": 541625000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 200");
formatter.result({
  "duration": 304200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consultaEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:46: JSON resposta:\n{\n    \"id\": \"5fcc653b09e7430001b9cf5e\",\n    \"created_at\": \"2020-12-06T04:59:39.992Z\",\n    \"updated_at\": \"2020-12-06T04:59:39.992Z\",\n    \"external_id\": \"2\",\n    \"name\": \"Estação2\",\n    \"longitude\": -122.43,\n    \"latitude\": 37.76,\n    \"altitude\": 150,\n    \"rank\": 10\n}");
formatter.result({
  "duration": 5739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estação2",
      "offset": 26
    }
  ],
  "location": "GetConsultasSteps.valido_o_nome_da_estacao(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Item localizado no corpo de respostas!\n\"name\": \"Estação2\"");
formatter.result({
  "duration": 350400,
  "status": "passed"
});
formatter.after({
  "duration": 23200,
  "status": "passed"
});
formatter.before({
  "duration": 42500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CT02 : Consulta estação",
  "description": "",
  "id": "consulta-estação-metereológica;ct02-:-consulta-estação;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@CONSULTAR"
    },
    {
      "line": 14,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para consultar a estacao com ID \"5fcc2ef309e7430001b9cf59\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "codigo de resposta e \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "valido o Schema \"consultaEstacao\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "valido o nome da estacao \"Estação1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5fcc2ef309e7430001b9cf59",
      "offset": 50
    }
  ],
  "location": "GetConsultasSteps.que_envio_um_GET_para_consultar_a_estacao_com_ID(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! GET para Consultar todas as estações enviado com sucesso!");
formatter.result({
  "duration": 558813100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 200");
formatter.result({
  "duration": 303400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consultaEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:46: JSON resposta:\n{\n    \"id\": \"5fcc2ef309e7430001b9cf59\",\n    \"created_at\": \"2020-12-06T01:08:03.525Z\",\n    \"updated_at\": \"2020-12-06T01:08:03.525Z\",\n    \"external_id\": \"1\",\n    \"name\": \"Estação1\",\n    \"longitude\": -122.43,\n    \"latitude\": 37.76,\n    \"altitude\": 150,\n    \"rank\": 10\n}");
formatter.result({
  "duration": 5007100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estação1",
      "offset": 26
    }
  ],
  "location": "GetConsultasSteps.valido_o_nome_da_estacao(String)"
});
formatter.write("07/12/2020 00:32:46: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Item localizado no corpo de respostas!\n\"name\": \"Estação1\"");
formatter.result({
  "duration": 326300,
  "status": "passed"
});
formatter.after({
  "duration": 23900,
  "status": "passed"
});
formatter.uri("PostCadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: thi.fam2014@gmail.com"
    }
  ],
  "line": 4,
  "name": "Cadastrar estação metereológica",
  "description": "Eu como usuário \nQuero cadastrar uma ou mais estações",
  "id": "cadastrar-estação-metereológica",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@CADASTRAR"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "CT03 : Cadastra estação",
  "description": "",
  "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT03"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um POST para cadastrar estacao com o corpo \u003cexternal_id\u003e, \u003cname\u003e, \u003clatitude\u003e, \u003clongitude\u003e, \u003caltitude\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"201\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;",
  "rows": [
    {
      "cells": [
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 15,
      "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;;1"
    },
    {
      "cells": [
        "\"11\"",
        "\"Eatação11\"",
        "\"17.76\"",
        "\"12.45\"",
        "\"120\""
      ],
      "line": 16,
      "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;;2"
    },
    {
      "cells": [
        "\"12\"",
        "\"Eatação12\"",
        "\"18.76\"",
        "\"16.45\"",
        "\"581\""
      ],
      "line": 17,
      "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 32300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CT03 : Cadastra estação",
  "description": "",
  "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT03"
    },
    {
      "line": 3,
      "name": "@CADASTRAR"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um POST para cadastrar estacao com o corpo \"11\", \"Eatação11\", \"17.76\", \"12.45\", \"120\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"201\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 54
    },
    {
      "val": "Eatação11",
      "offset": 60
    },
    {
      "val": "17.76",
      "offset": 73
    },
    {
      "val": "12.45",
      "offset": 82
    },
    {
      "val": "120",
      "offset": 91
    }
  ],
  "location": "PostCadastroSteps.que_envio_um_POST_para_cadastrar_estacao_com_o_corpo(String,String,String,String,String)"
});
formatter.write("07/12/2020 00:32:47: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! POST para Cadastrar estação enviado com sucesso!");
formatter.result({
  "duration": 603074100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:47: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 201");
formatter.result({
  "duration": 261800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cadastraAlterarEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:47: JSON resposta:\n{\n    \"ID\": \"5fcda25f09e7430001b9cf78\",\n    \"updated_at\": \"2020-12-07T03:32:47.381176457Z\",\n    \"created_at\": \"2020-12-07T03:32:47.381176286Z\",\n    \"user_id\": \"5fcc15ad3da20c000757263f\",\n    \"external_id\": \"11\",\n    \"name\": \"Eatação11\",\n    \"latitude\": 17.76,\n    \"longitude\": 12.45,\n    \"altitude\": 120,\n    \"rank\": 10,\n    \"source_type\": 5\n}");
formatter.result({
  "duration": 4717700,
  "status": "passed"
});
formatter.after({
  "duration": 28100,
  "status": "passed"
});
formatter.before({
  "duration": 31000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CT03 : Cadastra estação",
  "description": "",
  "id": "cadastrar-estação-metereológica;ct03-:-cadastra-estação;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT03"
    },
    {
      "line": 3,
      "name": "@CADASTRAR"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um POST para cadastrar estacao com o corpo \"12\", \"Eatação12\", \"18.76\", \"16.45\", \"581\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"201\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    },
    {
      "val": "Eatação12",
      "offset": 60
    },
    {
      "val": "18.76",
      "offset": 73
    },
    {
      "val": "16.45",
      "offset": 82
    },
    {
      "val": "581",
      "offset": 91
    }
  ],
  "location": "PostCadastroSteps.que_envio_um_POST_para_cadastrar_estacao_com_o_corpo(String,String,String,String,String)"
});
formatter.write("07/12/2020 00:32:48: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! POST para Cadastrar estação enviado com sucesso!");
formatter.result({
  "duration": 555002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:48: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 201");
formatter.result({
  "duration": 277900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cadastraAlterarEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:48: JSON resposta:\n{\n    \"ID\": \"5fcda25f09e7430001b9cf79\",\n    \"updated_at\": \"2020-12-07T03:32:47.942713037Z\",\n    \"created_at\": \"2020-12-07T03:32:47.942712883Z\",\n    \"user_id\": \"5fcc15ad3da20c000757263f\",\n    \"external_id\": \"12\",\n    \"name\": \"Eatação12\",\n    \"latitude\": 18.76,\n    \"longitude\": 16.45,\n    \"altitude\": 581,\n    \"rank\": 10,\n    \"source_type\": 5\n}");
formatter.result({
  "duration": 6777900,
  "status": "passed"
});
formatter.after({
  "duration": 39100,
  "status": "passed"
});
formatter.uri("PutAlterar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: thi.fam2014@gmail.com"
    }
  ],
  "line": 4,
  "name": "Alterar dados de uma  estação metereológica",
  "description": "Eu como usuário \r\nQuero alterar os dados de uma estação",
  "id": "alterar-dados-de-uma--estação-metereológica",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@ALTERAR"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "CT04 : Alterar dados estação",
  "description": "",
  "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT04"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um PUT para alterar os dados da estacao com id \u003cid\u003e e corpo \u003cexternal_id\u003e, \u003cname\u003e, \u003clatitude\u003e, \u003clongitude\u003e, \u003caltitude\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"200\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;",
  "rows": [
    {
      "cells": [
        "id",
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 15,
      "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;;1"
    },
    {
      "cells": [
        "\"5fcc2ef309e7430001b9cf59\"",
        "\"1\"",
        "\"Estação1\"",
        "\"10.76\"",
        "\"-13.45\"",
        "\"120\""
      ],
      "line": 16,
      "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;;2"
    },
    {
      "cells": [
        "\"5fcc653b09e7430001b9cf5e\"",
        "\"2\"",
        "\"Estação2\"",
        "\"18.76\"",
        "\"-16.45\"",
        "\"101\""
      ],
      "line": 17,
      "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 38900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CT04 : Alterar dados estação",
  "description": "",
  "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT04"
    },
    {
      "line": 3,
      "name": "@ALTERAR"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um PUT para alterar os dados da estacao com id \"5fcc2ef309e7430001b9cf59\" e corpo \"1\", \"Estação1\", \"10.76\", \"-13.45\", \"120\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"200\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5fcc2ef309e7430001b9cf59",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 93
    },
    {
      "val": "Estação1",
      "offset": 98
    },
    {
      "val": "10.76",
      "offset": 110
    },
    {
      "val": "-13.45",
      "offset": 119
    },
    {
      "val": "120",
      "offset": 129
    }
  ],
  "location": "PutAlterarSteps.que_envio_um_PUT_para_alterar_os_dados_da_estacao_com_id_e_corpo(String,String,String,String,String,String)"
});
formatter.write("07/12/2020 00:32:48: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! PUT para Alterar dados da estação enviado com sucesso!");
formatter.result({
  "duration": 575338000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:48: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 200");
formatter.result({
  "duration": 250600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cadastraAlterarEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:48: JSON resposta:\n{\n    \"id\": \"5fcc2ef309e7430001b9cf59\",\n    \"created_at\": \"2020-12-06T01:08:03.525Z\",\n    \"updated_at\": \"2020-12-07T03:32:48.53364481Z\",\n    \"external_id\": \"1\",\n    \"name\": \"Estação1\",\n    \"longitude\": -13.45,\n    \"latitude\": 10.76,\n    \"altitude\": 120,\n    \"rank\": 0\n}");
formatter.result({
  "duration": 13062000,
  "status": "passed"
});
formatter.after({
  "duration": 28600,
  "status": "passed"
});
formatter.before({
  "duration": 32600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CT04 : Alterar dados estação",
  "description": "",
  "id": "alterar-dados-de-uma--estação-metereológica;ct04-:-alterar-dados-estação;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT04"
    },
    {
      "line": 3,
      "name": "@ALTERAR"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um PUT para alterar os dados da estacao com id \"5fcc653b09e7430001b9cf5e\" e corpo \"2\", \"Estação2\", \"18.76\", \"-16.45\", \"101\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "codigo de resposta e \"200\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"cadastraAlterarEstacao\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5fcc653b09e7430001b9cf5e",
      "offset": 58
    },
    {
      "val": "2",
      "offset": 93
    },
    {
      "val": "Estação2",
      "offset": 98
    },
    {
      "val": "18.76",
      "offset": 110
    },
    {
      "val": "-16.45",
      "offset": 119
    },
    {
      "val": "101",
      "offset": 129
    }
  ],
  "location": "PutAlterarSteps.que_envio_um_PUT_para_alterar_os_dados_da_estacao_com_id_e_corpo(String,String,String,String,String,String)"
});
formatter.write("07/12/2020 00:32:49: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! PUT para Alterar dados da estação enviado com sucesso!");
formatter.result({
  "duration": 561758200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetConsultasSteps.codigo_de_resposta_e(String)"
});
formatter.write("07/12/2020 00:32:49: Acesso.getUri(): http://api.openweathermap.org/data/3.0/stations\nPassou! Código de resposta é 200");
formatter.result({
  "duration": 248000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cadastraAlterarEstacao",
      "offset": 17
    }
  ],
  "location": "GetConsultasSteps.valido_o_Schema(String)"
});
formatter.write("07/12/2020 00:32:49: JSON resposta:\n{\n    \"id\": \"5fcc653b09e7430001b9cf5e\",\n    \"created_at\": \"2020-12-06T04:59:39.992Z\",\n    \"updated_at\": \"2020-12-07T03:32:49.112454299Z\",\n    \"external_id\": \"2\",\n    \"name\": \"Estação2\",\n    \"longitude\": -16.45,\n    \"latitude\": 18.76,\n    \"altitude\": 101,\n    \"rank\": 0\n}");
formatter.result({
  "duration": 4348600,
  "status": "passed"
});
formatter.after({
  "duration": 49000,
  "status": "passed"
});
});