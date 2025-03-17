__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 149,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 133,
            "name": "tag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 136,
            "end": 147,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 136,
              "end": 141,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 137,
                "end": 140,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
