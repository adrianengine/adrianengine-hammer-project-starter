var NAMESPACE = NAMESPACE || {};

NAMESPACE.Site = (function () {
	'use strict';

	var SmoothScroll = {
		currentYPosition: function () {
			if (document.documentElement && document.documentElement.scrollTop)
				return document.documentElement.scrollTop;
			if (document.body.scrollTop)
				return document.body.scrollTop;
			return 0;
		},
		elmYPosition: function (elementId) {
			var
			elm  = document.querySelector(elementId),
			y    = elm.offsetTop,
			node = elm;

			while (node.offsetParent && node.offsetParent !== document.body) {
				node = node.offsetParent;
				y   += node.offsetTop;
			}
			return y;
		},
		goTo: function (elementId) {
			var
			startY   = this.currentYPosition(),
			stopY    = this.elmYPosition(elementId),
			distance = stopY > startY ? stopY - startY : startY - stopY,
			speed = Math.round(distance / 100),
			step  = Math.round(distance / 25),
			leapY = stopY > startY ? startY + step : startY - step,
			timer = 0,
			i = 0;

			if (distance < 100) {
				scrollTo(0, stopY);
				return;
			}

			if (speed >= 20) speed = 20;

			if (stopY > startY) {
				for ( i=startY; i<stopY; i+=step ) {
					setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
					leapY += step;
					if (leapY > stopY) leapY = stopY;
					timer++;
				}
				return;
			}

			for ( i=startY; i>stopY; i-=step ) {
				setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
				leapY -= step;
				if (leapY < stopY) leapY = stopY;
				timer++;
			}
		}
	};

	var MyNameSite = {
		init: function () {
			this.bindUIActions();
		},
		bindUIActions: function () {
			var self = this;

			[].forEach.call(document.querySelectorAll('.js-localink'), function (el) {
				el.addEventListener('click', function (e) {
					var elementId = this.getAttribute('href');

					SmoothScroll.goTo(elementId);
					e.preventDefault();
				}, false);
			});

			//GOOGLE ANALYTICS
			[].forEach.call(document.querySelectorAll('button, a'), function (el) {
				el.addEventListener('click', function () {
					var
					title = this.getAttribute('title');

					ga('send', {
						'hitType': 'event',          // Required.
						'eventCategory': 'button',   // Required.
						'eventAction': 'click',      // Required.
						'eventLabel': 'Clic on: ' + title,
						'eventValue': 1
					});

				}, false);
			});
		}
	};

	if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
		document.addEventListener('DOMContentLoaded', function () {
			// Main app
			MyNameSite.init();
		});
	}

}());