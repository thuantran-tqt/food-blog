# HTML Tree of Contact Food Blog
## Main layout
    body
        header
            section.top-bar
            nav.top-nav
        main
            section.hero
            section.contact
        footer
            section.app-footer

## SECTION - TOP BAR
    section.top-bar
        div.container
            div.row
                div.col
                    ul.top-bar__social-list
                        li*6
                            a
                                i
                div.col
                    div.top-bar__links
                        a (Register)
                        span (/)
                        a (Login)

## SECTION - NAV
    nav.top-nav
        div.container
            div.row
                div.col
                    img.top-nav__logo
                div.col
                    ul.top-nav__menu
                        li*5
                            a   
                div.col
                    div.top-nav__search
                        a
                            i

## SECTION - HERO
    section.hero (background-image)
        h1.hero__title (Contact)

## SECTION - CONTACT
    section.contact
        div.container
            div.row
                div.col
                    h2.contact__title
                    form.contact__form
                        input.contact__form-name
                        input.contact__form-email
                        input.contact__form-subject
                        textarea.contact__form-message
                        button.contact__form-btn
                div.col 
                    div.contact__logo
                        img

                    div.contact__info
                        ul.contact__info-list
                            li*3
                                h3
                                p
                                p
                        ul.contact__info-social
                            li*6
                                a
                                    i

## SECTION - FOOTER
    footer
        section.app-footer
            div.container
                div.row
                    div.col
                        div.app-footer__logo-wrapper
                            img.app-footer__logo
                        ul.app-footer__social__list
                            li*6
                                a
                                    i
                    div.col
                        ul.app-footer__menu
                            li*5
                                a
                        p (copyright)