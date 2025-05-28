__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 148,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 77,
      "end": 96,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 95,
        "value": "./App.css",
        "raw": "\"./App.css\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 148,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 133,
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 136,
            "end": 147,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 136,
              "end": 141,
              "name": {
                "type": "JSXIdentifier",
                "start": 137,
                "end": 140,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 141,
              "end": 147,
              "name": {
                "type": "JSXIdentifier",
                "start": 143,
                "end": 146,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
