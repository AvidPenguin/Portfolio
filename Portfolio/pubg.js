// Get the modal
var popup = document.getElementById('divReward');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

function changeCrate(crate)
{
	if(crate=="triumph" && document.getElementById("btnTriumph").className == "btn")
	{
		document.getElementById("btnTriumph").className = "btn btn-primary";
		document.getElementById("btnRaider").className = "btn";
		document.getElementById("btnEquinox").className = "btn";
		document.getElementById("divTriumph").style.display = "block"
		document.getElementById("divRaider").style.display = "none"
		document.getElementById("divEquinox").style.display = "none"
		document.getElementById("divCrateReward").style.display = "none"
	}
	if(crate=="raider" && document.getElementById("btnRaider").className == "btn")
	{
		document.getElementById("btnTriumph").className = "btn";
		document.getElementById("btnRaider").className = "btn btn-primary";
		document.getElementById("btnEquinox").className = "btn";
		document.getElementById("divTriumph").style.display = "none"
		document.getElementById("divRaider").style.display = "block"
		document.getElementById("divEquinox").style.display = "none"
		document.getElementById("divCrateReward").style.display = "none"
	}
	if(crate=="equinox" && document.getElementById("btnEquinox").className == "btn")
	{
		document.getElementById("btnTriumph").className = "btn";
		document.getElementById("btnRaider").className = "btn";
		document.getElementById("btnEquinox").className = "btn btn-primary";
		document.getElementById("divTriumph").style.display = "none"
		document.getElementById("divRaider").style.display = "none"
		document.getElementById("divEquinox").style.display = "block"
		document.getElementById("divCrateReward").style.display = "none"
	}
	
}

function openCrate(crate)
{
	var rng = Math.random()*100;
	
	if(crate=="triumph")
	{
		if(rng < 15) // R45 Desert Digital
		{
			document.getElementById("pReceived").innerHTML="You received R45 Desert Digital";
			document.getElementById("pReceivedInfo").innerHTML="15.00%";
			document.getElementById("imgCrateReward").src="images/triumph/r45_desert_digital.png";
		}
		else if(rng < 20) // P92 Trifecta
		{
			document.getElementById("pReceived").innerHTML="You received P92 Trifecta";
			document.getElementById("pReceivedInfo").innerHTML="5.00%";
			document.getElementById("imgCrateReward").src="images/triumph/p92_trifecta.png";
		}
		else if(rng < 35) // UMP Orange
		{
			document.getElementById("pReceived").innerHTML="You received UMP9 Rugged (Orange)";
			document.getElementById("pReceivedInfo").innerHTML="15.00%";
			document.getElementById("imgCrateReward").src="images/triumph/ump9_rugged_orange.png";
		}
		else if(rng < 40) // Win94 Gold
		{
			document.getElementById("pReceived").innerHTML="You received Win94 Gold Plate";
			document.getElementById("pReceivedInfo").innerHTML="5.00%";
			document.getElementById("imgCrateReward").src="images/triumph/win94_gold_plate.png";
		}
		else if(rng < 50) // Scar Orange
		{
			document.getElementById("pReceived").innerHTML="You received Scar-L Rugged (Orange)";
			document.getElementById("pReceivedInfo").innerHTML="10.00%";
			document.getElementById("imgCrateReward").src="images/triumph/scar-l_rugged_orange.png";
		}
		else if(rng < 60) // Kar Orange
		{
			document.getElementById("pReceived").innerHTML="You received Kar98k Rugged (Orange)";
			document.getElementById("pReceivedInfo").innerHTML="10.00%";
			document.getElementById("imgCrateReward").src="images/triumph/kar98k_rugged_orange.png";
		}
		else if(rng < 70) // AK Orange
		{
			document.getElementById("pReceived").innerHTML="You received AKM Rugged (Orange)";
			document.getElementById("pReceivedInfo").innerHTML="10.00%";
			document.getElementById("imgCrateReward").src="images/triumph/akm_rugged_orange.png";
		}
		else if(rng < 80) // M4 Orange
		{
			document.getElementById("pReceived").innerHTML="You received M416 Rugged (Orange)";
			document.getElementById("pReceivedInfo").innerHTML="10.00%";
			document.getElementById("imgCrateReward").src="images/triumph/m416_rugged_orange.png";
		}
		else if(rng < 84.5) // Sawed Off Gold
		{
			document.getElementById("pReceived").innerHTML="You received Sawed-Off Gold Plate";
			document.getElementById("pReceivedInfo").innerHTML="4.50%";
			document.getElementById("imgCrateReward").src="images/triumph/sawed-off_gold_plate.png";
		}
		else if(rng < 89) // Trifecta Uzi
		{
			document.getElementById("pReceived").innerHTML="You received Micro Uzi Trifecta";
			document.getElementById("pReceivedInfo").innerHTML="4.50%";
			document.getElementById("imgCrateReward").src="images/triumph/micro_uzi_trifecta.png";
		}
		else if(rng < 93.5) // Mini14 DD
		{
			document.getElementById("pReceived").innerHTML="You received Mini14 Desert Digital";
			document.getElementById("pReceivedInfo").innerHTML="4.50%";
			document.getElementById("imgCrateReward").src="images/triumph/mini14_desert_digital.png";
		}
		else if(rng < 96) // Kar DD
		{
			document.getElementById("pReceived").innerHTML="You received Kar98k Desert Digital";
			document.getElementById("pReceivedInfo").innerHTML="2.50%";
			document.getElementById("imgCrateReward").src="images/triumph/kar98k_desert_digital.png";
		}
		else if(rng < 97.3) // Scar Tri
		{
			document.getElementById("pReceived").innerHTML="You received Scar-L Trifecta";
			document.getElementById("pReceivedInfo").innerHTML="1.30%";
			document.getElementById("imgCrateReward").src="images/triumph/scar-l_trifecta.png";
		}
		else if(rng < 97.9) // SKS Gold
		{
			document.getElementById("pReceived").innerHTML="You received SKS Gold Plate";
			document.getElementById("pReceivedInfo").innerHTML="0.60%";
			document.getElementById("imgCrateReward").src="images/triumph/sks_gold_plate.png";
		}
		else if(rng < 99.2) // M4 DD
		{
			document.getElementById("pReceived").innerHTML="You received M416 Desert Digital";
			document.getElementById("pReceivedInfo").innerHTML="1.30%";
			document.getElementById("imgCrateReward").src="images/triumph/m416_desert_digital.png";
		}
		else if(rng < 99.52) // S12K Gold
		{
			document.getElementById("pReceived").innerHTML="You received S12K Gold Plate";
			document.getElementById("pReceivedInfo").innerHTML="0.32%";
			document.getElementById("imgCrateReward").src="images/triumph/s12k_gold_plate.png";
		}
		else if(rng < 99.84) // UMP Glory
		{
			document.getElementById("pReceived").innerHTML="You received UMP9 Glory";
			document.getElementById("pReceivedInfo").innerHTML="0.32%";
			document.getElementById("imgCrateReward").src="images/triumph/ump9_glory.png";
		}
		else //AK Glory
		{
			document.getElementById("pReceived").innerHTML="You received AKM Glory";
			document.getElementById("pReceivedInfo").innerHTML="0.16%";
			document.getElementById("imgCrateReward").src="images/triumph/akm_glory.png";
		}
		
		document.getElementById("divCrateReward").style.display = "block"
	}
	
}

