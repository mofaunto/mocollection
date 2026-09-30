-- CreateTable
CREATE TABLE "Mountain" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'chiqilmagan',
    "rating" INTEGER,
    "userId" TEXT NOT NULL,
    "davlat" TEXT NOT NULL,
    "location" TEXT,
    "balandlik" INTEGER,
    "qanchaVaqt" INTEGER,
    "dateHiked" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maslahatBeraman" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mountain_pkey" PRIMARY KEY ("id")
);
