__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "all",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 21,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "start": 35,
            "end": 43
          },
          "start": 33,
          "end": 43
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 46,
          "end": 50
        },
        "start": 44,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "weird",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 74
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 79,
              "end": 94
            },
            "start": 77,
            "end": 94
          },
          "start": 75,
          "end": 94
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 100,
              "end": 115
            },
            "start": 98,
            "end": 115
          },
          "start": 96,
          "end": 115
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 118,
          "end": 122
        },
        "start": 116,
        "end": 122
      },
      "body": null,
      "expression": false,
      "start": 52,
      "end": 123
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "prefix",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 147
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 151,
              "end": 157
            },
            "start": 149,
            "end": 157
          },
          "start": 148,
          "end": 157
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 163,
              "end": 169
            },
            "start": 161,
            "end": 169
          },
          "start": 159,
          "end": 169
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 175,
              "end": 181
            },
            "start": 173,
            "end": 181
          },
          "start": 171,
          "end": 181
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 184,
          "end": 188
        },
        "start": 182,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 124,
      "end": 189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rest",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 211
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 215,
              "end": 221
            },
            "start": 213,
            "end": 221
          },
          "start": 212,
          "end": 221
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 227,
              "end": 233
            },
            "start": 225,
            "end": 233
          },
          "start": 223,
          "end": 233
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            },
            "start": 237,
            "end": 245
          },
          "start": 235,
          "end": 245
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 255
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              },
              "start": 257,
              "end": 265
            },
            "start": 255,
            "end": 265
          },
          "value": null,
          "start": 248,
          "end": 265
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 268,
          "end": 272
        },
        "start": 266,
        "end": 272
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 273
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "normal",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 297
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 301,
              "end": 307
            },
            "start": 299,
            "end": 307
          },
          "start": 298,
          "end": 307
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 310,
          "end": 314
        },
        "start": 308,
        "end": 314
      },
      "body": null,
      "expression": false,
      "start": 274,
      "end": 315
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thunk",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 342,
          "end": 348
        },
        "start": 340,
        "end": 348
      },
      "body": null,
      "expression": false,
      "start": 316,
      "end": 349
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "prefix2",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 374
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 378,
              "end": 384
            },
            "start": 376,
            "end": 384
          },
          "start": 375,
          "end": 384
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            },
            "start": 387,
            "end": 395
          },
          "start": 386,
          "end": 395
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 401,
              "end": 407
            },
            "start": 399,
            "end": 407
          },
          "start": 397,
          "end": 407
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 413,
              "end": 419
            },
            "start": 411,
            "end": 419
          },
          "start": 409,
          "end": 419
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 422,
          "end": 426
        },
        "start": 420,
        "end": 426
      },
      "body": null,
      "expression": false,
      "start": 350,
      "end": 427
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 445,
                  "end": 451
                },
                "start": 445,
                "end": 453
              },
              "start": 443,
              "end": 453
            },
            "start": 441,
            "end": 453
          },
          "init": null,
          "definite": false,
          "start": 441,
          "end": 453
        }
      ],
      "declare": true,
      "start": 429,
      "end": 454
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
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 475,
                  "end": 490
                },
                "start": 474,
                "end": 493
              },
              "start": 472,
              "end": 493
            },
            "start": 467,
            "end": 493
          },
          "init": null,
          "definite": false,
          "start": 467,
          "end": 493
        }
      ],
      "declare": true,
      "start": 455,
      "end": 494
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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 514,
                "end": 530
              },
              "start": 512,
              "end": 530
            },
            "start": 507,
            "end": 530
          },
          "init": null,
          "definite": false,
          "start": 507,
          "end": 530
        }
      ],
      "declare": true,
      "start": 495,
      "end": 531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "all",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 544
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
            "start": 545,
            "end": 550
          }
        ],
        "optional": false,
        "start": 541,
        "end": 551
      },
      "directive": null,
      "start": 541,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "weird",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 563
            },
            "start": 558,
            "end": 563
          }
        ],
        "optional": false,
        "start": 552,
        "end": 564
      },
      "directive": null,
      "start": 552,
      "end": 564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "weird",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 570
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 579
            },
            "start": 571,
            "end": 579
          }
        ],
        "optional": false,
        "start": 565,
        "end": 580
      },
      "directive": null,
      "start": 565,
      "end": 580
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "weird",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 595
            },
            "start": 587,
            "end": 595
          }
        ],
        "optional": false,
        "start": 581,
        "end": 596
      },
      "directive": null,
      "start": 581,
      "end": 596
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 597,
          "end": 603
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 604,
            "end": 607
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 614
            },
            "start": 609,
            "end": 614
          }
        ],
        "optional": false,
        "start": 597,
        "end": 615
      },
      "directive": null,
      "start": 597,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 620
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "d",
            "raw": "\"d\"",
            "start": 621,
            "end": 624
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 631
            },
            "start": 626,
            "end": 631
          }
        ],
        "optional": false,
        "start": 616,
        "end": 632
      },
      "directive": null,
      "start": 616,
      "end": 632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": null,
          "start": 654,
          "end": 660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "g",
            "raw": "\"g\"",
            "start": 661,
            "end": 664
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 671
            },
            "start": 666,
            "end": 671
          }
        ],
        "optional": false,
        "start": 654,
        "end": 672
      },
      "directive": null,
      "start": 654,
      "end": 672
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thunk",
          "optional": false,
          "typeAnnotation": null,
          "start": 673,
          "end": 678
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 684
            },
            "start": 679,
            "end": 684
          }
        ],
        "optional": false,
        "start": 673,
        "end": 685
      },
      "directive": null,
      "start": 673,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "all",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 697
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 706
            },
            "start": 698,
            "end": 706
          }
        ],
        "optional": false,
        "start": 694,
        "end": 707
      },
      "directive": null,
      "start": 694,
      "end": 707
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "all",
          "optional": false,
          "typeAnnotation": null,
          "start": 708,
          "end": 711
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 720
            },
            "start": 712,
            "end": 720
          }
        ],
        "optional": false,
        "start": 708,
        "end": 721
      },
      "directive": null,
      "start": 708,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 728
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 729,
            "end": 732
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 742
            },
            "start": 734,
            "end": 742
          }
        ],
        "optional": false,
        "start": 722,
        "end": 743
      },
      "directive": null,
      "start": 722,
      "end": 743
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 750
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 751,
            "end": 754
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 764
            },
            "start": 756,
            "end": 764
          }
        ],
        "optional": false,
        "start": 744,
        "end": 765
      },
      "directive": null,
      "start": 744,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 770
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 771,
            "end": 774
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 784
            },
            "start": 776,
            "end": 784
          }
        ],
        "optional": false,
        "start": 766,
        "end": 785
      },
      "directive": null,
      "start": 766,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 786,
          "end": 790
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "f",
            "raw": "\"f\"",
            "start": 791,
            "end": 794
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 804
            },
            "start": 796,
            "end": 804
          }
        ],
        "optional": false,
        "start": 786,
        "end": 805
      },
      "directive": null,
      "start": 786,
      "end": 805
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 806,
          "end": 812
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 818
            },
            "start": 813,
            "end": 818
          }
        ],
        "optional": false,
        "start": 806,
        "end": 819
      },
      "directive": null,
      "start": 806,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 856,
          "end": 862
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 871
            },
            "start": 863,
            "end": 871
          }
        ],
        "optional": false,
        "start": 856,
        "end": 872
      },
      "directive": null,
      "start": 856,
      "end": 872
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix",
          "optional": false,
          "typeAnnotation": null,
          "start": 873,
          "end": 879
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 888
            },
            "start": 880,
            "end": 888
          }
        ],
        "optional": false,
        "start": 873,
        "end": 889
      },
      "directive": null,
      "start": 873,
      "end": 889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "prefix2",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 897
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "g",
            "raw": "\"g\"",
            "start": 898,
            "end": 901
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 908
            },
            "start": 903,
            "end": 908
          }
        ],
        "optional": false,
        "start": 890,
        "end": 909
      },
      "directive": null,
      "start": 890,
      "end": 910
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 910
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50,
    "range": [
      46,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68,
    "range": [
      60,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "weird",
    "start": 69,
    "end": 74,
    "range": [
      69,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140,
    "range": [
      132,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 190,
    "end": 197,
    "range": [
      190,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 198,
    "end": 206,
    "range": [
      198,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221,
    "range": [
      215,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 268,
    "end": 272,
    "range": [
      268,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 274,
    "end": 281,
    "range": [
      274,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 282,
    "end": 290,
    "range": [
      282,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 301,
    "end": 307,
    "range": [
      301,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 310,
    "end": 314,
    "range": [
      310,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 316,
    "end": 323,
    "range": [
      316,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 324,
    "end": 332,
    "range": [
      324,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348,
    "range": [
      342,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366,
    "range": [
      358,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix2",
    "start": 367,
    "end": 374,
    "range": [
      367,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 389,
    "end": 395,
    "range": [
      389,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 413,
    "end": 419,
    "range": [
      413,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 422,
    "end": 426,
    "range": [
      422,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 429,
    "end": 436,
    "range": [
      429,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440,
    "range": [
      437,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 441,
    "end": 443,
    "range": [
      441,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 445,
    "end": 451,
    "range": [
      445,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 455,
    "end": 462,
    "range": [
      455,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466,
    "range": [
      463,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 467,
    "end": 472,
    "range": [
      467,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 475,
    "end": 481,
    "range": [
      475,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 495,
    "end": 502,
    "range": [
      495,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 507,
    "end": 512,
    "range": [
      507,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 515,
    "end": 521,
    "range": [
      515,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 523,
    "end": 529,
    "range": [
      523,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 541,
    "end": 544,
    "range": [
      541,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 545,
    "end": 548,
    "range": [
      545,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "weird",
    "start": 552,
    "end": 557,
    "range": [
      552,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 558,
    "end": 561,
    "range": [
      558,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 561,
    "end": 563,
    "range": [
      561,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "weird",
    "start": 565,
    "end": 570,
    "range": [
      565,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 571,
    "end": 574,
    "range": [
      571,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 574,
    "end": 579,
    "range": [
      574,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "weird",
    "start": 581,
    "end": 586,
    "range": [
      581,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 587,
    "end": 590,
    "range": [
      587,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 590,
    "end": 595,
    "range": [
      590,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 597,
    "end": 603,
    "range": [
      597,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 604,
    "end": 607,
    "range": [
      604,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 609,
    "end": 612,
    "range": [
      609,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 616,
    "end": 620,
    "range": [
      616,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 621,
    "end": 624,
    "range": [
      621,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 626,
    "end": 629,
    "range": [
      626,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 629,
    "end": 631,
    "range": [
      629,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 654,
    "end": 660,
    "range": [
      654,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 666,
    "end": 669,
    "range": [
      666,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 669,
    "end": 671,
    "range": [
      669,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 673,
    "end": 678,
    "range": [
      673,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 682,
    "end": 684,
    "range": [
      682,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 698,
    "end": 701,
    "range": [
      698,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 701,
    "end": 706,
    "range": [
      701,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 712,
    "end": 715,
    "range": [
      712,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 715,
    "end": 720,
    "range": [
      715,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 737,
    "end": 742,
    "range": [
      737,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 744,
    "end": 750,
    "range": [
      744,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 751,
    "end": 754,
    "range": [
      751,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 756,
    "end": 759,
    "range": [
      756,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 759,
    "end": 764,
    "range": [
      759,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 766,
    "end": 770,
    "range": [
      766,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 776,
    "end": 779,
    "range": [
      776,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 779,
    "end": 784,
    "range": [
      779,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 786,
    "end": 790,
    "range": [
      786,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 791,
    "end": 794,
    "range": [
      791,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 796,
    "end": 799,
    "range": [
      796,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 799,
    "end": 804,
    "range": [
      799,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 806,
    "end": 812,
    "range": [
      806,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 813,
    "end": 816,
    "range": [
      813,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 816,
    "end": 818,
    "range": [
      816,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 866,
    "end": 871,
    "range": [
      866,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 873,
    "end": 879,
    "range": [
      873,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 883,
    "end": 888,
    "range": [
      883,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix2",
    "start": 890,
    "end": 897,
    "range": [
      890,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 903,
    "end": 906,
    "range": [
      903,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 906,
    "end": 908,
    "range": [
      906,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  }
]
```
