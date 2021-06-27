CREATE TABLE IF NOT EXISTS `languages` (
	`name` VARCHAR(32),
	`icon` TEXT,
	PRIMARY KEY (`name`)
);

CREATE TABLE IF NOT EXISTS `experience` (
	`name` VARCHAR(32) NOT NULL,
	`title` VARCHAR(32) NOT NULL,
	`iconUrl` VARCHAR(128),
	`startDate` DATE,
	`endDate` DATE,
	PRIMARY KEY (`name`)
);

CREATE TABLE IF NOT EXISTS `techstack` (
	`company` VARCHAR(32) NOT NULL,
	`language` VARCHAR(32) NOT NULL,
	PRIMARY KEY (`company`,`language`),
    FOREIGN KEY (`company`) REFERENCES experience(name),
    FOREIGN KEY (`language`) REFERENCES languages(name)
);

CREATE TABLE IF NOT EXISTS `languageExperience` (
	`language` VARCHAR(32) NOT NULL,
	`year` YEAR NOT NULL,
	PRIMARY KEY (`language`,`year`),
    FOREIGN KEY (`language`) REFERENCES languages(`name`)
);