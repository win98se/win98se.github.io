window.onblur=function()
{
    window.onfocus=function()
    {
        location.reload();
    }
};

var today=Math.floor(new Date().getTime()/86400000);

function writeeos(eosToWrite)
{
    if(today==eosToWrite)
        document.write("EOS is <font color='blue' size='7'>today</font>");
    else if(today<eosToWrite)
    {
        if(eosToWrite-today==1)
            document.write("<font color='green' size='7'>"+(eosToWrite-today)+"</font> day to EOS");
        else
            document.write("<font color='green' size='7'>"+(eosToWrite-today)+"</font> days to EOS");
    }
    else
    {
        if(today-eosToWrite==1)
            document.write("<font color='red' size='7'>"+(today-eosToWrite)+"</font> day since EOS");
        else
            document.write("<font color='red' size='7'>"+(today-eosToWrite)+"</font> days since EOS");
    }
}