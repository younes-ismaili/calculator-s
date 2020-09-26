var firstNambre = 0;
var operation ="";
function nb(argement)
{ 
    var actualValue=document.getElementById('screen').value;
   // if(parseInt(actualValue)==""|| parseInt (actualValue)<99999)
   // {
    document.getElementById('screen').value = actualValue+argement;
  //  }
}
function plus()
{
    firstNambre=document.getElementById('screen').value;
    operation="+";
    clin();
}
function minus()
{
    firstNambre=document.getElementById('screen').value;
    operation="-";
    clin();
}
function multiple()
{
    firstNambre=document.getElementById('screen').value;
    operation="*";
    clin();
}
function division()
{
    firstNambre=document.getElementById('screen').value;
    operation="/";
    clin();

}
function square()
{
    firstNambre=document.getElementById('screen').value;
    operation="√";
   // clin();
}
function percent()
{
    firstNambre=document.getElementById('screen').value;
    operation="%";
    clin();
}
function modulo()
{
    firstNambre=document.getElementById('screen').value;
    operation="mod";
    clin();
}
function power()
{
    firstNambre=document.getElementById('screen').value;
    operation="pow";
}
function log()
{
    firstNambre=document.getElementById('screen').value;
    operation="lg";
}
function ab()
{
    firstNambre=document.getElementById('screen').value;
    operation="ab";
    clin();
}
function sin()
{
    firstNambre=document.getElementById('screen').value;
    operation="sn";
}
function cos()
{
    firstNambre=document.getElementById('screen').value;
    operation="cs";
}
function tan()
{
    firstNambre=document.getElementById('screen').value;
    operation="tn";
}
function pi()
{
    firstNambre=document.getElementById('screen').value;
    operation="π";
}
function equlas()
{
    var secondNumber=document.getElementById('screen').value;
    var result ="error";
    if(operation==="+")
    {
        result=parseInt(firstNambre)+parseInt(secondNumber);

    }
    else if(operation==="-")
    {
        result=parseInt(firstNambre)-parseInt(secondNumber);
    }
    else if(operation==="*")
    {
        result=parseInt(firstNambre)*parseInt(secondNumber);
    }
    else if(operation==="/")
    {
        result=parseInt(firstNambre)/parseInt(secondNumber);
    }
    else if(operation==="√")
    {
        result=Math.sqrt( parseInt(firstNambre));
    }
    else if(operation==="%")
    {
       result= (100 *parseInt( firstNambre)) / parseInt( secondNumber);
    }
    else if(operation==="mod")
    {
        result=parseInt(firstNambre)%parseInt(secondNumber);
    }
    else if(operation==="pow")
    {
        result= parseInt(firstNambre)*parseInt(firstNambre);
    }
    else if(operation==="lg")
    {
        result= Math.log10( parseInt(firstNambre));
    }
    else if(operation==="ab")
    {
        result=Math.pow(parseInt(firstNambre) , parseInt(secondNumber));
    }
    else if(operation==="sn")
    {
        result= Math.sin(parseInt(firstNambre));
    }
    else if(operation==="cs")
    {
        result=Math.cos( parseInt(firstNambre));
    }
    else if(operation==="tn")
    {
        result= Math.tan(parseInt(firstNambre));
    }
    else if(operation==="π")
    { 
        result=Math.pi*parseInt(firstNambre);
    }
    document.getElementById('screen').value='= '+result

}
function clin()
{
    document.getElementById('screen').value=''
}
