const dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/;

const svgNS = "http://www.w3.org/2000/svg";
var svg;
var svgLayer;

var svg_x = document.getElementsByTagName('svg')[0];
var svg_0 = document.getElementsByTagName('svg')[1];
var svg_1 = document.getElementsByTagName('svg')[2];

var svgLayer_x;
var svgLayer_0;
var svgLayer_1;

/* ------------------------------------------------------------------------- */

var dotLL0 = [];
var dotLL20 = [];
var dotLL40 = [];
var dotLL60 = [];

var dotCenter = [];

var dotLL10 = [];
var dotLL30 = [];
var dotLL50 = [];
var dotLL70 = [];

var dotMM01 = [];
var dotMM02 = []; 
var dotMM21 = [];
var dotMM22 = [];
var dotMM41 = [];
var dotMM42 = [];
var dotMM61 = [];
var dotMM62 = [];

var dotSS11 = [];
var dotSS12 = [];
var dotSS13 = [];
var dotSS51 = [];
var dotSS52 = [];
var dotSS53 = [];

var dotMMC1 = [];
var dotSSC1 = [];

var dotXS5 = [];
var dotXS3 = [];
var dotXS7 = [];
var dotXS2 = [];
var dotXS4 = [];
var dotXS6 = [];
var dotXS8 = [];

var dotXS15 = [];
var dotXS13 = [];
var dotXS17 = [];
var dotXS12 = [];
var dotXS14 = [];
var dotXS16 = [];
var dotXS18 = [];

var dotXS25 = [];
var dotXS23 = [];
var dotXS27 = [];
var dotXS22 = [];
var dotXS24 = [];
var dotXS26 = [];
var dotXS28 = [];

var dotXS35 = [];
var dotXS33 = [];
var dotXS37 = [];
var dotXS32 = [];
var dotXS34 = [];
var dotXS36 = [];
var dotXS38 = [];

var dotXS45 = [];
var dotXS43 = [];
var dotXS47 = [];
var dotXS42 = [];
var dotXS44 = [];
var dotXS46 = [];
var dotXS48 = [];

var dotXS55 = [];
var dotXS53 = [];
var dotXS57 = [];
var dotXS52 = [];
var dotXS54 = [];
var dotXS56 = [];
var dotXS58 = [];

var dotXS65 = [];
var dotXS63 = [];
var dotXS67 = [];
var dotXS62 = [];
var dotXS64 = [];
var dotXS66 = [];
var dotXS68 = [];

var dotXS75 = [];
var dotXS73 = [];
var dotXS77 = [];
var dotXS72 = [];
var dotXS74 = [];
var dotXS76 = [];
var dotXS78 = [];

/* ------------------------------------------------------------------------- */

var dotLL0_x;
var dotLL20_x;
var dotLL40_x;
var dotLL60_x;

var dotCenter_x;

var dotLL10_x;
var dotLL30_x;
var dotLL50_x;
var dotLL70_x;

var dotMM41_x;
var dotMM42_x;
var dotMM61_x;
var dotMM62_x;

var dotSS51_x;
var dotSS52_x;
var dotSS53_x;

/* ------------------------------------------------------------------------- */
/* --------- CALCULATE ----------------------------------------------------- */
/* ------------------------------------------------------------------------- */

