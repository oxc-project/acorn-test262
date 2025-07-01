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
            "name": "nonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 21,
                "end": 23
              },
              "start": 19,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 36
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 41,
          "end": 46
        },
        "start": 29,
        "end": 46
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 59
            },
            "directive": null,
            "start": 52,
            "end": 60
          }
        ],
        "start": 48,
        "end": 62
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 79
            },
            "directive": null,
            "start": 72,
            "end": 80
          }
        ],
        "start": 68,
        "end": 82
      },
      "start": 25,
      "end": 82
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 104
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 106,
                        "end": 112
                      },
                      "start": 104,
                      "end": 112
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 103,
                    "end": 112
                  }
                ],
                "start": 101,
                "end": 114
              },
              "start": 99,
              "end": 114
            },
            "start": 96,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 114
        }
      ],
      "declare": true,
      "start": 84,
      "end": 115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 127
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 135
        },
        "start": 120,
        "end": 135
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 148
            },
            "directive": null,
            "start": 141,
            "end": 149
          }
        ],
        "start": 137,
        "end": 151
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 168
            },
            "directive": null,
            "start": 161,
            "end": 169
          }
        ],
        "start": 157,
        "end": 171
      },
      "start": 116,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 186
          }
        ],
        "start": 184,
        "end": 187
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 192
              },
              "typeArguments": null,
              "start": 191,
              "end": 192
            },
            "start": 189,
            "end": 192
          },
          "start": 188,
          "end": 192
        }
      ],
      "returnType": null,
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
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 209
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "start": 202,
              "end": 215
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 230
                  },
                  "directive": null,
                  "start": 223,
                  "end": 231
                }
              ],
              "start": 217,
              "end": 235
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 256
                  },
                  "directive": null,
                  "start": 249,
                  "end": 257
                }
              ],
              "start": 243,
              "end": 261
            },
            "start": 198,
            "end": 261
          }
        ],
        "start": 194,
        "end": 263
      },
      "expression": false,
      "start": 173,
      "end": 263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 276
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 287,
              "end": 293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 293
          }
        ],
        "start": 276,
        "end": 294
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
        }
      ],
      "returnType": null,
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
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 316
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "start": 309,
              "end": 322
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 337
                  },
                  "directive": null,
                  "start": 330,
                  "end": 338
                }
              ],
              "start": 324,
              "end": 342
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 363
                  },
                  "directive": null,
                  "start": 356,
                  "end": 364
                }
              ],
              "start": 350,
              "end": 368
            },
            "start": 305,
            "end": 368
          }
        ],
        "start": 301,
        "end": 370
      },
      "expression": false,
      "start": 265,
      "end": 370
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
            "name": "union",
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
                      "value": "xyz",
                      "raw": "\"xyz\"",
                      "start": 391,
                      "end": 396
                    },
                    "start": 391,
                    "end": 396
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 401,
                          "end": 402
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          },
                          "start": 402,
                          "end": 410
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 401,
                        "end": 410
                      }
                    ],
                    "start": 399,
                    "end": 412
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 415,
                    "end": 424
                  }
                ],
                "start": 391,
                "end": 424
              },
              "start": 389,
              "end": 424
            },
            "start": 384,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 384,
          "end": 424
        }
      ],
      "declare": true,
      "start": 372,
      "end": 425
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 437
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 447
        },
        "start": 430,
        "end": 447
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 460
            },
            "directive": null,
            "start": 453,
            "end": 461
          }
        ],
        "start": 449,
        "end": 463
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 480
            },
            "directive": null,
            "start": 473,
            "end": 481
          }
        ],
        "start": 469,
        "end": 483
      },
      "start": 426,
      "end": 483
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 496
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 510
        },
        "start": 489,
        "end": 510
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 523
            },
            "directive": null,
            "start": 516,
            "end": 524
          }
        ],
        "start": 512,
        "end": 526
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 543
            },
            "directive": null,
            "start": 536,
            "end": 544
          }
        ],
        "start": 532,
        "end": 546
      },
      "start": 485,
      "end": 546
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 559
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 564,
          "end": 568
        },
        "start": 552,
        "end": 568
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 581
            },
            "directive": null,
            "start": 574,
            "end": 582
          }
        ],
        "start": 570,
        "end": 584
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 601
            },
            "directive": null,
            "start": 594,
            "end": 602
          }
        ],
        "start": 590,
        "end": 604
      },
      "start": 548,
      "end": 604
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 617
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 630
        },
        "start": 610,
        "end": 630
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 643
            },
            "directive": null,
            "start": 636,
            "end": 644
          }
        ],
        "start": 632,
        "end": 646
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 663
            },
            "directive": null,
            "start": 656,
            "end": 664
          }
        ],
        "start": 652,
        "end": 666
      },
      "start": 606,
      "end": 666
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 698
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 709,
                    "end": 716
                  },
                  "start": 707,
                  "end": 716
                },
                "start": 702,
                "end": 716
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              },
              "start": 717,
              "end": 725
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 743
                    },
                    "prefix": true,
                    "start": 737,
                    "end": 743
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "'foo'",
                          "start": 760,
                          "end": 765
                        },
                        "start": 753,
                        "end": 766
                      }
                    ],
                    "start": 745,
                    "end": 770
                  },
                  "alternate": null,
                  "start": 733,
                  "end": 770
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 782
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "xyz",
                      "raw": "'xyz'",
                      "start": 787,
                      "end": 792
                    },
                    "start": 777,
                    "end": 792
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 809,
                          "end": 814
                        },
                        "start": 802,
                        "end": 815
                      }
                    ],
                    "start": 794,
                    "end": 868
                  },
                  "alternate": null,
                  "start": 773,
                  "end": 868
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 878,
                    "end": 880
                  },
                  "start": 871,
                  "end": 881
                }
              ],
              "start": 729,
              "end": 883
            },
            "id": null,
            "generator": false,
            "start": 701,
            "end": 883
          },
          "definite": false,
          "start": 695,
          "end": 883
        }
      ],
      "declare": false,
      "start": 689,
      "end": 884
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 884
}
```
