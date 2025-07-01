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
        "name": "normalFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 87
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                ],
                "start": 87,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "start": 78,
            "end": 95
          },
          "start": 77,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "init": null,
                  "definite": false,
                  "start": 118,
                  "end": 119
                }
              ],
              "declare": false,
              "start": 112,
              "end": 119
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 123,
              "end": 125
            },
            "body": {
              "type": "EmptyStatement",
              "start": 126,
              "end": 127
            },
            "start": 101,
            "end": 127
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "start": 137,
              "end": 144
            },
            "start": 130,
            "end": 145
          }
        ],
        "start": 97,
        "end": 147
      },
      "expression": false,
      "start": 57,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 177
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    }
                  ],
                  "start": 188,
                  "end": 196
                },
                "start": 181,
                "end": 196
              },
              "start": 179,
              "end": 196
            },
            "start": 178,
            "end": 196
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForOfStatement",
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "init": null,
                    "definite": false,
                    "start": 219,
                    "end": 220
                  }
                ],
                "declare": false,
                "start": 213,
                "end": 220
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 224,
                "end": 226
              },
              "body": {
                "type": "EmptyStatement",
                "start": 227,
                "end": 228
              },
              "start": 202,
              "end": 228
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "start": 238,
                "end": 245
              },
              "start": 231,
              "end": 246
            }
          ],
          "start": 198,
          "end": 248
        },
        "expression": false,
        "start": 156,
        "end": 248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 248
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
            "name": "functionExpression",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 274
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 296
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ],
                      "start": 296,
                      "end": 304
                    },
                    "start": 289,
                    "end": 304
                  },
                  "start": 287,
                  "end": 304
                },
                "start": 286,
                "end": 304
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "init": null,
                        "definite": false,
                        "start": 327,
                        "end": 328
                      }
                    ],
                    "declare": false,
                    "start": 321,
                    "end": 328
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 332,
                    "end": 334
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 335,
                    "end": 336
                  },
                  "start": 310,
                  "end": 336
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    },
                    "start": 339,
                    "end": 346
                  },
                  "directive": null,
                  "start": 339,
                  "end": 347
                }
              ],
              "start": 306,
              "end": 349
            },
            "expression": false,
            "start": 277,
            "end": 349
          },
          "definite": false,
          "start": 256,
          "end": 349
        }
      ],
      "declare": false,
      "start": 250,
      "end": 349
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
            "name": "arrowFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 366
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 380
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        }
                      ],
                      "start": 380,
                      "end": 388
                    },
                    "start": 373,
                    "end": 388
                  },
                  "start": 371,
                  "end": 388
                },
                "start": 370,
                "end": 388
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 414,
                          "end": 415
                        },
                        "init": null,
                        "definite": false,
                        "start": 414,
                        "end": 415
                      }
                    ],
                    "declare": false,
                    "start": 408,
                    "end": 415
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 419,
                    "end": 421
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 422,
                    "end": 423
                  },
                  "start": 397,
                  "end": 423
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "start": 433,
                    "end": 440
                  },
                  "start": 426,
                  "end": 441
                }
              ],
              "start": 393,
              "end": 443
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 443
          },
          "definite": false,
          "start": 357,
          "end": 443
        }
      ],
      "declare": false,
      "start": 351,
      "end": 444
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generatorFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 469
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 480
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 481,
                    "end": 487
                  }
                ],
                "start": 480,
                "end": 488
              },
              "start": 473,
              "end": 488
            },
            "start": 471,
            "end": 488
          },
          "start": 470,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 512
                  },
                  "init": null,
                  "definite": false,
                  "start": 511,
                  "end": 512
                }
              ],
              "declare": false,
              "start": 505,
              "end": 512
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 516,
              "end": 518
            },
            "body": {
              "type": "EmptyStatement",
              "start": 519,
              "end": 520
            },
            "start": 494,
            "end": 520
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "start": 529,
                "end": 536
              },
              "start": 523,
              "end": 536
            },
            "directive": null,
            "start": 523,
            "end": 537
          }
        ],
        "start": 490,
        "end": 539
      },
      "expression": false,
      "start": 446,
      "end": 539
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clazz",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 552
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
              "start": 557,
              "end": 568
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "type": "TSNumberKeyword",
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
                    "start": 570,
                    "end": 587
                  },
                  "start": 569,
                  "end": 587
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 613
                          },
                          "init": null,
                          "definite": false,
                          "start": 612,
                          "end": 613
                        }
                      ],
                      "declare": false,
                      "start": 606,
                      "end": 613
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 617,
                      "end": 619
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 620,
                      "end": 621
                    },
                    "start": 595,
                    "end": 621
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 632,
                        "end": 633
                      },
                      "start": 626,
                      "end": 633
                    },
                    "directive": null,
                    "start": 626,
                    "end": 634
                  }
                ],
                "start": 589,
                "end": 638
              },
              "expression": false,
              "start": 568,
              "end": 638
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 557,
            "end": 638
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 647
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 658
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 659,
                            "end": 665
                          }
                        ],
                        "start": 658,
                        "end": 666
                      },
                      "start": 651,
                      "end": 666
                    },
                    "start": 649,
                    "end": 666
                  },
                  "start": 648,
                  "end": 666
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 690
                          },
                          "init": null,
                          "definite": false,
                          "start": 689,
                          "end": 690
                        }
                      ],
                      "declare": false,
                      "start": 683,
                      "end": 690
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 694,
                      "end": 696
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 697,
                      "end": 698
                    },
                    "start": 672,
                    "end": 698
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 710
                      },
                      "start": 703,
                      "end": 710
                    },
                    "directive": null,
                    "start": 703,
                    "end": 711
                  }
                ],
                "start": 668,
                "end": 715
              },
              "expression": false,
              "start": 647,
              "end": 715
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 641,
            "end": 715
          }
        ],
        "start": 553,
        "end": 717
      },
      "abstract": false,
      "declare": false,
      "start": 541,
      "end": 717
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "init": null,
            "definite": false,
            "start": 736,
            "end": 737
          }
        ],
        "declare": false,
        "start": 730,
        "end": 737
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 741,
        "end": 743
      },
      "body": {
        "type": "EmptyStatement",
        "start": 744,
        "end": 745
      },
      "start": 719,
      "end": 745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 752,
          "end": 756
        },
        "start": 746,
        "end": 756
      },
      "directive": null,
      "start": 746,
      "end": 757
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 757
}
```
