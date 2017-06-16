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

		//获取表头小购物车的text
		let qtys = parseInt($('.cargoodsqty').text());
/***************商品数据请求与分页***********************/	
		let $goodslist = $('.goodslist');

		let pageNo = 1;

		let qty = 12;
		console.log($('.active')[0])
		// 请求数据
		$.ajax({
			url:'../api/goods.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				showList(res);

				// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str + `<li class="totalPage">共${i-1}页</li>
						<label>跳转到第<input type="text" class="goPage"/></label>
						<button class="btnPage">跳转</button>
					`);
			}

		});


		// 点击分页切换
		$('.pagination').on('click','a',function(){

			$(this).parent().addClass('active').siblings().removeClass('active');

			pageNo = $(this).text();
			$.ajax({
				url:'../api/goods.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					showList(res);

				}
			});

			return false;
		});


		//点击跳转指定页面
		
		$('.pagination').on('click','.btnPage',function(){
			
			pageNo = $('.goPage').val();

			if(!pageNo){
				
				return;

			}else if(pageNo){
						
				//页数控制
				//要转换成数字类型比大小,然后赋予字符串的值以传到后台
				if(parseInt(pageNo) > parseInt($('.totalPage').text().slice(1,-1))){

					pageNo =$('.totalPage').text().slice(1,-1);

					alert('此页面不存在,已为您跳到最后一页');
				}

				$.ajax({
					url:'../api/goods.php',
					dataType:'json',
					data:{
						page:pageNo,
						qty:qty
					},
					success:function(res){
						showList(res);
					}
				})
			
				console.log(pageNo-1)
				$('.pagination li').eq(pageNo-1).addClass('active').siblings().removeClass('active');
				//清零操作
				$('.goPage').val('');
			}
			
			return false;

		})



		function showList(res){
			var idx = 0;
			let html = res.data.map(item=>{
				return `					
						<div class="goods"   data-guid="g${++idx}">
							<img class="goodsimg" src="${item.img_url}" alt="...">
							<div class="caption">
								<h5>${item.name}</h5>
								<p class="price">￥${item.price}</p>
								<span class="cargo"></span>
							</div>
						</div>
				`
			}).join('');
			$goodslist.html(html);
		}
	/*******************cookie**************/ 
		$('.goodslist').on('click','.cargo',function(){

			//获取cookie
			
			//获取data-guid属性
			
			var guid = this.parentElement.parentElement.dataset.guid;

			//判断商品是否存在
			
			for(var i = 0;i<getCookie.length;i++){
				if(getCookie[i].guid === guid){

					getCookie[i].qty++;
					console.log(getCookie[i])
					break;
				}
			}
			if(i === getCookie.length){
				var goods = {
					name:$(this).prevAll().eq(1).text(),
					price:$(this).prev().text(),
					img:$('.goodsimg').attr('src'),
					qty:1,
					guid:guid
				}
				getCookie.push(goods);

			}
			
			$.cookie('goods',JSON.stringify(getCookie),{expires:7,path:'/'});

			$('.cargoodsqty').text(++qtys);
			// location.reload();
			 
		 	//飞入效果				

			var cloneImg = $(this).closest('div').prev('img').clone(true);
			
			$(this).parents('.goods').append(cloneImg);

			$(cloneImg).css({'position':'absolute',zIndex:10,top:0,left:0});

			var left = $('.cargoodsqty').offset().left - $(this).parents('.goods').offset().left;

			var top = $('.cargoodsqty').offset().top - $(this).parents('.goods').offset().top;

			$(cloneImg).animate({left:left,top:top,width:0,height:0},function(){
				$(cloneImg).remove()
			})
				
			return false;

		})

/**************************链接到详情页**************************************/
		$('.goodslist').on('click','.goods',function(){
			

			location.href = '../html/goodsdetail01.html?id='+$(this).data('guid').slice(1);


				
		})

	});

	
});