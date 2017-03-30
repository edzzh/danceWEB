import Ember from 'ember';

var err = function error(){

};

var member = [];


//Get members
function getMemberFunc(){
  Ember.$.ajax({
    url: "http://localhost:3004/getMember",
    type: "GET",
    data: "json",
    success: function (result) {
      member = Ember.$.extend(true, [], result);
    },
    failure: err()
  });
}


export default Ember.Route.extend({
  setupController: function(controller){
        Ember.$.getJSON('http://localhost:3004/getMember').then(function(data){
            gallery = Ember.$.extend(true, [], data);
            // ajax callback is detached from runloop, so we attach again
            Ember.run(function() {
                controller.set('model', gallery);
            });
        });
    }
});
