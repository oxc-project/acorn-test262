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
            "start": 126,
            "end": 129
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 125,
          "end": 130
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Dot goes here: · &notAnEntity; ",
            "raw": "Dot goes here: &middot; &notAnEntity; ",
            "start": 130,
            "end": 168
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 170,
            "end": 173
          },
          "start": 168,
          "end": 174
        },
        "start": 125,
        "end": 174
      },
      "directive": null,
      "start": 125,
      "end": 175
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
            "start": 177,
            "end": 180
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 176,
          "end": 181
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Be careful of \"-ed strings!",
            "raw": "Be careful of &quot;-ed strings!",
            "start": 181,
            "end": 213
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 215,
            "end": 218
          },
          "start": 213,
          "end": 219
        },
        "start": 176,
        "end": 219
      },
      "directive": null,
      "start": 176,
      "end": 220
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
            "start": 222,
            "end": 225
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 221,
          "end": 226
        },
        "children": [
          {
            "type": "JSXText",
            "value": "{{braces}}",
            "raw": "&#0123;&#123;braces&#x7d;&#x7D;",
            "start": 226,
            "end": 257
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 259,
            "end": 262
          },
          "start": 257,
          "end": 263
        },
        "start": 221,
        "end": 263
      },
      "directive": null,
      "start": 221,
      "end": 264
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
            "start": 288,
            "end": 291
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 287,
          "end": 292
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\\n",
            "raw": "\\n",
            "start": 292,
            "end": 294
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 296,
            "end": 299
          },
          "start": 294,
          "end": 300
        },
        "start": 287,
        "end": 300
      },
      "directive": null,
      "start": 287,
      "end": 301
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
            "start": 347,
            "end": 350
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 351,
                "end": 355
              },
              "value": {
                "type": "Literal",
                "value": "{…}\\",
                "raw": "\"&#0123;&hellip;&#x7D;\\\"",
                "start": 356,
                "end": 380
              },
              "start": 351,
              "end": 380
            }
          ],
          "selfClosing": false,
          "start": 346,
          "end": 381
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 383,
            "end": 386
          },
          "start": 381,
          "end": 387
        },
        "start": 346,
        "end": 387
      },
      "directive": null,
      "start": 346,
      "end": 388
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
            "start": 493,
            "end": 496
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 497,
                "end": 501
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "&#0123;&hellip;&#x7D;\"",
                  "raw": "\"&#0123;&hellip;&#x7D;\\\"\"",
                  "start": 503,
                  "end": 528
                },
                "start": 502,
                "end": 529
              },
              "start": 497,
              "end": 529
            }
          ],
          "selfClosing": false,
          "start": 492,
          "end": 530
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 532,
            "end": 535
          },
          "start": 530,
          "end": 536
        },
        "start": 492,
        "end": 536
      },
      "directive": null,
      "start": 492,
      "end": 537
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
            "start": 566,
            "end": 569
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 570,
                "end": 574
              },
              "value": {
                "type": "Literal",
                "value": "\"",
                "raw": "'\"'",
                "start": 575,
                "end": 578
              },
              "start": 570,
              "end": 578
            }
          ],
          "selfClosing": false,
          "start": 565,
          "end": 579
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 581,
            "end": 584
          },
          "start": 579,
          "end": 585
        },
        "start": 565,
        "end": 585
      },
      "directive": null,
      "start": 565,
      "end": 586
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
            "start": 644,
            "end": 647
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 643,
          "end": 648
        },
        "children": [
          {
            "type": "JSXText",
            "value": "🐈🐕🐇🐑",
            "raw": "&#x1F408;&#x1F415;&#128007;&#128017;",
            "start": 648,
            "end": 684
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 686,
            "end": 689
          },
          "start": 684,
          "end": 690
        },
        "start": 643,
        "end": 690
      },
      "directive": null,
      "start": 643,
      "end": 691
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 691
}
```
