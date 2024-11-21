/* *************************************
* this app is designed for fun and prepration for
* useful applications by Daniel
***************************************/
var trueWid, trueHei;
var tablePushed = false;
var R,G,B;
var onlyWinPos1,onlyWinPos2;
R = 11;
G = 200;
B = 222;
var isAddOpen = false, isAboutOpen = false, perMode = true, isSettingOpen = false,doTempMap = false,rangeMap = false, isTableEnable = true, isSpecOpen = false, doSpectumetry = false,isPersian = false;
var whota = 60;
//var atomPos = [665, 536];
var atomPos = [0, 0];
var allNames = ["hidrogen", "helium", "lithium", "berelium", "boron", "carbon", "nitrogen", "oxygen", "felour", "neon","sodium","Magnesium","Aluminium","Silicon", "Phosphorus","Sulfur", "Chlorine","Argon"];
var hidrange = [4, 410.1, 434 ,486 ,656.2];
var helrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];

var specfunc = {
	elm1: "",
	elmMul1: 0,
	elm2: "",
	elmMul2: 0,
	res1: "",
	resMul1: 0,
	res2: "",
	resMul2: 0
}
gram1 = new textIn;
gram2 = new textIn;
gram3 = new textIn;
gram4 = new textIn;

missingGram = new buttonl;


var litrange = [5, 470 , 480 ,543 , 630,670];
var berrange = [12, 429 , 449 ,458 ,473,483,503,645,667,676,686,692,700];
var borrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];
var carrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];
var nitrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];
var oxyrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];
var felrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];
var netrange = [5, 388.8 , 447.1 ,501.5 ,587.5,706.5];

var elecline1 = [0,180];
var elecline2 = [0,45,90,135,180,225, 270, 315];
var elecline3 = [0,45,90,135,180,225, 270, 315];
var enabled = "", funcPressed = "", enabledMaterial = "";
//boxColor = color()
var elecnumber = 0, changeTo;
var elecstep = 0;
//var elecsci2[8];
//var elecsci3[8];

function setup() {
  createCanvas(windowWidth - 6,windowHeight - 6);
  onlyWinPos1 = (windowWidth - 6) / 2;
  onlyWinPos2 = 300;
//  backColor = color(11,200,222);
 // background(backColor);
}

function preload()
{
	gera = loadImage("./assets/gear.png");
	lightchart = loadImage("./assets/lightspecchart.png");
	lighticon = loadImage("./assets/specicon.png");
	spectumetryI = loadImage("./assets/spectumetry.png");
}

class backColors
{
	constructor()
	{
		this.x;
		this.colori;
		this.rr;
		this.gg;
		this.bb;
	}

	colorer(X, Y)
	{
		if(X > this.x && X < this.x + 40 && Y > 160 && Y < 180)
		{
			R = this.rr;
			G = this.gg;
			B = this.bb;
		}
	}

	coloring(R, G, B)
	{
		this.colori = color(R,G,B);
		this.rr = R;
		this.gg = G;
		this.bb = B;
	}

	colorShow()
	{
		push();
		fill(this.colori);
		rect(this.x,160,40,20);
		pop();
	}
}


class elements
{
	constructor()
	{
		this.x;
		this.y;
		this.name;
		this.fullName;
		this.number;
		this.line;
		this.choose;
		this.inMaterial;
	}

	chosen(X, Y)
	{
		if(X > 100 + ((this.x - 1) * whota) && X < 100 + whota + ((this.x - 1) *whota) && Y > 100 + ((this.y - 1)*whota) && Y < 100 + whota + ((this.y - 1) * whota))
		{
			this.choose = true;
			enabled = this.name;
			tablePushed = true;
			if(this.x > 2)
			{
				elecnumber = this.x - 1;
			}
			else
			{
				elecnumber = this.x;
			}
			elecstep = this.y;
			if(elecstep == 3)
			{
				changeTo  = elecline2[0];
				elecline2[1] = (360 / 8) * 1 + changeTo;
				elecline2[2] = (360 / 8) * 2 + changeTo;
				elecline2[3] = (360 / 8) * 3 + changeTo;
				elecline2[4] = (360 / 8) * 4 + changeTo;
				elecline2[5] = (360 / 8) * 5 + changeTo;
				elecline2[6] = (360 / 8) * 6 + changeTo;
				elecline2[7] = (360 / 8) * 7 + changeTo;
				if(this.x > 2)
				{
					changeTo  = elecline3[0];
					elecline3[1] = (360 / (this.x - 1)) * 1 + changeTo;
					elecline3[2] = (360 / (this.x - 1)) * 2 + changeTo;
					elecline3[3] = (360 / (this.x - 1)) * 3 + changeTo;
					elecline3[4] = (360 / (this.x - 1)) * 4 + changeTo;
					elecline3[5] = (360 / (this.x - 1)) * 5 + changeTo;
					elecline3[6] = (360 / (this.x - 1)) * 6 + changeTo;
					elecline3[7] = (360 / (this.x - 1)) * 7 + changeTo;
				}
				else
				{
					changeTo  = elecline3[0];
					elecline3[1] = (360 / this.x) * 1 + changeTo;
				}

			}
			else
			{
				if(this.x > 2)
				{
					changeTo  = elecline2[0];
					elecline2[1] = (360 / (this.x - 1)) * 1 + changeTo;
					elecline2[2] = (360 / (this.x - 1)) * 2 + changeTo;
					elecline2[3] = (360 / (this.x - 1)) * 3 + changeTo;
					elecline2[4] = (360 / (this.x - 1)) * 4 + changeTo;
					elecline2[5] = (360 / (this.x - 1)) * 5 + changeTo;
					elecline2[6] = (360 / (this.x - 1)) * 6 + changeTo;
					elecline2[7] = (360 / (this.x - 1)) * 7 + changeTo;
				}else
				{
					changeTo  = elecline2[0];
					elecline2[1] = (360 / this.x) * 1 + changeTo;
				}
			}
		}
		else
		{
			this.choose = false;
//			enabled = "";
//			elecstep = 0;
//			elecnumber = 0;
		}
	}
	display()
	{
		push();
		strokeWeight(1);
		stroke("black");
		if(this.choose)
		{
			fill('yellow');
		}
		else
		{
			fill('white');
		}
		if(this.inMaterial && this.choose)
		{
			fill("purple");
		}
		else if(this.inMaterial)
		{
			fill("green");
		}
		rect(100 + ((this.x - 1)*whota), 100 + ((this.y - 1) * whota), whota,whota);
		fill('black');
		textSize(40);
		text(this.name, 108.5 + ((this.x - 1) * whota), 137.5 + ((this.y - 1) * whota));
		textSize(10);
		text(allNames[this.fullName], 105 + ((this.x - 1) * whota), 150 + ((this.y - 1) * whota));
		text(this.number, 145 + ((this.x - 1) * whota), 150 + ((this.y - 1) * whota))

		pop();
	}
}

