 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAJPJy3r6AwZBYBBSYJUvY0q8KJhqR52X8qIDh9vDEa2uJgBJBUBqmC8CApAZBwzKCyTiZAKpAxeCGRh9wLmBeDDQhloZBFZBDzS7I9VMuQZCFJbTIBJpMwA1BLY4tZCNjbGJ1R7EjTRwHEiIzgQfJvGVMC5IqwnVZAVI5msKd1YWql49ksGDsUcZD';
    
    function getFacebookInfo(){

        
        $(".well").slideDown(1500);
        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#first_name").text(response.first_name);
                    $("#last_name").text(response.last_name);
                    $("#email").text(response.email);
                    $("#birthday").text(response.birthday);
                    $("#hometown").text(response.hometown.name);
                    $("#languages").html(response.languages[0].name +", " + response.languages[1].name + ", " + response.languages[2].name + "</li></ul>");
                    $("#id").text(response.id);
                    $("#link").text(response.link);


                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info


    function getFeedInfo(){
        
        $(".well").css("display","none");
        $(".feed").slideDown(1500);
        
        
        
        $.ajax('https://graph.facebook.com/1118893494791877/feed?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#collapse-1").text(response.data[18].message);
                    $("#collapse-2").text(response.data[2].message);
                    $("#collapse-3").text(response.data[1].message);
                    

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info
  
    
    $("#btn").on('click',getFacebookInfo);
    $("#feed-btn").on('click',getFeedInfo);



  });