$(document).ready(function() {
    // Hide elements initially
    $('.header').css('top', '-100px').show();
    $('.buttons a').css('opacity', '0');

    // Animate header sliding down
    $('.header').animate({ top: '0' }, 1000);

    // Animate buttons floating in
    $('.buttons a').each(function(index) {
        $(this).delay(1000 + (index * 500)).animate({ opacity: '1' }, 500);
    });

    // Toggle menu on smaller screens
    $('.menu-icon').click(function() {
        $('.menu-list').slideToggle();
        const icon = $(this).find('i');
        if (icon.hasClass('fa-bars')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $('.menu-list').show();
            $('.menu-icon i').removeClass('fa-times').addClass('fa-bars');
        } else {
            $('.menu-list').hide();
        }
    });

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.parallax').css({
            'transform': 'translateY(' + scrollTop * 0.5 + 'px)'
        });
    });

    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing
        once: true, // Animation occurs only once
    });

    // Dark Mode Toggle
    const themeToggle = $(".theme-toggle");
    const body = $("body");

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.addClass("dark-mode");
        themeToggle.html('<i class="fas fa-sun"></i>');
    }

    // Toggle dark mode on button click
    themeToggle.click(function() {
        body.toggleClass("dark-mode");

        if (body.hasClass("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.html('<i class="fas fa-sun"></i>');
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.html('<i class="fas fa-moon"></i>');
        }
    });

    $(".scroll-to").click(function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        let target = $(this).attr("href"); // Get target section ID
        $(target)[0].scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
