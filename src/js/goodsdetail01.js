require(['config'],function(){
	require(['jquery','cookie'],function($){
		var getCookie = $.cookie('goods');

		getCookie = getCookie ? JSON.parse(getCookie) : [];

/**********************表头小购物车数字显示*****************************/
		;(function(){
			var total = 0;
			for(var i = 0;i<getCookie.length;i++){

				total += getCookie[i].qty;

			}
			var $text = $('.cargoodsqty').text(total);
			

		})();


/****************************评论区详情区**************************************/
			;(function(){
				var content = document.getElementsByClassName('content_area')[0].children[0].children;
				var _content = document.getElementsByClassName('content_area')[0].children[1].children;
				
				content[0].className = 'active1';
				_content[0].style.display = 'block';
				for(let i = 0;i<content.length;i++){

					content[i].onclick = function(){
						
						//清除所有高亮
						for(var j = 0;j<content.length;j++){
							content[j].className = '';
							this.className = 'active1';
							_content[j].style.display = 'none';
						}
						_content[i].style.display = 'block';
						
					}
				}
			})();
/************************加减功能&添加购物车******************************/
		// 请求数据
		//获取链接的id参数
		function goodsId(){

			var goodsId = location.search;
			goodsId = goodsId.slice(4);
			return goodsId;
		};

		$.ajax({
			url:'../api/goodsdetail01.php',
			dataType:'JSON',
			data:{
				id:goodsId()
			},
			success:function(res){
				console.log(res)

				//数据请求成功生成html结构
				var idx = 0;

				var html = res.data.map(function(item){
					return `<div class="leftimg">
								<div class="originimg">
									<div class="zoom">
										<img class="minpic" src="${item.img_url}"  data-big="${item.img_url}">
									</div>
								</div>

								<ul class="imglist">
									<li><img src="../img/goods01.jpg"></li>
									<li><img src="../img/goods01-1.jpg"></li>
									<li><img src="../img/goods01-2.jpg"></li>
									<li><img src="../img/goods01-3.jpg"></li>
								</ul>
								
							</div>
							<div class="right">
								<h5>${item.name}</h5>
								<p>品牌：${item.category}</p>
								<p>￥${item.price}</p>
								<div>
									<p>超值换：628积分 + 14.00</p>
									<span>去兑换商品</span>
								</div>
								<div>
									<span class="minus">-</span>
									<span></span>
									<span class="plus">+</span>
								</div>
								<p>
									<input type="button" value="加入购物车" class="addCar" data-guid="g${++idx}">
									<input type="button" value="加入收藏">
								</p>
							</div>`

				});
				
				$('#goodspath').html(html);



				$('.right span').eq(2).text(0);

				
				//添加购物车点击事件
				;$('.addCar').on('click',function(){

					var guid = $(this).data('guid');
		
					//飞入功能
					var cloneImg = $('.zoom .minpic')[0].cloneNode(true);
					
					$('.zoom')[0].insertBefore(cloneImg,$('.minpic')[0]);
		
					$(cloneImg).css('position','absolute');
		
					$(cloneImg).animate({left:$('.nav').offset().left,top:0,width:0,height:0},function(){
						$(cloneImg).remove()
					})

					//header的购物车小图标数值
					var $total = $('.cargoodsqty').text();
					
					$('.cargoodsqty').text(parseInt($total)+1);


					//点击添加进cookie

					for(var i = 0;i<getCookie.length;i++){
						//超出库存控制
						if(getCookie[i].qty >= res.total){
		
							getCookie[i].qty = res.total*1
		
							$('.right span').eq(2).text(res.total*1);

							alert('商品超出库存');
							break;
						}


						// 写进cookie数量
						var $text = $('.right span').eq(2).text();

						if(getCookie[i].guid === guid){

							if($text*1 === 0){
								$('.cargoodsqty').text($total*1 + 1);

								getCookie[i].qty++;

							}else{
								getCookie[i].qty += $text*1 ;

								$('.cargoodsqty').text($total*1 + $text*1)
							}
							

							break;
						}
	
					}

					if(i === getCookie.length){
							
						var goods = {
							name:$(this).closest('p').prevAll('h5').text(),
							price:$(this).closest('p').prevAll('p').eq(0).text(),
							img:$('.imglist li:first-child img').attr('src'),
							qty:1,
							guid:guid
						}
						
						getCookie.push(goods);
					}



					$.cookie('goods',JSON.stringify(getCookie),{expires:7,path:'/'});

					//重置需要加入的数值
					$('.right span').eq(2).text(0);
		
					return false;
				});
	
	
	
				//购物车加的功能
				$('.right').on('click','.plus',function(){

					var $proqty = $('.right span').eq(2).text();
					
					$proqty++;

					$('.right span').eq(2).text($proqty)
	
				})
				//qty加减操作
				$('.right').on('click','.minus',function(){

					var $proqty = $('.right span').eq(2).text();
				
					$proqty--;
					if($proqty<=0){
						$('.right span').eq(2).text(0);
					}else{
						$('.right span').eq(2).text($proqty)
					}
					

				});

				//建立放大镜smallzoom
				$('<div/>').addClass('smallzoom').appendTo($('.originimg .zoom'));

				//建立放大区域bigzoom
				var $bigzoom = $('<div/>');
				//建立大图
				var $bigPic = $('<img/>')
				//获取小图
				var $minzoom = $('.zoom .minpic')
				//插入
				$bigzoom.appendTo($('.zoom'));
				$bigPic.appendTo($bigzoom);

				$bigzoom.addClass('bigzoom')
				action();
				function action(){
					//图片链接
					$bigPic[0].src = $minzoom.attr('src');

					$bigPic.attr({'width':$minzoom.outerWidth()*2,'height':$minzoom.outerHeight()*2})

					$('.originimg .zoom').on('mouseenter',function(e){

						e = e || window.event;
						var width = $('.zoom').outerWidth();
						var height = $('.zoom').outerHeight();

						$('.smallzoom').show();
						$('.bigzoom').show();
						$('.bigzoom').css({'left':($('.originimg').outerWidth()-200),
											'top':0,
											'width':$('.smallzoom').outerWidth()*2,
											'height':$('.smallzoom').outerHeight()*2,
											'overflow':'hidden'
										})
						//放大镜跟随

						$('.smallzoom')[0].style.top = e.pageY - $('.zoom').offset().top - $('.smallzoom')[0].offsetHeight/2 + 'px';
						
						$('.smallzoom')[0].style.left = e.pageX - $('.zoom').offset().left - $('.smallzoom')[0].offsetWidth/2 + 'px';
					})
					.on('mouseleave',function(){
						$('.smallzoom').hide();
						$('.bigzoom').hide();
					})

					$('.smallzoom').on('mousemove',function(e){

						var left = e.pageX - $('.zoom').offset().left - $('.smallzoom')[0].offsetWidth/2;
						// if($('.zoom').offset().top <= 0){
						// 	$('.zoom').offset().top = 0;
						// }
						var top = e.pageY - $('.zoom').offset().top - $('.smallzoom')[0].offsetHeight/2;

						//限制
						if(left<0){
							left = 0;
						}else if(left > $('.zoom').width()-$('.smallzoom').outerWidth()){
							left = $('.zoom').width()-$('.smallzoom').outerWidth()
						}

						if(top<0){
							top = 0;
						}else if(top > $('.zoom').height()-$('.smallzoom').outerHeight()){
							top = $('.zoom').height()-$('.smallzoom').outerHeight()
						}

						//放大镜移动
						$('.smallzoom')[0].style.left = left + 'px';
						$('.smallzoom')[0].style.top = top + 'px';

						//大图移动
						$bigPic[0].style.left = -left*2 + 'px'
						$bigPic[0].style.top = -top*2 + 'px';
					})		
				}
/***************************************切换图片************************/
				var otherImg = document.getElementsByClassName('imglist')[0].children;
				for(var i = 0;i<otherImg.length;i++){
					otherImg[0].style.border = '1px solid red';
					otherImg[i].onclick = function(){

						$('.minpic').attr('src',$(this).find('img').attr('src'));

						$(this).css('border','1px solid red').siblings().css('border','1px solid #ddd')

						action();
							
					}
				}

			}
			
		});
		
	})
})