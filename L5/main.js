

function prepareContent() {
    //var elements = document.getElementsByClassName('content-item-wrap');
    var elements = document.querySelectorAll('.content-item-wrap');

    elements.forEach(function(element) {
        var elHeight = element.getElementsByClassName("content-item")[0].offsetHeight;

        element.style.height = elHeight + 'px';
    });
}

prepareContent();


document.getElementsByClassName("nav")[0].addEventListener("click", navClick);

function navClick(event) {
    if (event.target.classList.contains("active")) {
        event.preventDefault();
    } else if( event.target.tagName === 'A') {

        // nav manipulation
        var allLink = document.querySelectorAll('.nav a');

        allLink.forEach(function(el) {
            el.classList.remove('active');
        });

        event.target.classList.add('active');

        // content manipulation
        var allContentitems = document.querySelectorAll('.content-item-wrap');

        allContentitems.forEach(function(el) {
            el.classList.add('hidden');
        });


        var contentSelectorClass = event.target.getAttribute('data-class');

        document.getElementsByClassName(contentSelectorClass)[0].classList.remove('hidden');
    }
}


/*======================================*/

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var randomNumber =  randomInteger(1, 100);

var arrDate = [];
var now = new Date().getTime();

console.log(now, 'now');

for (var i = randomNumber; i > 0; i--) {

    //var randomDate = new Date(randomInteger(0, 9999999999999));
    var randomDate = new Date(randomInteger(1, now));

    var day = randomDate.getDate();
    var month = randomDate.getMonth();
    var year = randomDate.getFullYear();

    var strDate = year + '-' + month +  '-' + day;

    arrDate.push(strDate);
}

console.log(arrDate);

localStorage.setItem('storageDate', JSON.stringify(arrDate));


console.log(localStorage.getItem('storageDate')) ;

var convertedDateFlorLocalStr = JSON.parse(localStorage.getItem('storageDate'));


//====
arrDateFormated = [];

convertedDateFlorLocalStr.forEach(function(el) {
    var mydate = new Date(el.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));

    //console.log(mydate);

    arrDateFormated.push(mydate);
});


function sortDates(a, b) {
    return a - b;
}


arrDateFormated.sort(sortDates);

console.log(arrDateFormated);

