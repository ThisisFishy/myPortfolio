var pageNo = 1;
var popupVisible = false;
const countPage = () =>{
    switch(pageNo){
        case 1:
            console.log("1")
            $("#page1btn").css('display', 'none')
            $("#page2btn").css('display', 'flex')
            $("#page1btn").prop('disabled',false).css('cursor','pointer')
            $("#page2btn").prop('disabled',false).css('cursor','pointer')
            break;
        case 2:
            console.log("2")
            $("#page1btn").css('display', 'flex')
            $("#page2btn").css('display', 'flex')
            $("#page1btn").prop('disabled',false).css('cursor','pointer')
            $("#page2btn").prop('disabled',false).css('cursor','pointer')
            break;
        case 3:
            console.log("3")
            $("#page1btn").css('display', 'flex')
            $("#page2btn").css('display', 'none')
            $("#page1btn").prop('disabled',false).css('cursor','pointer')
            $("#page2btn").prop('disabled',false).css('cursor','pointer')
            break;
        
    }
}

$(window).on('beforeunload', function() {
    $('html, body').scrollTop(0);
});
  
$(document).ready(function() {
    if ($("#welcome-section").css("display") === "none") {
        countPage();
        $(".hifish, .enter, .auto-type").fadeOut(function() {
            $("#navbar").fadeIn(function(){
                $(" #projects, #contacts, #myInfo").fadeIn();
                $("#contacts").css("display", "flex");
                
            })
            $('#introduction')
                .css({
                    display: "flex",
                    opacity: 0
                })
                .animate({
                    opacity: 1
                }, 1000)
                .css('transform', 'translateY(-31px)')
        })
    }

    if($(window).width() < 450){
        $("#introduction, #projects, #contacts").fadeOut(0);
        $("#project1").fadeOut()
        .css('transform', 'translateX(-200px)')

        $("#project2").fadeOut()
        .css('transform', 'translateX(200px)')
    }

    $("#welcome-section").click(function() {
        console.log("here");
        countPage();
        $(".hifish, .enter, .auto-type").fadeOut(function() {
            $("#navbar").fadeIn(function(){
                $('#introduction')
                    .css('display', 'flex')
                    .css('width', '0')
                    .animate({width: '100%'}, 1000)
                    .fadeIn();
                $(" #projects, #contacts, #myInfo").fadeIn();
                $("#contacts").css("display", "flex");
                
            })
        })
    })

    $("#page1btn").click(function() {
        $(this).prop('disabled', true);
        $("#page1btn, #page2btn").fadeOut();
        $("#intro" + pageNo).css('transform', 'translateX(-10px)').fadeOut();
        $("#introduction")
            .css('background-image', 'url("/images/designedpropic'+ pageNo + '.png"')
            .fadeOut();
        pageNo -= 1;
        setTimeout(function() {
            $("#intro" + pageNo)
                .fadeIn()
                .css('display', 'flex')
                .show();
            $("#page1btn, #page2btn")
                .fadeIn()
                .css('cursor', 'not-allowed');
            $("#introduction")
                .css('background-image', 'url("/images/designedpropic'+ pageNo + '.png"')
                .fadeIn();
            countPage();
        }, 1000);
        $("#intro" + (pageNo + 2)).css('transform', 'translateX(10px)'); 
    });
    
    $("#page2btn").click(function() {
        $(this).prop('disabled', true);
        $("#page1btn, #page2btn").fadeOut();
        $("#intro" + pageNo)
            .css('transform', 'translateX(10px)')
            .fadeOut();
        $("#introduction")
            .css('background-image', 'url("/images/designedpropic'+ pageNo + '.png"')
            .fadeOut();
        pageNo += 1;
        setTimeout(function() {
            $("#intro" + pageNo)
                .fadeIn()
                .css('display', 'flex')
                .show();
            $("#page1btn, #page2btn")
                .fadeIn()
                .css('cursor', 'not-allowed');
            $("#introduction")
                .css('background-image', 'url("/images/designedpropic'+ pageNo + '.png"')
                .fadeIn();
            countPage();
        }, 800);
        $("#intro" + (pageNo - 2)).css('transform', 'translateX(-10px)');
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
            $("#project1")
            .fadeIn(1500)
            .css('transform', 'translateX(0px)');
        }

        if(scroll > 1500 && $(window).width() < 450){
            $("#project2")
            .fadeIn(1500)
            .css('transform', 'translateX(0px)');
        }
    });
  


  $("#front-end").click(function() {
    if ($("#front-end-skill").is(":visible")){
        $("#front-end-skill").slideUp().fadeOut();
    } else {
        $("#front-end-skill").slideDown().fadeIn();
    }    
  });

  $("#back-end").click(function() {
    if ($("#back-end-skill").is(":visible")){
        $("#back-end-skill").slideUp().fadeOut();
    } else {
        $("#back-end-skill").slideDown().fadeIn();
    }    
  });


  $("#others").click(function() {
    if ($("#other-skill").is(":visible")){
        $("#other-skill").slideUp().fadeOut();
    } else {
        $("#other-skill").slideDown().fadeIn();
    }    
  });

});