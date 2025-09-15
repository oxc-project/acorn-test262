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
                }
              ],
              "start": 76,
              "end": 91
            },
            "declare": false,
            "start": 48,
            "end": 91
          }
        ],
        "start": 22,
        "end": 93
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 93
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
                  "start": 110,
                  "end": 114
                },
                "start": 110,
                "end": 114
              },
              "start": 108,
              "end": 114
            },
            "start": 99,
            "end": 114
          },
          "init": {
            "type": "Literal",
            "value": "h1",
            "raw": "\"h1\"",
            "start": 117,
            "end": 121
          },
          "definite": false,
          "start": 99,
          "end": 121
        }
      ],
      "declare": false,
      "start": 95,
      "end": 122
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
            "start": 124,
            "end": 133
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 123,
          "end": 134
        },
        "children": [
          {
            "type": "JSXText",
            "value": " Hello World ",
            "raw": " Hello World ",
            "start": 134,
            "end": 147
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 149,
            "end": 158
          },
          "start": 147,
          "end": 159
        },
        "start": 123,
        "end": 159
      },
      "directive": null,
      "start": 123,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
}
```
