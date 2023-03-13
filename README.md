# Atividade-DAC-01

## 1. Qual a diferença entre image e container?

Image é uma especificação de como criar uma máquina virtual. É criada como um arquivo Dockerfile e pode ser uma customização de uma imagem anterior.
Já um container é uma instância de máquina virtual, gerada a partir de uma imagem. Um container é executável, aloca recursos da máquina física, e pode persistir dados. A finalidade dos containers (e do Docker em si) é executar sem interfir com o sistema hospedeiro e demais containers.


## 2. Qual a diferença entre os comandos COPY, EXPOSE e ADD?

O comando EXPOSE faz com que imagem possa a escutar uma porta. Esse comando não necessariamente faz com que uma porta externa seja utilizada. Um exemplo de uso é disponibilizar um banco de dados para outros containers na mesma rede interna.  
O comando COPY copia arquivos ou diretórios para a imagem. Um exemplo de caso desse comando é copiar arquivos de código de um projeto para a imagem, para que seja posteriormente executado.  
E o commando ADD é basicamente o comando COPY, mas com suporte a URL's em vez de apenas arquivos locais e que automaticamente descomprime arquivos tar.

## 3º Qual a diferença entre os comandos RUN, CMD e ENTRYPOINT?

Docker RUN e comando que executa um determinado container o mesmo pode estar alocado localmente ou remoto pois o mesmo possui o mesmo o mesmo tem toda uma infraestrutura.
CMD tem a função fornecer padrões ao contêiner no momento da execução já ENTRYPOINT tem a função especificar as instruções contida no CMD no momento da execução do container.
A Diferença entre os três comandos e que Docker RUN irá executar o container juntamente com os comandos contidos no CMD e logo o usuário poderá especificar com ENTRYPOINT o que deve ser executado.

## 4º Qual a diferença entre as estratégias de shell e exec?

O docker exec executa um comando dentro de um container que esteja em execução. Caso o container seja reiniciado o comando não será retomado. Além disso, o docker exec executa dentro do diretório raiz do container ou em um diretório personalizado especificado dentro do WORKDIR no dockerfile. Já o docker shell consiste em utilizar o docker exec para acessar o shell do container em execução, permitindo assim a livre naveção entre os diretórios do container.

## 5º Qual a diferença entre os comandos docker stop <container_id> e docker kill <container_id>? 

A pricipal diferença é que o docker KILL vai parar o processo imediatamente, mesmo que de forma forçada. Já o docker STOP vai esperar o processo realizar a tarefa em execução antes de interrompelo. Além disso, o docker KILL permite que você passe flags para o processo principal do container, enquanto o docker STOP não permite.
