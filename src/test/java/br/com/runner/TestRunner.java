package br.com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
					features = {"src/test/resources/features"},
					plugin = {
								"pretty",
								"html:target/cucumber-html",
								"json:target/cucumber-report/cucumber.json"
							},
					glue = {""},
					tags = {""}
				)

public class TestRunner {

}
