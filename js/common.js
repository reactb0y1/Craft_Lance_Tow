$(document).ready(function() {
    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "../php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });
})

// $(document).ready(function() {
//     // Находим все слайды
//     var slides = document.querySelectorAll('.slider .slider__stage');
//     // Переменная для получения текущего слайда
//     var currentSlide = 0;
//     // Интервал в 2 секунды для следующего слайда
//     var slideInterval = setInterval(nextSlide,2000);

//     function nextSlide() {
//      goToSlide(currentSlide+1);
//     }

//     function previousSlide() {
//      goToSlide(currentSlide-1);
//     }

//     function goToSlide(n) {
//      slides[currentSlide].className = 'slider__stage';
//      currentSlide = (n+slides.length)%slides.length;
//      slides[currentSlide].className = 'slider__stage showing';
//     }


//     var next = document.getElementById('next');
//     var previous = document.getElementById('previous');

//     next.onclick = function() {
//         pauseSlideshow();
//         nextSlide();
//     }

//     previous.onclick = function() {
//         pauseSlideshow();
//         previousSlide();
//     }


//     // Переменная хранится, когда слайдер активен
//     var playing = true;
//     // Получаем доступ к кнопке управления
//     var pauseButton = document.getElementById('pause');

//     // Эта функция
//     function pauseSlideshow() {
//         // в кнопке делает запись Play
//         pauseButton.innerHTML = 'Play';
//         // останавливает слайдер
//         playing = false;
//         clearInterval(slideInterval);
//     }

//     // А эта функция
//     function playSlideshow() {
//         // в кнопке делает запись Pause
//         pauseButton.innerHTML = 'Pause';
//         //запускает слайдер
//         playing = true;
//         slideInterval = setInterval(nextSlide,2000);
//     }

//     // обработчик клика
//     pauseButton.onclick = function() {
//         if(playing) {
//             pauseSlideshow();
//         } else {
//             playSlideshow();
//         }
//     };
// })

// $(document).ready(function() {
    $("#stages__stage1").click(function() {
        $("#slider__stage1").addClass("slider__showing");
        $("#slider__stage2").removeClass("slider__showing");
        $("#slider__stage3").removeClass("slider__showing");
        $("#stages__ico1").css("background-position", "0 0");
        $("#stages__ico2").css("background-position", "-138px 0");
        $("#stages__ico3").css("background-position", "-230px 0");
    });
    $("#stages__stage2").click(function() {
        $("#slider__stage2").addClass("slider__showing");
        $("#slider__stage1").removeClass("slider__showing");
        $("#slider__stage3").removeClass("slider__showing");
        $("#stages__ico1").css("background-position", "-46px 0");
        $("#stages__ico2").css("background-position", "-92px 0");
        $("#stages__ico3").css("background-position", "-230px 0");
    });
    $("#stages__stage3").click(function() {
        $("#slider__stage3").addClass("slider__showing");
        $("#slider__stage1").removeClass("slider__showing");
        $("#slider__stage2").removeClass("slider__showing");
        $("#stages__ico1").css("background-position", "-46px 0");
        $("#stages__ico2").css("background-position", "-138px 0");
        $("#stages__ico3").css("background-position", "-184px 0");
    });
// }


$("#advantages__elem1").hover(function() {
    $("#advantages__elem1").css("background-color", "#5db442");
    $("#advantages__elem1 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem1 .advantages__ico").css("background-position", "-65px 0");
    $("#advantages__elem1 .advantages__propose, #advantages__elem1 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem1").css("background-color", "white");
    $("#advantages__elem1 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem1 .advantages__ico").css("background-position", "0 0");
    $("#advantages__elem1 .advantages__propose").css("color", "#333");
    $("#advantages__elem1 .advantages__text").css("color", "#777");
});

$("#advantages__elem2").hover(function() {
    $("#advantages__elem2").css("background-color", "#5db442");
    $("#advantages__elem2 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem2 .advantages__ico").css("background-position", "-191px 0");
    $("#advantages__elem2 .advantages__propose, #advantages__elem2 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem2").css("background-color", "white");
    $("#advantages__elem2 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem2 .advantages__ico").css("background-position", "-130px 0");
    $("#advantages__elem2 .advantages__propose").css("color", "#333");
    $("#advantages__elem2 .advantages__text").css("color", "#777");
});

