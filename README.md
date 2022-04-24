# First Thought about Structure
This is a SPA, with same header,footer and different contents, so I need a header component and a footer component. For the contents, I will need a Search component, a reusable Card component, and a Pagination component.

App.js
|-Header
|-Content
|   |-Home
|   |   |-Search bar
|   |
|   |-Search Result
|   |   |-Cards
|   |   |-Pagination
|   |   
|   |-Item Detail
|
|-Footer

### How did you decide which technologies to use as part of your solution?
* For different page, I use "React Routor" to make the content navigate to Home page, Search result page and Item detail page.
* React Hooks manipulate states/props passing and changing.
* Using "axios" to fetch data.
* Material UI for layout.

### Are there any improvements you could make to your submission?
* I think I can make the pagination fetch function better. During this project, I spent most of time at learning how to create pagination, because this is my first time implement pafination.
* For any other parts, might be the UI design and efficiency improvement.

### What would you do differently if you were allocated more time?
* First, I want to make pagination run better, cause I know there is something needed to be fix.(next and previous buttons are not work well now.)
* Second, make my code more clean, and make details better.
* Third, make UI better, there are still lots thing I can improve.
* Finally, maybe add a navigation for better user experience and add link to footages of movie in item detail page.