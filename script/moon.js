
var image_count = 8;
var interval = 1500; //пауза
var time_out = 5; //скорость смены картинки
var i = 8;
var timeout;
var opacity = 50;
function change_image() {
   opacity--;
   var j = i + 1;
   var current_image = 'img_' + i;
   if (i == image_count) j = 1;
   var next_image = 'img_' + j;
   document.getElementById(current_image).style.opacity=opacity/100;
   document.getElementById(current_image).style.filter='alpha(opacity='+opacity+')';
   document.getElementById(next_image).style.opacity= (100-opacity)/100;
   document.getElementById(next_image).style.filter=' alpha(opacity='+(100-opacity)+')';
   timeout = setTimeout("change_image()", time_out);
   if (opacity==1) {
       opacity = 100;
       clearTimeout(timeout);
       i++;
       if (i>image_count) i=1;
       timeout = setTimeout("change_image()", interval);
   }
}
change_image()



