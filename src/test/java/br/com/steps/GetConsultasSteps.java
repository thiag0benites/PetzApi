package br.com.steps;

import br.com.requests.Get;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class GetConsultasSteps extends Get{
	
	@Dado("^que envio um GET para consultar todas as estacoes$")
	public void que_envio_um_GET_para_consultar_todas_as_estacoes() {
		getConsultaTudo();
	}
	
	@Dado("^que envio um GET para consultar a estacao com ID \"([^\"]*)\"$")
	public void que_envio_um_GET_para_consultar_a_estacao_com_ID(String id) throws Throwable {
		getConsultaUm(id);
	}

	@Entao("^valido o nome da estacao \"([^\"]*)\"$")
	public void valido_o_nome_da_estacao(String estacao) throws Throwable {
		validaItemResposta("name", estacao);
	}

	@Quando("^codigo de resposta e \"([^\"]*)\"$")
	public void codigo_de_resposta_e(String statusCode) {
		validaStatusCode(statusCode);
	}
	
	@Entao("^valido o Schema \"([^\"]*)\"$")
	public void valido_o_Schema(String schemaJson) {
		validaSchema(schemaJson);
	}

}
