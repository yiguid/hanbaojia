function $(element) {
	return document.getElementById(element);
}
//切屏--是按钮，_v是内容平台，_h是内容库
function reg(str){
  var bt=$(str+"_b").getElementsByTagName("h2");
  for(var i=0;i<bt.length;i++){
    bt[i].subj=str;
    bt[i].pai=i;
    bt[i].style.cursor="pointer";
    bt[i].onmousemove=function(){
      $(this.subj+"_v").innerHTML=$(this.subj+"_h").getElementsByTagName("blockquote")[this.pai].innerHTML;
      for(var j=0;j<$(this.subj+"_b").getElementsByTagName("h2").length;j++){
        var _bt=$(this.subj+"_b").getElementsByTagName("h2")[j];
        var ison=j==this.pai;
        _bt.className=(ison?"":"h2bg");
      }
    }
  }
  $(str+"_h").className="none";
  $(str+"_v").innerHTML=$(str+"_h").getElementsByTagName("blockquote")[0].innerHTML;
}


function picturs(){
	var goodsimg = document.getElementById("goodsimg");
	var imglist = document.getElementById("imglist");
	var imgnum = imglist.getElementsByTagName("img");
	for(var i = 0; i<imgnum.length; i++){
		imgnum[i].onmousemove=function(){
			var lang = this.getAttribute("lang");
			goodsimg.setAttribute("src",lang);
			for(var j=0; j<imgnum.length; j++){
				if(imgnum[j].getAttribute("class") =="onbg" || imgnum[j].getAttribute("className") =="onbg"){
					imgnum[j].className = "autobg";
					break;
				}
			}
			this.className = "onbg";
		}
	}
}

function colorStyle(id,color1,color2){
  var elem = document.getElementById(id);
  if(elem.getAttribute("id") == id){
	  //elem.className = color1;
	  if(elem.className == color1)
		   elem.className = color2;
		else
		   elem.className = color1; 
	}
}

function articleSize(size,lineheight){
var article = document.getElementById("article");
article.style.fontSize = size+"px";
article.style.lineHeight = lineheight+"px";
}

function elems(id,cur){
var id = document.getElementById(id).getElementsByTagName("li");
for(var i=0; i<id.length; i++)
 {
	 id[0].className = "cur";
   id[i].onmouseover = function()
   {
    this.className="";
		for(var j=0; j<id.length; j++)
		{
			 if((id[j].getAttribute("class") == cur) || (id[j].getAttribute("className") == cur))
			 {
			 id[j].className = "";
			 break;
			 }
		}
	this.className = cur;	
   }
 }
}

//点击切换背景图片效果

function mypicBg(){
	
	var imglist = document.getElementById("imglist");
	var imgnum = imglist.getElementsByTagName("img");
	for(var i = 0; i<imgnum.length; i++){
		imgnum[i].onmousemove=function(){
			
			for(var j=0; j<imgnum.length; j++){
				if(imgnum[j].getAttribute("class") =="onbg" || imgnum[j].getAttribute("className") =="onbg"){
					imgnum[j].className = "autobg";
					break;
				}
			}
			this.className = "onbg";
		}
	}
}

/**
 * 点选可选属性或改变数量时修改商品价格的函数
 */
function changePrice()
{
  var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
  var qty = document.forms['ECS_FORMBUY'].elements['number'].value;

  Ajax.call('goods.php', 'act=price&id=' + goodsId + '&attr=' + attr + '&number=' + qty, changePriceResponse, 'GET', 'JSON');
}

/**
 * 接收返回的信息
 */
function changePriceResponse(res)
{
  if (res.err_msg.length > 0)
  {
    alert(res.err_msg);
  }
  else
  {
    document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;

    if (document.getElementById('ECS_GOODS_AMOUNT'))
      document.getElementById('ECS_GOODS_AMOUNT').innerHTML = res.result;
  }
}

/**
* 购物车加减按钮
* @param    txt_id  数量的ID
* @param    type    加 + 减 -
* @param    num        添加或者减少的数量 默认为一
*/
function cart_number(txt_id, type, num)
{
    num = num || 1;
    var txt = document.getElementById(txt_id);
    var source_num = parseInt(txt.value);
    if (source_num == 1 && type == '-')
    {
        alert('请最少购买一个商品');
        return;
    }
    var to_num       = source_num;
    if (type == '+')
    {
        to_num += num;
    }
    else if (type == '-')
    {
        to_num -= num;
    }
 
    txt.value = to_num;
    changePrice();
    showdiv(txt);
}