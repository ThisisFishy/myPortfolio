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
        $("#page1btn, #page2btn").fadeOut();
        $(".intro" + pageNo).css('transform', 'translateX(-20px)').fadeOut();
        $("#bg").attr("src", "images/designedpropic"+ pageNo +".png").fadeOut();
        $(this).prop('disabled',true);
         pageNo -= 1;
         setTimeout(function() {
            $(".intro" + pageNo)
                .fadeIn()
                .css('display', 'flex')
                .show();
            $("#page1btn, #page2btn")
                .fadeIn()
                .css('cursor', 'not-allowed');
            $("#bg")
                .attr("src", "images/designedpropic"+ pageNo +".png")
                .fadeIn();
            countPage();
        }, 1000);
        $(".intro" + (pageNo + 2)).css('transform', 'translateX(20px)') 
    });


    $("#page2btn").click(function() {
        $("#page1btn, #page2btn").fadeOut();
        $(".intro" + pageNo)
            .css('transform', 'translateX(20px)')
            .fadeOut();
        $("#bg")
            .attr("src", "images/designedpropic"+ pageNo +".png")
            .fadeOut();
        $(this).prop('disabled',true);
         pageNo += 1;
         setTimeout(function() {
            $(".intro" + pageNo)
                .fadeIn()
                .css('display', 'flex')
                .show();
            $("#page1btn, #page2btn")
                .fadeIn()
                .css('cursor', 'not-allowed');
            $("#bg")
                .attr("src", "images/designedpropic"+ pageNo +".png")
                .fadeIn();
            countPage();
        }, 800);
        $(".intro" + (pageNo - 2)).css('transform', 'translateX(-20px)')
    });
  });

  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var contentHeight = $('#projects').height();
    var popupHeight = $('#front-end-skill').height();
    var triggerPoint = contentHeight - popupHeight - 400;
  
    if (scroll > triggerPoint && $(window).width() > 450) {
        $("#front-end-skill, #back-end-skill, #other-skill").slideDown().fadeIn();
    }

    if (scroll > 200 && $(window).width() < 500) {
        $("#front-end-skill").slideDown().fadeIn();
    }

    if (scroll > 500 && $(window).width() < 500) {
        $("#back-end-skill").slideDown().fadeIn();
    }

    if (scroll > 750 && $(window).width() < 500) {
        $("#other-skill").slideDown().fadeIn();
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
  })