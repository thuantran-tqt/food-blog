# HTML Tree of About Food Blog
<http://food-blog.surge.sh/about.html>
## MAIN LAYOUT (Từ trên xuống dưới để phân tích có bao nhiêu section)
    body
        header
            section.top-bar
            nav
        main
            section.banner
            section.about
            section.facts
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
        h1.hero__title

## SECTION - ABOUT
    section.about
        div.container
            div.row
                div.col
                    div.about__content
                        h2.about__title
                        p.about__description
                        button
                div.col 
                    img.about__thumbnail

## SECTION - FACTS
    section.facts
        div.container
            ul
                li*4 
                    div.fact-item
                        img.fact-item__image
                        h2.fact-item__big-number 
                        p.fact-item__name

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


                                