function calc(i, dateVal)
{
	console.log(i);
	console.log(dateVal);
	
	var dd = dateVal.split('.')[0];
	var mm = dateVal.split('.')[1];
	var yyyy = dateVal.split('.')[2];

	dotLL0[i] = parseInt(sum22(dd));
	dotLL20[i] = parseInt(sum22(mm));
	dotLL40[i] = parseInt(sum22(yyyy.toString()));
	dotLL60[i] = parseInt(sum22(dd + mm + yyyy));

	dotCenter[i] = base22(dotLL0[i] + dotLL20[i] + dotLL40[i] + dotLL60[i]);

	dotLL10[i] = base22(dotLL0[i] + dotLL20[i]);
	dotLL30[i] = base22(dotLL20[i] + dotLL40[i]);
	dotLL50[i] = base22(dotLL40[i] + dotLL60[i]);
	dotLL70[i] = base22(dotLL0[i] + dotLL60[i]);

	dotMM02[i] = base22(dotCenter[i] + dotLL0[i]); 
	dotMM01[i] = base22(dotMM02[i] + dotLL0[i]);
	dotMM22[i] = base22(dotCenter[i] + dotLL20[i]);
	dotMM21[i] = base22(dotMM22[i] + dotLL20[i]);
	dotMM42[i] = base22(dotCenter[i] + dotLL40[i]);
	dotMM41[i] = base22(dotMM42[i] + dotLL40[i]);
	dotMM62[i] = base22(dotCenter[i] + dotLL60[i]);
	dotMM61[i] = base22(dotMM62[i] + dotLL60[i]);

	dotSS11[i] = base22(dotLL0[i] + dotLL20[i]);
	dotSS12[i] = base22(dotMM01[i] + dotMM21[i]);
	dotSS13[i] = base22(dotMM02[i] + dotMM22[i]);
	dotSS51[i] = base22(dotLL40[i] + dotLL60[i]);
	dotSS52[i] = base22(dotMM41[i] + dotMM61[i]);
	dotSS53[i] = base22(dotMM42[i] + dotMM62[i]);

	dotMMC1[i] = base22(dotLL10[i] + dotLL30[i] + dotLL50[i] + dotLL70[i]);
	dotSSC1[i] = base22(dotCenter[i] + dotLL40[i]);

	dotXS5[i] = base22(dotLL0[i] + dotLL10[i]);
	dotXS3[i] = base22(dotLL0[i] + dotXS5[i]);
	dotXS7[i] = base22(dotXS5[i] + dotLL10[i]);
	dotXS2[i] = base22(dotLL0[i] + dotXS3[i]);
	dotXS4[i] = base22(dotXS3[i] + dotXS5[i]);
	dotXS6[i] = base22(dotXS5[i] + dotXS7[i]);
	dotXS8[i] = base22(dotXS7[i] + dotLL10[i]);
	
	dotXS15[i] = base22(dotLL10[i] + dotLL20[i]);
	dotXS13[i] = base22(dotLL10[i] + dotXS15[i]);
	dotXS17[i] = base22(dotXS15[i] + dotLL20[i]);
	dotXS12[i] = base22(dotLL10[i] + dotXS13[i]);
	dotXS14[i] = base22(dotXS13[i] + dotXS15[i]);
	dotXS16[i] = base22(dotXS15[i] + dotXS17[i]);
	dotXS18[i] = base22(dotXS17[i] + dotLL20[i]);

	dotXS25[i] = base22(dotLL20[i] + dotLL30[i]);
	dotXS23[i] = base22(dotLL20[i] + dotXS25[i]);
	dotXS27[i] = base22(dotXS25[i] + dotLL30[i]);
	dotXS22[i] = base22(dotLL20[i] + dotXS23[i]);
	dotXS24[i] = base22(dotXS23[i] + dotXS25[i]);
	dotXS26[i] = base22(dotXS25[i] + dotXS27[i]);
	dotXS28[i] = base22(dotXS27[i] + dotLL30[i]);

	dotXS35[i] = base22(dotLL30[i] + dotLL40[i]);
	dotXS33[i] = base22(dotLL30[i] + dotXS35[i]);
	dotXS37[i] = base22(dotXS35[i] + dotLL40[i]);
	dotXS32[i] = base22(dotLL30[i] + dotXS33[i]);
	dotXS34[i] = base22(dotXS33[i] + dotXS35[i]);
	dotXS36[i] = base22(dotXS35[i] + dotXS37[i]);
	dotXS38[i] = base22(dotXS37[i] + dotLL40[i]);

	dotXS45[i] = base22(dotLL40[i] + dotLL50[i]);
	dotXS43[i] = base22(dotLL40[i] + dotXS45[i]);
	dotXS47[i] = base22(dotXS45[i] + dotLL50[i]);
	dotXS42[i] = base22(dotLL40[i] + dotXS43[i]);
	dotXS44[i] = base22(dotXS43[i] + dotXS45[i]);
	dotXS46[i] = base22(dotXS45[i] + dotXS47[i]);
	dotXS48[i] = base22(dotXS47[i] + dotLL50[i]);

	dotXS55[i] = base22(dotLL50[i] + dotLL60[i]);
	dotXS53[i] = base22(dotLL50[i] + dotXS55[i]);
	dotXS57[i] = base22(dotXS55[i] + dotLL60[i]);
	dotXS52[i] = base22(dotLL50[i] + dotXS53[i]);
	dotXS54[i] = base22(dotXS53[i] + dotXS55[i]);
	dotXS56[i] = base22(dotXS55[i] + dotXS57[i]);
	dotXS58[i] = base22(dotXS57[i] + dotLL60[i]);

	dotXS65[i] = base22(dotLL60[i] + dotLL70[i]);
	dotXS63[i] = base22(dotLL60[i] + dotXS65[i]);
	dotXS67[i] = base22(dotXS65[i] + dotLL70[i]);
	dotXS62[i] = base22(dotLL60[i] + dotXS63[i]);
	dotXS64[i] = base22(dotXS63[i] + dotXS65[i]);
	dotXS66[i] = base22(dotXS65[i] + dotXS67[i]);
	dotXS68[i] = base22(dotXS67[i] + dotLL70[i]);

	dotXS75[i] = base22(dotLL70[i] + dotLL0[i]);
	dotXS73[i] = base22(dotLL70[i] + dotXS75[i]);
	dotXS77[i] = base22(dotXS75[i] + dotLL0[i]);
	dotXS72[i] = base22(dotLL70[i] + dotXS73[i]);
	dotXS74[i] = base22(dotXS73[i] + dotXS75[i]);
	dotXS76[i] = base22(dotXS75[i] + dotXS77[i]);
	dotXS78[i] = base22(dotXS77[i] + dotLL0[i]);
}

