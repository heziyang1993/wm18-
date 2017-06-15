require(['config'],function(){
	require(['jquery','cookie'],function($){
	
		var getCookie = $.cookie('goods');

		getCookie = getCookie ? JSON.parse(getCookie) : [];

		if(getCookie.length === 0 || getCookie === ''){

			$('.carlist').css({'text-align':'center','height':'40px'})

			$('.carlist')[0].innerHTML = '你还没有选中商品喔,返回主页';


		}

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
		let qty = 16;

		// 请求数据
		$.ajax({
			url:'../api/cargo.php',
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

				//购物车加的功能
				$('.cargoods').on('click','.plus',function(){
					for(var item of getCookie){

						if (item.guid === this.parentElement.parentElement.dataset.guid) {

							item.qty++;

							//qty不能为0
							
							if(item.qty >= res.total){
								item.qty = res.total
								alert('商品超出库存')
							}
							
							$.cookie('goods',JSON.stringify(getCookie),{path:'/'});

							//清空页面内容
							
							// this.previousElementSibling.innerHTML += 1;

							// //刷新页面
							location.reload();
							
							break;
						}
					}
					return false;

						
				})

			}

		});

		// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();
			$.ajax({
				url:'../api/cargo.php',
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

		//根据mysql数据生成html结构goodspath
		function showList(res){
			var idx = 0;
			let html = res.data.map(item=>{
				return `					
						<div class="goods"  data-guid="g${++idx}">
							<img class="goodsimg" src="${item.img_url}" alt="...">
							<div class="caption">
								<h5>${item.name}</h5>
								<p class="price">￥${item.price}</p>
								<a href="#" class="cargo"></a>
							</div>
						</div>
				`
			}).join('');
			$goodslist.html(html);
		}

	
/*******************点解追加购物按钮的cookie操作**************************/ 
			
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
				$.cookie('add_goods',JSON.stringify(getCookie),{expires:7,path:'/'});
				
				return false;

		})
/****************获取goods cookie,写入carlist,生成商品结构********************/
	
		_carlist()
		function _carlist(){

			//循环遍历json字符串,创建html结构
			
			let res = getCookie.map(function(item){
				return `					
						<ul class="cargoods" data-guid="${item.guid}">
							<li><input type="checkbox" class="selects"/></li>
							<li>
								<span><img class="cargoodsimg" src="${item.img}"></span>
								<h5>${item.name}</h5>
							</li>
							<li class="price">${item.price}</li>
							<li>
								<span class="minus">-</span>
								<span>${item.qty}</span>
								<span class="plus">+</span>
							</li>
							<li>￥${item.price.slice(1)*item.qty}</li>
							<li class="delete">&times;删除</li>
						</ul>
					`

			});

				
			if(getCookie !== '' && getCookie.length !== 0){
				$('.carlist').html(res);
			}
		
			
		}
/******************************删除当前商品**********************************/
		$('#cargo').on('click','.delete',function(){

			for(var item of getCookie){
				console.log(item)
				if (item.guid === this.parentElement.dataset.guid) {

					getCookie.splice(getCookie.indexOf(item),1)
					
					$.cookie('goods',JSON.stringify(getCookie),{path:'/'});

					//清空页面内容
					
					this.parentElement.innerHTML = '';

					//刷新页面
					
					location.reload();
					break;
				}
			}
			return false;

		})
/***********************清空购物车******************************************/
		$('#cargo').on('click','.clearCar',function(){

			$.cookie('goods','',{path:'/'});

			$('.carlist').html('');

			location.reload();

			return false;

		})
/*************************全选全部选&复制全选按钮**************************/		
		;(function(){
			$('.allSelect').clone(true).appendTo('.goodscontrol .firstLi');
			console.log($('.allSelect'))

			$('.allSelect').on('click',function(){
				
				$('.goodscontrol .firstLi input[type=checkbox]')[0].checked = this.checked;

				countTotal();
				
				//购物车有内容全选
				if($('.cargoods')){

					var selects = document.getElementsByClassName('selects');

					for(var i = 0;i<selects.length;i++){

						selects[i].checked = this.checked 
						
					}

				}
			
			});
		})();

/**********************同步勾选*******************************************/
		$('.goodscontrol .firstLi input[type=checkbox]').on('click',function(){
			$('.allSelect')[0].checked = this.checked ;
		});
/*************************计算操作***************************************/
		;(function(){
			//默认选中checkbox
			$('input:checkbox').attr('checked','checked');

			//单个商品选项selects点击
			$('.cargoods').on('click','.selects',function(){
				
				for(var i = 0;i<$('.selects').length;i++){

					if($('.selects').eq(i).prop("checked") === false){

						$('.allSelect').prop('checked',false)

					}
				}
				
			})


			//qty加减操作
			$('.cargoods').on('click','.minus',function(){

				for(var item of getCookie){

					if (item.guid === this.parentElement.parentElement.dataset.guid) {

						item.qty--;

						//qty不能为0
						
						if(item.qty <= 1){
							item.qty = 1;
						}
						
						$.cookie('goods',JSON.stringify(getCookie),{path:'/'});

						//清空页面内容
						
						// this.nextElementSibling.innerHTML -= 1;

						//刷新页面
						location.reload();
						
						break;
					}
				}
				return false;
			})

		})();
		
/************************************计算总价*************************************************/
		function countTotal(){
			//共有商品计算
			var totalQty = 0;
			var totalPrice = 0;
			for(var i = 0;i<$('.selects').length;i++){

				//获取当前总量
				var $currentQty = $('.selects').eq(i).closest('li').nextAll('li').children('span').eq(2).text();

				//获取当前总价
				var $currentTotal = $('.selects').eq(i).closest('li').nextAll('li').eq(3).text().slice(1);

				if($('.selects').eq(i).prop('checked')){

					totalQty += parseInt($currentQty);
					totalPrice += parseInt($currentTotal);
					//总数量计算
					$('.totalqty').text(totalQty);
					//计算总价
					$('.totalprice').text('￥' + totalPrice);

				}
				//全部都！checked，重置
				var checks = $(':checked').length;
				console.log(checks)
				if(checks === 0){
					console.log(111)
					//总数量计算
					$('.totalqty').text(0);
					//计算总价
					$('.totalprice').text('￥' + 0);
				}		
			}
		}


		//获取页面上全部checkbox的元素

		var $checked = $(':checkbox');
		console.log($checked.length)
		for(var i = 0;i<$checked.length;i++){

			$checked.eq(i).on('click',function(){
				countTotal();

			})
		}
		//自动运行计算总价
		countTotal();

	});
});

