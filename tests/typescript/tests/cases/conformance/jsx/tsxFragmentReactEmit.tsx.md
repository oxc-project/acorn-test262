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
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 125,
          "end": 127
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 127,
          "end": 130
        },
        "start": 125,
        "end": 130
      },
      "directive": null,
      "start": 125,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 149,
          "end": 155
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 155,
          "end": 161
        },
        "start": 149,
        "end": 161
      },
      "directive": null,
      "start": 149,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 185,
          "end": 206
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 206,
          "end": 225
        },
        "start": 185,
        "end": 225
      },
      "directive": null,
      "start": 185,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 251,
          "end": 253
        },
        "children": [
          {
            "type": "JSXText",
            "value": "hi",
            "raw": "hi",
            "start": 253,
            "end": 255
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 255,
          "end": 258
        },
        "start": 251,
        "end": 258
      },
      "directive": null,
      "start": 251,
      "end": 259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 275,
          "end": 277
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 278,
                "end": 282
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 277,
              "end": 283
            },
            "children": [
              {
                "type": "JSXText",
                "value": "hi",
                "raw": "hi",
                "start": 283,
                "end": 285
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 287,
                "end": 291
              },
              "start": 285,
              "end": 292
            },
            "start": 277,
            "end": 292
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 293,
                "end": 296
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 292,
              "end": 297
            },
            "children": [
              {
                "type": "JSXText",
                "value": "bye",
                "raw": "bye",
                "start": 297,
                "end": 300
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 302,
                "end": 305
              },
              "start": 300,
              "end": 306
            },
            "start": 292,
            "end": 306
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 306,
          "end": 309
        },
        "start": 275,
        "end": 309
      },
      "directive": null,
      "start": 275,
      "end": 310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 323,
          "end": 325
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 326,
                "end": 330
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 325,
              "end": 331
            },
            "children": [
              {
                "type": "JSXText",
                "value": "1",
                "raw": "1",
                "start": 331,
                "end": 332
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 334,
                "end": 338
              },
              "start": 332,
              "end": 339
            },
            "start": 325,
            "end": 339
          },
          {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 339,
              "end": 341
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 342,
                    "end": 346
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 341,
                  "end": 347
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.1",
                    "raw": "2.1",
                    "start": 347,
                    "end": 350
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 352,
                    "end": 356
                  },
                  "start": 350,
                  "end": 357
                },
                "start": 341,
                "end": 357
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 358,
                    "end": 362
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 357,
                  "end": 363
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.2",
                    "raw": "2.2",
                    "start": 363,
                    "end": 366
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 368,
                    "end": 372
                  },
                  "start": 366,
                  "end": 373
                },
                "start": 357,
                "end": 373
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 373,
              "end": 376
            },
            "start": 339,
            "end": 376
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 377,
                "end": 381
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 376,
              "end": 382
            },
            "children": [
              {
                "type": "JSXText",
                "value": "3",
                "raw": "3",
                "start": 382,
                "end": 383
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 385,
                "end": 389
              },
              "start": 383,
              "end": 390
            },
            "start": 376,
            "end": 390
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 390,
          "end": 393
        },
        "start": 323,
        "end": 393
      },
      "directive": null,
      "start": 323,
      "end": 394
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 415,
          "end": 417
        },
        "children": [
          {
            "type": "JSXText",
            "value": "#",
            "raw": "#",
            "start": 417,
            "end": 418
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 418,
          "end": 421
        },
        "start": 415,
        "end": 421
      },
      "directive": null,
      "start": 415,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 472
}
```
