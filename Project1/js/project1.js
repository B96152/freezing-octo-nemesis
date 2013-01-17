// Pre Motorcycle Ride Check List!
// Author: Paul Holmes
// Created for: SDI <1301>


var preMotoChkLst ="Pre Motorcycle Ride Check List!";
console.log("I would like to go for a ride on my motorcycle, so I will complete my " + preMotoChkLst);



// if isFull = true, The motoFluids are filled to proper levels, else, Need to fill motoFluids to proper levels



var isFull = true;
var isNotFull = false;

var motoFluids ="Motor oil, hydraulic brake fluid, & radiator coolant.";

if (isFull === true) {
	console.log("The " + motoFluids + " are all filled to proper levels.");
	if (isNotFilled === true) {
		console.log("The " + motoFluids + " are not all filled to proper levels.");
	} else {
		console.log("Need to fill " + motoFluids + " to proper levels.");
	};
} else {
	console.log("The " + motoFluids + " are not all filled to proper levels.");
};


//if isFilled = true, The motoTires are filled to proper air pressure, else, Need to fill motoTires to proper air pressure.


var isFilled = true;
var isNotFilled = false;

var motoTires ="Air pressure in tires/.";

if (isFilled === true) {
	console.log("The " + motoTires + " filled to proper air pressure is " + isFilled);
	if (isNotFilled === true) {
		console.log("The " + motoTires + " are not all filled to proper air pressure.");
	} else {
		console.log("Need to fill " + motoTires + " to proper air pressure.");
	};
} else {
	console.log("The " + motoTires + " are not all filled to proper air pressure.");
};


//if closedWorks = true, The motoElectrical is operational when closed circuit, else, motoElectric is not operational and needs to be fixed.


var closedWorks = true;
var closedDoesNotWork = false;

var motoElectric = "Electrical system closed circuit operational.";

if (closedWorks === true) {
	console.log("The " + motoElectric + " is operational when circuits are closed is " + closedWorks);
	if (closedDoesNotWork === true) {
		console.log("The " + motoElectric + " is not operational when circuits are closed.");
	} else {
		console.log("Need to fix circuit so the " + motoElectric + " is indeed operational.");
	};
} else {
	console.log("The " + motoElectric + " has a bad circuit.");
};
   