'use strict';

eventsApp.Contoller('EditEventController',
	function EditEvemtController($scope) {
		$scope.saveEvent = function(event) {
			window.alert('event '+ event.name + 'saved!');
		}

		$scope.cancelEdit = function() {
			window.location ="/EventDetails.html"
		}

	}
)