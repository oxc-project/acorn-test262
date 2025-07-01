__ESTREE_TEST__:PASS:
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
