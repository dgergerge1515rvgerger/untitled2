// var a = new Object();
// a.name = 'á³?';
// a.age = 16;
// a.fun = function (a,b) {
//     return a+b;
// }
// alert(a.name);
// alert(a.age);
// alert(a.fun(1,2))
window.onload = function () {
    var a = document.getElementById('l1');
    a.onblur = function () {
        console.log('aaaaaa')
    }
}

window.onload = function () {
    var a = 0;
    var b = document.getElementsByClassName("nation")[0];
    b.onchange = function () {
        alert('change');
    }
}
