__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 472,
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
      "end": 131,
      "expression": {
        "type": "JSXFragment",
        "start": 125,
        "end": 130,
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 162,
      "expression": {
        "type": "JSXFragment",
        "start": 149,
        "end": 161,
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 226,
      "expression": {
        "type": "JSXFragment",
        "start": 185,
        "end": 225,
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 259,
      "expression": {
        "type": "JSXFragment",
        "start": 251,
        "end": 258,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 251,
          "end": 253
        },
        "children": [
          {
            "type": "JSXText",
            "start": 253,
            "end": 255,
            "value": "hi",
            "raw": "hi"
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 255,
          "end": 258
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 275,
      "end": 310,
      "expression": {
        "type": "JSXFragment",
        "start": 275,
        "end": 309,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 275,
          "end": 277
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 277,
            "end": 292,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 277,
              "end": 283,
              "name": {
                "type": "JSXIdentifier",
                "start": 278,
                "end": 282,
                "name": "span"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 283,
                "end": 285,
                "value": "hi",
                "raw": "hi"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 285,
              "end": 292,
              "name": {
                "type": "JSXIdentifier",
                "start": 287,
                "end": 291,
                "name": "span"
              }
            }
          },
          {
            "type": "JSXElement",
            "start": 292,
            "end": 306,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 292,
              "end": 297,
              "name": {
                "type": "JSXIdentifier",
                "start": 293,
                "end": 296,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 297,
                "end": 300,
                "value": "bye",
                "raw": "bye"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 300,
              "end": 306,
              "name": {
                "type": "JSXIdentifier",
                "start": 302,
                "end": 305,
                "name": "div"
              }
            }
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 306,
          "end": 309
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 394,
      "expression": {
        "type": "JSXFragment",
        "start": 323,
        "end": 393,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 323,
          "end": 325
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 325,
            "end": 339,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 325,
              "end": 331,
              "name": {
                "type": "JSXIdentifier",
                "start": 326,
                "end": 330,
                "name": "span"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 331,
                "end": 332,
                "value": "1",
                "raw": "1"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 332,
              "end": 339,
              "name": {
                "type": "JSXIdentifier",
                "start": 334,
                "end": 338,
                "name": "span"
              }
            }
          },
          {
            "type": "JSXFragment",
            "start": 339,
            "end": 376,
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 339,
              "end": 341
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 341,
                "end": 357,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 341,
                  "end": 347,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 342,
                    "end": 346,
                    "name": "span"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 347,
                    "end": 350,
                    "value": "2.1",
                    "raw": "2.1"
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 350,
                  "end": 357,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 352,
                    "end": 356,
                    "name": "span"
                  }
                }
              },
              {
                "type": "JSXElement",
                "start": 357,
                "end": 373,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 357,
                  "end": 363,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 358,
                    "end": 362,
                    "name": "span"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 363,
                    "end": 366,
                    "value": "2.2",
                    "raw": "2.2"
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 366,
                  "end": 373,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 368,
                    "end": 372,
                    "name": "span"
                  }
                }
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 373,
              "end": 376
            }
          },
          {
            "type": "JSXElement",
            "start": 376,
            "end": 390,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 376,
              "end": 382,
              "name": {
                "type": "JSXIdentifier",
                "start": 377,
                "end": 381,
                "name": "span"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 382,
                "end": 383,
                "value": "3",
                "raw": "3"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 383,
              "end": 390,
              "name": {
                "type": "JSXIdentifier",
                "start": 385,
                "end": 389,
                "name": "span"
              }
            }
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 390,
          "end": 393
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 422,
      "expression": {
        "type": "JSXFragment",
        "start": 415,
        "end": 421,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 415,
          "end": 417
        },
        "children": [
          {
            "type": "JSXText",
            "start": 417,
            "end": 418,
            "value": "#",
            "raw": "#"
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 418,
          "end": 421
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
