$(function(){
    
    //Load header and footer
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // team.json variable names
    var fieldNames = {
        name        :"Name",
        email       :"Email Address",
        github      :"Github",
        linkedin    :"Linkedin",
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
        'Post Bearers',
        'Final Years',
        'Third Years',
        'Second Years',
        'MCA II Years',
        'MCA I Years',
        'Alumni 2k17',
        'Alumni 2k16',
        'Alumni 2k15'
    ];

    //Cache frequent DOM
    var $monthTabs = $('#monthsTabs');
    var $contests = $('#contests');



    //Profile Block
    var block = function(href,type){
        return $('<a></a>',{
            'class':type+' social',
            'href':href,
            'title':href,
            'target':'_blank',
            'html':$('<i></i>',{
                'class':'fa fa-'+type,
            }),
        });                
    }
    var profile = function(person){
            
        return $('<span></span>',{'class':'profileButtons'})
                    
                .append(block(person[fieldNames['github']],'github'))
                    .append($('<span></span>',{'html':'&emsp;'}))
            
                .append(block('mailto:'+person[fieldNames['email']],'envelope'))
                    .append($('<span></span>',{'html':'&emsp;'}))

                .append(block(person[fieldNames['linkedin']],'linkedin'))
                    .append($('<span></span>',{'html':'&emsp;'}));
    };
    var $makeCard = function(person,i,j){ 
        return $('<div></div>',{'class':'contestLink','id':'contestLink'+i+j})
                    .append($('<div></div>',{'class':'contestsSpace','id':'contestSpace'+i+j})
                            .append($('<div></div>',{'class':'contestTitle','id':'contestTitle'+i+j,'html':person[fieldNames['name']]})
                                .append(profile(person))
                            )
                    );            
        };

    $.each(titles,function(index,title){
        
        $monthTabs.append($('<li></li>',
            {
                'html':title,
                'class':'tab',
                'id':'tab'+index,
                'data-target':'cardGroup'+index,
            }));

        $contests.append($('<div></div>',{'id':'cardGroup'+index,'class':'cardGroup'}));

        $.each(jsonVariables[index],function(personId,person){
                $('#cardGroup'+index).append($makeCard(person,index,personId));
            });
    });
    
    $.each(jsonVariables[0],function(id,person){
        var $imgBox = $('<span></span>',{
                        'class':'imgBox',
                        }).append($('<img/>',{
                                'src':person[fieldNames['image']],
                                'class':'img'
                            }));
        var $postBox = $('<div></div>',{
                        'class':'details',
                        'html':person[fieldNames['post']],                
                        });
        $('#contestSpace0'+id).prepend($imgBox);
        $('#contestSpace0'+id).append($postBox);
        
    });


    //Default State
    var reset = function(){
        $('#tab0').addClass('active');
        $('.cardGroup').hide();    
        $('#cardGroup0').show();
    };
    reset();

    $('.tab').click(function(){
        var tabId = '#'+$(this).attr('id');
        var groupId = '#'+$(this).attr('data-target');

        $('.active').removeClass('active');
        $(tabId).addClass('active');

        var $imgBox =$('.imgBox');
        if(tabId=='#tab0')
            $imgBox.fadeIn(1200);            
        else  
            $imgBox.fadeOut(200);

        $('.cardGroup:not('+groupId+')').hide();//.hide();
        $(groupId).slideDown(500);//.show();    
        
        var $imgBox =$('.imgBox');
        if(tabId=='#tab0')
            $imgBox.show(1800);            
        else  
            $imgBox.fadeOut(200);

    });    
});