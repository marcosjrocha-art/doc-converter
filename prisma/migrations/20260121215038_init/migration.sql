-- CreateTable
CREATE TABLE "Conversion" (
    "id" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "originalFileSize" INTEGER NOT NULL,
    "fromFormat" TEXT NOT NULL,
    "toFormat" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "ipAddress" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "Conversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionStats" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalConversions" INTEGER NOT NULL DEFAULT 0,
    "successfulConversions" INTEGER NOT NULL DEFAULT 0,
    "failedConversions" INTEGER NOT NULL DEFAULT 0,
    "totalDataProcessed" INTEGER NOT NULL DEFAULT 0,
    "pdfToDocx" INTEGER NOT NULL DEFAULT 0,
    "docxToPdf" INTEGER NOT NULL DEFAULT 0,
    "otherFormats" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ConversionStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Conversion_createdAt_idx" ON "Conversion"("createdAt");

-- CreateIndex
CREATE INDEX "Conversion_status_idx" ON "Conversion"("status");

-- CreateIndex
CREATE INDEX "Conversion_fromFormat_idx" ON "Conversion"("fromFormat");

-- CreateIndex
CREATE INDEX "Conversion_toFormat_idx" ON "Conversion"("toFormat");

-- CreateIndex
CREATE UNIQUE INDEX "ConversionStats_date_key" ON "ConversionStats"("date");

-- CreateIndex
CREATE INDEX "ConversionStats_date_idx" ON "ConversionStats"("date");
