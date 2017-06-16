require(['config'],function(){
	require(['jquery','cookie'],function($){

		var getCookie = $.cookie('goods');
		getCookie = getCookie?JSON.parse(getCookie):[];
		
		/**********************表头小购物车数字显示*****************************/
		;(function(){
			var total = 0;
			for(var i = 0;i<getCookie.length;i++){

				total += getCookie[i].qty;

			}
			var $text = $('.cargoodsqty').text(total);
			

		})();

		;(function(){

			var $arrowLeft = $('<span/>').appendTo($('.left1'));
			var $arrowRight = $('<span/>').appendTo($('.right1'));

			$arrowLeft.addClass('arrowLeft');
			$arrowRight.addClass('arrowRight');
			$arrowLeft.css({display: 'block',
							width: 0,
				    		height: 0,
				    		'borderTop': '15px solid transparent',
				    		'borderRight': '20px solid white',
				    		'borderBottom': '15px solid transparent',
				    		top:'35px',
				    		left:'-20px',
				    		position:'absolute'
				    	})
			$arrowRight.css({
							display: 'block',
							width: 0,
				    		height: 0,
				    		'borderTop': '15px solid transparent',
				    		'borderLeft': '20px solid white',
				    		'borderBottom': '15px solid transparent',
				    		top:'35px',
				    		right:'-20px',
				    		position:'absolute'
						})

		})();

		//移入操作
		$('#main').on('mouseenter','.blue',function(){
			console.log($(this).children('.arrowLeft'))
			$(this).children('.inf').css('backgroundColor','#8CCEDC');
			$(this).children('.inf').children('p').eq(0).css('color','#fff');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #8CCEDC');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #8CCEDC');

		
		}).on('mouseleave','.blue',function(){
			$(this).children('.inf').css('backgroundColor','#fff');
			$(this).children('.inf').children('p').eq(0).css('color','#969696');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #fff');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #fff');


		}).on('mouseenter','.pink',function(){

			$(this).children('.inf').css('backgroundColor','#EEAFCE');
			$(this).children('.inf').children('p').eq(0).css('color','#fff');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #EEAFCE');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #EEAFCE');
			
		}).on('mouseleave','.pink',function(){
			$(this).children('.inf').css('backgroundColor','#fff');
			$(this).children('.inf').children('p').eq(0).css('color','#969696');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #fff');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #fff');

		}).on('mouseenter','.green',function(){

			$(this).children('.inf').css('backgroundColor','#97C86C');
			$(this).children('.inf').children('p').eq(0).css('color','#fff');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #97C86C');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #97C86C');
			
		}).on('mouseleave','.green',function(){

			$(this).children('.inf').css('backgroundColor','#fff');
			$(this).children('.inf').children('p').eq(0).css('color','#969696');
			$(this).children('div').children('.arrowLeft').css('borderRight','20px solid #fff');
			$(this).children('div').children('.arrowRight').css('borderLeft','20px solid #fff');

		}).on('mouseenter','.goods',function(){
			$(this).children('.left2').animate({'left':10});
			$(this).children('.right2').animate({'left':152});
			$(this).children('.left3img').animate({'left':10});
			$(this).children('.right3img').animate({'left':184});

		})
		.on('mouseleave','.goods',function(){

			$(this).children('.left2').stop(true,false);
			$(this).children('.right2').stop(true,false);
			$(this).children('.left3img').stop(true,false);
			$(this).children('.right3img').stop(true,false);

			$(this).children('.left2').animate({'left':0});
			$(this).children('.right2').animate({'left':162});
			$(this).children('.left3img').animate({'left':0});
			$(this).children('.right3img').animate({'left':194});

		})





		;(function(){
			//左部导航栏
			for(var i = 0;i<$('.leftNav').children().length;i++){
				$('.leftNav')[0].children[i].onmouseenter = function(){
					this.children[0].classList.add('active');
				}
				$('.leftNav')[0].children[i].onmouseleave = function(){
					this.children[0].classList.remove('active');
				}
			}
			$('.leftNav').children().eq(1).on('mouseenter',function(){
				
				$('.leftNavSecond').show();

				
			}).on('mouseleave',function(){
				$('.leftNavSecond').hide();
			})
		})();
		

		//轮播图
		;(function(){
			//获取banner ul
			var $list = $('#banner ul');
			
			var idx = 0;

			$('#banner .page span').eq(idx).addClass('active');

			var li = $list[0].children[0];

			var liClone = li.cloneNode(true);

			$list[0].appendChild(liClone);
				
			var target = 0;
			
			//自动播放函数控制idx
			
			function autoPlay(){
				idx++;
				showPic();
			}

			// 函数执行,用setinterval包裹speed函数
			var timer = setInterval(autoPlay,3000);


			function showPic(){

				var $len = $('#banner ul li').length

				if(idx>$len - 1){
					idx = 1;
					$list.css('left',0)
				}

				//当轮播图到达3时，第一个span亮
				if(idx == $len - 1){
					$('#banner .page span').eq(0).addClass('active').siblings().removeClass();

				}else{
					$('#banner .page span').eq(idx).addClass('active').siblings().removeClass();
				}
				
				var target = idx * -1210;

				$list[0].left = target;

				$list.stop(true,false);

				$list.animate({left:target})

			}
			
			//透明化span里面的内容
			$('.page span').css('color','transparent');


			// 点击切换效果
			$('.page span').on('mouseenter',function(){
				clearInterval(timer);
			}).on('click',function(){

				idx = $(this).text();

				$(this).addClass('active').siblings().removeClass();
				$list.stop(true,false);
				showPic();

			}).on('mouseleave',function(){
				timer = setInterval(autoPlay,3000);

			})

			//插入前后翻页按钮
			var $prevPage = $('<span/>').appendTo('#banner').addClass('prevPage');

			var $nextPage = $('<span/>').appendTo('#banner').addClass('nextPage');
			//设置样式
			
			$prevPage.text('<');
			$nextPage.text('>');
			
			$prevPage.css({
							display:'block',
							width:'50',
							height:'50',
							backgroundColor:'rgba(0,0,0,0.5)',
							position:'absolute',
							color:"#fff",
							zIndex:999,
							textAlign:'center',
							lineHight:'50',
							fontSize:'30px',
							top:'175px',
							left:0
						});
			 $nextPage.css({
							display:'block',
							width:'50',
							height:'50',
							backgroundColor:'rgba(0,0,0,0.3)',
							position:'absolute',
							color:"#fff",
							zIndex:999,
							textAlign:'center',
							lineHight:'50',
							fontSize:'30px',
							top:'175px',
							right:0
						});

			 //获取前后翻页按钮按钮，设置点击事件
			 //前翻页
			 $('#banner').on('click','.prevPage',function(){

			 	//点击时,idx数值减1
			 	if(idx<=0){
		 			idx = 3;
		 		}
		 		idx -= 1;
		 		
				$list.stop(true,false);

		 		showPic();


		 		//后翻页
			 }).on('click','.nextPage',function(){

			 	idx += 1;
		 		if(idx>=3){
		 			idx = 0;
		 		}
				$list.stop(true,false);

		 		showPic();
			 })
			 //清除timer
			  $('#banner span').on('mouseenter',function(){
			  	clearInterval(timer);
			  }).on('mouseleave',function(){
			  	timer = setInterval(autoPlay,3000);
			  })



		})();
		
		
	})
})