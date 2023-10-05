









function initListeners() {
    // Hamburger Menu Listener
    $(".hamburger").on("click", (e) => {
        console.log("clicked");
        $(".links").toggleClass("mobileLinks");
        $(".links").toggleClass("hide");
    })

    $(window).on("resize", (e) => {
        console.log(window.innerWidth);
        if (window.innerWidth > 768) {
            $(".links").removeClass("mobileLinks");
            $(".links").addClass("hide");
        }
    })


    function changeRoute() {
    let hashTag = window.location.hash;
     let pageID = hashTag.replace('#', '');
    //   console.log(hashTag + ' ' + pageID);
    
    if (pageID != '') {
    $.get(`pages/${pageID}.html`, function (data) {
     $('#app').html(data);
    });
    } else {
    $.get(`pages/home.html`, function (data) {
     $('#app').html(data);
    });
    }
    }
    
    function initURLListener() {
    $(window).on('hashchange', changeRoute);
    $(window).on('hashchange', e => {
        $(".links").removeClass("mobileLinks");
        $(".links").addClass("hide");
    });
    changeRoute();
    }
    
    $(document).ready(function () {
    initURLListener();
    });
}
 
$(document).ready(function () {
initListeners();
});