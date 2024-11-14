 // --------------------script for navbar--------------------
 document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('active');
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 1){
    navbar.classList.add('color_change')}
    else{
        navbar.classList.remove('color_change')
    }
});




/* ------------------------------------------Clients js------------------------------------------ */

AOS.init();
jQuery(document).ready(function ($){
    // if ($('._mainSlider').hasClass('aos-animate')) {
        runAnimationJs();
    // }

    // $(window).on('scroll', function() {
    //     if ($('._mainSlider').hasClass('aos-animate')) {
    //         runAnimationJs();
    //     }
    // })
    function runAnimationJs(){
        var delay = 2000; // Delay in milliseconds
        // var items = $('._mainSlider.aos-animate ._slideItem');
        var items = $('._mainSlider ._slideItem').get().reverse();

        items.forEach(function(item, index) {
            var currentItem = $(item);
            setTimeout(function() {
                currentItem.slideUp(2000, function (){
                    heightItm = currentItem.outerHeight();
                    widthItm = currentItem.width();
                    // currentItem.find('._itmCntnt').css({'height': heightItm});
                    if(currentItem.data('itemtype') == false){
                        $('._lftSlide ._Inr').append(currentItem.css({'margin-right': '-300px'}));
                        currentItem.fadeIn(0,function (){
                            currentItem.css('margin-right', '0');
                            // currentItem.clone().css({'margin': '0 auto'}).prependTo('._mainSlider ._Inr');

                            var countLeftItems = $('._lftSlide ._slideItem').length;

                            if(countLeftItems > 3){
                                $('._mainSlider ._Inr').prepend($('._lftSlide ._Inr ._slideItem:first').css({'margin-left': 'auto', 'margin-right': 'auto'}));
                                runAnimationJs();
                            }
                            countLeftItems++;

                        });

                    }else{
                        $('._rightSlide ._Inr').prepend(currentItem.css({'margin-left': '-300px'}));
                        currentItem.fadeIn(0,function (){
                            currentItem.css('margin-left', '0');
                            // currentItem.clone().css({'margin': '0 auto'}).prependTo('._mainSlider ._Inr');

                            var countRightItems = $('._rightSlide ._slideItem').length;

                            if(countRightItems > 3){
                                $('._mainSlider ._Inr').prepend($('._rightSlide ._Inr ._slideItem:last').css({'margin-left': 'auto', 'margin-right': 'auto'}));
                                runAnimationJs();
                            }
                            countRightItems++;

                        });

                    }

                });
            }, index * delay);
        });
    }

//    section3 js

    $(document).on('click', '._ExpressItems ._slideItem', function (){
        // $('._ExpressItems ._slideItem').removeClass('_selected');
        $(this).toggleClass('_selected');
    })
    // $(document).on('click', '#sendItm', function (e){
    //     e.preventDefault();
    //     // $('._slideItem._selected').appendTo('._yourFirmItems');
    //     var items = $('._slideItem._selected').get();
    //     items.forEach(function(item, index) {
    //         var currentItem = $(item);
    //         setTimeout(function() {
    //             currentItem.fadeOut(1500, function (){
    //
    //                     // $('._yourFirmItems').append(currentItem.css({'margin-left': '-300px'}));
    //                     $('._yourFirmItems').prepend(currentItem.removeClass('_selected'));
    //                     currentItem.fadeIn(1500,function (){
    //                         // currentItem.css('margin-left', '0');
    //                     });
    //
    //
    //             });
    //         },  1000);
    //     });
    // })
    exP1 = $("._ExpressItems ._slideItem").first();
    runThirdAnimation(exP1);
    $('._phoneIcon').hide(0);
    $('._clickIcon').hide(0);
    // $("#sendItm").click(function(e){

    function runThirdAnimation(exP1) {
        // e.preventDefault();

        var first = exP1.offset().top;  	//first element distance from top
        var second = $("._yourFirmItems").offset().top;                 //second element distance from top
        // var topdistance =  parseInt(second) - parseInt(first) - 8;
        var gap = Math.abs(second - first);
        // alert(topdistance);

        var firmItemsChight = $("._yourFirmItems").outerHeight();
        $("._yourFirmItems").css({'height': firmItemsChight, "overflow":"hidden"});

        var expressItemsChight = $("._ExpressItems").outerHeight();
        $("._ExpressItems").css({'height': expressItemsChight});

        var centerPlaceEle = $("._centerPlace");
        var expressItem = exP1;
        var expressItemWidth = expressItem.next().outerWidth();
        var FirmItem = $("._yourFirmItems ._slideItem").first();
        var FirmItemWidth = FirmItem.outerWidth();
        distance = distanceBetweenElements(expressItem, FirmItem);
        halfDistance = distance;

        centerPlace = distanceBetweenElements(expressItem, centerPlaceEle);
        $('._clickIcon').fadeIn(500);
        $('._clickIcon').fadeOut(500);
        expressItem.animate({"left": centerPlace, "top": 120, "width": centerPlaceEle.outerWidth()}, 2500, function () {
            expressItem.addClass('_sactive');
            $('._sactive ._phoneIcon').show(0);
            setTimeout(function (){
                expressItem.removeClass('_sactive');
                $('._phoneIcon').hide(0);
                expressItem.animate({"left": distance, "top": gap, "width": FirmItemWidth}, 2500, function () {
                    expressItem.css("opacity", '0');
                    expressItem.slideUp(1000);
                    expressItem.animate({'left': '0', 'top': '0', 'width': expressItemWidth}, 0, function () {
                        nextSlide = exP1.next();
                        expressItem.appendTo('._ExpressItems1');
                        expressItem.css("opacity", '1');
                        expressItem.show();
                        runThirdAnimation(nextSlide);
                    });
                });
                FirmItem.animate({"margin-left": FirmItemWidth}, 2500, function () {
                    FirmItem.css({'margin-left': '0'});
                });
            }, 2500);

        });
    }
    // });

    function distanceBetweenElements(elementOne, elementTwo) {
        let distance = -1;

        const x1 = elementOne.offset().top;
        const y1 = elementOne.offset().left;
        const x2 = elementTwo.offset().top;
        const y2 = elementTwo.offset().left;
        const xDistance = x1 - x2;
        const yDistance = y1 - y2;

        distance = Math.sqrt(
            (xDistance * xDistance) + (yDistance * yDistance)
        );

        return distance;
    }


});