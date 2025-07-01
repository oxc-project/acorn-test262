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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        }
                      ],
                      "start": 45,
                      "end": 60
                    },
                    "start": 43,
                    "end": 60
                  },
                  "start": 42,
                  "end": 60
                },
                "init": null,
                "definite": false,
                "start": 42,
                "end": 60
              }
            ],
            "declare": false,
            "start": 38,
            "end": 61
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 70,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "directive": null,
            "start": 66,
            "end": 73
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 89
            },
            "body": {
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
                    "start": 101,
                    "end": 102
                  },
                  "directive": null,
                  "start": 101,
                  "end": 103
                }
              ],
              "start": 91,
              "end": 119
            },
            "start": 78,
            "end": 119
          }
        ],
        "start": 32,
        "end": 121
      },
      "expression": false,
      "start": 19,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 148,
                          "end": 154
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 157,
                          "end": 163
                        }
                      ],
                      "start": 148,
                      "end": 163
                    },
                    "start": 146,
                    "end": 163
                  },
                  "start": 145,
                  "end": 163
                },
                "init": null,
                "definite": false,
                "start": 145,
                "end": 163
              }
            ],
            "declare": false,
            "start": 141,
            "end": 164
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 173,
                "end": 175
              },
              "start": 169,
              "end": 175
            },
            "directive": null,
            "start": 169,
            "end": 176
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 192
            },
            "body": {
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
                    "start": 204,
                    "end": 205
                  },
                  "directive": null,
                  "start": 204,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 226
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 229,
                      "end": 231
                    },
                    "start": 225,
                    "end": 231
                  },
                  "directive": null,
                  "start": 225,
                  "end": 232
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 241,
                  "end": 247
                }
              ],
              "start": 194,
              "end": 253
            },
            "start": 181,
            "end": 253
          }
        ],
        "start": 135,
        "end": 255
      },
      "expression": false,
      "start": 122,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 266
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 282,
                          "end": 288
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 291,
                          "end": 297
                        }
                      ],
                      "start": 282,
                      "end": 297
                    },
                    "start": 280,
                    "end": 297
                  },
                  "start": 279,
                  "end": 297
                },
                "init": null,
                "definite": false,
                "start": 279,
                "end": 297
              }
            ],
            "declare": false,
            "start": 275,
            "end": 298
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 304
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 307,
                "end": 309
              },
              "start": 303,
              "end": 309
            },
            "directive": null,
            "start": 303,
            "end": 310
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 326
            },
            "body": {
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
                    "start": 338,
                    "end": 339
                  },
                  "directive": null,
                  "start": 338,
                  "end": 340
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 372
                    },
                    "start": 359,
                    "end": 372
                  },
                  "directive": null,
                  "start": 359,
                  "end": 373
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 394
                      },
                      "prefix": true,
                      "start": 386,
                      "end": 394
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 399,
                      "end": 407
                    },
                    "start": 386,
                    "end": 407
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 409,
                    "end": 418
                  },
                  "alternate": null,
                  "start": 382,
                  "end": 418
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 427,
                  "end": 433
                }
              ],
              "start": 328,
              "end": 439
            },
            "start": 315,
            "end": 439
          }
        ],
        "start": 269,
        "end": 441
      },
      "expression": false,
      "start": 256,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 452
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 468,
                          "end": 474
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 477,
                          "end": 483
                        }
                      ],
                      "start": 468,
                      "end": 483
                    },
                    "start": 466,
                    "end": 483
                  },
                  "start": 465,
                  "end": 483
                },
                "init": null,
                "definite": false,
                "start": 465,
                "end": 483
              }
            ],
            "declare": false,
            "start": 461,
            "end": 484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 493,
                "end": 495
              },
              "start": 489,
              "end": 495
            },
            "directive": null,
            "start": 489,
            "end": 496
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 520
                },
                "optional": false,
                "computed": false,
                "start": 512,
                "end": 520
              },
              "start": 508,
              "end": 520
            },
            "body": {
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
                    "start": 532,
                    "end": 533
                  },
                  "directive": null,
                  "start": 532,
                  "end": 534
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 554
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 557,
                      "end": 559
                    },
                    "start": 553,
                    "end": 559
                  },
                  "directive": null,
                  "start": 553,
                  "end": 560
                }
              ],
              "start": 522,
              "end": 566
            },
            "start": 501,
            "end": 566
          }
        ],
        "start": 455,
        "end": 568
      },
      "expression": false,
      "start": 442,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 579
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 595,
                          "end": 601
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 604,
                          "end": 610
                        }
                      ],
                      "start": 595,
                      "end": 610
                    },
                    "start": 593,
                    "end": 610
                  },
                  "start": 592,
                  "end": 610
                },
                "init": null,
                "definite": false,
                "start": 592,
                "end": 610
              }
            ],
            "declare": false,
            "start": 588,
            "end": 611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 620,
                "end": 622
              },
              "start": 616,
              "end": 622
            },
            "directive": null,
            "start": 616,
            "end": 623
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 639
            },
            "body": {
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
                    "start": 651,
                    "end": 652
                  },
                  "directive": null,
                  "start": 651,
                  "end": 653
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 682
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 685,
                      "end": 687
                    },
                    "start": 681,
                    "end": 687
                  },
                  "directive": null,
                  "start": 681,
                  "end": 688
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "directive": null,
                  "start": 697,
                  "end": 699
                }
              ],
              "start": 641,
              "end": 715
            },
            "start": 628,
            "end": 715
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "directive": null,
            "start": 720,
            "end": 722
          }
        ],
        "start": 582,
        "end": 743
      },
      "expression": false,
      "start": 569,
      "end": 743
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 754
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 770,
                          "end": 776
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 779,
                          "end": 785
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 788,
                          "end": 795
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 798,
                            "end": 804
                          },
                          "typeArguments": null,
                          "start": 798,
                          "end": 804
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 807,
                            "end": 815
                          },
                          "typeArguments": null,
                          "start": 807,
                          "end": 815
                        }
                      ],
                      "start": 770,
                      "end": 815
                    },
                    "start": 768,
                    "end": 815
                  },
                  "start": 767,
                  "end": 815
                },
                "init": null,
                "definite": false,
                "start": 767,
                "end": 815
              }
            ],
            "declare": false,
            "start": 763,
            "end": 816
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 822
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 825,
                "end": 827
              },
              "start": 821,
              "end": 827
            },
            "directive": null,
            "start": 821,
            "end": 828
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 844
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 864
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 881
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 884,
                            "end": 886
                          },
                          "start": 880,
                          "end": 886
                        },
                        "directive": null,
                        "start": 880,
                        "end": 887
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 900,
                        "end": 906
                      }
                    ],
                    "start": 866,
                    "end": 916
                  },
                  "alternate": null,
                  "start": 856,
                  "end": 916
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 929,
                    "end": 933
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 949,
                            "end": 950
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 953,
                            "end": 957
                          },
                          "start": 949,
                          "end": 957
                        },
                        "directive": null,
                        "start": 949,
                        "end": 958
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 971,
                        "end": 980
                      }
                    ],
                    "start": 935,
                    "end": 990
                  },
                  "alternate": null,
                  "start": 925,
                  "end": 990
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "pattern": "a",
                        "flags": ""
                      },
                      "start": 1003,
                      "end": 1006
                    },
                    "start": 999,
                    "end": 1006
                  },
                  "directive": null,
                  "start": 999,
                  "end": 1007
                }
              ],
              "start": 846,
              "end": 1013
            },
            "start": 833,
            "end": 1013
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "directive": null,
            "start": 1018,
            "end": 1020
          }
        ],
        "start": 757,
        "end": 1060
      },
      "expression": false,
      "start": 744,
      "end": 1060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1071
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 1087,
                          "end": 1093
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1096,
                          "end": 1102
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1105,
                          "end": 1112
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1115,
                            "end": 1121
                          },
                          "typeArguments": null,
                          "start": 1115,
                          "end": 1121
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1124,
                            "end": 1132
                          },
                          "typeArguments": null,
                          "start": 1124,
                          "end": 1132
                        }
                      ],
                      "start": 1087,
                      "end": 1132
                    },
                    "start": 1085,
                    "end": 1132
                  },
                  "start": 1084,
                  "end": 1132
                },
                "init": null,
                "definite": false,
                "start": 1084,
                "end": 1132
              }
            ],
            "declare": false,
            "start": 1080,
            "end": 1133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1139
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1142,
                "end": 1144
              },
              "start": 1138,
              "end": 1144
            },
            "directive": null,
            "start": 1138,
            "end": 1145
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1157,
              "end": 1161
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1177,
                    "end": 1181
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1197,
                            "end": 1198
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1201,
                            "end": 1203
                          },
                          "start": 1197,
                          "end": 1203
                        },
                        "directive": null,
                        "start": 1197,
                        "end": 1204
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 1217,
                        "end": 1223
                      }
                    ],
                    "start": 1183,
                    "end": 1233
                  },
                  "alternate": null,
                  "start": 1173,
                  "end": 1233
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1246,
                    "end": 1250
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1266,
                            "end": 1267
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1270,
                            "end": 1274
                          },
                          "start": 1266,
                          "end": 1274
                        },
                        "directive": null,
                        "start": 1266,
                        "end": 1275
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 1288,
                        "end": 1297
                      }
                    ],
                    "start": 1252,
                    "end": 1307
                  },
                  "alternate": null,
                  "start": 1242,
                  "end": 1307
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1317
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "pattern": "a",
                        "flags": ""
                      },
                      "start": 1320,
                      "end": 1323
                    },
                    "start": 1316,
                    "end": 1323
                  },
                  "directive": null,
                  "start": 1316,
                  "end": 1324
                }
              ],
              "start": 1163,
              "end": 1330
            },
            "start": 1150,
            "end": 1330
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1336
            },
            "directive": null,
            "start": 1335,
            "end": 1337
          }
        ],
        "start": 1074,
        "end": 1349
      },
      "expression": false,
      "start": 1061,
      "end": 1349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1361
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 1377,
                          "end": 1383
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1386,
                          "end": 1392
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1395,
                          "end": 1402
                        }
                      ],
                      "start": 1377,
                      "end": 1402
                    },
                    "start": 1375,
                    "end": 1402
                  },
                  "start": 1374,
                  "end": 1402
                },
                "init": null,
                "definite": false,
                "start": 1374,
                "end": 1402
              }
            ],
            "declare": false,
            "start": 1370,
            "end": 1403
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1409
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1412,
                "end": 1414
              },
              "start": 1408,
              "end": 1414
            },
            "directive": null,
            "start": 1408,
            "end": 1415
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1428
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1431,
                "end": 1432
              },
              "start": 1427,
              "end": 1432
            },
            "body": {
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
                    "start": 1444,
                    "end": 1445
                  },
                  "directive": null,
                  "start": 1444,
                  "end": 1446
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1474,
                      "end": 1475
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1478,
                      "end": 1479
                    },
                    "start": 1474,
                    "end": 1479
                  },
                  "directive": null,
                  "start": 1474,
                  "end": 1480
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1489,
                    "end": 1490
                  },
                  "directive": null,
                  "start": 1489,
                  "end": 1491
                }
              ],
              "start": 1434,
              "end": 1507
            },
            "start": 1420,
            "end": 1507
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1513
            },
            "directive": null,
            "start": 1512,
            "end": 1514
          }
        ],
        "start": 1364,
        "end": 1535
      },
      "expression": false,
      "start": 1350,
      "end": 1535
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "len",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1556
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1560,
                  "end": 1566
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1569,
                  "end": 1575
                }
              ],
              "start": 1560,
              "end": 1575
            },
            "start": 1558,
            "end": 1575
          },
          "start": 1557,
          "end": 1575
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1578,
          "end": 1584
        },
        "start": 1576,
        "end": 1584
      },
      "body": null,
      "expression": false,
      "start": 1536,
      "end": 1585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1597
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 1613,
                          "end": 1619
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1622,
                          "end": 1628
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1631,
                          "end": 1638
                        }
                      ],
                      "start": 1613,
                      "end": 1638
                    },
                    "start": 1611,
                    "end": 1638
                  },
                  "start": 1610,
                  "end": 1638
                },
                "init": null,
                "definite": false,
                "start": 1610,
                "end": 1638
              }
            ],
            "declare": false,
            "start": 1606,
            "end": 1639
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1644,
                "end": 1645
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1648,
                "end": 1650
              },
              "start": 1644,
              "end": 1650
            },
            "directive": null,
            "start": 1644,
            "end": 1651
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1667
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1680
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1683,
                        "end": 1686
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1687,
                          "end": 1688
                        }
                      ],
                      "optional": false,
                      "start": 1683,
                      "end": 1689
                    },
                    "start": 1679,
                    "end": 1689
                  },
                  "directive": null,
                  "start": 1679,
                  "end": 1690
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1699,
                    "end": 1700
                  },
                  "directive": null,
                  "start": 1699,
                  "end": 1701
                }
              ],
              "start": 1669,
              "end": 1717
            },
            "start": 1656,
            "end": 1717
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1723
            },
            "directive": null,
            "start": 1722,
            "end": 1724
          }
        ],
        "start": 1600,
        "end": 1745
      },
      "expression": false,
      "start": 1586,
      "end": 1745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1755,
        "end": 1757
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                          "type": "TSStringKeyword",
                          "start": 1773,
                          "end": 1779
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1782,
                          "end": 1788
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1791,
                          "end": 1798
                        }
                      ],
                      "start": 1773,
                      "end": 1798
                    },
                    "start": 1771,
                    "end": 1798
                  },
                  "start": 1770,
                  "end": 1798
                },
                "init": null,
                "definite": false,
                "start": 1770,
                "end": 1798
              }
            ],
            "declare": false,
            "start": 1766,
            "end": 1799
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1804,
                "end": 1805
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1808,
                "end": 1810
              },
              "start": 1804,
              "end": 1810
            },
            "directive": null,
            "start": 1804,
            "end": 1811
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1827
            },
            "body": {
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
                    "start": 1839,
                    "end": 1840
                  },
                  "directive": null,
                  "start": 1839,
                  "end": 1841
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1869,
                      "end": 1870
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1873,
                        "end": 1876
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1877,
                          "end": 1878
                        }
                      ],
                      "optional": false,
                      "start": 1873,
                      "end": 1879
                    },
                    "start": 1869,
                    "end": 1879
                  },
                  "directive": null,
                  "start": 1869,
                  "end": 1880
                }
              ],
              "start": 1829,
              "end": 1886
            },
            "start": 1816,
            "end": 1886
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1892
            },
            "directive": null,
            "start": 1891,
            "end": 1893
          }
        ],
        "start": 1760,
        "end": 1914
      },
      "expression": false,
      "start": 1746,
      "end": 1914
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1914
}
```
