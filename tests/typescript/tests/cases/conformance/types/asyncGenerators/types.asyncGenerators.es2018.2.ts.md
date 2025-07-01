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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 49,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "directive": null,
            "start": 42,
            "end": 52
          }
        ],
        "start": 36,
        "end": 54
      },
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 88
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inferReturnType2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 120
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 104,
                "end": 122
              },
              "start": 97,
              "end": 122
            },
            "directive": null,
            "start": 97,
            "end": 123
          }
        ],
        "start": 91,
        "end": 125
      },
      "expression": false,
      "start": 55,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 159
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 190
                  },
                  "optional": false,
                  "computed": false,
                  "start": 175,
                  "end": 190
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 192,
                        "end": 193
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 195,
                        "end": 196
                      }
                    ],
                    "start": 191,
                    "end": 197
                  }
                ],
                "optional": false,
                "start": 175,
                "end": 198
              },
              "start": 168,
              "end": 198
            },
            "directive": null,
            "start": 168,
            "end": 199
          }
        ],
        "start": 162,
        "end": 201
      },
      "expression": false,
      "start": 126,
      "end": 201
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
                      "start": 230,
                      "end": 251
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 252,
                          "end": 258
                        }
                      ],
                      "start": 251,
                      "end": 259
                    },
                    "start": 230,
                    "end": 259
                  },
                  "start": 227,
                  "end": 259
                },
                "start": 224,
                "end": 259
              },
              "start": 222,
              "end": 259
            },
            "start": 208,
            "end": 259
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 294,
                      "end": 297
                    },
                    "start": 288,
                    "end": 297
                  },
                  "directive": null,
                  "start": 288,
                  "end": 298
                }
              ],
              "start": 282,
              "end": 300
            },
            "expression": false,
            "start": 262,
            "end": 300
          },
          "definite": false,
          "start": 208,
          "end": 300
        }
      ],
      "declare": false,
      "start": 202,
      "end": 301
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
                      "start": 330,
                      "end": 351
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 352,
                          "end": 358
                        }
                      ],
                      "start": 351,
                      "end": 359
                    },
                    "start": 330,
                    "end": 359
                  },
                  "start": 327,
                  "end": 359
                },
                "start": 324,
                "end": 359
              },
              "start": 322,
              "end": 359
            },
            "start": 308,
            "end": 359
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 396,
                          "end": 399
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 401,
                          "end": 404
                        }
                      ],
                      "start": 395,
                      "end": 405
                    },
                    "start": 388,
                    "end": 405
                  },
                  "directive": null,
                  "start": 388,
                  "end": 406
                }
              ],
              "start": 382,
              "end": 408
            },
            "expression": false,
            "start": 362,
            "end": 408
          },
          "definite": false,
          "start": 308,
          "end": 408
        }
      ],
      "declare": false,
      "start": 302,
      "end": 409
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
                      "start": 438,
                      "end": 459
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 460,
                          "end": 466
                        }
                      ],
                      "start": 459,
                      "end": 467
                    },
                    "start": 438,
                    "end": 467
                  },
                  "start": 435,
                  "end": 467
                },
                "start": 432,
                "end": 467
              },
              "start": 430,
              "end": 467
            },
            "start": 416,
            "end": 467
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 532,
                                  "end": 535
                                },
                                "start": 526,
                                "end": 535
                              },
                              "directive": null,
                              "start": 526,
                              "end": 536
                            }
                          ],
                          "start": 524,
                          "end": 538
                        },
                        "expression": false,
                        "start": 504,
                        "end": 538
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 503,
                      "end": 541
                    },
                    "start": 496,
                    "end": 541
                  },
                  "directive": null,
                  "start": 496,
                  "end": 542
                }
              ],
              "start": 490,
              "end": 544
            },
            "expression": false,
            "start": 470,
            "end": 544
          },
          "definite": false,
          "start": 416,
          "end": 544
        }
      ],
      "declare": false,
      "start": 410,
      "end": 545
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 587
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 588,
                          "end": 594
                        }
                      ],
                      "start": 587,
                      "end": 595
                    },
                    "start": 574,
                    "end": 595
                  },
                  "start": 571,
                  "end": 595
                },
                "start": 568,
                "end": 595
              },
              "start": 566,
              "end": 595
            },
            "start": 552,
            "end": 595
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 630,
                      "end": 633
                    },
                    "start": 624,
                    "end": 633
                  },
                  "directive": null,
                  "start": 624,
                  "end": 634
                }
              ],
              "start": 618,
              "end": 636
            },
            "expression": false,
            "start": 598,
            "end": 636
          },
          "definite": false,
          "start": 552,
          "end": 636
        }
      ],
      "declare": false,
      "start": 546,
      "end": 637
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 679
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 680,
                          "end": 686
                        }
                      ],
                      "start": 679,
                      "end": 687
                    },
                    "start": 666,
                    "end": 687
                  },
                  "start": 663,
                  "end": 687
                },
                "start": 660,
                "end": 687
              },
              "start": 658,
              "end": 687
            },
            "start": 644,
            "end": 687
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 724,
                          "end": 727
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 729,
                          "end": 732
                        }
                      ],
                      "start": 723,
                      "end": 733
                    },
                    "start": 716,
                    "end": 733
                  },
                  "directive": null,
                  "start": 716,
                  "end": 734
                }
              ],
              "start": 710,
              "end": 736
            },
            "expression": false,
            "start": 690,
            "end": 736
          },
          "definite": false,
          "start": 644,
          "end": 736
        }
      ],
      "declare": false,
      "start": 638,
      "end": 737
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
                      "start": 766,
                      "end": 779
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 780,
                          "end": 786
                        }
                      ],
                      "start": 779,
                      "end": 787
                    },
                    "start": 766,
                    "end": 787
                  },
                  "start": 763,
                  "end": 787
                },
                "start": 760,
                "end": 787
              },
              "start": 758,
              "end": 787
            },
            "start": 744,
            "end": 787
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 852,
                                  "end": 855
                                },
                                "start": 846,
                                "end": 855
                              },
                              "directive": null,
                              "start": 846,
                              "end": 856
                            }
                          ],
                          "start": 844,
                          "end": 858
                        },
                        "expression": false,
                        "start": 824,
                        "end": 858
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 823,
                      "end": 861
                    },
                    "start": 816,
                    "end": 861
                  },
                  "directive": null,
                  "start": 816,
                  "end": 862
                }
              ],
              "start": 810,
              "end": 864
            },
            "expression": false,
            "start": 790,
            "end": 864
          },
          "definite": false,
          "start": 744,
          "end": 864
        }
      ],
      "declare": false,
      "start": 738,
      "end": 865
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 907
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 908,
                          "end": 914
                        }
                      ],
                      "start": 907,
                      "end": 915
                    },
                    "start": 894,
                    "end": 915
                  },
                  "start": 891,
                  "end": 915
                },
                "start": 888,
                "end": 915
              },
              "start": 886,
              "end": 915
            },
            "start": 872,
            "end": 915
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 950,
                      "end": 953
                    },
                    "start": 944,
                    "end": 953
                  },
                  "directive": null,
                  "start": 944,
                  "end": 954
                }
              ],
              "start": 938,
              "end": 956
            },
            "expression": false,
            "start": 918,
            "end": 956
          },
          "definite": false,
          "start": 872,
          "end": 956
        }
      ],
      "declare": false,
      "start": 866,
      "end": 957
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 999
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1000,
                          "end": 1006
                        }
                      ],
                      "start": 999,
                      "end": 1007
                    },
                    "start": 986,
                    "end": 1007
                  },
                  "start": 983,
                  "end": 1007
                },
                "start": 980,
                "end": 1007
              },
              "start": 978,
              "end": 1007
            },
            "start": 964,
            "end": 1007
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 1044,
                          "end": 1047
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 1049,
                          "end": 1052
                        }
                      ],
                      "start": 1043,
                      "end": 1053
                    },
                    "start": 1036,
                    "end": 1053
                  },
                  "directive": null,
                  "start": 1036,
                  "end": 1054
                }
              ],
              "start": 1030,
              "end": 1056
            },
            "expression": false,
            "start": 1010,
            "end": 1056
          },
          "definite": false,
          "start": 964,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 958,
      "end": 1057
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1086,
                      "end": 1099
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1100,
                          "end": 1106
                        }
                      ],
                      "start": 1099,
                      "end": 1107
                    },
                    "start": 1086,
                    "end": 1107
                  },
                  "start": 1083,
                  "end": 1107
                },
                "start": 1080,
                "end": 1107
              },
              "start": 1078,
              "end": 1107
            },
            "start": 1064,
            "end": 1107
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 1172,
                                  "end": 1175
                                },
                                "start": 1166,
                                "end": 1175
                              },
                              "directive": null,
                              "start": 1166,
                              "end": 1176
                            }
                          ],
                          "start": 1164,
                          "end": 1178
                        },
                        "expression": false,
                        "start": 1144,
                        "end": 1178
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1143,
                      "end": 1181
                    },
                    "start": 1136,
                    "end": 1181
                  },
                  "directive": null,
                  "start": 1136,
                  "end": 1182
                }
              ],
              "start": 1130,
              "end": 1184
            },
            "expression": false,
            "start": 1110,
            "end": 1184
          },
          "definite": false,
          "start": 1064,
          "end": 1184
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1203,
        "end": 1222
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
            "start": 1226,
            "end": 1247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              }
            ],
            "start": 1247,
            "end": 1255
          },
          "start": 1226,
          "end": 1255
        },
        "start": 1224,
        "end": 1255
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1268,
                "end": 1271
              },
              "start": 1262,
              "end": 1271
            },
            "directive": null,
            "start": 1262,
            "end": 1272
          }
        ],
        "start": 1256,
        "end": 1274
      },
      "expression": false,
      "start": 1186,
      "end": 1274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1311
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
            "start": 1315,
            "end": 1336
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1337,
                "end": 1343
              }
            ],
            "start": 1336,
            "end": 1344
          },
          "start": 1315,
          "end": 1344
        },
        "start": 1313,
        "end": 1344
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1359,
                    "end": 1362
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1364,
                    "end": 1367
                  }
                ],
                "start": 1358,
                "end": 1368
              },
              "start": 1351,
              "end": 1368
            },
            "directive": null,
            "start": 1351,
            "end": 1369
          }
        ],
        "start": 1345,
        "end": 1371
      },
      "expression": false,
      "start": 1275,
      "end": 1371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1389,
        "end": 1408
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
            "start": 1412,
            "end": 1433
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1434,
                "end": 1440
              }
            ],
            "start": 1433,
            "end": 1441
          },
          "start": 1412,
          "end": 1441
        },
        "start": 1410,
        "end": 1441
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1484,
                            "end": 1487
                          },
                          "start": 1478,
                          "end": 1487
                        },
                        "directive": null,
                        "start": 1478,
                        "end": 1488
                      }
                    ],
                    "start": 1476,
                    "end": 1490
                  },
                  "expression": false,
                  "start": 1456,
                  "end": 1490
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1455,
                "end": 1493
              },
              "start": 1448,
              "end": 1493
            },
            "directive": null,
            "start": 1448,
            "end": 1494
          }
        ],
        "start": 1442,
        "end": 1496
      },
      "expression": false,
      "start": 1372,
      "end": 1496
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1514,
        "end": 1533
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
            "start": 1537,
            "end": 1550
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1551,
                "end": 1557
              }
            ],
            "start": 1550,
            "end": 1558
          },
          "start": 1537,
          "end": 1558
        },
        "start": 1535,
        "end": 1558
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1571,
                "end": 1574
              },
              "start": 1565,
              "end": 1574
            },
            "directive": null,
            "start": 1565,
            "end": 1575
          }
        ],
        "start": 1559,
        "end": 1577
      },
      "expression": false,
      "start": 1497,
      "end": 1577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1614
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
            "start": 1618,
            "end": 1631
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1632,
                "end": 1638
              }
            ],
            "start": 1631,
            "end": 1639
          },
          "start": 1618,
          "end": 1639
        },
        "start": 1616,
        "end": 1639
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1654,
                    "end": 1657
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1659,
                    "end": 1662
                  }
                ],
                "start": 1653,
                "end": 1663
              },
              "start": 1646,
              "end": 1663
            },
            "directive": null,
            "start": 1646,
            "end": 1664
          }
        ],
        "start": 1640,
        "end": 1666
      },
      "expression": false,
      "start": 1578,
      "end": 1666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1684,
        "end": 1703
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
            "start": 1707,
            "end": 1720
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1721,
                "end": 1727
              }
            ],
            "start": 1720,
            "end": 1728
          },
          "start": 1707,
          "end": 1728
        },
        "start": 1705,
        "end": 1728
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1771,
                            "end": 1774
                          },
                          "start": 1765,
                          "end": 1774
                        },
                        "directive": null,
                        "start": 1765,
                        "end": 1775
                      }
                    ],
                    "start": 1763,
                    "end": 1777
                  },
                  "expression": false,
                  "start": 1743,
                  "end": 1777
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1742,
                "end": 1780
              },
              "start": 1735,
              "end": 1780
            },
            "directive": null,
            "start": 1735,
            "end": 1781
          }
        ],
        "start": 1729,
        "end": 1783
      },
      "expression": false,
      "start": 1667,
      "end": 1783
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1820
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
            "start": 1824,
            "end": 1837
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1838,
                "end": 1844
              }
            ],
            "start": 1837,
            "end": 1845
          },
          "start": 1824,
          "end": 1845
        },
        "start": 1822,
        "end": 1845
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1858,
                "end": 1861
              },
              "start": 1852,
              "end": 1861
            },
            "directive": null,
            "start": 1852,
            "end": 1862
          }
        ],
        "start": 1846,
        "end": 1864
      },
      "expression": false,
      "start": 1784,
      "end": 1864
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1882,
        "end": 1901
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
            "start": 1905,
            "end": 1918
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1919,
                "end": 1925
              }
            ],
            "start": 1918,
            "end": 1926
          },
          "start": 1905,
          "end": 1926
        },
        "start": 1903,
        "end": 1926
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1941,
                    "end": 1944
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1946,
                    "end": 1949
                  }
                ],
                "start": 1940,
                "end": 1950
              },
              "start": 1933,
              "end": 1950
            },
            "directive": null,
            "start": 1933,
            "end": 1951
          }
        ],
        "start": 1927,
        "end": 1953
      },
      "expression": false,
      "start": 1865,
      "end": 1953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1971,
        "end": 1990
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
            "start": 1994,
            "end": 2007
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2008,
                "end": 2014
              }
            ],
            "start": 2007,
            "end": 2015
          },
          "start": 1994,
          "end": 2015
        },
        "start": 1992,
        "end": 2015
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2058,
                            "end": 2061
                          },
                          "start": 2052,
                          "end": 2061
                        },
                        "directive": null,
                        "start": 2052,
                        "end": 2062
                      }
                    ],
                    "start": 2050,
                    "end": 2064
                  },
                  "expression": false,
                  "start": 2030,
                  "end": 2064
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2029,
                "end": 2067
              },
              "start": 2022,
              "end": 2067
            },
            "directive": null,
            "start": 2022,
            "end": 2068
          }
        ],
        "start": 2016,
        "end": 2070
      },
      "expression": false,
      "start": 1954,
      "end": 2070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2088,
        "end": 2108
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
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2112,
            "end": 2128
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2129,
                "end": 2135
              }
            ],
            "start": 2128,
            "end": 2136
          },
          "start": 2112,
          "end": 2136
        },
        "start": 2110,
        "end": 2136
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
                "start": 2149,
                "end": 2150
              },
              "start": 2143,
              "end": 2150
            },
            "directive": null,
            "start": 2143,
            "end": 2151
          }
        ],
        "start": 2137,
        "end": 2153
      },
      "expression": false,
      "start": 2071,
      "end": 2153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2171,
        "end": 2191
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
            "name": "Iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2195,
            "end": 2203
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2204,
                "end": 2210
              }
            ],
            "start": 2203,
            "end": 2211
          },
          "start": 2195,
          "end": 2211
        },
        "start": 2193,
        "end": 2211
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
                "start": 2224,
                "end": 2225
              },
              "start": 2218,
              "end": 2225
            },
            "directive": null,
            "start": 2218,
            "end": 2226
          }
        ],
        "start": 2212,
        "end": 2228
      },
      "expression": false,
      "start": 2154,
      "end": 2228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2246,
        "end": 2266
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
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2270,
            "end": 2278
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2279,
                "end": 2285
              }
            ],
            "start": 2278,
            "end": 2286
          },
          "start": 2270,
          "end": 2286
        },
        "start": 2268,
        "end": 2286
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
                "start": 2299,
                "end": 2300
              },
              "start": 2293,
              "end": 2300
            },
            "directive": null,
            "start": 2293,
            "end": 2301
          }
        ],
        "start": 2287,
        "end": 2303
      },
      "expression": false,
      "start": 2229,
      "end": 2303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yieldStar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2321,
        "end": 2330
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
                "type": "ObjectExpression",
                "properties": [],
                "start": 2346,
                "end": 2348
              },
              "start": 2339,
              "end": 2348
            },
            "directive": null,
            "start": 2339,
            "end": 2349
          }
        ],
        "start": 2333,
        "end": 2351
      },
      "expression": false,
      "start": 2304,
      "end": 2351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2351
}
```
