0) юзать ui-router, контролер ОДИН на роут
1) контроллер не должен заботиться о рендеринге вида модели - это делает директива https://www.youtube.com/watch?v=pai1ZdFI2dg
2) контроллер - является связующим звеном между: моделю, состящую из данных приложения и функций, которые взаимодействуют с ними, и видом
который представляет эти данные пользователю
3) Если проблемы после минификации, надо пробовать использовать две вещи
	1) gulp-ng-annotate
	2) gulp-angular-filesort

4) http://www.slideshare.net/dragosrusu/angularjs-overcoming-performance-issues-limits смотрим доклад по производительности
5) http://stepansuvorov.com/blog/2014/12/angularjs-mistakes/ - частые ошибки


Архитектура:
1) Контролеры не как модели данных или сервисы http://toddmotto.com/rethinking-angular-js-controllers/ а как именно контролеры - агрегируют методы работы над данными из сервисов, в них ничего не хранится и они ни с чем не работают важным или повторяющимся - повторяющаяющуюся логику выносимв utils сервисs, работа с бэкендом и хранение информации тоже только в сервисах. Контролеры это агрегаторы данных из сервисов для отображения и больше ничего.
2) бизнес логика в сервисах которые инжектятся в контролеры, в сервисы с бизнеслогикой могут инжектится другие сервисы например хранения данных или доступ к бэкенду(парсинг)
3) Директивы желательно только! с изолированными скопами https://www.youtube.com/watch?v=RbM4g48jsvE&index=16&list=PLIcAMDxr6tpqXzsd4AO0HehPCQtIf4TgP

Стили:
1) контролеры, директивы, сервисы, фабрики - описываем как функции, а регистрация по имени этой функции, после описания этой функции
2) иньекция через массивы имен, для минификации
3) контролеры as синтаксис! https://www.youtube.com/watch?v=aMQF_uS1gIA, стараемся использовать скоуп как можно реже
4) используем фильтры везде и всегда для форматирования, никокого форматирования в контролерах
5) ng-bind

Проект:
1) групировка папок по функциональности как в "“MVC” структура директорий проекта" http://stepansuvorov.com/blog/2014/12/angularjs-mistakes/
2) используем https://www.youtube.com/watch?v=i-dl9K_payw моки для всех данных на бэкенде, пишем сразу не ленимся
3) не юзать ангулярные встроенные директивы по минимуму (типа нг-рипит), так как они создают свой не изолированный скоп, лучше не юзать вообще
4) используем https://github.com/blndspt/ngPerformance чтоб следить за скоупами, вотчерами и длительностью дайжест цикла

Желательно:
1) https://www.youtube.com/watch?v=Ij2VWxpnNPo&index=13 кешируем шаблоны можно не со старта проекта
2) ng-cloak
3) после старта проекта использовать плагин к гулпу чтобы построить граф зависимостей модулей в ангуляре
4) минимум контроллеров, много директив, скоуп изолированный, где надо - кастомные директивы для логики (if repeat и тд).
Сервисы покрывай тестами, избегай сложных условий в темплейтах.

- Angular (1.4.x)
- SASS
- Bootstrap
- ui-bootstrap
- ui-router
- Node (for development/compilation)
- NPM/Bower (package management)
- Gulp

We’re using bootstrap and ui-bootstrap to unify the UI code to ensure a standardized version of the directives going forward with easily upgradable bower_components in the future. Time is of the essence but this is a step that we’ve agreed upon in conversations for future maintainability. We’re unsure of what this will mean for the existing UI components itself. We have a UX consultant working on suggestions for UM screens and our hope is to utilize those suggestions during the refactor to compose a unified product. That direction is unclear at this very moment, so we’ll start with basic bootstrap structures at the beginning. This makes using SASS absolutely essential so that we can define (or use existing) bootstrap variables to help define the theming as we go.
Node is necessary to run gulp on every dev machine. During development, gulp watchers will compile/update changes in the browser. It will eventually be used in build automation on the server once we get to that point as well.
We had a discussion on the JS syntax (ES5, ES6, typescript) and decided as a team to stick with ES5. This is due to many factors, but a lot of it came down to familiarity and not getting used to a new syntax with tight deadlines looming. We are defining a styleguide (currently looking at https://github.com/johnpapa/angular-styleguide w/ some additions) to help with structuring our code to help with Angular2.0 transitioning in the future which will include controllerAs, bindToController syntax, etc. We’ll also be defining a SASS styleguide shortly as well.