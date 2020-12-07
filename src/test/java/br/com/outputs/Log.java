package br.com.outputs;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Assert;

import br.com.config.Hooks;

public class Log {
	
	// Escreve logs no console e no reporter cucumber
	public void relatorio(boolean status, String msg) {
		
		Date horaAtual = new Date();
		String dataHora = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(horaAtual);
		
		Hooks.getScenario().write(dataHora + ": " + msg);
		System.out.println(dataHora + ": " + msg);
		
		if (!status) {
			Assert.fail();
		}
	
	}

}
