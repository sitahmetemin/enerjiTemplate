$(document).ready(function () {
    let menuStatus = localStorage.getItem("menuStatus");
    if (menuStatus !== null) {

        if (menuStatus !== "show") {
            $("#sideBarContainer").removeClass("active-sidebar");
            $('main').addClass("fill-screen");
            $('.header').addClass("header-fill-screen");
            $('.menu-list label').addClass('hide-text');
            $('.menu-list a').addClass('ml-4');
            $("#sidebarToggleButton").children("i").addClass("fa-arrow-to-right");
            $('#logoLabel').addClass('hide-text');

            $("*.drop").removeClass("show");
            $("*.menu-caret-icon").removeClass("fa-plus");
            $("*.menu-caret-icon").removeClass("fa-minus");

        } else {
            $("#sideBarContainer").addClass("active-sidebar");
            $('main').removeClass("fill-screen");
            $('.header').removeClass("header-fill-screen");
            $('.menu-list label').removeClass('hide-text');
            $('.menu-list a').removeClass('ml-4');
            $("#sidebarToggleButton").children("i").removeClass("fa-arrow-to-right");
            $('#logoLabel').removeClass('hide-text');

            $("*.drop").removeClass("show");
            $("*.menu-caret-icon").removeClass("fa-minus");
        }
    }
    if ($('#bootstrapDataTable').length !== 0) {
        $('#bootstrapDataTable').dataTable({
            responsive: true,
            searching: false,
            "lengthChange": false,
            "language": {
                "sDecimal": ",",
                "sEmptyTable": "Tabloda herhangi bir veri mevcut değil",
                "sInfo": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
                "sInfoEmpty": "Kayıt yok",
                "sInfoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "Sayfada _MENU_ kayıt göster",
                "sLoadingRecords": "Yükleniyor...",
                "sProcessing": "İşleniyor...",
                "sSearch": "Ara:",
                "sZeroRecords": "Eşleşen kayıt bulunamadı",
                "oPaginate": {
                    "sFirst": "İlk",
                    "sLast": "Son",
                    "sNext": "Sonraki",
                    "sPrevious": "Önceki"
                },
                "oAria": {
                    "sSortAscending": ": artan sütun sıralamasını aktifleştir",
                    "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
                },
                "select": {
                    "rows": {
                        "_": "%d kayıt seçildi",
                        "0": "",
                        "1": "1 kayıt seçildi"
                    }
                }
            }
        });
    }


    $('select').select2({
        width: '100%',
        height: '38px',
        language: "tr"
    });

});

$(window).on('load', function () {
    $('.loader').slideUp()
});

function hideLoader() {
    $('.loader').fadeOut(1000);
}

function showLoader() {
    $('.loader').fadeIn(1000);
}

jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#toggleMenu").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });
});

$("#sidebarToggleButton").on("click", function () {

    $("#sideBarContainer").toggleClass("active-sidebar");
    $("#sidebarToggleButton").children("i").toggleClass("fa-arrow-to-right");
    $('main').toggleClass("fill-screen");
    $('.header').toggleClass("header-fill-screen");
    $('.menu-list label').toggleClass('hide-text');
    $(' #logoLabel').toggleClass('hide-text');
    $('.menu-list a').toggleClass('ml-4');
    $('.drop-menu').next().next().slideUp(300);
    $("*.menu-caret-icon").toggleClass("fa-plus");


    $("*.drop").removeClass("show");

    if (!$("#sideBarContainer").hasClass("active-sidebar"))
        $("*.menu-caret-icon").removeClass("fa-minus fa-plus");

    if ($("#sideBarContainer").hasClass("active-sidebar")) {
        localStorage.setItem("menuStatus", "show");
    } else {
        localStorage.setItem("menuStatus", "hide");
    }
});

$("#notificationBoxButton").on("click", function () {
    $(".notification-box").toggleClass("show");
    // $(".notification-box").slideToggle();
});

$('.drop-menu').on("click", function () {

    $(this).parent().children(".drop").slideToggle(300);
    $(this).parent().children("i").toggleClass("fa-minus").toggleClass("fa-plus");

    // Menü kapalıyen açılma işlemi
    if (!$("#sideBarContainer").hasClass("active-sidebar")) {

        $("#sideBarContainer").toggleClass("active-sidebar");
        $('main').toggleClass("fill-screen");
        $('.header').toggleClass("header-fill-screen");
        $('.menu-list label').toggleClass('hide-text');
        $('.menu-list a').toggleClass('ml-4');
    }

});

// $(window).on("scroll", function () {
//     if ($(this).scrollTop() === 0)
//         $('#scrollBg').removeClass("header-bg");
//     else
//         $('#scrollBg').addClass("header-bg");
// });

$('*[data-toggle="dropdown"]').click(function () {
    // $(this).next('.dropdown-menu').fadeToggle(300);
    $(this).next('.dropdown-menu').slideToggle();
});

$('*[data-toggle="dropdown"]').focusout(function () {
    // $(this).next('.dropdown-menu').slideUp();
    $(this).next('.dropdown-menu').fadeOut();
});