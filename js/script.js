'use strict'

function initFilterHandler()
{
    /* 
    *   Алгоритм
    *
    *   1. Начало.
    *   2. Получаем элементы временных этапов.
    *   3. Проверка условия (навешиваем слушатель событий на изменение значения у select и ожидаем ео изменения): если значение изменилось.
    *       3.1. Да: Получаем значение секции (всемирная история или отечественная).
    *           3.1.1 Проверка условия (если значение равно всемирной истории):
    *               3.1.1.1. Да: показываем выбор этапа всемирной истории, скрываем отечественную (устанавливаем класс модификатора на элемент)
    *               3.1.1.2. Нет: показываем выбор этапа отечественной истории, скрываем всемирную (устанавливаем класс модификатора на элемент)
    *       3.2. Нет: Конец
    *   4. Конец
    */

    const worldStagesFilter = document.getElementById('world-stages');
    const russianStagesFilter = document.getElementById('russian-stages');

    document.getElementById('section').addEventListener('change', (event) => {
        const value = event.target.value;

        worldStagesFilter.classList.add('hidden');
        russianStagesFilter.classList.add('hidden');
        if (value === 'world')
        {
            worldStagesFilter.classList.remove('hidden');
        }
        else if (value === 'russia')
        {
            russianStagesFilter.classList.remove('hidden');
        }
    });

    document.getElementById('clear-filters-button').addEventListener('click', (event) => {
        if (!worldStagesFilter.classList.contains('hidden'))
        {
            worldStagesFilter.value = 'all';
        }
        else if (!russianStagesFilter.classList.contains('hidden'))
        {
            russianStagesFilter.value = 'all';
        }
    });
}

function appendOptionsToSelect(filterElement, options)
{
    options.forEach(option => {
        const listItem = document.createElement('option');
        listItem.value = option[0];
        listItem.text = option[1];
        listItem.classList.add(...option[2]);

        filterElement.appendChild(listItem);
    });
}

function initFilterOptions()
{
    appendOptionsToSelect(document.getElementById('world-stages'), [
        ['all', 'Все', ['main__world-stages-option', 'text_black']],
        ['primitive-socie', 'Первобытное общество', ['main__world-stages-option', 'text_black']],
        ['ancient-world', 'Древний мир', ['main__world-stages-option', 'text_black']],
        ['middle-age', 'Средние века', ['main__world-stages-option', 'text_black']],
        ['new-age', 'Новое время', ['main__world-stages-option', 'text_black']],
        ['modern-age', 'Новейшее время', ['main__world-stages-option', 'text_black']],
    ]);

    appendOptionsToSelect(document.getElementById('russian-stages'), [
        ['all', 'Все', ['main__world-stages-option', 'text_black']],
        ['ancient-russian-state', 'Древнерусское государство', ['main__world-stages-option', 'text_black']],
        ['feudal-fragmentation', 'Период феодальной раздробленности', ['main__world-stages-option', 'text_black']],
        ['centralized-state', 'Образование централизированного русккого государства', ['main__world-stages-option', 'text_black']],
        ['russian-empire', 'Российская империя', ['main__world-stages-option', 'text_black']],
        ['soviet-union', 'Советсвикй период', ['main__world-stages-option', 'text_black']],
        ['russian-federation', 'Российская федерация', ['main__world-stages-option', 'text_black']],
    ]);
}

document.addEventListener("DOMContentLoaded", () => {
    initFilterHandler();
    initFilterOptions();
});