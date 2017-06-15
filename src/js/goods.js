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


/***************商品数据请求与分页***********************/	
		let $goodslist = $('.goodslist');

		let pageNo = 1;

		let qty = 12;

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

				$('.pagination').html(page_str);
			}
		});

		// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
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
			location.reload();
			return false;

		})

/****************************************************************/
		$('.goodslist').on('click','.goods',function(){
			

			location.href = '../html/goodsdetail01.html?id='+$(this).data('guid').slice(1);


				
		})

	});

	
});