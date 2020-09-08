var slider = document.getElementById('slider');
var select = document.getElementById('input-number');
var select2 = document.getElementById('input-number2');


noUiSlider.create(slider, {
    start: [500, 8000],
    connect: true,
    range: {
        'min': 500,
        'max': 8000
    }
});

for (var i = -20; i <= 40; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    select.appendChild(option);
}

slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
        select.value = Math.round(value);
    } else {
        select2.value = Math.round(value);
    }
});

select.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
});

select2.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});