function calc_x()
{
	dotLL0_x = base22(dotLL0[0] + dotLL0[1]);
	dotLL20_x = base22(dotLL20[0] + dotLL20[1]);
	dotLL40_x = base22(dotLL40[0] + dotLL40[1]);
	dotLL60_x = base22(dotLL60[0] + dotLL60[1]);

	dotCenter_x = base22(dotCenter[0] + dotCenter[1]);

	dotLL10_x = base22(dotLL10[0] + dotLL10[1]);
	dotLL30_x = base22(dotLL30[0] + dotLL30[1]);
	dotLL50_x = base22(dotLL50[0] + dotLL50[1]);
	dotLL70_x = base22(dotLL70[0] + dotLL70[1]);

	dotMM42_x = base22(dotLL40_x + dotCenter_x);
	dotMM41_x = base22(dotLL40_x + dotMM42_x);
	dotMM62_x = base22(dotLL60_x + dotCenter_x);
	dotMM61_x = base22(dotLL60_x + dotMM62_x);

	dotSS51_x = base22(dotLL40_x + dotLL60_x);
	dotSS52_x = base22(dotMM41_x + dotMM61_x);
	dotSS53_x = base22(dotMM42_x + dotMM62_x);
}

/* ------------------------------------------------------------------------- */
/* --------- BASE 22 ------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

_limitValue = function (value) 
{
	var result = parseInt(value);
	while (result > 22) 
	{
		result = (result + "").split("").map((i) => (x += parseInt(i)), (x = 0)).reverse()[0];
	}
	return result;
};

function sum22(value)
{
	if (value <= 22) {
		return value;
	}

	var result = 0;
	for (var i = 0; i < value.length; i++) {
		result += (value.charCodeAt(i) - 48);
	}
	if (result > 22) {
		return sum22(result.toString());
	} else {
		return result;
	}
}

function base22(value)
{
	if (value <= 22) 
	{
		return value;
	}
	else
	{
		return sum22(value.toString());
	}
}

/* ------------------------------------------------------------------------- */
/* --------- POPULATE ------------------------------------------------------ */
/* ------------------------------------------------------------------------- */

function addSvgText_(x, y, value, fontSize, color)
{
	var svgText = document.createElementNS(svgNS, "text");
		svgText.setAttributeNS(null,"font-family", "Verdana");
		svgText.setAttributeNS(null,"font-size", fontSize);
		svgText.setAttributeNS(null,"alignment-baseline", "middle");
		svgText.setAttributeNS(null,"text-anchor", "middle");
		svgText.setAttributeNS(null,"x", x);     
		svgText.setAttributeNS(null,"y", y); 
		svgText.setAttributeNS(null,"fill", color); 
		svgText.innerHTML = value;
	svgLayer.appendChild(svgText);	
}

function addSvgText(x, y, value, fontSize)
{
	addSvgText_(x, y, value, fontSize, "#fff");	
}

