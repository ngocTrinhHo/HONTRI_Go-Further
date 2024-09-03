function init(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.5)';
        }
        else {
            document.getElementById('topMenu').style.background = 'rgba(255, 255, 255, 0)';
        }
    });

    var listModels=document.getElementsByClassName('model');
    for(let j=0; j<listModels.length; j++){
        let listImg = listModels[j].querySelectorAll(".subImg img");
        let listH4 = listModels[j].querySelectorAll(".subImg h4");
        let mImg = listModels[j].querySelector('.mImg');
        let mText = listModels[j].querySelector('.mText');

        for(let i=0; i<listImg.length; i++){
            listImg[i].onclick= function(){
                mImg.src = listImg[i].src;
                mText.innerHTML= listH4[i].textContent;
            }
        }
    }
    const btnLeft= document.querySelector(".btnn.Left");
    const btnRight= document.querySelector(".btnn.Right");

    var main= document.getElementById('contain');
    var listModel= document.getElementsByClassName('model');
    let index=0;
    function move(){
        if(index===listModel.length-1){
           index=0;
        }
        else{
            index++;
        }
        let width = listModel[0].offsetWidth;
        main.style.transform = `translateX(${-(width * index)}px)`;
    }

    let event= setInterval(move,10000);

    btnRight.addEventListener('click', function(){
        clearInterval(event);
        move();
        event= setInterval(move,10000);
    });

    btnLeft.addEventListener('click', function(){
        clearInterval(event);
        if(index===0){
            index=listModel.length-1;
        }
        else{
            index--;
        }
        let width = listModel[0].offsetWidth;
        main.style.transform = `translateX(${-(width * index)}px)`;
        event = setInterval(move,10000);
    })

    document.getElementById("scroll").addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
    var menu = document.getElementsByClassName('Menu')[0];
    var fal = document.getElementById('fal');
    
    function menuDisplay() {
        if (window.innerWidth <= 600) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
    
    fal.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
    
    window.addEventListener('resize', menuDisplay);
    menuDisplay();
    
    window.addEventListener('scroll',function(){
        if(window.scrollY>200 ){
            document.getElementById('top_button').style.display='block';
        }
        if(window.scrollY<=200||window.scrollY>2600){
            document.getElementById('top_button').style.display='none';
        }
    });
    document.getElementById("top_button").addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
    
    var listNotSp= document.getElementsByClassName('notSp');
    for(let i=0; i<listNotSp.length; i++){
        listNotSp[i].onclick=function(){
            alert('Tính năng hiện chưa hỗ trợ');
        }
    }

    let listSecOdd= document.querySelectorAll('.bestProduct:nth-child(odd)');
    for(let i of listSecOdd){
        i.classList.add('wow', 'animate__bounceInUp');
    }

    let listSecEven= document.querySelectorAll('.bestProduct:nth-child(even)');
    for(let i of listSecEven){
        i.classList.add('wow', 'animate__bounceInDown');
    }

    let listSec2= document.getElementsByClassName('imgTH');
    for(let i of listSec2){
        i.classList.add('wow', 'animate__backInUp');
    }

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();


    $(document).ready(function() {
        const array = ["Toyota","Honda","Mazda","Ford","BMW","Mercedes","Hyundai","Kia","Audi","Chevrolet"];
    
        $("#searchOto").on("input", function() {
            const input = $(this).val().toLowerCase();
            $("#goiY").empty().hide();
    
            if (input.length > 0) {
                const mangMoi = array.filter(function(car) {
                    return car.toLowerCase().includes(input);
                });
    
                if (mangMoi.length > 0) {
                    mangMoi.forEach(function(goiY) {
                        $("#goiY").append(`<div>${goiY}</div>`);
                    });
                    $("#goiY").show();
                }
            }
        });
    });
    
}