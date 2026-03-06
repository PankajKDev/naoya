/*
  Warnings:

  - You are about to drop the column `currentVideo` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[playlistId]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playlistId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "currentVideo",
ADD COLUMN     "playlistId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "playlistId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_id_key" ON "Playlist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_roomId_key" ON "Playlist"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Room_playlistId_key" ON "Room"("playlistId");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
