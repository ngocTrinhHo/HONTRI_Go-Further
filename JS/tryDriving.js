// nút trở về ở footer
function init(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.5)';
        }
        else {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 1)';
        }
    });
    document.getElementById("scroll").addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
    //slide
    var main= document.getElementById('slides');
    var listModel= document.querySelectorAll('#slides img');
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
    let event= setInterval(move,3000);

    //năng lực
    let hasStarted = false;
    
        window.addEventListener('scroll', function() {
            if (window.scrollY >1500 && !hasStarted) {
                hasStarted = true;
    
                const value1 = document.getElementsByClassName('chiTiet')[0];
                let count1 = 0;
                let a1 = setInterval(function() {
                    count1++;
                    value1.innerHTML = count1;
                    if (count1 === 1500) {
                        clearInterval(a1);
                    }
                }, 50); 
    
                const value2 = document.getElementsByClassName('chiTiet')[1];
                let count2 = 0;
                let a2 = setInterval(function() {
                    count2++;
                    value2.innerHTML = count2;
                    if (count2 === 15) {
                        clearInterval(a2);
                    }
                }, 500); 
    
                const value3 = document.getElementsByClassName('chiTiet')[2];
                let count3 = 0;
                let a3 = setInterval(function() {
                    count3++;
                    value3.innerHTML = count3;
                    if (count3 === 900) {
                        clearInterval(a3);
                    }
                }, 100); 
            }
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
}
//nút đăng kí(trượt xuống)
document.getElementById('scroll_signup').addEventListener('click',function(){
    const khoangcach=800;
    window.scrollBy({
        top: khoangcach,
        behavior: 'smooth'
    });
});
document.getElementById('scroll_bottom').addEventListener('click',function(){
    const khoangcach=800;
    window.scrollBy({
        top: khoangcach,
        behavior: 'smooth'
    });
});
//nút quay lại trên 
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
//nút đăng kí
const day=document.getElementById("day");
const hour=document.getElementById("hour");
const Ten=document.getElementById("name");
const phonenumber=document.getElementById("phonenumber");
const email=document.getElementById("email");
const signup=document.getElementById("signup");

function update(){
    if(day.value!==''&&hour.value!==''&& Ten.value!==''&&phonenumber.value!==''&&email.value!==''){
        signup.classList.add('active');
    }
    else{
        signup.classList.remove('active');
    }
}
        day.addEventListener('input', update);
        hour.addEventListener('input', update);
        Ten.addEventListener('input', update);
        phonenumber.addEventListener('input', update);
        email.addEventListener('input', update);

function sign(){
    if(day.value===''||hour.value===''|| Ten.value===''||phonenumber.value===''||email.value===''){
        alert("Vui lòng nhập đầy đủ thông tin");
    }
    else{
        alert("Đăng ký thành công!");
    }
}
update();// Khởi động khi trang đang tải để đảm bảo trạng thái nút đúng

//nút lưu
function Luu() {
    alert("Đã lưu thành công!");
}
//nhận quà
function notSp() {
    alert("Tính năng hiện chưa hỗ trợ");
}

//
let an1= document.querySelector('.note_poster h1');
    an1.classList.add('wow', 'animate__bounce');
    
let left= document.getElementsByClassName('top');
    for(let i of left){
        i.classList.add('wow', 'animate__backInLeft');   
    }
let right= document.getElementsByClassName('bottom');
    for(let i of right){
        i.classList.add('wow', 'animate__backInRight');   
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

