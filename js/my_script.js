$(function () {

    // 緑の帯のスクロール
    $('.textScroll').animate({
        'top': '-10000px'
    }, { duration: 300000, easing: 'linear', });



    // Aboutのホバーアニメーション
    // colorやbackground-colorのアニメーションはjQuery UIのプラグインを使う
    //background-colorはbackgroundColorと表記する。

    var $about = $('#about');
    var $access = $('#access');

    $about.hover(
        function () {
            $about.animate({
                'border-radius': '15px'
            }, 25).animate({
                'backgroundColor': 'black'
            }, 25).animate({
                'color': 'white'
            }, 25);
        },
        function () {
            $about.animate({
                'border-radius': '50px'
            }, 25).animate({
                'backgroundColor': 'white'
            }, 25).animate({
                'color': 'black'
            }, 25); 1
        }
    );

    // アクセスのホバーアニメーション
    $access.hover(
        function () {
            $access.animate({
                'border-radius': '15px'
            }, 25).animate({
                'backgroundColor': 'black'
            }, 25).animate({
                'color': 'white'
            }, 25);

        },
        function () {
            $access.animate({
                'border-radius': '50px'
            }, 25).animate({
                'backgroundColor': 'white'
            }, 25).animate({
                'color': 'black'
            }, 25);
        }
    );

    // ヘッダーロゴのバウンスアニメーション　animate.css
    var $headerLogo = $('#headerLogo');
    $(window).scroll(function () {
        if ($(this).scrollTop() < 75) {
            $headerLogo.removeClass('bounceOut');
            $headerLogo.addClass('bounceIn');
        } else {
            $headerLogo.removeClass('bounceIn');
            $headerLogo.addClass('bounceOut');

        }
    });

    // ヘッダーロゴのホバーアニメーション　カラーチェンジ(画像入れ替え)

    $headerLogo.each(function () {

        let img_off = $(this).attr('src');
        let img_on = $(this).attr('src').replace('off', 'on');

        $(this).hover(
            function () {
                $(this).attr('src', img_on);
                $('header h1').css('top', '12px');
                $('header h1').css('left', '145px');

            },
            function () {
                $(this).attr('src', img_off);
                $('header h1').css('top', '20px');
                $('header h1').css('left', '153px');

            }
        );

    });

   

});
