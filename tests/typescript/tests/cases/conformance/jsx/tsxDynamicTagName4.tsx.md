__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 83
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 85,
                      "end": 88
                    },
                    "start": 83,
                    "end": 88
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 88
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 93
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 91,
                  "end": 98
                }
              ],
              "start": 76,
              "end": 101
            },
            "declare": false,
            "start": 48,
            "end": 101
          }
        ],
        "start": 22,
        "end": 103
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 103
    },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "h1",
                  "raw": "\"h1\"",
                  "start": 120,
                  "end": 124
                },
                "start": 120,
                "end": 124
              },
              "start": 118,
              "end": 124
            },
            "start": 109,
            "end": 124
          },
          "init": {
            "type": "Literal",
            "value": "h1",
            "raw": "\"h1\"",
            "start": 127,
            "end": 131
          },
          "definite": false,
          "start": 109,
          "end": 131
        }
      ],
      "declare": false,
      "start": 105,
      "end": 132
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
            "start": 134,
            "end": 143
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 133,
          "end": 144
        },
        "children": [
          {
            "type": "JSXText",
            "value": " Hello World ",
            "raw": " Hello World ",
            "start": 144,
            "end": 157
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 159,
            "end": 168
          },
          "start": 157,
          "end": 169
        },
        "start": 133,
        "end": 169
      },
      "directive": null,
      "start": 133,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
