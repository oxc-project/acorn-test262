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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
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
                          "start": 81,
                          "end": 87
                        },
                        "start": 79,
                        "end": 87
                      },
                      "start": 78,
                      "end": 87
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 94
                }
              ],
              "start": 73,
              "end": 97
            },
            "declare": false,
            "start": 45,
            "end": 97
          }
        ],
        "start": 19,
        "end": 99
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 99
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
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "start": 112,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 122
        }
      ],
      "declare": true,
      "start": 100,
      "end": 123
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
            "start": 161,
            "end": 164
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 160,
          "end": 165
        },
        "children": [
          {
            "type": "JSXText",
            "value": "word ",
            "raw": "word ",
            "start": 165,
            "end": 170
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 171,
                "end": 175
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 170,
              "end": 176
            },
            "children": [
              {
                "type": "JSXText",
                "value": "code",
                "raw": "code",
                "start": 176,
                "end": 180
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 182,
                "end": 186
              },
              "start": 180,
              "end": 187
            },
            "start": 170,
            "end": 187
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 187,
            "end": 192
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 194,
            "end": 197
          },
          "start": 192,
          "end": 198
        },
        "start": 160,
        "end": 198
      },
      "directive": null,
      "start": 160,
      "end": 199
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
            "start": 214,
            "end": 217
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 213,
          "end": 218
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 219,
                "end": 223
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 218,
              "end": 224
            },
            "children": [
              {
                "type": "JSXText",
                "value": "code",
                "raw": "code",
                "start": 224,
                "end": 228
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 230,
                "end": 234
              },
              "start": 228,
              "end": 235
            },
            "start": 218,
            "end": 235
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 235,
            "end": 240
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 242,
            "end": 245
          },
          "start": 240,
          "end": 246
        },
        "start": 213,
        "end": 246
      },
      "directive": null,
      "start": 213,
      "end": 247
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
            "start": 261,
            "end": 264
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 260,
          "end": 265
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "code",
                "start": 266,
                "end": 270
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 265,
              "end": 273
            },
            "children": [],
            "closingElement": null,
            "start": 265,
            "end": 273
          },
          {
            "type": "JSXText",
            "value": " word",
            "raw": " word",
            "start": 273,
            "end": 278
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 280,
            "end": 283
          },
          "start": 278,
          "end": 284
        },
        "start": 260,
        "end": 284
      },
      "directive": null,
      "start": 260,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 286
}
```
