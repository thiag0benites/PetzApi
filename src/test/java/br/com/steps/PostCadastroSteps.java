package br.com.steps;

import br.com.requests.Requests;
import cucumber.api.java.pt.Dado;
import io.restassured.response.Response;

public class PostCadastroSteps extends Requests{
	
	Response resposta;
	
	@Dado("^que envio um POST para cadastrar estacao com o corpo \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void que_envio_um_POST_para_cadastrar_estacao_com_o_corpo(String external_id, String name, String latitude, String longitude, String altitude) {
		postCadastrar(external_id, name, latitude, longitude, altitude);
	}


}
