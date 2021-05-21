# Journal Data Format

The journal data format defines the appearance of journal entries in the game.

## Journal Data Format

The journal is represented by an array of journal entries. The order of the journal entires defines the order they appear in the tables of contents.

## Journal Entry Data Format

* `title`: Title of the journal entry.
* `category`: Category of the journal entry (i.e. `"Animals"`, `"Characteristics"`).
* `image`: Image of the journal entry. All journal entry images are in the `/marinerescue-frontend/public/sprites/` directory with `journal-` prefix.
* `infoboxFacts`: Array of strings defining the infobox facts to appear on the left page of the journal entry (i.e. `"Species: Humpback Whale"`). For readability, this should be limited to 3 infobox facts.
* `funFacts`: Array of strings defining the bullet-point facts to appear on the right page of the journal entry. For readability, this should be limited to 4 funfacts.
