__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 90,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 90,
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
            "end": 88,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 85,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "div",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    }
                  }
                }
              ]
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
      "start": 92,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 111,
            "decorators": [],
            "name": "CustomTag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 111,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 107,
                "end": 111,
                "literal": {
                  "type": "Literal",
                  "start": 107,
                  "end": 111,
                  "raw": "\"h1\"",
                  "value": "h1"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 118,
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
      "start": 120,
      "end": 156,
      "expression": {
        "type": "JSXElement",
        "start": 120,
        "end": 156,
        "children": [
          {
            "type": "JSXText",
            "start": 131,
            "end": 144,
            "raw": " Hello World ",
            "value": " Hello World "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 144,
          "end": 156,
          "name": {
            "type": "JSXIdentifier",
            "start": 146,
            "end": 155,
            "name": "CustomTag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 120,
          "end": 131,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 121,
            "end": 130,
            "name": "CustomTag"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
