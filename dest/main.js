
$(".loading").fadeOut(3000);

$(document).ready(function () {


    $('.parallax-window').parallax({
        imageSrc: 'img/home/background.jpg)'
    });

    AOS.init({
        duration: 1200,
      });


    $(this).on('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
        let backtoTop = $('.backtoTop');

        if(scrollTop > 2000){
            backtoTop.css({
                'opacity' : '1',
                'transition' : 'all .3s',
                'pointer-events' : 'auto'
            })
        }else{
            backtoTop.css({
                'opacity' : '0',
                'transition' : 'all .3s',
                'pointer-events' : 'none'
            })
        }   
        if(scrollTop > 970 ){
            $('.newsArticelpage .post__icon').addClass('active');
        }else{
            $('.newsArticelpage .post__icon').removeClass('active');
        }

        // backtoTop
        backtoTop.on('click', function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    });

    // menu mobile
    $('header .hamburger').on('click', function(e){
        $('.menuMobile').toggleClass('active-menuMobile');
        $('header .hamburger .hamburger__d').toggleClass('active');
    })

    $(window).on('resize', function(e) {
        if($('.menuMobile').is(":visible")){
            $('.menuMobile').removeClass("active-menuMobile");
            $('header .hamburger .hamburger__d').removeClass("active");
        }else{
            return;
        }   
    });


    $('.registerStorespage .text').on('click', function(e){
        $('.registerStorespage .list-tab').slideToggle();
    })
    $('.registerStorespage .list-tab .tab span').click(function(e){
            let nameCountry = $(this).text();
            $('.registerStorespage .text span').text(nameCountry)
            $('.registerStorespage .list-tab').hide(e);
        })
    
    $('body').click(function(e){
       $('.lang_option').slideDown();
    })

    // accodion product-detail
    let content = $('.motoDetail__d-accodion .tab .content').hide();
    $(".motoDetail__d-accodion .tab .head").on('click', function(e){
        $(this).toggleClass('active');
        content.not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });


    // accodion menu
    let contentMenu = $('.menuMobile .text .content').hide();
    $(".menuMobile .text a").on('click', function(e){
        // $(this).toggleClass('active');
        contentMenu.not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    // popup so sanh
    let popup = $('.popupsosanh-js');
    $('.product__list .sosanh-js').on('click', function(){
        popup.addClass('active');
    })
    $('.popupsosanh .close').on('click', function(){
        popup.removeClass('active');
    })

    // tab news
    let tab = $('.news__paging-number ul li')

    let news_item = $('.news .news__wrap');

    tab.on('click', function(e){
        e.preventDefault();
        tab.removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        news_item.removeClass('active');
        $(news_item[index]).addClass('active');
    })


    // tab product_d
    let tabProduct = $('.product .product__tab li')

    let product_item = $('.product .item');

    tabProduct.on('click', function(e){
        tabProduct.removeClass('active');
        $(this).addClass('active');
        let index1 = $(this).index();
        product_item.removeClass('active');
        $(product_item[index1]).addClass('active');
    })

    //slider hotitem
    let $carouselHotitem = $('.productHot .productHot__slide')
    $carouselHotitem.flickity({
        //option
        prevNextButtons: false,
        contain:true,
        wrapAround:true,
        // autoPlay: true,
        pageDots: false,
        watchCSS:true,
        // imagesLoaded: true,
    })


    // slider
    let $carousel= $('.slide .slide__wrap');
    $carousel.flickity({
       //  option
       cellAlign:'left',
       prevNextButtons: false,
       contain:true,
       wrapAround:true,
       pageDots: false,
       selectedAttraction: 0.04,
       on:{
           change: function(index){
               let number = $('.slide__bottom-paging .number_page');
               let indexPage = index + 1;
               number.text(indexPage.toString().padStart(2,0))
           }
       },
    })

    let $carousel2= $('.kymco .kymco__slide');
    let textItem = $('.kymco__content-item');
    $carousel2.flickity({
       //  option
       cellAlign:'left',
       prevNextButtons: false,
       contain:true,
       wrapAround:true,
       pageDots: false,
       freeScrollFriction: 20,
       friction: 0.35,
    //    autoPlay:true,
       on:{
            change: function(index){

                let number = $('.kymco .kymco__content-paging .number_page');
                let indexPage = index + 1;
                textItem.removeClass('active');
                $(textItem[index]).addClass('active');

                number.text(indexPage.toString().padStart(2,0))
            }
        },
    })



    $(".kymco__button .button-prev").on("click", function (e) {
        $carousel2.stop().flickity("previous");
    });
    $(".kymco__button .button-next").on("click", function (e) {
        $carousel2.stop().flickity("next");
    });



    let chooseSex = $('.product__choose-style ul li');
    chooseSex.on('click', function (e) {
        chooseSex.removeClass('active');
        $(this).addClass('active');
    })

    let chooseType = $('.product__choose-option .ul-left li');
    chooseType.on('click', function (e) {
        chooseType.removeClass('active');
        $(this).addClass('active');
    })
    
    let chooseEngine = $('.product__choose-option .ul-right li');
    chooseEngine.on('click', function (e) {
        chooseEngine.removeClass('active');
        $(this).addClass('active');
    })



    // choose color
    let moto = $('.productDetailpage .banner__moto img');
    let changColor = $('.productDetailpage .changColor li');
    changColor.on('click', function (e) {
        changColor.removeClass('active')
        $(this).addClass('active')
        let indexColor = $(this).index();
        moto.removeClass('active');
        $(moto[indexColor]).addClass('active');
    })

    let location = $('.storespage .selection__wrap-text');
    let itemOption = $('.selection__wrap-option');
    let itemTab = $('.selection__wrap-option .tab span');

    let spanCurrent = $('.storespage .selection__wrap-text span')

    location.on('click', function(e){
        // $(this).toggleClass();
        itemOption.not($(this).next()).slideUp();
        $(this).next().slideToggle();
    })

    itemTab.click(function(e){
            let nameItem = $(this).text();
            console.log(nameItem);
            spanCurrent.text(nameItem)
            itemOption.hide(e);
        })
    
    $('body').click(function(e){
       $('.lang_option').slideDown();
    })

    $('.storespage .head .tab ul li').on('click', function(e){
        e.preventDefault();
        $('.storespage .head .tab ul li').removeClass('active');
        $(this).addClass('active');
    })



    let $carousel3= $('.productpage .sliderSmall .sliderSmall__item');
    $carousel3.flickity({
       //  option
       cellAlign:'left',
       prevNextButtons: false,
       contain:true,
       wrapAround:true,
       pageDots: false,
       freeScroll:true,
    })
    $(".productpage .sliderSmall .sliderSmall__btn").on("click", function (e) {
        $carousel3.stop().flickity("next");
    });

    var imgEarth = $('.homepage .network__global img');

    $(window).on('mousemove', function(e){
        var x  = (e.clientX / window.innerWidth)*25;
        imgEarth.css({
            'transform': `rotate(${x}deg)`,
        })
    });


    // let sliderSmall = $('.sliderSmall__item-d');
    // $('.dele-js').on('click', function (e) {
    //     let dele = $('.dele-js').index();
    // })

    // let dele = $('.dele-js').index();
    // console.log(dele);

    var optionSevice = $('.servicepage .content__list ul li');
    var itemService = $('.servicepage .content__text-item');

    optionSevice.on('click',function(e){
        e.preventDefault();
        optionSevice.removeClass('active');
        $(this).addClass('active');
        let indexOption = $(this).index();
        itemService.removeClass('active');
        $(itemService[indexOption]).addClass('active');

    })


    let btnPlay = $('.technologypage .circle .play');
    let close_popup = $('.videoNOOD .close');
    let popup_video = $('.videoNOOD');
    let iframe = $('.videoNOOD iframe');


    btnPlay.on('click', function (e){
        let get_id = $(this).attr('data-video-id');
        iframe.attr('src', 'https://www.youtube.com/embed/' + get_id + "?autoplay=1" );
        console.log(get_id);
        popup_video.addClass('active');
    })
    close_popup.on('click', function (e){
        popup_video.removeClass('active');
        iframe.attr('src', '');
    })


    let optionTech = $('.technologypage .section3__text ul li');
    let videoItemTech = $('.technologypage .section3__img .circle');

    optionTech.on('click', function(e){
        e.preventDefault();
        optionTech.removeClass('active');
        $(this).addClass('active');

        let indexOptionTech = $(this).index();
        videoItemTech.removeClass('active');
        $(videoItemTech[indexOptionTech]).addClass('active');
    })

    // //Sroll to <> Active _Header
    let headerY = document.querySelector("header");
    window.addEventListener("scroll",function(){
        if(window.pageYOffset >= headerY.clientHeight){
            headerY.classList.add("bgcolor")
        } else {
            headerY.classList.remove("bgcolor")
        }
    })
    // //Test Height Of PageYOffset
    // $(this).on("scroll",function(){
    //     console.log(window.pageYOffset);
    // })
    
});