# Vanilla JS Token Autocomplete Input

Small demo: [click here](https://sabieber.github.io/token-autocomplete/)

## Parameters

| Name                              | Description                                                                                                              | Default                                                   |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| selector                          | A selector query string pointing to the div the field should be rendered in                                              | ''                                                        |
| name                              | The name that should be used for the hidden input and when sending the selection as form parameters                      | ''                                                        |
| noMatchesText                     | An optional text that will be displayed when no suggestions were found for the text input                                | null                                                      |
| noMatchesCustomEntriesDescription | An optional text that will be displayed when no suggestions were found for the text input and custom entries are allowed | null                                                      |
| placeholderText                   | An optional text that will be displayed when no text was entered in the input area                                       | 'enter some text'                                         |
| initialTokens                     | An optional array of strings for the initial tokens when initial option elements arent provided                          | null                                                      |
| initialSuggestions                | An optional array of strings for the initial autocomplete suggestions when initial option elements arent provided        | null                                                      |
| tokenRenderer                     | Function which creates custom DOM elements for each displayed token.                                                     | TokenAutocomplete.MultiSelect.defaultRenderer             |
| minCharactersForSuggestion        | The minimum number of letters the user has to enter after which autocompletion is triggered                              | 1                                                         |
| selectMode                        | One of the predefined select modes, defining the behaviour of the token field (SINGLE, MULTI, SEARCH)                    | SelectModes.MULTI                                         |
| suggestionsUri                    | An optional URI which when defined is called to provide suggestions for the text entered by the user                     | ''                                                        |
| suggestionsUriBuilder             | A function which is called before sending the suggestions request so the URI can be altered/updated.                     | (query) -> return this.suggestionsUri + '?query=' + query |
| suggestionRenderer                | Function which creates the DOM element for each displayed suggestion.                                                    | TokenAutocomplete.Autocomplete.defaultRenderer            |
| allowCustomEntries                | If true, the user can enter custom values which are not part of the suggestions.                                         | true                                                      |
| readonly                          | If true, the user can not enter any text or select any suggestions.                                                      | false                                                     |
| optional                          | If true, the user can clear the field and no value will be submitted.                                                    | false                                                     |
| showClearButton                   | If true, the user can clear all tokens and the input area by using a clear button (only selectMode MULTI and SEARCH).    | false                                                     |
| enableTabulator                   | If true, the user can select a suggestion by pressing the tab key.                                                       | true                                                      |
| showSuggestionsOnFocus            | If true, the suggestions are shown when the input field receives focus.                                                  | true                                                      |
| requestDelay                      | The delay in milliseconds before a request for suggestions is sent after the user entered text                           | 200                                                       |

## Events

The TokenAutocomplete instance will emit the following events on the DOM element specified by the `selector` parameter:

### query-changed

This event is emitted when the text in the input field was changed externally (not by the user directly).
The event details contain the current query:

| Name  | Type   | Description                        |
|-------|--------|------------------------------------|
| query | string | The current query entered by user. |

### tokens-changed

This event is emitted when the tokens in the field change (non-silently).
In a multi-select field, this happens when a token is added or removed.
In a single-select field, this happens when the selected token changes.
The event details contain the current tokens and what was changed:

| Name    | Type                          | Description                                         |
|---------|-------------------------------|-----------------------------------------------------|
| tokens  | Array<Token> or Token or null | The current tokens in the field after the operation |
| added   | Token or null                 | The token that was added                            |
| removed | Token or null                 | The token that was removed                          |

### suggestion-selected

This event is emitted when a suggestion is selected by the user. The event details contain the selected suggestion:

| Name  | Type           | Description                                  |
|-------|----------------|----------------------------------------------|
| value | string         | The raw value of the selected suggestion     |
| text  | string         | The display label of the selected suggestion |
| type  | string or null | The type of the selected suggestion          |

### input-cleared

This event is emitted when the whole input is cleared by the user using the clear button.

### input-ignored

This event is emitted when the user leaves the field with left-over text that can't be converted to a custom token or suggestion.
In this case, the text is cleared from the input field and no token is created.

## Build / Development

Install typescript:

```
brew install typescript
```

Change .ts file as necessary.

Run TypeScript build in the main project directory:

```
tsc
```