Hid = new elements;
Hell = new elements;
lit = new elements;
berel = new elements;
bor = new elements;
carbon = new elements;
nitro = new elements;
oxygen = new elements;
felo = new elements;
neon = new elements;

nabi = new elements;
magi = new elements;
ali = new elements;
sili = new elements;
pot = new elements;
sulfur = new elements;
culor = new elements;
argon = new elements;

Hid.name = "H";
Hid.fullName = 0;
Hid.x = 1;
Hid.y = 1;
Hid.number = 1;

Hell.name = "He";
Hell.fullName = 1;
Hell.x = 9;
Hell.y = 1;
Hell.number = 2;

lit.name = "Li";
lit.fullName = 2;
lit.x = 1;
lit.y = 2;
lit.number = 3;

berel.name = "Be";
berel.fullName = 3;
berel.x = 2;
berel.y = 2;
berel.number = 4;

bor.name = "B";
bor.fullName = 4;
bor.x = 4;
bor.y = 2;
bor.number = 5;

carbon.name = "C";
carbon.fullName = 5;
carbon.x = 5;
carbon.y = 2;
carbon.number = 6;

nitro.name = "N";
nitro.fullName = 6;
nitro.x = 6;
nitro.y = 2;
nitro.number = 7;

oxygen.name = "O";
oxygen.fullName = 7;
oxygen.x = 7;
oxygen.y = 2;
oxygen.number = 8;

felo.name = "F";
felo.fullName = 8;
felo.x = 8;
felo.y = 2;
felo.number = 9;

neon.name = "Ne";
neon.fullName = 9;
neon.x = 9;
neon.y = 2;
neon.number = 10;

nabi.name = "Na";
nabi.fullName = 10;
nabi.x = 1;
nabi.y = 3;
nabi.number = 11;

magi.name = "Mg";
magi.fullName = 11;
magi.x = 2;
magi.y = 3;
magi.number = 12;

ali.name = "Al";
ali.fullName = 12;
ali.x = 4;
ali.y = 3;
ali.number = 13;

sili.name = "Si";
sili.fullName = 13;
sili.x = 5;
sili.y = 3;
sili.number = 14;

pot.name = "P";
pot.fullName = 14;
pot.x = 6;
pot.y = 3;
pot.number = 15;

sulfur.name = "S";
sulfur.fullName = 15;
sulfur.x = 7;
sulfur.y = 3;
sulfur.number = 16;

culor.name = "Cl";
culor.fullName = 16;
culor.x = 8;
culor.y = 3;
culor.number = 17;

argon.name = "Ar";
argon.fullName = 17;
argon.x = 9;
argon.y = 3;
argon.number = 18;


function materialCleaner()
{
	Hid.inMaterial = false;
	Hell.inMaterial = false;
	lit.inMaterial = false;
	berel.inMaterial = false;
	bor.inMaterial = false;
	carbon.inMaterial = false;
	nitro.inMaterial = false;
	oxygen.inMaterial = false;
	felo.inMaterial = false;
	nabi.inMaterial = false;
	magi.inMaterial =false;
	ali.inMaterial = false;
	sili.inMaterial = false;
	pot.inMaterial =false;
	sulfur.inMaterial = false;
	culor.inMaterial =false;
	argon.inMaterial = false;
}


class materials
{
	constructor()
	{
		this.x;
		this.y;
		this.atms;
		this.name;
		this.formula;
	}

