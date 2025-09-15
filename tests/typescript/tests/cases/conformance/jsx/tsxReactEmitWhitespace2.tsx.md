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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 122,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "start": 115,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 125
        }
      ],
      "declare": true,
      "start": 103,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 164,
            "end": 167
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 163,
          "end": 168
        },
        "children": [
          {
            "type": "JSXText",
            "value": "word ",
            "raw": "word ",
            "start": 168,
            "end": 173
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 174,
                "end": 178
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 173,
              "end": 179
            },
            "children": [
              {
                "type": "JSXText",
                "value": "code",
                "raw": "code",
                "start": 179,
                "end": 183
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 185,
                "end": 189
              },
              "start": 183,
              "end": 190
            },
            "start": 173,
            "end": 190
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 190,
            "end": 195
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 197,
            "end": 200
          },
          "start": 195,
          "end": 201
        },
        "start": 163,
        "end": 201
      },
      "directive": null,
      "start": 163,
      "end": 202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 217,
            "end": 220
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 216,
          "end": 221
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 222,
                "end": 226
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 221,
              "end": 227
            },
            "children": [
              {
                "type": "JSXText",
                "value": "code",
                "raw": "code",
                "start": 227,
                "end": 231
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 233,
                "end": 237
              },
              "start": 231,
              "end": 238
            },
            "start": 221,
            "end": 238
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 238,
            "end": 243
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 245,
            "end": 248
          },
          "start": 243,
          "end": 249
        },
        "start": 216,
        "end": 249
      },
      "directive": null,
      "start": 216,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 264,
            "end": 267
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 263,
          "end": 268
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 269,
                "end": 273
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 268,
              "end": 276
            },
            "children": [],
            "closingElement": null,
            "start": 268,
            "end": 276
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 276,
            "end": 281
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 283,
            "end": 286
          },
          "start": 281,
          "end": 287
        },
        "start": 263,
        "end": 287
      },
      "directive": null,
      "start": 263,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 289
}
```
