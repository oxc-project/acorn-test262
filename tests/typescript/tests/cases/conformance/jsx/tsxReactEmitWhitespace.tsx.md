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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 232
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 235,
            "end": 236
          },
          "definite": false,
          "start": 231,
          "end": 236
        }
      ],
      "declare": false,
      "start": 227,
      "end": 237
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
            "start": 253,
            "end": 256
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 252,
          "end": 257
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   ",
            "raw": "   ",
            "start": 257,
            "end": 260
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 262,
            "end": 265
          },
          "start": 260,
          "end": 266
        },
        "start": 252,
        "end": 266
      },
      "directive": null,
      "start": 252,
      "end": 267
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
            "start": 292,
            "end": 295
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 291,
          "end": 296
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  ",
            "raw": "  ",
            "start": 296,
            "end": 298
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "start": 298,
            "end": 301
          },
          {
            "type": "JSXText",
            "value": "    ",
            "raw": "    ",
            "start": 301,
            "end": 305
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 307,
            "end": 310
          },
          "start": 305,
          "end": 311
        },
        "start": 291,
        "end": 311
      },
      "directive": null,
      "start": 291,
      "end": 312
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
            "start": 329,
            "end": 332
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 328,
          "end": 333
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  \n      ",
            "raw": "  \n      ",
            "start": 333,
            "end": 342
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "start": 342,
            "end": 345
          },
          {
            "type": "JSXText",
            "value": "    \n      ",
            "raw": "    \n      ",
            "start": 345,
            "end": 356
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 358,
            "end": 361
          },
          "start": 356,
          "end": 362
        },
        "start": 328,
        "end": 362
      },
      "directive": null,
      "start": 328,
      "end": 363
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
            "start": 381,
            "end": 384
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 380,
          "end": 385
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n  ",
            "raw": "\n  ",
            "start": 385,
            "end": 388
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 390
            },
            "start": 388,
            "end": 391
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 391,
            "end": 396
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 398,
            "end": 401
          },
          "start": 396,
          "end": 402
        },
        "start": 380,
        "end": 402
      },
      "directive": null,
      "start": 380,
      "end": 403
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
            "start": 420,
            "end": 423
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 419,
          "end": 424
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  3  \n  ",
            "raw": "  3  \n  ",
            "start": 424,
            "end": 432
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 434,
            "end": 437
          },
          "start": 432,
          "end": 438
        },
        "start": 419,
        "end": 438
      },
      "directive": null,
      "start": 419,
      "end": 439
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
            "start": 458,
            "end": 461
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 457,
          "end": 462
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  3  ",
            "raw": "  3  ",
            "start": 462,
            "end": 467
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 469,
            "end": 472
          },
          "start": 467,
          "end": 473
        },
        "start": 457,
        "end": 473
      },
      "directive": null,
      "start": 457,
      "end": 474
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
            "start": 489,
            "end": 492
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 488,
          "end": 493
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   \n   3    \n   ",
            "raw": "   \n   3    \n   ",
            "start": 493,
            "end": 509
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 511,
            "end": 514
          },
          "start": 509,
          "end": 515
        },
        "start": 488,
        "end": 515
      },
      "directive": null,
      "start": 488,
      "end": 516
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
            "start": 535,
            "end": 538
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 534,
          "end": 539
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   \n   ",
            "raw": "   \n   ",
            "start": 539,
            "end": 546
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 548,
            "end": 551
          },
          "start": 546,
          "end": 552
        },
        "start": 534,
        "end": 552
      },
      "directive": null,
      "start": 534,
      "end": 553
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
            "start": 574,
            "end": 577
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 573,
          "end": 578
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  \n\n   foo\n\n bar   \n\n  ",
            "raw": "  \n\n   foo\n\n bar   \n\n  ",
            "start": 578,
            "end": 601
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 603,
            "end": 606
          },
          "start": 601,
          "end": 607
        },
        "start": 573,
        "end": 607
      },
      "directive": null,
      "start": 573,
      "end": 608
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
            "start": 635,
            "end": 638
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 634,
          "end": 639
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n\n    hello\\\n\nworld\n",
            "raw": "\n\n    hello\\\n\nworld\n",
            "start": 639,
            "end": 659
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 661,
            "end": 664
          },
          "start": 659,
          "end": 665
        },
        "start": 634,
        "end": 665
      },
      "directive": null,
      "start": 634,
      "end": 666
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
            "start": 692,
            "end": 695
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 691,
          "end": 696
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  a\n    b  c\n    d  ",
            "raw": "  a\n    b  c\n    d  ",
            "start": 696,
            "end": 716
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 718,
            "end": 721
          },
          "start": 716,
          "end": 722
        },
        "start": 691,
        "end": 722
      },
      "directive": null,
      "start": 691,
      "end": 723
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 723
}
```
