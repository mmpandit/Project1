var imgId;

$('img').on('click', function(){
    imgId=$(this).attr('id');
    console.log(imgId);
    //who is doing the np.html and js need to get imgId from here 
    $('a').attr('href','np.html?key='+imgId);
   
    
})