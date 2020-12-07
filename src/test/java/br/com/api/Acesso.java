package br.com.api;

// Dados básicos para envio da requisição

public class Acesso {

	private static String uri = "http://api.openweathermap.org/data/3.0/stations";
	
	public static String getUri() {
		return uri;
	}

	private static String apiKey = "7f0be18a1fa82153f3e507804b700e3b";

	public static String getApiKey() {
		return apiKey;
	}
	
}
