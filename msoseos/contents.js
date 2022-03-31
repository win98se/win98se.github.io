var regex=/(^(19|20)\d\d\-(((0[1-9]|1[0-2])\-([01][1-9]|10|2[0-8]))|((01|0[3-9]|1[0-2])\-(29|30))|((0[13578]|1[02])\-31))$)|(^((19|20)(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|2000)\-02\-29$)/;

FormatDate=(date)=>{
	if(regex.test(date))
	{
		var dateObj=new Date(date);
		return dateObj.toLocaleDateString("en-US", {day: "numeric"})+" "+dateObj.toLocaleDateString("en-US", {month: "long"})+" "+dateObj.toLocaleDateString("en-US", {year: "numeric"});
	}
	else
		return date;
}

FillPage=(pageTitle, infoTable)=>{
	document.write("<title>"+pageTitle+"</title><link rel=\"stylesheet\" href=\"style.css\"><div id=\"menu\"><p><a href=\"./\">Client products</a></p><p><a href=\"server.htm\">Server products</a></p><p>Ancient products</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"ancient_9x.htm\">MS-DOS & Windows 9x</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"ancient_nt.htm\">Windows NT (except NT10)</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"ancient_10_ltsc.htm\">NT10 (Long-Term Servicing Channel)</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"ancient_10_gac.htm\">NT10 (General Availability Channel)</a></p></div><div id=\"contents\"><center>");
	if(infoTable.length>0)
	{
		infoTable.forEach(e=>((osName, gaDate, eomsDate, eoesDate)=>{
			document.write("<br><table bgcolor=\"#FFFFFF\" border=\"3\" cellspacing=\"0\"><tr><td class=\"osname\" rowspan=\"2\">"+osName+"</td><td class=\"title gadate\"><abbr title=\"General availability\">GA</abbr> date</td><td class=\"date\" colspan=\"3\">"+FormatDate(gaDate)+"</td></tr><tr><td class=\"title eomsdate\"><abbr title=\"End of mainstream support\">EOMS</abbr> date</td><td class=\"date\">"+FormatDate(eomsDate)+"</td><td class=\"title eoesdate\"><abbr title=\"End of extended support\">EOES</abbr> date</td><td class=\"date\">"+FormatDate(eoesDate)+"</td></tr><tr><td class=\"eos\" colspan=\"5\">"+((date)=>{
				if(regex.test(date))
				{
					var now=new Date();
					var eosDays=Math.floor(new Date(date).getTime()/86400000)-Math.floor(new Date(now-now.getTimezoneOffset()*60000).getTime()/86400000);
					if(eosDays>0)
						return "<font color=\"green\" size=\"7\">"+eosDays+"</font> day"+(eosDays==1?"":"s")+" to end of support";
					else if(eosDays==0)
						return "End of support is <font color=\"blue\" size=\"7\">today</font>";
					else
						return "<font color=\"red\" size=\"7\">"+Math.abs(eosDays)+"</font> day"+(eosDays==-1?"":"s")+" since end of support";
				}
				else
					return "General release unavailable yet";
			})(eoesDate)+"</td></tr></table>");
		})(e[3], e[0], e[1], e[2]));
	}
	else
		document.write("<h1>None</h1>");
	document.write("<p id=\"copy\">Copyright &copy; 2016&#65293;"+new Date().getFullYear()+" LCw Productions</p></center></div>");
}

window.onblur=()=>{
	window.onfocus=()=>{
		location.reload();
	}
};