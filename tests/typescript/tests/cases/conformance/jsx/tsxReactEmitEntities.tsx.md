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
            "start": 129,
            "end": 132
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 128,
          "end": 133
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Dot goes here: · &notAnEntity; ",
            "raw": "Dot goes here: &middot; &notAnEntity; ",
            "start": 133,
            "end": 171
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 173,
            "end": 176
          },
          "start": 171,
          "end": 177
        },
        "start": 128,
        "end": 177
      },
      "directive": null,
      "start": 128,
      "end": 178
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
            "start": 180,
            "end": 183
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 179,
          "end": 184
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Be careful of \"-ed strings!",
            "raw": "Be careful of &quot;-ed strings!",
            "start": 184,
            "end": 216
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 218,
            "end": 221
          },
          "start": 216,
          "end": 222
        },
        "start": 179,
        "end": 222
      },
      "directive": null,
      "start": 179,
      "end": 223
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
            "start": 225,
            "end": 228
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 224,
          "end": 229
        },
        "children": [
          {
            "type": "JSXText",
            "value": "{{braces}}",
            "raw": "&#0123;&#123;braces&#x7d;&#x7D;",
            "start": 229,
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
        "start": 224,
        "end": 266
      },
      "directive": null,
      "start": 224,
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
            "start": 291,
            "end": 294
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 290,
          "end": 295
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\\n",
            "raw": "\\n",
            "start": 295,
            "end": 297
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 299,
            "end": 302
          },
          "start": 297,
          "end": 303
        },
        "start": 290,
        "end": 303
      },
      "directive": null,
      "start": 290,
      "end": 304
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
            "start": 350,
            "end": 353
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 354,
                "end": 358
              },
              "value": {
                "type": "Literal",
                "value": "{…}\\",
                "raw": "\"&#0123;&hellip;&#x7D;\\\"",
                "start": 359,
                "end": 383
              },
              "start": 354,
              "end": 383
            }
          ],
          "selfClosing": false,
          "start": 349,
          "end": 384
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 386,
            "end": 389
          },
          "start": 384,
          "end": 390
        },
        "start": 349,
        "end": 390
      },
      "directive": null,
      "start": 349,
      "end": 391
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
            "start": 496,
            "end": 499
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 500,
                "end": 504
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "&#0123;&hellip;&#x7D;\"",
                  "raw": "\"&#0123;&hellip;&#x7D;\\\"\"",
                  "start": 506,
                  "end": 531
                },
                "start": 505,
                "end": 532
              },
              "start": 500,
              "end": 532
            }
          ],
          "selfClosing": false,
          "start": 495,
          "end": 533
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 535,
            "end": 538
          },
          "start": 533,
          "end": 539
        },
        "start": 495,
        "end": 539
      },
      "directive": null,
      "start": 495,
      "end": 540
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
            "start": 569,
            "end": 572
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 573,
                "end": 577
              },
              "value": {
                "type": "Literal",
                "value": "\"",
                "raw": "'\"'",
                "start": 578,
                "end": 581
              },
              "start": 573,
              "end": 581
            }
          ],
          "selfClosing": false,
          "start": 568,
          "end": 582
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 584,
            "end": 587
          },
          "start": 582,
          "end": 588
        },
        "start": 568,
        "end": 588
      },
      "directive": null,
      "start": 568,
      "end": 589
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
            "start": 647,
            "end": 650
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 646,
          "end": 651
        },
        "children": [
          {
            "type": "JSXText",
            "value": "🐈🐕🐇🐑",
            "raw": "&#x1F408;&#x1F415;&#128007;&#128017;",
            "start": 651,
            "end": 687
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 689,
            "end": 692
          },
          "start": 687,
          "end": 693
        },
        "start": 646,
        "end": 693
      },
      "directive": null,
      "start": 646,
      "end": 694
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 694
}
```
