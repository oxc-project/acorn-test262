__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 10,
                  "end": 11
                },
                "start": 10,
                "end": 11
              },
              "start": 8,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 26,
                  "end": 27
                },
                "start": 26,
                "end": 27
              },
              "start": 24,
              "end": 27
            },
            "start": 21,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 30,
            "end": 31
          },
          "definite": false,
          "start": 21,
          "end": 31
        }
      ],
      "declare": false,
      "start": 17,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 42,
                  "end": 43
                },
                "start": 42,
                "end": 43
              },
              "start": 40,
              "end": 43
            },
            "start": 37,
            "end": 43
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 46,
            "end": 47
          },
          "definite": false,
          "start": 37,
          "end": 47
        }
      ],
      "declare": false,
      "start": 33,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOrTwo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 63,
                      "end": 64
                    },
                    "start": 63,
                    "end": 64
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 67,
                      "end": 68
                    },
                    "start": 67,
                    "end": 68
                  }
                ],
                "start": 63,
                "end": 68
              },
              "start": 61,
              "end": 68
            },
            "start": 53,
            "end": 68
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 72,
                    "end": 73
                  },
                  "start": 72,
                  "end": 73
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 76,
                    "end": 77
                  },
                  "start": 76,
                  "end": 77
                }
              ],
              "start": 72,
              "end": 77
            },
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 78,
              "end": 79
            },
            "start": 71,
            "end": 79
          },
          "definite": false,
          "start": 53,
          "end": 79
        }
      ],
      "declare": false,
      "start": 49,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 97,
                    "end": 98
                  },
                  "start": 97,
                  "end": 98
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 101,
                    "end": 102
                  },
                  "start": 101,
                  "end": 102
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 105,
                    "end": 106
                  },
                  "start": 105,
                  "end": 106
                }
              ],
              "start": 97,
              "end": 106
            },
            "start": 95,
            "end": 106
          },
          "start": 94,
          "end": 106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "zero",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 144
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "directive": null,
                    "start": 158,
                    "end": 160
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 173,
                    "end": 179
                  }
                ],
                "start": 135,
                "end": 179
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "directive": null,
                    "start": 210,
                    "end": 212
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 225,
                    "end": 231
                  }
                ],
                "start": 188,
                "end": 231
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 248
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "directive": null,
                    "start": 262,
                    "end": 264
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 277,
                    "end": 283
                  }
                ],
                "start": 240,
                "end": 283
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 314
                    },
                    "directive": null,
                    "start": 313,
                    "end": 315
                  }
                ],
                "start": 292,
                "end": 315
              }
            ],
            "start": 114,
            "end": 321
          }
        ],
        "start": 108,
        "end": 323
      },
      "expression": false,
      "start": 82,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 336
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 340,
                    "end": 341
                  },
                  "start": 340,
                  "end": 341
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 344,
                    "end": 345
                  },
                  "start": 344,
                  "end": 345
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 348,
                    "end": 349
                  },
                  "start": 348,
                  "end": 349
                }
              ],
              "start": 340,
              "end": 349
            },
            "start": 338,
            "end": 349
          },
          "start": 337,
          "end": 349
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 366
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "zero",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 387
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "directive": null,
                    "start": 401,
                    "end": 403
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 416,
                    "end": 422
                  }
                ],
                "start": 378,
                "end": 422
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOrTwo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 444
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 459
                    },
                    "directive": null,
                    "start": 458,
                    "end": 460
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 473,
                    "end": 479
                  }
                ],
                "start": 431,
                "end": 479
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 510
                    },
                    "directive": null,
                    "start": 509,
                    "end": 511
                  }
                ],
                "start": 488,
                "end": 511
              }
            ],
            "start": 357,
            "end": 517
          }
        ],
        "start": 351,
        "end": 519
      },
      "expression": false,
      "start": 325,
      "end": 519
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Falsy",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 534,
              "end": 539
            },
            "start": 534,
            "end": 539
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 542,
              "end": 543
            },
            "start": 542,
            "end": 543
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 546,
              "end": 548
            },
            "start": 546,
            "end": 548
          },
          {
            "type": "TSNullKeyword",
            "start": 551,
            "end": 555
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 558,
            "end": 567
          }
        ],
        "start": 534,
        "end": 567
      },
      "declare": false,
      "start": 521,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 581
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Falsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 590
              },
              "typeArguments": null,
              "start": 585,
              "end": 590
            },
            "start": 583,
            "end": 590
          },
          "start": 582,
          "end": 590
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 603
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 616
                  },
                  "directive": null,
                  "start": 615,
                  "end": 617
                }
              ],
              "start": 605,
              "end": 623
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 644
                  },
                  "directive": null,
                  "start": 643,
                  "end": 645
                }
              ],
              "start": 633,
              "end": 651
            },
            "start": 598,
            "end": 651
          }
        ],
        "start": 592,
        "end": 653
      },
      "expression": false,
      "start": 570,
      "end": 653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 666
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 670,
                    "end": 671
                  },
                  "start": 670,
                  "end": 671
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 674,
                    "end": 675
                  },
                  "start": 674,
                  "end": 675
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 678,
                    "end": 682
                  },
                  "start": 678,
                  "end": 682
                },
                {
                  "type": "TSStringKeyword",
                  "start": 685,
                  "end": 691
                }
              ],
              "start": 670,
              "end": 691
            },
            "start": 668,
            "end": 691
          },
          "start": 667,
          "end": 691
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 708
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 725,
                  "end": 726
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 741
                    },
                    "directive": null,
                    "start": 740,
                    "end": 742
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 755,
                    "end": 761
                  }
                ],
                "start": 720,
                "end": 761
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 775,
                  "end": 776
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 791
                    },
                    "directive": null,
                    "start": 790,
                    "end": 792
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 805,
                    "end": 811
                  }
                ],
                "start": 770,
                "end": 811
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 825,
                  "end": 830
                },
                "consequent": [],
                "start": 820,
                "end": 831
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "def",
                  "raw": "\"def\"",
                  "start": 845,
                  "end": 850
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 865
                    },
                    "directive": null,
                    "start": 864,
                    "end": 866
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 879,
                    "end": 885
                  }
                ],
                "start": 840,
                "end": 885
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 899,
                  "end": 903
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 918
                    },
                    "directive": null,
                    "start": 917,
                    "end": 919
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 932,
                    "end": 938
                  }
                ],
                "start": 894,
                "end": 938
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 952,
                  "end": 961
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 975,
                      "end": 976
                    },
                    "directive": null,
                    "start": 975,
                    "end": 977
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 990,
                    "end": 996
                  }
                ],
                "start": 947,
                "end": 996
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1027
                    },
                    "directive": null,
                    "start": 1026,
                    "end": 1028
                  }
                ],
                "start": 1005,
                "end": 1028
              }
            ],
            "start": 699,
            "end": 1034
          }
        ],
        "start": 693,
        "end": 1036
      },
      "expression": false,
      "start": 655,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1049
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1053,
                  "end": 1059
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1062,
                  "end": 1068
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1071,
                  "end": 1078
                }
              ],
              "start": 1053,
              "end": 1078
            },
            "start": 1051,
            "end": 1078
          },
          "start": 1050,
          "end": 1078
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1095
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 1112,
                  "end": 1117
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1132
                    },
                    "directive": null,
                    "start": 1131,
                    "end": 1133
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1146,
                    "end": 1152
                  }
                ],
                "start": 1107,
                "end": 1152
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1166,
                  "end": 1167
                },
                "consequent": [],
                "start": 1161,
                "end": 1168
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1182,
                  "end": 1183
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1197,
                      "end": 1198
                    },
                    "directive": null,
                    "start": 1197,
                    "end": 1199
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1212,
                    "end": 1218
                  }
                ],
                "start": 1177,
                "end": 1218
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1232,
                  "end": 1236
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "directive": null,
                    "start": 1250,
                    "end": 1252
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1265,
                    "end": 1271
                  }
                ],
                "start": 1227,
                "end": 1271
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1285,
                  "end": 1292
                },
                "consequent": [],
                "start": 1280,
                "end": 1293
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 1307,
                  "end": 1310
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1325
                    },
                    "directive": null,
                    "start": 1324,
                    "end": 1326
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1339,
                    "end": 1345
                  }
                ],
                "start": 1302,
                "end": 1345
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1375,
                      "end": 1376
                    },
                    "directive": null,
                    "start": 1375,
                    "end": 1377
                  }
                ],
                "start": 1354,
                "end": 1377
              }
            ],
            "start": 1086,
            "end": 1383
          }
        ],
        "start": 1080,
        "end": 1385
      },
      "expression": false,
      "start": 1038,
      "end": 1385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1385
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 4,
    "end": 8,
    "range": [
      4,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOrTwo",
    "start": 53,
    "end": 61,
    "range": [
      53,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90,
    "range": [
      82,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 140,
    "end": 144,
    "range": [
      140,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 240,
    "end": 244,
    "range": [
      240,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 292,
    "end": 299,
    "range": [
      292,
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
    "value": "x",
    "start": 313,
    "end": 314,
    "range": [
      313,
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
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 325,
    "end": 333,
    "range": [
      325,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 357,
    "end": 363,
    "range": [
      357,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 378,
    "end": 382,
    "range": [
      378,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 383,
    "end": 387,
    "range": [
      383,
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
    "value": "x",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 416,
    "end": 421,
    "range": [
      416,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOrTwo",
    "start": 436,
    "end": 444,
    "range": [
      436,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 473,
    "end": 478,
    "range": [
      473,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 488,
    "end": 495,
    "range": [
      488,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 534,
    "end": 539,
    "range": [
      534,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 546,
    "end": 548,
    "range": [
      546,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 558,
    "end": 567,
    "range": [
      558,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578,
    "range": [
      570,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 585,
    "end": 590,
    "range": [
      585,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 598,
    "end": 600,
    "range": [
      598,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 628,
    "end": 632,
    "range": [
      628,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663,
    "range": [
      655,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 664,
    "end": 666,
    "range": [
      664,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 678,
    "end": 682,
    "range": [
      678,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 699,
    "end": 705,
    "range": [
      699,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 720,
    "end": 724,
    "range": [
      720,
      724
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 755,
    "end": 760,
    "range": [
      755,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 770,
    "end": 774,
    "range": [
      770,
      774
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 805,
    "end": 810,
    "range": [
      805,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 820,
    "end": 824,
    "range": [
      820,
      824
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 825,
    "end": 830,
    "range": [
      825,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 840,
    "end": 844,
    "range": [
      840,
      844
    ]
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 845,
    "end": 850,
    "range": [
      845,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 879,
    "end": 884,
    "range": [
      879,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 894,
    "end": 898,
    "range": [
      894,
      898
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 899,
    "end": 903,
    "range": [
      899,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 932,
    "end": 937,
    "range": [
      932,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 947,
    "end": 951,
    "range": [
      947,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 952,
    "end": 961,
    "range": [
      952,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 990,
    "end": 995,
    "range": [
      990,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1005,
    "end": 1012,
    "range": [
      1005,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
    "end": 1046,
    "range": [
      1038,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1047,
    "end": 1049,
    "range": [
      1047,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1053,
    "end": 1059,
    "range": [
      1053,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1062,
    "end": 1068,
    "range": [
      1062,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1071,
    "end": 1078,
    "range": [
      1071,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1086,
    "end": 1092,
    "range": [
      1086,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1107,
    "end": 1111,
    "range": [
      1107,
      1111
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1112,
    "end": 1117,
    "range": [
      1112,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1146,
    "end": 1151,
    "range": [
      1146,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1212,
    "end": 1217,
    "range": [
      1212,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1227,
    "end": 1231,
    "range": [
      1227,
      1231
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1232,
    "end": 1236,
    "range": [
      1232,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1265,
    "end": 1270,
    "range": [
      1265,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1285,
    "end": 1292,
    "range": [
      1285,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1302,
    "end": 1306,
    "range": [
      1302,
      1306
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1339,
    "end": 1344,
    "range": [
      1339,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1354,
    "end": 1361,
    "range": [
      1354,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  }
]
```