	hightlight(theX, theY)
	{
		var mattHeight = 40;
		var mattWidth = 80;
		if(theX > this.x && theX < this.x + mattWidth && theY > this.y && theY < mattHeight + this.y){
			gram1.text = "";
			gram2.text = "";
			gram3.text = "";
			gram4.text = "";
			materialCleaner();
			var len = this.atms.length;
			for(var lim = 0; lim < len; lim++)
			{
				switch(this.atms[lim])
				{
					case "H":
						Hid.inMaterial = true;
						break;
					case "He":
						hell.inMaterial = true;
						break;
					case "Li":
						lit.inMaterial = true;
						break;
					case "Be":
						berel.inMaterial = true;
						break;
					case "B":
						bor.inMaterial = true;
						break;
					case "C":
						carbon.inMaterial = true;
						break;
					case "N":
						nitro.inMaterial = true;
						break;
					case "O":
						oxygen.inMaterial = true;
						break;
					case "F":
						felo.inMaterial = true;
						break;
					case "Ne":
						neon.inMaterial = true;
						break;

					case "Na":
						nabi.inMaterial = true;
						break;
					case "Mg":
						magi.inMaterial = true;
						break;
					case "Al":
						ali.inMaterial = true;
						break;
					case "Si":
						sili.inMaterial = true;
						break;
					case "P":
						pot.inMaterial = true;
						break;
					case "S":
						sulfur.inMaterial = true;
						break;
					case "Cl":
						culor.inMaterial = true;
						break;
					case "Ar":
						argon.inMaterial = true;
						break;
					default:
						break;
				}
			}
			isAddOpen = true;
			enabledMaterial = this.name;
		}
	}

	show()
	{
		if(enabledMaterial == this.name)
		{
			fill('yellow');
		}
		else
		{
			fill('aqua');
		}
		rect(this.x, this.y, 80,40,10);
		push();
		fill('black')
		text(this.name, this.x+ 15, this.y + 25);
		pop();
	}

}


class specItemRight
{
	constructor()
	{
		this.x;
		this.y;
		this.text;
	}

	show()
	{
		if(funcPressed == this.text)
		{
			fill("green");
		}
		else
		{
			fill('aqua');
		}
		//fill("green");
		rect(this.x, this.y, 80,40,10);
		fill('black');
		textSize(30);
		text(this.text, this.x + 10, this.y + 25);
	}

	clicked(X, Y)
	{
		if(X > this.x && X < this.x + 80 && Y > this.y && Y < this.y + 40)
		{
			funcPressed = this.text;
			isAddOpen = true;
		}
	}
}




wood = new materials;
sugar = new materials;
glass = new materials;
mgmetal = new materials;
burn = new specItemRight;
acid = new specItemRight;



