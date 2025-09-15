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
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 128,
          "end": 130
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 130,
          "end": 133
        },
        "start": 128,
        "end": 133
      },
      "directive": null,
      "start": 128,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 152,
          "end": 158
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 158,
          "end": 164
        },
        "start": 152,
        "end": 164
      },
      "directive": null,
      "start": 152,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 188,
          "end": 209
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 209,
          "end": 228
        },
        "start": 188,
        "end": 228
      },
      "directive": null,
      "start": 188,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 254,
          "end": 256
        },
        "children": [
          {
            "type": "JSXText",
            "value": "hi",
            "raw": "hi",
            "start": 256,
            "end": 258
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 258,
          "end": 261
        },
        "start": 254,
        "end": 261
      },
      "directive": null,
      "start": 254,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 278,
          "end": 280
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 281,
                "end": 285
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 280,
              "end": 286
            },
            "children": [
              {
                "type": "JSXText",
                "value": "hi",
                "raw": "hi",
                "start": 286,
                "end": 288
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 290,
                "end": 294
              },
              "start": 288,
              "end": 295
            },
            "start": 280,
            "end": 295
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 296,
                "end": 299
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 295,
              "end": 300
            },
            "children": [
              {
                "type": "JSXText",
                "value": "bye",
                "raw": "bye",
                "start": 300,
                "end": 303
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 305,
                "end": 308
              },
              "start": 303,
              "end": 309
            },
            "start": 295,
            "end": 309
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 309,
          "end": 312
        },
        "start": 278,
        "end": 312
      },
      "directive": null,
      "start": 278,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 326,
          "end": 328
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 329,
                "end": 333
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 328,
              "end": 334
            },
            "children": [
              {
                "type": "JSXText",
                "value": "1",
                "raw": "1",
                "start": 334,
                "end": 335
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 337,
                "end": 341
              },
              "start": 335,
              "end": 342
            },
            "start": 328,
            "end": 342
          },
          {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 342,
              "end": 344
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 345,
                    "end": 349
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 344,
                  "end": 350
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.1",
                    "raw": "2.1",
                    "start": 350,
                    "end": 353
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 355,
                    "end": 359
                  },
                  "start": 353,
                  "end": 360
                },
                "start": 344,
                "end": 360
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 361,
                    "end": 365
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 360,
                  "end": 366
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.2",
                    "raw": "2.2",
                    "start": 366,
                    "end": 369
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 371,
                    "end": 375
                  },
                  "start": 369,
                  "end": 376
                },
                "start": 360,
                "end": 376
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 376,
              "end": 379
            },
            "start": 342,
            "end": 379
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 380,
                "end": 384
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 379,
              "end": 385
            },
            "children": [
              {
                "type": "JSXText",
                "value": "3",
                "raw": "3",
                "start": 385,
                "end": 386
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 388,
                "end": 392
              },
              "start": 386,
              "end": 393
            },
            "start": 379,
            "end": 393
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 393,
          "end": 396
        },
        "start": 326,
        "end": 396
      },
      "directive": null,
      "start": 326,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 418,
          "end": 420
        },
        "children": [
          {
            "type": "JSXText",
            "value": "#",
            "raw": "#",
            "start": 420,
            "end": 421
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 421,
          "end": 424
        },
        "start": 418,
        "end": 424
      },
      "directive": null,
      "start": 418,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
