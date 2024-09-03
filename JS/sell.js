function init(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.5)';
        }
        else {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
    
    const btnLeft= document.querySelector(".btnn.Left");
    const btnRight= document.querySelector(".btnn.Right");

    var main= document.getElementById('cnt');
    var listModel= document.getElementsByClassName('cmt');
    let index=0;
    if(window.innerWidth>=600){
        btnRight.addEventListener('click',  function(){
            if(index===listModel.length-3){
                index=0;
            }
            else{
                index++;
            }
            let width = window.innerWidth * 0.33;
            main.style.transform = `translateX(${-(width * index)}px)`;
        });
    
        btnLeft.addEventListener('click', function(){
            if(index===0){
                index=listModel.length-3;
            }
            else{
                index--;
            }
            let width = window.innerWidth * 0.33;
            main.style.transform = `translateX(${-(width * index)}px)`;
        })
    }
    if(window.innerWidth<600){
        btnRight.addEventListener('click',  function(){
            if(index===listModel.length){
                index=0;
            }
            else{
                index++;
            }
            let width = listModel[0].offsetWidth;
            main.style.transform = `translateX(${-(width * index)}px)`;
        });
    
        btnLeft.addEventListener('click', function(){
            if(index===0){
                index=listModel.length;
            }
            else{
                index--;
            }
            let width = listModel[0].offsetWidth;
            main.style.transform = `translateX(${-(width * index)}px)`;
        })
    }


    document.getElementById("scroll").addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });

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

    let listBuoc= document.getElementsByClassName('buoc');
    for(let i of listBuoc){
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
    
      var listNotSp= document.getElementsByClassName('notSp');
      for(let i=0; i<listNotSp.length; i++){
          listNotSp[i].onclick=function(){
              alert('Tính năng hiện chưa hỗ trợ');
          }
      }
}