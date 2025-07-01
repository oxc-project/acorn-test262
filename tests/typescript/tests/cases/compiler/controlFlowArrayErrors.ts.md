__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 25,
          "end": 32
        },
        "start": 23,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 63,
                  "end": 65
                },
                "definite": false,
                "start": 59,
                "end": 65
              }
            ],
            "declare": false,
            "start": 55,
            "end": 66
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
                  "start": 118,
                  "end": 119
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "definite": false,
                "start": 118,
                "end": 123
              }
            ],
            "declare": false,
            "start": 114,
            "end": 124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "optional": false,
                "computed": false,
                "start": 155,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 162,
                  "end": 163
                }
              ],
              "optional": false,
              "start": 155,
              "end": 164
            },
            "directive": null,
            "start": 155,
            "end": 165
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "definite": false,
                "start": 174,
                "end": 179
              }
            ],
            "declare": false,
            "start": 170,
            "end": 180
          }
        ],
        "start": 49,
        "end": 182
      },
      "expression": false,
      "start": 35,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 195
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
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 209
                },
                "init": null,
                "definite": false,
                "start": 208,
                "end": 209
              }
            ],
            "declare": false,
            "start": 204,
            "end": 210
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
                "start": 263,
                "end": 264
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 267,
                "end": 269
              },
              "start": 263,
              "end": 269
            },
            "directive": null,
            "start": 263,
            "end": 270
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
                  "start": 279,
                  "end": 280
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 284
                },
                "definite": false,
                "start": 279,
                "end": 284
              }
            ],
            "declare": false,
            "start": 275,
            "end": 285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 322
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 322
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 323,
                  "end": 324
                }
              ],
              "optional": false,
              "start": 316,
              "end": 325
            },
            "directive": null,
            "start": 316,
            "end": 326
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "definite": false,
                "start": 335,
                "end": 340
              }
            ],
            "declare": false,
            "start": 331,
            "end": 341
          }
        ],
        "start": 198,
        "end": 343
      },
      "expression": false,
      "start": 184,
      "end": 343
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 356
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
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 373,
                  "end": 375
                },
                "definite": false,
                "start": 369,
                "end": 375
              }
            ],
            "declare": false,
            "start": 365,
            "end": 376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 430
                },
                "optional": false,
                "computed": false,
                "start": 424,
                "end": 430
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 431,
                  "end": 432
                }
              ],
              "optional": false,
              "start": 424,
              "end": 433
            },
            "directive": null,
            "start": 424,
            "end": 434
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "directive": null,
                  "start": 462,
                  "end": 464
                }
              ],
              "start": 452,
              "end": 500
            },
            "expression": false,
            "start": 439,
            "end": 500
          }
        ],
        "start": 359,
        "end": 502
      },
      "expression": false,
      "start": 345,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 515
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
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 529
                },
                "init": null,
                "definite": false,
                "start": 528,
                "end": 529
              }
            ],
            "declare": false,
            "start": 524,
            "end": 530
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
                "start": 535,
                "end": 536
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 540,
                    "end": 541
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 543,
                    "end": 550
                  }
                ],
                "start": 539,
                "end": 551
              },
              "start": 535,
              "end": 551
            },
            "directive": null,
            "start": 535,
            "end": 552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 581
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 586
                },
                "optional": false,
                "computed": false,
                "start": 580,
                "end": 586
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 587,
                  "end": 591
                }
              ],
              "optional": false,
              "start": 580,
              "end": 592
            },
            "directive": null,
            "start": 580,
            "end": 593
          }
        ],
        "start": 518,
        "end": 609
      },
      "expression": false,
      "start": 504,
      "end": 609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 622
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
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 640,
                      "end": 641
                    },
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 643,
                      "end": 650
                    }
                  ],
                  "start": 639,
                  "end": 651
                },
                "definite": false,
                "start": 635,
                "end": 651
              }
            ],
            "declare": false,
            "start": 631,
            "end": 652
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 681
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 686
                },
                "optional": false,
                "computed": false,
                "start": 680,
                "end": 686
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 687,
                  "end": 691
                }
              ],
              "optional": false,
              "start": 680,
              "end": 692
            },
            "directive": null,
            "start": 680,
            "end": 693
          }
        ],
        "start": 625,
        "end": 713
      },
      "expression": false,
      "start": 611,
      "end": 713
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 726
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
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "init": null,
                "definite": false,
                "start": 739,
                "end": 740
              }
            ],
            "declare": false,
            "start": 735,
            "end": 741
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 754
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 750,
              "end": 756
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
                      "start": 768,
                      "end": 769
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 772,
                      "end": 774
                    },
                    "start": 768,
                    "end": 774
                  },
                  "directive": null,
                  "start": 768,
                  "end": 775
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 785
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 786,
                        "end": 790
                      },
                      "optional": false,
                      "computed": false,
                      "start": 784,
                      "end": 790
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 791,
                        "end": 792
                      }
                    ],
                    "optional": false,
                    "start": 784,
                    "end": 793
                  },
                  "directive": null,
                  "start": 784,
                  "end": 794
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 803,
                        "end": 804
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 809
                      },
                      "optional": false,
                      "computed": false,
                      "start": 803,
                      "end": 809
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 810,
                        "end": 817
                      }
                    ],
                    "optional": false,
                    "start": 803,
                    "end": 818
                  },
                  "directive": null,
                  "start": 803,
                  "end": 819
                }
              ],
              "start": 758,
              "end": 825
            },
            "alternate": {
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
                      "start": 845,
                      "end": 846
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 850,
                          "end": 854
                        }
                      ],
                      "start": 849,
                      "end": 855
                    },
                    "start": 845,
                    "end": 855
                  },
                  "directive": null,
                  "start": 845,
                  "end": 856
                }
              ],
              "start": 835,
              "end": 885
            },
            "start": 746,
            "end": 885
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 890,
              "end": 891
            },
            "directive": null,
            "start": 890,
            "end": 892
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 948
                },
                "optional": false,
                "computed": false,
                "start": 942,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 99,
                  "raw": "99",
                  "start": 949,
                  "end": 951
                }
              ],
              "optional": false,
              "start": 942,
              "end": 952
            },
            "directive": null,
            "start": 942,
            "end": 953
          }
        ],
        "start": 729,
        "end": 965
      },
      "expression": false,
      "start": 715,
      "end": 965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 978
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
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 992
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 995,
                  "end": 997
                },
                "definite": false,
                "start": 991,
                "end": 997
              }
            ],
            "declare": false,
            "start": 987,
            "end": 998
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1040
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1045
                },
                "optional": false,
                "computed": false,
                "start": 1039,
                "end": 1045
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1046,
                  "end": 1047
                }
              ],
              "optional": false,
              "start": 1039,
              "end": 1048
            },
            "directive": null,
            "start": 1039,
            "end": 1049
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
                  "start": 1058,
                  "end": 1059
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1063
                },
                "definite": false,
                "start": 1058,
                "end": 1063
              }
            ],
            "declare": false,
            "start": 1054,
            "end": 1064
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1116
                },
                "optional": false,
                "computed": false,
                "start": 1110,
                "end": 1116
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1117,
                  "end": 1124
                }
              ],
              "optional": false,
              "start": 1110,
              "end": 1125
            },
            "directive": null,
            "start": 1110,
            "end": 1126
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1138,
                  "end": 1139
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1144
                },
                "optional": false,
                "computed": false,
                "start": 1138,
                "end": 1144
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1145,
                  "end": 1152
                }
              ],
              "optional": false,
              "start": 1138,
              "end": 1153
            },
            "directive": null,
            "start": 1138,
            "end": 1154
          }
        ],
        "start": 981,
        "end": 1166
      },
      "expression": false,
      "start": 967,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1179
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1195
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1198,
                  "end": 1200
                },
                "definite": false,
                "start": 1194,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1188,
            "end": 1201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1249,
                  "end": 1250
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1251,
                  "end": 1255
                },
                "optional": false,
                "computed": false,
                "start": 1249,
                "end": 1255
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1256,
                  "end": 1257
                }
              ],
              "optional": false,
              "start": 1249,
              "end": 1258
            },
            "directive": null,
            "start": 1249,
            "end": 1259
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1274
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1288
                  },
                  "directive": null,
                  "start": 1287,
                  "end": 1289
                }
              ],
              "start": 1277,
              "end": 1320
            },
            "expression": false,
            "start": 1264,
            "end": 1320
          }
        ],
        "start": 1182,
        "end": 1322
      },
      "expression": false,
      "start": 1168,
      "end": 1322
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1322
}
```
