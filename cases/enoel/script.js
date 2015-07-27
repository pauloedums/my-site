jQuery.noConflict();
jQuery(document).ready(function(){

		var lengthPaper = jQuery('#mask .paper').length;
		console.log(lengthPaper);
		var arrayImagesPrinter = new Array(['folha.png'],['printer.jpg'],['sombra-folha.png'],['sombra-folha-baixo.png']);
		for(var i =0; i <arrayImagesPrinter.length; i++){
			jQuery('#mask #imageFake').attr('src','img/cartinhas/' + arrayImagesPrinter[i] + '');
		}
		// ANIMAÇÃO INICIAL
		jQuery('#mask #camera').addClass('current').animate({top: -21},1800, 'easeInCubic', null);
		jQuery('#paperShadow').animate({top: -42},1800, 'easeInCubic', null);
		jQuery('#shadow').animate({top:-50}, 2000, function(){jQuery(this).fadeOut(500);});
		jQuery('.paper').animate({height:453}, 500);

		jQuery('#nextBT').unbind('click');
		jQuery('#backBT').unbind('click').addClass('disabled');

		jQuery('#nextBT').bind('click',function(){

			if(jQuery("#mask .paper.current").index() == lengthPaper){
					jQuery(this).css({cursor:'default'}).addClass('disabled');
					jQuery('#back .blockBT, #next .blockBT').hide();
			}else{
				jQuery('#back .blockBT, #next .blockBT').show();
				jQuery(this).css({cursor:'pointer'});
				jQuery('.paper').css('height','473px');
				jQuery('#shadow').show().animate({top:-136},0);
				jQuery('#mask .paper').fadeOut().animate({top:-500},0);
				jQuery("#nextBT,#backBT").removeClass('disabled');
				var getContentPrevious = jQuery('.paper.current').html();
				jQuery('#mask #paperShadow').empty().html(getContentPrevious);
				jQuery('#mask .paper.current').removeClass('current').next().addClass('current').animate({top: -21},2500, 'easeOutCubic', function(){jQuery('#back .blockBT, #next .blockBT').hide();});
				jQuery('#shadow').animate({top:-50}, 2000, function(){jQuery(this).fadeOut(500);});
				jQuery('.paper').animate({height:453}, 500);
			}
		});

		jQuery('#backBT').bind('click',function(){

			if(jQuery('#mask .paper.current').index() == 1){
					jQuery(this).css({cursor:'default'}).addClass('disabled');
					jQuery('#back .blockBT, #next .blockBT').hide();
			}else{
				jQuery('#back .blockBT, #next .blockBT').show();
				jQuery(this).css({cursor:'pointer'});
				jQuery('.paper').css('height','473px');
				jQuery('#shadow').show().animate({top:-136},0);
				jQuery('#mask .paper').fadeOut().animate({top:-500},0);
				jQuery("#nextBT,#backBT").removeClass('disabled');
				var getContentNext = jQuery('.paper.current').html();
				jQuery('#mask #paperShadow').empty().html(getContentNext);
				jQuery('#mask .paper.current').removeClass('current').prev().addClass('current').animate({top: -21},2500, 'easeOutCubic', function(){jQuery('#back .blockBT, #next .blockBT').hide();});
				jQuery('#shadow').animate({top:-50}, 2000, function(){jQuery(this).fadeOut(500);});
				jQuery('.paper').animate({height:453}, 500);
			}
		});

		jQuery('.close-detail').bind('click',function(){
			jQuery('#shadow').css({top:-136});
			jQuery('.paper').fadeOut().css({top:-500}).removeClass('current');
			jQuery('#printer a').removeClass('disabled');
		});

});