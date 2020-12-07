package br.com.steps;

import br.com.requests.Requests;
import cucumber.api.java.pt.Dado;

public class DeleteExcluirSteps extends Requests{
	
	@Dado("^que envio um DELETE para excluir a estacao com id \"([^\"]*)\"$")
	public void que_envio_um_DELETE_para_excluir_a_estacao_com_id(String id) {
		deleteExcluir(id);
	}

}