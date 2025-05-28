__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 723,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
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
        "end": 99,
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
            "end": 97,
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
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
      "start": 100,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 237,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 235,
            "end": 236,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 267,
      "expression": {
        "type": "JSXElement",
        "start": 252,
        "end": 266,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 252,
          "end": 257,
          "name": {
            "type": "JSXIdentifier",
            "start": 253,
            "end": 256,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 257,
            "end": 260,
            "value": "   ",
            "raw": "   "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 260,
          "end": 266,
          "name": {
            "type": "JSXIdentifier",
            "start": 262,
            "end": 265,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 312,
      "expression": {
        "type": "JSXElement",
        "start": 291,
        "end": 311,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 291,
          "end": 296,
          "name": {
            "type": "JSXIdentifier",
            "start": 292,
            "end": 295,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 296,
            "end": 298,
            "value": "  ",
            "raw": "  "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 298,
            "end": 301,
            "expression": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "JSXText",
            "start": 301,
            "end": 305,
            "value": "    ",
            "raw": "    "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 305,
          "end": 311,
          "name": {
            "type": "JSXIdentifier",
            "start": 307,
            "end": 310,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 363,
      "expression": {
        "type": "JSXElement",
        "start": 328,
        "end": 362,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 328,
          "end": 333,
          "name": {
            "type": "JSXIdentifier",
            "start": 329,
            "end": 332,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 333,
            "end": 342,
            "value": "  \n      ",
            "raw": "  \n      "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 342,
            "end": 345,
            "expression": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "JSXText",
            "start": 345,
            "end": 356,
            "value": "    \n      ",
            "raw": "    \n      "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 356,
          "end": 362,
          "name": {
            "type": "JSXIdentifier",
            "start": 358,
            "end": 361,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 403,
      "expression": {
        "type": "JSXElement",
        "start": 380,
        "end": 402,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 380,
          "end": 385,
          "name": {
            "type": "JSXIdentifier",
            "start": 381,
            "end": 384,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 385,
            "end": 388,
            "value": "\n  ",
            "raw": "\n  "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 388,
            "end": 391,
            "expression": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "JSXText",
            "start": 391,
            "end": 396,
            "value": "\n    ",
            "raw": "\n    "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 396,
          "end": 402,
          "name": {
            "type": "JSXIdentifier",
            "start": 398,
            "end": 401,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 439,
      "expression": {
        "type": "JSXElement",
        "start": 419,
        "end": 438,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 419,
          "end": 424,
          "name": {
            "type": "JSXIdentifier",
            "start": 420,
            "end": 423,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 424,
            "end": 432,
            "value": "  3  \n  ",
            "raw": "  3  \n  "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 432,
          "end": 438,
          "name": {
            "type": "JSXIdentifier",
            "start": 434,
            "end": 437,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 457,
      "end": 474,
      "expression": {
        "type": "JSXElement",
        "start": 457,
        "end": 473,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 457,
          "end": 462,
          "name": {
            "type": "JSXIdentifier",
            "start": 458,
            "end": 461,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 462,
            "end": 467,
            "value": "  3  ",
            "raw": "  3  "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 467,
          "end": 473,
          "name": {
            "type": "JSXIdentifier",
            "start": 469,
            "end": 472,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 516,
      "expression": {
        "type": "JSXElement",
        "start": 488,
        "end": 515,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 488,
          "end": 493,
          "name": {
            "type": "JSXIdentifier",
            "start": 489,
            "end": 492,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 493,
            "end": 509,
            "value": "   \n   3    \n   ",
            "raw": "   \n   3    \n   "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 509,
          "end": 515,
          "name": {
            "type": "JSXIdentifier",
            "start": 511,
            "end": 514,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 553,
      "expression": {
        "type": "JSXElement",
        "start": 534,
        "end": 552,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 534,
          "end": 539,
          "name": {
            "type": "JSXIdentifier",
            "start": 535,
            "end": 538,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 539,
            "end": 546,
            "value": "   \n   ",
            "raw": "   \n   "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 546,
          "end": 552,
          "name": {
            "type": "JSXIdentifier",
            "start": 548,
            "end": 551,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 608,
      "expression": {
        "type": "JSXElement",
        "start": 573,
        "end": 607,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 573,
          "end": 578,
          "name": {
            "type": "JSXIdentifier",
            "start": 574,
            "end": 577,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 578,
            "end": 601,
            "value": "  \n\n   foo\n\n bar   \n\n  ",
            "raw": "  \n\n   foo\n\n bar   \n\n  "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 601,
          "end": 607,
          "name": {
            "type": "JSXIdentifier",
            "start": 603,
            "end": 606,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 634,
      "end": 666,
      "expression": {
        "type": "JSXElement",
        "start": 634,
        "end": 665,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 634,
          "end": 639,
          "name": {
            "type": "JSXIdentifier",
            "start": 635,
            "end": 638,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 639,
            "end": 659,
            "value": "\n\n    hello\\\n\nworld\n",
            "raw": "\n\n    hello\\\n\nworld\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 659,
          "end": 665,
          "name": {
            "type": "JSXIdentifier",
            "start": 661,
            "end": 664,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 723,
      "expression": {
        "type": "JSXElement",
        "start": 691,
        "end": 722,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 691,
          "end": 696,
          "name": {
            "type": "JSXIdentifier",
            "start": 692,
            "end": 695,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 696,
            "end": 716,
            "value": "  a\n    b  c\n    d  ",
            "raw": "  a\n    b  c\n    d  "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 716,
          "end": 722,
          "name": {
            "type": "JSXIdentifier",
            "start": 718,
            "end": 721,
            "name": "div"
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
