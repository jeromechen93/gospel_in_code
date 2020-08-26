

function setMansStatus(man, gloryOfGod){
	var mansGoal = gloryOfGod; 

	if (man.hasSinned == true) {
		mansGoal-=1;
	}

	var eternalLife;

	if (gloryOfGod > mansGoal) {
		eternalLife = false
	}
	else {
		eternalLife = true
	}
	
	return eternalLife;
}


function romans3_23(manKind) {
	var gloryOfGod = 100;

	for (i=0; i<manKind.length; i++) {
		manKind[i].saved = setMansStatus(man);
	}

	return manKind;
}

function romans3_24(manKind) {
	var redeemer = null;

	for each (man in manKind) {
		if (man.)
	}


}


var manKind = [
	{
		"name":"Jesus Christ",
		"perc_man":100,
		"perc_god":100,
		"hasSinned":false,
		"eternalLife":null,
		"faithIn":"Self"

	},
	{
		"name":"Adam Firstman",
		"perc_man":100,
		"perc_god":0,
		"hasSinned":true,
		"eternalLife":null
		"faithIn":"Jesus Christ"
	}

];