function addAgeValue(x, y, value)
{
	addSvgText_(x, y, value, "3", "#666");
}

function fillSvgX()
{
	// --- main years old -----
	addSvgText(37, 127, dotLL0_x, 8);
	addSvgText(63.360390, 63.360390, dotLL10_x, 8);
	addSvgText(127, 37, dotLL20_x, 8);
	addSvgText(190.639610, 63.360390, dotLL30_x, 8);
	addSvgText(217, 127, dotLL40_x, 8);
	addSvgText(190.639610, 190.639610, dotLL50_x, 8);
	addSvgText(127, 217, dotLL60_x, 8);
	addSvgText(63.360390, 190.639610, dotLL70_x, 8);

	// --- center value -----
	addSvgText(127, 127, dotCenter_x, 8);

	// --- medium values -----
	addSvgText(200.5, 127, dotMM41_x, 5);
	addSvgText(187.5, 127, dotMM42_x, 5);
	addSvgText(127, 200.5, dotMM61_x, 5);
	addSvgText(127, 187.5, dotMM62_x, 5);

	// --- small values -----
	addSvgText(158.5, 158.5, dotSS53_x, 4);
	addSvgText(165, 165, dotSS52_x, 4);
	addSvgText(172, 172, dotSS51_x, 4);
}

function fillSvg(i)
{
	// --- main years old -----
	addSvgText(37, 127, dotLL0[i], 8);
	addSvgText(63.360390, 63.360390, dotLL10[i], 8);
	addSvgText(127, 37, dotLL20[i], 8);
	addSvgText(190.639610, 63.360390, dotLL30[i], 8);
	addSvgText(217, 127, dotLL40[i], 8);
	addSvgText(190.639610, 190.639610, dotLL50[i], 8);
	addSvgText(127, 217, dotLL60[i], 8);
	addSvgText(63.360390, 190.639610, dotLL70[i], 8);

	// --- center value -----
	addSvgText(127, 127, dotCenter[i], 8);

	// --- medium values -----
	addSvgText(53.5, 127, dotMM01[i], 5);
	addSvgText(66.5, 127, dotMM02[i], 5);
	addSvgText(127, 53.5, dotMM21[i], 5);
	addSvgText(127, 66.5, dotMM22[i], 5);
	addSvgText(200.5, 127, dotMM41[i], 5);
	addSvgText(187.5, 127, dotMM42[i], 5);
	addSvgText(127, 200.5, dotMM61[i], 5);
	addSvgText(127, 187.5, dotMM62[i], 5);

	// --- small values -----
	addSvgText(82, 82, dotSS11[i], 4);
	addSvgText(89, 89, dotSS12[i], 4);
	addSvgText(95.5, 95.5, dotSS13[i], 4);
	addSvgText(158.5, 158.5, dotSS53[i], 4);
	addSvgText(165, 165, dotSS52[i], 4);
	addSvgText(172, 172, dotSS51[i], 4);

	// --- new values -----
	addSvgText(144, 127, dotMMC1[i], 5);
	addSvgText(155, 127, dotSSC1[i], 4);

	// --- years old -----
	addAgeValue(33.218854, 112.512988, dotXS2[i]);
	addAgeValue(34.735378, 104.888909, dotXS3[i]);
	addAgeValue(36.845405, 97.407318, dotXS4[i]);
	addAgeValue(39.535926, 90.114340, dotXS5[i]);
	addAgeValue(42.790354, 83.054941, dotXS6[i]);
	addAgeValue(46.588624, 76.272642, dotXS7[i]);
	addAgeValue(50.907318, 69.809260, dotXS8[i]);
	addAgeValue(70.809260, 50.907318, dotXS12[i]);
	addAgeValue(77.272642, 46.588624, dotXS13[i]);
	addAgeValue(84.054941, 42.790354, dotXS14[i]);
	addAgeValue(91.114340, 39.535926, dotXS15[i]);
	addAgeValue(98.407318, 36.845405, dotXS16[i]);
	addAgeValue(105.888909, 34.735378, dotXS17[i]);
	addAgeValue(113.512988, 33.218854, dotXS18[i]);
	addAgeValue(141.487012, 33.218854, dotXS22[i]);
	addAgeValue(149.111091, 34.735378, dotXS23[i]);
	addAgeValue(156.592682, 36.845405, dotXS24[i]);
	addAgeValue(163.885660, 39.535926, dotXS25[i]);
	addAgeValue(170.945059, 42.790354, dotXS26[i]);
	addAgeValue(177.727358, 46.588624, dotXS27[i]);
	addAgeValue(184.190740, 50.907318, dotXS28[i]);
	addAgeValue(203.092682, 69.809260, dotXS32[i]);
	addAgeValue(207.411376, 76.272642, dotXS33[i]);
	addAgeValue(211.209646, 83.054941, dotXS34[i]);
	addAgeValue(214.464074, 90.114340, dotXS35[i]);
	addAgeValue(217.154595, 97.407318, dotXS36[i]);
	addAgeValue(219.264622, 104.888909, dotXS37[i]);
	addAgeValue(220.781146, 112.512988, dotXS38[i]);
	addAgeValue(220.781146, 141.487012, dotXS42[i]);
	addAgeValue(219.264622, 149.111091, dotXS43[i]);
	addAgeValue(217.154595, 156.592682, dotXS44[i]);
	addAgeValue(214.464074, 163.885660, dotXS45[i]);
	addAgeValue(211.209646, 170.945059, dotXS46[i]);
	addAgeValue(207.411376, 177.727358, dotXS47[i]);
	addAgeValue(203.092682, 184.190740, dotXS48[i]);
	addAgeValue(184.190740, 203.092682, dotXS52[i]);
	addAgeValue(177.727358, 207.411376, dotXS53[i]);
	addAgeValue(170.945059, 211.209646, dotXS54[i]);
	addAgeValue(163.885660, 214.464074, dotXS55[i]);
	addAgeValue(156.592682, 217.154595, dotXS56[i]);
	addAgeValue(149.111091, 219.264622, dotXS57[i]);
	addAgeValue(141.487012, 220.781146, dotXS58[i]);
	addAgeValue(113.512988, 220.781146, dotXS62[i]);
	addAgeValue(105.888909, 219.264622, dotXS63[i]);
	addAgeValue(98.407318, 217.154595, dotXS64[i]);
	addAgeValue(91.114340, 214.464074, dotXS65[i]);
	addAgeValue(84.054941, 211.209646, dotXS66[i]);
	addAgeValue(77.272642, 207.411376, dotXS67[i]);
	addAgeValue(70.809260, 203.092682, dotXS68[i]);
	addAgeValue(50.907318, 184.190740, dotXS72[i]);
	addAgeValue(46.588624, 177.727358, dotXS73[i]);
	addAgeValue(42.790354, 170.945059, dotXS74[i]);
	addAgeValue(39.535926, 163.885660, dotXS75[i]);
	addAgeValue(36.845405, 156.592682, dotXS76[i]);
	addAgeValue(34.735378, 149.111091, dotXS77[i]);
	addAgeValue(33.218854, 141.487012, dotXS78[i]);
}

