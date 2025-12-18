__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 19,
              "end": 22
            },
            "id": null,
            "generator": false,
            "start": 9,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  },
                  "start": 34,
                  "end": 42
                },
                "start": 33,
                "end": 42
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "start": 45,
                  "end": 53
                },
                "start": 44,
                "end": 53
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 67,
              "end": 70
            },
            "id": null,
            "generator": false,
            "start": 32,
            "end": 70
          },
          "definite": false,
          "start": 27,
          "end": 70
        }
      ],
      "declare": false,
      "start": 23,
      "end": 70
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 77
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  },
                  "start": 93,
                  "end": 101
                },
                "start": 92,
                "end": 101
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
                  "start": 106,
                  "end": 110
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 103,
                "end": 110
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 119,
              "end": 122
            },
            "id": null,
            "generator": false,
            "start": 80,
            "end": 122
          },
          "definite": false,
          "start": 75,
          "end": 122
        }
      ],
      "declare": false,
      "start": 71,
      "end": 122
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 136,
                    "end": 142
                  },
                  "start": 134,
                  "end": 142
                },
                "start": 133,
                "end": 142
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 147,
                    "end": 153
                  },
                  "start": 145,
                  "end": 153
                },
                "start": 144,
                "end": 153
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
                  "start": 158,
                  "end": 162
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 155,
                "end": 162
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 176,
              "end": 179
            },
            "id": null,
            "generator": false,
            "start": 132,
            "end": 179
          },
          "definite": false,
          "start": 127,
          "end": 179
        }
      ],
      "declare": false,
      "start": 123,
      "end": 179
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 186
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 197
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 190,
                "end": 197
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 206,
              "end": 209
            },
            "id": null,
            "generator": false,
            "start": 189,
            "end": 209
          },
          "definite": false,
          "start": 184,
          "end": 209
        }
      ],
      "declare": false,
      "start": 180,
      "end": 209
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 227
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 220,
                "end": 227
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 241,
              "end": 244
            },
            "id": null,
            "generator": false,
            "start": 219,
            "end": 244
          },
          "definite": false,
          "start": 214,
          "end": 244
        }
      ],
      "declare": false,
      "start": 210,
      "end": 244
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 251
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 258,
                    "end": 264
                  },
                  "start": 256,
                  "end": 264
                },
                "start": 255,
                "end": 264
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 269,
                    "end": 275
                  },
                  "start": 267,
                  "end": 275
                },
                "start": 266,
                "end": 275
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 281,
                  "end": 283
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 283
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 292,
              "end": 295
            },
            "id": null,
            "generator": false,
            "start": 254,
            "end": 295
          },
          "definite": false,
          "start": 249,
          "end": 295
        }
      ],
      "declare": false,
      "start": 245,
      "end": 295
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 302
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 309,
                    "end": 315
                  },
                  "start": 307,
                  "end": 315
                },
                "start": 306,
                "end": 315
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 320,
                    "end": 326
                  },
                  "start": 318,
                  "end": 326
                },
                "start": 317,
                "end": 326
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 332,
                  "end": 334
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 334
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 348,
              "end": 351
            },
            "id": null,
            "generator": false,
            "start": 305,
            "end": 351
          },
          "definite": false,
          "start": 300,
          "end": 351
        }
      ],
      "declare": false,
      "start": 296,
      "end": 351
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 358
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 365,
                    "end": 371
                  },
                  "start": 363,
                  "end": 371
                },
                "start": 362,
                "end": 371
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 374,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
            },
            "id": null,
            "generator": false,
            "start": 361,
            "end": 389
          },
          "definite": false,
          "start": 356,
          "end": 389
        }
      ],
      "declare": false,
      "start": 352,
      "end": 390
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 398
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 405,
                    "end": 411
                  },
                  "start": 403,
                  "end": 411
                },
                "start": 402,
                "end": 411
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 417,
                "end": 423
              },
              "start": 413,
              "end": 423
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "id": null,
            "generator": false,
            "start": 401,
            "end": 432
          },
          "definite": false,
          "start": 395,
          "end": 432
        }
      ],
      "declare": false,
      "start": 391,
      "end": 432
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 440
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 447,
                    "end": 453
                  },
                  "start": 445,
                  "end": 453
                },
                "start": 444,
                "end": 453
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 456,
                "end": 462
              },
              "start": 454,
              "end": 462
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "id": null,
            "generator": false,
            "start": 443,
            "end": 477
          },
          "definite": false,
          "start": 437,
          "end": 477
        }
      ],
      "declare": false,
      "start": 433,
      "end": 478
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 486
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 493,
                    "end": 499
                  },
                  "start": 491,
                  "end": 499
                },
                "start": 490,
                "end": 499
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 505,
                "end": 511
              },
              "start": 501,
              "end": 511
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 526
            },
            "id": null,
            "generator": false,
            "start": 489,
            "end": 526
          },
          "definite": false,
          "start": 483,
          "end": 526
        }
      ],
      "declare": false,
      "start": 479,
      "end": 526
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 555
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 562,
                    "end": 568
                  },
                  "start": 560,
                  "end": 568
                },
                "start": 559,
                "end": 568
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "id": null,
            "generator": false,
            "start": 558,
            "end": 579
          },
          "definite": false,
          "start": 552,
          "end": 579
        }
      ],
      "declare": false,
      "start": 548,
      "end": 580
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 609
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 616,
                    "end": 622
                  },
                  "start": 614,
                  "end": 622
                },
                "start": 613,
                "end": 622
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 630,
                "end": 636
              },
              "start": 628,
              "end": 636
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 641
            },
            "id": null,
            "generator": false,
            "start": 612,
            "end": 641
          },
          "definite": false,
          "start": 606,
          "end": 641
        }
      ],
      "declare": false,
      "start": 602,
      "end": 642
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 671
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 678,
                    "end": 684
                  },
                  "start": 676,
                  "end": 684
                },
                "start": 675,
                "end": 684
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 691,
                "end": 697
              },
              "start": 685,
              "end": 697
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 702
            },
            "id": null,
            "generator": false,
            "start": 674,
            "end": 702
          },
          "definite": false,
          "start": 668,
          "end": 702
        }
      ],
      "declare": false,
      "start": 664,
      "end": 703
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
            "name": "f14",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 732
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 747,
              "end": 749
            },
            "id": null,
            "generator": false,
            "start": 735,
            "end": 749
          },
          "definite": false,
          "start": 729,
          "end": 749
        }
      ],
      "declare": false,
      "start": 725,
      "end": 749
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
            "name": "f15",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 778
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 785,
                    "end": 791
                  },
                  "start": 783,
                  "end": 791
                },
                "start": 782,
                "end": 791
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 794,
                "end": 800
              },
              "start": 792,
              "end": 800
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 811
            },
            "id": null,
            "generator": false,
            "start": 781,
            "end": 811
          },
          "definite": false,
          "start": 775,
          "end": 811
        }
      ],
      "declare": false,
      "start": 771,
      "end": 811
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
            "name": "f16",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 840
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 847,
                    "end": 853
                  },
                  "start": 845,
                  "end": 853
                },
                "start": 844,
                "end": 853
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 856
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 859,
                  "end": 861
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 866,
                "end": 872
              },
              "start": 862,
              "end": 872
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 883
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 887
              },
              "start": 882,
              "end": 887
            },
            "id": null,
            "generator": false,
            "start": 843,
            "end": 887
          },
          "definite": false,
          "start": 837,
          "end": 887
        }
      ],
      "declare": false,
      "start": 833,
      "end": 888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 902
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 915,
                  "end": 922
                },
                "start": 912,
                "end": 922
              },
              "start": 909,
              "end": 922
            },
            "start": 907,
            "end": 922
          },
          "start": 903,
          "end": 922
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 924,
        "end": 927
      },
      "expression": false,
      "start": 890,
      "end": 927
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 928,
          "end": 931
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 942,
              "end": 946
            },
            "id": null,
            "generator": false,
            "start": 932,
            "end": 946
          }
        ],
        "optional": false,
        "start": 928,
        "end": 947
      },
      "directive": null,
      "start": 928,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 952
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 972,
                    "end": 977
                  },
                  "start": 965,
                  "end": 978
                }
              ],
              "start": 963,
              "end": 980
            },
            "id": null,
            "generator": false,
            "start": 953,
            "end": 980
          }
        ],
        "optional": false,
        "start": 949,
        "end": 981
      },
      "directive": null,
      "start": 949,
      "end": 982
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 995
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "City",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1012
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1034
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1038,
                            "end": 1044
                          },
                          "start": 1036,
                          "end": 1044
                        },
                        "start": 1035,
                        "end": 1044
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1046,
                          "end": 1051
                        },
                        "right": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 1072,
                            "end": 1075
                          },
                          "id": null,
                          "generator": false,
                          "start": 1054,
                          "end": 1075
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1075
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1077,
                      "end": 1088
                    },
                    "expression": false,
                    "start": 1034,
                    "end": 1088
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1023,
                  "end": 1088
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1105,
                    "end": 1106
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1127,
                          "end": 1128
                        },
                        "operator": "*",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1131,
                          "end": 1132
                        },
                        "start": 1127,
                        "end": 1132
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1135,
                        "end": 1136
                      },
                      "start": 1127,
                      "end": 1136
                    },
                    "id": null,
                    "generator": false,
                    "start": 1109,
                    "end": 1136
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1098,
                  "end": 1136
                }
              ],
              "start": 1013,
              "end": 1142
            },
            "abstract": false,
            "declare": false,
            "start": 1002,
            "end": 1142
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1164
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "claw",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1179
                    },
                    "initializer": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1201,
                          "end": 1203
                        },
                        "id": null,
                        "generator": false,
                        "start": 1183,
                        "end": 1203
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1182,
                      "end": 1206
                    },
                    "computed": false,
                    "start": 1175,
                    "end": 1206
                  }
                ],
                "start": 1165,
                "end": 1212
              },
              "const": false,
              "declare": false,
              "start": 1155,
              "end": 1212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1148,
            "end": 1212
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1229,
                    "end": 1230
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1233,
                        "end": 1234
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "City",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1250,
                        "end": 1254
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Enum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1255,
                            "end": 1259
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "claw",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1260,
                            "end": 1264
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1255,
                          "end": 1264
                        }
                      ],
                      "start": 1246,
                      "end": 1265
                    },
                    "id": null,
                    "generator": false,
                    "start": 1233,
                    "end": 1265
                  },
                  "definite": false,
                  "start": 1229,
                  "end": 1265
                }
              ],
              "declare": false,
              "start": 1225,
              "end": 1266
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1218,
            "end": 1266
          }
        ],
        "start": 996,
        "end": 1268
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 984,
      "end": 1268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1268
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4,
    "end": 6,
    "range": [
      4,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 16,
    "end": 18,
    "range": [
      16,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26,
    "range": [
      23,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 27,
    "end": 29,
    "range": [
      27,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 75,
    "end": 77,
    "range": [
      75,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 106,
    "end": 110,
    "range": [
      106,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 214,
    "end": 216,
    "range": [
      214,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 223,
    "end": 227,
    "range": [
      223,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 238,
    "end": 240,
    "range": [
      238,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 249,
    "end": 251,
    "range": [
      249,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 258,
    "end": 264,
    "range": [
      258,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 300,
    "end": 302,
    "range": [
      300,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 309,
    "end": 315,
    "range": [
      309,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 320,
    "end": 326,
    "range": [
      320,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 332,
    "end": 334,
    "range": [
      332,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 365,
    "end": 371,
    "range": [
      365,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387,
    "range": [
      385,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394,
    "range": [
      391,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 395,
    "end": 398,
    "range": [
      395,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430,
    "range": [
      428,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436,
    "range": [
      433,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 437,
    "end": 440,
    "range": [
      437,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 447,
    "end": 453,
    "range": [
      447,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 473,
    "end": 475,
    "range": [
      473,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482,
    "range": [
      479,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 493,
    "end": 499,
    "range": [
      493,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551,
    "range": [
      548,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 552,
    "end": 555,
    "range": [
      552,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 562,
    "end": 568,
    "range": [
      562,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 606,
    "end": 609,
    "range": [
      606,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 616,
    "end": 622,
    "range": [
      616,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 637,
    "end": 639,
    "range": [
      637,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 678,
    "end": 684,
    "range": [
      678,
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
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 691,
    "end": 697,
    "range": [
      691,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 698,
    "end": 700,
    "range": [
      698,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728,
    "range": [
      725,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 744,
    "end": 746,
    "range": [
      744,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 775,
    "end": 778,
    "range": [
      775,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 785,
    "end": 791,
    "range": [
      785,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 794,
    "end": 800,
    "range": [
      794,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 807,
    "end": 809,
    "range": [
      807,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836,
    "range": [
      833,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 837,
    "end": 840,
    "range": [
      837,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 847,
    "end": 853,
    "range": [
      847,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 859,
    "end": 861,
    "range": [
      859,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 866,
    "end": 872,
    "range": [
      866,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 879,
    "end": 881,
    "range": [
      879,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 890,
    "end": 898,
    "range": [
      890,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 899,
    "end": 902,
    "range": [
      899,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 915,
    "end": 922,
    "range": [
      915,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 928,
    "end": 931,
    "range": [
      928,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 939,
    "end": 941,
    "range": [
      939,
      941
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 942,
    "end": 946,
    "range": [
      942,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 949,
    "end": 952,
    "range": [
      949,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 960,
    "end": 962,
    "range": [
      960,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 965,
    "end": 971,
    "range": [
      965,
      971
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 972,
    "end": 977,
    "range": [
      972,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 984,
    "end": 993,
    "range": [
      984,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1002,
    "end": 1007,
    "range": [
      1002,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "City",
    "start": 1008,
    "end": 1012,
    "range": [
      1008,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1023,
    "end": 1034,
    "range": [
      1023,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1046,
    "end": 1051,
    "range": [
      1046,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1069,
    "end": 1071,
    "range": [
      1069,
      1071
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1072,
    "end": 1075,
    "range": [
      1072,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1098,
    "end": 1104,
    "range": [
      1098,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1124,
    "end": 1126,
    "range": [
      1124,
      1126
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1148,
    "end": 1154,
    "range": [
      1148,
      1154
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1155,
    "end": 1159,
    "range": [
      1155,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 1160,
    "end": 1164,
    "range": [
      1160,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "claw",
    "start": 1175,
    "end": 1179,
    "range": [
      1175,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200,
    "range": [
      1198,
      1200
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1201,
    "end": 1203,
    "range": [
      1201,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1218,
    "end": 1224,
    "range": [
      1218,
      1224
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1225,
    "end": 1228,
    "range": [
      1225,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1243,
    "end": 1245,
    "range": [
      1243,
      1245
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1246,
    "end": 1249,
    "range": [
      1246,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "City",
    "start": 1250,
    "end": 1254,
    "range": [
      1250,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 1255,
    "end": 1259,
    "range": [
      1255,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "claw",
    "start": 1260,
    "end": 1264,
    "range": [
      1260,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  }
]
```
