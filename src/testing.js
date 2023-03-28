var pageNo = 1;

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
$(document).ready(function() {
    $("#welcome-section").click(function() {
        console.log("here");
        countPage();
        $(".hifish, .enter, .auto-type").fadeOut(function() {
            $("#navbar").fadeIn(function(){
                $('#introduction').css('display', 'flex').show().animate({
                    width: '100%',
                    opacity: 0.9
                }, 1000);
                $(" #projects, #contacts, #myInfo").fadeIn();
                
            })
        })
    })

    $("#page1btn").click(function() {
        $("#page1btn, #page2btn").fadeOut();
        $(".intro" + pageNo).css('transform', 'translateX(-20px)').fadeOut();
        $(this).prop('disabled',true);
         pageNo -= 1;
         setTimeout(function() {
            $(".intro" + pageNo).fadeIn().css('display', 'flex').show();
            $("#page1btn, #page2btn").fadeIn().css('cursor', 'not-allowed');
            countPage();
        }, 800);
        $(".intro" + (pageNo + 2)).css('transform', 'translateX(20px)') //little bug when cycle 1 is fine, but from cycle 2 start bugging
    });


    $("#page2btn").click(function() {
        $("#page1btn, #page2btn").fadeOut();
        $(".intro" + pageNo).css('transform', 'translateX(20px)').fadeOut();
        $(this).prop('disabled',true);
         pageNo += 1;
         setTimeout(function() {
            $(".intro" + pageNo).fadeIn().css('display', 'flex').show();
            $("#page1btn, #page2btn").fadeIn().css('cursor', 'not-allowed');
            countPage();
        }, 800);
        $(".intro" + (pageNo - 2)).css('transform', 'translateX(-20px)') //little bug when cycle 1 is fine, but from cycle 2 start bugging
    });
  });

  $(window).scroll(function() {
    var popupVisible = false;
    var scroll = $(window).scrollTop();
    var contentHeight = $('#projects').height();
    var popupHeight = $('#front-end-skill').height();
    var triggerPoint = contentHeight - popupHeight - 200; // change this value to adjust the trigger point
  
    if (scroll > triggerPoint && !popupVisible) {
        $("#front-end-skill, #back-end-skill, #other-skill").slideDown().fadeIn();
        popupVisible = true;
    } else if(scroll <= triggerPoint && popupVisible){
        $("#front-end-skill, #back-end-skill, #other-skill").slideUp().fadeOut();
        popupVisible = false;
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