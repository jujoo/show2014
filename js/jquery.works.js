$(function(){

    
    // json
    var WORKS = $("#WORKS"); $.getJSON("data/WORKS.json", function(json) {
    console.log(json);
        
        $.each(json.result.V, function(i, item) {
            var itemLi = $("<li/>", {
                "class": "mix VISUAL",
                "data-name": item.workTitle,
                "data-part": "V",
                "data-id": item.WORKID
            });
            // var thumbSrc = "data/img/V/" + item.WORKID + ".jpg";

            $("<div/>", {
                "class": "active",
                html: "<span class=category>" + item.workCategory + "</span><div class='titleline'></div><span class=title>" + item.workTitle + "</span><span class=desc>" + item.workDesc + "</span>"
            }).appendTo(itemLi);
            $("<div/>", { "class": "cover" }).appendTo(itemLi);
            // $("<img/>", { "src": thumbSrc }).appendTo(itemLi);

            WORKS.append(itemLi);
        });

        $.each(json.result.P, function(i, item) {
            var itemLi = $("<li/>", {
                "class": "mix PRODUCT",
                "data-name": item.workTitle,
                "data-part": "P",
                "data-id": item.WORKID
            });
            // var thumbSrc = "data/img/V/" + item.WORKID + ".jpg";

            $("<div/>", {
                "class": "active",
                html: "<span class=category>" + item.workCategory + "</span><div class='titleline'></div><span class=title>" + item.workTitle + "</span><span class=desc>" + item.workDesc + "</span>"
            }).appendTo(itemLi);
            $("<div/>", { "class": "cover" }).appendTo(itemLi);
            // $("<img/>", { "src": thumbSrc }).appendTo(itemLi);

            WORKS.append(itemLi);
        });

        $.each(json.result.D, function(i, item) {
            var itemLi = $("<li/>", {
                "class": "mix DIGITAL",
                "data-name": item.workTitle,
                "data-part": "D",
                "data-id": item.WORKID
            });
            // var thumbSrc = "data/img/V/" + item.WORKID + ".jpg";

            $("<div/>", {
                "class": "active",
                html: "<span class=category>" + item.workCategory + "</span><div class='titleline'></div><span class=title>" + item.workTitle + "</span><span class=desc>" + item.workDesc + "</span>"
            }).appendTo(itemLi);
            $("<div/>", { "class": "cover" }).appendTo(itemLi);
            // $("<img/>", { "src": thumbSrc }).appendTo(itemLi);

            WORKS.append(itemLi);
        });

        // mixitup init
        WORKS.mixItUp();
        
        //마우스 오버
        $(".mix" ).children('div').css( "opacity", 0);
        $( ".mix" )
            .mouseenter(function() {
                $( this ).children('div').stop().animate({ opacity: 1 }, 200);
            })
            .mouseleave(function() {
                $( this ).children('div').stop().animate({ opacity: 0 }, 200);
            });
        

    });

});