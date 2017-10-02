$(function () {
	var chapters = [
		{ start: 0, stop: 7.95 }, /*como era feito antes*/
		{ start: 7.96, stop: 13.6 }, /*como funciona hoje*/
		{ start: 13.61, stop: 16.6 }, /*conteudo = atrair pessoas certas*/
		{ start: 16.61, stop: 22.59 }, /*3 circulos de motivos*/
		{ start: 22.60, stop: 25.49 }, /*estrategico, direcionado e reduz riscos*/
		{ start: 25.50, stop: 28.6 }, /*conteudo custa até % menos*/
		{ start: 28.61, stop: 30.35 }, /*gera mais oportunidade de venda*/
		{ start: 30.36, stop: 31.2 }, /*como funciona?*/
		{ start: 31.21, stop: 33.25 }, /*ima*/
		{ start: 33.26, stop: 35.25 }, /*pneu*/
		{ start: 35.26, stop: 37.1 }, /*eles se tornam clientes*/
		{ start: 37.11, stop: 41.8 }, /*promotores da sua marca etc*/
		{ start: 41.81, stop: 53.3 }, /*lucro economia clientes etc*/
		{ start: 53.31, stop: 55.85 }, /*que tal comecar agora*/
		{ start: 55.85, stop: 60.5 }, /*a rock content esta aqui pra ajudar*/
		{ start: 60.5, stop: 75}

	];
	var currentChapter = -1;
	var video = $('#container video')[0],
		$seekItems = $('[data-seek]').sort(function (a, b) {
			return $(b).data('seek') - $(a).data('seek');
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

		$('#container video').css({
			'max-height': win_h - 40
		});
		$('#container .poster').css({
			width: $('#container video').width(),
			height: $('#container video').height()
		});

		repositionElements();

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

		if(newTime >= chapters[currentChapter].stop) {
			video.pause();
			video.currentTime = chapters[currentChapter].stop;
			$('#controles').removeClass('dimmed');
		}

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
				$('#controles').addClass('dimmed');
				$('#prev.hidden, #next.hidden, #repeat.hidden').removeClass('hidden').addClass('animated');
			}
		}
	});

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
		});

		return false;
	});

	$('.menu-toggle').on(Modernizr.touch ? 'touchend' : 'click', function () {
		$('#sidebar').toggleClass('open');
	});

	$('[data-seek]').on(Modernizr.touch ? 'touchend' : 'click', function () {
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
				$('#controles').addClass('dimmed');
				$('#begin').removeClass('fadeInUp animated').fadeOut();
				$('#prev, #next, #repeat').removeClass('hidden');
			}
		}
	});

	$('[data-scroll]').on(Modernizr.touch ? 'touchend' : 'click', function () {
		if(window.innerWidth < 1200) {
			var pct = $(this).data('scroll') / 15315,
				amount = $('#mobile-infographic').height() * pct;
			$('#container').scrollTo(amount, 300);
		}
	});

	$('#repeat').on('click', function () {
		if(video.paused && currentChapter >= 0) {
			video.currentTime = chapters[currentChapter].start;
			video.play();
			$('#controles').addClass('dimmed');
		}
	});
	$('#prev').on('click', function () {
		if(video.paused && currentChapter > 0) {
			currentChapter--;
			video.currentTime = chapters[currentChapter].start;
			video.play();
			$('#controles').addClass('dimmed');
		}
	});
	$('#next').on('click', function () {
		if(video.paused && currentChapter < chapters.length) {
			currentChapter++;
			video.play();
			$('#controles').addClass('dimmed');
		}
	});
	$('#begin').on('click', function () {
		$('#begin').removeClass('fadeInUp animated').fadeOut();
		currentChapter++;
		video.play();
		$('#prev, #next, #repeat').removeClass('hidden').addClass('animated');
		$('#controles').addClass('dimmed');
	});
	$('#container video').attr('preload','auto');
	$('#container video')[0].play();
	$('#container video')[0].pause();
});