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
        "name": "id1",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "start": 162,
            "end": 170
          }
        ],
        "start": 156,
        "end": 172
      },
      "expression": false,
      "start": 140,
      "end": 172
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 197
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 208,
                            "end": 212
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 219
                          },
                          "optional": false,
                          "computed": false,
                          "start": 208,
                          "end": 219
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "start": 208,
                        "end": 223
                      },
                      "start": 201,
                      "end": 223
                    }
                  ],
                  "start": 199,
                  "end": 225
                },
                "expression": false,
                "start": 186,
                "end": 225
              }
            ],
            "optional": false,
            "start": 182,
            "end": 226
          },
          "definite": false,
          "start": 178,
          "end": 226
        }
      ],
      "declare": false,
      "start": 174,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 403
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "start": 413,
            "end": 421
          }
        ],
        "start": 407,
        "end": 423
      },
      "expression": false,
      "start": 391,
      "end": 423
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 432
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
              "start": 468,
              "end": 479
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                }
              ],
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
                          "start": 493,
                          "end": 497
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 498,
                          "end": 504
                        },
                        "optional": false,
                        "computed": false,
                        "start": 493,
                        "end": 504
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 507,
                        "end": 508
                      },
                      "start": 493,
                      "end": 508
                    },
                    "directive": null,
                    "start": 493,
                    "end": 509
                  }
                ],
                "start": 483,
                "end": 515
              },
              "expression": false,
              "start": 479,
              "end": 515
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 468,
            "end": 515
          }
        ],
        "start": 433,
        "end": 517
      },
      "abstract": false,
      "declare": false,
      "start": 425,
      "end": 517
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              }
            ],
            "optional": false,
            "start": 527,
            "end": 533
          },
          "definite": false,
          "start": 523,
          "end": 533
        }
      ],
      "declare": false,
      "start": 519,
      "end": 534
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 540
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 549,
                "end": 551
              }
            ],
            "start": 543,
            "end": 552
          },
          "definite": false,
          "start": 539,
          "end": 552
        }
      ],
      "declare": false,
      "start": 535,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 555
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 562
        },
        "optional": false,
        "computed": false,
        "start": 554,
        "end": 562
      },
      "directive": null,
      "start": 554,
      "end": 563
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "init": {
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
                "name": "ab",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 635
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onetwo",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 643
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ab",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 656
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 661,
                        "end": 664
                      },
                      "start": 654,
                      "end": 664
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 667,
                      "end": 668
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 671,
                      "end": 672
                    },
                    "start": 654,
                    "end": 672
                  },
                  "start": 647,
                  "end": 673
                }
              ],
              "start": 645,
              "end": 676
            },
            "expression": false,
            "start": 623,
            "end": 676
          },
          "definite": false,
          "start": 619,
          "end": 676
        }
      ],
      "declare": false,
      "start": 615,
      "end": 676
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 735
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 736,
          "end": 737
        }
      ],
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
                  "start": 743,
                  "end": 747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 743,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 743,
              "end": 758
            },
            "directive": null,
            "start": 743,
            "end": 759
          }
        ],
        "start": 739,
        "end": 761
      },
      "expression": false,
      "start": 725,
      "end": 761
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              }
            ],
            "optional": false,
            "start": 772,
            "end": 778
          },
          "definite": false,
          "start": 767,
          "end": 778
        }
      ],
      "declare": false,
      "start": 763,
      "end": 779
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 786
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 33,
                "raw": "33",
                "start": 796,
                "end": 798
              }
            ],
            "start": 789,
            "end": 799
          },
          "definite": false,
          "start": 784,
          "end": 799
        }
      ],
      "declare": false,
      "start": 780,
      "end": 800
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z2",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 803
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 810
        },
        "optional": false,
        "computed": false,
        "start": 801,
        "end": 810
      },
      "directive": null,
      "start": 801,
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
            "name": "construct",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 893
          },
          "init": {
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
                "name": "dref",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 909
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 928
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 33,
                        "raw": "33",
                        "start": 929,
                        "end": 931
                      }
                    ],
                    "start": 920,
                    "end": 932
                  },
                  "start": 913,
                  "end": 933
                }
              ],
              "start": 911,
              "end": 935
            },
            "expression": false,
            "start": 896,
            "end": 935
          },
          "definite": false,
          "start": 884,
          "end": 935
        }
      ],
      "declare": false,
      "start": 880,
      "end": 935
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
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 942
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "construct",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 954
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 956
              }
            ],
            "optional": false,
            "start": 945,
            "end": 957
          },
          "definite": false,
          "start": 940,
          "end": 957
        }
      ],
      "declare": false,
      "start": 936,
      "end": 958
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z3",
          "optional": false,
          "typeAnnotation": null,
          "start": 959,
          "end": 961
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 962,
          "end": 968
        },
        "optional": false,
        "computed": false,
        "start": 959,
        "end": 968
      },
      "directive": null,
      "start": 959,
      "end": 969
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1023
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1035,
                "end": 1036
              }
            ],
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
                        "start": 1042,
                        "end": 1046
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "not_length_on_purpose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1068
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1042,
                      "end": 1068
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "start": 1042,
                    "end": 1072
                  },
                  "directive": null,
                  "start": 1042,
                  "end": 1073
                }
              ],
              "start": 1038,
              "end": 1075
            },
            "expression": false,
            "start": 1026,
            "end": 1075
          },
          "definite": false,
          "start": 1022,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1018,
      "end": 1076
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
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1085
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1091
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
              }
            ],
            "optional": false,
            "start": 1088,
            "end": 1094
          },
          "definite": false,
          "start": 1083,
          "end": 1094
        }
      ],
      "declare": false,
      "start": 1079,
      "end": 1095
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1221
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1214,
          "end": 1221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1231
            },
            "directive": null,
            "start": 1227,
            "end": 1232
          }
        ],
        "start": 1223,
        "end": 1234
      },
      "expression": false,
      "start": 1201,
      "end": 1234
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
          "start": 1236,
          "end": 1239
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abc",
            "raw": "'abc'",
            "start": 1240,
            "end": 1245
          },
          {
            "type": "Literal",
            "value": "def",
            "raw": "'def'",
            "start": 1247,
            "end": 1252
          }
        ],
        "optional": false,
        "start": 1236,
        "end": 1253
      },
      "directive": null,
      "start": 1236,
      "end": 1254
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
          "start": 1255,
          "end": 1258
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1259,
            "end": 1261
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "'abc'",
            "start": 1263,
            "end": 1268
          },
          {
            "type": "Literal",
            "value": "def",
            "raw": "'def'",
            "start": 1270,
            "end": 1275
          }
        ],
        "optional": false,
        "start": 1255,
        "end": 1276
      },
      "directive": null,
      "start": 1255,
      "end": 1277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 140,
  "end": 1277
}
```