function mouseClicked()
{
	tablePushed = false;
	if(isTableEnable)
	{
		Hid.chosen(mouseX, mouseY);
		Hell.chosen(mouseX, mouseY);
		lit.chosen(mouseX, mouseY);
		berel.chosen(mouseX, mouseY);
		bor.chosen(mouseX, mouseY);
		nitro.chosen(mouseX, mouseY);
		carbon.chosen(mouseX, mouseY);
		oxygen.chosen(mouseX, mouseY);
		felo.chosen(mouseX, mouseY);
		neon.chosen(mouseX, mouseY);
		nabi.chosen(mouseX, mouseY);
		magi.chosen(mouseX, mouseY);
		ali.chosen(mouseX, mouseY);
		sili.chosen(mouseX, mouseY);
		pot.chosen(mouseX, mouseY);
		sulfur.chosen(mouseX, mouseY);
		culor.chosen(mouseX, mouseY);
		argon.chosen(mouseX, mouseY);
	}

	if(mouseX > trueWid - 40 && mouseX < trueWid && mouseY > 0 && mouseY < 40)
	{
		if(isSettingOpen)
		{
			isSettingOpen = false;
		}
		else
		{
			isSettingOpen = true;
		}
	}
	else if(mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40)
	{
		if(rangeMap)
		{
			rangeMap = false;
		}
		else
		{
			rangeMap = true;
		}
	}
	else if(isSettingOpen && mouseX > trueWid - 230 && mouseX < trueWid - 180 && mouseY > 90 && mouseY < 110)
	{
		if(perMode)
		{
			perMode	= false;
		}
		else
		{
			perMode = true;
		}
	}
	else if(isSettingOpen && mouseX > trueWid - 230 && mouseX < trueWid - 180 && mouseY > 210 && mouseY < 230)
	{
		if(isPersian)
		{
			isPersian = false;
//			var allNames = ["hidrogen", "helium", "lithium", "berelium", "boron", "carbon", "nitrogen", "oxygen", "felour", "neon","sodium","Magnesium","Aluminium","Silicon", "Phosphorus","Sulfur", "Chlorine","Argon"];
			allNames[0] = "hidrogen";
			allNames[1] = "helium";
			allNames[2] = "lithium";
			allNames[3] = "berelium";
			allNames[4] = "boron";
			allNames[5] = "carbon";
			allNames[6] = "nitrogen";
			allNames[7] = "oxygen";
			allNames[8] = "felour";
			allNames[9] = "neon";
			allNames[10] = "sodium";
			allNames[11] = "Magnesium";
			allNames[12] = "Aluminium";
			allNames[13] = "Silicon";
			allNames[14] = "Phosphorus";
			allNames[15] = "sulfur";
			allNames[16] = "chlorine";
			allNames[17] = "argon";
		}
		else
		{
			isPersian = true;
//			allNames = ["هیدروژن", "هلیم", "لیتیم", "برلیم", "بور", "کربن", "نیتروژن", "اکسیژن", "فلوئور", "نئون","سدیم","منیزیم","آلمینیم","سیلیسیم", "فسفر","گوگرد", "کلر","آرگون"];
			allNames[0] = "هیدروژن";
			allNames[1] = "هلیم";
			allNames[2] = "لیتیم";
			allNames[3] = "برلیم";
			allNames[4] = "بور";
			allNames[5] = "کربن";
			allNames[6] = "نیتروژن";
			allNames[7] = "اکسیژن";
			allNames[8] = "فلوئور";
			allNames[9] = "نئون";
			allNames[10] = "سدیم";
			allNames[11] = "منیزیم";
			allNames[12] = "آلمینیم";
			allNames[13] = "سیلیسیم";
			allNames[14] = "فسفر";
			allNames[15] = "گوگرد";
			allNames[16] = "کلر";
			allNames[17] = "آرگون";
		}
	}
	else if(mouseX > 680 && mouseX < 720 && mouseY > 0 && mouseY < 40)
	{
		isAboutOpen = false;
		if(isAddOpen == true)
		{
			isAddOpen = false;
		}
		else
		{
			isAddOpen = true;
		}
	}

	else if(mouseX > trueWid - 40 && mouseX < trueWid && mouseY > trueHei - 120 && mouseY < trueHei - 80)
	{
		if(!isAboutOpen)
		{
			isAboutOpen = true;
		}
		else
		{
			isAboutOpen = false;
		}
	}

	//rect(trueWid - 40, 240,40,40,10,0,0,10);

	else if(mouseX > trueWid - 40 && mouseX < trueWid && mouseY > 240 && mouseY < 280)
	{
		if(!isSpecOpen)
		{
			isSpecOpen = true;
		}
		else
		{
			isSpecOpen = false;
			doSpectumetry = false;
		}
	}//rect(trueWid - 220 , 440, 80,40,10);
	else if(mouseX > trueWid - 220 && mouseX < trueWid - 140 && mouseY > 440 && mouseY < 480)
	{
		if(funcPressed != "" && enabledMaterial != "")
		{
			if(!doSpectumetry)
			{
				doSpectumetry = true;
			}
			else
			{
				doSpectumetry = false;
			}
		}
	}
	//rect(onlyWinPos1 + 260, onlyWinPos2, 40,40,0,10,0,10);
	else if(mouseX > onlyWinPos1 + 260 && mouseX < onlyWinPos1 + 300 && mouseY > onlyWinPos2 && mouseY < onlyWinPos2 + 40 && doSpectumetry)
	{
		doSpectumetry = false;
	}
	else if(missingGram.clicked(mouseX, mouseY))
	{
		gramFinder(specfunc.elm1,specfunc.elm2,specfunc.res1,specfunc.res2);
	}
	else if(mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40)
	{
		if(!isTableEnable)
		{
			isTableEnable = true;
		}
		else
		{
			isTableEnable = false;
			if(enabled != "")
			{
				enabled = "";
				isAddOpen = false;
				isAboutOpen = false;
				elecnumber = 0;
				elecstep = 0;
				rangeMap = false;
			}
		}
	}
	else if(isAddOpen)
	{
		wood.hightlight(mouseX, mouseY);
		sugar.hightlight(mouseX, mouseY);
		glass.hightlight(mouseX, mouseY);
		mgmetal.hightlight(mouseX, mouseY);
	}
	else if(!tablePushed)
	{
		enabled = "";
		isAddOpen = false;
		isAboutOpen = false;
		elecnumber = 0;
		elecstep = 0;
	}
	if(!isSpecOpen)
	{
		funcPressed = "";
	}

	gram1.clicked(mouseX, mouseY);
	gram2.clicked(mouseX, mouseY);
	gram3.clicked(mouseX, mouseY);
	if(specfunc.res2 != "")
	{
		gram4.clicked(mouseX,mouseY);
	}
	burn.clicked(mouseX, mouseY);
	//acid.clicked(mouseX, mouseY);
	fred.colorer(mouseX, mouseY);
	fgreen.colorer(mouseX, mouseY);
	fblue.colorer(mouseX, mouseY);
	fyellow.colorer(mouseX, mouseY);
}

function keyPressed()
{
	if(keyCode != 8)
	{
		gram1.typed(key);
		gram2.typed(key);
		gram3.typed(key);
		gram4.typed(key);
	}
	else
	{
		gram1.delete();
		gram2.delete();
		gram3.delete();
		gram4.delete();
	}
}

function tellSpecResalt(formula1, result)
{
	text(formula1 + " => " + result, trueWid - 240,270,120);
}

