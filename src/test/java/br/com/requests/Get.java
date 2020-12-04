package br.com.requests;

import br.com.outputs.Log;
import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.*;

import java.util.List;
import org.junit.Assert;
import io.restassured.response.Response;

public class Get extends Log{

	private String url = "";

	private Response response;

	public void get(String endPoint, String statusCodeEsperado, String parametro, String valorParam) {

		if (parametro == null) {

			response = given().relaxedHTTPSValidation().when().get(url + endPoint);

		} else {

			response = given().relaxedHTTPSValidation().param(parametro, valorParam).when().get(url + endPoint);

		}

		String body = response.body().asString();
		relatorio(body);
		Assert.assertEquals(Integer.parseInt(statusCodeEsperado), response.statusCode());

	}

	public void getContaPaginas(String endPoint, String pagina, String statusCode, String quant) {

		response = given().relaxedHTTPSValidation().param("Page", pagina).when().get(url + endPoint);

		String body = response.body().asString();

		List<String> jsonResponse = response.jsonPath().getList("$");
		relatorio(body);

		Assert.assertEquals(Integer.parseInt(statusCode), response.statusCode());
		Assert.assertEquals(Integer.parseInt(quant), jsonResponse.size());
	}
	
	public void validaItemBodyJson(String itemNome, String itemValor) {

		response.then().assertThat().assertThat().body(itemNome, equalTo(itemValor));
		
	}

	public void validaSchema(String endPoint, String statusCodeEsperado, String parametro, String valorParam,
			String schemaJson) {

		get(endPoint, statusCodeEsperado, parametro, valorParam);
		response.then().assertThat().body(matchesJsonSchemaInClasspath(schemaJson + ".json"));

	}
	
}
