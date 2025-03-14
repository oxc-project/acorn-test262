file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
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
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "decorators": [],
            "name": "div",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 92,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 126,
      "expression": {
        "type": "JSXElement",
        "start": 112,
        "end": 125,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 112,
          "end": 125,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 117,
              "end": 122,
              "name": {
                "type": "JSXIdentifier",
                "start": 117,
                "end": 118,
                "name": "n"
              },
              "value": {
                "type": "Literal",
                "start": 119,
                "end": 122,
                "raw": "'x'",
                "value": "x"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 113,
            "end": 116,
            "name": "div"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script"
}
```
