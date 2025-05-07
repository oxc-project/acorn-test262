__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 100,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 100,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 98,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 98,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 85,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
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
                },
                {
                  "type": "TSPropertySignature",
                  "start": 88,
                  "end": 95,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 90,
                    "decorators": [],
                    "name": "h1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 92,
                      "end": 95
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 121,
            "decorators": [],
            "name": "CustomTag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 121,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 117,
                "end": 121,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 121,
                  "raw": "\"h1\"",
                  "value": "h1",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 124,
            "end": 128,
            "raw": "\"h1\"",
            "value": "h1",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 130,
        "end": 166,
        "children": [
          {
            "type": "JSXText",
            "start": 141,
            "end": 154,
            "raw": " Hello World ",
            "value": " Hello World "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 154,
          "end": 166,
          "name": {
            "type": "JSXIdentifier",
            "start": 156,
            "end": 165,
            "name": "CustomTag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 130,
          "end": 141,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 131,
            "end": 140,
            "name": "CustomTag"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
