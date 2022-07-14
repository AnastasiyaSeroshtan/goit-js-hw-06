# goit-js-hw-06

Задание 1 В HTML есть список категорий ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Для
каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
(тега <h2>) и количество элементов в категории (всех вложенных в него <li>). В результате, в консоли
будут выведены такие сообщения.

Number of categories: 3

Category: Animals Elements: 4

Category: Products Elements: 3

Category: Technologies Elements: 5

====================================================================================

Задание 2 В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments", ]; Напиши
скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement(). Добавит
название ингредиента как его текстовое содержимое. Добавит элементу класс item. После чего вставит
все <li> за одну операцию в список ul#ingredients.

====================================================================================

Задание 3 Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список
ul.gallery.

<ul class="gallery"></ul>
Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки. Добавь минимальное
оформление галереи флексбоксами или гридами через CSS классы. const images = [ { url:
"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260", alt: "White
and Black Long Fur Cat", }, { url:
"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260", alt: "Orange
and White Koi Fish Near Yellow Koi Fish", }, { url:
"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260", alt: "Group
of Horses Running", }, ];
