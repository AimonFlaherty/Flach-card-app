# Flach-card-app
A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.
##
## Learning Objectives

- Installing packages via NPM
- Running tests from the command line
- Writing React function components
- Creating routes, including nested routes, using React Router
- Using hooks like useState(), useParams(), and useHistory()
- Debugging React code through console output and using the VS Code debugger

##
## Skills Used

- React.js
- Javascript
- HTML / JSX
- CSS
- Bootstrap
- React Router
- React Hooks (useState, useEffect, useParam, useHistory)

##
## Tasks Completed

```
Home: (/) Shows a list of decks with options to create, study, view, or delete a deck
```
```
Study: (/decks/:deckId/study)  Allows the user to study the cards from a specified deck
```
```
Create Deck: (/decks/new) Allows the user to create a new deck
```
```
Deck: (/decks/:deckId) Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck
```
```
Edit Deck: (/decks/:deckId/edit) Allows the user to modify information on an existing deck
```
```
Add Card: (/decks/:deckId/cards/new) Allows the user to add a new card to an existing deck
```
```
Edit Card: (/decks/:deckId/cards/:cardId/edit) Allows the user to modify information on an existing card
```
##
## Data Examples

Decks
```
{
  "id": 1,
  "name": "Rendering in React",
  "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. "
}
```

Cards
```
{
  "id": 1,
  "front": "Differentiate between Real DOM and Virtual DOM.",
  "back": "Virtual DOM updates are faster but do not directly update the HTML",
  "deckId": 1
}
```

## 
