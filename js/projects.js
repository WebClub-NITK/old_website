    var colours=["#000","#66D9EF","#A6E22E","#FD971F","#fff","#F92672"];
    var i;
    var past_list=$('.carousel-indicators.past');
    var ongoing_list=$('.carousel-indicators.ongoing');

    var past_items=$('.carousel-inner.past');
    var ongoing_items=$('.carousel-inner.ongoing');
    ongoing_list.empty();
    past_list.empty();
    past_items.empty();
    ongoing_items.empty();

    var ongoing_projects_count=0;
    var past_projects_count=0;
    for(i in projects){
        var random = Math.floor((Math.random() * colours.length) + 1);

        if(projects[i].status==="past"){
            if(past_projects_count===0){
                past_list.append('<li data-target="#pastprojects" data-slide-to="0" class="active"></li>');

                past_items.append('<div class="item active">\
                                    <div class="container mypy py-3">\
                                        <div class="card" style="background-color:'+colours[ Math.floor((Math.random() * colours.length))]+'">\
                                          <div class="row ">\
                                            <div class="col-md-4 mobile">\
                                              <img src="../images/img_avatar1.png" class="w-100" style="border-radius: 10px;">\
                                              <div class="bottom-left">'+projects[i].title+'</div>\
                                            </div>\
                                            <div class="col-md-8 ">\
                                              <div class="card-block">\
                                                <h4 class="card-title">'+projects[i].title+'</h4>\
                                                <span class="label label-default">Open Source</span>\
                                                <br><br>\
                                                <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                                                <div class="card-footer1">\
                                                  <a href="https://github.com/salman-bhai" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
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
            }
            else{
                past_list.append('<li data-target="#pastprojects" data-slide-to="'+past_projects_count+'"></li>');

                past_items.append('<div class="item">\
                                      <div class="container mypy py-3">\
                                        <div class="card" style="background-color:'+colours[ Math.floor((Math.random() * colours.length))]+'">\
                                          <div class="row ">\
                                            <div class="col-md-4 mobile">\
                                              <img src="../images/img_avatar1.png" class="w-100" style="border-radius: 10px;">\
                                              <div class="bottom-left">'+projects[i].title+'</div>\
                                            </div>\
                                            <div class="col-md-8 ">\
                                              <div class="card-block">\
                                                <h4 class="card-title">'+projects[i].title+'</h4>\
                                                <span class="label label-default">Open Source</span>\
                                                <br><br>\
                                                <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                                                <div class="card-footer1">\
                                                  <a href="https://github.com/salman-bhai" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
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
            }
            past_projects_count++;
        }
        if(projects[i].status==="ongoing"){
            if(ongoing_projects_count===0){
                ongoing_list.append('<li data-target="#ongoingprojects" data-slide-to="0" class="active"></li>');

                ongoing_items.append('<div class="item active">\
                <div class="container mypy py-3">\
                  <div class="card" style="background-color:'+colours[ Math.floor((Math.random() * colours.length))]+'">\
                    <div class="row ">\
                      <div class="col-md-4 mobile">\
                        <img src="../images/img_avatar1.png" class="w-100" style="border-radius: 10px;">\
                        <div class="bottom-left">'+projects[i].title+'</div>\
                      </div>\
                      <div class="col-md-8 ">\
                        <div class="card-block">\
                          <h4 class="card-title">'+projects[i].title+'</h4>\
                          <span class="label label-default">Open Source</span>\
                          <br><br>\
                          <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                          <div class="card-footer1">\
                            <a href="https://github.com/salman-bhai" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="col-md-4 desktop">\
                        <img src="../images/img_avatar1.png" class="w-100">\
                        <div class="bottom-left">'+projects[i].title+'</div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>');
            }
            else{
                ongoing_list.append('<li data-target="#ongoingprojects" data-slide-to="'+ongoing_projects_count+'"></li>')

                ongoing_items.append('<div class="item">\
                <div class="container mypy py-3">\
                    <div class="card" style="background-color:'+colours[ Math.floor((Math.random() * colours.length))]+'">\
                      <div class="row ">\
                          <div class="col-md-4 mobile">\
                            <img src="../images/img_avatar1.png" class="w-100" style="border-radius: 10px;">\
                            <div class="bottom-left">'+projects[i].title+'</div>\
                          </div>\
                          <div class="col-md-8 ">\
                            <div class="card-block">\
                              <h4 class="card-title">'+projects[i].title+'</h4>\
                              <span class="label label-default">Open Source</span>\
                              <br><br>\
                              <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\
                              <div class="card-footer1">\
                                <a href="https://github.com/salman-bhai" target="_blank"><button class="link">Link to Github <i class="fa fa-github fa-lg"></i></button></a>\
                              </div>\
                            </div>\
                          </div>\
                          <div class="col-md-4 desktop">\
                            <img src="../images/img_avatar1.png" class="w-100">\
                            <div class="bottom-left">'+projects[i].title+'</div>\
                          </div>\
                      </div>\
                  </div>\
                </div>\
              </div>');
            }
            ongoing_projects_count++;
        }
    };