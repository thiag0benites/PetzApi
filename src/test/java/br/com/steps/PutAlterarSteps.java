package br.com.steps;

import br.com.requests.Requests;
import cucumber.api.java.pt.Dado;

public class PutAlterarSteps extends Requests{

	@Dado("^que envio um PUT para alterar os dados da estacao com id \"([^\"]*)\" e corpo \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void que_envio_um_PUT_para_alterar_os_dados_da_estacao_com_id_e_corpo(String id, String externalId, String name, String latitude, String longitude, String altitude) {
		putAlterar(id, externalId, name, latitude, longitude, altitude);
	}
	
}
