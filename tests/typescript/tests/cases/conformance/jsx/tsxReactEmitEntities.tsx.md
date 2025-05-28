__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 691,
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
      "type": "ExpressionStatement",
      "start": 125,
      "end": 175,
      "expression": {
        "type": "JSXElement",
        "start": 125,
        "end": 174,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 125,
          "end": 130,
          "name": {
            "type": "JSXIdentifier",
            "start": 126,
            "end": 129,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 130,
            "end": 168,
            "value": "Dot goes here: · &notAnEntity; ",
            "raw": "Dot goes here: &middot; &notAnEntity; "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 168,
          "end": 174,
          "name": {
            "type": "JSXIdentifier",
            "start": 170,
            "end": 173,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 220,
      "expression": {
        "type": "JSXElement",
        "start": 176,
        "end": 219,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 176,
          "end": 181,
          "name": {
            "type": "JSXIdentifier",
            "start": 177,
            "end": 180,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 181,
            "end": 213,
            "value": "Be careful of \"-ed strings!",
            "raw": "Be careful of &quot;-ed strings!"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 213,
          "end": 219,
          "name": {
            "type": "JSXIdentifier",
            "start": 215,
            "end": 218,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 264,
      "expression": {
        "type": "JSXElement",
        "start": 221,
        "end": 263,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 221,
          "end": 226,
          "name": {
            "type": "JSXIdentifier",
            "start": 222,
            "end": 225,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 226,
            "end": 257,
            "value": "{{braces}}",
            "raw": "&#0123;&#123;braces&#x7d;&#x7D;"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 257,
          "end": 263,
          "name": {
            "type": "JSXIdentifier",
            "start": 259,
            "end": 262,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 301,
      "expression": {
        "type": "JSXElement",
        "start": 287,
        "end": 300,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 287,
          "end": 292,
          "name": {
            "type": "JSXIdentifier",
            "start": 288,
            "end": 291,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 292,
            "end": 294,
            "value": "\\n",
            "raw": "\\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 294,
          "end": 300,
          "name": {
            "type": "JSXIdentifier",
            "start": 296,
            "end": 299,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 388,
      "expression": {
        "type": "JSXElement",
        "start": 346,
        "end": 387,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 346,
          "end": 381,
          "name": {
            "type": "JSXIdentifier",
            "start": 347,
            "end": 350,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 351,
              "end": 380,
              "name": {
                "type": "JSXIdentifier",
                "start": 351,
                "end": 355,
                "name": "attr"
              },
              "value": {
                "type": "Literal",
                "start": 356,
                "end": 380,
                "value": "{…}\\",
                "raw": "\"&#0123;&hellip;&#x7D;\\\""
              }
            }
          ],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 381,
          "end": 387,
          "name": {
            "type": "JSXIdentifier",
            "start": 383,
            "end": 386,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 537,
      "expression": {
        "type": "JSXElement",
        "start": 492,
        "end": 536,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 492,
          "end": 530,
          "name": {
            "type": "JSXIdentifier",
            "start": 493,
            "end": 496,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 497,
              "end": 529,
              "name": {
                "type": "JSXIdentifier",
                "start": 497,
                "end": 501,
                "name": "attr"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 502,
                "end": 529,
                "expression": {
                  "type": "Literal",
                  "start": 503,
                  "end": 528,
                  "value": "&#0123;&hellip;&#x7D;\"",
                  "raw": "\"&#0123;&hellip;&#x7D;\\\"\""
                }
              }
            }
          ],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 530,
          "end": 536,
          "name": {
            "type": "JSXIdentifier",
            "start": 532,
            "end": 535,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 586,
      "expression": {
        "type": "JSXElement",
        "start": 565,
        "end": 585,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 565,
          "end": 579,
          "name": {
            "type": "JSXIdentifier",
            "start": 566,
            "end": 569,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 570,
              "end": 578,
              "name": {
                "type": "JSXIdentifier",
                "start": 570,
                "end": 574,
                "name": "attr"
              },
              "value": {
                "type": "Literal",
                "start": 575,
                "end": 578,
                "value": "\"",
                "raw": "'\"'"
              }
            }
          ],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 579,
          "end": 585,
          "name": {
            "type": "JSXIdentifier",
            "start": 581,
            "end": 584,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 643,
      "end": 691,
      "expression": {
        "type": "JSXElement",
        "start": 643,
        "end": 690,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 643,
          "end": 648,
          "name": {
            "type": "JSXIdentifier",
            "start": 644,
            "end": 647,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 648,
            "end": 684,
            "value": "🐈🐕🐇🐑",
            "raw": "&#x1F408;&#x1F415;&#128007;&#128017;"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 684,
          "end": 690,
          "name": {
            "type": "JSXIdentifier",
            "start": 686,
            "end": 689,
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
