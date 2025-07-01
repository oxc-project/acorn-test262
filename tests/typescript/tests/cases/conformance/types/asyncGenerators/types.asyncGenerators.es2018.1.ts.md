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
