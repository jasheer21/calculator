function btnclick(data)
{
document.getElementById("scrn").value+=data

}

function screenclear()
{
 document.getElementById("scrn").value=""
}
function equalclick()
{
    var text=document.getElementById("scrn").value 
    var result=eval(text)
    document.getElementById("scrn").value=result
}