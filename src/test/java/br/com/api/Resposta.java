package br.com.api;

import io.restassured.response.Response;

public class Resposta {

	private static Response resposta;

	public static Response getResposta() {
		return resposta;
	}

	public static void setResposta(Response resposta) {
		Resposta.resposta = resposta;
	}
	
}
