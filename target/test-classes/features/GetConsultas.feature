#language: pt
#Autor: thi.fam2014@gmail.com
@CONSULTAR
Funcionalidade: Consulta estação metereológica
  Eu como usuário 
  Quero consultar uma ou mais estações

  @CT01
  Cenario: CT01 : Consulta todas estações
  Dado que envio um GET para consultar todas as estacoes
  Quando codigo de resposta e "200"
  Entao valido o Schema "consultaTodasEstacoes"
  
  @CT02
  Esquema do Cenario: CT02 : Consulta estação
    Dado que envio um GET para consultar a estacao com ID <ID>
    E codigo de resposta e "200"
    Quando valido o Schema "consultaEstacao"
    Entao valido o nome da estacao <Estacao>

    Exemplos: 
      | ID                         | Estacao    |
      | "5fcc653b09e7430001b9cf5e" | "Estação2" |
      | "5fcc2ef309e7430001b9cf59" | "Estação1" |