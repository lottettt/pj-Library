-- DropIndex
DROP INDEX `Book_isbn_key` ON `Book`;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `organization` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `memberCode` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Member_memberCode_key`(`memberCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BorrowHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `memberId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `borrowDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dueDate` DATETIME(3) NOT NULL,
    `returnDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BorrowHistory` ADD CONSTRAINT `BorrowHistory_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BorrowHistory` ADD CONSTRAINT `BorrowHistory_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
