__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104,
    "range": [
      96,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "saverGen",
    "start": 106,
    "end": 114,
    "range": [
      106,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 118,
    "end": 132,
    "range": [
      118,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
    "end": 143,
    "range": [
      139,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 145,
    "end": 152,
    "range": [
      145,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 163,
    "end": 172,
    "range": [
      163,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 184,
    "end": 191,
    "range": [
      184,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 193,
    "end": 200,
    "range": [
      193,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 221,
    "end": 226,
    "range": [
      221,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 228,
    "end": 232,
    "range": [
      228,
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
    "value": "const",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 253,
    "end": 260,
    "range": [
      253,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 271,
    "end": 280,
    "range": [
      271,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 304,
    "end": 306,
    "range": [
      304,
      306
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 307,
    "end": 311,
    "range": [
      307,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 325,
    "end": 332,
    "range": [
      325,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 350,
    "end": 354,
    "range": [
      350,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 369,
    "end": 374,
    "range": [
      369,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 375,
    "end": 382,
    "range": [
      375,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 385,
    "end": 390,
    "range": [
      385,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 391,
    "end": 398,
    "range": [
      391,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 403,
    "end": 410,
    "range": [
      403,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 425,
    "end": 432,
    "range": [
      425,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 451,
    "end": 458,
    "range": [
      451,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 459,
    "end": 462,
    "range": [
      459,
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
    "type": "String",
    "value": "'Storing...'",
    "start": 463,
    "end": 475,
    "range": [
      463,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 490,
    "end": 495,
    "range": [
      490,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 496,
    "end": 508,
    "range": [
      496,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 509,
    "end": 516,
    "range": [
      509,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 538,
    "end": 546,
    "range": [
      538,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 547,
    "end": 559,
    "range": [
      547,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 560,
    "end": 567,
    "range": [
      560,
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
    "type": "Identifier",
    "value": "Result",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 585,
    "end": 592,
    "range": [
      585,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 593,
    "end": 596,
    "range": [
      593,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 597,
    "end": 604,
    "range": [
      597,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 611,
    "end": 617,
    "range": [
      611,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 618,
    "end": 625,
    "range": [
      618,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 626,
    "end": 633,
    "range": [
      626,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 640,
    "end": 645,
    "range": [
      640,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654,
    "range": [
      646,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "saverGen2",
    "start": 656,
    "end": 665,
    "range": [
      656,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 678,
    "end": 685,
    "range": [
      678,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 687,
    "end": 694,
    "range": [
      687,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 695,
    "end": 701,
    "range": [
      695,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706,
    "range": [
      705,
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
    "type": "Punctuator",
    "value": "]",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 715,
    "end": 720,
    "range": [
      715,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 738,
    "end": 743,
    "range": [
      738,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 747,
    "end": 754,
    "range": [
      747,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 755,
    "end": 761,
    "range": [
      755,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 765,
    "end": 774,
    "range": [
      765,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 777,
    "end": 782,
    "range": [
      777,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 798,
    "end": 800,
    "range": [
      798,
      800
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 801,
    "end": 805,
    "range": [
      801,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 819,
    "end": 826,
    "range": [
      819,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 827,
    "end": 831,
    "range": [
      827,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 844,
    "end": 848,
    "range": [
      844,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 863,
    "end": 868,
    "range": [
      863,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 869,
    "end": 876,
    "range": [
      869,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 879,
    "end": 884,
    "range": [
      879,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 885,
    "end": 892,
    "range": [
      885,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 897,
    "end": 904,
    "range": [
      897,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 919,
    "end": 926,
    "range": [
      919,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 945,
    "end": 952,
    "range": [
      945,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 953,
    "end": 956,
    "range": [
      953,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "String",
    "value": "'Storing...'",
    "start": 957,
    "end": 969,
    "range": [
      957,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 984,
    "end": 989,
    "range": [
      984,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 990,
    "end": 1002,
    "range": [
      990,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1003,
    "end": 1010,
    "range": [
      1003,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  }
]
```
