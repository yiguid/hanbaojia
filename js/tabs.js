

function toggleTo(img)
{
var ts=document.getElementById("tab").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("oDIV"+i).style.display = "";
document.getElementById("oDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("oDIV"+i).style.display = "none";
document.getElementById("oDIV"+i).parentNode.className="tab"+i;
}
}
}
function toggleTob(img)
{
var ts=document.getElementById("tabb").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("bDIV"+i).style.display = "";
document.getElementById("bDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("bDIV"+i).style.display = "none";
document.getElementById("bDIV"+i).parentNode.className="tab"+i;
}
}
}
function toggleTozbh(img)
{
var ts=document.getElementById("tabzbh").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("zbhDIV"+i).style.display = "";
document.getElementById("zbhDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("zbhDIV"+i).style.display = "none";
document.getElementById("zbhDIV"+i).parentNode.className="tab"+i;
}
}
}
function toggleTohot(img)
{
var ts=document.getElementById("tabhot").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("hotDIV"+i).style.display = "";
document.getElementById("hotDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("hotDIV"+i).style.display = "none";
document.getElementById("hotDIV"+i).parentNode.className="tab"+i;
}
}
}
function toggleTobaikes(img)
{
var ts=document.getElementById("tabhot").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("baikesDIV"+i).style.display = "";
document.getElementById("baikesDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("baikesDIV"+i).style.display = "none";
document.getElementById("baikesDIV"+i).parentNode.className="tab"+i;
}
}
}
function toggleTocountry(img)
{
var ts=document.getElementById("countrytab").getElementsByTagName("div");
for(i=1;i<ts.length+1;i++){
if(img==i)
{
document.getElementById("countryDIV"+i).style.display = "";
document.getElementById("countryDIV"+i).parentNode.className+=" up";
}
else{
document.getElementById("countryDIV"+i).style.display = "none";
document.getElementById("countryDIV"+i).parentNode.className="tab"+i;
}
}
}