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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 33,
                    "end": 40
                  }
                ],
                "start": 15,
                "end": 40
              },
              "start": 13,
              "end": 40
            },
            "start": 12,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "start": 53,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 62
        }
      ],
      "declare": true,
      "start": 41,
      "end": 63
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "start": 76,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 76,
          "end": 85
        }
      ],
      "declare": true,
      "start": 64,
      "end": 86
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 102,
                "end": 109
              },
              "start": 100,
              "end": 109
            },
            "start": 99,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 109
        }
      ],
      "declare": true,
      "start": 87,
      "end": 110
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
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 133,
                "end": 140
              },
              "start": 131,
              "end": 140
            },
            "start": 123,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 140
        }
      ],
      "declare": true,
      "start": 111,
      "end": 141
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 153
        },
        "start": 147,
        "end": 153
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
              "start": 161,
              "end": 162
            },
            "directive": null,
            "start": 161,
            "end": 163
          }
        ],
        "start": 155,
        "end": 165
      },
      "alternate": null,
      "start": 143,
      "end": 165
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 172
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        },
        "start": 171,
        "end": 177
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
              "start": 185,
              "end": 186
            },
            "directive": null,
            "start": 185,
            "end": 187
          }
        ],
        "start": 179,
        "end": 189
      },
      "alternate": null,
      "start": 167,
      "end": 189
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 196
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "start": 195,
        "end": 201
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
              "start": 209,
              "end": 210
            },
            "directive": null,
            "start": 209,
            "end": 211
          }
        ],
        "start": 203,
        "end": 213
      },
      "alternate": null,
      "start": 191,
      "end": 213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 224,
          "end": 225
        },
        "start": 219,
        "end": 225
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
              "start": 233,
              "end": 234
            },
            "directive": null,
            "start": 233,
            "end": 235
          }
        ],
        "start": 227,
        "end": 237
      },
      "alternate": null,
      "start": 215,
      "end": 237
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 244
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 248,
          "end": 250
        },
        "start": 243,
        "end": 250
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
              "start": 258,
              "end": 259
            },
            "directive": null,
            "start": 258,
            "end": 260
          }
        ],
        "start": 252,
        "end": 262
      },
      "alternate": null,
      "start": 239,
      "end": 262
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 269
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 273,
          "end": 278
        },
        "start": 268,
        "end": 278
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
              "start": 286,
              "end": 287
            },
            "directive": null,
            "start": 286,
            "end": 288
          }
        ],
        "start": 280,
        "end": 290
      },
      "alternate": null,
      "start": 264,
      "end": 290
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 301,
          "end": 305
        },
        "start": 296,
        "end": 305
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
              "start": 313,
              "end": 314
            },
            "directive": null,
            "start": 313,
            "end": 315
          }
        ],
        "start": 307,
        "end": 317
      },
      "alternate": null,
      "start": 292,
      "end": 317
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 328,
          "end": 333
        },
        "start": 323,
        "end": 333
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
              "start": 341,
              "end": 342
            },
            "directive": null,
            "start": 341,
            "end": 343
          }
        ],
        "start": 335,
        "end": 345
      },
      "alternate": null,
      "start": 319,
      "end": 345
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
            "name": "xAndObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 368,
                    "end": 374
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 377,
                    "end": 383
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 386,
                    "end": 393
                  },
                  {
                    "type": "TSObjectKeyword",
                    "start": 396,
                    "end": 402
                  }
                ],
                "start": 368,
                "end": 402
              },
              "start": 366,
              "end": 402
            },
            "start": 359,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 402
        }
      ],
      "declare": true,
      "start": 347,
      "end": 402
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 415
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 419,
          "end": 421
        },
        "start": 408,
        "end": 421
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 436
            },
            "directive": null,
            "start": 429,
            "end": 437
          }
        ],
        "start": 423,
        "end": 439
      },
      "alternate": null,
      "start": 404,
      "end": 439
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 446
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 457
        },
        "start": 445,
        "end": 457
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
              "start": 465,
              "end": 466
            },
            "directive": null,
            "start": 465,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 479
            },
            "directive": null,
            "start": 472,
            "end": 480
          }
        ],
        "start": 459,
        "end": 482
      },
      "alternate": null,
      "start": 441,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                },
                {
                  "type": "TSStringKeyword",
                  "start": 536,
                  "end": 542
                }
              ],
              "start": 527,
              "end": 542
            },
            "start": 525,
            "end": 542
          },
          "start": 520,
          "end": 542
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 544,
          "end": 550
        },
        "start": 543,
        "end": 550
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 566
              },
              "operator": "==",
              "right": {
                "type": "UnaryExpression",
                "operator": "+",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "level",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 576
                },
                "prefix": true,
                "start": 570,
                "end": 576
              },
              "start": 561,
              "end": 576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          },
                          "start": 596,
                          "end": 604
                        },
                        "start": 594,
                        "end": 604
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "level",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 612
                      },
                      "definite": false,
                      "start": 594,
                      "end": 612
                    }
                  ],
                  "declare": false,
                  "start": 588,
                  "end": 613
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 643
                  },
                  "start": 631,
                  "end": 644
                }
              ],
              "start": 578,
              "end": 650
            },
            "alternate": null,
            "start": 557,
            "end": 650
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 662,
              "end": 663
            },
            "start": 655,
            "end": 664
          }
        ],
        "start": 551,
        "end": 666
      },
      "expression": false,
      "start": 506,
      "end": 666
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 701
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 705,
          "end": 709
        },
        "start": 693,
        "end": 709
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 725
            },
            "directive": null,
            "start": 717,
            "end": 726
          }
        ],
        "start": 711,
        "end": 728
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 748
            },
            "directive": null,
            "start": 740,
            "end": 748
          }
        ],
        "start": 734,
        "end": 750
      },
      "start": 689,
      "end": 750
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 764
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 768,
          "end": 772
        },
        "start": 756,
        "end": 772
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 788
            },
            "directive": null,
            "start": 780,
            "end": 789
          }
        ],
        "start": 774,
        "end": 791
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 811
            },
            "directive": null,
            "start": 803,
            "end": 812
          }
        ],
        "start": 797,
        "end": 814
      },
      "start": 752,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 815
}
```
