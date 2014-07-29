'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope) {
		$scope.saveEvent = function(event, newForm) {
			console.log(newForm);
			if (newForm.$valid) {
				window.alert('event '+ event.name + 'saved!');
			}
			else
			{
				window.alert('Validation Errors');
			}
		}

		$scope.cancelEdit = function() {
			window.location ="/EventDetails.html"
		}

	}
)