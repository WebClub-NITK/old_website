//console.log(projects);
    var i;
    var past_row=$('.row.past');
    var ongoing_row=$('.row.ongoing');
    ongoing_row.empty();
    past_row.empty();

    for(i in projects){
        console.log(projects[i].image_url);
        if(projects[i].status==="past")
            {console.log("hi");
                past_row.append('<div class="container py-3">\
                                <div class="card">\
                                    <div class="row ">\
                                        <div class="col-md-4 mobile">\
                                            <img src="'+ projects[i].image_url+'"  class="w-100">\
                                            <div class="bottom-left">'+ projects[i].title +'</div>\
                                        </div>\
                                        <div class="col-md-8 ">\
                                            <div class="card-block">\
                                                <h4 class="card-title">'+projects[i].title+'</h4>\
                                                <span class="label label-default">'+projects[i].tag+'</span>\
                                                <br><br>\
                                                <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                                                <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\
                                                <div class="card-footer1">\
                                                    <a href="'+ projects[i].github_link +'" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                        <div class="col-md-4 desktop">\
                                            <img src="'+ projects[i].image_url+'" class="w-100">\
                                            <div class="bottom-left">'+ projects[i].title +'</div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>');
            }
            if(projects[i].status==="ongoing")
                ongoing_row.append('<div class="container py-3">\
                                        <div class="card">\
                                            <div class="row ">\
                                                <div class="col-md-4 mobile">\
                                                    <img src="'+projects[i].image_url+'" class="w-100">\
                                                    <div class="bottom-left">'+projects[i].title+'</div>\
                                                </div>\
                                                <div class="col-md-8 ">\
                                                    <div class="card-block">\
                                                        <h4 class="card-title">'+projects[i].title+'</h4>\
                                                        <span class="label label-default">'+projects[i].tag+'</span>\
                                                        <br><br>\
                                                        <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                                                        <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\
                                                        <div class="card-footer1">\
                                                            <a href="'+ projects[i].github_link +'" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
                                                        </div>\
                                                    </div>\
                                                </div>\
                                                <div class="col-md-4 desktop">\
                                                    <img src="../images/img_avatar1.png" class="w-100">\
                                                    <div class="bottom-left">'+projects[i].title+'</div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>');
};