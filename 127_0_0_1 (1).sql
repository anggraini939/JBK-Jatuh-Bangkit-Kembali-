-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2020 at 08:21 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `barang`
--
CREATE DATABASE IF NOT EXISTS `barang` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `barang`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_barang`
--

CREATE TABLE `tbl_barang` (
  `id` int(5) NOT NULL,
  `idstatus` int(5) DEFAULT NULL,
  `nama` char(20) DEFAULT NULL,
  `tgl` date DEFAULT NULL,
  `pukul` time DEFAULT NULL,
  `lokasi` text DEFAULT NULL,
  `deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_barang`
--

INSERT INTO `tbl_barang` (`id`, `idstatus`, `nama`, `tgl`, `pukul`, `lokasi`, `deskripsi`) VALUES
(1, 1, 'pulpen', '1992-01-16', '12:00:58', 'kampus', 'Barang_Hilang'),
(2, 2, 'buku', '1992-01-02', '12:00:58', 'kampus', 'Barang_Hilang'),
(3, 2, 'hp', '1992-01-02', '12:00:58', 'kampus', 'Barang_Hilang'),
(4, 1, 'solder', '1992-01-02', '12:00:58', 'kantin', 'Barang_Hilang'),
(5, 2, 'pensil', '1992-01-02', '12:00:58', 'taman', 'Barang_Hilang'),
(6, 1, 'pulpen', '2020-03-05', '14:00:12', 'jalan', 'pulpen kuning'),
(17, 2, 'roti', '2010-02-20', '12:34:29', 'kantin', 'jamuran'),
(18, 2, 'kotak makan', '2020-04-15', '14:34:20', 'kantin ', 'kotak warna abu - abu');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pengembalian`
--

CREATE TABLE `tbl_pengembalian` (
  `id` int(5) NOT NULL,
  `noktp` char(20) DEFAULT NULL,
  `nama` char(20) DEFAULT NULL,
  `telp` char(15) DEFAULT NULL,
  `tgl` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_status`
--

CREATE TABLE `tbl_status` (
  `id` int(5) NOT NULL,
  `nama` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_status`
--

INSERT INTO `tbl_status` (`id`, `nama`) VALUES
(1, 'DI SIMPAN'),
(2, 'DI AMBIL');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(5) NOT NULL,
  `nama` char(20) DEFAULT NULL,
  `nomor` char(20) DEFAULT NULL,
  `usr` char(20) DEFAULT NULL,
  `pwd` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `nama`, `nomor`, `usr`, `pwd`) VALUES
(15, 'kazuma', '010112', 'kazuma', '1234'),
(21, 'undefined', '1212', 'undefined', 'undefined'),
(22, 'undefined', '213213', 'undefined', 'undefined'),
(23, 'pulpen', 'undefined', 'undefined', 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_pengembalian`
--
ALTER TABLE `tbl_pengembalian`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_status`
--
ALTER TABLE `tbl_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_pengembalian`
--
ALTER TABLE `tbl_pengembalian`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_status`
--
ALTER TABLE `tbl_status`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
