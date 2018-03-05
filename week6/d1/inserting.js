$(function() {
    
    var arrayOfImages = ['http://via.placeholder.com/250x150/#33333','http://via.placeholder.com/350x350', 'http://via.placeholder.com/200x150','http://via.placeholder.com/350x450/#33333','http://via.placeholder.com/350x150/e3d5e3', 'http://via.placeholder.com/350x450/8d2424'];
    
    
    for(var i = 0; i < arrayOfImages.length; i++) {
        var image = $('<img>');
        image.attr('src',arrayOfImages[i]);
        $('body').append(image);
    }
    $('img').css({'float': 'left', 'border': '1px solid black'});

    var heading = $('<h1>Gallery heading</h1>');
    $('body').prepend(heading);

    $('img').each(function(index, element) {
        var wdth = 250 * Math.random() + 100;
        $(element).css('width', wdth + 'px');
        if(wdth > 200){
            $(element).css("display", "none");
           // $(element).hide();
            
        }
    });

});


