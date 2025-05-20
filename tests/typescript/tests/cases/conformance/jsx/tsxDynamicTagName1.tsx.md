__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "CustomTag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 20,
            "raw": "\"h1\"",
            "value": "h1"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 58,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 22,
        "end": 58,
        "children": [
          {
            "type": "JSXText",
            "start": 33,
            "end": 46,
            "raw": " Hello World ",
            "value": " Hello World "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 46,
          "end": 58,
          "name": {
            "type": "JSXIdentifier",
            "start": 48,
            "end": 57,
            "name": "CustomTag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 22,
          "end": 33,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 23,
            "end": 32,
            "name": "CustomTag"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
