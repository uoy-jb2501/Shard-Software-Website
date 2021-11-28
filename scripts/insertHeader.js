// Load headernav.html file then insert it into document using 'headernav' as a placeholder
$.get("includes/headernav.html", function(include){
    // use headernav as a placeholder to insert html
    $(include).insertBefore("#headernav")
    // remove placeholder
    $("#headernav").remove()
    // remove script for tidiness
    $("#headernav-loader").remove()
});