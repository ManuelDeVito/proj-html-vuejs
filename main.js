

var app = new Vue ({

    el: '#root',

    data: {

        logo_azienda_header: "img/logo-img-01.png",
        indice_menu: 0,
        menu: ['Home', 'Pages', 'Portfolio', 'Blog', 'Shop', 'Elements'],
        logo_menu_header: "svg/svg-1.png",
        logo_azienda_footer: "img/logo-img-01.png",
        testo_footer: "Sometimes doing something seemingly demanding turns out to be fan. Here's the proof - Bryson, new brand your portfolio.",
        icone_social: ['icon-social-instagram fa-instagram','icon-social-facebook fab fa-facebook-f','icon-social-twitter fab fa-twitter',
        'icon-social-pinterest fab fa-pinterest-p']


    },

    methods: {

        cambio_linea(indice) {

            return this.indice_menu = indice;
        }
    }

});
