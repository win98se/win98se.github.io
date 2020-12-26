window.onblur=()=>{
	window.onfocus=()=>{
		location.reload();
	}
};

var today=Math.floor(new Date().getTime()/86400000);

function writeeos(eos)
{
	var eosToWrite=Math.floor(new Date(eos).getTime()/86400000);
	if(today==eosToWrite)
		document.write("End of support is <font color='blue' size='7'>today</font>");
	else if(today<eosToWrite)
	{
		if(eosToWrite-today==1)
			document.write("<font color='green' size='7'>"+(eosToWrite-today)+"</font> day to end of support");
		else
			document.write("<font color='green' size='7'>"+(eosToWrite-today)+"</font> days to end of support");
	}
	else
	{
		if(today-eosToWrite==1)
			document.write("<font color='red' size='7'>"+(today-eosToWrite)+"</font> day since end of support");
		else
			document.write("<font color='red' size='7'>"+(today-eosToWrite)+"</font> days since end of support");
	}
}