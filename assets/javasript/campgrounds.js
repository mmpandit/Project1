

$("button").on("click", function(){
    search=$(this).val();
    if(search==='zions') {
        latCurrent = 37.2982;
        lonCurrent = 113.0263;
    }else if(search==='bryce'){
        latCurrent = 37.5930;
        lonCurrent = 112.1677;
    }else if(search==='arches'){
        latCurrent = 38.7331;
        lonCurrent = 109.5925;
    }else if(search==='canyonlands'){
        latCurrent = 38.3269;
        lonCurrent = 109.8783;
    }else if(search==='capitolreef'){
        latCurrent = 38.3670;
        lonCurrent = 111.2615;
    }  

    // var lat = $(this).val();
    // var latCurrent = lat.toLowerCase().replace(/\s+/g, '');
    // console.log(nationalPark+"and"+search);
    
      // Here we construct our URL
      queryURL = "https://www.hikingproject.com/data/get-campgrounds?lat=" + latCurrent + "&lon=-" + lonCurrent + "&maxResults=20&key=200490960-11dab972d2711188712bdd6413bb06f3";   
   
    console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        var i; 
        for (i=0; i<response.campgrounds.length; i++) {
          

          var nameDiv = $("<div></div>", {
            id: "nmDiv",
          });
          $("#campgroundInfo").append(nameDiv, response.campgrounds[i].name);

          var locationDiv = $("<div></div>", {
            id: "locDiv",         
          });
          $(".campgroundLoc").append("<h5>" + (locationDiv, response.campgrounds[i].location) + "</h5>");
          var imageDiv = $("<img />", {
            id: "newImage",
            src: response.campgrounds[i].imgUrl,
            width: 300,
            height: 200
          });
          $("#campgroundInfo").append(imageDiv);
          var urlDiv = $("<div></div>", {
            id: urlDiv,
          });
          $("#campgroundInfo").append("<a href=" + (urlDiv, response.campgrounds[i].url) + ">" + (urlDiv, response.campgrounds[i].url) + "</a>");
          $("#campgroundInfo").append($("<br><br><br><br>"));
        
          
 
        
        // $("#camgroundInfo").append(nameDiv, response.campgrounds[i].name);
        // $("#camgroundInfo").append(locationDiv, response.campgrounds[i].location);
        // $("#campgroundInfo").append(imageDiv);
    } 
           
            console.log(response);
      });
    
   
      // -----------------------------------------------------------------------
   //
    });