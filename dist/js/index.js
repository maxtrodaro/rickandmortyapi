// Carousel in the project block
const characterApi = () => {
    $.get("https://rickandmortyapi.com/api/character", function (data) {
        const _list = $('.e-content__list');
        const response = data.results;
        $.each(response, function (index, value) {
            _list.append(`
                <li class="e-content__list__item">
                    <img class="e-content__list__item__img" src="${value.image}" />
                    <div class="e-content__list__item__info">
                        <h1 class="e-content__list__item__info__name">${value.name}</h1>
                        <p class="e-content__list__item__info__subinfo">Species: ${value.species}</p>
                        <p class="e-content__list__item__info__subinfo">Status: ${value.status}</p>
                        <p class="e-content__list__item__info__subinfo">Gender: ${value.gender}</p>
                    </div>
                </li>
            `)
        })
    });
}

window.addEventListener('DOMContentLoaded', function () {
    characterApi();
});