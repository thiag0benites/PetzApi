#language: pt
#Autor: thi.fam2014@gmail.com
@EXCLUIR
Funcionalidade: Excluir uma  estação metereológica
  Eu como usuário 
  Quero excluir uma estação

  @CT05
  Esquema do Cenario: CT05 : Excluir estação
    Dado que envio um DELETE para excluir a estacao com id <id>
    Entao codigo de resposta e "204"

    Exemplos: 
      | id                         |
      | "5fcda2f609e7430001b9cf7a" | 