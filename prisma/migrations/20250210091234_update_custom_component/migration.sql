/*
  Warnings:

  - The primary key for the `CustomComponent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `CustomComponent` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `CustomComponent` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[title]` on the table `CustomComponent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cssProperties` to the `CustomComponent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialize` to the `CustomComponent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `CustomComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `CustomComponent_name_key` ON `CustomComponent`;

-- AlterTable
ALTER TABLE `CustomComponent` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    ADD COLUMN `cssProperties` LONGTEXT NOT NULL,
    ADD COLUMN `serialize` JSON NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `CustomComponent_title_key` ON `CustomComponent`(`title`);
