-- CreateEnum
CREATE TYPE "genderEnum" AS ENUM ('MALE', 'FEMALE', 'NONBINARY');

-- CreateTable
CREATE TABLE "picture" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "firstName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "genderEnum" NOT NULL,

    CONSTRAINT "firstName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lastName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "lastName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descriptions" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intrests" (
    "id" SERIAL NOT NULL,
    "intrests" TEXT NOT NULL,

    CONSTRAINT "intrests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "firstName_id_key" ON "firstName"("id");
