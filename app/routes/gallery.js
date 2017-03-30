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
var form = $('#imageUploadForm');
var fileSelected = $('#image-file').value;

$('#submit-button').on('click', uploadImage);
function uploadImage(){
  Ember.$.ajax({
    url: "url",
    type: "POST",
    data: datastring,
    success: getImageFunc(result),
    error: err(error)
  });
}



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
