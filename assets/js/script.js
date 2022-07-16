/* start slick carousel initialization  */

$(document).ready(function() {





    $('.articles_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.prev_slide',
        nextArrow: '.next_slide',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }

            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false

                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false

                }
            }

        ]

    });
    $(".select_container i").click(function() {
        $(".select_container select").trigger();


    });


    $('.carousel').carousel({
        interval: 5000,
        pause: "false"
    });
    
            //start  calender
            var date_input = $('input[name="date"]'); //our date input has the name "date"
            var last_date_input = $('input[name="last_date"]'); //our date input has the name "date"

    
            var options = {
                format: 'mm/dd/yyyy',
                container: ".calendar",
                todayHighlight: true,
                autoclose: true,
                clearBtn: true,
                orientation: ".top right"

            };
            var last_options = {
                format: 'mm/dd/yyyy',
                container: ".last_calendar",
                todayHighlight: true,
                autoclose: true,
                clearBtn: true,
                orientation: ".top right"

            };
            date_input.datepicker(options);
            last_date_input.datepicker(last_options);

});