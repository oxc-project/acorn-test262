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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 22,
                          "end": 31
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 33,
                            "end": 38
                          },
                          "typeArguments": null,
                          "start": 33,
                          "end": 38
                        }
                      ],
                      "start": 21,
                      "end": 39
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 43,
                          "end": 49
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 51,
                          "end": 60
                        }
                      ],
                      "start": 42,
                      "end": 61
                    }
                  ],
                  "start": 21,
                  "end": 61
                }
              ],
              "start": 20,
              "end": 62
            },
            "start": 18,
            "end": 62
          },
          "start": 15,
          "end": 62
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 78
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 87
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 88
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 89
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "definite": false,
                "start": 74,
                "end": 95
              }
            ],
            "declare": false,
            "start": 68,
            "end": 96
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 111
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 119,
                  "end": 126
                }
              ],
              "start": 113,
              "end": 130
            },
            "alternate": null,
            "start": 100,
            "end": 130
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "directive": null,
            "start": 134,
            "end": 137
          }
        ],
        "start": 64,
        "end": 139
      },
      "expression": false,
      "start": 0,
      "end": 139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 160
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 169
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 170
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 175,
                          "end": 184
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 191
                          },
                          "typeArguments": null,
                          "start": 186,
                          "end": 191
                        }
                      ],
                      "start": 174,
                      "end": 192
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 204,
                          "end": 213
                        }
                      ],
                      "start": 195,
                      "end": 214
                    }
                  ],
                  "start": 174,
                  "end": 214
                }
              ],
              "start": 173,
              "end": 215
            },
            "start": 171,
            "end": 215
          },
          "start": 156,
          "end": 215
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 232
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 240,
                  "end": 247
                }
              ],
              "start": 234,
              "end": 251
            },
            "alternate": null,
            "start": 221,
            "end": 251
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 257
            },
            "directive": null,
            "start": 255,
            "end": 258
          }
        ],
        "start": 217,
        "end": 260
      },
      "expression": false,
      "start": 141,
      "end": 260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myAllSettled",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 289
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 309,
                  "end": 316
                },
                "start": 309,
                "end": 318
              },
              "start": 300,
              "end": 318
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 290,
            "end": 318
          }
        ],
        "start": 289,
        "end": 319
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 331
                  },
                  "typeArguments": null,
                  "start": 330,
                  "end": 331
                },
                "start": 327,
                "end": 331
              },
              "start": 324,
              "end": 331
            },
            "start": 322,
            "end": 331
          },
          "start": 320,
          "end": 331
        }
      ],
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
                  "name": "promises",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 351
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
                        "start": 360,
                        "end": 367
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allSettled",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 378
                      },
                      "optional": false,
                      "computed": false,
                      "start": 360,
                      "end": 378
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 381
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 379,
                        "end": 383
                      }
                    ],
                    "optional": false,
                    "start": 360,
                    "end": 384
                  },
                  "start": 354,
                  "end": 384
                },
                "definite": false,
                "start": 343,
                "end": 384
              }
            ],
            "declare": false,
            "start": 337,
            "end": 385
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "promises",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 408
                  },
                  "optional": false,
                  "computed": false,
                  "start": 396,
                  "end": 408
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 416
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 431
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 432,
                            "end": 438
                          },
                          "optional": false,
                          "computed": false,
                          "start": 425,
                          "end": 438
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "fulfilled",
                          "raw": "\"fulfilled\"",
                          "start": 443,
                          "end": 454
                        },
                        "start": 425,
                        "end": 454
                      },
                      "consequent": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 464,
                              "end": 470
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 471,
                              "end": 476
                            },
                            "optional": false,
                            "computed": false,
                            "start": 464,
                            "end": 476
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 487
                          }
                        ],
                        "start": 463,
                        "end": 488
                      },
                      "alternate": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 507
                          },
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 513,
                              "end": 518
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "String",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 519,
                                  "end": 525
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 526,
                                      "end": 532
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "reason",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 533,
                                      "end": 539
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 526,
                                    "end": 539
                                  }
                                ],
                                "optional": false,
                                "start": 519,
                                "end": 540
                              }
                            ],
                            "start": 509,
                            "end": 541
                          }
                        ],
                        "start": 497,
                        "end": 542
                      },
                      "start": 425,
                      "end": 542
                    },
                    "id": null,
                    "generator": false,
                    "start": 409,
                    "end": 542
                  }
                ],
                "optional": false,
                "start": 396,
                "end": 547
              },
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 566
                    },
                    "typeArguments": null,
                    "start": 565,
                    "end": 566
                  },
                  "start": 559,
                  "end": 566
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Awaited",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 570,
                            "end": 577
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 578,
                                    "end": 579
                                  },
                                  "typeArguments": null,
                                  "start": 578,
                                  "end": 579
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 580,
                                    "end": 581
                                  },
                                  "typeArguments": null,
                                  "start": 580,
                                  "end": 581
                                },
                                "start": 578,
                                "end": 582
                              }
                            ],
                            "start": 577,
                            "end": 583
                          },
                          "start": 570,
                          "end": 583
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 585,
                          "end": 594
                        }
                      ],
                      "start": 569,
                      "end": 595
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 599,
                          "end": 608
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 610,
                            "end": 615
                          },
                          "typeArguments": null,
                          "start": 610,
                          "end": 615
                        }
                      ],
                      "start": 598,
                      "end": 616
                    }
                  ],
                  "start": 569,
                  "end": 616
                },
                "optional": false,
                "readonly": null,
                "start": 551,
                "end": 618
              },
              "start": 396,
              "end": 618
            },
            "start": 389,
            "end": 619
          }
        ],
        "start": 333,
        "end": 621
      },
      "expression": false,
      "start": 262,
      "end": 621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 643
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 660
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 662,
                          "end": 669
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 670
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 674
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myAllSettled",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 695
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
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
                                    "value": 0,
                                    "raw": "0",
                                    "start": 724,
                                    "end": 725
                                  }
                                ],
                                "optional": false,
                                "start": 708,
                                "end": 726
                              },
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
                                    "start": 728,
                                    "end": 735
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 736,
                                    "end": 742
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 728,
                                  "end": 742
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 743,
                                    "end": 744
                                  }
                                ],
                                "optional": false,
                                "start": 728,
                                "end": 745
                              }
                            ],
                            "start": 707,
                            "end": 746
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 755
                            },
                            "typeArguments": null,
                            "start": 750,
                            "end": 755
                          },
                          "start": 707,
                          "end": 755
                        },
                        "id": null,
                        "generator": false,
                        "start": 701,
                        "end": 755
                      }
                    ],
                    "optional": false,
                    "start": 683,
                    "end": 760
                  },
                  "start": 677,
                  "end": 760
                },
                "definite": false,
                "start": 656,
                "end": 760
              }
            ],
            "declare": false,
            "start": 650,
            "end": 761
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 776
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 778,
              "end": 785
            },
            "alternate": null,
            "start": 765,
            "end": 785
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 791
            },
            "directive": null,
            "start": 789,
            "end": 792
          }
        ],
        "start": 646,
        "end": 794
      },
      "expression": false,
      "start": 623,
      "end": 794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 810
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 815
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 824
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 825
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 830,
                          "end": 839
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 841,
                            "end": 846
                          },
                          "typeArguments": null,
                          "start": 841,
                          "end": 846
                        }
                      ],
                      "start": 829,
                      "end": 847
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 851,
                          "end": 857
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 859,
                          "end": 868
                        }
                      ],
                      "start": 850,
                      "end": 869
                    }
                  ],
                  "start": 829,
                  "end": 869
                }
              ],
              "start": 828,
              "end": 870
            },
            "start": 826,
            "end": 870
          },
          "start": 811,
          "end": 870
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 891
                },
                "optional": false,
                "computed": false,
                "start": 880,
                "end": 891
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 880,
              "end": 893
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
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 901,
                      "end": 903
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 915
                    },
                    "start": 901,
                    "end": 915
                  },
                  "directive": null,
                  "start": 901,
                  "end": 916
                }
              ],
              "start": 895,
              "end": 920
            },
            "alternate": null,
            "start": 876,
            "end": 920
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 934
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 942,
                  "end": 949
                }
              ],
              "start": 936,
              "end": 953
            },
            "alternate": null,
            "start": 923,
            "end": 953
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 959
            },
            "directive": null,
            "start": 957,
            "end": 960
          }
        ],
        "start": 872,
        "end": 962
      },
      "expression": false,
      "start": 796,
      "end": 962
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 962
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 9,
    "end": 14,
    "range": [
      9,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 15,
    "end": 18,
    "range": [
      15,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 22,
    "end": 31,
    "range": [
      22,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 51,
    "end": 60,
    "range": [
      51,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73,
    "range": [
      68,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 80,
    "end": 87,
    "range": [
      80,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 141,
    "end": 149,
    "range": [
      141,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 150,
    "end": 155,
    "range": [
      150,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 158,
    "end": 160,
    "range": [
      158,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 175,
    "end": 184,
    "range": [
      175,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 204,
    "end": 213,
    "range": [
      204,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 225,
    "end": 232,
    "range": [
      225,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 240,
    "end": 246,
    "range": [
      240,
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
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 262,
    "end": 267,
    "range": [
      262,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276,
    "range": [
      268,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "myAllSettled",
    "start": 277,
    "end": 289,
    "range": [
      277,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 292,
    "end": 299,
    "range": [
      292,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 300,
    "end": 308,
    "range": [
      300,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 309,
    "end": 316,
    "range": [
      309,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 320,
    "end": 322,
    "range": [
      320,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329,
    "range": [
      327,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "const",
    "start": 337,
    "end": 342,
    "range": [
      337,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "promises",
    "start": 343,
    "end": 351,
    "range": [
      343,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 360,
    "end": 367,
    "range": [
      360,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "allSettled",
    "start": 368,
    "end": 378,
    "range": [
      368,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 379,
    "end": 381,
    "range": [
      379,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 389,
    "end": 395,
    "range": [
      389,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "promises",
    "start": 396,
    "end": 404,
    "range": [
      396,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 425,
    "end": 431,
    "range": [
      425,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "String",
    "value": "\"fulfilled\"",
    "start": 443,
    "end": 454,
    "range": [
      443,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 471,
    "end": 476,
    "range": [
      471,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 478,
    "end": 487,
    "range": [
      478,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 498,
    "end": 507,
    "range": [
      498,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 509,
    "end": 512,
    "range": [
      509,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 513,
    "end": 518,
    "range": [
      513,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 519,
    "end": 525,
    "range": [
      519,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 556,
    "end": 558,
    "range": [
      556,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 559,
    "end": 564,
    "range": [
      559,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 570,
    "end": 577,
    "range": [
      570,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 585,
    "end": 594,
    "range": [
      585,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 599,
    "end": 608,
    "range": [
      599,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 610,
    "end": 615,
    "range": [
      610,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 623,
    "end": 628,
    "range": [
      623,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 629,
    "end": 637,
    "range": [
      629,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 650,
    "end": 655,
    "range": [
      650,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 662,
    "end": 669,
    "range": [
      662,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 677,
    "end": 682,
    "range": [
      677,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "myAllSettled",
    "start": 683,
    "end": 695,
    "range": [
      683,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 704,
    "end": 706,
    "range": [
      704,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
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
    "value": "0",
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
    "value": ",",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 728,
    "end": 735,
    "range": [
      728,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 736,
    "end": 742,
    "range": [
      736,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 747,
    "end": 749,
    "range": [
      747,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 750,
    "end": 755,
    "range": [
      750,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 765,
    "end": 767,
    "range": [
      765,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 769,
    "end": 776,
    "range": [
      769,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 778,
    "end": 784,
    "range": [
      778,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 789,
    "end": 791,
    "range": [
      789,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804,
    "range": [
      796,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 805,
    "end": 810,
    "range": [
      805,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 813,
    "end": 815,
    "range": [
      813,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 817,
    "end": 824,
    "range": [
      817,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 830,
    "end": 839,
    "range": [
      830,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 841,
    "end": 846,
    "range": [
      841,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 859,
    "end": 868,
    "range": [
      859,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 880,
    "end": 884,
    "range": [
      880,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 885,
    "end": 891,
    "range": [
      885,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 901,
    "end": 903,
    "range": [
      901,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 906,
    "end": 915,
    "range": [
      906,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 923,
    "end": 925,
    "range": [
      923,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "p1Error",
    "start": 927,
    "end": 934,
    "range": [
      927,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 942,
    "end": 948,
    "range": [
      942,
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
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 957,
    "end": 959,
    "range": [
      957,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  }
]
```
