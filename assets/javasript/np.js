

// var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.has('key')); 

// var keys = urlParams.keys();
// console.log(keys); 

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('key');
console.log(myParam);

$('#trails').on('click', function(){
    console.log(myParam);
    window.open('./trails.html?key='+ myParam,'_self');
})
$('#reviews').on('click', function(){
    console.log(myParam);
    window.open('./trails.html?key='+ myParam,'_self');
})