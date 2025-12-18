__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 33
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 36,
        "end": 39
      },
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 73
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 82,
              "end": 87
            },
            "directive": null,
            "start": 82,
            "end": 88
          }
        ],
        "start": 76,
        "end": 90
      },
      "expression": false,
      "start": 40,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 124
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 139,
                "end": 140
              },
              "start": 133,
              "end": 140
            },
            "directive": null,
            "start": 133,
            "end": 141
          }
        ],
        "start": 127,
        "end": 143
      },
      "expression": false,
      "start": 91,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 177
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 207
                  },
                  "optional": false,
                  "computed": false,
                  "start": 192,
                  "end": 207
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 208,
                    "end": 209
                  }
                ],
                "optional": false,
                "start": 192,
                "end": 210
              },
              "start": 186,
              "end": 210
            },
            "directive": null,
            "start": 186,
            "end": 211
          }
        ],
        "start": 180,
        "end": 213
      },
      "expression": false,
      "start": 144,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 247
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 262,
                "end": 263
              },
              "start": 256,
              "end": 263
            },
            "directive": null,
            "start": 256,
            "end": 264
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 282
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 290
                  },
                  "optional": false,
                  "computed": false,
                  "start": 275,
                  "end": 290
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 291,
                    "end": 292
                  }
                ],
                "optional": false,
                "start": 275,
                "end": 293
              },
              "start": 269,
              "end": 293
            },
            "directive": null,
            "start": 269,
            "end": 294
          }
        ],
        "start": 250,
        "end": 296
      },
      "expression": false,
      "start": 214,
      "end": 296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 330
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 347,
                    "end": 348
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 350,
                    "end": 351
                  }
                ],
                "start": 346,
                "end": 352
              },
              "start": 339,
              "end": 352
            },
            "directive": null,
            "start": 339,
            "end": 353
          }
        ],
        "start": 333,
        "end": 355
      },
      "expression": false,
      "start": 297,
      "end": 355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 389
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 413
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 421
                      },
                      "optional": false,
                      "computed": false,
                      "start": 406,
                      "end": 421
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 422,
                        "end": 423
                      }
                    ],
                    "optional": false,
                    "start": 406,
                    "end": 424
                  }
                ],
                "start": 405,
                "end": 425
              },
              "start": 398,
              "end": 425
            },
            "directive": null,
            "start": 398,
            "end": 426
          }
        ],
        "start": 392,
        "end": 428
      },
      "expression": false,
      "start": 356,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 462
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 507,
                            "end": 508
                          },
                          "start": 501,
                          "end": 508
                        },
                        "directive": null,
                        "start": 501,
                        "end": 509
                      }
                    ],
                    "start": 499,
                    "end": 511
                  },
                  "expression": false,
                  "start": 479,
                  "end": 511
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 478,
                "end": 514
              },
              "start": 471,
              "end": 514
            },
            "directive": null,
            "start": 471,
            "end": 515
          }
        ],
        "start": 465,
        "end": 517
      },
      "expression": false,
      "start": 429,
      "end": 517
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
            "name": "assignability1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 567
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 568,
                          "end": 574
                        }
                      ],
                      "start": 567,
                      "end": 575
                    },
                    "start": 546,
                    "end": 575
                  },
                  "start": 543,
                  "end": 575
                },
                "start": 540,
                "end": 575
              },
              "start": 538,
              "end": 575
            },
            "start": 524,
            "end": 575
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 610,
                      "end": 611
                    },
                    "start": 604,
                    "end": 611
                  },
                  "directive": null,
                  "start": 604,
                  "end": 612
                }
              ],
              "start": 598,
              "end": 614
            },
            "expression": false,
            "start": 578,
            "end": 614
          },
          "definite": false,
          "start": 524,
          "end": 614
        }
      ],
      "declare": false,
      "start": 518,
      "end": 615
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
            "name": "assignability2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 665
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 666,
                          "end": 672
                        }
                      ],
                      "start": 665,
                      "end": 673
                    },
                    "start": 644,
                    "end": 673
                  },
                  "start": 641,
                  "end": 673
                },
                "start": 638,
                "end": 673
              },
              "start": 636,
              "end": 673
            },
            "start": 622,
            "end": 673
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 708,
                          "end": 715
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 723
                        },
                        "optional": false,
                        "computed": false,
                        "start": 708,
                        "end": 723
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 724,
                          "end": 725
                        }
                      ],
                      "optional": false,
                      "start": 708,
                      "end": 726
                    },
                    "start": 702,
                    "end": 726
                  },
                  "directive": null,
                  "start": 702,
                  "end": 727
                }
              ],
              "start": 696,
              "end": 729
            },
            "expression": false,
            "start": 676,
            "end": 729
          },
          "definite": false,
          "start": 622,
          "end": 729
        }
      ],
      "declare": false,
      "start": 616,
      "end": 730
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
            "name": "assignability3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 780
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 781,
                          "end": 787
                        }
                      ],
                      "start": 780,
                      "end": 788
                    },
                    "start": 759,
                    "end": 788
                  },
                  "start": 756,
                  "end": 788
                },
                "start": 753,
                "end": 788
              },
              "start": 751,
              "end": 788
            },
            "start": 737,
            "end": 788
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 825,
                          "end": 826
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 828,
                          "end": 829
                        }
                      ],
                      "start": 824,
                      "end": 830
                    },
                    "start": 817,
                    "end": 830
                  },
                  "directive": null,
                  "start": 817,
                  "end": 831
                }
              ],
              "start": 811,
              "end": 833
            },
            "expression": false,
            "start": 791,
            "end": 833
          },
          "definite": false,
          "start": 737,
          "end": 833
        }
      ],
      "declare": false,
      "start": 731,
      "end": 834
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
            "name": "assignability4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 884
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 885,
                          "end": 891
                        }
                      ],
                      "start": 884,
                      "end": 892
                    },
                    "start": 863,
                    "end": 892
                  },
                  "start": 860,
                  "end": 892
                },
                "start": 857,
                "end": 892
              },
              "start": 855,
              "end": 892
            },
            "start": 841,
            "end": 892
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 936
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 944
                            },
                            "optional": false,
                            "computed": false,
                            "start": 929,
                            "end": 944
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 945,
                              "end": 946
                            }
                          ],
                          "optional": false,
                          "start": 929,
                          "end": 947
                        }
                      ],
                      "start": 928,
                      "end": 948
                    },
                    "start": 921,
                    "end": 948
                  },
                  "directive": null,
                  "start": 921,
                  "end": 949
                }
              ],
              "start": 915,
              "end": 951
            },
            "expression": false,
            "start": 895,
            "end": 951
          },
          "definite": false,
          "start": 841,
          "end": 951
        }
      ],
      "declare": false,
      "start": 835,
      "end": 952
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
            "name": "assignability5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 1002
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1003,
                          "end": 1009
                        }
                      ],
                      "start": 1002,
                      "end": 1010
                    },
                    "start": 981,
                    "end": 1010
                  },
                  "start": 978,
                  "end": 1010
                },
                "start": 975,
                "end": 1010
              },
              "start": 973,
              "end": 1010
            },
            "start": 959,
            "end": 1010
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1075,
                                  "end": 1076
                                },
                                "start": 1069,
                                "end": 1076
                              },
                              "directive": null,
                              "start": 1069,
                              "end": 1077
                            }
                          ],
                          "start": 1067,
                          "end": 1079
                        },
                        "expression": false,
                        "start": 1047,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1046,
                      "end": 1082
                    },
                    "start": 1039,
                    "end": 1082
                  },
                  "directive": null,
                  "start": 1039,
                  "end": 1083
                }
              ],
              "start": 1033,
              "end": 1085
            },
            "expression": false,
            "start": 1013,
            "end": 1085
          },
          "definite": false,
          "start": 959,
          "end": 1085
        }
      ],
      "declare": false,
      "start": 953,
      "end": 1086
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
            "name": "assignability6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1128
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1129,
                          "end": 1135
                        }
                      ],
                      "start": 1128,
                      "end": 1136
                    },
                    "start": 1115,
                    "end": 1136
                  },
                  "start": 1112,
                  "end": 1136
                },
                "start": 1109,
                "end": 1136
              },
              "start": 1107,
              "end": 1136
            },
            "start": 1093,
            "end": 1136
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1171,
                      "end": 1172
                    },
                    "start": 1165,
                    "end": 1172
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1173
                }
              ],
              "start": 1159,
              "end": 1175
            },
            "expression": false,
            "start": 1139,
            "end": 1175
          },
          "definite": false,
          "start": 1093,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1176
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
            "name": "assignability7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1205,
                      "end": 1218
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1219,
                          "end": 1225
                        }
                      ],
                      "start": 1218,
                      "end": 1226
                    },
                    "start": 1205,
                    "end": 1226
                  },
                  "start": 1202,
                  "end": 1226
                },
                "start": 1199,
                "end": 1226
              },
              "start": 1197,
              "end": 1226
            },
            "start": 1183,
            "end": 1226
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1261,
                          "end": 1268
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1269,
                          "end": 1276
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1261,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1277,
                          "end": 1278
                        }
                      ],
                      "optional": false,
                      "start": 1261,
                      "end": 1279
                    },
                    "start": 1255,
                    "end": 1279
                  },
                  "directive": null,
                  "start": 1255,
                  "end": 1280
                }
              ],
              "start": 1249,
              "end": 1282
            },
            "expression": false,
            "start": 1229,
            "end": 1282
          },
          "definite": false,
          "start": 1183,
          "end": 1282
        }
      ],
      "declare": false,
      "start": 1177,
      "end": 1283
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
            "name": "assignability8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1325
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1326,
                          "end": 1332
                        }
                      ],
                      "start": 1325,
                      "end": 1333
                    },
                    "start": 1312,
                    "end": 1333
                  },
                  "start": 1309,
                  "end": 1333
                },
                "start": 1306,
                "end": 1333
              },
              "start": 1304,
              "end": 1333
            },
            "start": 1290,
            "end": 1333
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1370,
                          "end": 1371
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1373,
                          "end": 1374
                        }
                      ],
                      "start": 1369,
                      "end": 1375
                    },
                    "start": 1362,
                    "end": 1375
                  },
                  "directive": null,
                  "start": 1362,
                  "end": 1376
                }
              ],
              "start": 1356,
              "end": 1378
            },
            "expression": false,
            "start": 1336,
            "end": 1378
          },
          "definite": false,
          "start": 1290,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1284,
      "end": 1379
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
            "name": "assignability9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1421
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1422,
                          "end": 1428
                        }
                      ],
                      "start": 1421,
                      "end": 1429
                    },
                    "start": 1408,
                    "end": 1429
                  },
                  "start": 1405,
                  "end": 1429
                },
                "start": 1402,
                "end": 1429
              },
              "start": 1400,
              "end": 1429
            },
            "start": 1386,
            "end": 1429
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1466,
                              "end": 1473
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1474,
                              "end": 1481
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1466,
                            "end": 1481
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1482,
                              "end": 1483
                            }
                          ],
                          "optional": false,
                          "start": 1466,
                          "end": 1484
                        }
                      ],
                      "start": 1465,
                      "end": 1485
                    },
                    "start": 1458,
                    "end": 1485
                  },
                  "directive": null,
                  "start": 1458,
                  "end": 1486
                }
              ],
              "start": 1452,
              "end": 1488
            },
            "expression": false,
            "start": 1432,
            "end": 1488
          },
          "definite": false,
          "start": 1386,
          "end": 1488
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1489
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
            "name": "assignability10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1519,
                      "end": 1532
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1533,
                          "end": 1539
                        }
                      ],
                      "start": 1532,
                      "end": 1540
                    },
                    "start": 1519,
                    "end": 1540
                  },
                  "start": 1516,
                  "end": 1540
                },
                "start": 1513,
                "end": 1540
              },
              "start": 1511,
              "end": 1540
            },
            "start": 1496,
            "end": 1540
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1605,
                                  "end": 1606
                                },
                                "start": 1599,
                                "end": 1606
                              },
                              "directive": null,
                              "start": 1599,
                              "end": 1607
                            }
                          ],
                          "start": 1597,
                          "end": 1609
                        },
                        "expression": false,
                        "start": 1577,
                        "end": 1609
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1576,
                      "end": 1612
                    },
                    "start": 1569,
                    "end": 1612
                  },
                  "directive": null,
                  "start": 1569,
                  "end": 1613
                }
              ],
              "start": 1563,
              "end": 1615
            },
            "expression": false,
            "start": 1543,
            "end": 1615
          },
          "definite": false,
          "start": 1496,
          "end": 1615
        }
      ],
      "declare": false,
      "start": 1490,
      "end": 1616
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
            "name": "assignability11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1646,
                      "end": 1659
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1660,
                          "end": 1666
                        }
                      ],
                      "start": 1659,
                      "end": 1667
                    },
                    "start": 1646,
                    "end": 1667
                  },
                  "start": 1643,
                  "end": 1667
                },
                "start": 1640,
                "end": 1667
              },
              "start": 1638,
              "end": 1667
            },
            "start": 1623,
            "end": 1667
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1702,
                      "end": 1703
                    },
                    "start": 1696,
                    "end": 1703
                  },
                  "directive": null,
                  "start": 1696,
                  "end": 1704
                }
              ],
              "start": 1690,
              "end": 1706
            },
            "expression": false,
            "start": 1670,
            "end": 1706
          },
          "definite": false,
          "start": 1623,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1617,
      "end": 1707
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
            "name": "assignability12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1737,
                      "end": 1750
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1751,
                          "end": 1757
                        }
                      ],
                      "start": 1750,
                      "end": 1758
                    },
                    "start": 1737,
                    "end": 1758
                  },
                  "start": 1734,
                  "end": 1758
                },
                "start": 1731,
                "end": 1758
              },
              "start": 1729,
              "end": 1758
            },
            "start": 1714,
            "end": 1758
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1793,
                          "end": 1800
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1801,
                          "end": 1808
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1793,
                        "end": 1808
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1809,
                          "end": 1810
                        }
                      ],
                      "optional": false,
                      "start": 1793,
                      "end": 1811
                    },
                    "start": 1787,
                    "end": 1811
                  },
                  "directive": null,
                  "start": 1787,
                  "end": 1812
                }
              ],
              "start": 1781,
              "end": 1814
            },
            "expression": false,
            "start": 1761,
            "end": 1814
          },
          "definite": false,
          "start": 1714,
          "end": 1814
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1815
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
            "name": "assignability13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1845,
                      "end": 1858
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1859,
                          "end": 1865
                        }
                      ],
                      "start": 1858,
                      "end": 1866
                    },
                    "start": 1845,
                    "end": 1866
                  },
                  "start": 1842,
                  "end": 1866
                },
                "start": 1839,
                "end": 1866
              },
              "start": 1837,
              "end": 1866
            },
            "start": 1822,
            "end": 1866
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1903,
                          "end": 1904
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1906,
                          "end": 1907
                        }
                      ],
                      "start": 1902,
                      "end": 1908
                    },
                    "start": 1895,
                    "end": 1908
                  },
                  "directive": null,
                  "start": 1895,
                  "end": 1909
                }
              ],
              "start": 1889,
              "end": 1911
            },
            "expression": false,
            "start": 1869,
            "end": 1911
          },
          "definite": false,
          "start": 1822,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1816,
      "end": 1912
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
            "name": "assignability14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1942,
                      "end": 1955
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1956,
                          "end": 1962
                        }
                      ],
                      "start": 1955,
                      "end": 1963
                    },
                    "start": 1942,
                    "end": 1963
                  },
                  "start": 1939,
                  "end": 1963
                },
                "start": 1936,
                "end": 1963
              },
              "start": 1934,
              "end": 1963
            },
            "start": 1919,
            "end": 1963
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2000,
                              "end": 2007
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2008,
                              "end": 2015
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2000,
                            "end": 2015
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2016,
                              "end": 2017
                            }
                          ],
                          "optional": false,
                          "start": 2000,
                          "end": 2018
                        }
                      ],
                      "start": 1999,
                      "end": 2019
                    },
                    "start": 1992,
                    "end": 2019
                  },
                  "directive": null,
                  "start": 1992,
                  "end": 2020
                }
              ],
              "start": 1986,
              "end": 2022
            },
            "expression": false,
            "start": 1966,
            "end": 2022
          },
          "definite": false,
          "start": 1919,
          "end": 2022
        }
      ],
      "declare": false,
      "start": 1913,
      "end": 2023
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
            "name": "assignability15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2066
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2067,
                          "end": 2073
                        }
                      ],
                      "start": 2066,
                      "end": 2074
                    },
                    "start": 2053,
                    "end": 2074
                  },
                  "start": 2050,
                  "end": 2074
                },
                "start": 2047,
                "end": 2074
              },
              "start": 2045,
              "end": 2074
            },
            "start": 2030,
            "end": 2074
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 2139,
                                  "end": 2140
                                },
                                "start": 2133,
                                "end": 2140
                              },
                              "directive": null,
                              "start": 2133,
                              "end": 2141
                            }
                          ],
                          "start": 2131,
                          "end": 2143
                        },
                        "expression": false,
                        "start": 2111,
                        "end": 2143
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2110,
                      "end": 2146
                    },
                    "start": 2103,
                    "end": 2146
                  },
                  "directive": null,
                  "start": 2103,
                  "end": 2147
                }
              ],
              "start": 2097,
              "end": 2149
            },
            "expression": false,
            "start": 2077,
            "end": 2149
          },
          "definite": false,
          "start": 2030,
          "end": 2149
        }
      ],
      "declare": false,
      "start": 2024,
      "end": 2150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2168,
        "end": 2187
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2212
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2213,
                "end": 2219
              }
            ],
            "start": 2212,
            "end": 2220
          },
          "start": 2191,
          "end": 2220
        },
        "start": 2189,
        "end": 2220
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2233,
                "end": 2234
              },
              "start": 2227,
              "end": 2234
            },
            "directive": null,
            "start": 2227,
            "end": 2235
          }
        ],
        "start": 2221,
        "end": 2237
      },
      "expression": false,
      "start": 2151,
      "end": 2237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2255,
        "end": 2274
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2278,
            "end": 2299
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2300,
                "end": 2306
              }
            ],
            "start": 2299,
            "end": 2307
          },
          "start": 2278,
          "end": 2307
        },
        "start": 2276,
        "end": 2307
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2320,
                    "end": 2327
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2328,
                    "end": 2335
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2320,
                  "end": 2335
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2336,
                    "end": 2337
                  }
                ],
                "optional": false,
                "start": 2320,
                "end": 2338
              },
              "start": 2314,
              "end": 2338
            },
            "directive": null,
            "start": 2314,
            "end": 2339
          }
        ],
        "start": 2308,
        "end": 2341
      },
      "expression": false,
      "start": 2238,
      "end": 2341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2359,
        "end": 2378
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2382,
            "end": 2403
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2404,
                "end": 2410
              }
            ],
            "start": 2403,
            "end": 2411
          },
          "start": 2382,
          "end": 2411
        },
        "start": 2380,
        "end": 2411
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2426,
                    "end": 2427
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2429,
                    "end": 2430
                  }
                ],
                "start": 2425,
                "end": 2431
              },
              "start": 2418,
              "end": 2431
            },
            "directive": null,
            "start": 2418,
            "end": 2432
          }
        ],
        "start": 2412,
        "end": 2434
      },
      "expression": false,
      "start": 2342,
      "end": 2434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2452,
        "end": 2471
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2475,
            "end": 2496
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2497,
                "end": 2503
              }
            ],
            "start": 2496,
            "end": 2504
          },
          "start": 2475,
          "end": 2504
        },
        "start": 2473,
        "end": 2504
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2519,
                        "end": 2526
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2519,
                      "end": 2534
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2535,
                        "end": 2536
                      }
                    ],
                    "optional": false,
                    "start": 2519,
                    "end": 2537
                  }
                ],
                "start": 2518,
                "end": 2538
              },
              "start": 2511,
              "end": 2538
            },
            "directive": null,
            "start": 2511,
            "end": 2539
          }
        ],
        "start": 2505,
        "end": 2541
      },
      "expression": false,
      "start": 2435,
      "end": 2541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2578
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2582,
            "end": 2603
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2604,
                "end": 2610
              }
            ],
            "start": 2603,
            "end": 2611
          },
          "start": 2582,
          "end": 2611
        },
        "start": 2580,
        "end": 2611
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2654,
                            "end": 2655
                          },
                          "start": 2648,
                          "end": 2655
                        },
                        "directive": null,
                        "start": 2648,
                        "end": 2656
                      }
                    ],
                    "start": 2646,
                    "end": 2658
                  },
                  "expression": false,
                  "start": 2626,
                  "end": 2658
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2625,
                "end": 2661
              },
              "start": 2618,
              "end": 2661
            },
            "directive": null,
            "start": 2618,
            "end": 2662
          }
        ],
        "start": 2612,
        "end": 2664
      },
      "expression": false,
      "start": 2542,
      "end": 2664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2682,
        "end": 2701
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2705,
            "end": 2718
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2719,
                "end": 2725
              }
            ],
            "start": 2718,
            "end": 2726
          },
          "start": 2705,
          "end": 2726
        },
        "start": 2703,
        "end": 2726
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2739,
                "end": 2740
              },
              "start": 2733,
              "end": 2740
            },
            "directive": null,
            "start": 2733,
            "end": 2741
          }
        ],
        "start": 2727,
        "end": 2743
      },
      "expression": false,
      "start": 2665,
      "end": 2743
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2761,
        "end": 2780
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2784,
            "end": 2797
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2798,
                "end": 2804
              }
            ],
            "start": 2797,
            "end": 2805
          },
          "start": 2784,
          "end": 2805
        },
        "start": 2782,
        "end": 2805
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2818,
                    "end": 2825
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2826,
                    "end": 2833
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2818,
                  "end": 2833
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2834,
                    "end": 2835
                  }
                ],
                "optional": false,
                "start": 2818,
                "end": 2836
              },
              "start": 2812,
              "end": 2836
            },
            "directive": null,
            "start": 2812,
            "end": 2837
          }
        ],
        "start": 2806,
        "end": 2839
      },
      "expression": false,
      "start": 2744,
      "end": 2839
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2857,
        "end": 2876
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2880,
            "end": 2893
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2894,
                "end": 2900
              }
            ],
            "start": 2893,
            "end": 2901
          },
          "start": 2880,
          "end": 2901
        },
        "start": 2878,
        "end": 2901
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2916,
                    "end": 2917
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2919,
                    "end": 2920
                  }
                ],
                "start": 2915,
                "end": 2921
              },
              "start": 2908,
              "end": 2921
            },
            "directive": null,
            "start": 2908,
            "end": 2922
          }
        ],
        "start": 2902,
        "end": 2924
      },
      "expression": false,
      "start": 2840,
      "end": 2924
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2961
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2965,
            "end": 2978
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2979,
                "end": 2985
              }
            ],
            "start": 2978,
            "end": 2986
          },
          "start": 2965,
          "end": 2986
        },
        "start": 2963,
        "end": 2986
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3001,
                        "end": 3008
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3009,
                        "end": 3016
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3001,
                      "end": 3016
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3017,
                        "end": 3018
                      }
                    ],
                    "optional": false,
                    "start": 3001,
                    "end": 3019
                  }
                ],
                "start": 3000,
                "end": 3020
              },
              "start": 2993,
              "end": 3020
            },
            "directive": null,
            "start": 2993,
            "end": 3021
          }
        ],
        "start": 2987,
        "end": 3023
      },
      "expression": false,
      "start": 2925,
      "end": 3023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3041,
        "end": 3061
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 3065,
            "end": 3078
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3079,
                "end": 3085
              }
            ],
            "start": 3078,
            "end": 3086
          },
          "start": 3065,
          "end": 3086
        },
        "start": 3063,
        "end": 3086
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 3129,
                            "end": 3130
                          },
                          "start": 3123,
                          "end": 3130
                        },
                        "directive": null,
                        "start": 3123,
                        "end": 3131
                      }
                    ],
                    "start": 3121,
                    "end": 3133
                  },
                  "expression": false,
                  "start": 3101,
                  "end": 3133
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3100,
                "end": 3136
              },
              "start": 3093,
              "end": 3136
            },
            "directive": null,
            "start": 3093,
            "end": 3137
          }
        ],
        "start": 3087,
        "end": 3139
      },
      "expression": false,
      "start": 3024,
      "end": 3139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3157,
        "end": 3177
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3181,
            "end": 3194
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3195,
                "end": 3201
              }
            ],
            "start": 3194,
            "end": 3202
          },
          "start": 3181,
          "end": 3202
        },
        "start": 3179,
        "end": 3202
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3215,
                "end": 3216
              },
              "start": 3209,
              "end": 3216
            },
            "directive": null,
            "start": 3209,
            "end": 3217
          }
        ],
        "start": 3203,
        "end": 3219
      },
      "expression": false,
      "start": 3140,
      "end": 3219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3237,
        "end": 3257
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3261,
            "end": 3274
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3275,
                "end": 3281
              }
            ],
            "start": 3274,
            "end": 3282
          },
          "start": 3261,
          "end": 3282
        },
        "start": 3259,
        "end": 3282
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3295,
                    "end": 3302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3303,
                    "end": 3310
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3295,
                  "end": 3310
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3311,
                    "end": 3312
                  }
                ],
                "optional": false,
                "start": 3295,
                "end": 3313
              },
              "start": 3289,
              "end": 3313
            },
            "directive": null,
            "start": 3289,
            "end": 3314
          }
        ],
        "start": 3283,
        "end": 3316
      },
      "expression": false,
      "start": 3220,
      "end": 3316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3334,
        "end": 3354
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3358,
            "end": 3371
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3372,
                "end": 3378
              }
            ],
            "start": 3371,
            "end": 3379
          },
          "start": 3358,
          "end": 3379
        },
        "start": 3356,
        "end": 3379
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3394,
                    "end": 3395
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3397,
                    "end": 3398
                  }
                ],
                "start": 3393,
                "end": 3399
              },
              "start": 3386,
              "end": 3399
            },
            "directive": null,
            "start": 3386,
            "end": 3400
          }
        ],
        "start": 3380,
        "end": 3402
      },
      "expression": false,
      "start": 3317,
      "end": 3402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3420,
        "end": 3440
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3444,
            "end": 3457
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3458,
                "end": 3464
              }
            ],
            "start": 3457,
            "end": 3465
          },
          "start": 3444,
          "end": 3465
        },
        "start": 3442,
        "end": 3465
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3480,
                        "end": 3487
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3488,
                        "end": 3495
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3480,
                      "end": 3495
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3496,
                        "end": 3497
                      }
                    ],
                    "optional": false,
                    "start": 3480,
                    "end": 3498
                  }
                ],
                "start": 3479,
                "end": 3499
              },
              "start": 3472,
              "end": 3499
            },
            "directive": null,
            "start": 3472,
            "end": 3500
          }
        ],
        "start": 3466,
        "end": 3502
      },
      "expression": false,
      "start": 3403,
      "end": 3502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3520,
        "end": 3540
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3544,
            "end": 3557
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3558,
                "end": 3564
              }
            ],
            "start": 3557,
            "end": 3565
          },
          "start": 3544,
          "end": 3565
        },
        "start": 3542,
        "end": 3565
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 3608,
                            "end": 3609
                          },
                          "start": 3602,
                          "end": 3609
                        },
                        "directive": null,
                        "start": 3602,
                        "end": 3610
                      }
                    ],
                    "start": 3600,
                    "end": 3612
                  },
                  "expression": false,
                  "start": 3580,
                  "end": 3612
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3579,
                "end": 3615
              },
              "start": 3572,
              "end": 3615
            },
            "directive": null,
            "start": 3572,
            "end": 3616
          }
        ],
        "start": 3566,
        "end": 3618
      },
      "expression": false,
      "start": 3503,
      "end": 3618
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType16",
        "optional": false,
        "typeAnnotation": null,
        "start": 3636,
        "end": 3656
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 3660,
          "end": 3662
        },
        "start": 3658,
        "end": 3662
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3675,
                "end": 3676
              },
              "start": 3669,
              "end": 3676
            },
            "directive": null,
            "start": 3669,
            "end": 3677
          }
        ],
        "start": 3663,
        "end": 3679
      },
      "expression": false,
      "start": 3619,
      "end": 3679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3697,
        "end": 3709
      },
      "generator": true,
      "async": true,
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
                  "start": 3724,
                  "end": 3725
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3734,
                    "end": 3735
                  },
                  "start": 3728,
                  "end": 3735
                },
                "definite": false,
                "start": 3724,
                "end": 3735
              }
            ],
            "declare": false,
            "start": 3718,
            "end": 3736
          }
        ],
        "start": 3712,
        "end": 3738
      },
      "expression": false,
      "start": 3680,
      "end": 3738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3756,
        "end": 3768
      },
      "generator": true,
      "async": true,
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
                  "start": 3783,
                  "end": 3784
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3793,
                        "end": 3800
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3801,
                        "end": 3808
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3793,
                      "end": 3808
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3809,
                        "end": 3810
                      }
                    ],
                    "optional": false,
                    "start": 3793,
                    "end": 3811
                  },
                  "start": 3787,
                  "end": 3811
                },
                "definite": false,
                "start": 3783,
                "end": 3811
              }
            ],
            "declare": false,
            "start": 3777,
            "end": 3812
          }
        ],
        "start": 3771,
        "end": 3814
      },
      "expression": false,
      "start": 3739,
      "end": 3814
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nextType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3832,
        "end": 3841
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 3847,
                "end": 3851
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                    "start": 3855,
                    "end": 3859
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [],
                          "start": 3861,
                          "end": 3863
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3867,
                                  "end": 3873
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3876,
                                    "end": 3887
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 3888,
                                        "end": 3894
                                      }
                                    ],
                                    "start": 3887,
                                    "end": 3895
                                  },
                                  "start": 3876,
                                  "end": 3895
                                }
                              ],
                              "start": 3867,
                              "end": 3895
                            }
                          ],
                          "start": 3866,
                          "end": 3896
                        }
                      ],
                      "start": 3861,
                      "end": 3896
                    },
                    "start": 3859,
                    "end": 3896
                  },
                  "value": null,
                  "start": 3852,
                  "end": 3896
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3899,
                  "end": 3902
                },
                "start": 3897,
                "end": 3902
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3847,
              "end": 3902
            }
          ],
          "start": 3845,
          "end": 3904
        },
        "start": 3843,
        "end": 3904
      },
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
                  "start": 3917,
                  "end": 3918
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 3921,
                  "end": 3926
                },
                "definite": false,
                "start": 3917,
                "end": 3926
              }
            ],
            "declare": false,
            "start": 3911,
            "end": 3927
          }
        ],
        "start": 3905,
        "end": 3988
      },
      "expression": false,
      "start": 3815,
      "end": 3988
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3988
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14,
    "range": [
      6,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType1",
    "start": 17,
    "end": 33,
    "range": [
      17,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType2",
    "start": 57,
    "end": 73,
    "range": [
      57,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105,
    "range": [
      97,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType3",
    "start": 108,
    "end": 124,
    "range": [
      108,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158,
    "range": [
      150,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType4",
    "start": 161,
    "end": 177,
    "range": [
      161,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 192,
    "end": 199,
    "range": [
      192,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 214,
    "end": 219,
    "range": [
      214,
      219
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 220,
    "end": 228,
    "range": [
      220,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType5",
    "start": 231,
    "end": 247,
    "range": [
      231,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 275,
    "end": 282,
    "range": [
      275,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 283,
    "end": 290,
    "range": [
      283,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 297,
    "end": 302,
    "range": [
      297,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 303,
    "end": 311,
    "range": [
      303,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType6",
    "start": 314,
    "end": 330,
    "range": [
      314,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 339,
    "end": 344,
    "range": [
      339,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 356,
    "end": 361,
    "range": [
      356,
      361
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370,
    "range": [
      362,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType7",
    "start": 373,
    "end": 389,
    "range": [
      373,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 398,
    "end": 403,
    "range": [
      398,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 406,
    "end": 413,
    "range": [
      406,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 414,
    "end": 421,
    "range": [
      414,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 429,
    "end": 434,
    "range": [
      429,
      434
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 435,
    "end": 443,
    "range": [
      435,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "inferReturnType8",
    "start": 446,
    "end": 462,
    "range": [
      446,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 471,
    "end": 476,
    "range": [
      471,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493,
    "range": [
      485,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 518,
    "end": 523,
    "range": [
      518,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability1",
    "start": 524,
    "end": 538,
    "range": [
      524,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 543,
    "end": 545,
    "range": [
      543,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 546,
    "end": 567,
    "range": [
      546,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 578,
    "end": 583,
    "range": [
      578,
      583
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592,
    "range": [
      584,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 604,
    "end": 609,
    "range": [
      604,
      609
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability2",
    "start": 622,
    "end": 636,
    "range": [
      622,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
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
    "value": "=>",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 644,
    "end": 665,
    "range": [
      644,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 666,
    "end": 672,
    "range": [
      666,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 676,
    "end": 681,
    "range": [
      676,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 682,
    "end": 690,
    "range": [
      682,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 702,
    "end": 707,
    "range": [
      702,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 708,
    "end": 715,
    "range": [
      708,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 716,
    "end": 723,
    "range": [
      716,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 731,
    "end": 736,
    "range": [
      731,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability3",
    "start": 737,
    "end": 751,
    "range": [
      737,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 756,
    "end": 758,
    "range": [
      756,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 759,
    "end": 780,
    "range": [
      759,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805,
    "range": [
      797,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 835,
    "end": 840,
    "range": [
      835,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability4",
    "start": 841,
    "end": 855,
    "range": [
      841,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 860,
    "end": 862,
    "range": [
      860,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 863,
    "end": 884,
    "range": [
      863,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 885,
    "end": 891,
    "range": [
      885,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 895,
    "end": 900,
    "range": [
      895,
      900
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909,
    "range": [
      901,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 921,
    "end": 926,
    "range": [
      921,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 929,
    "end": 936,
    "range": [
      929,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 937,
    "end": 944,
    "range": [
      937,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 953,
    "end": 958,
    "range": [
      953,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability5",
    "start": 959,
    "end": 973,
    "range": [
      959,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 978,
    "end": 980,
    "range": [
      978,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 981,
    "end": 1002,
    "range": [
      981,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1013,
    "end": 1018,
    "range": [
      1013,
      1018
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1019,
    "end": 1027,
    "range": [
      1019,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1039,
    "end": 1044,
    "range": [
      1039,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1047,
    "end": 1052,
    "range": [
      1047,
      1052
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1053,
    "end": 1061,
    "range": [
      1053,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1069,
    "end": 1074,
    "range": [
      1069,
      1074
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1087,
    "end": 1092,
    "range": [
      1087,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability6",
    "start": 1093,
    "end": 1107,
    "range": [
      1093,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1112,
    "end": 1114,
    "range": [
      1112,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1115,
    "end": 1128,
    "range": [
      1115,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135,
    "range": [
      1129,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1139,
    "end": 1144,
    "range": [
      1139,
      1144
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1145,
    "end": 1153,
    "range": [
      1145,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
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
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1165,
    "end": 1170,
    "range": [
      1165,
      1170
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1177,
    "end": 1182,
    "range": [
      1177,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability7",
    "start": 1183,
    "end": 1197,
    "range": [
      1183,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1202,
    "end": 1204,
    "range": [
      1202,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1205,
    "end": 1218,
    "range": [
      1205,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1219,
    "end": 1225,
    "range": [
      1219,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1229,
    "end": 1234,
    "range": [
      1229,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1235,
    "end": 1243,
    "range": [
      1235,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1255,
    "end": 1260,
    "range": [
      1255,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1261,
    "end": 1268,
    "range": [
      1261,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1269,
    "end": 1276,
    "range": [
      1269,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1284,
    "end": 1289,
    "range": [
      1284,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability8",
    "start": 1290,
    "end": 1304,
    "range": [
      1290,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1309,
    "end": 1311,
    "range": [
      1309,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1312,
    "end": 1325,
    "range": [
      1312,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1326,
    "end": 1332,
    "range": [
      1326,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1336,
    "end": 1341,
    "range": [
      1336,
      1341
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1342,
    "end": 1350,
    "range": [
      1342,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1362,
    "end": 1367,
    "range": [
      1362,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1380,
    "end": 1385,
    "range": [
      1380,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability9",
    "start": 1386,
    "end": 1400,
    "range": [
      1386,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1405,
    "end": 1407,
    "range": [
      1405,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1408,
    "end": 1421,
    "range": [
      1408,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428,
    "range": [
      1422,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1432,
    "end": 1437,
    "range": [
      1432,
      1437
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1438,
    "end": 1446,
    "range": [
      1438,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1458,
    "end": 1463,
    "range": [
      1458,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1466,
    "end": 1473,
    "range": [
      1466,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1474,
    "end": 1481,
    "range": [
      1474,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1490,
    "end": 1495,
    "range": [
      1490,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability10",
    "start": 1496,
    "end": 1511,
    "range": [
      1496,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1516,
    "end": 1518,
    "range": [
      1516,
      1518
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1519,
    "end": 1532,
    "range": [
      1519,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1533,
    "end": 1539,
    "range": [
      1533,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1543,
    "end": 1548,
    "range": [
      1543,
      1548
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1549,
    "end": 1557,
    "range": [
      1549,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1569,
    "end": 1574,
    "range": [
      1569,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1577,
    "end": 1582,
    "range": [
      1577,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1583,
    "end": 1591,
    "range": [
      1583,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1599,
    "end": 1604,
    "range": [
      1599,
      1604
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1617,
    "end": 1622,
    "range": [
      1617,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability11",
    "start": 1623,
    "end": 1638,
    "range": [
      1623,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1643,
    "end": 1645,
    "range": [
      1643,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1646,
    "end": 1659,
    "range": [
      1646,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666,
    "range": [
      1660,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1670,
    "end": 1675,
    "range": [
      1670,
      1675
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1676,
    "end": 1684,
    "range": [
      1676,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1696,
    "end": 1701,
    "range": [
      1696,
      1701
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1708,
    "end": 1713,
    "range": [
      1708,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability12",
    "start": 1714,
    "end": 1729,
    "range": [
      1714,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1734,
    "end": 1736,
    "range": [
      1734,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1737,
    "end": 1750,
    "range": [
      1737,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1751,
    "end": 1757,
    "range": [
      1751,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1761,
    "end": 1766,
    "range": [
      1761,
      1766
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775,
    "range": [
      1767,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1787,
    "end": 1792,
    "range": [
      1787,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1793,
    "end": 1800,
    "range": [
      1793,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1801,
    "end": 1808,
    "range": [
      1801,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1816,
    "end": 1821,
    "range": [
      1816,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability13",
    "start": 1822,
    "end": 1837,
    "range": [
      1822,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1842,
    "end": 1844,
    "range": [
      1842,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1845,
    "end": 1858,
    "range": [
      1845,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1869,
    "end": 1874,
    "range": [
      1869,
      1874
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1875,
    "end": 1883,
    "range": [
      1875,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1895,
    "end": 1900,
    "range": [
      1895,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1913,
    "end": 1918,
    "range": [
      1913,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability14",
    "start": 1919,
    "end": 1934,
    "range": [
      1919,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1939,
    "end": 1941,
    "range": [
      1939,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1942,
    "end": 1955,
    "range": [
      1942,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1956,
    "end": 1962,
    "range": [
      1956,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1966,
    "end": 1971,
    "range": [
      1966,
      1971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1972,
    "end": 1980,
    "range": [
      1972,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1992,
    "end": 1997,
    "range": [
      1992,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2000,
    "end": 2007,
    "range": [
      2000,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2008,
    "end": 2015,
    "range": [
      2008,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2024,
    "end": 2029,
    "range": [
      2024,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability15",
    "start": 2030,
    "end": 2045,
    "range": [
      2030,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2050,
    "end": 2052,
    "range": [
      2050,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 2053,
    "end": 2066,
    "range": [
      2053,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2067,
    "end": 2073,
    "range": [
      2067,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2077,
    "end": 2082,
    "range": [
      2077,
      2082
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2083,
    "end": 2091,
    "range": [
      2083,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2103,
    "end": 2108,
    "range": [
      2103,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2111,
    "end": 2116,
    "range": [
      2111,
      2116
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2117,
    "end": 2125,
    "range": [
      2117,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2133,
    "end": 2138,
    "range": [
      2133,
      2138
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2151,
    "end": 2156,
    "range": [
      2151,
      2156
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2157,
    "end": 2165,
    "range": [
      2157,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType1",
    "start": 2168,
    "end": 2187,
    "range": [
      2168,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2191,
    "end": 2212,
    "range": [
      2191,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2213,
    "end": 2219,
    "range": [
      2213,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2227,
    "end": 2232,
    "range": [
      2227,
      2232
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2238,
    "end": 2243,
    "range": [
      2238,
      2243
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2244,
    "end": 2252,
    "range": [
      2244,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType2",
    "start": 2255,
    "end": 2274,
    "range": [
      2255,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2278,
    "end": 2299,
    "range": [
      2278,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2300,
    "end": 2306,
    "range": [
      2300,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2314,
    "end": 2319,
    "range": [
      2314,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2320,
    "end": 2327,
    "range": [
      2320,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2328,
    "end": 2335,
    "range": [
      2328,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2342,
    "end": 2347,
    "range": [
      2342,
      2347
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2348,
    "end": 2356,
    "range": [
      2348,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType3",
    "start": 2359,
    "end": 2378,
    "range": [
      2359,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2382,
    "end": 2403,
    "range": [
      2382,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2404,
    "end": 2410,
    "range": [
      2404,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2418,
    "end": 2423,
    "range": [
      2418,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2435,
    "end": 2440,
    "range": [
      2435,
      2440
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2441,
    "end": 2449,
    "range": [
      2441,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType4",
    "start": 2452,
    "end": 2471,
    "range": [
      2452,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2475,
    "end": 2496,
    "range": [
      2475,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2497,
    "end": 2503,
    "range": [
      2497,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2511,
    "end": 2516,
    "range": [
      2511,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2519,
    "end": 2526,
    "range": [
      2519,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2527,
    "end": 2534,
    "range": [
      2527,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2542,
    "end": 2547,
    "range": [
      2542,
      2547
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2548,
    "end": 2556,
    "range": [
      2548,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType5",
    "start": 2559,
    "end": 2578,
    "range": [
      2559,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2582,
    "end": 2603,
    "range": [
      2582,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2604,
    "end": 2610,
    "range": [
      2604,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2618,
    "end": 2623,
    "range": [
      2618,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2626,
    "end": 2631,
    "range": [
      2626,
      2631
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2632,
    "end": 2640,
    "range": [
      2632,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2644,
    "end": 2645,
    "range": [
      2644,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2648,
    "end": 2653,
    "range": [
      2648,
      2653
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2665,
    "end": 2670,
    "range": [
      2665,
      2670
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2671,
    "end": 2679,
    "range": [
      2671,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType6",
    "start": 2682,
    "end": 2701,
    "range": [
      2682,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2705,
    "end": 2718,
    "range": [
      2705,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2719,
    "end": 2725,
    "range": [
      2719,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2733,
    "end": 2738,
    "range": [
      2733,
      2738
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2744,
    "end": 2749,
    "range": [
      2744,
      2749
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2750,
    "end": 2758,
    "range": [
      2750,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType7",
    "start": 2761,
    "end": 2780,
    "range": [
      2761,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2784,
    "end": 2797,
    "range": [
      2784,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2798,
    "end": 2804,
    "range": [
      2798,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2812,
    "end": 2817,
    "range": [
      2812,
      2817
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2818,
    "end": 2825,
    "range": [
      2818,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2826,
    "end": 2833,
    "range": [
      2826,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2840,
    "end": 2845,
    "range": [
      2840,
      2845
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2846,
    "end": 2854,
    "range": [
      2846,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType8",
    "start": 2857,
    "end": 2876,
    "range": [
      2857,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2880,
    "end": 2893,
    "range": [
      2880,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2894,
    "end": 2900,
    "range": [
      2894,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2908,
    "end": 2913,
    "range": [
      2908,
      2913
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2925,
    "end": 2930,
    "range": [
      2925,
      2930
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2931,
    "end": 2939,
    "range": [
      2931,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType9",
    "start": 2942,
    "end": 2961,
    "range": [
      2942,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2965,
    "end": 2978,
    "range": [
      2965,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2979,
    "end": 2985,
    "range": [
      2979,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2993,
    "end": 2998,
    "range": [
      2993,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3001,
    "end": 3008,
    "range": [
      3001,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3009,
    "end": 3016,
    "range": [
      3009,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3024,
    "end": 3029,
    "range": [
      3024,
      3029
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3030,
    "end": 3038,
    "range": [
      3030,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType10",
    "start": 3041,
    "end": 3061,
    "range": [
      3041,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 3065,
    "end": 3078,
    "range": [
      3065,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3079,
    "end": 3085,
    "range": [
      3079,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3093,
    "end": 3098,
    "range": [
      3093,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3101,
    "end": 3106,
    "range": [
      3101,
      3106
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3107,
    "end": 3115,
    "range": [
      3107,
      3115
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3123,
    "end": 3128,
    "range": [
      3123,
      3128
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3130,
    "end": 3131,
    "range": [
      3130,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3140,
    "end": 3145,
    "range": [
      3140,
      3145
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3146,
    "end": 3154,
    "range": [
      3146,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType11",
    "start": 3157,
    "end": 3177,
    "range": [
      3157,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3181,
    "end": 3194,
    "range": [
      3181,
      3194
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3195,
    "end": 3201,
    "range": [
      3195,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3209,
    "end": 3214,
    "range": [
      3209,
      3214
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3216,
    "end": 3217,
    "range": [
      3216,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3220,
    "end": 3225,
    "range": [
      3220,
      3225
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3226,
    "end": 3234,
    "range": [
      3226,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType12",
    "start": 3237,
    "end": 3257,
    "range": [
      3237,
      3257
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258,
    "range": [
      3257,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3261,
    "end": 3274,
    "range": [
      3261,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3275,
    "end": 3281,
    "range": [
      3275,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3289,
    "end": 3294,
    "range": [
      3289,
      3294
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3295,
    "end": 3302,
    "range": [
      3295,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3303,
    "end": 3310,
    "range": [
      3303,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313,
    "range": [
      3312,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3317,
    "end": 3322,
    "range": [
      3317,
      3322
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3323,
    "end": 3331,
    "range": [
      3323,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType13",
    "start": 3334,
    "end": 3354,
    "range": [
      3334,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3358,
    "end": 3371,
    "range": [
      3358,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3372,
    "end": 3378,
    "range": [
      3372,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3386,
    "end": 3391,
    "range": [
      3386,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3403,
    "end": 3408,
    "range": [
      3403,
      3408
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3409,
    "end": 3417,
    "range": [
      3409,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType14",
    "start": 3420,
    "end": 3440,
    "range": [
      3420,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3444,
    "end": 3457,
    "range": [
      3444,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3458,
    "end": 3464,
    "range": [
      3458,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3472,
    "end": 3477,
    "range": [
      3472,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3479,
    "end": 3480,
    "range": [
      3479,
      3480
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3480,
    "end": 3487,
    "range": [
      3480,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3488,
    "end": 3495,
    "range": [
      3488,
      3495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3503,
    "end": 3508,
    "range": [
      3503,
      3508
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3509,
    "end": 3517,
    "range": [
      3509,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType15",
    "start": 3520,
    "end": 3540,
    "range": [
      3520,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3544,
    "end": 3557,
    "range": [
      3544,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3558,
    "end": 3564,
    "range": [
      3558,
      3564
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3564,
    "end": 3565,
    "range": [
      3564,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3572,
    "end": 3577,
    "range": [
      3572,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3580,
    "end": 3585,
    "range": [
      3580,
      3585
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3586,
    "end": 3594,
    "range": [
      3586,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3597,
    "end": 3598,
    "range": [
      3597,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3602,
    "end": 3607,
    "range": [
      3602,
      3607
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3611,
    "end": 3612,
    "range": [
      3611,
      3612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3612,
    "end": 3613,
    "range": [
      3612,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618,
    "range": [
      3617,
      3618
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3619,
    "end": 3624,
    "range": [
      3619,
      3624
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3625,
    "end": 3633,
    "range": [
      3625,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3634,
    "end": 3635,
    "range": [
      3634,
      3635
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType16",
    "start": 3636,
    "end": 3656,
    "range": [
      3636,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3669,
    "end": 3674,
    "range": [
      3669,
      3674
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3680,
    "end": 3685,
    "range": [
      3680,
      3685
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3686,
    "end": 3694,
    "range": [
      3686,
      3694
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitedType1",
    "start": 3697,
    "end": 3709,
    "range": [
      3697,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3709,
    "end": 3710,
    "range": [
      3709,
      3710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3710,
    "end": 3711,
    "range": [
      3710,
      3711
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3718,
    "end": 3723,
    "range": [
      3718,
      3723
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3724,
    "end": 3725,
    "range": [
      3724,
      3725
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3728,
    "end": 3733,
    "range": [
      3728,
      3733
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3739,
    "end": 3744,
    "range": [
      3739,
      3744
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3745,
    "end": 3753,
    "range": [
      3745,
      3753
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3754,
    "end": 3755,
    "range": [
      3754,
      3755
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitedType2",
    "start": 3756,
    "end": 3768,
    "range": [
      3756,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3777,
    "end": 3782,
    "range": [
      3777,
      3782
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3787,
    "end": 3792,
    "range": [
      3787,
      3792
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3793,
    "end": 3800,
    "range": [
      3793,
      3800
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3801,
    "end": 3808,
    "range": [
      3801,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3813,
    "end": 3814,
    "range": [
      3813,
      3814
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3815,
    "end": 3820,
    "range": [
      3815,
      3820
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3821,
    "end": 3829,
    "range": [
      3821,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "nextType1",
    "start": 3832,
    "end": 3841,
    "range": [
      3832,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3847,
    "end": 3851,
    "range": [
      3847,
      3851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3851,
    "end": 3852,
    "range": [
      3851,
      3852
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3852,
    "end": 3855,
    "range": [
      3852,
      3855
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3855,
    "end": 3859,
    "range": [
      3855,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3861,
    "end": 3862,
    "range": [
      3861,
      3862
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3867,
    "end": 3873,
    "range": [
      3867,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 3876,
    "end": 3887,
    "range": [
      3876,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3888,
    "end": 3894,
    "range": [
      3888,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3896,
    "end": 3897,
    "range": [
      3896,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3899,
    "end": 3902,
    "range": [
      3899,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3905,
    "end": 3906,
    "range": [
      3905,
      3906
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3911,
    "end": 3916,
    "range": [
      3911,
      3916
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3917,
    "end": 3918,
    "range": [
      3917,
      3918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3921,
    "end": 3926,
    "range": [
      3921,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  }
]
```
