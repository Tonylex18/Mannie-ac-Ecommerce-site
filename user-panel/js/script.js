// // init Isotope
// var $grid = $('.special-list').isotope({
//     // options
// });
// // filter items on button click
// $('.filter-button-group').on('click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
// });

// var filterBtns = $('.filter-button-group').find('button');

// function resetFilterBtns() {
//     filterBtns.each(function() {
//         $(this).removeClass('active-filter-btn');
//     });
// }



// resetFilterBtns();
// $(this).addClass('active-filter-btn');

function menuToggle() {
    const toggleMenu = document.querySelector('.menu-dropdown');
    toggleMenu.classList.toggle('.active')
}