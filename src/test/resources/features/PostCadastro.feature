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
    Entao valido o Schema "cadastraEstacao"

    Exemplos: 
      | external_id | name        | latitude | longitude | altitude |
      | "9"         | "Eatação9"  | "17.76"  | "12.45"   | "120"    |
      | "10"        | "Eatação10" | "18.76"  | "16.45"   | "581"    |