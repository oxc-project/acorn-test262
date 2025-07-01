__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "start": 26,
                "end": 44
              },
              "prefix": true,
              "start": 24,
              "end": 45
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "typeArguments": null,
                "arguments": [],
                "start": 54,
                "end": 62
              },
              "start": 47,
              "end": 63
            },
            "alternate": null,
            "start": 20,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 68,
                  "end": 72
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 74
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              },
              "start": 68,
              "end": 78
            },
            "directive": null,
            "start": 68,
            "end": 79
          }
        ],
        "start": 14,
        "end": 81
      },
      "expression": false,
      "start": 0,
      "end": 81
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
            "name": "c1_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 94
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 99
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 97,
            "end": 101
          },
          "definite": false,
          "start": 89,
          "end": 101
        }
      ],
      "declare": false,
      "start": 83,
      "end": 102
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
            "name": "c1_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [],
            "start": 117,
            "end": 125
          },
          "definite": false,
          "start": 109,
          "end": 125
        }
      ],
      "declare": false,
      "start": 103,
      "end": 126
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 134
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 161,
                        "end": 165
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 179
                      },
                      "start": 161,
                      "end": 179
                    },
                    "prefix": true,
                    "start": 159,
                    "end": 180
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 195
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 189,
                      "end": 197
                    },
                    "start": 182,
                    "end": 198
                  },
                  "alternate": null,
                  "start": 155,
                  "end": 198
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 203,
                        "end": 207
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 209
                      },
                      "optional": false,
                      "computed": false,
                      "start": 203,
                      "end": 209
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 212,
                      "end": 213
                    },
                    "start": 203,
                    "end": 213
                  },
                  "directive": null,
                  "start": 203,
                  "end": 214
                }
              ],
              "start": 149,
              "end": 216
            },
            "expression": false,
            "start": 137,
            "end": 216
          },
          "definite": false,
          "start": 132,
          "end": 216
        }
      ],
      "declare": false,
      "start": 128,
      "end": 217
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
            "name": "c2_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 230
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 233,
            "end": 237
          },
          "definite": false,
          "start": 225,
          "end": 237
        }
      ],
      "declare": false,
      "start": 219,
      "end": 238
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
            "name": "c2_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 250
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 261
          },
          "definite": false,
          "start": 245,
          "end": 261
        }
      ],
      "declare": false,
      "start": 239,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 289
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ThisExpression",
                  "start": 304,
                  "end": 308
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 322
                },
                "start": 304,
                "end": 322
              },
              "prefix": true,
              "start": 302,
              "end": 323
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 338
                },
                "typeArguments": null,
                "arguments": [],
                "start": 332,
                "end": 340
              },
              "start": 325,
              "end": 341
            },
            "alternate": null,
            "start": 298,
            "end": 341
          }
        ],
        "start": 292,
        "end": 343
      },
      "expression": false,
      "start": 278,
      "end": 343
    },
    {
      "type": "EmptyStatement",
      "start": 343,
      "end": 344
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
            "name": "c3_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 357
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 362
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 360,
            "end": 364
          },
          "definite": false,
          "start": 352,
          "end": 364
        }
      ],
      "declare": false,
      "start": 346,
      "end": 365
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
            "name": "c3_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 413
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "typeArguments": null,
            "arguments": [],
            "start": 416,
            "end": 424
          },
          "definite": false,
          "start": 408,
          "end": 424
        }
      ],
      "declare": false,
      "start": 402,
      "end": 425
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
            "name": "C4",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 447
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 474,
                        "end": 478
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 492
                      },
                      "start": 474,
                      "end": 492
                    },
                    "prefix": true,
                    "start": 472,
                    "end": 493
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 508
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 502,
                      "end": 510
                    },
                    "start": 495,
                    "end": 511
                  },
                  "alternate": null,
                  "start": 468,
                  "end": 511
                }
              ],
              "start": 462,
              "end": 513
            },
            "expression": false,
            "start": 450,
            "end": 513
          },
          "definite": false,
          "start": 445,
          "end": 513
        }
      ],
      "declare": false,
      "start": 441,
      "end": 514
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
            "name": "c4_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 527
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 530,
            "end": 534
          },
          "definite": false,
          "start": 522,
          "end": 534
        }
      ],
      "declare": false,
      "start": 516,
      "end": 535
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
            "name": "c4_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 583
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 592
            },
            "typeArguments": null,
            "arguments": [],
            "start": 586,
            "end": 594
          },
          "definite": false,
          "start": 578,
          "end": 594
        }
      ],
      "declare": false,
      "start": 572,
      "end": 595
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
            "name": "c5_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 606
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 606
        }
      ],
      "declare": false,
      "start": 597,
      "end": 607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 613
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 629,
            "end": 632
          },
          "expression": false,
          "start": 616,
          "end": 632
        },
        "start": 608,
        "end": 632
      },
      "directive": null,
      "start": 608,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 643
        },
        "typeArguments": null,
        "arguments": [],
        "start": 634,
        "end": 645
      },
      "directive": null,
      "start": 634,
      "end": 646
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
            "name": "c5_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 657
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 657
        }
      ],
      "declare": false,
      "start": 648,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 664
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 673,
            "end": 676
          },
          "abstract": false,
          "declare": false,
          "start": 667,
          "end": 676
        },
        "start": 659,
        "end": 676
      },
      "directive": null,
      "start": 659,
      "end": 677
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 687
        },
        "typeArguments": null,
        "arguments": [],
        "start": 678,
        "end": 689
      },
      "directive": null,
      "start": 678,
      "end": 690
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 717
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 724,
                  "end": 728
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "functions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 738
                },
                "optional": false,
                "computed": false,
                "start": 724,
                "end": 738
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
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
                        "start": 742,
                        "end": 743
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
                    },
                    "id": null,
                    "generator": false,
                    "start": 742,
                    "end": 748
                  },
                  {
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
                        "start": 750,
                        "end": 751
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 755,
                        "end": 756
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 759,
                        "end": 760
                      },
                      "start": 755,
                      "end": 760
                    },
                    "id": null,
                    "generator": false,
                    "start": 750,
                    "end": 760
                  },
                  {
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
                        "start": 762,
                        "end": 763
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 768
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 771,
                        "end": 772
                      },
                      "start": 767,
                      "end": 772
                    },
                    "id": null,
                    "generator": false,
                    "start": 762,
                    "end": 772
                  }
                ],
                "start": 741,
                "end": 773
              },
              "start": 724,
              "end": 773
            },
            "directive": null,
            "start": 724,
            "end": 773
          }
        ],
        "start": 720,
        "end": 775
      },
      "expression": false,
      "start": 706,
      "end": 775
    },
    {
      "type": "EmptyStatement",
      "start": 775,
      "end": 776
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
            "name": "c6_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 787
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C6",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 796
            },
            "typeArguments": null,
            "arguments": [],
            "start": 790,
            "end": 798
          },
          "definite": false,
          "start": 782,
          "end": 798
        }
      ],
      "declare": false,
      "start": 778,
      "end": 799
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 860
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 864
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 866,
        "end": 868
      },
      "expression": false,
      "start": 849,
      "end": 868
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
            "name": "c7_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 879
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C7",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 888
            },
            "typeArguments": null,
            "arguments": [],
            "start": 882,
            "end": 890
          },
          "definite": false,
          "start": 874,
          "end": 890
        }
      ],
      "declare": false,
      "start": 870,
      "end": 891
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 891
}
```
