function scrollTo(component, timer) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(component).offset().top
    }, timer);
}