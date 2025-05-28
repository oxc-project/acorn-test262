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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 90,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 118,
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
                  "value": "h1",
                  "raw": "\"h1\""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "value": "h1",
            "raw": "\"h1\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 156,
      "expression": {
        "type": "JSXElement",
        "start": 120,
        "end": 156,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 120,
          "end": 131,
          "name": {
            "type": "JSXIdentifier",
            "start": 121,
            "end": 130,
            "name": "CustomTag"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 131,
            "end": 144,
            "value": " Hello World ",
            "raw": " Hello World "
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
