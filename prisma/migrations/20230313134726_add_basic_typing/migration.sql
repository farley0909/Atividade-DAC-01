-- CreateTable
CREATE TABLE "Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "dataDeLancamento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Editora" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "localDeOrigem" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL
);
