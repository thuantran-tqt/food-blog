# HTML Tree of Homepage Food Blog
## Main layout
    body
        header
            section.top-bar
            nav.top-nav
        main
            section.hero
            section.recipes-list
            section.recipes-rating
            section.testimonials
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
        h1.hero__title (Healthy Recipes)
        h2 (from the best chefs)
        h2 (for all the foodies)

## SECTION - RECIPES-LIST
    section.recipes-list
        div.container
            div.row
                div.col
                    h2.recipes-list__title

            div.row
                div.col*6
                    div.recipes-list__item
                        img
                        div.recipes-list__info
                            h3  
                            div.recipes-list__rating                 

## SECTION - RECIPES-RATING
    section.recipes-rating
        div.container
            div.row
                div.col
                    ul.recipes-rating__top
                        li*5
                            div.recipes-rating__list-items
                                div.recipes-rating__image
                                    img
                                div.recipes-rating__info
                                    p.recipes-rating__date
                                    p.recipes-rating__name
                                    ul.recipes-rating__stars
                                        li*5
                                            i

                div.col
                    ul.recipes-rating__liked
                        li*5
                            div.recipes-rating__list-items
                                div.recipes-rating__image
                                    img
                                div.recipes-rating__info
                                    p.recipes-rating__date
                                    h3.recipes-rating__name
                                    ul.recipes-rating__stars
                                        li*5
                                            i

                div.col
                    div.recipes-rating__blog
                        div.recipes-rating__blog__image
                            img
                        div.recipes-rating__content
                            h3.recipes-rating__title
                            p.recipes-rating__author
                            p.recipes-rating__description
                            p.recipes-rating__comments
                            a.recipes-rating__icon
                                i

## SECTION - TESTIMONIALS
    section.testimonials
        div.container
            div.row
                div.col
                    div.testimonials__image
                        img
                    div.testimonials__content
                        p.testimonials__date
                        h3.testimonials__title
                        ul.testimonials__rating
                            li*5
                                i
                        div.testimonials__author
                            img.testimonials__avatar
                            p.testimonials__name

                div.col
                    div.testimonials__image
                        img
                    div.testimonials__content
                        p.testimonials__date
                        h3.testimonials__title
                        ul.testimonial__rating
                            li*5
                                i
                        div.testimonials__author
                            img.testimonial__avatar
                            p.testimonials__name
                                                    

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