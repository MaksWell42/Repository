// variables
var diameter = 1;
var diameter2 = 40;
var growth = 1;
var growth2 = 1;
var y1 = 462;
var x1 = 342;
      
function setup()
{
    frameRate(48);
    createCanvas(684,1004);
    //speeds
    movement1 = 1;
    movement2 = 2;

}

function draw()
{
    // background
    stroke(147,151,137);
    fill(147,151,137);
    square(0,0,342);
    square(342,0,342);
    stroke(133,122,130);
    fill(133,122,130);
    square(342,342,342);
    square(0,342,342);
    stroke(112,96,96);
    fill(112,96,96);
    square(0,664,342);
    square(342,664,342);
    stroke(0);

    // line 1
    fill(195,192,174);
    circle(22,22,diameter);
    fill(167,160,143);
    circle(62,22,diameter);
    fill(153,145,133);
    circle(102,22,diameter);
    fill(152,144,132);
    circle(142,22,diameter);
    fill(141,135,120);
    circle(182,22,diameter);
    fill(154,148,133);
    circle(222,22,diameter);
    fill(152,148,136);
    circle(262,22,diameter);
    fill(128,128,116);
    circle(302,22,diameter);
    fill(139,139,128);
    circle(342,22,diameter);
    fill(157,154,138);
    circle(382,22,diameter);
    fill(195,188,171);
    circle(422,22,diameter);
    fill(207,201,190);
    circle(462,22,diameter);
    fill(203,196,179);
    circle(502,22,diameter);
    fill(185,175,165);
    circle(542,22,diameter);
    fill(162,156,145);
    circle(582,22,diameter);
    fill(151,148,139);
    circle(622,22,diameter);
    fill(143,154,140);
    circle(662,22,diameter);
  
    // line 2
    fill(200,194,181);
    circle(22,62,diameter2);
    fill(172,164,154);
    circle(62,62,diameter2);
    fill(178,170,158);
    circle(102,62,diameter2);
    fill(174,164,155);
    circle(142,62,diameter2);
    fill(179,170,161);
    circle(182,62,diameter2);
    fill(179,171,160);
    circle(222,62,diameter2);
    fill(176,172,161);
    circle(262,62,diameter2);
    fill(149,146,139);
    circle(302,62,diameter2);
    fill(154,156,145);
    circle(342,62,diameter2);
    fill(149,151,138);
    circle(382,62,diameter2);
    fill(160,154,143);
    circle(422,62,diameter2);
    fill(200,194,183);
    circle(462,62,diameter2);
    fill(209,201,191);
    circle(502,62,diameter2);
    fill(185,182,175);
    circle(542,62,diameter2);
    fill(177,167,158);
    circle(582,62,diameter2);
    fill(172,170,158);
    circle(622,62,diameter2);
    fill(187,177,175);
    circle(662,62,diameter2);
   
    // line 3
    fill(207,201,190);
    circle(22,102,diameter);
    fill(207,203,191);
    circle(62,102,diameter);
    fill(188,182,171);
    circle(102,102,diameter);
    fill(182,174,163);
    circle(142,102,diameter);
    fill(186,180,167);
    circle(182,102,diameter);
    fill(186,180,167);
    circle(222,102,diameter);
    fill(191,183,172);
    circle(262,102,diameter);
    fill(161,156,150);
    circle(302,102,diameter);
    fill(139,134,128);
    circle(342,102,diameter);
    fill(155,152,147);
    circle(382,102,diameter);
    fill(179,172,164);
    circle(422,102,diameter);
    fill(176,172,169);
    circle(462,102,diameter);
    fill(173,170,156);
    circle(502,102,diameter);
    fill(178,175,168);
    circle(542,102,diameter);
    fill(181,178,171);
    circle(582,102,diameter);
    fill(178,175,168);
    circle(622,102,diameter);
    fill(200,189,167);
    circle(662,102,diameter);

    // line 4
    fill(173,168,150);
    circle(22,142,diameter2);
    fill(169,166,148);
    circle(62,142,diameter2);
    fill(173,167,156);
    circle(102,142,diameter2);
    fill(165,161,150);
    circle(142,142,diameter2);
    fill(176,168,158);
    circle(182,142,diameter2);
    fill(187,181,168);
    circle(222,142,diameter2);
    fill(171,164,164);
    circle(262,142,diameter2);
    fill(81,67,80);
    circle(302,142,diameter2);
    fill(68,55,62);
    circle(342,142,diameter2);
    fill(61,53,50);
    circle(382,142,diameter2);
    fill(180,172,161);
    circle(422,142,diameter2);
    fill(179,171,168);
    circle(462,142,diameter2);
    fill(175,172,167);
    circle(502,142,diameter2);
    fill(178,175,168);
    circle(542,142,diameter2);
    fill(190,182,180);
    circle(582,142,diameter2);
    fill(198,189,182);
    circle(622,142,diameter2);
    fill(201,195,184);
    circle(662,142,diameter2);

    // line 5
    fill(136,132,121);
    circle(22,182,diameter);
    fill(138,136,124);
    circle(62,182,diameter);
    fill(155,153,141);
    circle(102,182,diameter);
    fill(146,148,137);
    circle(142,182,diameter);
    fill(166,162,153);
    circle(182,182,diameter);
    fill(159,154,136);
    circle(222,182,diameter);
    fill(149,143,131);
    circle(262,182,diameter);
    fill(103,111,89);
    circle(302,182,diameter);
    fill(63,58,40);
    circle(342,182,diameter);
    fill(62,79,42);
    circle(382,182,diameter);
    fill(155,153,141);
    circle(422,182,diameter);
    fill(183,178,174);
    circle(462,182,diameter);
    fill(189,186,181);
    circle(502,182,diameter);
    fill(173,170,163);
    circle(542,182,diameter);
    fill(212,207,203);
    circle(582,182,diameter);
    fill(206,203,198);
    circle(622,182,diameter);
    fill(222,214,202);
    circle(662,182,diameter);

    // line 6
    fill(146,143,129);
    circle(22,222,diameter2);
    fill(146,144,131);
    circle(62,222,diameter2);
    fill(144,148,134);
    circle(102,222,diameter2);
    fill(137,145,130);
    circle(142,222,diameter2);
    fill(146,151,144);
    circle(182,222,diameter2);
    fill(136,139,132);
    circle(222,222,diameter2);
    fill(113,97,85);
    circle(262,222,diameter2);
    fill(111,110,75);
    circle(302,222,diameter2);
    fill(106,103,74);
    circle(342,222,diameter2);
    fill(80,83,57);
    circle(382,222,diameter2);
    fill(107,102,98);
    circle(422,222,diameter2);
    fill(163,164,158);
    circle(462,222,diameter2);
    fill(191,188,181);
    circle(502,222,diameter2);
    fill(204,197,189);
    circle(542,222,diameter2);
    fill(222,215,205);
    circle(582,222,diameter2);
    fill(216,212,203);
    circle(622,222,diameter2);
    fill(223,213,203);
    circle(662,222,diameter2);

    // line 7
    fill(172,172,160);
    circle(22,262,diameter);
    fill(147,150,139);
    circle(62,262,diameter);
    fill(141,151,143);
    circle(102,262,diameter);
    fill(145,156,148);
    circle(142,262,diameter);
    fill(165,171,167);
    circle(182,262,diameter);
    fill(150,157,149);
    circle(222,262,diameter);
    fill(169,154,132);
    circle(262,262,diameter);
    fill(150,141,72);
    circle(302,262,diameter);
    fill(121,139,64); 
    circle(342,262,diameter); 
    fill(84,65,52);
    circle(382,262,diameter);
    fill(154,147,141);
    circle(422,262,diameter);
    fill(169,168,163);
    circle(462,262,diameter);
    fill(192,189,184);
    circle(502,262,diameter);
    fill(221,214,208);
    circle(542,262,diameter);
    fill(214,210,199);
    circle(582,262,diameter);
    fill(208,203,197);
    circle(622,262,diameter);
    fill(198,193,189);
    circle(662,262,diameter);

    // line 8
    fill(165,171,161);
    circle(22,302,diameter2);
    fill(144,152,139);
    circle(62,302,diameter2);
    fill(144,156,146);
    circle(102,302,diameter2);
    fill(163,168,161);
    circle(142,302,diameter2);
    fill(200,201,195);
    circle(182,302,diameter2);
    fill(210,208,211);
    circle(222,302,diameter2);
    fill(204,197,191);
    circle(262,302,diameter2);
    fill(155,123,77);
    circle(302,302,diameter2);
    fill(106,102,74);
    circle(342,302,diameter2);
    fill(103,76,76);
    circle(382,302,diameter2);
    fill(223,214,207);
    circle(422,302,diameter2);
    fill(214,209,205);
    circle(462,302,diameter2);
    fill(211,206,202);
    circle(502,302,diameter2);
    fill(192,184,181);
    circle(542,302,diameter2);
    fill(191,188,181);
    circle(582,302,diameter2);
    fill(200,195,192);
    circle(622,302,diameter2);
    fill(196,191,185);
    circle(662,302,diameter2);

    // line 9
    fill(188,189,183);
    circle(22,342,diameter);
    fill(178,179,173);
    circle(62,342,diameter);
    fill(182,181,176);
    circle(102,342,diameter);
    fill(181,181,179);
    circle(142,342,diameter);
    fill(197,197,197);
    circle(182,342,diameter);
    fill(207,205,206);
    circle(222,342,diameter);
    fill(156,152,149);
    circle(262,342,diameter);
    fill(178,159,149);
    circle(302,342,diameter);
    fill(146,108,92);
    circle(342,342,diameter);
    fill(120,107,101);
    circle(382,342,diameter);
    fill(154,149,145);
    circle(422,342,diameter);
    fill(202,198,199);
    circle(462,342,diameter);
    fill(197,192,188);
    circle(502,342,diameter);
    fill(184,183,178);
    circle(542,342,diameter);
    fill(152,153,147);
    circle(582,342,diameter);
    fill(182,179,172);
    circle(622,342,diameter);
    fill(210,200,190);
    circle(662,342,diameter);

    // line 10
    fill(194,193,188);
    circle(22,382,diameter2);
    fill(200,196,185);
    circle(62,382,diameter2);
    fill(208,203,197);
    circle(102,382,diameter2);
    fill(184,183,179);
    circle(142,382,diameter2);
    fill(135,131,132);
    circle(182,382,diameter2);
    fill(129,122,130);
    circle(222,382,diameter2);
    fill(63,51,61);
    circle(262,382,diameter2);
    fill(149,140,141);
    circle(302,382,diameter2);
    fill(191,153,154);
    circle(342,382,diameter2);
    fill(148,140,137);
    circle(382,382,diameter2);
    fill(33,22,20);
    circle(422,382,diameter2);
    fill(120,118,119);
    circle(462,382,diameter2);
    fill(157,148,149);
    circle(502,382,diameter2);
    fill(205,200,196);
    circle(542,382,diameter2);
    fill(178,175,170);
    circle(582,382,diameter2);
    fill(182,178,166);
    circle(622,382,diameter2);
    fill(211,203,192);
    circle(662,382,diameter2);

    // line 11
    fill(219,212,202);
    circle(22,422,diameter);
    fill(219,213,201);
    circle(62,422,diameter);
    fill(217,212,208);
    circle(102,422,diameter);
    fill(132,122,130);
    circle(142,422,diameter);
    fill(64,50,63);
    circle(182,422,diameter);
    fill(63,46,62);
    circle(222,422,diameter);
    fill(75,61,74);
    circle(262,422,diameter);
    fill(114,110,111);
    circle(302,422,diameter);
    fill(154,70,78);
    circle(342,422,diameter);
    fill(88,87,85);
    circle(382,422,diameter);
    fill(54,44,53);
    circle(422,422,diameter);
    fill(53,48,55);
    circle(462,422,diameter);
    fill(49,44,50);
    circle(502,422,diameter);
    fill(116,111,107);
    circle(542,422,diameter);
    fill(186,182,171);
    circle(582,422,diameter);
    fill(196,192,181);
    circle(622,422,diameter);
    fill(208,199,185);
    circle(662,422,diameter);

    // line 12
    fill(232,222,213);
    circle(22,462,diameter2);
    fill(235,225,216);
    circle(62,462,diameter2);
    fill(236,230,219);
    circle(102,462,diameter2);
    fill(97,86,94);
    circle(142,462,diameter2);
    fill(60,48,58);
    circle(182,462,diameter2);
    fill(63,49,62);
    circle(222,462,diameter2);
    fill(75,62,72);
    circle(262,462,diameter2);
    fill(55,45,56);
    circle(302,462,diameter2);
    fill(124,29,37);
    circle(342,462,diameter2);
    fill(39,29,38);
    circle(382,462,diameter2);
    fill(53,43,51);
    circle(422,462,diameter2);
    fill(55,48,56);
    circle(462,462,diameter2);
    fill(45,38,45);
    circle(502,462,diameter2);
    fill(88,87,85);
    circle(542,462,diameter2);
    fill(199,195,184);
    circle(582,462,diameter2);
    fill(213,204,195);
    circle(622,462,diameter2);
    fill(206,196,185);
    circle(662,462,diameter2);

    // line 13
    fill(239,225,217);
    circle(22,502,diameter);
    fill(239,226,218);
    circle(62,502,diameter);
    fill(240,227,219);
    circle(102,502,diameter);
    fill(86,76,75);
    circle(142,502,diameter);
    fill(60,49,57);
    circle(182,502,diameter);
    fill(68,54,67);
    circle(222,502,diameter);
    fill(82,70,80);
    circle(262,502,diameter);
    fill(48,38,47);
    circle(302,502,diameter);
    fill(80,32,40);
    circle(342,502,diameter);
    fill(50,40,49);
    circle(382,502,diameter);
    fill(53,43,54);
    circle(422,502,diameter);
    fill(55,43,55);
    circle(462,502,diameter);
    fill(44,32,44);
    circle(502,502,diameter);
    fill(44,35,38);
    circle(542,502,diameter);
    fill(222,212,202);
    circle(582,502,diameter);
    fill(239,223,211);
    circle(622,502,diameter);
    fill(231,217,207);
    circle(662,502,diameter);

    // line 14
    fill(236,222,214);
    circle(22,542,diameter2);
    fill(244,230,222);
    circle(62,542,diameter2);
    fill(240,227,219);
    circle(102,542,diameter2);
    fill(83,70,77);
    circle(142,542,diameter2);
    fill(51,40,44);
    circle(182,542,diameter2);
    fill(78,66,76);
    circle(222,542,diameter2);
    fill(80,70,78);
    circle(262,542,diameter2);
    fill(54,42,52);
    circle(302,542,diameter2);
    fill(60,50,61);
    circle(342,542,diameter2);
    fill(66,56,67);
    circle(382,542,diameter2);
    fill(52,42,53);
    circle(422,542,diameter2);
    fill(35,25,34);
    circle(462,542,diameter2);
    fill(36,24,36);
    circle(502,542,diameter2);
    fill(45,33,43);
    circle(542,542,diameter2);
    fill(186,176,167);
    circle(582,542,diameter2);
    fill(231,217,205);
    circle(622,542,diameter2);
    fill(230,215,201);
    circle(662,542,diameter2);

    // line 15
    fill(216,215,220);
    circle(22,582,diameter);
    fill(218,217,223);
    circle(62,582,diameter);
    fill(211,211,213);
    circle(102,582,diameter);
    fill(80,70,78);
    circle(142,582,diameter);
    fill(46,36,37);
    circle(182,582,diameter);
    fill(66,53,63);
    circle(222,582,diameter);
    fill(80,68,78);
    circle(262,582,diameter);
    fill(65,52,62);
    circle(302,582,diameter);
    fill(56,46,54);
    circle(342,582,diameter);
    fill(78,62,75);
    circle(382,582,diameter);
    fill(64,50,63);
    circle(422,582,diameter);
    fill(30,19,27);
    circle(462,582,diameter);
    fill(57,47,58);
    circle(502,582,diameter);
    fill(55,43,55);
    circle(542,582,diameter);
    fill(163,161,162);
    circle(582,582,diameter);
    fill(207,207,207);
    circle(622,582,diameter);
    fill(195,196,197);
    circle(662,582,diameter);

    // line 16
    fill(169,181,194);
    circle(22,622,diameter2);
    fill(179,191,202);
    circle(62,622,diameter2);
    fill(164,172,182);
    circle(102,622,diameter2);
    fill(94,84,92);
    circle(142,622,diameter2);
    fill(53,41,41);
    circle(182,622,diameter2);
    fill(88,77,85);
    circle(222,622,diameter2);
    fill(75,63,73);
    circle(262,622,diameter2);
    fill(68,56,66);
    circle(302,622,diameter2);
    fill(69,59,58);
    circle(342,622,diameter2);
    fill(69,59,68);
    circle(382,622,diameter2);
    fill(60,44,54);
    circle(422,622,diameter2);
    fill(57,43,42);
    circle(462,622,diameter2);
    fill(56,46,55);
    circle(502,622,diameter2);
    fill(45,33,43);
    circle(542,622,diameter2);
    fill(128,134,145);
    circle(582,622,diameter2);
    fill(167,177,188);
    circle(622,622,diameter2);
    fill(157,166,180);
    circle(662,622,diameter2);

    // line 17
    fill(165,178,193);
    circle(22,662,diameter);
    fill(157,173,185);
    circle(62,662,diameter);
    fill(144,160,172);
    circle(102,662,diameter);
    fill(82,73,78);
    circle(142,662,diameter);
    fill(45,35,34);
    circle(182,662,diameter);
    fill(79,67,77);
    circle(222,662,diameter);
    fill(87,75,85);
    circle(262,662,diameter);
    fill(78,67,71);
    circle(302,662,diameter);
    fill(58,44,44);
    circle(342,662,diameter);
    fill(70,57,67);
    circle(382,662,diameter);
    fill(62,43,49);
    circle(422,662,diameter);
    fill(34,24,15);
    circle(462,662,diameter);
    fill(50,40,48);
    circle(502,662,diameter);
    fill(46,35,43);
    circle(542,662,diameter);
    fill(118,135,144);
    circle(582,662,diameter);
    fill(139,156,173);
    circle(622,662,diameter);
    fill(137,154,169);
    circle(662,662,diameter);

    // line 18
    fill(138,155,170);
    circle(22,702,diameter2);
    fill(141,159,170);
    circle(62,702,diameter2);
    fill(134,147,156);
    circle(102,702,diameter2);
    fill(88,75,84);
    circle(142,702,diameter2);
    fill(49,39,38);
    circle(182,702,diameter2);
    fill(73,61,71);
    circle(222,702,diameter2);
    fill(66,54,64);
    circle(262,702,diameter2);
    fill(74,64,63);
    circle(302,702,diameter2);
    fill(50,34,34);
    circle(342,702,diameter2);
    fill(55,41,38);
    circle(382,702,diameter2);
    fill(64,50,49);
    circle(422,702,diameter2);
    fill(29,22,14);
    circle(462,702,diameter2);
    fill(38,30,27);
    circle(502,702,diameter2);
    fill(46,35,39);
    circle(542,702,diameter2);
    fill(113,125,136);
    circle(582,702,diameter2);
    fill(133,150,165);
    circle(622,702,diameter2);
    fill(136,153,168);
    circle(662,702,diameter2);

    // line 19
    fill(134,152,165);
    circle(22,742,diameter);
    fill(135,153,166);
    circle(62,742,diameter);
    fill(128,142,151);
    circle(102,742,diameter);
    fill(86,75,83);
    circle(142,742,diameter);
    fill(47,37,36);
    circle(182,742,diameter);
    fill(78,66,76);
    circle(222,742,diameter);
    fill(62,50,80);
    circle(262,742,diameter);
    fill(69,57,57);
    circle(302,742,diameter);
    fill(35,24,20);
    circle(342,742,diameter);
    fill(64,50,50);
    circle(382,742,diameter);
    fill(66,51,48);
    circle(422,742,diameter);
    fill(43,33,25);
    circle(462,742,diameter);
    fill(19,21,8);
    circle(502,742,diameter);
    fill(79,70,63);
    circle(542,742,diameter);
    fill(127,141,150);
    circle(582,742,diameter);
    fill(140,157,172);
    circle(622,742,diameter);
    fill(137,154,169);
    circle(662,742,diameter);

    // line 20
    fill(134,143,152);
    circle(22,782,diameter2);
    fill(141,146,152);
    circle(62,782,diameter2);
    fill(125,134,139);
    circle(102,782,diameter2);
    fill(76,80,73);
    circle(142,782,diameter2);
    fill(40,28,28);
    circle(182,782,diameter2);
    fill(72,60,70);
    circle(222,782,diameter2);
    fill(80,68,78);
    circle(262,782,diameter2);
    fill(56,42,41);
    circle(302,782,diameter2);
    fill(24,16,14);
    circle(342,782,diameter2);
    fill(53,39,38);
    circle(382,782,diameter2);
    fill(47,36,30);
    circle(422,782,diameter2);
    fill(24,11,5);
    circle(462,782,diameter2);
    fill(17,19,14);
    circle(502,782,diameter2);
    fill(57,47,39);
    circle(542,782,diameter2);
    fill(117,126,131);
    circle(582,782,diameter2);
    fill(140,158,174);
    circle(622,782,diameter2);
    fill(130,149,162);
    circle(662,782,diameter2);

    // line 21
    fill(160,144,127);
    circle(22,822,diameter);
    fill(169,154,136);
    circle(62,822,diameter);
    fill(130,114,105);
    circle(102,822,diameter);
    fill(74,61,71);
    circle(142,822,diameter);
    fill(44,31,41);
    circle(182,822,diameter);
    fill(71,55,68);
    circle(222,822,diameter);
    fill(52,34,48);
    circle(262,822,diameter);
    fill(37,24,31);
    circle(302,822,diameter);
    fill(26,15,13);
    circle(342,822,diameter);
    fill(31,19,19);
    circle(382,822,diameter);
    fill(36,26,24);
    circle(422,822,diameter);
    fill(25,20,24);
    circle(462,822,diameter);
    fill(14,17,26);
    circle(502,822,diameter);
    fill(24,23,28);
    circle(542,822,diameter);
    fill(128,109,93);
    circle(582,822,diameter);
    fill(150,124,96);
    circle(622,822,diameter);
    fill(151,126,103);
    circle(662,822,diameter);

    // line 22
    fill(104,95,90);
    circle(22,862,diameter2);
    fill(110,99,93);
    circle(62,862,diameter2);
    fill(98,78,80);
    circle(102,862,diameter2);
    fill(71,55,66);
    circle(142,862,diameter2);
    fill(40,27,37);
    circle(182,862,diameter2);
    fill(57,39,53);
    circle(222,862,diameter2);
    fill(51,33,47);
    circle(262,862,diameter2);
    fill(25,12,21);
    circle(302,862,diameter2);
    fill(20,9,13);
    circle(342,862,diameter2);
    fill(27,16,20);
    circle(382,862,diameter2);
    fill(23,12,16);
    circle(422,862,diameter2);
    fill(9,9,9);
    circle(462,862,diameter2);
    fill(12,15,22);
    circle(502,862,diameter2);
    fill(13,13,13);
    circle(542,862,diameter2);
    fill(120,109,103);
    circle(582,862,diameter2);
    fill(105,94,92);
    circle(622,862,diameter2);
    fill(90,91,93);
    circle(662,862,diameter2);

    // line 23
    fill(123,107,107);
    circle(22,902,diameter);
    fill(108,98,99);
    circle(62,902,diameter);
    fill(95,76,78);
    circle(102,902,diameter);
    fill(116,53,55);
    circle(142,902,diameter);
    fill(76,46,52);
    circle(182,902,diameter);
    fill(50,33,49);
    circle(222,902,diameter);
    fill(36,25,39);
    circle(262,902,diameter);
    fill(24,14,23);
    circle(302,902,diameter);
    fill(22,11,15);
    circle(342,902,diameter);
    fill(31,19,23);
    circle(382,902,diameter);
    fill(17,8,11);
    circle(422,902,diameter);
    fill(18,14,15);
    circle(462,902,diameter);
    fill(13,16,23);
    circle(502,902,diameter);
    fill(86,70,70);
    circle(542,902,diameter);
    fill(103,93,94);
    circle(582,902,diameter);
    fill(113,103,104);
    circle(622,902,diameter);
    fill(98,89,92);
    circle(662,902,diameter);

    // line 24
    fill(102,85,91);
    circle(22,942,diameter2);
    fill(100,83,89);
    circle(62,942,diameter2);
    fill(110,91,97);
    circle(102,942,diameter2);
    fill(105,61,57);
    circle(142,942,diameter2);
    fill(80,46,52);
    circle(182,942,diameter2);
    fill(73,52,69);
    circle(222,942,diameter2);
    fill(42,30,44);
    circle(262,942,diameter2);
    fill(22,11,19);
    circle(302,942,diameter2);
    fill(21,12,15);
    circle(342,942,diameter2);
    fill(26,14,18);
    circle(382,942,diameter2);
    fill(19,8,12);
    circle(422,942,diameter2);
    fill(28,24,25);
    circle(462,942,diameter2);
    fill(16,16,24);
    circle(502,942,diameter2);
    fill(68,51,45);
    circle(542,942,diameter2);
    fill(103,93,94);
    circle(582,942,diameter2);
    fill(100,91,90);
    circle(622,942,diameter2);
    fill(105,92,99);
    circle(662,942,diameter2);

    // line 25
    fill(105,90,95);
    circle(22,982,diameter);
    fill(102,86,89);
    circle(62,982,diameter);
    fill(106,90,93);
    circle(102,982,diameter);
    fill(96,68,73);
    circle(142,982,diameter);
    fill(83,61,69);
    circle(182,982,diameter);
    fill(33,19,37);
    circle(222,982,diameter);
    fill(23,16,32);
    circle(262,982,diameter);
    fill(18,17,25);
    circle(302,982,diameter);
    fill(13,18,24);
    circle(342,982,diameter);
    fill(18,16,19);
    circle(382,982,diameter);
    fill(24,27,34);
    circle(422,982,diameter);
    fill(17,20,29);
    circle(462,982,diameter);
    fill(15,18,27);
    circle(502,982,diameter);
    fill(106,97,98);
    circle(542,982,diameter);
    fill(94,84,85);
    circle(582,982,diameter);
    fill(100,88,90);
    circle(622,982,diameter);
    fill(89,87,88);
    circle(662,982,diameter);

    // border
    stroke(41,28,38);
    line(62,62,624,62);
    line(62,62,62,944);
    line(624,62,624,944);
    line(62,944,624,944);
    line(65,65,621,65);
    line(65,65,65,941);
    line(621,65,621,941);
    line(65,941,621,941);

    // corners
    stroke(0);
    fill(41,28,38);
    triangle(0,60,60,0,0,0);
    triangle(624,0,684,60,684,0);
    triangle(0,944,0,1004,60,1004);
    triangle(624,1004,684,944,684,1004);

    // apple
    fill(121,139,64);
    circle(x1,262,40);
 
    // tie
    fill(124,29,37);
    circle(342,y1,40);
    
    // signature
    fill(41,28,38);
    textSize(14); 
    text('Max W. Bartley',522,905);
    
    // if statements    
    if(diameter >= 90 || diameter <= 0)
    {
        growth*=-1;
    }

    if(diameter2 >= 50 || diameter2 <= 0)
    {
        growth2*=-1;
    }

    if(y1 >=610 || y1 <=400)
    {
        movement1*=-1;
    }

    if(x1 >=width-180 || x1 <=180)
    {
        movement2*=-1;
    }

    // variable adjustments
    diameter += growth;
    diameter2 += growth2;
    y1 += movement1
    x1 += movement2  
}