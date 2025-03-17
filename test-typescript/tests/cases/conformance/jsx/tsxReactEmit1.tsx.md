__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1008,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      },
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 147,
            "name": "selfClosed1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 150,
            "end": 157,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 150,
              "end": 157,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 151,
                "end": 154,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 174,
            "name": "selfClosed2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 177,
            "end": 190,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 177,
              "end": 190,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 178,
                "end": 181,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 207,
            "name": "selfClosed3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 210,
            "end": 223,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 210,
              "end": 223,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 211,
                "end": 214,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 240,
            "name": "selfClosed4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 243,
            "end": 262,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 243,
              "end": 262,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 247,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 279,
            "name": "selfClosed5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 282,
            "end": 301,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 282,
              "end": 301,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 283,
                "end": 286,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 318,
            "name": "selfClosed6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 321,
            "end": 342,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 321,
              "end": 342,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 322,
                "end": 325,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 359,
            "name": "selfClosed7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 362,
            "end": 383,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 362,
              "end": 383,
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": {
                "type": "JSXIdentifier",
                "start": 363,
                "end": 366,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 401,
            "name": "openClosed1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 404,
            "end": 415,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 404,
              "end": 409,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 405,
                "end": 408,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 432,
            "name": "openClosed2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 435,
            "end": 455,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 435,
              "end": 446,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 436,
                "end": 439,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": [
              {
                "type": "JSXText",
                "start": 446,
                "end": 449,
                "value": "foo",
                "raw": "foo"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 472,
            "name": "openClosed3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 475,
            "end": 495,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 475,
              "end": 486,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 476,
                "end": 479,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 539,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 512,
            "name": "openClosed4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 515,
            "end": 539,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 515,
              "end": 526,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 516,
                "end": 519,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 541,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 556,
            "name": "openClosed5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 559,
            "end": 585,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 559,
              "end": 572,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 560,
                "end": 563,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 578,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 588,
      "end": 875,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 603,
        "name": "SomeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 604,
        "end": 875,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 607,
            "end": 873,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 608,
              "end": 873,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 611,
                "end": 873,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 615,
                    "end": 655,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 619,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 628,
                          "name": "rewrites1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 631,
                          "end": 654,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 631,
                            "end": 636,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 632,
                              "end": 635,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 643,
                                  "end": 647
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 658,
                    "end": 700,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 662,
                        "end": 699,
                        "id": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 671,
                          "name": "rewrites2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 674,
                          "end": 699,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 674,
                            "end": 679,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 675,
                              "end": 678,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "SpreadElement",
                                    "start": 684,
                                    "end": 688,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 687,
                                      "end": 688,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 690,
                                    "end": 691,
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 703,
                    "end": 736,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 707,
                        "end": 735,
                        "id": {
                          "type": "Identifier",
                          "start": 707,
                          "end": 716,
                          "name": "rewrites3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 719,
                          "end": 735,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 719,
                            "end": 724,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 720,
                              "end": 723,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 726,
                                      "end": 727,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 726,
                                      "end": 727,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 740,
                    "end": 783,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 744,
                        "end": 782,
                        "id": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 753,
                          "name": "rewrites4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 756,
                          "end": 782,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 756,
                            "end": 776,
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
                                    "id": null,
                                    "expression": true,
                                    "generator": false,
                                    "async": false,
                                    "params": [],
                                    "body": {
                                      "type": "ThisExpression",
                                      "start": 770,
                                      "end": 774
                                    },
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 757,
                              "end": 760,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          },
                          "children": []
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 786,
                    "end": 831,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 790,
                        "end": 830,
                        "id": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 799,
                          "name": "rewrites5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 802,
                          "end": 830,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 802,
                            "end": 824,
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
                                        "name": "p",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "SpreadElement",
                                        "start": 814,
                                        "end": 818,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 817,
                                          "end": 818,
                                          "name": "p",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 820,
                                        "end": 821,
                                        "name": "p",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 803,
                              "end": 806,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          },
                          "children": []
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 834,
                    "end": 870,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 838,
                        "end": 869,
                        "id": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 847,
                          "name": "rewrites6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "JSXElement",
                          "start": 850,
                          "end": 869,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 850,
                            "end": 863,
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
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 859,
                                          "end": 860,
                                          "name": "p",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 859,
                                          "end": 860,
                                          "name": "p",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 851,
                              "end": 854,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          },
                          "children": []
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 877,
      "end": 913,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 912,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 892,
            "name": "whitespace1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 895,
            "end": 912,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 895,
              "end": 900,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 896,
                "end": 899,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": [
              {
                "type": "JSXText",
                "start": 900,
                "end": 906,
                "value": "      ",
                "raw": "      "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 953,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 952,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 929,
            "name": "whitespace2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 932,
            "end": 952,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 932,
              "end": 937,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 933,
                "end": 936,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "JSXText",
                "start": 942,
                "end": 946,
                "value": "    ",
                "raw": "    "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 954,
      "end": 1007,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 958,
          "end": 1006,
          "id": {
            "type": "Identifier",
            "start": 958,
            "end": 969,
            "name": "whitespace3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 972,
            "end": 1006,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 972,
              "end": 977,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 973,
                "end": 976,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "JSXText",
                "start": 989,
                "end": 1000,
                "value": "    \n      ",
                "raw": "    \n      "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
