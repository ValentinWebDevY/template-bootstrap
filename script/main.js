

// test splide
document.addEventListener( 'DOMContentLoaded', function() {
    // new splide
    const splide = new Splide( '.splide', {
        pagination: false,
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows : false,
        pauseOnHover: false,
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    } );

    splide.mount(window.splide.Extensions);

    // mount splide with extension for auto scroll
    // splide.mount(window.splide.Extension);
} );