__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 86,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 84,
            "body": {
              "type": "TSInterfaceBody",
              "start": 82,
              "end": 84,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 62,
                "end": 81,
                "expression": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 68,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 68,
                  "end": 81,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 77,
                      "end": 80
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 94,
      "expression": {
        "type": "JSXElement",
        "start": 88,
        "end": 93,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 88,
          "end": 93,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 89,
            "end": 90,
            "name": "a"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
