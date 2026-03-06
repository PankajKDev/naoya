/*
  Warnings:

  - You are about to drop the column `roomId` on the `Playlist` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Playlist_roomId_key";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "roomId";