/* ------------------------------------------------------------------------- */

function setCellValue22(id, value)
{
	document.getElementById(id).innerHTML = base22(value);
}

function populateA(i)
{
	setCellValue22("mat1_" + i, dotLL30[i]);
	setCellValue22("mat2_" + i, dotLL70[i]);
	setCellValue22("mat3_" + i, (dotLL30[i] + dotLL70[i]));
	setCellValue22("pat1_" + i, dotLL10[i]);
	setCellValue22("pat2_" + i, dotLL50[i]);
	setCellValue22("pat3_" + i, (dotLL10[i] + dotLL50[i]));
}

function populateB(i)
{
	setCellValue22("cell_a1_" + i, dotLL0[i]);
	setCellValue22("cell_a2_" + i, dotLL20[i]);
	setCellValue22("cell_a3_" + i, dotSS11[i]);

	setCellValue22("cell_b1_" + i, dotMM01[i]);
	setCellValue22("cell_b2_" + i, dotMM21[i]);
	setCellValue22("cell_b3_" + i, dotSS12[i]);

	setCellValue22("cell_c1_" + i, dotMM02[i]);
	setCellValue22("cell_c2_" + i, dotMM22[i]);
	setCellValue22("cell_c3_" + i, dotSS13[i]);

	setCellValue22("cell_d1_" + i, dotCenter[i]);
	setCellValue22("cell_d2_" + i, dotCenter[i]);
	setCellValue22("cell_d3_" + i, base22(dotCenter[i] * 2));

	setCellValue22("cell_e1_" + i, dotMM42[i]);
	setCellValue22("cell_e2_" + i, dotMM62[i]);
	setCellValue22("cell_e3_" + i, dotSS53[i]);

	setCellValue22("cell_f1_" + i, dotMM41[i]);
	setCellValue22("cell_f2_" + i, dotMM61[i]);
	setCellValue22("cell_f3_" + i, dotSS52[i]);

	setCellValue22("cell_g1_" + i, dotLL40[i]);
	setCellValue22("cell_g2_" + i, dotLL60[i]);
	setCellValue22("cell_g3_" + i, dotSS51[i]);
	
	var total_h1 = dotLL0[i] + dotMM01[i] + dotMM02[i] + dotCenter[i] + dotMM42[i] + dotMM41[i] + dotLL40[i];
	setCellValue22("cell_h1_" + i, total_h1);
	var total_h2 = dotLL20[i] + dotMM21[i] + dotMM22[i] + dotCenter[i] + dotMM62[i] + dotMM61[i] + dotLL60[i];
	setCellValue22("cell_h2_" + i, total_h2);
	var total_h3 = base22(total_h1) + base22(total_h2);
	setCellValue22("cell_h3_" + i, total_h3);
}

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

