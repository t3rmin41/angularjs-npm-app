( function ( angular ) {
	'use strict';

	angular.module('cRequestApp').factory('eventPublisher', function EventPublisher (){
		var eventSubscriberRegistry = {};

		return {

			subscribe : function(eventId, subscriber) {

				if (typeof subscriber.update !== 'function')
					throw subscriber+': update property must be function';

				if (!eventSubscriberRegistry[eventId]) {
					eventSubscriberRegistry[eventId] = [];
				}

				eventSubscriberRegistry[eventId].push(subscriber)
			},

			unsubscribe : function(eventId, subscriber) {
				var subscribers = eventSubscriberRegistry[eventId];
				if (subscribers) {
					var ind = subscribers.indexOf(subscriber);
					if (ind)
						subscribers.splice(ind, 1);
				}
			},

			publish : function(event) {
				var subscribers = eventSubscriberRegistry[event.id];
				if (subscribers) {
					subscribers.forEach(function(subscriber) {
						subscriber.update(event);
					})
				}
			}

		};
	});
})(window.angular)