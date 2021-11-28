$( document ).ready(function() {
    // Load headernav.html file then insert it into document
    $("header").load("includes/headernav.html", function(response, status, req) {
        if(status == "error") {
            $("header").text("Failed to load headernav file")
        }
    });

    // Load footer.html file then insert it into document
    $("footer").load("includes/footer.html", function(response, status, req) {
        if(status == "error") {
            $("footer").text("Failed to load footer file")
        }
    });

    $("#headerfooter-loader").remove()
});
