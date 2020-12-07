#language: pt
#Autor: thi.fam2014@gmail.com
@CADASTRAR
Funcionalidade: Cadastrar estação metereológica
  Eu como usuário 
  Quero cadastrar uma ou mais estações

  @CT03
  Esquema do Cenario: CT03 : Cadastra estação
    Dado que envio um POST para cadastrar estacao com o corpo <external_id>, <name>, <latitude>, <longitude>, <altitude>
    Quando codigo de resposta e "201"
    Entao valido o Schema "cadastraAlterarEstacao"

    Exemplos: 
      | external_id | name        | latitude | longitude | altitude |
      | "13"        | "Eatação13" | "17.76"  | "12.45"   | "120"    |
      | "14"        | "Eatação14" | "18.76"  | "16.45"   | "581"    |
