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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "all",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 43,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 74,
        "decorators": [],
        "name": "weird",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 94,
          "decorators": [],
          "name": "a",
          "optional": true,
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
          }
        },
        {
          "type": "Identifier",
          "start": 96,
          "end": 115,
          "decorators": [],
          "name": "b",
          "optional": true,
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
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 147,
        "decorators": [],
        "name": "prefix",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 157,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 151,
              "end": 157
            }
          }
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 169,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 169,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 163,
              "end": 169
            }
          }
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 181,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 175,
              "end": 181
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 211,
        "decorators": [],
        "name": "rest",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 221,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 221,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 215,
              "end": 221
            }
          }
        },
        {
          "type": "Identifier",
          "start": 223,
          "end": 233,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 233,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 227,
              "end": 233
            }
          }
        },
        {
          "type": "Identifier",
          "start": 235,
          "end": 245,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 245,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            }
          }
        },
        {
          "type": "RestElement",
          "start": 248,
          "end": 265,
          "argument": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "decorators": [],
            "name": "rest",
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
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 297,
        "decorators": [],
        "name": "normal",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 298,
          "end": 307,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 307,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 301,
              "end": 307
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 338,
        "decorators": [],
        "name": "thunk",
        "optional": false
      },
      "params": [],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "decorators": [],
        "name": "prefix2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 375,
          "end": 384,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 378,
              "end": 384
            }
          }
        },
        {
          "type": "Identifier",
          "start": 386,
          "end": 395,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 395,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            }
          }
        },
        {
          "type": "Identifier",
          "start": 397,
          "end": 407,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 399,
            "end": 407,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 401,
              "end": 407
            }
          }
        },
        {
          "type": "Identifier",
          "start": 409,
          "end": 419,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 411,
            "end": 419,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 413,
              "end": 419
            }
          }
        }
      ],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 453,
            "decorators": [],
            "name": "ns",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 493,
            "decorators": [],
            "name": "mixed",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 530,
            "decorators": [],
            "name": "tuple",
            "optional": false,
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
      "start": 541,
      "end": 551,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 551,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 545,
            "end": 550,
            "argument": {
              "type": "Identifier",
              "start": 548,
              "end": 550,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 544,
          "decorators": [],
          "name": "all",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 564,
      "expression": {
        "type": "CallExpression",
        "start": 552,
        "end": 564,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 558,
            "end": 563,
            "argument": {
              "type": "Identifier",
              "start": 561,
              "end": 563,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 552,
          "end": 557,
          "decorators": [],
          "name": "weird",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 565,
        "end": 580,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 571,
            "end": 579,
            "argument": {
              "type": "Identifier",
              "start": 574,
              "end": 579,
              "decorators": [],
              "name": "mixed",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 565,
          "end": 570,
          "decorators": [],
          "name": "weird",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 596,
      "expression": {
        "type": "CallExpression",
        "start": 581,
        "end": 596,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 587,
            "end": 595,
            "argument": {
              "type": "Identifier",
              "start": 590,
              "end": 595,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 581,
          "end": 586,
          "decorators": [],
          "name": "weird",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 597,
      "end": 615,
      "expression": {
        "type": "CallExpression",
        "start": 597,
        "end": 615,
        "arguments": [
          {
            "type": "Literal",
            "start": 604,
            "end": 607,
            "raw": "\"a\"",
            "value": "a"
          },
          {
            "type": "SpreadElement",
            "start": 609,
            "end": 614,
            "argument": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 597,
          "end": 603,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 632,
        "arguments": [
          {
            "type": "Literal",
            "start": 621,
            "end": 624,
            "raw": "\"d\"",
            "value": "d"
          },
          {
            "type": "SpreadElement",
            "start": 626,
            "end": 631,
            "argument": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 616,
          "end": 620,
          "decorators": [],
          "name": "rest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 654,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 654,
        "end": 672,
        "arguments": [
          {
            "type": "Literal",
            "start": 661,
            "end": 664,
            "raw": "\"g\"",
            "value": "g"
          },
          {
            "type": "SpreadElement",
            "start": 666,
            "end": 671,
            "argument": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 654,
          "end": 660,
          "decorators": [],
          "name": "normal",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 673,
      "end": 685,
      "expression": {
        "type": "CallExpression",
        "start": 673,
        "end": 685,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 679,
            "end": 684,
            "argument": {
              "type": "Identifier",
              "start": 682,
              "end": 684,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 673,
          "end": 678,
          "decorators": [],
          "name": "thunk",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 707,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 707,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 698,
            "end": 706,
            "argument": {
              "type": "Identifier",
              "start": 701,
              "end": 706,
              "decorators": [],
              "name": "mixed",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 694,
          "end": 697,
          "decorators": [],
          "name": "all",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 721,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 712,
            "end": 720,
            "argument": {
              "type": "Identifier",
              "start": 715,
              "end": 720,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 711,
          "decorators": [],
          "name": "all",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 743,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 743,
        "arguments": [
          {
            "type": "Literal",
            "start": 729,
            "end": 732,
            "raw": "\"b\"",
            "value": "b"
          },
          {
            "type": "SpreadElement",
            "start": 734,
            "end": 742,
            "argument": {
              "type": "Identifier",
              "start": 737,
              "end": 742,
              "decorators": [],
              "name": "mixed",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 728,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 765,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 765,
        "arguments": [
          {
            "type": "Literal",
            "start": 751,
            "end": 754,
            "raw": "\"c\"",
            "value": "c"
          },
          {
            "type": "SpreadElement",
            "start": 756,
            "end": 764,
            "argument": {
              "type": "Identifier",
              "start": 759,
              "end": 764,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 750,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 766,
      "end": 785,
      "expression": {
        "type": "CallExpression",
        "start": 766,
        "end": 785,
        "arguments": [
          {
            "type": "Literal",
            "start": 771,
            "end": 774,
            "raw": "\"e\"",
            "value": "e"
          },
          {
            "type": "SpreadElement",
            "start": 776,
            "end": 784,
            "argument": {
              "type": "Identifier",
              "start": 779,
              "end": 784,
              "decorators": [],
              "name": "mixed",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 766,
          "end": 770,
          "decorators": [],
          "name": "rest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 786,
      "end": 805,
      "expression": {
        "type": "CallExpression",
        "start": 786,
        "end": 805,
        "arguments": [
          {
            "type": "Literal",
            "start": 791,
            "end": 794,
            "raw": "\"f\"",
            "value": "f"
          },
          {
            "type": "SpreadElement",
            "start": 796,
            "end": 804,
            "argument": {
              "type": "Identifier",
              "start": 799,
              "end": 804,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 786,
          "end": 790,
          "decorators": [],
          "name": "rest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 806,
      "end": 819,
      "expression": {
        "type": "CallExpression",
        "start": 806,
        "end": 819,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 813,
            "end": 818,
            "argument": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 806,
          "end": 812,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 856,
      "end": 872,
      "expression": {
        "type": "CallExpression",
        "start": 856,
        "end": 872,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 863,
            "end": 871,
            "argument": {
              "type": "Identifier",
              "start": 866,
              "end": 871,
              "decorators": [],
              "name": "mixed",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 856,
          "end": 862,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 873,
      "end": 889,
      "expression": {
        "type": "CallExpression",
        "start": 873,
        "end": 889,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 880,
            "end": 888,
            "argument": {
              "type": "Identifier",
              "start": 883,
              "end": 888,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 873,
          "end": 879,
          "decorators": [],
          "name": "prefix",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 890,
      "end": 910,
      "expression": {
        "type": "CallExpression",
        "start": 890,
        "end": 909,
        "arguments": [
          {
            "type": "Literal",
            "start": 898,
            "end": 901,
            "raw": "\"g\"",
            "value": "g"
          },
          {
            "type": "SpreadElement",
            "start": 903,
            "end": 908,
            "argument": {
              "type": "Identifier",
              "start": 906,
              "end": 908,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 890,
          "end": 897,
          "decorators": [],
          "name": "prefix2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
