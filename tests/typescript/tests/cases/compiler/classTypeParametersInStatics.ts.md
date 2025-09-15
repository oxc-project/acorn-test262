__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 42
              },
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
                      "start": 43,
                      "end": 44
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 43,
                    "end": 44
                  }
                ],
                "start": 42,
                "end": 45
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 67
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 69,
                          "end": 73
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 74,
                                "end": 75
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 75
                            }
                          ],
                          "start": 73,
                          "end": 76
                        },
                        "start": 69,
                        "end": 76
                      },
                      "start": 67,
                      "end": 76
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 56,
                    "end": 77
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 97
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 103
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 105
                              },
                              "typeArguments": null,
                              "start": 104,
                              "end": 105
                            }
                          ],
                          "start": 103,
                          "end": 106
                        },
                        "start": 99,
                        "end": 106
                      },
                      "start": 97,
                      "end": 106
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 86,
                    "end": 107
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 128
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isHead",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 144,
                                "end": 151
                              },
                              "start": 142,
                              "end": 151
                            },
                            "start": 136,
                            "end": 151
                          },
                          "readonly": false,
                          "static": false,
                          "start": 129,
                          "end": 151
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 166,
                                  "end": 167
                                },
                                "typeArguments": null,
                                "start": 166,
                                "end": 167
                              },
                              "start": 164,
                              "end": 167
                            },
                            "start": 160,
                            "end": 167
                          },
                          "readonly": false,
                          "static": false,
                          "start": 153,
                          "end": 167
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 169,
                        "end": 189
                      },
                      "expression": false,
                      "start": 128,
                      "end": 189
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 189
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 221
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
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
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 229
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 231
                              }
                            ],
                            "start": 229,
                            "end": 232
                          },
                          "start": 225,
                          "end": 232
                        },
                        "start": 223,
                        "end": 232
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 274,
                                        "end": 278
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 279,
                                              "end": 280
                                            },
                                            "typeArguments": null,
                                            "start": 279,
                                            "end": 280
                                          }
                                        ],
                                        "start": 278,
                                        "end": 281
                                      },
                                      "start": 274,
                                      "end": 281
                                    },
                                    "start": 272,
                                    "end": 281
                                  },
                                  "start": 267,
                                  "end": 281
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 288,
                                    "end": 292
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 293,
                                          "end": 294
                                        },
                                        "typeArguments": null,
                                        "start": 293,
                                        "end": 294
                                      }
                                    ],
                                    "start": 292,
                                    "end": 295
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 296,
                                      "end": 300
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 302,
                                      "end": 306
                                    }
                                  ],
                                  "start": 284,
                                  "end": 307
                                },
                                "definite": false,
                                "start": 267,
                                "end": 307
                              }
                            ],
                            "declare": false,
                            "start": 263,
                            "end": 308
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 321,
                                  "end": 326
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 327,
                                  "end": 331
                                },
                                "optional": false,
                                "computed": false,
                                "start": 321,
                                "end": 331
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 339
                              },
                              "start": 321,
                              "end": 339
                            },
                            "directive": null,
                            "start": 321,
                            "end": 340
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 353,
                                  "end": 358
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 359,
                                  "end": 363
                                },
                                "optional": false,
                                "computed": false,
                                "start": 353,
                                "end": 363
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 366,
                                "end": 371
                              },
                              "start": 353,
                              "end": 371
                            },
                            "directive": null,
                            "start": 353,
                            "end": 372
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 392,
                              "end": 397
                            },
                            "start": 385,
                            "end": 398
                          }
                        ],
                        "start": 233,
                        "end": 408
                      },
                      "expression": false,
                      "start": 221,
                      "end": 408
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 199,
                    "end": 408
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 449
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
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
                              "start": 450,
                              "end": 451
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 450,
                            "end": 451
                          }
                        ],
                        "start": 449,
                        "end": 452
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 460
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 462
                                },
                                "typeArguments": null,
                                "start": 461,
                                "end": 462
                              }
                            ],
                            "start": 460,
                            "end": 463
                          },
                          "start": 456,
                          "end": 463
                        },
                        "start": 454,
                        "end": 463
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 509,
                                        "end": 513
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 514,
                                              "end": 515
                                            },
                                            "typeArguments": null,
                                            "start": 514,
                                            "end": 515
                                          }
                                        ],
                                        "start": 513,
                                        "end": 516
                                      },
                                      "start": 509,
                                      "end": 516
                                    },
                                    "start": 507,
                                    "end": 516
                                  },
                                  "start": 502,
                                  "end": 516
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 523,
                                    "end": 527
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 528,
                                          "end": 529
                                        },
                                        "typeArguments": null,
                                        "start": 528,
                                        "end": 529
                                      }
                                    ],
                                    "start": 527,
                                    "end": 530
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 531,
                                      "end": 535
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 537,
                                      "end": 541
                                    }
                                  ],
                                  "start": 519,
                                  "end": 542
                                },
                                "definite": false,
                                "start": 502,
                                "end": 542
                              }
                            ],
                            "declare": false,
                            "start": 498,
                            "end": 543
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 556,
                                  "end": 561
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 562,
                                  "end": 566
                                },
                                "optional": false,
                                "computed": false,
                                "start": 556,
                                "end": 566
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 569,
                                "end": 574
                              },
                              "start": 556,
                              "end": 574
                            },
                            "directive": null,
                            "start": 556,
                            "end": 575
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 588,
                                  "end": 593
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 594,
                                  "end": 598
                                },
                                "optional": false,
                                "computed": false,
                                "start": 588,
                                "end": 598
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 601,
                                "end": 606
                              },
                              "start": 588,
                              "end": 606
                            },
                            "directive": null,
                            "start": 588,
                            "end": 607
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 627,
                              "end": 632
                            },
                            "start": 620,
                            "end": 633
                          }
                        ],
                        "start": 464,
                        "end": 643
                      },
                      "expression": false,
                      "start": 449,
                      "end": 643
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 426,
                    "end": 643
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 669,
                      "end": 678
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 679,
                              "end": 680
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 679,
                            "end": 680
                          }
                        ],
                        "start": 678,
                        "end": 681
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 685,
                            "end": 689
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 691
                                },
                                "typeArguments": null,
                                "start": 690,
                                "end": 691
                              }
                            ],
                            "start": 689,
                            "end": 692
                          },
                          "start": 685,
                          "end": 692
                        },
                        "start": 683,
                        "end": 692
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 738,
                                        "end": 742
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 743,
                                              "end": 744
                                            },
                                            "typeArguments": null,
                                            "start": 743,
                                            "end": 744
                                          }
                                        ],
                                        "start": 742,
                                        "end": 745
                                      },
                                      "start": 738,
                                      "end": 745
                                    },
                                    "start": 736,
                                    "end": 745
                                  },
                                  "start": 731,
                                  "end": 745
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 752,
                                    "end": 756
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 757,
                                          "end": 758
                                        },
                                        "typeArguments": null,
                                        "start": 757,
                                        "end": 758
                                      }
                                    ],
                                    "start": 756,
                                    "end": 759
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 760,
                                      "end": 764
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 766,
                                      "end": 770
                                    }
                                  ],
                                  "start": 748,
                                  "end": 771
                                },
                                "definite": false,
                                "start": 731,
                                "end": 771
                              }
                            ],
                            "declare": false,
                            "start": 727,
                            "end": 772
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 785,
                                  "end": 790
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 795
                                },
                                "optional": false,
                                "computed": false,
                                "start": 785,
                                "end": 795
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 798,
                                "end": 803
                              },
                              "start": 785,
                              "end": 803
                            },
                            "directive": null,
                            "start": 785,
                            "end": 804
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 817,
                                  "end": 822
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 823,
                                  "end": 827
                                },
                                "optional": false,
                                "computed": false,
                                "start": 817,
                                "end": 827
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 830,
                                "end": 835
                              },
                              "start": 817,
                              "end": 835
                            },
                            "directive": null,
                            "start": 817,
                            "end": 836
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 861
                            },
                            "start": 849,
                            "end": 862
                          }
                        ],
                        "start": 693,
                        "end": 872
                      },
                      "expression": false,
                      "start": 678,
                      "end": 872
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 655,
                    "end": 872
                  }
                ],
                "start": 46,
                "end": 880
              },
              "abstract": false,
              "declare": false,
              "start": 32,
              "end": 880
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 880
          }
        ],
        "start": 17,
        "end": 882
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 882
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 882
}
```
