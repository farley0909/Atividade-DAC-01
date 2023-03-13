# Atividade-DAC-01

## 5º Qual a diferença entre os comandos docker stop <container_id> e docker kill <container_id>? 

R.: A pricipal diferença é que o docker kill vai parar o processo imediatamente, mesmo que de forma forçada. Já o docker stop vai esperar o processo realizar a tarefa em execução antes de interrompelo. Além disso, o docker kill permite que você passe flags para o processo principal do container, enquanto o docker stop não permite.
