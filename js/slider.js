document.addEventListener("DOMContentLoaded", function(event) {
	sels = document.getElementsByName("sel");
	for(var i = 0; i<sels.length; i++){
		sels[i].onchange=function(){change(this.value)}
	}
	document.getElementsByName("left")[0].onclick=function(){change(check()-1)};
	document.getElementsByName("right")[0].onclick=function(){change(check()+1)};




	mt = document.getElementsByClassName("menu")[0].offsetTop
window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
if(document.getElementsByClassName("menu")[0].getBoundingClientRect().top<0){
	document.getElementsByClassName("menu")[0].style.position="fixed"
	document.getElementsByClassName("menu")[0].style.margin="0 7%"
	document.getElementsByClassName("menu")[0].style.padding="0.5% 3%"

}
if(scrolled<mt){
		document.getElementsByClassName("menu")[0].style.position=""
	document.getElementsByClassName("menu")[0].style.margin="3% 7%"

}
}
   });

function change(a){
	rod = document.getElementsByClassName("rodrigez");
	if(a<0){a=rod.length-1}
	if(a>rod.length-1){a=0}
	for(var i = 0; i<rod.length; i++){
		rod[i].classList.remove("selected");
	}
	rod[a].classList.add("selected");
	sels = document.getElementsByName("sel");
	for(var i = 0; i<sels.length; i++){
		sels[i].checked="false";
	}
	sels[a].checked="true";
}
function check(){
		sels = document.getElementsByName("sel");
	for(var i = 0; i<sels.length; i++){
		if(sels[i].checked)	return i;
	}
	return -1;
	}



$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});

