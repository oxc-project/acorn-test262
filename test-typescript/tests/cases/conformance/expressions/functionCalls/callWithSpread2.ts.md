__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 911,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "all",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 43,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 50,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 46,
          "end": 50
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 52,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 74,
        "name": "weird",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 94,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 94,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 79,
              "end": 94,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                },
                {
                  "type": "TSStringKeyword",
                  "start": 88,
                  "end": 94
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 96,
          "end": 115,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 115,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 100,
              "end": 115,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSStringKeyword",
                  "start": 109,
                  "end": 115
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 122,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 118,
          "end": 122
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 124,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 147,
        "name": "prefix",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 157,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 151,
              "end": 157
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 169,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 169,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 163,
              "end": 169
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 181,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 175,
              "end": 181
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 188,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 184,
          "end": 188
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 190,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 211,
        "name": "rest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 221,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 221,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 215,
              "end": 221
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 223,
          "end": 233,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 233,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 227,
              "end": 233
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 235,
          "end": 245,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 245,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 248,
          "end": 265,
          "argument": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 265,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 257,
              "end": 265,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 266,
        "end": 272,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 268,
          "end": 272
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 274,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 297,
        "name": "normal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 298,
          "end": 307,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 307,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 301,
              "end": 307
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 308,
        "end": 314,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 310,
          "end": 314
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 316,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 338,
        "name": "thunk",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 340,
        "end": 348,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 342,
          "end": 348
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 350,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "name": "prefix2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 375,
          "end": 384,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 378,
              "end": 384
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 386,
          "end": 395,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 395,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 397,
          "end": 407,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 399,
            "end": 407,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 401,
              "end": 407
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 409,
          "end": 419,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 411,
            "end": 419,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 413,
              "end": 419
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 420,
        "end": 426,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 422,
          "end": 426
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 453,
            "name": "ns",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 453,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 445,
                "end": 453,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 445,
                  "end": 451
                }
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
      "start": 455,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 493,
            "name": "mixed",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 493,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 474,
                "end": 493,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 475,
                  "end": 490,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 475,
                      "end": 481
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 484,
                      "end": 490
                    }
                  ]
                }
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
      "start": 495,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 530,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 530,
            "name": "tuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 514,
                "end": 530,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 515,
                    "end": 521
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 523,
                    "end": 529
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 541,
      "end": 551,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 551,
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 544,
          "name": "all",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 545,
            "end": 550,
            "argument": {
              "type": "Identifier",
              "start": 548,
              "end": 550,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 564,
      "expression": {
        "type": "CallExpression",
        "start": 552,
        "end": 564,
        "callee": {
          "type": "Identifier",
          "start": 552,
          "end": 557,
          "name": "weird",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 558,
            "end": 563,
            "argument": {
              "type": "Identifier",
              "start": 561,
              "end": 563,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 565,
        "end": 580,
        "callee": {
          "type": "Identifier",
          "start": 565,
          "end": 570,
          "name": "weird",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 571,
            "end": 579,
            "argument": {
              "type": "Identifier",
              "start": 574,
              "end": 579,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 596,
      "expression": {
        "type": "CallExpression",
        "start": 581,
        "end": 596,
        "callee": {
          "type": "Identifier",
          "start": 581,
          "end": 586,
          "name": "weird",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 587,
            "end": 595,
            "argument": {
              "type": "Identifier",
              "start": 590,
              "end": 595,
              "name": "tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 597,
      "end": 615,
      "expression": {
        "type": "CallExpression",
        "start": 597,
        "end": 615,
        "callee": {
          "type": "Identifier",
          "start": 597,
          "end": 603,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 604,
            "end": 607,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "SpreadElement",
            "start": 609,
            "end": 614,
            "argument": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 632,
        "callee": {
          "type": "Identifier",
          "start": 616,
          "end": 620,
          "name": "rest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 621,
            "end": 624,
            "value": "d",
            "raw": "\"d\""
          },
          {
            "type": "SpreadElement",
            "start": 626,
            "end": 631,
            "argument": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 654,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 654,
        "end": 672,
        "callee": {
          "type": "Identifier",
          "start": 654,
          "end": 660,
          "name": "normal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 661,
            "end": 664,
            "value": "g",
            "raw": "\"g\""
          },
          {
            "type": "SpreadElement",
            "start": 666,
            "end": 671,
            "argument": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 673,
      "end": 685,
      "expression": {
        "type": "CallExpression",
        "start": 673,
        "end": 685,
        "callee": {
          "type": "Identifier",
          "start": 673,
          "end": 678,
          "name": "thunk",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 679,
            "end": 684,
            "argument": {
              "type": "Identifier",
              "start": 682,
              "end": 684,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 707,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 707,
        "callee": {
          "type": "Identifier",
          "start": 694,
          "end": 697,
          "name": "all",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 698,
            "end": 706,
            "argument": {
              "type": "Identifier",
              "start": 701,
              "end": 706,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 721,
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 711,
          "name": "all",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 712,
            "end": 720,
            "argument": {
              "type": "Identifier",
              "start": 715,
              "end": 720,
              "name": "tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 743,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 743,
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 728,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 729,
            "end": 732,
            "value": "b",
            "raw": "\"b\""
          },
          {
            "type": "SpreadElement",
            "start": 734,
            "end": 742,
            "argument": {
              "type": "Identifier",
              "start": 737,
              "end": 742,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 765,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 765,
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 750,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 751,
            "end": 754,
            "value": "c",
            "raw": "\"c\""
          },
          {
            "type": "SpreadElement",
            "start": 756,
            "end": 764,
            "argument": {
              "type": "Identifier",
              "start": 759,
              "end": 764,
              "name": "tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 766,
      "end": 785,
      "expression": {
        "type": "CallExpression",
        "start": 766,
        "end": 785,
        "callee": {
          "type": "Identifier",
          "start": 766,
          "end": 770,
          "name": "rest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 771,
            "end": 774,
            "value": "e",
            "raw": "\"e\""
          },
          {
            "type": "SpreadElement",
            "start": 776,
            "end": 784,
            "argument": {
              "type": "Identifier",
              "start": 779,
              "end": 784,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 786,
      "end": 805,
      "expression": {
        "type": "CallExpression",
        "start": 786,
        "end": 805,
        "callee": {
          "type": "Identifier",
          "start": 786,
          "end": 790,
          "name": "rest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 791,
            "end": 794,
            "value": "f",
            "raw": "\"f\""
          },
          {
            "type": "SpreadElement",
            "start": 796,
            "end": 804,
            "argument": {
              "type": "Identifier",
              "start": 799,
              "end": 804,
              "name": "tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 806,
      "end": 819,
      "expression": {
        "type": "CallExpression",
        "start": 806,
        "end": 819,
        "callee": {
          "type": "Identifier",
          "start": 806,
          "end": 812,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 813,
            "end": 818,
            "argument": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 856,
      "end": 872,
      "expression": {
        "type": "CallExpression",
        "start": 856,
        "end": 872,
        "callee": {
          "type": "Identifier",
          "start": 856,
          "end": 862,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 863,
            "end": 871,
            "argument": {
              "type": "Identifier",
              "start": 866,
              "end": 871,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 873,
      "end": 889,
      "expression": {
        "type": "CallExpression",
        "start": 873,
        "end": 889,
        "callee": {
          "type": "Identifier",
          "start": 873,
          "end": 879,
          "name": "prefix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 880,
            "end": 888,
            "argument": {
              "type": "Identifier",
              "start": 883,
              "end": 888,
              "name": "tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 890,
      "end": 910,
      "expression": {
        "type": "CallExpression",
        "start": 890,
        "end": 909,
        "callee": {
          "type": "Identifier",
          "start": 890,
          "end": 897,
          "name": "prefix2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 898,
            "end": 901,
            "value": "g",
            "raw": "\"g\""
          },
          {
            "type": "SpreadElement",
            "start": 903,
            "end": 908,
            "argument": {
              "type": "Identifier",
              "start": 906,
              "end": 908,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
