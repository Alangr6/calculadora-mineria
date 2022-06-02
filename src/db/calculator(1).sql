-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 02, 2022 at 02:05 PM
-- Server version: 8.0.29-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calculator`
--

-- --------------------------------------------------------

--
-- Table structure for table `crypto`
--

CREATE TABLE `crypto` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `creation_date` date NOT NULL,
  `algorithm` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `crypto`
--

INSERT INTO `crypto` (`id`, `name`, `price`, `creation_date`, `algorithm`) VALUES
(1, 'Bitcoin', 42000, '2022-03-10', 'SHA-256'),
(31, 'Ethereum', 3000, '2015-06-15', 'Ethash');

-- --------------------------------------------------------

--
-- Table structure for table `crypto_device`
--

CREATE TABLE `crypto_device` (
  `id` int NOT NULL,
  `crypto_id` int NOT NULL,
  `device_id` int NOT NULL,
  `benefits` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `crypto_device`
--

INSERT INTO `crypto_device` (`id`, `crypto_id`, `device_id`, `benefits`) VALUES
(4, 1, 8, 0.00042708),
(5, 1, 9, 0.00041072),
(6, 1, 10, 0.000502),
(7, 1, 11, 0.0036965),
(8, 1, 12, 0.00041072),
(9, 1, 13, 0.0002008),
(10, 31, 14, 0.00163044),
(11, 31, 15, 0.00130855),
(12, 31, 16, 0.00083083),
(13, 31, 17, 0.0004862),
(14, 31, 18, 0.00133013),
(15, 31, 19, 0.00091539),
(16, 31, 20, 0.00078666);

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `id` int NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `comsumption` int NOT NULL,
  `hashrate` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`id`, `type`, `price`, `comsumption`, `hashrate`, `name`) VALUES
(8, 'ASIC', 11500, 3250, 95, 'Antminer S19'),
(9, 'ASIC', 11979, 3600, 90, 'Whatsminer M30S'),
(10, 'ASIC', 13000, 3420, 90, 'Bitmain Antminer S19 Pro'),
(11, 'ASIC', 10000, 3400, 81, 'AvalonMiner 1166 Pro'),
(12, 'ASIC', 10800, 3420, 85, 'Canaan AvalonMiner 1246'),
(13, 'ASIC', 3000, 1980, 44, 'Ebang EBIT E11++'),
(14, 'GPU', 2300, 400, 114, 'GeForce RTX 3090'),
(15, 'GPU', 1000, 287, 91, 'GeForce RTX 3080'),
(16, 'GPU', 700, 162, 58, 'GeForce RTX 3070'),
(17, 'GPU', 600, 212, 34, 'GeForce GTX 1080'),
(18, 'GPU', 2000, 250, 93, 'AMD Radeon VII'),
(19, 'GPU', 1300, 187, 64, 'AMD RX 6800 XT'),
(20, 'GPU', 700, 162, 55, 'AMD RX 6700 XT');

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220314094446', '2022-03-14 11:00:00', 19),
('DoctrineMigrations\\Version20220314100307', '2022-03-14 11:05:12', 49),
('DoctrineMigrations\\Version20220314101110', '2022-03-14 11:11:15', 49),
('DoctrineMigrations\\Version20220314101912', '2022-03-14 11:19:15', 34),
('DoctrineMigrations\\Version20220320144023', '2022-03-20 15:48:46', 58),
('DoctrineMigrations\\Version20220320144402', '2022-03-20 15:54:57', 43),
('DoctrineMigrations\\Version20220322223232', '2022-03-22 23:32:49', 39),
('DoctrineMigrations\\Version20220322223658', '2022-03-22 23:37:03', 54),
('DoctrineMigrations\\Version20220323011135', '2022-03-23 04:30:19', 41),
('DoctrineMigrations\\Version20220323033345', '2022-03-23 04:33:56', 40),
('DoctrineMigrations\\Version20220323085225', '2022-03-23 10:04:38', 35),
('DoctrineMigrations\\Version20220323091949', '2022-03-23 10:20:28', 59),
('DoctrineMigrations\\Version20220323092941', '2022-03-23 10:29:56', 122),
('DoctrineMigrations\\Version20220323184200', '2022-03-23 19:42:18', 22),
('DoctrineMigrations\\Version20220501234117', '2022-05-02 01:41:39', 56),
('DoctrineMigrations\\Version20220502000656', '2022-05-02 02:07:00', 45),
('DoctrineMigrations\\Version20220514142002', '2022-05-14 16:20:27', 24),
('DoctrineMigrations\\Version20220514203725', '2022-05-14 22:37:44', 44),
('DoctrineMigrations\\Version20220516174953', '2022-05-16 19:50:01', 73),
('DoctrineMigrations\\Version20220518132039', '2022-05-18 15:20:44', 40),
('DoctrineMigrations\\Version20220518132350', '2022-05-18 15:23:52', 25),
('DoctrineMigrations\\Version20220518145233', '2022-05-18 16:52:35', 23),
('DoctrineMigrations\\Version20220524142245', '2022-05-24 16:22:51', 109),
('DoctrineMigrations\\Version20220525133819', '2022-05-25 15:38:30', 40),
('DoctrineMigrations\\Version20220525134207', '2022-05-25 15:42:10', 42),
('DoctrineMigrations\\Version20220525134409', '2022-05-25 15:44:11', 133);

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`id`, `email`) VALUES
(12, 'klk@.com'),
(2, 'rve@.com'),
(7, 'vr@.com'),
(1, 'wrw@.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `name`, `username`) VALUES
(13, 'dmjagin@admin.com', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$SXfOS14Xegqng0nwJ5KsEA$p6bchwvIqlKJnpBTW1O6DfooVtKP98cFoW82GlVmkec', 'a', 'b'),
(14, 'eag@dfb.com', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$v1cBlTGHsP+hYkzjYWJGiw$/6dRnSeJmMLd520d8OQbZ73HeHnzrFA11bhv8KS9Zxs', 'rthrhs', 'sfgrw'),
(15, 'alan@gmail.com', '[\"ROLE_ADMIN\"]', '$2y$13$2D8wO2Knoec4YyqqAMYzcO4JDyG3NckFtX9.WhzdYQL07daOXiyfu', 'Alan Guerrero', 'alangr6'),
(16, 'a@.com', '[\"ROLE_USER\"]', '$2y$13$.eYYDabFnUMZuCNQpRv5B.0VXLaXUe4mzKCE/9DoHCuru4ZdA23Xe', 'kj', 'hgf'),
(17, 'alan2@gmail.com', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$CEeaP+VsBhT8XcuNsJghLQ$6SKSZ9x626AyvjaDtP5ubBpMCmSGhKmu7a+7O2/YD4M', 'alan', 'alan2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crypto`
--
ALTER TABLE `crypto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_682828855E237E06` (`name`);

--
-- Indexes for table `crypto_device`
--
ALTER TABLE `crypto_device`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_CEEEA82AE9571A63` (`crypto_id`),
  ADD KEY `IDX_CEEEA82A94A4C7D4` (`device_id`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_92FB68E5E237E06` (`name`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E7927C74E7927C74` (`email`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crypto`
--
ALTER TABLE `crypto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `crypto_device`
--
ALTER TABLE `crypto_device`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `crypto_device`
--
ALTER TABLE `crypto_device`
  ADD CONSTRAINT `FK_CEEEA82A94A4C7D4` FOREIGN KEY (`device_id`) REFERENCES `device` (`id`),
  ADD CONSTRAINT `FK_CEEEA82AE9571A63` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
