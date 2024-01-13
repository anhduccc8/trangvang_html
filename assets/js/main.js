function navOpen() {
    var x = document.getElementById("menu-reponsive");
    if (x.className === "site-navigation") {
        x.className += " navigation-open";
    } else {
        x.className = "site-navigation";
    }
}

/*Js Dropdown Menu*/
// $('.dropdown').click(function () {
//     $(this).attr('tabindex', 1).focus();
//     $(this).toggleClass('active');
//     $(this).find('.dropdown-menu').slideToggle(300);
// });
// $('.dropdown').focusout(function () {
//     $(this).removeClass('active');
//     $(this).find('.dropdown-menu').slideUp(300);
// });
// $('.dropdown .dropdown-menu li').click(function () {
//     $(this).parents('.dropdown').find('span').text($(this).text());
//     $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
// });

// $('.dropdown-menu li').click(function () {
//   var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
//   msg = '<span class="msg">Hidden input value: ';
//   $('.msg').html(msg + input + '</span>');
// }); 


$(document).ready(function() {
    $('.section-product .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 34,
        navText: [
            '<a href="javascript:;" class="owl_next prev_owl"><img src="assets/image/left.svg" alt="left"></a>',
            '<a href="javascript:;" class="owl_prev next_owl"><img src="assets/image/next.svg" alt="right"></a>'
        ],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

 if ($('#dropdownAddress').length > 0){
     $('#dropdownAddress').select2();
 }
});


function handleSelectionChange() {
    var dropdown = document.getElementById("myDropdown");
    // var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    // document.getElementById("selectedOption").innerText = "Selected option: " + selectedOption;
}