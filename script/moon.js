function generatequote () {
    r = Math.floor(Math.random() * 3); 
    document.getElementById ("quote").innerHTML = a[r][0];
    document.getElementById ("aut").innerHTML = a[r][1];
}
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
 /*
let bigData = [];
let file = "quote.txt";
let reader = new FileReader();
reader.readAsText(file);

reader.onload = function() {
    let lines = reader.result.split(/[\r\n]+/g);
    lines.forEach(function(line) { 
        bigData.push(line);
    });
    console.log(bigData);
};

reader.onerror = function() {
    console.log(reader.error);
}; */
/* const reader = new FileReader();
reader.readAsText("quote.txt");
reader.onload = () => {
    const array = reader.result.split('\n');
    console.log(array);
} */
var image_count = 8;
var interval = 1000; //пауза
var time_out = 3; //скорость смены картинки
var i = 8;
var timeout;
var opacity = 50;
a = [['Не совершай классическую ошибку всех умников: не думай, что нет людей умнее тебя.','Карл Ван Лун'], ['Ничто так не выдает человека, как то, над чем он смеётся.', 'Иоганн Вольфганг фон Гёте'], ['Денег, которые я заработал, хватит мне до конца жизни, если я умру сегодня в 16.00.', 'Хенни Янгман'], ['Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага.', 'Лао-цзы'],['Музыка заводит сердца так, что пляшет и поёт тело. А есть музыка, с которой хочется поделиться всем, что наболело','Джон Леннон']]

change_image()



