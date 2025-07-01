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
