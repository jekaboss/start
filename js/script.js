document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.form-button');
	const loader = document.getElementById('loader');

	links.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault(); // Остановить стандартное поведение ссылки
			loader.style.display = 'flex'; // Показать анимацию загрузки
			const href = this.getAttribute('href');

			// Задержка для демонстрации загрузки (можно убрать, если не нужно)
			setTimeout(function () {
				window.location.href = href; // Перейти на новую страницу
			}, 2000);
		});
	});
});
// ==========================================================
function updatePhoneCode() {
	const select = document.getElementById("country-select");
	const flag = document.getElementById("flag");
	const selectedOption = select.options[select.selectedIndex];
	const countryCode = selectedOption.getAttribute("data-code");

	// Встановлення прапора відповідної країни
	if (selectedOption.value) {
		flag.src = `https://flagcdn.com/${selectedOption.value.toLowerCase()}.svg`;
		flag.alt = `${selectedOption.text} прапор`;

		// Тут ви можете відобразити телефонний код у полі введення, якщо потрібно
		document.getElementById("phone").value = countryCode + " ";
	} else {
		flag.src = "";
	}
}
