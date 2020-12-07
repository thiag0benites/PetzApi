#language: pt
#Autor: thi.fam2014@gmail.com
@ALTERAR
Funcionalidade: Alterar dados de uma  estação metereológica
  Eu como usuário 
  Quero alterar os dados de uma estação

  @CT04
  Esquema do Cenario: CT04 : Alterar dados estação
    Dado que envio um PUT para alterar os dados da estacao com id <id> e corpo <external_id>, <name>, <latitude>, <longitude>, <altitude>
    Quando codigo de resposta e "200"
    Entao valido o Schema "cadastraAlterarEstacao"

    Exemplos: 
      | id                         | external_id | name        | latitude | longitude | altitude |
      | "5fcd883309e7430001b9cf6e" | "9"         | "Eatação9"  | "10.76"  | "-13.45"  | "120"    |
      | "5fcd883409e7430001b9cf6f" | "10"        | "Eatação10" | "18.76"  | "-16.45"  | "101"    |
