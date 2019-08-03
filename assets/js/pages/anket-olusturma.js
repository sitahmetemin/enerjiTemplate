// global varible
var sectionCounter = 1;
var pageCounter = 1;

$('*#showQuestionPanel').on("click", function () {
    $('.question-type-section').toggleClass("active-question-type-section");
    $(this).toggleClass("text-success");
    $('.question-type > i').toggleClass("border-0");
    $('.question-type').toggleClass("border");
});

$('#newSectionButton').on('click', function () {
    sectionCounter++;
    $('#questionSectionForm')
        .append('<section id="section' + sectionCounter + '" class="section">' +
        '<div class="section-header">' +
            '<h3 class="mr-auto">Bölüm ' + sectionCounter + '</h3>' +
            '<div class="dropdown">\n' +
            '<button class="btn waves-effect" type="button" id="dropdownSectionHeader" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
            '<i class="fa fa-ellipsis-h"></i>\n' +
            '</button>\n' +
            '<div class="dropdown-menu dropdown-primary">\n' +
            '<a id="removeSectionButton" class="dropdown-item" href="javascript:void(0)">Sil</a>\n' +
            '</div>\n' +
            '</div>' +
        '</section>');

    $('.section-control-area')
        .append('<hr class="section-hr">' +
            '<div class="section-control">' +
            '<a href="#section' + sectionCounter + '" class="btn btn-light btn-sm">' + sectionCounter + '</a>' +
            '</div>');
});


$('.question-type').hover(function () {

    if (!$('.question-type-section').hasClass('active-question-type-section'))
        $(this).children('.custom-tooltip').css('display', 'block');

}, function () {

    if (!$('.question-type-section').hasClass('active-question-type-section'))
        $(this).children('.custom-tooltip').css('display', 'none');

});

$(document).on("click", ".section", function () {
    $('.section').removeClass('border-primary');
    $(this).addClass('border-primary');
});

$(document).on('click', '#appendAnswerInput', function () {
    $(this)
        .parent()
        .prev()
        .prev()
        .append('<div class="input-group mb-4"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span></div><input type="text" class="form-control"><div class="input-group-append"><button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon2"><i class="fa fa-minus"></i></button></div></div>');
});

$(document).on("click", '*#removeAnswerInput', function () {
    $(this).parent().parent().remove();
});

$(document).ready(function () {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var date = day + '.' + month + '.' + d.getFullYear();
    $('#showDate').text(date);

});

$('#newPageButton').on('click', function () {
    if (pageCounter < 5) {
        pageCounter++;
        $('#pageControlSection')
            .append('<div id="buttonGroup">' +
            '<button class="btn btn-success btn-sm mr-4 text-nowrap waves-effect" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sayfa ' + pageCounter + '<i class="fa fa-ellipsis-h"></i></button>' +
            '<div class="dropdown-menu">' +
            '<a id="showTab" data-showcustomtab="#customTab' + pageCounter + '" class="dropdown-item" href="#">Göster</a>' +
            '<a id="removePageButton" class="dropdown-item" href="#">Sil</a>' +
            '</div>' +
            '</div>');
    }
});

$(document).on("click", "#removePageButton", function () {
    $(this).parent().parent().remove();
    pageCounter--;
    let groups = $('*#buttonGroup');

    $('*#buttonGroup').each(function (index) {
        $(this).children("button").text("Sayfa " + (index + 1));
        $(this).children("button").append('<i class="fa fa-ellipsis-h"></i>');
    });
});

$('#multipleChoiceQuestionAddButton').on("click", function () {

    $('.section.border-primary')
        .append('<section class="question-area">\n' +
            '<div class="row">\n' +
            '<div class="col-12 d-flex justify-content-center align-items-center">\n' +
            '<label class="label label-success fs-x1-5 mr-auto" for="">Soru</label>\n' +
            '<div class="d-flex">\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<hr>\n' +
            '<div class="row">\n' +
            '<div id="answerSection" class="col-8">\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Soru Yazınız</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="col-4">\n' +
            '<select class="form-control" name="" id="">\n' +
            '<option value="1">Soru Tipi</option>\n' +
            '<option value="1">Ahmet</option>\n' +
            '<option value="1">Mehmet</option>\n' +
            '</select>\n' +
            '</div>\n' +
            '<div class="col-12">\n' +
            '<a id="appendAnswerInput" class=""><i class="fal fa-plus-circle mr-2"></i>Başka bir seçenek ekleniyiz</a>\n' +
            '</div>\n' +
            '</div>\n' +
            '</section>');

});

// headera bastığında soruları kapatan metod
// $(document).on('click', '.section-header', function(){
//     $(this).nextAll().slideToggle();
// });


$(document).on('click', '#removeSectionButton', function(){
    $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .remove();
});