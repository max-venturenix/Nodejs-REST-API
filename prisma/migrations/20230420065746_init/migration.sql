-- CreateTable
CREATE TABLE `Person` (
    `hkid` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hkid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
