'use strict';

eventsApp.filter('systemtype', function() {
	return function(systemName) {
		switch(systemName) {
			case 1:
				return "General Electric";
			case 2:
				return "Toshiba";
			case 3:
				return "Siemens";
			case 4:
				return "Phillips";
		}	
	}
}
)