function initListeners() {
    // Hamburger Menu Listener
    $(".hamburger").on("click", (e) => {
        console.log("clicked");
        $(".links").toggleClass("mobileLinks");
        $(".links").toggleClass("hide");
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
    changeRoute();
    }
    
    $(document).ready(function () {
    initURLListener();
    });
}
 
$(document).ready(function () {
initListeners();
});