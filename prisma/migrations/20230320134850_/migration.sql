-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editora" (
    "code" SERIAL NOT NULL,
    "originPlace" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,

    CONSTRAINT "Editora_pkey" PRIMARY KEY ("code")
);
