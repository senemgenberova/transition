var accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
    var item = event.target;
    var parent = item.parentNode.parentNode;
    // console.log(item.parentNode+" "+item.parentNode.parentNode);
    console.log(item);
    if (item.nextElementSibling.style.height == '100px') {
        item.nextElementSibling.style.height = 0;
        item.nextElementSibling.style.padding = 0;
    } else {
        for (var i = 0; i < parent.childElementCount; i++) {
            parent.children[i].children[1].style.height = 0;
            parent.children[i].children[1].style.padding = 0;
        }

        item.nextElementSibling.style.visibility = 'visible';
        item.nextElementSibling.style.height = "100px";      
        item.nextElementSibling.style.padding = "12px";
        item.nextElementSibling.style.opacity = 1;
        item.nextElementSibling.style.transition = "all .4s ease-in";
    }
});