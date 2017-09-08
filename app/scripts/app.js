import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

function rangeSlider(id, onDrag) {

	const range = document.getElementById(id);
	const dragger = range.children[0];
	const draggerWidth = 17;
	let down = false;
	let rangeWidth;
	let rangeLeft;

	dragger.style.width = draggerWidth + 'px';
	dragger.style.left = -draggerWidth + 380 + 'px';
	dragger.style.marginLeft = (draggerWidth / 2) + 'px';

	function updateDragger(e) {
		if (down && e.pageX >= rangeLeft && e.pageX <= (rangeLeft + rangeWidth)) {
			dragger.style.left = e.pageX - rangeLeft - draggerWidth + 'px';
			if (typeof onDrag === 'function') {
				onDrag(Math.round(((e.pageX - rangeLeft) / rangeWidth) * 100));
			}
		}
	}

	range.addEventListener('mousedown', function (e) {
		rangeWidth = this.offsetWidth;
		rangeLeft = this.offsetLeft;
		down = true;
		updateDragger(e);
		return false;
	});

	document.addEventListener('mousemove', function (e) {
		updateDragger(e);
	});

	document.addEventListener('mouseup', function () {
		down = false;
	});
}

rangeSlider('js_skill_map');
