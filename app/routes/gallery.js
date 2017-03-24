import Ember from 'ember';

var err = function error() {
  //console.log("er");
};

var gallery = [];


//Image Get
function getImageFunc(){
  Ember.$.ajax({
    url: "http://localhost:3004/getPic",
    type: "GET",
    data: "json",
    success: function (result) {
      gallery = Ember.$.extend(true, [], result);
    },
    failure: err()
  });
}
//Image Post
var form = $('#mageUploadForm');
var files;
var fileSelected = $('#image-file').value;

$('input[type=file]').on('change', prepareUpload);
function prepareUpload(event){
  files = event.target.files;
}

form.on('submit', uploadFiles);
function uploadFiles(event){
  event.stopPropagation();
  event.preventDefault();

  var data = new FormData();
  $.each(files, function(key,value){
    data.append(key,value);
  });

  $.ajax({
    url: "nodejs url",
    type: "POST",
    data: data,
    cache: false,
    dataType: 'json',
    processData: false, //Dont process the files
    contentType: false, //Set content type to a false jQuery
    success: function(data, textStatus, jqXHR){
      if(typeof data.error === 'undefined'){
        //success so call function to process the form
        submitForm(event,data);
      }
      else{
        //Handle errors here
        console.log('Errors: ' + data.error);
      }
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log('Errors: '+textStatus);
    }
  });
}


/*
function uploadImage(){
  Ember.$.ajax({
    url: "url",
    type: "POST",
    data: datastring,
    success: getImageFunc(result),
    error: err(error)
  });
}

*/


getImageFunc();

export default Ember.Route.extend({
  setupController: function(controller){
        Ember.$.getJSON('http://localhost:3004/getPic').then(function(data){
            gallery = Ember.$.extend(true, [], data);
            // ajax callback is detached from runloop, so we attach again
            Ember.run(function() {
                controller.set('model', gallery);
            });
        });
    }
});
