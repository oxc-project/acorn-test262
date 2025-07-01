__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "CustomTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": "h1",
            "raw": "\"h1\"",
            "start": 16,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 23,
            "end": 32
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 22,
          "end": 33
        },
        "children": [
          {
            "type": "JSXText",
            "value": " Hello World ",
            "raw": " Hello World ",
            "start": 33,
            "end": 46
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 48,
            "end": 57
          },
          "start": 46,
          "end": 58
        },
        "start": 22,
        "end": 58
      },
      "directive": null,
      "start": 22,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
