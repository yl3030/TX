$(".header_lang_active").click(function(){
    $(this).parents(".header_lang").find(".header_lang_list").slideToggle(300);
})

$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_right").toggleClass("active");
})