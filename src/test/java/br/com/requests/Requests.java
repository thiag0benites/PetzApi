package br.com.requests;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import br.com.api.Acesso;
import br.com.api.Resposta;
import br.com.outputs.Log;
import io.restassured.http.ContentType;
import io.restassured.response.Response;


public class Requests extends Log {

	// **************************************************************************************************************************************
	// GET
	// **************************************************************************************************************************************
	public void getEstacoes() {
		
		try {
			Resposta.setResposta(given().relaxedHTTPSValidation().param("appid", Acesso.getApiKey()).when().get(Acesso.getUri()));
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! GET para Consultar todas as estações enviado com sucesso!");
			
		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Não foi possível enviar o GET!");	
		}

	}

	public void getEstacao(String id) {
		
		try {
			Resposta.setResposta(given().relaxedHTTPSValidation().param("appid", Acesso.getApiKey()).when().get(Acesso.getUri() + "/" + id));
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! GET para Consultar todas as estações enviado com sucesso!");
			
		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Não foi possível enviar o GET!");	
		}

	}

	public void validaStatusCode(String statusCodeEsperado) {

		Response response = Resposta.getResposta();
		
		try {

			if (Integer.parseInt(statusCodeEsperado) == response.statusCode()) {
				relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! Código de resposta é " + statusCodeEsperado);
			} else {
				relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Código de resposta diferente do esperado!\nEsperado: "
						+ Integer.parseInt(statusCodeEsperado) + "\nObtido: " + response.statusCode());
			}

		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Erro ao tentar obter o código de resposta!");
		}

	}

	public void validaSchema(String schemaJson) {

		Response response = Resposta.getResposta();
		relatorio(true, "JSON resposta:\n" + response.getBody().prettyPrint());

		try {
			response.then().assertThat().body(matchesJsonSchemaInClasspath(schemaJson + ".json"));
			
		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Erro ao tentar validar o schema da resposta!");
		}

	}
	
	public void validaItemResposta(String itemNome, String itemValor) {

		// Validação padrão rest
		//response.then().assertThat().assertThat().body(itemNome, equalTo(itemValor));
		
		Response response = Resposta.getResposta();
		
		// Validação personalizada para relatório
		String strBody = response.getBody().asString();
		String itemProcurado = "\"" + itemNome + "\": \"" + itemValor + "\"" ;
		
		if (strBody.contains(itemProcurado)) {
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! Item localizado no corpo de respostas!\n" + itemProcurado);
		} else {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Item não foi localizado no corpo de respostas!" + itemProcurado);
		}
		
	}
	
	// **************************************************************************************************************************************
	// POST
	// **************************************************************************************************************************************
	public void postCadastrar(String externalId, String name, String latitude, String longitude, String altitude) {
		
//		JSONObject requestParams = new JSONObject();
//		requestParams.put("external_id", "4");
//		requestParams.put("name", "Estação4");
//		requestParams.put("latitude", 17.76);
//		requestParams.put("longitude", 12.43);
//		requestParams.put("altitude", 10);
		
		Float flLatitude = Float.parseFloat(latitude);
		Float flLongitude = Float.parseFloat(longitude);
		int intAltitude = Integer.parseInt(altitude);
		
		String strJson = "{\"external_id\":\"" + externalId + "\",\"name\":\"" + name + "\",\"latitude\":" + flLatitude + ",\"longitude\":" + flLongitude + ",\"altitude\":" + intAltitude + "}";

		try {
			Resposta.setResposta(given()
					.relaxedHTTPSValidation()
					.contentType(ContentType.JSON)
					.queryParam("appid", Acesso.getApiKey())
					.body(strJson)
				  .when()
				  	.post(Acesso.getUri()));
			
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! POST para Cadastrar estação enviado com sucesso!");
			
		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Não foi possível enviar o POST!");
		}
		
	}
	
	
//	public void get(String endPoint, String statusCodeEsperado, String parametro, String valorParam) {
//
//		if (parametro == null) {
//
//			response = given().relaxedHTTPSValidation().when().get(Acesso.getUri() + endPoint);
//
//		} else {
//
//			response = given().relaxedHTTPSValidation().param(parametro, valorParam).when().get(Acesso.getUri() + endPoint);
//
//		}
//
//		String body = response.body().asString();
//		relatorio(body);
//		Assert.assertEquals(Integer.parseInt(statusCodeEsperado), response.statusCode());
//
//	}
//
//	public void getContaPaginas(String endPoint, String pagina, String statusCode, String quant) {
//
//		response = given().relaxedHTTPSValidation().param("Page", pagina).when().get(Acesso.getUri() + endPoint);
//
//		String body = response.body().asString();
//
//		List<String> jsonResponse = response.jsonPath().getList("$");
//		relatorio(body);
//
//		Assert.assertEquals(Integer.parseInt(statusCode), response.statusCode());
//		Assert.assertEquals(Integer.parseInt(quant), jsonResponse.size());
//	}


//
//	public void validaSchema(String endPoint, String statusCodeEsperado, String parametro, String valorParam,
//			String schemaJson) {
//
////		get(endPoint, statusCodeEsperado, parametro, valorParam);
//		response.then().assertThat().body(matchesJsonSchemaInClasspath(schemaJson + ".json"));
//
//	}
//	
}
