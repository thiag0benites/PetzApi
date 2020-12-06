#language: pt
#Autor: thi.fam2014@gmail.com
@CONSULTA
Funcionalidade: Consulta estação metereológica
  Eu como usuário 
  Quero consultar uma ou mais estações

  @CT01
  Cenario: CT01:Consulta todas estações
    Dado que envio um GET com a API KEY por parametro
    E o Response Code me retorna status "200"
    Entao valido o Schema "consultaTodasEstacoes"