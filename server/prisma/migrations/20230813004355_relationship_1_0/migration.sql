-- CreateTable
CREATE TABLE "Relationship" (
    "id" TEXT NOT NULL,
    "partnerOneId" TEXT NOT NULL,
    "partnerTwoId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_partnerOneId_key" ON "Relationship"("partnerOneId");

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_partnerTwoId_key" ON "Relationship"("partnerTwoId");

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_partnerOneId_fkey" FOREIGN KEY ("partnerOneId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_partnerTwoId_fkey" FOREIGN KEY ("partnerTwoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
