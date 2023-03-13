# Atividade-DAC-01

## 1. Qual a diferença entre image e container?

Image é uma especificação de como criar uma máquina virtual. É criada como um arquivo Dockerfile e pode ser uma customização de uma imagem anterior.
Já um container é uma instância de máquina virtual, gerada a partir de uma imagem. Um container é executável, aloca recursos da máquina física, e pode persistir dados. A finalidade dos containers (e do Docker em si) é executar sem interfir com o sistema hospedeiro e demais containers.


## 2. Qual a diferença entre os comandos COPY, EXPOSE e ADD?

O comando COPY copia arquivos ou diretórios para a imagem. Um exemplo de caso desse comando é copiar arquivos de código de um projeto para a imagem, para que seja posteriormente executado.
O comando EXPOSE faz com que imagem possa a escutar uma porta. Esse comando não necessariamente faz com que uma porta externa seja utilizada. Um exemplo de uso é disponibilizar um banco de dados para outros containers na mesma rede interna.


## 5º Qual a diferença entre os comandos docker stop <container_id> e docker kill <container_id>? 

R.: A pricipal diferença é que o docker kill vai parar o processo imediatamente, mesmo que de forma forçada. Já o docker stop vai esperar o processo realizar a tarefa em execução antes de interrompelo. Além disso, o docker kill permite que você passe flags para o processo principal do container, enquanto o docker stop não permite.