function setSvg_x()
{
	svg = svg_x;

	if (typeof(svgLayer_x) != 'undefined' && svgLayer_x != null)
	{
		svgLayer_x.parentNode.removeChild(svgLayer_x);
	}
	svgLayer_x = document.createElementNS(svgNS, "g");
	svgLayer_x.setAttributeNS(null, "id", "svgGroupLayer_x");
	svg.appendChild(svgLayer_x);	
	
	svgLayer = svgLayer_x;
}

function setSvg_0()
{
	svg = svg_0;

	if (typeof(svgLayer_0) != 'undefined' && svgLayer_0 != null)
	{
		svgLayer_0.parentNode.removeChild(svgLayer_0);
	}
	svgLayer_0 = document.createElementNS(svgNS, "g");
	svgLayer_0.setAttributeNS(null, "id", "svgGroupLayer_0");
	svg.appendChild(svgLayer_0);	

	svgLayer = svgLayer_0;
}

function setSvg_1()
{
	svg = svg_1;

	if (typeof(svgLayer_1) != 'undefined' && svgLayer_1 != null)
	{
		svgLayer_1.parentNode.removeChild(svgLayer_1);
	}
	svgLayer_1 = document.createElementNS(svgNS, "g");
	svgLayer_1.setAttributeNS(null, "id", "svgGroupLayer_1");
	svg.appendChild(svgLayer_1);	

	svgLayer = svgLayer_1;
}


// ---------------------------------------------------------------

function getAge (element, date) 
{
	var self = this;
	var arr = date.split(".");
	var value = (new Date() - new Date(arr[2] + "-" + arr[1] + "-" + arr[0] + "T00:00")) / (1000 * 60 * 60 * 24 * 365);
	var message = "";
	if (value < 1) {
		message = "0 años";
	} else if (value > 1 && value < 2) {
		message = parseInt(value) + " año";
	} else {
		message = Math.floor(value) + " años";
	}
	element.innerHTML = message;
};

// ---------------------------------------------------------------

function calculate()
{
	$('#panel0').hide();
	$('#panelX').hide(); 
	$('#panel1').hide(); 
	$('#panel2').hide();

	var dateVal_0 = document.getElementById('inputDate1').value;
	var dateVal_1 = document.getElementById('inputDate2').value;

	if(dateVal_0.match(dateformat))
	{	
		var age_0 = document.getElementById('age_0');
		getAge(age_0, dateVal_0);

		calc(0, dateVal_0);

		setSvg_0();
		fillSvg(0);

		populateA(0);
		populateB(0);

		$('#panel1').show(); 

		if(dateVal_0.match(dateformat))
		{
			var age_1 = document.getElementById('age_1');
			getAge(age_1, dateVal_1);

			calc(1, dateVal_1);
			calc_x();

			setSvg_1();
			fillSvg(1);

			setSvg_x();
			fillSvgX();

			populateA(1);
			populateB(1);

			$('#panelX').show(); 
			$('#panel2').show(); 
		}
	}
	else
	{
		$('#panel0').show();
	}
}
