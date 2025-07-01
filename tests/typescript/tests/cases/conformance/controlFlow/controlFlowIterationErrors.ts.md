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
        "name": "len",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 33,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 65
              },
              "optional": false,
              "computed": false,
              "start": 57,
              "end": 65
            },
            "start": 50,
            "end": 66
          }
        ],
        "start": 44,
        "end": 68
      },
      "expression": false,
      "start": 20,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 81
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
                          "start": 97,
                          "end": 103
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 106,
                          "end": 112
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 115,
                          "end": 122
                        }
                      ],
                      "start": 97,
                      "end": 122
                    },
                    "start": 95,
                    "end": 122
                  },
                  "start": 94,
                  "end": 122
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 122
              }
            ],
            "declare": false,
            "start": 90,
            "end": 123
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
                "start": 128,
                "end": 129
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 132,
                "end": 134
              },
              "start": 128,
              "end": 134
            },
            "directive": null,
            "start": 128,
            "end": 135
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 151
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
                      "start": 163,
                      "end": 164
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 170
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        }
                      ],
                      "optional": false,
                      "start": 167,
                      "end": 173
                    },
                    "start": 163,
                    "end": 173
                  },
                  "directive": null,
                  "start": 163,
                  "end": 174
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "directive": null,
                  "start": 183,
                  "end": 185
                }
              ],
              "start": 153,
              "end": 191
            },
            "start": 140,
            "end": 191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "directive": null,
            "start": 196,
            "end": 198
          }
        ],
        "start": 84,
        "end": 200
      },
      "expression": false,
      "start": 70,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
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
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 238,
                          "end": 244
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 247,
                          "end": 254
                        }
                      ],
                      "start": 229,
                      "end": 254
                    },
                    "start": 227,
                    "end": 254
                  },
                  "start": 226,
                  "end": 254
                },
                "init": null,
                "definite": false,
                "start": 226,
                "end": 254
              }
            ],
            "declare": false,
            "start": 222,
            "end": 255
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
                "start": 260,
                "end": 261
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 264,
                "end": 266
              },
              "start": 260,
              "end": 266
            },
            "directive": null,
            "start": 260,
            "end": 267
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
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
                    "start": 295,
                    "end": 296
                  },
                  "directive": null,
                  "start": 295,
                  "end": 297
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
                      "start": 306,
                      "end": 307
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 313
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 315
                        }
                      ],
                      "optional": false,
                      "start": 310,
                      "end": 316
                    },
                    "start": 306,
                    "end": 316
                  },
                  "directive": null,
                  "start": 306,
                  "end": 317
                }
              ],
              "start": 285,
              "end": 323
            },
            "start": 272,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "directive": null,
            "start": 328,
            "end": 330
          }
        ],
        "start": 216,
        "end": 332
      },
      "expression": false,
      "start": 202,
      "end": 332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 358,
              "end": 364
            },
            "start": 356,
            "end": 364
          },
          "start": 355,
          "end": 364
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 367,
          "end": 373
        },
        "start": 365,
        "end": 373
      },
      "body": null,
      "expression": false,
      "start": 334,
      "end": 374
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 399,
              "end": 405
            },
            "start": 397,
            "end": 405
          },
          "start": 396,
          "end": 405
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 408,
          "end": 414
        },
        "start": 406,
        "end": 414
      },
      "body": null,
      "expression": false,
      "start": 375,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 428
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
                          "start": 444,
                          "end": 450
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 453,
                          "end": 459
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 462,
                          "end": 469
                        }
                      ],
                      "start": 444,
                      "end": 469
                    },
                    "start": 442,
                    "end": 469
                  },
                  "start": 441,
                  "end": 469
                },
                "init": null,
                "definite": false,
                "start": 441,
                "end": 469
              }
            ],
            "declare": false,
            "start": 437,
            "end": 470
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
                "start": 475,
                "end": 476
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 479,
                "end": 481
              },
              "start": 475,
              "end": 481
            },
            "directive": null,
            "start": 475,
            "end": 482
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 498
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
                      "start": 510,
                      "end": 511
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 517
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 519
                        }
                      ],
                      "optional": false,
                      "start": 514,
                      "end": 520
                    },
                    "start": 510,
                    "end": 520
                  },
                  "directive": null,
                  "start": 510,
                  "end": 521
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "directive": null,
                  "start": 530,
                  "end": 532
                }
              ],
              "start": 500,
              "end": 538
            },
            "start": 487,
            "end": 538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "directive": null,
            "start": 543,
            "end": 545
          }
        ],
        "start": 431,
        "end": 547
      },
      "expression": false,
      "start": 417,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 560
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
                          "start": 576,
                          "end": 582
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 585,
                          "end": 591
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 594,
                          "end": 601
                        }
                      ],
                      "start": 576,
                      "end": 601
                    },
                    "start": 574,
                    "end": 601
                  },
                  "start": 573,
                  "end": 601
                },
                "init": null,
                "definite": false,
                "start": 573,
                "end": 601
              }
            ],
            "declare": false,
            "start": 569,
            "end": 602
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
                "start": 607,
                "end": 608
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 611,
                "end": 613
              },
              "start": 607,
              "end": 613
            },
            "directive": null,
            "start": 607,
            "end": 614
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 630
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
                    "start": 642,
                    "end": 643
                  },
                  "directive": null,
                  "start": 642,
                  "end": 644
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
                      "start": 653,
                      "end": 654
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 660
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 661,
                          "end": 662
                        }
                      ],
                      "optional": false,
                      "start": 657,
                      "end": 663
                    },
                    "start": 653,
                    "end": 663
                  },
                  "directive": null,
                  "start": 653,
                  "end": 664
                }
              ],
              "start": 632,
              "end": 670
            },
            "start": 619,
            "end": 670
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "directive": null,
            "start": 675,
            "end": 677
          }
        ],
        "start": 563,
        "end": 679
      },
      "expression": false,
      "start": 549,
      "end": 679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 698
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
                  "start": 702,
                  "end": 708
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 711,
                  "end": 717
                }
              ],
              "start": 702,
              "end": 717
            },
            "start": 700,
            "end": 717
          },
          "start": 699,
          "end": 717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 720,
          "end": 726
        },
        "start": 718,
        "end": 726
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 742
              },
              "prefix": true,
              "start": 740,
              "end": 742
            },
            "start": 733,
            "end": 743
          }
        ],
        "start": 727,
        "end": 745
      },
      "expression": false,
      "start": 681,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 758
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
                          "start": 774,
                          "end": 780
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 783,
                          "end": 789
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 792,
                          "end": 799
                        }
                      ],
                      "start": 774,
                      "end": 799
                    },
                    "start": 772,
                    "end": 799
                  },
                  "start": 771,
                  "end": 799
                },
                "init": null,
                "definite": false,
                "start": 771,
                "end": 799
              }
            ],
            "declare": false,
            "start": 767,
            "end": 800
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
                "start": 805,
                "end": 806
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 809,
                "end": 812
              },
              "start": 805,
              "end": 812
            },
            "directive": null,
            "start": 805,
            "end": 813
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 829
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
                      "start": 841,
                      "end": 842
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 846,
                          "end": 847
                        },
                        "prefix": true,
                        "start": 845,
                        "end": 847
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 850,
                        "end": 851
                      },
                      "start": 845,
                      "end": 851
                    },
                    "start": 841,
                    "end": 851
                  },
                  "directive": null,
                  "start": 841,
                  "end": 852
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 862
                  },
                  "directive": null,
                  "start": 861,
                  "end": 863
                }
              ],
              "start": 831,
              "end": 869
            },
            "start": 818,
            "end": 869
          }
        ],
        "start": 761,
        "end": 871
      },
      "expression": false,
      "start": 747,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 884
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
                          "start": 900,
                          "end": 906
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 909,
                          "end": 915
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 918,
                          "end": 925
                        }
                      ],
                      "start": 900,
                      "end": 925
                    },
                    "start": 898,
                    "end": 925
                  },
                  "start": 897,
                  "end": 925
                },
                "init": null,
                "definite": false,
                "start": 897,
                "end": 925
              }
            ],
            "declare": false,
            "start": 893,
            "end": 926
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
                "start": 931,
                "end": 932
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 935,
                "end": 938
              },
              "start": 931,
              "end": 938
            },
            "directive": null,
            "start": 931,
            "end": 939
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 955
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
                      "start": 967,
                      "end": 968
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 971,
                          "end": 979
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 980,
                            "end": 981
                          }
                        ],
                        "optional": false,
                        "start": 971,
                        "end": 982
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 985,
                        "end": 986
                      },
                      "start": 971,
                      "end": 986
                    },
                    "start": 967,
                    "end": 986
                  },
                  "directive": null,
                  "start": 967,
                  "end": 987
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 997
                  },
                  "directive": null,
                  "start": 996,
                  "end": 998
                }
              ],
              "start": 957,
              "end": 1004
            },
            "start": 944,
            "end": 1004
          }
        ],
        "start": 887,
        "end": 1006
      },
      "expression": false,
      "start": 873,
      "end": 1006
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1017,
        "end": 1019
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
                          "start": 1035,
                          "end": 1041
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1044,
                          "end": 1050
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1053,
                          "end": 1060
                        }
                      ],
                      "start": 1035,
                      "end": 1060
                    },
                    "start": 1033,
                    "end": 1060
                  },
                  "start": 1032,
                  "end": 1060
                },
                "init": null,
                "definite": false,
                "start": 1032,
                "end": 1060
              }
            ],
            "declare": false,
            "start": 1028,
            "end": 1061
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
                "start": 1066,
                "end": 1067
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1070,
                "end": 1073
              },
              "start": 1066,
              "end": 1073
            },
            "directive": null,
            "start": 1066,
            "end": 1074
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1090
            },
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1106,
                        "end": 1107
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1118
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1120
                          }
                        ],
                        "optional": false,
                        "start": 1110,
                        "end": 1121
                      },
                      "definite": false,
                      "start": 1106,
                      "end": 1121
                    }
                  ],
                  "declare": false,
                  "start": 1102,
                  "end": 1122
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
                      "start": 1131,
                      "end": 1132
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1135,
                        "end": 1136
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1139,
                        "end": 1140
                      },
                      "start": 1135,
                      "end": 1140
                    },
                    "start": 1131,
                    "end": 1140
                  },
                  "directive": null,
                  "start": 1131,
                  "end": 1141
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1150,
                  "end": 1152
                }
              ],
              "start": 1092,
              "end": 1158
            },
            "start": 1079,
            "end": 1158
          }
        ],
        "start": 1022,
        "end": 1160
      },
      "expression": false,
      "start": 1008,
      "end": 1160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1173
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
                          "start": 1189,
                          "end": 1195
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1198,
                          "end": 1204
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1207,
                          "end": 1214
                        }
                      ],
                      "start": 1189,
                      "end": 1214
                    },
                    "start": 1187,
                    "end": 1214
                  },
                  "start": 1186,
                  "end": 1214
                },
                "init": null,
                "definite": false,
                "start": 1186,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1182,
            "end": 1215
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
                "start": 1220,
                "end": 1221
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1224,
                "end": 1227
              },
              "start": 1220,
              "end": 1227
            },
            "directive": null,
            "start": 1220,
            "end": 1228
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1244
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
                    "start": 1256,
                    "end": 1257
                  },
                  "directive": null,
                  "start": 1256,
                  "end": 1258
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1271,
                        "end": 1272
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1275,
                          "end": 1283
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1284,
                            "end": 1285
                          }
                        ],
                        "optional": false,
                        "start": 1275,
                        "end": 1286
                      },
                      "definite": false,
                      "start": 1271,
                      "end": 1286
                    }
                  ],
                  "declare": false,
                  "start": 1267,
                  "end": 1287
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
                      "start": 1296,
                      "end": 1297
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1300,
                        "end": 1301
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1304,
                        "end": 1305
                      },
                      "start": 1300,
                      "end": 1305
                    },
                    "start": 1296,
                    "end": 1305
                  },
                  "directive": null,
                  "start": 1296,
                  "end": 1306
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1315,
                    "end": 1316
                  },
                  "directive": null,
                  "start": 1315,
                  "end": 1317
                }
              ],
              "start": 1246,
              "end": 1323
            },
            "start": 1233,
            "end": 1323
          }
        ],
        "start": 1176,
        "end": 1325
      },
      "expression": false,
      "start": 1162,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1325
}
```
