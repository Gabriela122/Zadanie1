var el = document.getElementsByClassName('fa-search')[0]

el.addEventListener('click', function () {
    search()
})

var input = document.getElementsByClassName('auto-complete-input')[0]

input.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        search()
    }
})

var search = function search() {
    if (input.value) {
        var x = document.getElementsByClassName('zad1-Results-wrapper')
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = 'block'
        }
    } else {
        var x = document.getElementsByClassName('zad1-Results-wrapper')
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = 'none'
        }
    }
}
