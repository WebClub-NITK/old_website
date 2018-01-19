window.addEventListener('load', function() {


	var colors = ['#F92672', '#A6E22E', '#66D9EF'];
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  // add DOM for months for a given year
  function loadContestForMonths(n){

      // load data of contests
      var i;
      for (i = 0; i < contests[n].length; i++){

          // link
          var a = document.createElement("a");
          a.classList.add("contestLink");
          a.href = "https://" + contests[n][i].links[0];
          a.target = "_blank";

          // division inside link
          var k = document.createElement("div");
          k.classList.add("contestsSpace");
          k.style.backgroundColor = colors[i % 3];

          // title inside division
          var l = document.createElement("div");
          l.classList.add("contestTitle");
          l.innerHTML = contests[n][i].title;

          // date and time inside division
          var p = document.createElement("p");
          p.classList.add("details");

          var date = timeConverter(contests[n][i].start_date);
          p.innerHTML = date[0];

          k.appendChild(l);
          k.appendChild(p);
          a.appendChild(k)

          var month = document.getElementById(date[1].substr(0, 3));
          month.appendChild(a);
        }

      // no contest
      for (i = 0; i < 12; i++){
      	var monthDiv = document.getElementById(months[i]);
      	if(monthDiv.children.length == 0){
      		var empty = document.createElement("div");
      		empty.innerHTML = "No Contests Found";
      		empty.style.color = "#ffffff";
      		empty.style.padding = "100px"
      		empty.style.textAlign  = "center";
      		empty.style.fontSize = "25px";
      		monthDiv.appendChild(empty);
      	}
      }
    }

  // attach year tabs to DOM
  var yearsTab = document.getElementById('yearsTabs');
  for(var i = noOfYears - 1; i >= 0; i--){

  	var li = document.createElement('li');
  	li.innerHTML = startYear + i;
  	if (i == noOfYears - 1){
  		li.classList.add("active");
  	}
  	yearsTab.appendChild(li);

  }

  // load data for active year
  loadContestForMonths(noOfYears - 1);


  // month navigation
  var monthTabs = document.getElementById('monthsTabs');

  monthTabs.addEventListener('click', function (e) {
  	if (e.target.tagName === 'LI') {
          //
          var i, tabs, contests;
          tabs = monthTabs.getElementsByTagName("li");
          for (i = 0; i < tabs.length; i++) {
          	tabs[i].className = tabs[i].className.replace("active", "");
          }

          for(i = 0; i < 12; i++){

          	document.getElementById(months[i]).style.display = "none";
          }

          e.target.classList.add("active");

          if (!(e.target.textContent == "Sept")){
          	document.getElementById(e.target.textContent).style.display = "block";
          }
          else {
          	document.getElementById("Sep").style.display = "block";
          }
        }
      });


  // year navigation
  var yearTabs = document.getElementById('yearsTabs');

  yearTabs.addEventListener('click', function (e) {
  	if (e.target.tagName === 'LI') {
          // clear
          clearNavSpace();

          var i, tabs;

          // select tab
          tabs = yearTabs.getElementsByTagName("li");
          for (i = 0; i < tabs.length; i++) {
          	tabs[i].className = tabs[i].className.replace("active", "");
          }
          e.target.classList.add("active");

          // load data for that year
          var index = Array.from(e.target.parentElement.children).indexOf(e.target);
          loadContestForMonths(noOfYears - index - 1);

        }
      });


  // delete children of months space in contests space
  function clearNavSpace() {
  	for (var i = 0; i < 12; i++){
  		var monthDiv = document.getElementById(months[i]);
  		while (monthDiv.firstChild) {
  			monthDiv.removeChild(monthDiv.firstChild);
  		}
  	}
  }

})


// Unix timestamp to date
function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = "Time: " + hour + ':' + min + ':' + sec + ' '+  date + ' ' + month + ' ' + year;
	var res = [time, month];
	return res;
}

