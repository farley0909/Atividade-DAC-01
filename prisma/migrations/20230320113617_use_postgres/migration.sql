-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataDeLancamento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editora" (
    "codigo" SERIAL NOT NULL,
    "localDeOrigem" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,

    CONSTRAINT "Editora_pkey" PRIMARY KEY ("codigo")
);
