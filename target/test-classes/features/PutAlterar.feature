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
      | id                         | external_id | name               | latitude | longitude | altitude |
      | "5fcc2ef309e7430001b9cf59" | "1"         | "Estação1" | "10.72"  | "-12.45"  | "120"    |
      | "5fcc653b09e7430001b9cf5e" | "2"         | "Estação2" | "18.78"  | "-16.45"  | "101"    |
