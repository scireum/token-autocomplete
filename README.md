# Vanilla JS Token Autocomplete Input

Small demo: [click here](https://sabieber.github.io/token-autocomplete/)

## Parameters


| Name | Description | Default |
|---|---|---|
| selector | A selector query string pointing to the div the field should be rendered in | '' |
| name | The name that should be used for the hidden input and when sending the selection as form parameters | '' |
| noMatchesText | An optional text that will be displayed when no suggestions were found for the text input | null |
| placeholderText | An optional text that will be displayed when no text was entered in the input area | 'enter some text' |
| initialTokens | An optional array of strings for the initial tokens when initial option elements arent provided | null |
| initialSuggestions | An optional array of strings for the initial autocomplete suggestions when initial option elements arent provided | null |
| minCharactersForSuggestion | The minimum number of letters the user has to enter after which autocompletion is triggered | 1 |
| selectMode | One of the predefined select modes, defining the behaviour of the token field (SINGLE, MULTI, SEARCH) | SelectModes.MULTI |
| suggestionsUri | An optional URI which when defined is called to provide suggestions for the text entered by the user | '' |
| suggestionsUriBuilder | A function which is called before sending the suggestions request so the URI can be altered/updated. | (query) -> return this.suggestionsUri + '?query=' + query |
| suggestionRenderer | Function which creates the DOM element for each displayed suggestion. | TokenAutocomplete.Autocomplete.defaultRenderer |
| allowDuplicates | Allow duplicate tokens in the list | true |
| searchWithin | Search typed input at start (false) or somewhere within the suggestion (true) | false |
| tokenInputValidator | Function that validates the input text - when the function returns true, the token can be added to the token list | |
| tokenAddValidator | Function that validates the input text - when the function returns true, the token will be added to the token list | |

The difference between ```tokenInputValidator``` and ```tokenAddValidator``` is, that
the input validator is called when the input is still visible in the suggestion
text field - on error the field is not cleared and an error message will be
displayed (e.g. validation of a specific format of input).
The add validator is called when the token should be added to the
list of tokens. When th validator returns false, the token will be
ignored without any further notice.
