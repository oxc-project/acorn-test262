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
    "value": "cond",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 10,
    "end": 17,
    "range": [
      10,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27,
    "range": [
      19,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 38,
    "end": 41,
    "range": [
      38,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 70,
    "end": 72,
    "range": [
      70,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 78,
    "end": 83,
    "range": [
      78,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 122,
    "end": 130,
    "range": [
      122,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
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
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 256,
    "end": 264,
    "range": [
      256,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288,
    "range": [
      282,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 315,
    "end": 320,
    "range": [
      315,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 363,
    "end": 372,
    "range": [
      363,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 382,
    "end": 384,
    "range": [
      382,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 386,
    "end": 392,
    "range": [
      386,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 395,
    "end": 398,
    "range": [
      395,
      398
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 399,
    "end": 407,
    "range": [
      399,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 409,
    "end": 417,
    "range": [
      409,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 427,
    "end": 432,
    "range": [
      427,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 442,
    "end": 450,
    "range": [
      442,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
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
    "value": "{",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474,
    "range": [
      468,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 477,
    "end": 483,
    "range": [
      477,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 493,
    "end": 495,
    "range": [
      493,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 557,
    "end": 559,
    "range": [
      557,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 569,
    "end": 577,
    "range": [
      569,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 604,
    "end": 610,
    "range": [
      604,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 620,
    "end": 622,
    "range": [
      620,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 628,
    "end": 633,
    "range": [
      628,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 635,
    "end": 639,
    "range": [
      635,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 685,
    "end": 687,
    "range": [
      685,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 744,
    "end": 752,
    "range": [
      744,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 763,
    "end": 766,
    "range": [
      763,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 779,
    "end": 785,
    "range": [
      779,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 788,
    "end": 795,
    "range": [
      788,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 798,
    "end": 804,
    "range": [
      798,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 807,
    "end": 815,
    "range": [
      807,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 825,
    "end": 827,
    "range": [
      825,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 840,
    "end": 844,
    "range": [
      840,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 856,
    "end": 858,
    "range": [
      856,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 860,
    "end": 864,
    "range": [
      860,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 884,
    "end": 886,
    "range": [
      884,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 900,
    "end": 905,
    "range": [
      900,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 925,
    "end": 927,
    "range": [
      925,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 929,
    "end": 933,
    "range": [
      929,
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
    "value": "{",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 953,
    "end": 957,
    "range": [
      953,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 971,
    "end": 979,
    "range": [
      971,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/a/",
    "regex": {
      "flags": "",
      "pattern": "a"
    },
    "start": 1003,
    "end": 1006,
    "range": [
      1003,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1061,
    "end": 1069,
    "range": [
      1061,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1080,
    "end": 1083,
    "range": [
      1080,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1087,
    "end": 1093,
    "range": [
      1087,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102,
    "range": [
      1096,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1105,
    "end": 1112,
    "range": [
      1105,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1115,
    "end": 1121,
    "range": [
      1115,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1124,
    "end": 1132,
    "range": [
      1124,
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
    "type": "Identifier",
    "value": "x",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1142,
    "end": 1144,
    "range": [
      1142,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1150,
    "end": 1155,
    "range": [
      1150,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1157,
    "end": 1161,
    "range": [
      1157,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1173,
    "end": 1175,
    "range": [
      1173,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "=",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1201,
    "end": 1203,
    "range": [
      1201,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1217,
    "end": 1222,
    "range": [
      1217,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1242,
    "end": 1244,
    "range": [
      1242,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1246,
    "end": 1250,
    "range": [
      1246,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1270,
    "end": 1274,
    "range": [
      1270,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1288,
    "end": 1296,
    "range": [
      1288,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/a/",
    "regex": {
      "flags": "",
      "pattern": "a"
    },
    "start": 1320,
    "end": 1323,
    "range": [
      1320,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1350,
    "end": 1358,
    "range": [
      1350,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 1359,
    "end": 1361,
    "range": [
      1359,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1370,
    "end": 1373,
    "range": [
      1370,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1377,
    "end": 1383,
    "range": [
      1377,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1386,
    "end": 1392,
    "range": [
      1386,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1395,
    "end": 1402,
    "range": [
      1395,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1412,
    "end": 1414,
    "range": [
      1412,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1420,
    "end": 1425,
    "range": [
      1420,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1536,
    "end": 1543,
    "range": [
      1536,
      1543
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1544,
    "end": 1552,
    "range": [
      1544,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1553,
    "end": 1556,
    "range": [
      1553,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1560,
    "end": 1566,
    "range": [
      1560,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1569,
    "end": 1575,
    "range": [
      1569,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1578,
    "end": 1584,
    "range": [
      1578,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1586,
    "end": 1594,
    "range": [
      1586,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 1595,
    "end": 1597,
    "range": [
      1595,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1606,
    "end": 1609,
    "range": [
      1606,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1613,
    "end": 1619,
    "range": [
      1613,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1622,
    "end": 1628,
    "range": [
      1622,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1631,
    "end": 1638,
    "range": [
      1631,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1648,
    "end": 1650,
    "range": [
      1648,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1656,
    "end": 1661,
    "range": [
      1656,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1663,
    "end": 1667,
    "range": [
      1663,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1746,
    "end": 1754,
    "range": [
      1746,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "h3",
    "start": 1755,
    "end": 1757,
    "range": [
      1755,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1766,
    "end": 1769,
    "range": [
      1766,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1773,
    "end": 1779,
    "range": [
      1773,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1782,
    "end": 1788,
    "range": [
      1782,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1791,
    "end": 1798,
    "range": [
      1791,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1816,
    "end": 1821,
    "range": [
      1816,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1823,
    "end": 1827,
    "range": [
      1823,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1873,
    "end": 1876,
    "range": [
      1873,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  }
]
```
