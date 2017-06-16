/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wm18-login&reg

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-16 12:11:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for add_purchase
-- ----------------------------
DROP TABLE IF EXISTS `add_purchase`;
CREATE TABLE `add_purchase` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of add_purchase
-- ----------------------------
INSERT INTO `add_purchase` VALUES ('1', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:15:54');
INSERT INTO `add_purchase` VALUES ('2', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('3', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('4', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('5', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('6', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('7', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:00');
INSERT INTO `add_purchase` VALUES ('8', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('9', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('10', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('11', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('12', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('13', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('14', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('15', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('16', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('17', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('18', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('19', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:05');
INSERT INTO `add_purchase` VALUES ('20', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('21', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('22', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('23', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('24', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('25', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('26', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('27', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('28', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('29', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('30', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('31', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('32', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('33', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('34', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('35', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('36', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('37', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:06');
INSERT INTO `add_purchase` VALUES ('38', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('39', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('40', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('41', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('42', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('43', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('44', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('45', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('46', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('47', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('48', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('49', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('50', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('51', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('52', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('53', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('54', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('55', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:07');
INSERT INTO `add_purchase` VALUES ('56', '福特GT', 'car', '10', '../img/add_purchase01.jpg', '2017-06-09 14:20:08');
INSERT INTO `add_purchase` VALUES ('57', 'veyron', 'car', '10', '../img/add_purchase05.jpg', '2017-06-09 14:20:08');
INSERT INTO `add_purchase` VALUES ('58', '北汽', 'car', '10', '../img/add_purchase03.jpg', '2017-06-09 14:20:08');
INSERT INTO `add_purchase` VALUES ('59', '保时捷', 'car', '10', '../img/add_purchase02.jpg', '2017-06-09 14:20:08');
INSERT INTO `add_purchase` VALUES ('60', '迈凯伦', 'car', '10', '../img/add_purchase04.jpg', '2017-06-09 14:20:08');
INSERT INTO `add_purchase` VALUES ('61', '兰博基尼', 'car', '10', '../img/add_purchase06.jpg', '2017-06-09 14:20:08');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '维您酵素\r\n\r\n饮品', '维您', '1820', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('2', '维您维D钙软胶囊', '维\r\n\r\n您', '890', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('3', '维您羊乳维D钙片', '维\r\n\r\n您', '190', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('4', '维您B族维生素片', '维您', '188', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('5', '维您多种\r\n\r\n维生素矿物质片', '维您', '214', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('6', '维您鱼油软\r\n\r\n胶囊', '维您', '256', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('7', '维您正和大昭牌维生素C咀嚼片', '维\r\n\r\n您', '182', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('8', '维您维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', '维您', '98', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('9', '维您百合康牌天然维生素E软胶囊', '维\r\n\r\n您', '98', '../img/goods01.jpg', '2017-06-08 20:56:07');
INSERT INTO `goods` VALUES ('10', '维您天然宝螺旋藻片', '维您', '1820', '../img/goods01.jpg', '2017-06-08 20:56:45');
INSERT INTO `goods` VALUES ('11', 'Mr.FIG无花果干200g', 'Mr.FIG', '1820', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('12', 'Mr.FIG维D钙软胶囊', 'Mr.FIG', '235', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('13', 'Mr.FIG羊乳维D钙片', '\r\n\r\nMr.FIG', '190', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('14', 'Mr.FIGB族维生素片', 'Mr.FIG', '1880', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('15', 'Mr.FIG多种\r\n\r\n维生素矿物质片', 'Mr.FIG', '2104', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('16', 'Mr.FIG鱼油软\r\n\r\n胶囊', 'Mr.FIG', '2056', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('17', 'Mr.FIG正和大昭牌维生素C咀嚼片', 'Mr.FIG', '1802', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('18', 'Mr.FIG维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', 'Mr.FIG', '908', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('19', 'Mr.FIG百合康牌天然维生素E软胶囊', 'Mr.FIG', '980', '../img/goods01.jpg', '2017-06-08 21:07:40');
INSERT INTO `goods` VALUES ('20', '秘密花园无花果干200g', '秘密花园', '1820', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('21', '秘密花园维D钙软胶囊', '秘密花园', '235', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('22', '秘密花园羊乳维D钙片', '\r\n\r\n秘密花园', '190', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('23', '秘密花园B族维生素片', '秘密花园', '1880', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('24', '秘密花园多种\r\n\r\n维生素矿物质片', '秘密花园', '2104', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('25', '秘密花园鱼油软\r\n\r\n胶囊', '秘密花园', '2056', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('26', '秘密花园正和大昭牌维生素C咀嚼片', '秘密花园', '1802', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('27', '秘密花园维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', '秘密花园', '908', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('28', '秘密花园百合康牌天然维生素E软胶囊', '秘密花园', '980', '../img/goods01.jpg', '2017-06-08 21:08:05');
INSERT INTO `goods` VALUES ('29', '意峰无花果干200g', '意峰', '1820', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('30', '意峰维D钙软胶囊', '意峰', '235', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('31', '意峰羊乳维D钙片', '\r\n\r\n意峰', '190', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('32', '意峰B族维生素片', '意峰', '1880', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('33', '意峰多种\r\n\r\n维生素矿物质片', '意峰', '2104', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('34', '意峰鱼油软\r\n\r\n胶囊', '意峰', '2056', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('35', '意峰正和大昭牌维生素C咀嚼片', '意峰', '1802', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('36', '意峰维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', '意峰', '908', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('37', '意峰百合康牌天然维生素E软胶囊', '意峰', '980', '../img/goods01.jpg', '2017-06-08 21:08:21');
INSERT INTO `goods` VALUES ('38', '昆中药无花果干200g', '昆中药', '1820', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('39', '昆中药维D钙软胶囊', '昆中药', '235', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('40', '昆中药羊乳维D钙片', '\r\n\r\n昆中药', '190', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('41', '昆中药B族维生素片', '昆中药', '1880', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('42', '昆中药多种\r\n\r\n维生素矿物质片', '昆中药', '2104', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('43', '昆中药鱼油软\r\n\r\n胶囊', '昆中药', '2056', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('44', '昆中药正和大昭牌维生素C咀嚼片', '昆中药', '1802', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('45', '昆中药维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', '昆中药', '908', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('46', '昆中药百合康牌天然维生素E软胶囊', '昆中药', '980', '../img/goods01.jpg', '2017-06-08 21:08:34');
INSERT INTO `goods` VALUES ('47', 'food source无花果干200g', 'food source', '1820', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('48', 'food source维D钙软胶囊', 'food source', '235', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('49', 'food source羊乳维D钙片', '\r\n\r\nfood source', '190', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('50', 'food sourceB族维生素片', 'food source', '1880', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('51', 'food source多种\r\n\r\n维生素矿物质片', 'food source', '2104', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('52', 'food source鱼油软\r\n\r\n胶囊', 'food source', '2056', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('53', 'food source正和大昭牌维生素C咀嚼片', 'food source', '1802', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('54', 'food source维妥立牌银杏磷脂软胶囊（新\r\n\r\n）', 'food source', '908', '../img/goods01.jpg', '2017-06-08 21:09:12');
INSERT INTO `goods` VALUES ('55', 'food source百合康牌天然维生素E软胶囊', 'food source', '980', '../img/goods01.jpg', '2017-06-08 21:09:12');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verifyCode` varchar(255) NOT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `mobile` varchar(20) NOT NULL COMMENT 'userPhone',
  `password` varchar(255) NOT NULL COMMENT 'password',
  `regMessage` varchar(10) NOT NULL COMMENT 'verifyCode',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('13711174824', 'e10adc3949ba59abbe56e057f20f883e', '1234', '1', '2017-06-14 13:49:12');
INSERT INTO `reg` VALUES ('13711174823', 'e10adc3949ba59abbe56e057f20f883e', '1234', '2', '2017-06-14 14:01:35');
SET FOREIGN_KEY_CHECKS=1;
