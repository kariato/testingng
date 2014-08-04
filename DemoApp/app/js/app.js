'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource','ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/newEvent',
		{
			templateUrl:'template/NewEvent.html',
			controller: 'EditEventController'
		});
		$routeProvider.when('/events',
		{
			templateUrl:'template/ListEvents.html',
			controller: 'ListEventsController'
		});
		$routeProvider.when('/event/:eventId',
		{
			templateUrl:'template/EventsDetails.html',
			controller: 'EventController'
		});
		
	})
;
