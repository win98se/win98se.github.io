import data from "./data.json" with {type: "json"};

const regex=/^((19|20)\d\d\-((0[13578]|1[02])\-(0[1-9]|[12]\d|3[01])|(0[469]|11)\-(0[1-9]|[12]\d|30)|02\-(0[1-9]|1\d|2[0-8]))|((19|20)([02468][048]|[13579][26])|2000)\-02\-29)$/;

const FormatDate=(date)=>{
	if(regex.test(date))
	{
		let dateObj=new Date(date);
		return dateObj.toLocaleDateString("en-US", {day: "numeric"})+" "+dateObj.toLocaleDateString("en-US", {month: "long"})+" "+dateObj.toLocaleDateString("en-US", {year: "numeric"});
	}
	else
		return date;
}

export const FillPage=(pageTitle, categories, alreadyEOS)=>{
	document.write("<title>"+pageTitle+"</title><link rel=\"stylesheet\" href=\"style.css\"><div id=\"menu\"><p><a href=\"?\">Client products</a></p><p><a href=\"?page=server\">Server products</a></p><p>Ancient products</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"?page=ancient_9x\">MS-DOS & Windows 9x</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"?page=ancient_nt\">Windows NT (except NT10)</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"?page=ancient_10_ltsc\">NT10 (Long-Term Servicing Channel)</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href=\"?page=ancient_10_gac\">NT10 (General Availability Channel)</a></p></div><div id=\"contents\"><center>");
	const infoTable=Object.entries(data).filter(([name, details])=>{
		let now=new Date();
		const isEOS=details.eoesDate&&details.eoesDate<new Date(now-now.getTimezoneOffset()*60000).toISOString().split('T')[0];
		const eosMatch=alreadyEOS?isEOS:!isEOS;
		const categoryMatch=!Array.isArray(categories)||categories.length===0?true:categories.every(cat=>details.categories.includes(cat));
		return eosMatch&&categoryMatch;
	}).map(([name, details])=>({
		name,
		categories: details.categories,
		gaDate: details.gaDate,
		eomsDate: details.eomsDate,
		eoesDate: details.eoesDate,
		title: details.title,
		details: details.details,
		param: details.param
	}));
	if(infoTable.length>0)
	{
		infoTable.forEach(e=>{
			document.write("<br><table bgcolor=\"#FFFFFF\" border=\"3\" cellspacing=\"0\"><tr><td class=\"osname\" rowspan=\"2\">"+(e.title||e.name)+(e.details?"<br><"+(e.param?"a href=\"?page="+e.param+"\"":"span")+" class=\"details\">"+e.details+"</"+(e.param?"a":"span")+">":"")+"</td><td class=\"title gadate\"><abbr title=\"General availability\">GA</abbr> date</td><td class=\"date\" colspan=\"3\">"+FormatDate(e.gaDate)+"</td></tr><tr><td class=\"title eomsdate\"><abbr title=\"End of mainstream support\">EOMS</abbr> date</td><td class=\"date\">"+FormatDate(e.eomsDate)+"</td><td class=\"title eoesdate\"><abbr title=\"End of extended support\">EOES</abbr> date</td><td class=\"date\">"+FormatDate(e.eoesDate)+"</td></tr><tr><td class=\"eos\" colspan=\"5\">"+((date)=>{
				if(regex.test(date))
				{
					let now=new Date();
					let eosDays=Math.floor(new Date(date).getTime()/86400000)-Math.floor(new Date(now-now.getTimezoneOffset()*60000).getTime()/86400000);
					if(eosDays>0)
						return "<font color=\"green\" size=\"7\">"+eosDays+"</font> day"+(eosDays===1?"":"s")+" to end of support";
					else if(eosDays===0)
						return "End of support is <font color=\"blue\" size=\"7\">today</font>";
					else
						return "<font color=\"red\" size=\"7\">"+Math.abs(eosDays)+"</font> day"+(eosDays===-1?"":"s")+" since end of support";
				}
				else
					return "General release unavailable yet";
			})(e.eoesDate)+"</td></tr></table>");
		});
	}
	else
		document.write("<h1>None</h1>");
	document.write("<p id=\"copy\">Copyright &copy; 2016&#65293;"+new Date().getFullYear()+" LCw Productions</p></center></div>");
}