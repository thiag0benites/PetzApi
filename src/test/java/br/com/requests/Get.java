package br.com.requests;

import br.com.api.Acesso;
import br.com.outputs.Log;
import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.*;

import java.util.List;
import org.junit.Assert;
import io.restassured.response.Response;

public class Get extends Log {

	private Response response;

	public void getConsultaTudo() {

		try {
			response = given().relaxedHTTPSValidation().param("appid", Acesso.getApiKey()).when().get(Acesso.getUri());
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! GET para Consultar todas as estações enviado com sucesso!");

		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Não foi possível enviar o GET!");
		}

	}

	public void getConsultaUm(String id) {

		try {
			response = given().relaxedHTTPSValidation().param("appid", Acesso.getApiKey()).when()
					.get(Acesso.getUri() + "/" + id);
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! GET para Consultar uma estação enviado com sucesso!");

		} catch (Exception e) {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Não foi possível enviar o GET!");
		}

	}

	public void validaStatusCode(String statusCodeEsperado) {

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
		
		// Validação personalizada para relatório
		String strBody = response.getBody().asString();
		String itemProcurado = "\"" + itemNome + "\": \"" + itemValor + "\"" ;
		
		if (strBody.contains(itemProcurado)) {
			relatorio(true, "Acesso.getUri(): " + Acesso.getUri() + "\nPassou! Item localizado no corpo de respostas!\n" + itemProcurado);
		} else {
			relatorio(false, "Acesso.getUri(): " + Acesso.getUri() + "\nFalhou! Item não foi localizado no corpo de respostas!" + itemProcurado);
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
