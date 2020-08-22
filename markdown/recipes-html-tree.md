# HTML Tree of Recipes Food Blog
## Main layout
    body
        header
            section.top-bar
            nav.top-nav
        main
            section.hero
            section.recipes-list
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

## SECTION - RECIPES-LIST
    section.recipes-list
        div.container
            div.row
                div.col
                    h2.recipes-list__title

            div.row
                div.col*12
                    div.recipes-list__item
                        img
                        div.recipes-list__info
                            h3  
                            div.recipes-list__rating

            div.recipes-list__pagination
                ul
                    li
                        a                  

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