__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 24,
        "end": 35,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 24,
          "end": 35,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 29,
              "end": 33,
              "name": {
                "type": "JSXIdentifier",
                "start": 29,
                "end": 33,
                "name": "data"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 25,
            "end": 28,
            "name": "foo"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
