$(function () {
	var chapters = [
		{ start: 0, stop: 1},
		{ start: 2, stop: 3}
		/*{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: },
		{ start: , stop: }*/
	];
	var currentChapter = -1;
	var video = $('#container video')[0],
		$seekItems = $('[data-seek]').sort(function (a, b) {
			return $(b).data('seek') - $(a).data('seek'); // Causes a reverse sort
		}),
		$chapterItems = $('[data-chapter]').sort(function (a, b) {
			return $(b).data('chapter') - $(a).data('chapter');
		});

	function repositionElements() {
		if(window.innerWidth < 1200) {
			var w = $('#mobile-infographic').width(),
				h = $('#mobile-infographic').height();
			$('#download-button').css({
				left: 0.58333333333333 * w,
				top: 0.94985308521058 * h,
				width: 0.225 * w,
				height: 0.00914136467516 * h
			});
		}
	}

	function onResize() {
		var win_h = $(window).height(),
			win_w = $(window).width();

		/*if(win_w < win_h) {
			$('#aspect-warning').fadeIn();
		} else if(win_h < $('#container video').height()) {
			$('#height-warning').fadeIn();
		} else {
			$('#aspect-warning, #height-warning').fadeOut();
		}*/

		$('#container video').css({
			'max-height': win_h
		});
		$('#container .poster').css({
			width: $('#container video').width(),
			height: $('#container video').height()
		});

		// Reposition the invisible download button on the image for mobile
		repositionElements();

		// If we went bigger than 1200, scroll the container to the top so the video is visible
		if(win_w >= 1200) {
			$('#container').scrollTo(0);

			if(video.currentTime > 1.5) {
				$('.banner').show();
			} else {
				$('.banner').hide();
			}
		} else {
			$('.banner').show();
		}
	}

	/*
	var playInterval = null;
	function playFor(duration) {
		if(playInterval !== null) {
			return;
		}
		var targetTime = Math.min(video.duration, Math.max(0.041667, video.currentTime + duration)),
			direction = targetTime > video.currentTime ? 1 : -1;
		playInterval = setInterval(function () {
			if(direction === 1) {
				// Playing forward
				if(video.currentTime >= targetTime) {
					clearInterval(playInterval);
					playInterval = null;
				}
				video.currentTime = Math.min(video.duration, video.currentTime + 0.041);
			} else {
				// Playing reverse
				if(video.currentTime <= targetTime) {
					clearInterval(playInterval);
					playInterval = null;
				}
				video.currentTime = Math.max(0.041667, video.currentTime - 0.041);
			}
		}, 41);
	}
	*/

	var $banner = $('.banner');
	setInterval(function () {
		if(currentChapter < 0 || currentChapter >= currentChapter.length - 1) {
			return;
		}

		var newTime = video.currentTime;
		$('#currentTime .value').text(newTime);
		// Show banner when we're past the intro
		if(newTime > 1.5) {
			if(!$banner.hasClass('in')) {
				$('.banner').fadeIn('fast').addClass('in');
			}
		} else {
			if($banner.hasClass('in')) {
				$('.banner').fadeOut('fast').removeClass('in');
			}
		}

		// Pause the video when it goes past the end point of the current chapter
		if(newTime >= chapters[currentChapter].stop) {
			video.pause();
			video.currentTime = chapters[currentChapter].stop;

			// Brighten the controls
			$('#video-controls').removeClass('dimmed');
		}

		// Make the current nav item active, since we're sorted, early return when we found one that is the closest
		var $activeItem = $('[data-seek].active');
		$seekItems.each(function (i, item) {
			var $item = $(item);
			if(video.currentTime >= $item.data('seek')) {

				if(!$activeItem.is($item)) {
					$activeItem.removeClass('active');
					$item.addClass('active');
					$activeItem = $item;
				}
				return false;
			}
		});

		var $activeItem = $('[data-chapter].active');
		$chapterItems.each(function (i, item) {
			var $item = $(item);
			if(currentChapter <= $item.data('chapter')) {
				if(!$activeItem.is($item)) {
					$activeItem.removeClass('active');
					$item.addClass('active');
					$activeItem = $item;
				}
			}
		});
	}, 40);

	var canPlay = false;
	$('#container video').on('timeupdate', function (event) {

	}).on('canplay', function () {
		// Kill the loader
		$('#loader').fadeOut();
		// Show the begin CTA
		$('#begin').removeClass('hidden').addClass('animated');
		canPlay = true;
	}).on(Modernizr.touch ? 'touchend' : 'click', function (event) {
		if(!canPlay) {
			return;
		}
		if(video.currentTime >= chapters[chapters.length - 1].start) {
			$('#download_modal').modal('show');
		} else {
			if(video.paused && currentChapter < chapters.length) {
				$('#begin').removeClass('fadeInUp animated').fadeOut();
				currentChapter++;
				video.play();
				$('#video-controls').addClass('dimmed');
				$('#prev.hidden, #next.hidden, #repeat.hidden').removeClass('hidden').addClass('animated');
			}
		}
	});

	$(window).on('resize', _.throttle(onResize, 200));

	var onScroll = _.throttle(function (event) {
		if(window.innerWidth >= 1200) {
			var delta = event.originalEvent.wheelDelta;

			if(delta > 0) {
				// video.currentTime -= 0.041;
				playFor(-0.35);
			} else {
				// video.currentTime += 0.041;
				playFor(0.35);
			}
		}
	}, 350);

	/*
	$(window)
		.on('mousewheel', onScroll)
		.on('DOMMouseScroll', onScroll);
	*/

	onResize();

	$('#container').on(Modernizr.touch ? 'touchend' : 'click', function () {
		if($('#sidebar').hasClass('open')) {
			$('#sidebar').removeClass('open');
		}
	}).imagesLoaded().always(repositionElements);

	$('#contact_form').on('submit', function () {
		var $form = $(this),
			formData = {
				first_name: $form.find('input[name=first_name]').val(),
				last_name: $form.find('input[name=last_name]').val(),
				email_address: $form.find('input[name=email_address]').val()
			};

		$.ajax('download.php', {
			type: 'POST',
			data: $form.serialize()
		}).done(function () {
			$.fileDownload('download.php');
			$('#download_modal').modal('hide');
			/*$.notifyBar({
				cssClass: "success",
				html: "Thanks! Your download should start momentarily. If it doesn't, <a href=\"download.php\">click here</a>.",
				close: true
			});*/
		});

		return false;
	});

	$('.menu-toggle').on(Modernizr.touch ? 'touchend' : 'click', function () {
		$('#sidebar').toggleClass('open');
	});

	$('[data-seek]').on(Modernizr.touch ? 'touchend' : 'click', function () {
		// Don't move the video if we're not showing it
		if(window.innerWidth >= 1200) {
			video.currentTime = $(this).data('seek');
		}
	});

	$('[data-chapter]').on(Modernizr.touch ? 'touchend' : 'click', function () {
		if(window.innerWidth >= 1200) {
			if(video.paused) {
				currentChapter = $(this).data('chapter');
				video.currentTime = chapters[currentChapter].start;
				video.play();
				$('#video-controls').addClass('dimmed');
				$('#begin').removeClass('fadeInUp animated').fadeOut();
				$('#prev, #next, #repeat').removeClass('hidden');
			}
		}
	});

	$('[data-scroll]').on(Modernizr.touch ? 'touchend' : 'click', function () {
		if(window.innerWidth < 1200) {
			// Figure out how much to scroll the window down
			var pct = $(this).data('scroll') / 15315,
				amount = $('#mobile-infographic').height() * pct;
			$('#container').scrollTo(amount, 300);
		}
	});

	$('[data-share]').on('click', function () {
		var service = $(this).data('share');
		switch(service) {
			case 'facebook':
				window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://nativeadscience.com'), 'share', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=400');
				break;
			case 'twitter':
				window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://nativeadscience.com') + '&text=' + encodeURIComponent('The Science Behind Why Native Ads Work via @Sharethrough @Columnfive'), 'share', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=550,height=420');
				break;
			case 'linkedin':
				window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent('http://nativeadscience.com') + '&title=' + encodeURIComponent('The Science Behind Why Native Ads Work'), 'share', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=520,height=570')
				break;
		}
	});

	$('#repeat').on('click', function () {
		if(video.paused && currentChapter >= 0) {
			// currentChapter--;
			video.currentTime = chapters[currentChapter].start;
			video.play();
			$('#video-controls').addClass('dimmed');
		}
	});
	$('#prev').on('click', function () {
		if(video.paused && currentChapter > 0) {
			currentChapter--;
			video.currentTime = chapters[currentChapter].start;
			video.play();
			$('#video-controls').addClass('dimmed');
		}
	});
	$('#next').on('click', function () {
		if(video.paused && currentChapter < chapters.length) {
			currentChapter++;
			video.play();
			$('#video-controls').addClass('dimmed');
		}
	});
	$('#begin').on('click', function () {
		// $('#container .poster').slideUp('slow').removeClass('show');
		// $('#begin').fadeOut();
		$('#begin').removeClass('fadeInUp animated').fadeOut();
		currentChapter++;
		video.play();
		$('#prev, #next, #repeat').removeClass('hidden').addClass('animated');
		$('#video-controls').addClass('dimmed');
	});
	$('#container video').attr('preload','auto');
	$('#container video')[0].play();
	$('#container video')[0].pause();

});