var google;

function initMap() {
    var mapOptions = {
        center: {lat: 49.8388565, lng: 24.031138},  // Центр карти
        zoom: 14,  // Рівень збільшення
        scrollwheel: false
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: {lat: 49.8388565, lng: 24.031138},  // Місце маркера
        map: map,
        title: 'EVA'  // Підказка для маркера
    });
}

// Завантаження карти при завантаженні сторінки
google.maps.event.addDomListener(window, 'load', initMap);

