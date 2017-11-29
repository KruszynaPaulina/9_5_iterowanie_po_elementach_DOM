var getButton = document.getElementsByClassName('button');
console.log(getButton);

var l = getButton.length;
console.log(l);

for ( var i = 0; i < l; i++) {
    var text = getButton[i].innerText;
    console.log(text);
    alert(text);
}