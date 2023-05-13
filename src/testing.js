var pageNo = 1;

const updatePageButtons = () => {
    let display1 = 'flex';
    let display2 = 'flex';

    switch(pageNo) {
        case 1:
            display1 = 'none';
            break;
        case 3:
            display2 = 'none';
            break;
    }

    console.log(pageNo);
    $("#page1btn, #page2btn").css('display', display1).prop('disabled',false).css('cursor','pointer');
    $("#page2btn").css('display', display2);
};

const animatePage = (pageIncrement, fadeOutDelay, fadeInDelay) => {
    $("#page1btn, #page2btn").prop('disabled', true).fadeOut();
    $("#intro" + pageNo).css('transform', 'translateX(' + (-pageIncrement * 10) + 'px)').fadeOut();
    $("#introduction").css('background-image', 'url("/images/designedpropic' + pageNo + '.png"').fadeOut();

    pageNo += pageIncrement;

    setTimeout(function() {
      $("#intro" + pageNo).fadeIn().css({
        'display': 'flex',
        'cursor': 'not-allowed'
      });
      $("#page1btn, #page2btn").fadeIn();
      $("#introduction").css('background-image', 'url("/images/designedpropic' + pageNo + '.png"').fadeIn();
      updatePageButtons();
    }, fadeInDelay);

    $("#intro" + (pageNo - (2 * pageIncrement))).css('transform', 'translateX(' + (pageIncrement * 10) + 'px)');
};

const toggleSkill = (skill) => {
    const element = $("#" + skill + "-skill");
    if (element.is(":visible")) {
        element.slideUp().fadeOut();
    } else {
        element.slideDown().fadeIn();
    }
};

$(window).on('beforeunload', function() {
    $('html, body').scrollTop(0);
});

$(document).ready(function() {
    if ($("#welcome-section").css("display") === "none") {
        updatePageButtons();
        $(".hifish, .enter, .auto-type").fadeOut(function() {
            $("#navbar").fadeIn(function(){
                $(" #projects, #contacts, #myInfo").fadeIn();
                $("#contacts").css("display", "flex");
                
            });
            $('#introduction').css({
                    display: "flex",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 1000).css('transform', 'translateY(-31px)');
        });
    }

    if($(window).width() < 450){
        $("#introduction, #projects, #contacts").fadeOut(0);
        $("#project1").fadeOut().css('transform', 'translateX(-200px)');
        $("#project2").fadeOut().css('transform', 'translateX(200px)');
    }

    $("#welcome-section").click(function() {
        updatePageButtons();
        $(".hifish, .enter, .auto-type").fadeOut(function() {
            $("#navbar").fadeIn(function(){
                $('#introduction')
                    .css('display', 'flex')
                    .css('width', '0')
                    .animate({width: '100%'}, 1000)
                    .fadeIn();
                $(" #projects, #contacts, #myInfo").fadeIn();
                $("#contacts").css("display", "flex");
            });
        });
    });

    $("#page1btn").click(function() {
        animatePage(-1, 1000, 1000);
    });

    $("#page2btn").click(function() {
        animatePage(1, 800, 800);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var contentHeight = $('#projects').height();
        var popupHeight = $('#front-end-skill').height();
        var triggerPoint = contentHeight - popupHeight - 300;

        if (scroll > triggerPoint && $(window).width() > 450) {
            $("#front-end-skill, #back-end-skill, #other-skill").slideDown().fadeIn();
        }

        if (scroll > 400 && $(window).width() < 450) {
            $("#front-end-skill").slideDown().fadeIn();
        }

        if (scroll > 700 && $(window).width() < 450) {
            $("#back-end-skill").slideDown().fadeIn();
        }

        if (scroll > 950 && $(window).width() < 450) {
            $("#other-skill").slideDown().fadeIn();
        }

        if(scroll > 1100 && $(window).width() < 450){
            $("#project1").fadeIn(1500).css('transform', 'translateX(0px)');
        }

        if(scroll > 1500 && $(window).width() < 450){
            $("#project2").fadeIn(1500).css('transform', 'translateX(0px)');
        }
    });

    $("#front-end").click(function() {
        toggleSkill("front-end");
    });

    $("#back-end").click(function() {
        toggleSkill("back-end");
    });

    $("#others").click(function() {
        toggleSkill("others");
    });

});

