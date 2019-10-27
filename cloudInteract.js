$(document).ready(function(){

    var myWidget = cloudinary.createUploadWidget({
cloudName: 'db1iq1bfj',
uploadPreset: 'um9zevap',
sources: ["local", "dropbox"],
folder: 'Submissions'}, (error, result) => {
if (!error && result && result.event === "success") {
  console.log('Done! Here is the image info: ', result.info);
    jQuery.ajax({
                type: "POST",
                url: 'processImage.php',
                dataType: 'json',

                data: {path: result.info.public_id, functionname: 'addPath'},

                success: function (obj) {
                              if( !('error' in obj) ) {
                                  console.log(obj);
                              }
                              else {
                                  console.log(obj);
                              }
                        },
                        async: false

                // alert('reached submit');
              });

}
}
);

document.getElementById("upload_widget").addEventListener("click", function(){
myWidget.open();
}, false);


$("#runOCR").on("click",function(){
    jQuery.ajax({
                type: "POST",
                url: 'processImage.php',
                dataType: 'json',

                data: {hw: 2, functionname: 'runOCR'},

                success: function (obj) {
                              if( !('error' in obj) ) {
                                  console.log(obj);
                              }
                              else {
                                  console.log(obj);
                              }
                        },
                        async: false

                // alert('reached submit');
              });

    });


var myWidget2 = cloudinary.createUploadWidget({
cloudName: 'db1iq1bfj',
uploadPreset: 'um9zevap',
sources: ["local", "dropbox"],
folder: 'Solutions'}, (error, result) => {
if (!error && result && result.event === "success") {
  console.log('Done! Here is the image info: ', result.info);
    jQuery.ajax({
                type: "POST",
                url: 'processImage.php',
                dataType: 'json',

                data: {path: result.info.public_id, functionname: 'solutionPath'},

                success: function (obj) {
                              if( !('error' in obj) ) {
                                  console.log(obj);
                              }
                              else {
                                  console.log(obj);
                              }
                        },
                        async: false

                // alert('reached submit');
              });

}
}
);

document.getElementById("2upload_widget").addEventListener("click", function(){
myWidget2.open();
}, false);


});