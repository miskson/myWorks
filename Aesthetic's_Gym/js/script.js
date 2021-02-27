var mySwiper = new Swiper('.swiper-container', { //инициализируем свайпер
    direction: 'horizontal', //горизонтальное расположение свайпов
    initialSlide: 0, //стартовый слайд "img/gym3.jpg"
    loop: true, //свайпі не зацилены
    autoHeight: true, //автовысота
    slidesPerView: 1, //отображения 1го слайда
    watchOverflow: true, //для корректной работы
    effect: 'fade', //ефект угасания на переходы
    centeredSlides: true, //центрируем слайды
    navigation:{ //включаем стрелочки
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
  });

const  form = document.getElementById('form'); //получаем всю форму
//получаем поля формы
const  userName = document.getElementById('username');
const  userLastname = document.getElementById('userLastname');
const  userMail = document.getElementById('userMail');
const  phoneNumber = document.getElementById('phoneNumber');

let isValid = false; //статус валидности информациии в форме
let popupIsActive = false; //статус активности попапа

form.addEventListener('submit', (e) => { //прослушка события по отправке формы
    e.preventDefault();//предотвращаем отправку формы на сервер
    checkInputs();//вызываем функцию проверки ввода
    if(isValid == true){ // если форма валидна
        const currentPopup = document.getElementById('popup'); //получаем попап
        popupOpen(currentPopup); //вызываем функцию открытия попапа
    }
});

const popupCloseButton = document.getElementById('popupcloseBtn');//получаем кнопку-ссылку
popupCloseButton.addEventListener('click', (e) =>{ //прослушиваем событие по нажитию кнопки-ссылки
    e.preventDefault(); //предотвращаем перезагрузку страницы
    const currentPopup = document.getElementById('popup'); //получем попап
    popupClose(currentPopup);//вызываем функцию закрытия попапа и передаем в нее попап
});


function checkInputs(){
    //получаем значения из инпутов
    var userNameValue = userName.value.trim();// .trim() удаляет пробелы и табуляции в начале и конце строк
    var userLastnameValue = userLastname.value.trim();
    var userMailValue = userMail.value.trim();
    var phoneNumberValue = phoneNumber.value.trim();
    //проверяем еслть ли какой-то ввод в инпутах
    if(userNameValue === ''){
        setErrorFor(userName, 'Name cannot be blank.');
    }
    else{
        setSuccessFor(userName,'+');//сообщение заглушка
        userNameValue = true;
    }

    if(userLastnameValue === ''){
        setErrorFor(userLastname, 'Last name cannot be blank.');
    }
    else{
        setSuccessFor(userLastname,'+');
        userLastnameValue = true;
    }

    if(userMailValue === ''){
        setErrorFor(userMail, 'E-mail cannot be blank.');
    }
    else if(!isEmail(userMailValue)){
        setErrorFor(userMail, 'Not valid e-mail address.');
    }
    else{
        setSuccessFor(userMail,'+');
        userMailValue = true;
    }

    if(phoneNumberValue === ''){
        setErrorFor(phoneNumber, 'Phone number cannot be blank.');
    }
    else if(!isPhoneNumber(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Not valid phone number.')
    }
    else{
        setSuccessFor(phoneNumber,'+');
        phoneNumberValue = true;
    }
    //проверка на одновременную валидность всех полей
    if(userNameValue == true && userLastnameValue == true  && userMailValue == true && phoneNumberValue == true){
        isValid = true; //все поля валидны - isValid = true;
    }
}

function setErrorFor(input, message){
    var formControl = input.parentElement;// .form-control 
    var smallTag = formControl.querySelector('small');// получаем small тєг
    var inputFrame = formControl.querySelector('input');
    smallTag.style.color ='#FF0000'; // окрашиваем текст ошибки в красный
    inputFrame.style.borderColor = '#FF0000'; // окрашиваем рамку input в красный
    smallTag.innerText = message; //вставляем сообщение ошибки в small
    formControl.className = 'form-control error'; //добавляем класс ошибки
}

function setSuccessFor(input,message){
    var formControl = input.parentElement;// .form-control
    var inputFrame = formControl.querySelector('input');
    var smallTag = formControl.querySelector('small');// получаем small тєг
    inputFrame.style.borderColor = '#00FF7F'; // окрашиваем рамку input в зеленый
    smallTag.style.color =  '#010506'; //сообщение заглушку окрашиваем в цвет фона
    smallTag.innerText = message; //вставляем сюда сообщение заглушку
    formControl.className = 'form-control success'; //добавляем класс ошибки
}

//проверяем E-mail этим длинным рег.выражением
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//проверяем phoneNumber этим рег.выражением
function isPhoneNumber(element){
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(element);
}
//функция открытия попапа
function popupOpen(currentPopup){
    const popupActive = document.querySelector('.popup.open'); //получаем класс .popup.open из css
    currentPopup.classList.add('open');//добавляем попапу класс .open
    popupIsActive = true;
}
//функция закрітия попапа
function popupClose(currentPopup){
    currentPopup.classList.remove('open');
}