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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "CustomTag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 20,
            "value": "h1",
            "raw": "\"h1\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 58,
      "expression": {
        "type": "JSXElement",
        "start": 22,
        "end": 58,
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
        },
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
        "children": [
          {
            "type": "JSXText",
            "start": 33,
            "end": 46,
            "value": " Hello World ",
            "raw": " Hello World "
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
