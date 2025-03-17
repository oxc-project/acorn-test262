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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 97,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "accessibility": null,
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
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 125,
        "end": 174,
        "children": [
          {
            "type": "JSXText",
            "start": 130,
            "end": 168,
            "raw": "Dot goes here: &middot; &notAnEntity; ",
            "value": "Dot goes here: · &notAnEntity; "
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 125,
          "end": 130,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 126,
            "end": 129,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 176,
        "end": 219,
        "children": [
          {
            "type": "JSXText",
            "start": 181,
            "end": 213,
            "raw": "Be careful of &quot;-ed strings!",
            "value": "Be careful of \"-ed strings!"
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 176,
          "end": 181,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 177,
            "end": 180,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 221,
        "end": 263,
        "children": [
          {
            "type": "JSXText",
            "start": 226,
            "end": 257,
            "raw": "&#0123;&#123;braces&#x7d;&#x7D;",
            "value": "{{braces}}"
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 221,
          "end": 226,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 222,
            "end": 225,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 287,
        "end": 300,
        "children": [
          {
            "type": "JSXText",
            "start": 292,
            "end": 294,
            "raw": "\\n",
            "value": "\\n"
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 287,
          "end": 292,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 288,
            "end": 291,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 388,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 346,
        "end": 387,
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 346,
          "end": 381,
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
                "raw": "\"&#0123;&hellip;&#x7D;\\\"",
                "value": "{…}\\"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 347,
            "end": 350,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 537,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 492,
        "end": 536,
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 492,
          "end": 530,
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
                  "raw": "\"&#0123;&hellip;&#x7D;\\\"\"",
                  "value": "&#0123;&hellip;&#x7D;\""
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 493,
            "end": 496,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 586,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 565,
        "end": 585,
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 565,
          "end": 579,
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
                "raw": "'\"'",
                "value": "\""
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 566,
            "end": 569,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 643,
      "end": 691,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 643,
        "end": 690,
        "children": [
          {
            "type": "JSXText",
            "start": 648,
            "end": 684,
            "raw": "&#x1F408;&#x1F415;&#128007;&#128017;",
            "value": "🐈🐕🐇🐑"
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 643,
          "end": 648,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 644,
            "end": 647,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
