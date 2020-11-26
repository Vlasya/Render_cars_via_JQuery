$.ajax({
	type: 'GET',
	url: 'https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json',
	success: function (data) {
		// checkColor(data)
		changeImage(data)
		changeActiveClass(data)
	}
});

// Находим блок с классом active и добавляем ему картинку
function changeImage(dataA) {
	let dataObj = JSON.parse(dataA)
	let activeColor = $('.changeColor').find('.active').attr('id');

	for (let key in dataObj) {
		if (key === activeColor) {
			$('.carImage').html(`<img src="${dataObj[key]}" alt="car" class="car">`)
		}
	}
}

// добавляем класс active на кликнутый блок и убираем уже сусествующий + вызов ф-ции смены картинки
function changeActiveClass(data) {
	$('.color').click(function (e) {
		$('.changeColor').find('.active').removeClass('active')
		$(this).toggleClass("active")
		changeImage(data)
	})
}