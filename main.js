$(document).ready(function(){
    for(var review of REVIEWS){
        var div = $('<div>')
        div.addClass("review")
        var name = $("<p>")
        name.addClass("name")
        name.text(review["name"])
        var comment = $('<p>')
        comment.addClass("comment")
        comment.text(review["comment"])
        div.append(name)
        div.append(comment)
        $('#reviews-container').append(div)
    }
});