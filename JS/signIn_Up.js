function init() {
    let signInButton = document.querySelector('#signIn .cover button');
    let signUpButton = document.querySelector('#signUp .cover button');
    let signInForm = document.querySelector('#signIn form');
    let signUpForm = document.querySelector('#signUp form');
    let coverSignIn = document.querySelector('#signIn .cover');
    let coverSignUp = document.querySelector('#signUp .cover');

    signInButton.addEventListener('click', function(){
        signInForm.style.transform= 'translateX(-400%)';
        coverSignIn.style.transform = 'translateX(-200%)';
        signUpForm.style.transform= 'translateX(0%)';
        coverSignUp.style.transform= 'translateX(0%)';
    });

    signUpButton.addEventListener('click', function() {
        signUpForm.style.transform= 'translateX(-200%)';
        coverSignUp.style.transform= 'translateX(-400%)';
        signInForm.style.transform = 'translateX(0%)';
        coverSignIn.style.transform= 'translateX(0%)';
    });

    const dark = document.querySelector('#switch .fa-moon');
    const light = document.querySelector('#switch .fa-sun');
    const body= document.getElementsByTagName('body')[0];

    dark.addEventListener('click', function(){
        body.classList.add('darkMode');
    })

    light.addEventListener('click', function(){
        body.classList.remove('darkMode');
    })
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
