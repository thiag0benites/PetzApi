package br.com.outputs;

import java.text.SimpleDateFormat;
import java.util.Date;
import br.com.config.Hooks;

public class Log {
	
	Date horaAtual;
	
	public void relatorio(String msg) {
		
		horaAtual = new Date();
		String dataHora = new SimpleDateFormat("HH:mm:ss").format(horaAtual);
		
		Hooks.getScenario().write(dataHora + ": " + msg);
		System.out.println(dataHora + ": " + msg);
	
	}

}
