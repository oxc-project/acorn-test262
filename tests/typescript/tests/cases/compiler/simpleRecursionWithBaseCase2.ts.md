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
        "name": "rec1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 34
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 41
                  },
                  "optional": false,
                  "computed": false,
                  "start": 30,
                  "end": 41
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 30,
                "end": 43
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 46,
                "end": 49
              },
              "start": 30,
              "end": 49
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 68
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 64,
                    "end": 70
                  },
                  "start": 57,
                  "end": 71
                }
              ],
              "start": 51,
              "end": 75
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 94,
                    "end": 101
                  },
                  "start": 87,
                  "end": 102
                }
              ],
              "start": 81,
              "end": 106
            },
            "start": 26,
            "end": 106
          }
        ],
        "start": 22,
        "end": 108
      },
      "expression": false,
      "start": 0,
      "end": 108
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec2",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 129
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 144
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 151
                  },
                  "optional": false,
                  "computed": false,
                  "start": 140,
                  "end": 151
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 140,
                "end": 153
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 156,
                "end": 159
              },
              "start": 140,
              "end": 159
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rec2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 184
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 180,
                      "end": 186
                    },
                    "start": 174,
                    "end": 186
                  },
                  "start": 167,
                  "end": 187
                }
              ],
              "start": 161,
              "end": 191
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 210,
                    "end": 217
                  },
                  "start": 203,
                  "end": 218
                }
              ],
              "start": 197,
              "end": 222
            },
            "start": 136,
            "end": 222
          }
        ],
        "start": 132,
        "end": 224
      },
      "expression": false,
      "start": 110,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec3",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 245
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "rec3",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 263
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 259,
              "end": 265
            },
            "start": 252,
            "end": 266
          }
        ],
        "start": 248,
        "end": 268
      },
      "expression": false,
      "start": 226,
      "end": 268
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec4",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 289
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rec4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 313
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 309,
                "end": 315
              },
              "start": 303,
              "end": 315
            },
            "start": 296,
            "end": 316
          }
        ],
        "start": 292,
        "end": 318
      },
      "expression": false,
      "start": 270,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec5",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 339
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 354
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 361
                  },
                  "optional": false,
                  "computed": false,
                  "start": 350,
                  "end": 361
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 350,
                "end": 363
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 366,
                "end": 369
              },
              "start": 350,
              "end": 369
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 390
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 386,
                    "end": 392
                  },
                  "start": 377,
                  "end": 395
                }
              ],
              "start": 371,
              "end": 399
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 418,
                    "end": 425
                  },
                  "start": 411,
                  "end": 426
                }
              ],
              "start": 405,
              "end": 430
            },
            "start": 346,
            "end": 430
          }
        ],
        "start": 342,
        "end": 432
      },
      "expression": false,
      "start": 320,
      "end": 432
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec6",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 468
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 475
                  },
                  "optional": false,
                  "computed": false,
                  "start": 464,
                  "end": 475
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 464,
                "end": 477
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 480,
                "end": 483
              },
              "start": 464,
              "end": 483
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rec1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 510
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 506,
                      "end": 512
                    },
                    "start": 498,
                    "end": 514
                  },
                  "start": 491,
                  "end": 515
                }
              ],
              "start": 485,
              "end": 519
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 538,
                    "end": 545
                  },
                  "start": 531,
                  "end": 546
                }
              ],
              "start": 525,
              "end": 550
            },
            "start": 460,
            "end": 550
          }
        ],
        "start": 456,
        "end": 552
      },
      "expression": false,
      "start": 434,
      "end": 552
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
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 579
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 580,
                          "end": 586
                        }
                      ],
                      "start": 579,
                      "end": 587
                    },
                    "start": 572,
                    "end": 587
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 590,
                    "end": 596
                  }
                ],
                "start": 572,
                "end": 596
              },
              "start": 570,
              "end": 596
            },
            "start": 568,
            "end": 596
          },
          "init": null,
          "definite": false,
          "start": 568,
          "end": 596
        }
      ],
      "declare": true,
      "start": 554,
      "end": 597
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 618
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 633
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 640
                  },
                  "optional": false,
                  "computed": false,
                  "start": 629,
                  "end": 640
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 629,
                "end": 642
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 645,
                "end": 648
              },
              "start": 629,
              "end": 648
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 665
                  },
                  "start": 656,
                  "end": 666
                }
              ],
              "start": 650,
              "end": 670
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 695,
                        "end": 699
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 695,
                      "end": 701
                    },
                    "start": 689,
                    "end": 701
                  },
                  "start": 682,
                  "end": 702
                }
              ],
              "start": 676,
              "end": 706
            },
            "start": 625,
            "end": 706
          }
        ],
        "start": 621,
        "end": 708
      },
      "expression": false,
      "start": 599,
      "end": 708
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 729
      },
      "generator": false,
      "async": true,
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
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 744
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 751
                  },
                  "optional": false,
                  "computed": false,
                  "start": 740,
                  "end": 751
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 740,
                "end": 753
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 756,
                "end": 759
              },
              "start": 740,
              "end": 759
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 774,
                    "end": 776
                  },
                  "start": 767,
                  "end": 777
                }
              ],
              "start": 761,
              "end": 781
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 804
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 800,
                    "end": 806
                  },
                  "start": 793,
                  "end": 807
                }
              ],
              "start": 787,
              "end": 811
            },
            "start": 736,
            "end": 811
          }
        ],
        "start": 732,
        "end": 813
      },
      "expression": false,
      "start": 710,
      "end": 813
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 813
}
```
