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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              },
              "start": 134,
              "end": 139
            },
            "start": 132,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 139
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 145,
                "end": 148
              },
              "start": 143,
              "end": 148
            },
            "start": 141,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 148
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 154,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 150,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 157
        }
      ],
      "declare": false,
      "start": 128,
      "end": 158
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
            "name": "spreads1",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 171
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 175,
                "end": 178
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 185
                  },
                  "start": 179,
                  "end": 186
                }
              ],
              "selfClosing": false,
              "start": 174,
              "end": 187
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 190
                },
                "start": 187,
                "end": 191
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 197
            },
            "start": 174,
            "end": 197
          },
          "definite": false,
          "start": 163,
          "end": 197
        }
      ],
      "declare": false,
      "start": 159,
      "end": 198
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
            "name": "spreads2",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 211
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 215,
                "end": 218
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 225
                  },
                  "start": 219,
                  "end": 226
                }
              ],
              "selfClosing": false,
              "start": 214,
              "end": 227
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 230
                },
                "start": 227,
                "end": 231
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 233,
                "end": 236
              },
              "start": 231,
              "end": 237
            },
            "start": 214,
            "end": 237
          },
          "definite": false,
          "start": 203,
          "end": 237
        }
      ],
      "declare": false,
      "start": 199,
      "end": 238
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
            "name": "spreads3",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 251
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 255,
                "end": 258
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 259,
                    "end": 260
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 264
                    },
                    "start": 261,
                    "end": 265
                  },
                  "start": 259,
                  "end": 265
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 272
                  },
                  "start": 266,
                  "end": 273
                }
              ],
              "selfClosing": false,
              "start": 254,
              "end": 274
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 277
                },
                "start": 274,
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
            "start": 254,
            "end": 284
          },
          "definite": false,
          "start": 243,
          "end": 284
        }
      ],
      "declare": false,
      "start": 239,
      "end": 285
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
            "name": "spreads4",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 298
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 302,
                "end": 305
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 312
                  },
                  "start": 306,
                  "end": 313
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 319
                    },
                    "start": 316,
                    "end": 320
                  },
                  "start": 314,
                  "end": 320
                }
              ],
              "selfClosing": false,
              "start": 301,
              "end": 322
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 325
                },
                "start": 322,
                "end": 326
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 328,
                "end": 331
              },
              "start": 326,
              "end": 332
            },
            "start": 301,
            "end": 332
          },
          "definite": false,
          "start": 290,
          "end": 332
        }
      ],
      "declare": false,
      "start": 286,
      "end": 333
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
            "name": "spreads5",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 346
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 350,
                "end": 353
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 354,
                    "end": 355
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 359
                    },
                    "start": 356,
                    "end": 360
                  },
                  "start": 354,
                  "end": 360
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 367
                  },
                  "start": 361,
                  "end": 368
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 369,
                    "end": 370
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 374
                    },
                    "start": 371,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                }
              ],
              "selfClosing": false,
              "start": 349,
              "end": 376
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 379
                },
                "start": 376,
                "end": 380
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 382,
                "end": 385
              },
              "start": 380,
              "end": 386
            },
            "start": 349,
            "end": 386
          },
          "definite": false,
          "start": 338,
          "end": 386
        }
      ],
      "declare": false,
      "start": 334,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 387
}
```
