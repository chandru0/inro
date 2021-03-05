/**
 * Created by tringapps-admin on 16/9/17.
 */
var $=function element(ref){return document.querySelector(ref);}

var assureAcademy;
assureAcademy = {
    windowHeight: window.innerHeight + "px",
    windowWidth: window.innerWidth + "px",
    contact: "contact",
    aboutUs:"aboutus",
    career:"career",
    course:"course",

    initialPageRender: function () {
        console.log(this.windowHeight);
        // $('.parent-container-blk').style.height=this.windowHeight;
        // $('.parent-container-blk').style.width=window.innerWidth+"px";
        // $('.hero-video-blk').style.height=window.innerHeight+"px";
        // $('.hero-video-blk').style.width=window.innerWidth+"px";

    },
    landingPageEvents: function () {
        $(".play-button").addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector('li[data-type="course"]').click();
           // this.coursePage(this.course);
            // $('.dummy-video-tag').classList.add("display-block");
            // //$('.dummy-video-tag').style.height=assureAcademy.windowHeight;
            // $('.dummy-video-tag').removeAttribute("pause");
            // $('.dummy-video-tag').play();
        },this);
        var elements = document.querySelectorAll(".nav ul li");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function (event) {
                event.preventDefault();
                if(event.target.classList.contains('heading-name')) {return false;}
                if($('.coming-soon')!=null){$('.coming-soon').remove();}//for temporrary
               // console.log(event.currentTarget);
                var target = event.currentTarget;
                this.pageShifiting(event);
                $('.parent-container-blk').classList.remove("hidden-blk");
                setTimeout(function () {
                    if (target.getAttribute("data-type") == this.contact || target.getAttribute("data-type") == this.aboutUs||
                        target.getAttribute("data-type") == this.career || target.getAttribute("data-type") == this.course  ) {
                            this.pageReRoute(target.getAttribute("data-type"))
                    }else{
                        $('.main-blk').insertAdjacentHTML('beforeend', '<div class="coming-soon">Coming Soon...</div>');
                        $('.coming-soon').style.top = (($('.main-blk').offsetHeight - $('.coming-soon').offsetHeight) / 2) - $('header').offsetHeight + "px";
                    }
                }.bind(this), 500);
            }.bind(this));
        }
        // var a = document.getElementsByClassName('nav');
        // a[0].classList.add('addanim');
        // var b = document.getElementsByClassName('left-nav');
        // b[0].classList.add('left');
        // var c = document.getElementsByClassName('right-nav');
        // c[0].classList.add('right');
        // var d = document.getElementsByClassName('heading');
        // d[0].classList.add('headopac');

    },
    pageShifiting: function (event) {
        if ($('.selected-page') != null) {
            var removePage = $('#' + $('.selected-page').getAttribute("data-type"));
            if (removePage != null) removePage.remove();
            $('.selected-page').removeAttribute("class");
        }
        event.currentTarget.setAttribute("class", "selected-page");
        $('header').classList.add('hide');
        $('.hero-video-blk').classList.add('display-none');
        $('.hero-container').classList.add('display-none');
        $('.nav-container').style.top = "0px";
        $('.nav-container').classList.add('addTop-Nav');
        $('.nav-container .first').classList.add('nav-left');
        $('.nav-container .third').classList.add('nav-right');
        $('.sec .heading').classList.add('heading-name');

    },
    contentResizeElements: function () {
        $('.parent-container-blk').style.height = window.innerHeight + "px";
        $('.parent-container-blk').style.width = window.innerWidth + "px";
        $('.hero-container').style.top = (($('.main-blk').offsetHeight - $('.hero-container').offsetHeight) / 2) - $('header').offsetHeight + "px";
        // this.resizeValue=function(ref){
        //     return (($('.main-blk').offsetHeight-$(ref).offsetHeight)/2)-$('header').offsetHeight+"px";
        // }

        // $('.hero-video-blk').style.height=window.innerHeight+"px";
        // $('.hero-video-blk').style.width=window.innerWidth+"px";
    },
    pageReRoute: function (type) {
        if (type == this.contact) {
            this.loadContactPage();
        }else if(type == this.aboutUs){
            this.aboutUsPage();
        }else if(type == this.career){
            this.carreerPage();
        }else if(type == this.course){
            this.coursePage();

        }


    },
    loadContactPage: function () {
        var locateHtml = "" +
            "<div id='contact' class='contact-container'>" +
            "<div class='map-container'><div id='map'></div></div>" +
            "<div class='contact-information-container'>" +
            "<div class='address-information'>" +
            "<div class='address-info-blk'>Address</div><div class='address-info-blk'>15/43, Dr.Alagappa Road</div>" +
            "<div class='address-info-end'>Purasawalkam, Chennai - 600 084.</div>" +
            "</div>" +
            "<div class='telephone-information'>" +
                "<div class='tel-info-blk'>TEL</div>" +
                "<div class='tel-info-blk'>75501 00848 / 90948 45424</div>" +
            "</div>" +
            "<div class='mail-information'>" +
                "<div class='mail-info-blk'>Contact</div>" +
                "<div class='mail-info-blk'>info@assureacademy.com</div>" +
            "</div>" +
            "<div class='share-information'>" +
                "<span><a href='https://twitter.com/assureacademy_1' target='blank' class='fa fa-twitter' aria-hidden='true'></a></span> " +
                "<span><a href='https://www.facebook.com/assureacademypvt.ltd' target='blank' class='fa fa-facebook' aria-hidden='true'></a ></span>" +
                "<span><a href='https://www.linkedin.com/in/assure-academy/' target='blank' class='fa fa-pinterest-p' aria-hidden='true'></a></span>" +
            "</div>" +
            "<div class='footer-logo'><a href='#' class='logo-image' title='assureacademy'>Assure Academy</a><div class='footer-copyrights'>Copyright © AssureAcademy. Allright Reserved</div></div>"
            "</div>" +
            "</div>"
        $('.main-blk').insertAdjacentHTML('beforeend', locateHtml);
        $('.parent-container-blk').classList.add("hidden-blk");
        $('#map').style.height = (window.innerHeight - $('header').offsetHeight) + "px";
        this.loadMap = (function () {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 13.0817151, lng: 80.25451550000002},
                zoom: 15,
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    }
                ]
            });
            var marker = new google.maps.Marker({
                position: {lat: 13.0817151, lng: 80.25451550000002},
                map: map,
                title: 'Assure Academy'
            });
        })(this);

    },
    aboutUsPage:function(){
        var aboutus='<div id="aboutus" class="aboutus-container">' +
                        '<div class="about-hero-container">' +
                            '<div class="abt-hero-text">OUR VALUES DRIVE US</div><h2 style="display:none">Assure Academy</h2>' +
                        '</div>' +
                        '<div class="abt-hero-content">' +
                            '<div class="about-row">' +
                                '<p><strong>Who</strong><br>' +
                                '<strong>We</strong><br>' +
                                '<strong>Are</strong></p>' +
                                '<p>Assure Academy Pvt Ltd is a social entrepreneurial venture started by Mrs. Sasikala inthe domain of skill development and training programs. From being a pilot programmeoffered for designing sector, today it is one of India’s largest multi disciplinary trainingacademy. Our prime goal is to give the highest level of training to students and makethem employment ready. We have started this academy with a positive attitude, highlevel of motivation and professionalism for the students to face success in their life inthis competitive world.</p>' +
                            '</div>' +
                            '<div class="about-row-second">' +
                                '<p><strong>Our</strong><br>' +
                                '<strong>Mission</strong><br>' +
                                '<strong></strong></p>' +
                                '<p>Assure Academy endeavors to be a professional, society oriented and progressivetraining body, offering flexible, tailored training and education solutions specificallydesigned to educate, inspire and motivate individuals and businesses helpingprofessionals to reach and achieve their goals and aspirations.</p>' +
                                '<p><strong>Our</strong><br>' +
                                '<strong>Vision</strong><br>' +
                                '<strong></strong></p>' +
                                '<p>Assure Academy thrives to provide quality education services across a spectrum ofIndividuals to achieve their goals with reliable experience & technology. To become asuccessful education provider of student’s choice for career commencement andprofessional development towards local and international communities.</p>' +
                            '<p>&nbsp;</p></div>'+
                    '</div>';
        $('.main-blk').insertAdjacentHTML('beforeend', aboutus);
    },
    carreerPage:function(){
        var carreer='<div id="career" ><div class="contact-banner-text"><h1 class="text-title">Contact Us</h1><p class="text-content contactustext">See how your business can benefit with Assure Academy, on your team!</p> </div> <div class="outerbox"> <form name="contactForm" class="contactForm" method="POST" action=""> <div class="group "> <input type="text" name="firstname" class="inp-con" required="" placeholder=" Name"> </div> <div class="group contact-group"> <div class="area-code"> <input type="text" name="phone" class="inp-con input-phone" required="" placeholder="Area Code"> </div> <div class="phone-number-contact"> <input type="text" name="phone" class="inp-con input-phone" required="" placeholder="Phone number"> </div> </div> <div class="group contact-group"> <input type="email" name="email" class="inp-con" required="" placeholder=" Email ID"> </div> <div class="group "> <textarea class="contact-textarea" placeholder="How can we help you?"></textarea> </div> <div class="job-description submitcontact"> <button type="submit" name="button" class="form-button contact">Submit</button> </div> </form> </div></div>';
        $('.main-blk').insertAdjacentHTML('beforeend', carreer);
    },
    coursePage:function(){
        var course='<div id="course">' +
                    '<main class="course-nav-container">' +
                        '<ul>' +
                            '<li style="background-image:url(assets/Aviation.jpg)"><a><strong><em><span>Aviation</span></em></strong><video src="assets/Aviation.mp4" loop="loop" muted="muted" preload="auto"></video></a></li>' +
                            '<li style="background-image:url(assets/Robotics.png)""><a><strong><em><span>Robotics</span></em></strong><video src="assets/roboV.mp4" loop="loop" muted="muted" preload="auto"></video></a></li>' +
                            '<li style="background-image:url(assets/Medical.jpg)""><a><strong><em><span>Medical</span></em></strong><video src="assets/Medical.mp4" loop="loop" muted="muted" preload="auto"></video></a></li>' +
                            '<li style="background-image:url(assets/CareerAssistance.png)""><a><strong><em><span>Career Assistance</span ></em></strong><video src="assets/carreerV.mp4" loop="loop" muted="muted" preload="auto"></video></a></li>' +
                            '<li style="background-image:url(assets/Skill.jpg)""><a><strong><em><span>Skill</span></em></strong><video src="assets/Skill.mp4" loop="loop" muted="muted" preload="auto"></video></a></li>' +
                            '<li style="background-image:url(assets/comingsoon.jpg)""><a><strong><em><span>Coming Soon</span></em></strong><video loop="loop" muted="muted" preload="auto"></video></a></li>' +
                        '</ul></main></div>';
        $('.main-blk').insertAdjacentHTML('beforeend', course);
        $('.parent-container-blk').classList.add("hidden-blk");
        $('.course-nav-container').style.height= (window.innerHeight - $('header').offsetHeight) + "px";
        document.querySelectorAll('.course-nav-container ul li a').forEach(function(value,index) {
            value.parentNode.addEventListener("mouseover",function(event){
                    value.querySelector("video").play();
            });
            value.parentNode.addEventListener("mouseout",function(event){
                    value.querySelector("video").pause();
            });
            value.style.height = (window.innerHeight - $('header').offsetHeight) + "px";
            value.querySelector("video").style.height = (window.innerHeight - $('header').offsetHeight) + "px";
            value.querySelector("video").style.width = (window.innerWidth) + "px";
        });

    }

};
$('body').onload=function(){
    $('circle').style.opacity=0;
    $('circle').style.display="none";
    $('.parent-container-blk').style.display="block";
    $('.parent-container-blk').style.opacity=1;
    assureAcademy.contentResizeElements();
    assureAcademy.landingPageEvents();

};
window.addEventListener("resize",function(event){
    console.log(window.innerHeight);
     assureAcademy.contentResizeElements();
})
