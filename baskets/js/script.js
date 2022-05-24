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
function BasketItem(id,count){
    this.Id = id;
    this.Count = count;
}
btns.forEach(el => {
    el.addEventListener('click', function () {
        let dataId = el.getAttribute('id');
        let basketStr = localStorage.getItem('basket');

        let basketItems;
        if(!basketStr){
            basketItems = [];
        }
        else{
            basketItems = JSON.parse(basketStr);
        }
        let item = basketItems.find(x=>x.Id == dataId);

        if(item){
            item.Count++;
        }
        else{
            item = new BasketItem(dataId,1);
            basketItems.push(item);
        }

        document.querySelector('.navbar .countItems').innerText = basketItems.length;

        let li = document.createElement('li');
        let fullLi = document.querySelector(".sidebar .list-group").appendChild(li);
        fullLi.innerText = basketItems;
        fullLi.classList.add('list-group-item' ,'d-flex' ,'justify-content-between', 'align-items-center');
        let i = document.createElement('i');
        let appRemuveBtn = document.querySelector(".sidebar .list-group li").appendChild(i);
        appRemuveBtn.classList.add("fa-solid fa-trash-can");
        localStorage.setItem('basket',JSON.stringify(basketItems));

        
       
    })
})

// list-group-item d-flex justify-content-between align-items-center