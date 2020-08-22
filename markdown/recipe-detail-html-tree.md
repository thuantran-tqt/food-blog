#   HTML Tree of Recipe Detail Food Blog
##  Main layout
    body
        main
            header
                section.top-bar
                section.top-nav
            main
                section.hero
                section.recipe-detail
            footer
                section.app-footer

##  SECTION - TOP BAR
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

##  SECTION - NAV
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

##  SECTION - HERO
    section.hero (background-image)

##  SECTION - RECIPE-DETAIL
    section.recipe-detail
        div.container
            div.row
                div.col
                    h1.recipe-detail__heading
                    p.recipe-detail__date
                    ul.recipe-detail__rating
                        li
                            i  
            div.row
                div.col
                    div.recipe-detail__box
                        h2.recipe-detail__title
                        div.recipe-datail__check-box
                            ul.recipe-detail__check-box-list
                                li
                                    div.recipe-detail__check-box-item
                                        input   (type="checkbox")
                                        span.recipe-detail__label
                div.col
                    ul.recipe-detail__content
                        li
                            div.recipe-detail__item
                                h2.recipe-detail__number
                                p.recipe-detail__description 


##  SECTION - FOOTER
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