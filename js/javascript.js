$(document).ready(function(){

		$('.category-list .category_item[category="all"]').addClass('ct_item-active');

		$('.category_item').click(function(){

			//filtrando produtos

			var catProduct = $(this).attr('category');
			console.log(catProduct);


			$('.category_item').removeClass('ct_item-active');
			$(this).addClass('ct_item-active');

			//ocultando produtos

			$('.product-item').css('transform', 'scale(0)');

			function hideProduct(){

				$('.product-item').hide();

			}setTimeout(hideProduct,400);

			// mostrando produtos

			function showProduct(){

				$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');

				$('.product-item[category="'+catProduct+'"]').show();

			}setTimeout(showProduct,400);
		});

		//mostrando todos os produtos

		$('.category_item[category="all"]').click(function(){

			function showAll(){

			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');

			}setTimeout(showAll,400);


		});

});