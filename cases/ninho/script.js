$(function(){
		var peekTimer,$overview = $('#ninho').find('.overview');
		function unpeek() {
			$overview.removeClass('peek');
		}

		$overview.addClass('can-transition-height');
		$overview.find('.btn-more-details.first').bind('mouseenter mouseleave', function (e) {
			if (e.type == 'mouseenter') {
				clearTimeout(peekTimer);
				$overview.addClass('peek');
			};

			if (e.type == 'mouseleave') {
				peekTimer = setTimeout(unpeek, 1.5 * 1000);
			}
		});


		 $('#ninho-overview .holder-video .btn-play').bind('mousedown',function(e) {
			stopCarrossel();
			e.preventDefault();
            //return false;
		});

		var $highlightsGame = $('#highlights-videos'),
            $pagination = $highlightsGame.find('.pagination li'),
            $paginationFirst = $pagination.filter(':first-child'),
            nextInterval;

        $pagination.bind('click', function(e) {
            //$('.player-frm').empty();

			$('#ninho-overview')
                .find('iframe.player-frm').replaceWith('<div class="player-frm"></div>').end()
                .find('.holder-button').show().end()
                .find('.btn-play').removeClass('pause').unbind('click').end()
				.find('.holder-button').removeClass('top-controls ipad').end()
				.find('img').css({'visibility':'visible'});

			var clicked = $(this);

            e.preventDefault();
            if ( clicked.hasClass('current') ) {
                return false;
            }

            $pagination.removeClass('current').filter(this).addClass('current');
			var $highlightsVideo =  $highlightsGame.find('.lst-images li').hide().eq( clicked.index() );

			$highlightsVideo.fadeIn('slow');
			//$highlightsVideo.find('.btn-play').fadeIn();
			//$highlightsVideo.find('.holder-button').fadeIn();

            clearInterval(nextInterval);
            nextInterval = setInterval(goToNext, 7000);
        });

        function goToNext() {
          var $nextSibling = $pagination.filter('.current').next(),
            $nextItem = $nextSibling.length ? $nextSibling : $paginationFirst;

          $nextItem.trigger('click');
        }

		var pegaLiCurrent = $('.pagination li.current').index();

		function stopCarrossel(){

			//$highlightsGame.find('.lst-images li').hide().eq( pegaLiCurrent).fadeIn();

			$nextItem = null;
			 clearInterval(nextInterval);
		}

        $paginationFirst.trigger('click');

		var isiPad = navigator.userAgent.match(/iPad/i) != null;
        if (isiPad) {
			$('#cuboHolder').css('top', '130px');
		}else{
			//ADD CUBOS
			$('#cuboHolder').parallax("100%", 2000, 0.5, true);
		}

	     var isiPad = navigator.userAgent.match(/iPad/i) != null,
			$carouselDelicia = $('#carousel-delicia');

        if (isiPad) {
            //alert('iPad');

            $('body').addClass('ipad');

            $carouselDelicia.find('.wrapper-carousel').addClass('ipad');

			$carouselDelicia.append('<a href="javascript:;" class="ir sprite-home jcarousel-prev jcarousel-prev-horizontal jcarousel-prev-disabled jcarousel-prev-disabled-horizontal">anterior</a>');
			$carouselDelicia.append('<a href="javascript:;" class="ir sprite-home jcarousel-next jcarousel-next-horizontal jcarousel-next-disabled jcarousel-next-disabled-horizontal">proximo</a>');

            window._carouselSwipe = new Swipe(document.getElementById('swiper'));

			$('#carousel-delicia .jcarousel-prev').click(function() {
				window._carouselSwipe.prev();
			});

			$('#carousel-delicia .jcarousel-next').click(function() {
				window._carouselSwipe.next();
			});

        } else {
            $carouselDelicia.find('ul').jcarousel({
                scroll: 1,
                visible: 1,
                auto: 5,
				animationStepCallback: function(){
					$(this).hide().fadeIn('fast');
				},
                buttonPrevHTML: '<a href="javascript:;" class="ir sprite-home">anterior</a>',
                buttonNextHTML: '<a href="javascript:;" class="ir sprite-home">próximo</a>'
            });
        }

		$('#ninho-ads .holder-video img').attr("src", "img/bts.png");
		for(var i=0; i< 143; i++){
			$('#ninho-ads .holder-video img').attr("src", "img/momentos-para-guardar/bau/'" +i+"'.jpg");
			console.log('for' +i);
		}
		$('#ninho-ads .holder-video img').attr("src", "img/momentos-para-guardar/bau/0.jpg");

		$('#clique-e-arraste').slider({
			min: 0,
			max: 143,
			range:'min',
			step: 0.01,
			orientation: "horizontal",
			value: 1,
			slide: function(e,ui) {
				var val = ui.value;
				var valInteiro = parseInt(val)
				$(this).css({opacity: 1 - (val/100) });

				$('#ninho-ads .holder-video img').attr({src: 'img/momentos-para-guardar/bau/' +valInteiro+'.jpg' });

				if(val >= 140){
					$('#ninho-ads .holder-video #sortudos').fadeIn();
				}else{
					$('#ninho-ads .holder-video #sortudos').fadeOut();
				}
			}
		});
		$('#ninho .ads .page-content .holder-video #clique-e-arraste .ui-slider-handle').css('left', 0);
		$('#ninho .ads .page-content .holder-video #clique-e-arraste').delay(5000).fadeIn(1200);

		//anima baús


		setInterval("$('#bauSketch').fadeIn(3000, function(){$(this).fadeOut(2500);$('#bauFinal').fadeIn(3000, function(){$(this).fadeOut(2500);});});",6000);

		$('#passosSite div').fadeOut();


		$('#ninho-nossoSite .lst-results a.off').live({
			'mouseenter': function(){ $(this).parent().find('p').animate({backgroundPosition: -150}, 350);},
			'mouseleave': function(){ $(this).parent().find('p').animate({backgroundPosition: -190}, 200);},
			'click': function(){
				$(this).removeClass('off').addClass('on');
				$(this).parent().find('p').animate({backgroundPosition: 0}, 350);
			}
		});

		$('#ninho-nossoSite .lst-results a.on').live({
			'mouseenter': function(){ $(this).parent().find('p').animate({backgroundPosition: -55}, 350);},
			'mouseleave': function(){ $(this).parent().find('p').animate({backgroundPosition: 0}, 200);},
			'click': function(){
				$(this).removeClass('on').addClass('off');
				$(this).parent().find('p').animate({backgroundPosition: -190}, 350);
			}
		});

		$('#ninho-nossoSite .lst-results li a').live({
			'click': function(){
				var pegaClasse = $(this).attr('name');
				if(pegaClasse == 'wireframe'){
					if($(this).hasClass('on')){
						$('#'+pegaClasse).fadeIn();
						$('#layout').animate({opacity: 0.35}, 100);
					}else{
						$('#'+pegaClasse).fadeOut();
					}
				}
				else if(pegaClasse == 'grid'){
					if($(this).hasClass('on')){
						$('#'+pegaClasse).fadeIn();
						$('#layout').animate({opacity: 0.35}, 100);
					}else{
						$('#'+pegaClasse).fadeOut();
					}
				}
				else{
					$('#ninho-nossoSite .lst-results li.grid a, #ninho-nossoSite .lst-results li.wireframe a').removeClass('on').addClass('off');
					$('#ninho-nossoSite .lst-results li.grid a.off, #ninho-nossoSite .lst-results li.wireframe a.off').parent().find('p').animate({backgroundPosition: -190}, 350);
					$('#passosSite div').fadeOut(0);
					$('#'+pegaClasse).fadeIn().animate({opacity: 1}, 100);
				};

				 if( $('#ninho-nossoSite .lst-results li.grid a').hasClass('off') && $('#ninho-nossoSite .lst-results li.wireframe a').hasClass('off')){
					$('#ninho-nossoSite .lst-results li.grid a, #ninho-nossoSite .lst-results li.wireframe a').removeClass('on').addClass('off');
					$('#ninho-nossoSite .lst-results li.grid a.off, #ninho-nossoSite .lst-results li.wireframe a.off').parent().find('p').animate({backgroundPosition: -190}, 350);
					$('#passosSite #grid, #passosSite #wireframe').fadeOut(0);
					$('#layout').animate({opacity: 1}, 100);
				}
				return false;
			}
		});

		setTimeout('$("#ninho-nossoSite .lst-results li.layout a").addClass("startOn");$("#ninho-nossoSite .lst-results li.layout p").animate({backgroundPosition: 0}, 1000);', 500);

		$('#layout').fadeIn().css('opacity','1');


    	var ilustrasArray = ['bolinha-de-sabao-sketch.gif','bolinha-de-sabao.gif','vivo-ou-morto-sketch.gif','vivo-ou-morto.gif','amarelinha-sketch.gif','amarelinha.gif','danca-das-cadeiras-sketch.gif','danca-das-cadeiras.gif'];
		for(var j=0; j<ilustrasArray.length; j++){
			//alert(ilustrasArray[i]);
			$('#fakeIlustras img').attr('src','img/ilustras/'+ilustrasArray[j]+'');
		}

		var isiPad = navigator.userAgent.match(/iPad/i) != null;
        if (isiPad) {
			$('#ilustracoes .clique-arraste').click(function(){
				$(this).fadeOut(2000, function(){
					$('.drag').draggable();
				});
				return false;
			});
		}
		else{
			$('#ilustracoes .clique-arraste').mouseover(function(){
				$(this).fadeOut(2000, function(){
					$('.drag').draggable();
				});
				return false;
			}).click(function(){return false;});
		}

		$('#ilustracoes .voltar-tudo').click(function(){
			$('#ninho .ilustras #holder div').animate({top:300, left: 0}, 500).css('left','auto');
			return false;
		});
	var $highlightsGame = $('#highlights-tipografia'),
            $pagination = $highlightsGame.find('.pagination li'),
            $paginationFirst = $pagination.filter(':first-child'),
            nextInterval;

        $pagination.bind('click', function(e) {
            var clicked = $(this);

            e.preventDefault();
            if ( clicked.hasClass('current') ) {
                return false;
            }

            $pagination.removeClass('current').filter(this).addClass('current');
            $highlightsGame.find('.lst-images li').hide().eq( clicked.index() ).fadeIn('slow');

            clearInterval(nextInterval);
            nextInterval = setInterval(goToNext, 7000);
        });

        function goToNext() {
          var $nextSibling = $pagination.filter('.current').next(),
            $nextItem = $nextSibling.length ? $nextSibling : $paginationFirst;

          $nextItem.trigger('click');
        }

        $paginationFirst.trigger('click');

})