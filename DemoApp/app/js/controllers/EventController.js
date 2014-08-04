'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventDataTmp) {

		$scope.snippet='<span style="color:red">hi there</span>';
	// 	$scope.boolValue=false;
	// 	$scope.myStyle={color:'red'};
	// 	$scope.myClass="blue";
	// 	$scope.buttonDisabled= false;
	// 	$scope.sortorder = "name";
	// 	$scope.event = eventDataTmp.getEvent()
	// 		.$promise.then(
	// 			function(event) { $scope.event = event; console.log(event); },
	// 			function(response) {console.log(response); }
	// 			);

	// 	$scope.saveEvent = function (event, form) {
	// 		if (form.$valid) {
	// 			eventDataTmp.save(event)
	// 				.$promise.then(
	// 					function(response) { console.log('success', response) },
	// 					function(response) { console.log('failure', response) }
	// 					);
	// 		};
	// 	}

	// 		$scope.cancelEdit = function() {
	// 			window.location ="/EventDetails.html"
	// 	}

	// 	{
	// 			name: "Test Boot Camp",
	// 			date: "1/1/2014",
	// 			time: "11:45 am",
	// 			location: {
	// 				address: "Aramark TRC",
	// 				city: "Charlotte",
	// 				province: "NC"
	// 			},
	// 			imageUrl: '/img/aramark_logo.png',
	// 			sessions: [
	// 					{ name: "CT Imaging 101",creatorName: "Mike McVey",duration: 1, level: "Basic", abstract:"TBD", upVoteCount: 0 , cost: 100, eventdate: Date.parse("1/1/2014"), systemType: 1 },
	// 					{ name: "CT Imaging 102",creatorName: "Mike McVey",duration: 1.5, level: "Basic", abstract:"TBD", upVoteCount: 0  , cost: 100, eventdate: Date.parse("2/1/2014"), systemType: 2},
	// 					{ name: "CT Imaging 201",creatorName: "Mike McVey",duration: 2, level: "Intermediate", abstract:"TBD", upVoteCount: 0  , cost: 300, eventdate: Date.parse("1/21/2014"), systemType: 3},
	// 					{ name: "CT Imaging 301",creatorName: "Mike McVey",duration: 2.75, level: "Intermediate", abstract:"TBD", upVoteCount: 0  , cost: 500, eventdate: Date.parse("1/11/2014"), systemType: 3},
	// 					{ name: "CT Imaging 401",creatorName: "Mike McVey",duration: 3, level: "Advanced", abstract:"TBD", upVoteCount: 0  , cost: 1000, eventdate: Date.parse("3/1/2014"), systemType: 4},
	// 					{ name: "CT Imaging 501",creatorName: "Mike McVey",duration: 78, level: "Advanced", abstract:"TBD", upVoteCount: 0  , cost: 10000, eventdate: Date.parse("5/1/2014"), systemType: 1}
	// 			]
	// 	}

	// 	$scope.upVoteSession = function(session) {
	// 		session.upVoteCount++;
	// 	}

	// 	$scope.downVoteSession = function(session) {
	// 		session.upVoteCount--;
	// 	}
	// }
	);