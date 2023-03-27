/*
  Warnings:

  - You are about to drop the `Editora` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Livro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Editora";

-- DropTable
DROP TABLE "Livro";

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "code" SERIAL NOT NULL,
    "originPlace" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("code")
);
