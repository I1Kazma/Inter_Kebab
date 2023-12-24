ymaps.ready(function () {

    // Поиск координатов: https://yandex.ru/map-constructor/location-tool/

    var myMap = new ymaps.Map('map', {
        // Задаем центр карты
        center: [54.712631, 20.510977],
        // И масштаб
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );



    var createPlacemark = function (markerId, coord_1, coord_2, markerImage, name, addr) {

        markerId = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [+coord_1, +coord_2]
            },
            properties: {
                hintContent: name,
                balloonContent: addr
            }
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: markerImage,
            // Размеры метки.
            iconImageSize: [46, 46],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myMap.geoObjects.add(markerId);
    };

    // Добавление маркеров на карту
    createPlacemark('myPlacemark_1', '54.736384', '20.525229', './img/map-marker.svg', 'Inter-Kebab, Советский пр-т 159', 'Inter-Kebab, Советский пр-т 159');
    createPlacemark('myPlacemark_2', '54.681461', '20.482837', './img/map-marker.svg', 'Inter-Kebab, Киевская улица, 71А', 'Inter-Kebab, Киевская улица, 71А');
    createPlacemark('myPlacemark_3', '54.717792', '20.521105', './img/map-marker.svg', 'Inter-Kebab, Клиническая 77', 'Inter-Kebab, Клиническая 77');
    createPlacemark('myPlacemark_4', '54.742699', '20.465401', './img/map-marker.svg', 'Inter-Kebab, Советский пр-т 159', 'Inter-Kebab, Советский пр-т 159');

});