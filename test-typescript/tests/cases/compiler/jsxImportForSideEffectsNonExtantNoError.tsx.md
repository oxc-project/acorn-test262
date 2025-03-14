jsxImportForSideEffectsNonExtantNoError.tsx
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 77,
      "end": 96,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 95,
        "raw": "\"./App.css\"",
        "value": "./App.css"
      },
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 133,
            "decorators": [],
            "name": "tag",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 136,
            "end": 147,
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
            },
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
