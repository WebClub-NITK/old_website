$(function(){

    //Load header and footer
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    
    // team.json variable names
    var fieldNames = {
        name        : "Name",
        email       : "Email Address",
        github      : "Github",
        linkedin    : "Linkedin",
        image       :"Image",
	    post        :"Post",
	    description :"Description"
    }
    var jsonVariables = [
        post_bearers,
        btech_final_years,
        btech_third_years,
        btech_second_years,
        mca_second_years,
        mca_first_years,
        alumni_2k17,
        alumni_2k16,
        alumni_2k15,
    ];
    var jsonVariableStrings = [
        'post_bearers',
        'btech_final_years',
        'btech_third_years',
        'btech_second_years',
        'mca_second_years',
        'mca_first_years',
        'alumni_2k17',
        'alumni_2k16',
        'alumni_2k15',
    ];
    var titles =[
        'Post bearers',
        'Final years',
        'Third years',
        'Second years',
        'MCA second years',
        'MCA first years',
        'Alumni 2k17',
        'Alumni 2k16',
        'Alumni 2k15'
    ];


    //Profile Block
    var block = function(href,type){
        return $('<a></a>',{
            'class':type+' social',
            'href':href,
            'title':href,
            'target':'_blank',
            'html':$('<i></i>',{
                'class':'fa fa-lg fa-'+type,
            }),
        });                
    }

    //Member Card DOM
    var makeCard = function(person){
       
        var $inner = $('<div></div>',{
            'class': 'card-header custom-card-header',
            'html': person[fieldNames.name] });
        var $middle = $('<div></div>',{
            'class': 'card custom-card-name',
            'html': $inner });
        var $card= $('<div></div>',{
            'class': 'col-md-4 col-lg-4 col-sm-6 custom-card',
            'html': $middle });

        /*<div class='caption'>
                    <p class='caption-content'>    
                        <a href="mailto:pvgupta24@gmail.com" target="_blank" class="envelope">
                            <i class="fa fa-envelope fa-lg"></i></a>
                            &ensp;
                        <a href="" class="facebook" target="_blank">
                            <i class="fa fa-linkedin-square fa-lg"></i></a>
                            &ensp;
                        <a href="https://github.com/pvgupta24" target="_blank" class="github">
                        <i class="fa fa-github-square fa-lg"></i></a>       
                </p>
            </div> 
        */
        //Overlay Profile Card
        var profile = function(person){
            
            return $('<p></p>',{'class':'caption-content'})
                        
                    .append(block(person[fieldNames['github']],'github'))
                        .append($('<span></span>',{'html':'&emsp;'}))
                
                    .append(block('mailto:'+person[fieldNames['email']],'envelope'))
                        .append($('<span></span>',{'html':'&emsp;'}))

                    .append(block(person[fieldNames['linkedin']],'linkedin'))
                        .append($('<span></span>',{'html':'&emsp;'}));
        };

        var $caption = $('<div></div>',{
            'class':'caption',
            'html':profile(person),
        });

        return $card.append($caption);
    };

    var fillTabs = function(start,end,x){
        for(var i=start; i<=end; ++i){
            var $paneInner =$('<div></div>',{
                'class': 'row text-capitalize text-xs-center',
                'id': jsonVariableStrings[i],
            });
    
            $('<div></div>',{
                'class': 'tab-pane fade',
                'id': 'tab'+i,
                'role': 'tabpanel',
                'html': $paneInner,
            }).appendTo('#tab-panes'+x);
            
            $('#tab'+i).prepend('<br>');
    
    
            var $navInner =$('<a></a>',{
                'class': 'nav-link custom-nav',
                'data-toggle':'tab',
                'id':'navTab'+i,
                'href': '#tab'+i,
                'role': 'tab',
                'html': titles[i],
            });
    
            $('<li></li>',{
                'class': 'nav-item',
                'html': $navInner,
            }).appendTo('#tab-list'+x);
    
            
            $.each(jsonVariables[i],function(index, person){
                makeCard(person).appendTo('#'+jsonVariableStrings[i]);
            });
        }
    }
    //1 to 5 current members
    fillTabs(1,5,1); 
    //6 to 8 alumni members
    fillTabs(6,8,2); 
   
    
    $('#tab1').addClass('in active');
    $('#navTab1').addClass('active');
    $('#tab6').addClass('in active');
    $('#navTab6').addClass('active');

    var makePost = function(person){
        //Update to Jquery DOM
       /* return $('<div></div>',{
            'class':'col-md-4 col-sm-4 col-xs-12'
            })
            .append($('<div></div>',{
                'class':'row section-success text-xs-center'
            }).append('<div></div>',{
                    'class':'col-md-12 post-image',
                    'html':$('<img/>',{
                        'src':person[fieldNames['image']],
                    }),
                })
            );*/

        return '<div class="col-md-4 col-sm-4 col-xs-12">\
        <div class="row section-success ourTeam-box text-xs-center">\
            <div class="col-md-12 post-image">\
                <img src="'+person[fieldNames['image']]+'">\
            </div>\
            <div class="col-md-12 post-content">\
                    <p>'+person[fieldNames['name']]+'</p><br><h1>'+person[fieldNames['post']]+'</h1><br>\
                </div>\
            <div class="col-md-12 post-description"><p>'+person[fieldNames['description']]+'</p></div>\
            <div class="col-md-12">\
                <a class="github social" target="_blank" href="'+person[fieldNames['github']]+'" title="'+person[fieldNames['github']]+'">\
                <i class="fa fa-lg fa-github"></i>&ensp;</a>\
                <a class="envelope social" target="_blank" href="mailto:'+person[fieldNames['email']]+'" title="'+person[fieldNames['email']]+'">\
                <i class="fa fa-lg fa-envelope"></i>&ensp;</a>\
                <a class="linkedin social"  target="_blank" href="'+person[fieldNames['linkedin']]+'" title="'+person[fieldNames['linkedin']]+'">\
                <i class="fa fa-lg fa-linkedin"></i></a>\
            </div></div></div>';
    };
    $.each(jsonVariables[0],function(index,person){
        $('#post-group').append(makePost(person));
    });

});


