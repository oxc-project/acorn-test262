__ESTREE_TEST__:PASS:
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
