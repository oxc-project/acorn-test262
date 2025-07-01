__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 87
          }
        ],
        "start": 71,
        "end": 88
      },
      "declare": false,
      "start": 57,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 114
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
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 132
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 133,
                "end": 137
              },
              {
                "type": "TSVoidKeyword",
                "start": 139,
                "end": 143
              },
              {
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
                      "start": 145,
                      "end": 152
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 153,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 153,
                          "end": 159
                        }
                      ],
                      "start": 152,
                      "end": 160
                    },
                    "start": 145,
                    "end": 160
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 163,
                    "end": 172
                  }
                ],
                "start": 145,
                "end": 172
              }
            ],
            "start": 132,
            "end": 173
          },
          "start": 118,
          "end": 173
        },
        "start": 116,
        "end": 173
      },
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
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 200
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 207
                              },
                              "typeArguments": null,
                              "start": 201,
                              "end": 207
                            }
                          ],
                          "start": 200,
                          "end": 208
                        },
                        "start": 193,
                        "end": 208
                      },
                      "start": 193,
                      "end": 210
                    },
                    "start": 191,
                    "end": 210
                  },
                  "start": 184,
                  "end": 210
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 213,
                  "end": 215
                },
                "definite": false,
                "start": 184,
                "end": 215
              }
            ],
            "declare": false,
            "start": 180,
            "end": 216
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 228,
              "end": 232
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
                        "name": "p",
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
                                  "start": 253,
                                  "end": 260
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 261,
                                        "end": 267
                                      },
                                      "typeArguments": null,
                                      "start": 261,
                                      "end": 267
                                    }
                                  ],
                                  "start": 260,
                                  "end": 268
                                },
                                "start": 253,
                                "end": 268
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 271,
                                "end": 280
                              }
                            ],
                            "start": 253,
                            "end": 280
                          },
                          "start": 251,
                          "end": 280
                        },
                        "start": 250,
                        "end": 280
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 283,
                        "end": 288
                      },
                      "definite": false,
                      "start": 250,
                      "end": 288
                    }
                  ],
                  "declare": false,
                  "start": 244,
                  "end": 289
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 303
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 307,
                      "end": 311
                    },
                    "start": 302,
                    "end": 311
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 332
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 337
                        },
                        "optional": false,
                        "computed": false,
                        "start": 325,
                        "end": 337
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 339
                        }
                      ],
                      "optional": false,
                      "start": 325,
                      "end": 340
                    },
                    "directive": null,
                    "start": 325,
                    "end": 341
                  },
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 375,
                              "end": 382
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
                                    "start": 391,
                                    "end": 398
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 399,
                                    "end": 402
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 391,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 403,
                                    "end": 410
                                  }
                                ],
                                "optional": false,
                                "start": 391,
                                "end": 411
                              },
                              "start": 385,
                              "end": 411
                            },
                            "definite": false,
                            "start": 375,
                            "end": 411
                          }
                        ],
                        "declare": false,
                        "start": 369,
                        "end": 412
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 432
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 435,
                            "end": 437
                          },
                          "start": 425,
                          "end": 437
                        },
                        "directive": null,
                        "start": 425,
                        "end": 438
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
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 451,
                              "end": 458
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 462
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "Storing...",
                              "raw": "'Storing...'",
                              "start": 463,
                              "end": 475
                            }
                          ],
                          "optional": false,
                          "start": 451,
                          "end": 476
                        },
                        "directive": null,
                        "start": 451,
                        "end": 477
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 496,
                              "end": 508
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 516
                              }
                            ],
                            "optional": false,
                            "start": 496,
                            "end": 517
                          },
                          "start": 490,
                          "end": 517
                        },
                        "directive": null,
                        "start": 490,
                        "end": 518
                      }
                    ],
                    "start": 355,
                    "end": 528
                  },
                  "start": 298,
                  "end": 528
                }
              ],
              "start": 234,
              "end": 534
            },
            "start": 221,
            "end": 534
          }
        ],
        "start": 174,
        "end": 536
      },
      "expression": false,
      "start": 90,
      "end": 536
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "storeResults",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 559
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 575
                },
                "typeArguments": null,
                "start": 569,
                "end": 575
              },
              "start": 569,
              "end": 577
            },
            "start": 567,
            "end": 577
          },
          "start": 560,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 592
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 596
                },
                "optional": false,
                "computed": false,
                "start": 585,
                "end": 596
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 585,
              "end": 605
            },
            "directive": null,
            "start": 585,
            "end": 606
          },
          {
            "type": "ReturnStatement",
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
                  "start": 618,
                  "end": 625
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 633
                },
                "optional": false,
                "computed": false,
                "start": 618,
                "end": 633
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 618,
              "end": 635
            },
            "start": 611,
            "end": 636
          }
        ],
        "start": 579,
        "end": 638
      },
      "expression": false,
      "start": 538,
      "end": 638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen2",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 665
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 694
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 695,
                                "end": 701
                              },
                              "typeArguments": null,
                              "start": 695,
                              "end": 701
                            }
                          ],
                          "start": 694,
                          "end": 702
                        },
                        "start": 687,
                        "end": 702
                      },
                      "start": 687,
                      "end": 704
                    },
                    "start": 685,
                    "end": 704
                  },
                  "start": 678,
                  "end": 704
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 707,
                  "end": 709
                },
                "definite": false,
                "start": 678,
                "end": 709
              }
            ],
            "declare": false,
            "start": 674,
            "end": 710
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 722,
              "end": 726
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
                        "name": "p",
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
                                  "start": 747,
                                  "end": 754
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 755,
                                        "end": 761
                                      },
                                      "typeArguments": null,
                                      "start": 755,
                                      "end": 761
                                    }
                                  ],
                                  "start": 754,
                                  "end": 762
                                },
                                "start": 747,
                                "end": 762
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 765,
                                "end": 774
                              }
                            ],
                            "start": 747,
                            "end": 774
                          },
                          "start": 745,
                          "end": 774
                        },
                        "start": 744,
                        "end": 774
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 777,
                        "end": 782
                      },
                      "definite": false,
                      "start": 744,
                      "end": 782
                    }
                  ],
                  "declare": false,
                  "start": 738,
                  "end": 783
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 797
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 801,
                      "end": 805
                    },
                    "start": 796,
                    "end": 805
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 819,
                          "end": 826
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 831
                        },
                        "optional": false,
                        "computed": false,
                        "start": 819,
                        "end": 831
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 833
                        }
                      ],
                      "optional": false,
                      "start": 819,
                      "end": 834
                    },
                    "directive": null,
                    "start": 819,
                    "end": 835
                  },
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 869,
                              "end": 876
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
                                    "start": 885,
                                    "end": 892
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 893,
                                    "end": 896
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 885,
                                  "end": 896
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 897,
                                    "end": 904
                                  }
                                ],
                                "optional": false,
                                "start": 885,
                                "end": 905
                              },
                              "start": 879,
                              "end": 905
                            },
                            "definite": false,
                            "start": 869,
                            "end": 905
                          }
                        ],
                        "declare": false,
                        "start": 863,
                        "end": 906
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 926
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 929,
                            "end": 931
                          },
                          "start": 919,
                          "end": 931
                        },
                        "directive": null,
                        "start": 919,
                        "end": 932
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
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 945,
                              "end": 952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 956
                            },
                            "optional": false,
                            "computed": false,
                            "start": 945,
                            "end": 956
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "Storing...",
                              "raw": "'Storing...'",
                              "start": 957,
                              "end": 969
                            }
                          ],
                          "optional": false,
                          "start": 945,
                          "end": 970
                        },
                        "directive": null,
                        "start": 945,
                        "end": 971
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 990,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1003,
                                "end": 1010
                              }
                            ],
                            "optional": false,
                            "start": 990,
                            "end": 1011
                          },
                          "start": 984,
                          "end": 1011
                        },
                        "directive": null,
                        "start": 984,
                        "end": 1012
                      }
                    ],
                    "start": 849,
                    "end": 1022
                  },
                  "start": 792,
                  "end": 1022
                }
              ],
              "start": 728,
              "end": 1028
            },
            "start": 715,
            "end": 1028
          }
        ],
        "start": 668,
        "end": 1030
      },
      "expression": false,
      "start": 640,
      "end": 1030
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1030
}
```
