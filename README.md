# Welcome to the Serenade Coding Challenge

Contained within is code for a Next.js application that can manage a person's To Do list. Currently, the application has the following functionality implemented:

-  Displaying a list of todo items
-  Adding new todo items
-  Marking items as done / undone
-  Backend functionality for deleting tasks is implemented, but there’s no frontend button for it.

To be successful in completing this exercise, you must finish the **three tasks** below.

### Task 1 : Handling loading states

When you click on the Add button to add a new card, or on the checkbox to mark a task as done / not done, the backend call gets fired but there’s no feedback to the user until it comes back successfully.

We would like to implement a new loading state, i.e. during the backend request flight time the UI will show we are doing some work. We will do this by disabling the related element (add button, or checkbox)

#### Requirements

-   When a checkbox is clicked, it will be disabled until the backend updates the task done / not done status, and then it will be reenabled again.
-   Further clicks during disabled state will be ignored.


### Task 2 : Adding a delete button

The app allows to add cards, but we can’t delete them yet. The endpoint for it is ready ('/api/delete'), now we just need to add a button for it.

#### Requirements

-   A new button should show somewhere for each Task Card (don’t worry about the styling)
-   When clicked it should make a POST call to the `/api/delete` API endpoint, with a JSON body like `{taskId: "the task id"}`
-   The list of cards should be updated so it does not display the deleted task anymore

### Task 3 : Pagination

The app always displays all the tasks in the database, but we want to start paginating. The goal is to initially display only 5 cards, and show a load more button.

#### Requirements

-   Display a load more button at the end of the card list (don’t worry too much about styling)
    -   Nice to have: The button only shows if there are actually more tasks to load
-   When the button is clicked, the next page of up to 5 more cards get loaded into the list