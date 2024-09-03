// nút trở về 
function init(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.5)';
        }
        else {
            document.getElementById('topMenu').style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
    document.getElementById("scroll").addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
    if(screen>600){
        document.getElementById('user').onclick = function() { 
            document.getElementById('last').style.display = 'block';
        }
        
        document.getElementById('user').onmouseleave = function() { 
            document.getElementById('last').style.display = 'none';
        }
    }
    var filter =document.getElementsByClassName("top");
    for(let i=0;i<filter.length;i++){
        filter[i].onclick=function(){
            if(document.getElementsByClassName("sub")[i].style.display==='block'){
                document.getElementsByClassName("sub")[i].style.display='none';
            }
            else{
                document.getElementsByClassName("sub")[i].style.display='block';
            }
            
        }
    }
    //bấm nút xem thêm

    document.getElementById('add_show').addEventListener('click',function(){
        const hidden=document.querySelectorAll('.cars .car:nth-child(n+7');
        const show=hidden[0].style.display==='block'; //các ảnh hiện thị
        if(show){
            hidden.forEach(car=>{
                car.style.display='none';
            });
            this.textContent='Xem thêm';
        }
        else{
            hidden.forEach(car=>{
                car.style.display='block';
            });
            this.textContent='Thu gọn';
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

    var listNotSp= document.getElementsByClassName('notSp');
    for(let i=0; i<listNotSp.length; i++){
        listNotSp[i].onclick=function(){
            alert('Tính năng hiện chưa hỗ trợ');
        }
    }
    
    // yêu thích
const sanPham=[
    {
        image:'../image/audi-png.png',
        title: ' Audi Q8 55 TFSI S-Line',
        price: '$ 3.700.000.000',
    },

    {
        image:'../image/audi-png-red.png',
        title: 'Audi Q3 35 TFSI',
        price: '$ 2.010.000.000',
    },
    {
        image:'../image/Mercedes.webp',
        title: 'Mercedes GLC 200',
        price: '$ 2.299.000.000',
    },
    {
        image:'../image/huyndai.png',
        title: 'Mercedes-Benz GLC',
        price: '$ 3.599.000.000',
    },
    {
        image:'../image/VF5_4.png',
        title: 'VinFast VF 3',
        price: '$ 322.000.000',
    },
    {
        image:'../image/VF5_3.webp',
        title: 'VinFast VF8 Lux Plus',
        price: '$ 1.359.000.000',
    },
    {
        image:'../image/G63.webp',
        title: 'Mercedes Benz G class G63',
        price: '$ 11.750.000.000',
    },
    {
        image:'../image/G63_den.png',
        title: 'Mercedes Benz G class G63',
        price: '$ 10.990.000.000',
    },
    {
        image:'../image/VF5_6.webp',
        title: 'VinFast VF5 Plus',
        price: '$ 468.000.000',
    },
    {
        image:'../image/ferrari.png',
        title: 'Ferrari F8 Spyder',
        price: '$ 26.999.000.000',
    },
    {
        image:'../image/toyota_blue.png',
        title: 'Toyota Prado VX',
        price: '$ 1.880.000.000',
    },
    {
        image:'../image/Toyota_purple.png',
        title: 'Toyota Yaris 1.5G',
        price: '$ 499.000.000',
    },

]

var listYeuThich= document.querySelectorAll('.like');

for (let i = 0; i < listYeuThich.length; i++) {
    listYeuThich[i].onclick = function() {
        let image = sanPham[i].image;
        let title = sanPham[i].title;
        let price = sanPham[i].price;
        $('#goiY').append(`
            <div class="xe">
                <img src="${image}">
                <p>${title}</p>
                <p>${price}</p>
                <p class="thungRac"><i class="fa-regular fa-trash-can" style="color: #FFD700"></i><p>
            </div>
        `);
        alert("Đã thêm vào giỏ hàng");
    }
}
$('#goiY').on('click','.thungRac', function(){
    $(this).parent().remove();
})

document.querySelector('.foot').onclick = function() {
    document.querySelector('.love_things').classList.remove('show');
}

document.querySelector('.yeuThich').onclick = function() {
    document.querySelector('.love_things').classList.add('show');
}
}
// thêm vào giỏ hàng
function like() {
    alert("Đã thêm vào giỏ hàng");
}
function notsp() {
    alert("Chức năng hiện chưa được cập nhật.");
}
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


//animation
let an1= document.querySelector('.cars');
    an1.classList.add('wow', 'animate__zoomInUp');

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
