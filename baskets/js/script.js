$(document).ready(function () {

    $('.list-group button').click(function () {
        $(".sidebar ul").hide('2000');
        $('.rightSide').removeClass('col-9');
        $('.rightSide').addClass('col-12');

    })
    $('.navbar i').click(function () {
        $('.sidebar ul').show('2000');
        $('.rightSide').removeClass('col-12');
        $(".rightSide").addClass("col-9");
    })

})
let btns = document.querySelectorAll('.card .btn');
let countItems = document.querySelector('.countItems');
let count = localStorage.getItem('count');
function basketItem(id,count){
    this.Id = id;
    this.Count = count;
}
btns.forEach(el => {
    el.addEventListener('click', function () {
        let basket = new basketItem;
        basket.Id = el.id;
        let specItemCount = 0;
        specItemCount++;
        basket.Count = specItemCount;
        
        if (!count) {
            count = 0;
        }
        count++;
        countItems.innerText = count;
    })
})
localStorage.setItem('count',count);
