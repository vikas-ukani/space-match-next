$(window).on("load", function () {
    if ($(window).width() > 991) {
        if ($.fn.mCustomScrollbar) {
            $("#sidenav .menu").mCustomScrollbar({
                theme: "light-3",
                autoHideScrollbar: true,
                mouseWheel: { enable: true },
                mouseWheel: { scrollAmount: "40px" }
            });
        }
    }
    $("#agreement").change(function () {
        setTimeout(function () {
            if ($.fn.mCustomScrollbar) {
                $("#agreement_content").mCustomScrollbar({
                    theme: "dark"
                });
            }
        }, 500);
    });

    var date = new Date();
    date.setDate(date.getDate());
    $('#unavailableStartDate, #unavailableEndDate').datepicker({
        format: "dd-mm-yyyy",
        autoclose: true,
        clearBtn: true,
        maxViewMode: 0,
        startDate: date,
    });
    $('#unavailableStartDate').on('changeDate', function (e) {
        if (typeof e.date !== 'undefined') {
            var first_date = e.format();
            var first_dates = first_date.split('-');
            var first_day = first_dates[0];
            var first_month = first_dates[1];
            var first_year = first_dates[2];
            var date1 = new Date(first_day, first_month, first_year);
            var endate = first_day + '-' + first_month + '-' + first_year;
            $('#unavailableEndDate').datepicker('setStartDate', endate);
        }
    });

    $(".ais-SearchBox-input").addClass("form-control");
    // if (user_id > 0) {
    //     myFavoritesFindSpace();
    // }
    $('#setUpdate').click(function () {
        $(".filter-wrap .close-filter").trigger('click');
    });

    // $(".related-carousel").slick({
    //     autoplay: false,
    //     dots: false,
    //     adaptiveHeight: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: "<div class='slick-arrow-parent right'><i class='icon icon icon-small-chevron-right'></i></div>",
    //     nextArrow: "<div class='slick-arrow-parent left'><i class='icon icon-small-chevron-left'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }]
    // });
});