$("#advantages__elem3").hover(function() {
    $("#advantages__elem3").css("background-color", "#5db442");
    $("#advantages__elem3 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem3 .advantages__ico").css("background-position", "-326px 0");
    $("#advantages__elem3 .advantages__propose, #advantages__elem3 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem3").css("background-color", "white");
    $("#advantages__elem3 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem3 .advantages__ico").css("background-position", "-251px 0");
    $("#advantages__elem3 .advantages__propose").css("color", "#333");
    $("#advantages__elem3 .advantages__text").css("color", "#777");
});

$("#advantages__elem4").hover(function() {
    $("#advantages__elem4").css("background-color", "#5db442");
    $("#advantages__elem4 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem4 .advantages__ico").css("background-position", "-480px 0");
    $("#advantages__elem4 .advantages__propose, #advantages__elem4 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem4").css("background-color", "white");
    $("#advantages__elem4 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem4 .advantages__ico").css("background-position", "-409px 0");
    $("#advantages__elem4 .advantages__propose").css("color", "#333");
    $("#advantages__elem4 .advantages__text").css("color", "#777");
});

$("#advantages__elem5").hover(function() {
    $("#advantages__elem5").css("background-color", "#5db442");
    $("#advantages__elem5 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem5 .advantages__ico").css("background-position", "-70px -65px");
    $("#advantages__elem5 .advantages__propose, #advantages__elem5 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem5").css("background-color", "white");
    $("#advantages__elem5 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem5 .advantages__ico").css("background-position", "0 -65px");
    $("#advantages__elem5 .advantages__propose").css("color", "#333");
    $("#advantages__elem5 .advantages__text").css("color", "#777");
});

$("#advantages__elem6").hover(function() {
    $("#advantages__elem6").css("background-color", "#5db442");
    $("#advantages__elem6 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem6 .advantages__ico").css("background-position", "-216px -66px");
    $("#advantages__elem6 .advantages__propose, #advantages__elem6 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem6").css("background-color", "white");
    $("#advantages__elem6 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem6 .advantages__ico").css("background-position", "-157px -62px");
    $("#advantages__elem6 .advantages__propose").css("color", "#333");
    $("#advantages__elem6 .advantages__text").css("color", "#777");
});

$("#advantages__elem7").hover(function() {
    $("#advantages__elem7").css("background-color", "#5db442");
    $("#advantages__elem7 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem7 .advantages__ico").css("background-position", "-345px -69px");
    $("#advantages__elem7 .advantages__propose, #advantages__elem7 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem7").css("background-color", "white");
    $("#advantages__elem7 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem7 .advantages__ico").css("background-position", "-280px -68px");
    $("#advantages__elem7 .advantages__propose").css("color", "#333");
    $("#advantages__elem7 .advantages__text").css("color", "#777");
});

$("#advantages__elem8").hover(function() {
    $("#advantages__elem8").css("background-color", "#5db442");
    $("#advantages__elem8 .advantages__icoContainer").css("border-bottom", "2px solid white");
    $("#advantages__elem8 .advantages__ico").css("background-position", "-495px -65px");
    $("#advantages__elem8 .advantages__propose, #advantages__elem8 .advantages__text").css("color", "white");
},
function() {
    $("#advantages__elem8").css("background-color", "white");
    $("#advantages__elem8 .advantages__icoContainer").css("border-bottom", "2px solid #ececec");
    $("#advantages__elem8 .advantages__ico").css("background-position", "-423px -73px");
    $("#advantages__elem8 .advantages__propose").css("color", "#333");
    $("#advantages__elem8 .advantages__text").css("color", "#777");
});

$(".price__business").click(function() {
    $(".price__community").addClass("price__active");
    $(".price__business").removeClass("price__active");
    $("#price__business").addClass("price__contentActive");
    $("#price__community").removeClass("price__contentActive");
});

$(".price__community").click(function() {
    $(".price__business").addClass("price__active");
    $(".price__community").removeClass("price__active");
    $("#price__business").removeClass("price__contentActive");
    $("#price__community").addClass("price__contentActive");
});

$(".header__mobilIcon").click(function() {
    $(".header__nav").animate(
        {
            left: "+=250"
        },
    100);
    $(".header__transparent").css("width", "100vw");
})

$(".header__transparent").click(function() {
    $(".header__nav").css("left", "-250px");
    $(".header__transparent").css("width", "0");
})

function windowSize(){
    if ($(window).width() >= '600'){
        $(".header__nav").css("left", "-250px");
        $(".header__transparent").css("width", "0");
    }
}

$(".navMenu__list_nav").click(function() {
    $(".header__nav").css("left", "-250px");
    $(".header__transparent").css("width", "0");
})