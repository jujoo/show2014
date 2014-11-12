// $(function(){
// 	// Instantiate MixItUp:
// 	$('#Container').mixItUp();

// 	$(".mix" ).children('div').css( "opacity", 0);
// 	$( ".mix" )
//       .mouseenter(function() {
//         $( this ).children('div').stop().animate({ opacity: 1 }, 500);
//     })
//     .mouseleave(function() {
//         $( this ).children('div').stop().animate({ opacity: 0 }, 500);
//     });
// });


$(function(){

    
    // json
    var WORKS = $("#WORKS"); $.getJSON("http://codepen.io/jujoo/pen/emOxRX.js", function(json) {
    console.log(json);
      
        $.each(json.result.V, function(i, item) {
            var itemLi = $("<li/>", {
                "class": "mix VISUAL",
                "data-name": item.workTitle,
                "data-part": "V",
                "data-id": item.WORKID
            });
            //var thumbSrc = "data/img/V/" + item.WORKID + ".jpg";

            $("<div/>", {
                "class": "active",
                html: "<span class=title>" + item.workTitle + "</span><span class=desc>" + item.workDesc + "</span><div class='category V'></div>"
            }).appendTo(itemLi);
            $("<div/>", { "class": "cover" }).appendTo(itemLi);
            //$("<img/>", { "src": thumbSrc }).appendTo(itemLi);

            WORKS.append(itemLi);
          

        });
        // mixitup init
        WORKS.mixItUp();
    });

});