function gramFinder(mat1,mat2,mat3,mat4)
{
	if(gram1.text != "" && gram2.text != "")
	{
		if(mat1 == "Mg")
		{
			gram3.text = Math.round((parseFloat(gram1.text) / 24.305) *  (parseFloat(gram2.text) /8) * 40.3044);
		}
		else
		{
			gram3.text = Math.round((parseFloat(gram1.text) / 180.16) *  (parseFloat(gram2.text) / 16 * 6) * 44.01 * 6);
			gram4.text = Math.round((parseFloat(gram1.text) / 180.16) *  (parseFloat(gram2.text) / 16 * 6) * 18.01528 * 6);
		}
	}
}

function windowResized()
{
	resizeCanvas(trueWid, trueHei);
}

function draw() {
	backColor = color(R,G,B);
	background(backColor);
	trueWid = windowWidth - 6;
	trueHei = windowHeight - 6;

	//atomPos[0] = mouseX;
	//atomPos[1] = mouseY;
	//that was soo funny
	//oh no now it doesnt work for some reason
	atomPos[0] = trueWid / 2 + trueWid / 4 - 29;
	atomPos[1] = trueHei / 2 + trueHei / 4 - 29;
	var eleradians1 = [radians(elecline1[0]), radians(elecline1[1])];
	var eleradians2 = [radians(elecline2[0]), radians(elecline2[1]), radians(elecline2[2]), radians(elecline2[3]), radians(elecline2[4]), radians(elecline2[5]), radians(elecline2[6]), radians(elecline2[7])];
	var eleradians3 = [radians(elecline3[0]), radians(elecline3[1]), radians(elecline3[2]), radians(elecline3[3]), radians(elecline3[4]), radians(elecline3[5]), radians(elecline3[6]), radians(elecline3[7])];

	var line1dis = 60;
	push();
	noFill();
	if(elecnumber != 0)
	{
		if(elecnumber >= 2 || elecstep > 1)
		{
			stroke('green');
		}
		else
		{
			stroke('red');
		}
		ellipse(atomPos[0], atomPos[1], line1dis + 60);
	}
	pop();
	var elecposx1 = [atomPos[0] + line1dis * cos(eleradians1[0]), atomPos[0] + line1dis * cos(eleradians1[1])];
	var elecposy1 = [atomPos[1] + line1dis * sin(eleradians1[0]), atomPos[1] + line1dis * sin(eleradians1[1])];
	line1dis = 120;
	push();
	noFill();
	if(elecstep >= 2)
	{
		if(elecnumber == 8 || elecstep > 2)
		{
			stroke('green');
		}
		else
		{
			stroke('red');
		}
		ellipse(atomPos[0], atomPos[1], line1dis + 120);
	}
	pop();
	var elecposx2 = [atomPos[0] + line1dis * cos(eleradians2[0]), atomPos[0] + line1dis * cos(eleradians2[1]),atomPos[0] + line1dis * cos(eleradians2[2]), atomPos[0] + line1dis * cos(eleradians2[3]),atomPos[0] + line1dis * cos(eleradians2[4]), atomPos[0] + line1dis * cos(eleradians2[5]),atomPos[0] + line1dis * cos(eleradians2[6]), atomPos[0] + line1dis * cos(eleradians2[7])];
	var elecposy2 = [atomPos[1] + line1dis * sin(eleradians2[0]), atomPos[1] + line1dis * sin(eleradians2[1]),atomPos[1] + line1dis * sin(eleradians2[2]), atomPos[1] + line1dis * sin(eleradians2[3]),atomPos[1] + line1dis * sin(eleradians2[4]), atomPos[1] + line1dis * sin(eleradians2[5]),atomPos[1] + line1dis * sin(eleradians2[6]), atomPos[1] + line1dis * sin(eleradians2[7])];

	line1dis = 180;
	push();
	noFill();
	if(elecstep >= 3)
	{
		if(elecnumber == 8 || elecstep > 3)
		{
			stroke('green');
		}
		else
		{
			stroke('red');
		}
		ellipse(atomPos[0], atomPos[1], line1dis + 180);
	}
	pop();

	var elecposx3 = [atomPos[0] + line1dis * cos(eleradians3[0]), atomPos[0] + line1dis * cos(eleradians3[1]),atomPos[0] + line1dis * cos(eleradians3[2]), atomPos[0] + line1dis * cos(eleradians3[3]),atomPos[0] + line1dis * cos(eleradians3[4]), atomPos[0] + line1dis * cos(eleradians3[5]),atomPos[0] + line1dis * cos(eleradians3[6]), atomPos[0] + line1dis * cos(eleradians3[7])];
	var elecposy3 = [atomPos[1] + line1dis * sin(eleradians3[0]), atomPos[1] + line1dis * sin(eleradians3[1]),atomPos[1] + line1dis * sin(eleradians3[2]), atomPos[1] + line1dis * sin(eleradians3[3]),atomPos[1] + line1dis * sin(eleradians3[4]), atomPos[1] + line1dis * sin(eleradians3[5]),atomPos[1] + line1dis * sin(eleradians3[6]), atomPos[1] + line1dis * sin(eleradians3[7])];


	var speed = 3;
	elecline1[0] += speed;
	elecline1[1] += speed;
	speed = 2;
	elecline2[0] += speed;
	elecline2[1] += speed;
	elecline2[2] += speed;
	elecline2[3] += speed;
	elecline2[4] += speed;
	elecline2[5] += speed;
	elecline2[6] += speed;
	elecline2[7] += speed;
	speed = 1;
	elecline3[0] += speed;
	elecline3[1] += speed;
	elecline3[2] += speed;
	elecline3[3] += speed;
	elecline3[4] += speed;
	elecline3[5] += speed;
	elecline3[6] += speed;
	elecline3[7] += speed;
	//rendering  options

	fred = new backColors;
	fred.coloring(255,0,0);
	fred.x = trueWid - 225;

	fgreen = new backColors;
	fgreen.coloring(0,255,0);
	fgreen.x = trueWid - 225 + 40;

	fblue = new backColors;
	fblue.coloring(0,0,255);
	fblue.x = trueWid - 225 + 80;

	fyellow = new backColors;
	fyellow.coloring(255,255,0);
	fyellow.x = trueWid - 225 + 120;

	push();
	textSize(20);
	if(isSettingOpen)
	{
		var SettMenPos = [trueWid - 240, 40];
		rect(SettMenPos[0], SettMenPos[1], 200,200, 10);
		fill('black');
		if(!isPersian)
		{
			text("Settings", SettMenPos[0] + 10, SettMenPos[1] + 20);
			text("Performance mode", SettMenPos[0] + 10, SettMenPos[1] + 40);
			text("backcolor", SettMenPos[0] + 10, SettMenPos[1] + 100);
		}
		else
		{
			text("تنظیمات", SettMenPos[0] + 10, SettMenPos[1] + 20);
			text("حالت سرعت", SettMenPos[0] + 10, SettMenPos[1] + 40);
			text("رنگ پس زمینه", SettMenPos[0] + 10, SettMenPos[1] + 100);
		}
		text("ترجمه فارسی", SettMenPos[0] + 10, SettMenPos[1] + 160);
		if(perMode)
		{
			fill('blue');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 50, 50,20);
			fill('while');
			rect(SettMenPos[0] + 40, SettMenPos[1] + 50, 20,20);
		}
		else
		{
			fill('grey');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 50, 50,20);
			fill('while');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 50, 20,20);
		}
		fred.colorShow();
		fgreen.colorShow();
		fblue.colorShow();
		fyellow.colorShow();
		if(isPersian)
		{
			fill('blue');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 170, 50,20);
			fill('while');
			rect(SettMenPos[0] + 40, SettMenPos[1] + 170, 20,20);
		}
		else
		{
			fill('grey');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 170, 50,20);
			fill('while');
			rect(SettMenPos[0] + 10, SettMenPos[1] + 170, 20,20);
		}
	}
	pop();
	push();//spectum light over the here
	fill('aqua');
	rect(40,0,40,40,0,10,10,0);
	image(lighticon,40,0,40,40);
	fill('black');
	stroke('white');
	strokeWeight(10);
	if(rangeMap)
	{
		var spexH = trueHei - 140;
		rect (120,spexH, 370, 60);
		image(lightchart,120,spexH,370,60);
		noStroke();
		fill('black');
		if(enabled == "H")
		{
			for(var olem = 1; olem <= hidrange[0]; olem++)
			{
				rect(hidrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "He")
		{
			for(var olem = 1; olem <= helrange[0]; olem++)
			{
				rect(helrange[olem] - 260,spexH,3,60);
			}
		}

		else if(enabled == "Li")
		{
			for(var olem = 1; olem <= litrange[0]; olem++)
			{
				rect(litrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "Be")
		{
			for(var olem = 1; olem <= berrange[0]; olem++)
			{
				rect(berrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "B")
		{
			for(var olem = 1; olem <= borrange[0]; olem++)
			{
				rect(borrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "C")
		{
			for(var olem = 1; olem <= carrange[0]; olem++)
			{
				rect(carrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "N")
		{
			for(var olem = 1; olem <= nitrange[0]; olem++)
			{
				rect(nitrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "O")
		{
			for(var olem = 1; olem <= oxyrange[0]; olem++)
			{
				rect(oxyrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "F")
		{
			for(var olem = 1; olem <= felrange[0]; olem++)
			{
				rect(felrange[olem] - 260,spexH,3,60);
			}
		}
		else if(enabled == "Ne")
		{
			for(var olem = 1; olem <= netrange[0]; olem++)
			{
				rect(netrange[olem] - 260,spexH,3,60);
			}
		}

		else
		{
			fill("white");
			stroke(1);
			textSize(20);
			if(!isPersian)
			{
				text("no element or yet not available",150,spexH + 40);
			}else
			{
				text("عنصری انتخاب یا هنوز اظافه نشده",150,spexH + 40);
			}
		}

	}
	if(isTableEnable)
	{
		Hid.display();
		Hell.display();
		lit.display();
		berel.display();
		bor.display();
		nitro.display();
		carbon.display();
		oxygen.display();
		felo.display();
		neon.display();
		nabi.display();
		magi.display();
		ali.display();
		sili.display();
		pot.display();
		sulfur.display();
		culor.display();
		argon.display();
	}

	pop();
	push();
	fill('aqua');
	rect(0,0,40,40);
	fill('black');
	textSize(75);
	text("-", 10,40);
	pop();
	push();//specumetry icon

	if(!isPersian)
	{
		burn.text = "burn";
		acid.text = "acid";
	}
	else
	{
		burn.text = "سوختن";
		acid.text = "اسید";
	}


	burn.x = trueWid - 140;
	burn.y = 260;


	acid.x = trueWid - 140;
	acid.y = burn.y + 60;

	rect(trueWid - 40, 240,40,40,10,0,0,10);
	fill('black');
	textSize(24);
	image(spectumetryI,trueWid - 40 + 5, 245,30,30);
	//text("S", trueWid - 30, 270);

	//pecumetry function here
	fill('white');
	if(isSpecOpen){
		rect(trueWid - 240, 240, 200,250,10);
		burn.show();
		//acid.show();
		if(funcPressed == "burn" || funcPressed == "سوختن")
		{
			textSize(12);
			fill('black');
			if(enabledMaterial == "wood" || enabledMaterial == "sugar" || enabledMaterial == "چوب" || enabledMaterial == "شکر")
			{
				tellSpecResalt("C6H12O6 + O2", "CO2 + H2O");
			}
			else if(enabledMaterial == "magnisi" || enabledMaterial == "منیزیم")
			{
				tellSpecResalt("Mg + O","MgO");
			}
		}
		if(enabledMaterial != "" && funcPressed != "")
		{
			fill('aqua');
			rect(trueWid - 220 , 440, 80,40,10);
			textSize(30);
			fill('black');
			textSize(20);
			if(!isPersian){
				text('calculate', trueWid - 215, 465);
			}
			else{
				text('محاسبه', trueWid - 215 , 465);
			}
		}
	}
	pop();
	push();//add Button
	if(mouseX > 680 && mouseX < 720 && mouseY > 0 && mouseY < 40)
	{
		if(!isAddOpen)
		{
			fill('aqua');
		}
		else
		{
			fill('pink');
		}
	}
	if(!isAddOpen)
	{
		rect(680,0,40,40,10);
	}
	else
	{
		rect(680,0,40,40,10,10,0,0);

		if(!isPersian)
		{
			wood.name = "wood";
			sugar.name = "sugar";
			glass.name = "glass";
			mgmetal.name = "magnisi";
		}
		else
		{
			wood.name = "چوب";
			sugar.name = "شکر";
			glass.name = "شیشه";
			mgmetal.name = "منیزیم";
		}
		wood.atms = ["C", "H", "O","N","P"];
		wood.formula = [6 , 12, 6,1,1];
		wood.x = 680;
		wood.y = 40;


		sugar.atms = ["C", "O", "H"];
		sugar.formula = [6 , 12, 6];
		sugar.x = 680;
		sugar.y = 80;


		glass.atms = ["Si", "O"];
		glass.formula = [1,2];
		glass.x = 680;
		glass.y = 120;


		mgmetal.atms = ["Mg"];
		mgmetal.formula = [1];
		mgmetal.x = 680;
		mgmetal.y = 160;

		textSize(20);
		fill('white');
		rect(680,40,80,160);
		fill('aqua');
		wood.show();
		glass.show();
		sugar.show();
		mgmetal.show();
	}
	pop();
	push();
	fill('aqua');
	if(!isAboutOpen)
	{
		rect(trueWid - 40,trueHei - 120, 40, 40, 10, 0,0,10);
	}
	else
	{
		rect(trueWid - 40,trueHei - 120, 40, 40, 0, 0,0,10);
	}
	textSize(50);
	fill("black");
	text('i', trueWid - 20, trueHei - 80);//about here
	text("+",685,37);
	textSize(23);
	//text(mouseX, 50, 50);
	//text(mouseY, 50, 90);
	//text("" + elecnumber, 50, 130);
	//text("" + elecstep, 50, 170);
	//this was here for debugging perpus;
	pop();
	push();
	textSize(50);
	fill(255,0, 0);
	if(elecnumber != 0){
		ellipse(atomPos[0],atomPos[1],70);
	}
	pop();
	push();
	if(perMode){
		fill(0,0,255);
		if(elecstep != 0)
		{
			ellipse(elecposx1[0],elecposy1[0],30);
			if(elecnumber >= 2 && elecstep == 1 || elecstep > 1){
				ellipse(elecposx1[1],elecposy1[1],30);
			}
		}
		if(elecstep >= 3){
			for(var x = 0; x < 8;x++)
			{
				ellipse(elecposx2[x],elecposy2[x],30);
			}
			for(var x = 0; x < elecnumber;x++)
			{
				ellipse(elecposx3[x],elecposy3[x],30);
			}
		}
		else if(elecstep >= 2){
			for(var x = 0; x < elecnumber;x++)
			{
				ellipse(elecposx2[x],elecposy2[x],30);
			}
		}
	}
	else
	{
		fill(0,0,255);
		if(elecnumber != 0){
			ellipse(elecposx1[0],elecposy1[0],30);
			if(elecnumber >= 2 && elecstep == 1 || elecstep > 1){
				fill(0,0,255);
			}
			else{
				noFill();
			}
			ellipse(elecposx1[1],elecposy1[1],30);
		}
		if(elecstep >= 3){
			for(var x = 0; x < 8;x++)
			{
				ellipse(elecposx2[x],elecposy2[x],30);
			}
			for(var x = 0; x < 8;x++)
			{
				if(x == elecnumber)
				{
					noFill();
				}
				ellipse(elecposx3[x],elecposy3[x],30);
			}
		}
		else if(elecstep >= 2){
			for(var x = 0; x < 8;x++)
			{
				if(x == elecnumber)
				{
					noFill();
				}
				ellipse(elecposx2[x],elecposy2[x],30);
			}
		}

	}
	pop();

	push();
	rect(trueWid - 40, 0 ,40,40,10);
	image(gera, trueWid-35,5,30,30);
	if(doSpectumetry)
	{
		var lastFormol;
		fill("white");
		rect(onlyWinPos1, onlyWinPos2, 300,150,10);
		if(enabledMaterial == "wood" || enabledMaterial == "چوب")
		{
			specfunc.elm1 = "C6H12O6";
			specfunc.elm2 = "O2";
			specfunc.res1 = "CO2";
			specfunc.res2 = "H2O";
		}
		if(enabledMaterial == "magnisi" || enabledMaterial == "منیزیم")
		{
			specfunc.elm1 = "Mg";
			specfunc.elm2 = "O2";
			specfunc.res1 = "MgO";
			specfunc.res2 = "";
		}
		fill('black');
		textSize(15);
		lastFormol = specfunc.elm1 + " + " + specfunc.elm2 + " = " + specfunc.res1;
		gram1.x = onlyWinPos1 + 10 + (specfunc.elm1.length * 10);
		gram1.y = onlyWinPos2 + 95;
		gram1.Width = 20;
		gram1.Height = 10;
		gram2.x = onlyWinPos1 + 10 + ((specfunc.elm1.length + 2.5 + specfunc.elm2.length) * 10);
		gram2.y = onlyWinPos2 + 95;
		gram2.Width = 20;
		gram2.Height = 10;
		gram3.x = onlyWinPos1 + 10 + ((specfunc.elm1.length + 5 + specfunc.elm2.length + specfunc.res1.length) * 10);
		gram3.y = onlyWinPos2 + 95;
		gram3.Width = 20;
		gram3.Height = 10;
		gram4.x = onlyWinPos1 + 10 + ((specfunc.elm1.length + 7.5 + specfunc.elm2.length + specfunc.res1.length + specfunc.res2.length) * 10);
		gram4.y = onlyWinPos2 + 95;
		gram4.Width = 20;
		gram4.Height = 10;
		if(specfunc.res2 != "")
		{
			lastFormol = lastFormol + " + " + specfunc.res2;
			gram4.draw();
		}
		else
		{
			gram4.enabled = false;
		}
		text(lastFormol , onlyWinPos1 + 10, onlyWinPos2 + 95);
		gram1.draw();
		gram2.draw();
		gram3.draw();
		
		missingGram.x = onlyWinPos1 + 10;
		missingGram.y = onlyWinPos2 + 150 - 30;
		missingGram.Width = 20;
		missingGram.lable = ("gr");
		missingGram.Height = 20;
		
		missingGram.draw();
		
		fill("blue");
		rect(onlyWinPos1, onlyWinPos2, 300,40,10,10,0,0);
		fill("red");
		rect(onlyWinPos1 + 260, onlyWinPos2, 40,40,0,10,0,10);
		fill("black");
		textSize(30);
		text("X", onlyWinPos1 + 270, onlyWinPos2 + 30);
	}
	pop();

	push();
	fill('black');
	if(isAboutOpen)
	{
		push();
		textSize(20);
		fill('white')
		//rect(trueWid - 40,trueHei - 120, 40, 40, 10, 0,0,0);
		rect(trueWid - 280,trueHei - 360, 240, 240, 10,10,0,10);
		fill('black');
		if(!isPersian)
		{
			text("this app was made by Daniel pishyar in 2022 for making chemistery easier to learn\n\n daniel - producer and programmer",trueWid - 280,trueHei - 360,240);
		}
		else
		{
			text("این برنامه توسط دانیال پیش یار در سال 1401 ساخته شد\n\n دانیال- برنامه نویس",trueWid - 280,trueHei - 360,240);
		}
		pop();
	}
	textSize(43);
	if(enabled == "He" || enabled == "Ar" || enabled == "Cl"|| enabled == "Ne"|| enabled == "Mg"|| enabled == "Al"|| enabled == "Si"|| enabled == "Na"|| enabled == "Li"|| enabled == "Be")
	{
		textSize(31);
	}
	text(enabled, atomPos[0] - 14, atomPos[1] + 14);
	if(enabled == "B"){
		textSize(10);
		if(!isPersian)
		{
			text("more like moron", atomPos[0] - 14,atomPos[1] + 44);
		}
	}
	if(!isPersian)
	{
		textSize(20);
		text("AtomViewer", trueWid - 170, trueHei - 50);
		textSize(10);
		text("alpha release - build 2022/5/5", trueWid - 240, trueHei - 30);
	}
	else
	{
		textSize(20);
		text("AtomViewer", trueWid - 170, trueHei - 50);
		textSize(10);
		text("نسخه آزمایشی - ساخت ۱۴۰۱-۲-۱۵", trueWid - 240, trueHei - 30);
	}
	pop();
}
