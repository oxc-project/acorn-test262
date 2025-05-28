__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1007,
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
      "start": 125,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 147,
            "decorators": [],
            "name": "selfClosed1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 150,
            "end": 157,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 150,
              "end": 157,
              "name": {
                "type": "JSXIdentifier",
                "start": 151,
                "end": 154,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 174,
            "decorators": [],
            "name": "selfClosed2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 177,
            "end": 190,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 177,
              "end": 190,
              "name": {
                "type": "JSXIdentifier",
                "start": 178,
                "end": 181,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 182,
                  "end": 187,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 182,
                    "end": 183,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 184,
                    "end": 187,
                    "value": "1",
                    "raw": "\"1\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 224,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 207,
            "decorators": [],
            "name": "selfClosed3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 210,
            "end": 223,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 210,
              "end": 223,
              "name": {
                "type": "JSXIdentifier",
                "start": 211,
                "end": 214,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 215,
                  "end": 220,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 215,
                    "end": 216,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 217,
                    "end": 220,
                    "value": "1",
                    "raw": "'1'"
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 263,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 240,
            "decorators": [],
            "name": "selfClosed4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 243,
            "end": 262,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 243,
              "end": 262,
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 247,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 248,
                  "end": 253,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 248,
                    "end": 249,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 250,
                    "end": 253,
                    "value": "1",
                    "raw": "\"1\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 254,
                  "end": 259,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 254,
                    "end": 255,
                    "name": "y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 256,
                    "end": 259,
                    "value": "0",
                    "raw": "'0'"
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 302,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 279,
            "decorators": [],
            "name": "selfClosed5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 282,
            "end": 301,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 282,
              "end": 301,
              "name": {
                "type": "JSXIdentifier",
                "start": 283,
                "end": 286,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 287,
                  "end": 292,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 287,
                    "end": 288,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 289,
                    "end": 292,
                    "expression": {
                      "type": "Literal",
                      "start": 290,
                      "end": 291,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 293,
                  "end": 298,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 293,
                    "end": 294,
                    "name": "y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 295,
                    "end": 298,
                    "value": "0",
                    "raw": "'0'"
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 318,
            "decorators": [],
            "name": "selfClosed6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 321,
            "end": 342,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 321,
              "end": 342,
              "name": {
                "type": "JSXIdentifier",
                "start": 322,
                "end": 325,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 326,
                  "end": 333,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 326,
                    "end": 327,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 328,
                    "end": 333,
                    "expression": {
                      "type": "Literal",
                      "start": 329,
                      "end": 332,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 334,
                  "end": 339,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 334,
                    "end": 335,
                    "name": "y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 336,
                    "end": 339,
                    "value": "0",
                    "raw": "'0'"
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 384,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 359,
            "decorators": [],
            "name": "selfClosed7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 362,
            "end": 383,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 362,
              "end": 383,
              "name": {
                "type": "JSXIdentifier",
                "start": 363,
                "end": 366,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 367,
                  "end": 372,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 367,
                    "end": 368,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 369,
                    "end": 372,
                    "expression": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 371,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 373,
                  "end": 378,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 373,
                    "end": 374,
                    "name": "y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 375,
                    "end": 378,
                    "value": "p",
                    "raw": "'p'"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 379,
                  "end": 380,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 379,
                    "end": 380,
                    "name": "b"
                  },
                  "value": null
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 416,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 401,
            "decorators": [],
            "name": "openClosed1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 404,
            "end": 415,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 404,
              "end": 409,
              "name": {
                "type": "JSXIdentifier",
                "start": 405,
                "end": 408,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 409,
              "end": 415,
              "name": {
                "type": "JSXIdentifier",
                "start": 411,
                "end": 414,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 456,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 432,
            "decorators": [],
            "name": "openClosed2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 435,
            "end": 455,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 435,
              "end": 446,
              "name": {
                "type": "JSXIdentifier",
                "start": 436,
                "end": 439,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 440,
                  "end": 445,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 440,
                    "end": 441,
                    "name": "n"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 442,
                    "end": 445,
                    "value": "m",
                    "raw": "'m'"
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 446,
                "end": 449,
                "value": "foo",
                "raw": "foo"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 449,
              "end": 455,
              "name": {
                "type": "JSXIdentifier",
                "start": 451,
                "end": 454,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 472,
            "decorators": [],
            "name": "openClosed3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 475,
            "end": 495,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 475,
              "end": 486,
              "name": {
                "type": "JSXIdentifier",
                "start": 476,
                "end": 479,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 480,
                  "end": 485,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 480,
                    "end": 481,
                    "name": "n"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 482,
                    "end": 485,
                    "value": "m",
                    "raw": "'m'"
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 486,
                "end": 489,
                "expression": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 489,
              "end": 495,
              "name": {
                "type": "JSXIdentifier",
                "start": 491,
                "end": 494,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 540,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 539,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 512,
            "decorators": [],
            "name": "openClosed4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 515,
            "end": 539,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 515,
              "end": 526,
              "name": {
                "type": "JSXIdentifier",
                "start": 516,
                "end": 519,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 520,
                  "end": 525,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 520,
                    "end": 521,
                    "name": "n"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 522,
                    "end": 525,
                    "value": "m",
                    "raw": "'m'"
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 526,
                "end": 533,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 527,
                  "end": 532,
                  "left": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 533,
              "end": 539,
              "name": {
                "type": "JSXIdentifier",
                "start": 535,
                "end": 538,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 541,
      "end": 586,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 556,
            "decorators": [],
            "name": "openClosed5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 559,
            "end": 585,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 559,
              "end": 572,
              "name": {
                "type": "JSXIdentifier",
                "start": 560,
                "end": 563,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 564,
                  "end": 569,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 564,
                    "end": 565,
                    "name": "n"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 566,
                    "end": 569,
                    "value": "m",
                    "raw": "'m'"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 570,
                  "end": 571,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 570,
                    "end": 571,
                    "name": "b"
                  },
                  "value": null
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 572,
                "end": 579,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 573,
                  "end": 578,
                  "left": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 578,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 588,
      "end": 875,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 603,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 604,
        "end": 875,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 607,
            "end": 873,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 608,
              "end": 873,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 611,
                "end": 873,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 615,
                    "end": 655,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 619,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 628,
                          "decorators": [],
                          "name": "rewrites1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 631,
                          "end": 654,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 631,
                            "end": 636,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 632,
                              "end": 635,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 636,
                              "end": 648,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "start": 637,
                                "end": 647,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 643,
                                  "end": 647
                                },
                                "id": null,
                                "generator": false
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 648,
                            "end": 654,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 650,
                              "end": 653,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 658,
                    "end": 700,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 662,
                        "end": 699,
                        "id": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 671,
                          "decorators": [],
                          "name": "rewrites2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 674,
                          "end": 699,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 674,
                            "end": 679,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 675,
                              "end": 678,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 679,
                              "end": 693,
                              "expression": {
                                "type": "ArrayExpression",
                                "start": 680,
                                "end": 692,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 681,
                                    "end": 682,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "SpreadElement",
                                    "start": 684,
                                    "end": 688,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 687,
                                      "end": 688,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 690,
                                    "end": 691,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 693,
                            "end": 699,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 695,
                              "end": 698,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 703,
                    "end": 736,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 707,
                        "end": 735,
                        "id": {
                          "type": "Identifier",
                          "start": 707,
                          "end": 716,
                          "decorators": [],
                          "name": "rewrites3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 719,
                          "end": 735,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 719,
                            "end": 724,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 720,
                              "end": 723,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 724,
                              "end": 729,
                              "expression": {
                                "type": "ObjectExpression",
                                "start": 725,
                                "end": 728,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 726,
                                    "end": 727,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 726,
                                      "end": 727,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 726,
                                      "end": 727,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 729,
                            "end": 735,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 731,
                              "end": 734,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 740,
                    "end": 783,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 744,
                        "end": 782,
                        "id": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 753,
                          "decorators": [],
                          "name": "rewrites4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 756,
                          "end": 782,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 756,
                            "end": 776,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 757,
                              "end": 760,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 761,
                                "end": 775,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 761,
                                  "end": 762,
                                  "name": "a"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 763,
                                  "end": 775,
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 764,
                                    "end": 774,
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "ThisExpression",
                                      "start": 770,
                                      "end": 774
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                }
                              }
                            ],
                            "selfClosing": false
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 776,
                            "end": 782,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 778,
                              "end": 781,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 786,
                    "end": 831,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 790,
                        "end": 830,
                        "id": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 799,
                          "decorators": [],
                          "name": "rewrites5",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 802,
                          "end": 830,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 802,
                            "end": 824,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 803,
                              "end": 806,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 807,
                                "end": 823,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 807,
                                  "end": 808,
                                  "name": "a"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 809,
                                  "end": 823,
                                  "expression": {
                                    "type": "ArrayExpression",
                                    "start": 810,
                                    "end": 822,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 811,
                                        "end": 812,
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "SpreadElement",
                                        "start": 814,
                                        "end": 818,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 817,
                                          "end": 818,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 820,
                                        "end": 821,
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "selfClosing": false
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 824,
                            "end": 830,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 826,
                              "end": 829,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 834,
                    "end": 870,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 838,
                        "end": 869,
                        "id": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 847,
                          "decorators": [],
                          "name": "rewrites6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 850,
                          "end": 869,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 850,
                            "end": 863,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 851,
                              "end": 854,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 855,
                                "end": 862,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 855,
                                  "end": 856,
                                  "name": "a"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 857,
                                  "end": 862,
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "start": 858,
                                    "end": 861,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 859,
                                        "end": 860,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 859,
                                          "end": 860,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 859,
                                          "end": 860,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "selfClosing": false
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 863,
                            "end": 869,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 865,
                              "end": 868,
                              "name": "div"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 877,
      "end": 913,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 912,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 892,
            "decorators": [],
            "name": "whitespace1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 895,
            "end": 912,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 895,
              "end": 900,
              "name": {
                "type": "JSXIdentifier",
                "start": 896,
                "end": 899,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 900,
                "end": 906,
                "value": "      ",
                "raw": "      "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 906,
              "end": 912,
              "name": {
                "type": "JSXIdentifier",
                "start": 908,
                "end": 911,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 953,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 952,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 929,
            "decorators": [],
            "name": "whitespace2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 932,
            "end": 952,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 932,
              "end": 937,
              "name": {
                "type": "JSXIdentifier",
                "start": 933,
                "end": 936,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 937,
                "end": 939,
                "value": "  ",
                "raw": "  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 939,
                "end": 942,
                "expression": {
                  "type": "Identifier",
                  "start": 940,
                  "end": 941,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "JSXText",
                "start": 942,
                "end": 946,
                "value": "    ",
                "raw": "    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 946,
              "end": 952,
              "name": {
                "type": "JSXIdentifier",
                "start": 948,
                "end": 951,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 954,
      "end": 1007,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 958,
          "end": 1006,
          "id": {
            "type": "Identifier",
            "start": 958,
            "end": 969,
            "decorators": [],
            "name": "whitespace3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 972,
            "end": 1006,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 972,
              "end": 977,
              "name": {
                "type": "JSXIdentifier",
                "start": 973,
                "end": 976,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 977,
                "end": 986,
                "value": "  \n      ",
                "raw": "  \n      "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 986,
                "end": 989,
                "expression": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 988,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "JSXText",
                "start": 989,
                "end": 1000,
                "value": "    \n      ",
                "raw": "    \n      "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1000,
              "end": 1006,
              "name": {
                "type": "JSXIdentifier",
                "start": 1002,
                "end": 1005,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
