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
                "start": 37,
                "end": 41
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
                      "start": 42,
                      "end": 43
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "start": 41,
                "end": 44
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
                      "start": 62,
                      "end": 66
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
                          "start": 68,
                          "end": 72
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
                                "start": 73,
                                "end": 74
                              },
                              "typeArguments": null,
                              "start": 73,
                              "end": 74
                            }
                          ],
                          "start": 72,
                          "end": 75
                        },
                        "start": 68,
                        "end": 75
                      },
                      "start": 66,
                      "end": 75
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
                    "start": 55,
                    "end": 76
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
                      "start": 92,
                      "end": 96
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
                          "start": 98,
                          "end": 102
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
                                "start": 103,
                                "end": 104
                              },
                              "typeArguments": null,
                              "start": 103,
                              "end": 104
                            }
                          ],
                          "start": 102,
                          "end": 105
                        },
                        "start": 98,
                        "end": 105
                      },
                      "start": 96,
                      "end": 105
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
                    "start": 85,
                    "end": 106
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listFactory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 134
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ListFactory",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 147
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
                                "start": 148,
                                "end": 149
                              },
                              "typeArguments": null,
                              "start": 148,
                              "end": 149
                            }
                          ],
                          "start": 147,
                          "end": 150
                        },
                        "start": 136,
                        "end": 150
                      },
                      "start": 134,
                      "end": 150
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 115,
                    "end": 151
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
                      "start": 161,
                      "end": 172
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
                                "start": 188,
                                "end": 195
                              },
                              "start": 186,
                              "end": 195
                            },
                            "start": 180,
                            "end": 195
                          },
                          "readonly": false,
                          "static": false,
                          "start": 173,
                          "end": 195
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
                                  "start": 210,
                                  "end": 211
                                },
                                "typeArguments": null,
                                "start": 210,
                                "end": 211
                              },
                              "start": 208,
                              "end": 211
                            },
                            "start": 204,
                            "end": 211
                          },
                          "readonly": false,
                          "static": false,
                          "start": 197,
                          "end": 211
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 227,
                                  "end": 231
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "listFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 232,
                                  "end": 243
                                },
                                "optional": false,
                                "computed": false,
                                "start": 227,
                                "end": 243
                              },
                              "right": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ListFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 250,
                                  "end": 261
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
                                        "start": 262,
                                        "end": 263
                                      },
                                      "typeArguments": null,
                                      "start": 262,
                                      "end": 263
                                    }
                                  ],
                                  "start": 261,
                                  "end": 264
                                },
                                "arguments": [],
                                "start": 246,
                                "end": 266
                              },
                              "start": 227,
                              "end": 266
                            },
                            "directive": null,
                            "start": 227,
                            "end": 267
                          }
                        ],
                        "start": 213,
                        "end": 289
                      },
                      "expression": false,
                      "start": 172,
                      "end": 289
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 161,
                    "end": 289
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "add",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 309
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
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 317
                            },
                            "start": 314,
                            "end": 317
                          },
                          "start": 310,
                          "end": 317
                        }
                      ],
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
                            "start": 320,
                            "end": 324
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
                                  "start": 325,
                                  "end": 326
                                },
                                "typeArguments": null,
                                "start": 325,
                                "end": 326
                              }
                            ],
                            "start": 324,
                            "end": 327
                          },
                          "start": 320,
                          "end": 327
                        },
                        "start": 318,
                        "end": 327
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
                                  "typeAnnotation": null,
                                  "start": 346,
                                  "end": 351
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 354,
                                        "end": 358
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 359,
                                        "end": 370
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 354,
                                      "end": 370
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 371,
                                      "end": 380
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 354,
                                    "end": 380
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 381,
                                      "end": 385
                                    }
                                  ],
                                  "optional": false,
                                  "start": 354,
                                  "end": 386
                                },
                                "definite": false,
                                "start": 346,
                                "end": 386
                              }
                            ],
                            "declare": false,
                            "start": 342,
                            "end": 387
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 413,
                                    "end": 417
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 418,
                                    "end": 422
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 413,
                                  "end": 422
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 423,
                                  "end": 427
                                },
                                "optional": false,
                                "computed": false,
                                "start": 413,
                                "end": 427
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 430,
                                "end": 435
                              },
                              "start": 413,
                              "end": 435
                            },
                            "directive": null,
                            "start": 413,
                            "end": 436
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
                                  "start": 449,
                                  "end": 454
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 459
                                },
                                "optional": false,
                                "computed": false,
                                "start": 449,
                                "end": 459
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 462,
                                "end": 466
                              },
                              "start": 449,
                              "end": 466
                            },
                            "directive": null,
                            "start": 449,
                            "end": 467
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
                                  "start": 480,
                                  "end": 485
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 490
                                },
                                "optional": false,
                                "computed": false,
                                "start": 480,
                                "end": 490
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 493,
                                  "end": 497
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 498,
                                  "end": 502
                                },
                                "optional": false,
                                "computed": false,
                                "start": 493,
                                "end": 502
                              },
                              "start": 480,
                              "end": 502
                            },
                            "directive": null,
                            "start": 480,
                            "end": 503
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 521,
                                  "end": 525
                                },
                                "optional": false,
                                "computed": false,
                                "start": 516,
                                "end": 525
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 528,
                                "end": 533
                              },
                              "start": 516,
                              "end": 533
                            },
                            "directive": null,
                            "start": 516,
                            "end": 534
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 554,
                              "end": 559
                            },
                            "start": 547,
                            "end": 560
                          }
                        ],
                        "start": 328,
                        "end": 570
                      },
                      "expression": false,
                      "start": 309,
                      "end": 570
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 299,
                    "end": 570
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 592
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
                          "type": "TSNumberKeyword",
                          "start": 596,
                          "end": 602
                        },
                        "start": 594,
                        "end": 602
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
                                        "start": 628,
                                        "end": 632
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
                                              "start": 633,
                                              "end": 634
                                            },
                                            "typeArguments": null,
                                            "start": 633,
                                            "end": 634
                                          }
                                        ],
                                        "start": 632,
                                        "end": 635
                                      },
                                      "start": 628,
                                      "end": 635
                                    },
                                    "start": 626,
                                    "end": 635
                                  },
                                  "start": 621,
                                  "end": 635
                                },
                                "init": null,
                                "definite": false,
                                "start": 621,
                                "end": 635
                              }
                            ],
                            "declare": false,
                            "start": 617,
                            "end": 636
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 656,
                                      "end": 662
                                    },
                                    "start": 654,
                                    "end": 662
                                  },
                                  "start": 653,
                                  "end": 662
                                },
                                "init": null,
                                "definite": false,
                                "start": 653,
                                "end": 662
                              }
                            ],
                            "declare": false,
                            "start": 649,
                            "end": 663
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 677,
                                "end": 682
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 685,
                                  "end": 689
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 694
                                },
                                "optional": false,
                                "computed": false,
                                "start": 685,
                                "end": 694
                              },
                              "start": 677,
                              "end": 694
                            },
                            "directive": null,
                            "start": 677,
                            "end": 695
                          },
                          {
                            "type": "ForStatement",
                            "init": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 713,
                                "end": 714
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 717,
                                "end": 718
                              },
                              "start": 713,
                              "end": 718
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 722,
                                  "end": 727
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 734
                                },
                                "optional": false,
                                "computed": false,
                                "start": 722,
                                "end": 734
                              },
                              "prefix": true,
                              "start": 720,
                              "end": 735
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 737,
                                "end": 738
                              },
                              "start": 737,
                              "end": 740
                            },
                            "body": {
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
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 760,
                                      "end": 765
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "entry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 768,
                                        "end": 773
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 774,
                                        "end": 778
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 768,
                                      "end": 778
                                    },
                                    "start": 760,
                                    "end": 778
                                  },
                                  "directive": null,
                                  "start": 760,
                                  "end": 779
                                }
                              ],
                              "start": 742,
                              "end": 793
                            },
                            "start": 708,
                            "end": 793
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 816
                            },
                            "start": 807,
                            "end": 818
                          }
                        ],
                        "start": 603,
                        "end": 828
                      },
                      "expression": false,
                      "start": 592,
                      "end": 828
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 580,
                    "end": 828
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isEmpty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 845,
                      "end": 852
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
                          "type": "TSBooleanKeyword",
                          "start": 856,
                          "end": 863
                        },
                        "start": 854,
                        "end": 863
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 886,
                                  "end": 890
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 891,
                                  "end": 895
                                },
                                "optional": false,
                                "computed": false,
                                "start": 886,
                                "end": 895
                              },
                              "operator": "==",
                              "right": {
                                "type": "ThisExpression",
                                "start": 899,
                                "end": 903
                              },
                              "start": 886,
                              "end": 903
                            },
                            "start": 878,
                            "end": 905
                          }
                        ],
                        "start": 864,
                        "end": 915
                      },
                      "expression": false,
                      "start": 852,
                      "end": 915
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 838,
                    "end": 915
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 932,
                      "end": 937
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 941,
                            "end": 942
                          },
                          "typeArguments": null,
                          "start": 941,
                          "end": 942
                        },
                        "start": 939,
                        "end": 942
                      },
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
                                  "type": "ThisExpression",
                                  "start": 961,
                                  "end": 965
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isEmpty",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 966,
                                  "end": 973
                                },
                                "optional": false,
                                "computed": false,
                                "start": 961,
                                "end": 973
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 961,
                              "end": 975
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1014,
                                        "end": 1018
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1019,
                                        "end": 1023
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1014,
                                      "end": 1023
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1024,
                                      "end": 1028
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1014,
                                    "end": 1028
                                  },
                                  "start": 1007,
                                  "end": 1029
                                }
                              ],
                              "start": 989,
                              "end": 1043
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1086,
                                    "end": 1090
                                  },
                                  "start": 1079,
                                  "end": 1091
                                }
                              ],
                              "start": 1061,
                              "end": 1105
                            },
                            "start": 957,
                            "end": 1105
                          }
                        ],
                        "start": 943,
                        "end": 1115
                      },
                      "expression": false,
                      "start": 937,
                      "end": 1115
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 925,
                    "end": 1115
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pushEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1132,
                      "end": 1141
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
                                "start": 1149,
                                "end": 1153
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
                                      "start": 1154,
                                      "end": 1155
                                    },
                                    "typeArguments": null,
                                    "start": 1154,
                                    "end": 1155
                                  }
                                ],
                                "start": 1153,
                                "end": 1156
                              },
                              "start": 1149,
                              "end": 1156
                            },
                            "start": 1147,
                            "end": 1156
                          },
                          "start": 1142,
                          "end": 1156
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1159,
                          "end": 1163
                        },
                        "start": 1157,
                        "end": 1163
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                                  "start": 1178,
                                  "end": 1183
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1184,
                                  "end": 1190
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1178,
                                "end": 1190
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1193,
                                "end": 1198
                              },
                              "start": 1178,
                              "end": 1198
                            },
                            "directive": null,
                            "start": 1178,
                            "end": 1199
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
                                  "start": 1212,
                                  "end": 1217
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1218,
                                  "end": 1222
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1212,
                                "end": 1222
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1225,
                                  "end": 1229
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1234
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1225,
                                "end": 1234
                              },
                              "start": 1212,
                              "end": 1234
                            },
                            "directive": null,
                            "start": 1212,
                            "end": 1235
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
                                  "start": 1248,
                                  "end": 1253
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1254,
                                  "end": 1258
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1248,
                                "end": 1258
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1261,
                                "end": 1265
                              },
                              "start": 1248,
                              "end": 1265
                            },
                            "directive": null,
                            "start": 1248,
                            "end": 1266
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1279,
                                  "end": 1283
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1284,
                                  "end": 1288
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1279,
                                "end": 1288
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1291,
                                "end": 1296
                              },
                              "start": 1279,
                              "end": 1296
                            },
                            "directive": null,
                            "start": 1279,
                            "end": 1297
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1310,
                                    "end": 1315
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1316,
                                    "end": 1320
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1310,
                                  "end": 1320
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1321,
                                  "end": 1325
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1310,
                                "end": 1325
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1328,
                                "end": 1333
                              },
                              "start": 1310,
                              "end": 1333
                            },
                            "directive": null,
                            "start": 1310,
                            "end": 1334
                          }
                        ],
                        "start": 1164,
                        "end": 1416
                      },
                      "expression": false,
                      "start": 1141,
                      "end": 1416
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1125,
                    "end": 1416
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "push",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1433,
                      "end": 1437
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
                                "start": 1444,
                                "end": 1445
                              },
                              "typeArguments": null,
                              "start": 1444,
                              "end": 1445
                            },
                            "start": 1442,
                            "end": 1445
                          },
                          "start": 1438,
                          "end": 1445
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1448,
                          "end": 1452
                        },
                        "start": 1446,
                        "end": 1452
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
                                  "typeAnnotation": null,
                                  "start": 1471,
                                  "end": 1476
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1479,
                                        "end": 1483
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1484,
                                        "end": 1495
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1479,
                                      "end": 1495
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1496,
                                      "end": 1505
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1479,
                                    "end": 1505
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1506,
                                      "end": 1510
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1479,
                                  "end": 1511
                                },
                                "definite": false,
                                "start": 1471,
                                "end": 1511
                              }
                            ],
                            "declare": false,
                            "start": 1467,
                            "end": 1512
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
                                  "start": 1525,
                                  "end": 1530
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1531,
                                  "end": 1535
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1525,
                                "end": 1535
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1538,
                                "end": 1542
                              },
                              "start": 1525,
                              "end": 1542
                            },
                            "directive": null,
                            "start": 1525,
                            "end": 1543
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
                                  "start": 1556,
                                  "end": 1561
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1562,
                                  "end": 1568
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1556,
                                "end": 1568
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1571,
                                "end": 1576
                              },
                              "start": 1556,
                              "end": 1576
                            },
                            "directive": null,
                            "start": 1556,
                            "end": 1577
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
                                  "start": 1590,
                                  "end": 1595
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1596,
                                  "end": 1600
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1590,
                                "end": 1600
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1603,
                                  "end": 1607
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1608,
                                  "end": 1612
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1603,
                                "end": 1612
                              },
                              "start": 1590,
                              "end": 1612
                            },
                            "directive": null,
                            "start": 1590,
                            "end": 1613
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
                                  "start": 1626,
                                  "end": 1631
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1632,
                                  "end": 1636
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1626,
                                "end": 1636
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1639,
                                "end": 1643
                              },
                              "start": 1626,
                              "end": 1643
                            },
                            "directive": null,
                            "start": 1626,
                            "end": 1644
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1657,
                                  "end": 1661
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1662,
                                  "end": 1666
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1657,
                                "end": 1666
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1669,
                                "end": 1674
                              },
                              "start": 1657,
                              "end": 1674
                            },
                            "directive": null,
                            "start": 1657,
                            "end": 1675
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1688,
                                    "end": 1693
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1694,
                                    "end": 1698
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1688,
                                  "end": 1698
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1699,
                                  "end": 1703
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1688,
                                "end": 1703
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1706,
                                "end": 1711
                              },
                              "start": 1688,
                              "end": 1711
                            },
                            "directive": null,
                            "start": 1688,
                            "end": 1712
                          }
                        ],
                        "start": 1453,
                        "end": 1795
                      },
                      "expression": false,
                      "start": 1437,
                      "end": 1795
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1426,
                    "end": 1795
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "popEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1812,
                      "end": 1820
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
                          "name": "head",
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
                                "start": 1827,
                                "end": 1831
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
                                      "start": 1832,
                                      "end": 1833
                                    },
                                    "typeArguments": null,
                                    "start": 1832,
                                    "end": 1833
                                  }
                                ],
                                "start": 1831,
                                "end": 1834
                              },
                              "start": 1827,
                              "end": 1834
                            },
                            "start": 1825,
                            "end": 1834
                          },
                          "start": 1821,
                          "end": 1834
                        }
                      ],
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
                            "start": 1837,
                            "end": 1841
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
                                  "start": 1842,
                                  "end": 1843
                                },
                                "typeArguments": null,
                                "start": 1842,
                                "end": 1843
                              }
                            ],
                            "start": 1841,
                            "end": 1844
                          },
                          "start": 1837,
                          "end": 1844
                        },
                        "start": 1835,
                        "end": 1844
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1863,
                                  "end": 1867
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1868,
                                  "end": 1872
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1863,
                                "end": 1872
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isHead",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1873,
                                "end": 1879
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1863,
                              "end": 1879
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1906,
                                    "end": 1910
                                  },
                                  "start": 1899,
                                  "end": 1911
                                }
                              ],
                              "start": 1881,
                              "end": 1925
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1968,
                                          "end": 1972
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "listFactory",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1973,
                                          "end": 1984
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1968,
                                        "end": 1984
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "RemoveEntry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1985,
                                        "end": 1996
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1968,
                                      "end": 1996
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1997,
                                          "end": 2001
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2002,
                                          "end": 2006
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1997,
                                        "end": 2006
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1968,
                                    "end": 2007
                                  },
                                  "start": 1961,
                                  "end": 2008
                                }
                              ],
                              "start": 1943,
                              "end": 2022
                            },
                            "start": 1859,
                            "end": 2022
                          }
                        ],
                        "start": 1845,
                        "end": 2032
                      },
                      "expression": false,
                      "start": 1820,
                      "end": 2032
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1805,
                    "end": 2032
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2049,
                      "end": 2060
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
                                "start": 2068,
                                "end": 2072
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
                                      "start": 2073,
                                      "end": 2074
                                    },
                                    "typeArguments": null,
                                    "start": 2073,
                                    "end": 2074
                                  }
                                ],
                                "start": 2072,
                                "end": 2075
                              },
                              "start": 2068,
                              "end": 2075
                            },
                            "start": 2066,
                            "end": 2075
                          },
                          "start": 2061,
                          "end": 2075
                        }
                      ],
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
                            "start": 2078,
                            "end": 2082
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
                                  "start": 2083,
                                  "end": 2084
                                },
                                "typeArguments": null,
                                "start": 2083,
                                "end": 2084
                              }
                            ],
                            "start": 2082,
                            "end": 2085
                          },
                          "start": 2078,
                          "end": 2085
                        },
                        "start": 2076,
                        "end": 2085
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                                  "start": 2100,
                                  "end": 2105
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2106,
                                  "end": 2112
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2100,
                                "end": 2112
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 2115,
                                "end": 2120
                              },
                              "start": 2100,
                              "end": 2120
                            },
                            "directive": null,
                            "start": 2100,
                            "end": 2121
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2134,
                                    "end": 2138
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2139,
                                    "end": 2143
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2134,
                                  "end": 2143
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2144,
                                  "end": 2148
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2134,
                                "end": 2148
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2151,
                                "end": 2156
                              },
                              "start": 2134,
                              "end": 2156
                            },
                            "directive": null,
                            "start": 2134,
                            "end": 2157
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
                                  "start": 2170,
                                  "end": 2175
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2176,
                                  "end": 2180
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2170,
                                "end": 2180
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2183,
                                "end": 2187
                              },
                              "start": 2170,
                              "end": 2187
                            },
                            "directive": null,
                            "start": 2170,
                            "end": 2188
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
                                  "start": 2201,
                                  "end": 2206
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2207,
                                  "end": 2211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2201,
                                "end": 2211
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2214,
                                  "end": 2218
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2219,
                                  "end": 2223
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2214,
                                "end": 2223
                              },
                              "start": 2201,
                              "end": 2223
                            },
                            "directive": null,
                            "start": 2201,
                            "end": 2224
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2237,
                                  "end": 2241
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2242,
                                  "end": 2246
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2237,
                                "end": 2246
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2249,
                                "end": 2254
                              },
                              "start": 2237,
                              "end": 2254
                            },
                            "directive": null,
                            "start": 2237,
                            "end": 2255
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2275,
                              "end": 2280
                            },
                            "start": 2268,
                            "end": 2281
                          }
                        ],
                        "start": 2086,
                        "end": 2291
                      },
                      "expression": false,
                      "start": 2060,
                      "end": 2291
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2042,
                    "end": 2291
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertAfter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2308,
                      "end": 2319
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
                                "start": 2326,
                                "end": 2327
                              },
                              "typeArguments": null,
                              "start": 2326,
                              "end": 2327
                            },
                            "start": 2324,
                            "end": 2327
                          },
                          "start": 2320,
                          "end": 2327
                        }
                      ],
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
                            "start": 2330,
                            "end": 2334
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
                                  "start": 2335,
                                  "end": 2336
                                },
                                "typeArguments": null,
                                "start": 2335,
                                "end": 2336
                              }
                            ],
                            "start": 2334,
                            "end": 2337
                          },
                          "start": 2330,
                          "end": 2337
                        },
                        "start": 2328,
                        "end": 2337
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
                                        "start": 2363,
                                        "end": 2367
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
                                              "start": 2368,
                                              "end": 2369
                                            },
                                            "typeArguments": null,
                                            "start": 2368,
                                            "end": 2369
                                          }
                                        ],
                                        "start": 2367,
                                        "end": 2370
                                      },
                                      "start": 2363,
                                      "end": 2370
                                    },
                                    "start": 2361,
                                    "end": 2370
                                  },
                                  "start": 2356,
                                  "end": 2370
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2373,
                                        "end": 2377
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2378,
                                        "end": 2389
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2373,
                                      "end": 2389
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2390,
                                      "end": 2399
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2373,
                                    "end": 2399
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2400,
                                      "end": 2404
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2373,
                                  "end": 2405
                                },
                                "definite": false,
                                "start": 2356,
                                "end": 2405
                              }
                            ],
                            "declare": false,
                            "start": 2352,
                            "end": 2406
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
                                  "start": 2419,
                                  "end": 2424
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2425,
                                  "end": 2429
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2419,
                                "end": 2429
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2432,
                                  "end": 2436
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2437,
                                  "end": 2441
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2432,
                                "end": 2441
                              },
                              "start": 2419,
                              "end": 2441
                            },
                            "directive": null,
                            "start": 2419,
                            "end": 2442
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
                                  "start": 2455,
                                  "end": 2460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2461,
                                  "end": 2465
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2455,
                                "end": 2465
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2468,
                                "end": 2472
                              },
                              "start": 2455,
                              "end": 2472
                            },
                            "directive": null,
                            "start": 2455,
                            "end": 2473
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2486,
                                  "end": 2490
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2491,
                                  "end": 2495
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2486,
                                "end": 2495
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2498,
                                "end": 2503
                              },
                              "start": 2486,
                              "end": 2503
                            },
                            "directive": null,
                            "start": 2486,
                            "end": 2504
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2517,
                                    "end": 2522
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2523,
                                    "end": 2527
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2517,
                                  "end": 2527
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2528,
                                  "end": 2532
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2517,
                                "end": 2532
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2535,
                                "end": 2540
                              },
                              "start": 2517,
                              "end": 2540
                            },
                            "directive": null,
                            "start": 2517,
                            "end": 2541
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2632,
                              "end": 2637
                            },
                            "start": 2625,
                            "end": 2638
                          }
                        ],
                        "start": 2338,
                        "end": 2648
                      },
                      "expression": false,
                      "start": 2319,
                      "end": 2648
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2301,
                    "end": 2648
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertEntryBefore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2665,
                      "end": 2682
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
                                "start": 2690,
                                "end": 2694
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
                                      "start": 2695,
                                      "end": 2696
                                    },
                                    "typeArguments": null,
                                    "start": 2695,
                                    "end": 2696
                                  }
                                ],
                                "start": 2694,
                                "end": 2697
                              },
                              "start": 2690,
                              "end": 2697
                            },
                            "start": 2688,
                            "end": 2697
                          },
                          "start": 2683,
                          "end": 2697
                        }
                      ],
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
                            "start": 2700,
                            "end": 2704
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
                                  "start": 2705,
                                  "end": 2706
                                },
                                "typeArguments": null,
                                "start": 2705,
                                "end": 2706
                              }
                            ],
                            "start": 2704,
                            "end": 2707
                          },
                          "start": 2700,
                          "end": 2707
                        },
                        "start": 2698,
                        "end": 2707
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2722,
                                    "end": 2726
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2727,
                                    "end": 2731
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2722,
                                  "end": 2731
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2732,
                                  "end": 2736
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2722,
                                "end": 2736
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2739,
                                "end": 2744
                              },
                              "start": 2722,
                              "end": 2744
                            },
                            "directive": null,
                            "start": 2722,
                            "end": 2745
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
                                  "start": 2759,
                                  "end": 2764
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2765,
                                  "end": 2769
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2759,
                                "end": 2769
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2772,
                                "end": 2776
                              },
                              "start": 2759,
                              "end": 2776
                            },
                            "directive": null,
                            "start": 2759,
                            "end": 2777
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
                                  "start": 2790,
                                  "end": 2795
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2796,
                                  "end": 2800
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2790,
                                "end": 2800
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2803,
                                  "end": 2807
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2808,
                                  "end": 2812
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2803,
                                "end": 2812
                              },
                              "start": 2790,
                              "end": 2812
                            },
                            "directive": null,
                            "start": 2790,
                            "end": 2813
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2826,
                                  "end": 2830
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2831,
                                  "end": 2835
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2826,
                                "end": 2835
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2838,
                                "end": 2843
                              },
                              "start": 2826,
                              "end": 2843
                            },
                            "directive": null,
                            "start": 2826,
                            "end": 2844
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2864,
                              "end": 2869
                            },
                            "start": 2857,
                            "end": 2870
                          }
                        ],
                        "start": 2708,
                        "end": 2880
                      },
                      "expression": false,
                      "start": 2682,
                      "end": 2880
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2658,
                    "end": 2880
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertBefore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2897,
                      "end": 2909
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
                                "start": 2916,
                                "end": 2917
                              },
                              "typeArguments": null,
                              "start": 2916,
                              "end": 2917
                            },
                            "start": 2914,
                            "end": 2917
                          },
                          "start": 2910,
                          "end": 2917
                        }
                      ],
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
                            "start": 2920,
                            "end": 2924
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
                                  "start": 2925,
                                  "end": 2926
                                },
                                "typeArguments": null,
                                "start": 2925,
                                "end": 2926
                              }
                            ],
                            "start": 2924,
                            "end": 2927
                          },
                          "start": 2920,
                          "end": 2927
                        },
                        "start": 2918,
                        "end": 2927
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
                                  "typeAnnotation": null,
                                  "start": 2946,
                                  "end": 2951
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2954,
                                        "end": 2958
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2959,
                                        "end": 2970
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2954,
                                      "end": 2970
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2971,
                                      "end": 2980
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2954,
                                    "end": 2980
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2981,
                                      "end": 2985
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2954,
                                  "end": 2986
                                },
                                "definite": false,
                                "start": 2946,
                                "end": 2986
                              }
                            ],
                            "declare": false,
                            "start": 2942,
                            "end": 2987
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3007,
                                  "end": 3011
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "insertEntryBefore",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3012,
                                  "end": 3029
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3007,
                                "end": 3029
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3030,
                                  "end": 3035
                                }
                              ],
                              "optional": false,
                              "start": 3007,
                              "end": 3036
                            },
                            "start": 3000,
                            "end": 3037
                          }
                        ],
                        "start": 2928,
                        "end": 3047
                      },
                      "expression": false,
                      "start": 2909,
                      "end": 3047
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2890,
                    "end": 3047
                  }
                ],
                "start": 45,
                "end": 3053
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 3053
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 3053
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListFactory",
                "optional": false,
                "typeAnnotation": null,
                "start": 3072,
                "end": 3083
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
                      "start": 3084,
                      "end": 3085
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3084,
                    "end": 3085
                  }
                ],
                "start": 3083,
                "end": 3086
              },
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
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3113
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
                              "start": 3114,
                              "end": 3115
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3114,
                            "end": 3115
                          }
                        ],
                        "start": 3113,
                        "end": 3116
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
                            "start": 3120,
                            "end": 3124
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
                                  "start": 3125,
                                  "end": 3126
                                },
                                "typeArguments": null,
                                "start": 3125,
                                "end": 3126
                              }
                            ],
                            "start": 3124,
                            "end": 3127
                          },
                          "start": 3120,
                          "end": 3127
                        },
                        "start": 3118,
                        "end": 3127
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
                                        "start": 3153,
                                        "end": 3157
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
                                              "start": 3158,
                                              "end": 3159
                                            },
                                            "typeArguments": null,
                                            "start": 3158,
                                            "end": 3159
                                          }
                                        ],
                                        "start": 3157,
                                        "end": 3160
                                      },
                                      "start": 3153,
                                      "end": 3160
                                    },
                                    "start": 3151,
                                    "end": 3160
                                  },
                                  "start": 3146,
                                  "end": 3160
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3167,
                                    "end": 3171
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
                                          "start": 3172,
                                          "end": 3173
                                        },
                                        "typeArguments": null,
                                        "start": 3172,
                                        "end": 3173
                                      }
                                    ],
                                    "start": 3171,
                                    "end": 3174
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 3175,
                                      "end": 3179
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 3181,
                                      "end": 3185
                                    }
                                  ],
                                  "start": 3163,
                                  "end": 3186
                                },
                                "definite": false,
                                "start": 3146,
                                "end": 3186
                              }
                            ],
                            "declare": false,
                            "start": 3142,
                            "end": 3187
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
                                  "start": 3200,
                                  "end": 3205
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3206,
                                  "end": 3210
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3200,
                                "end": 3210
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3213,
                                "end": 3218
                              },
                              "start": 3200,
                              "end": 3218
                            },
                            "directive": null,
                            "start": 3200,
                            "end": 3219
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
                                  "start": 3232,
                                  "end": 3237
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3238,
                                  "end": 3242
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3232,
                                "end": 3242
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3245,
                                "end": 3250
                              },
                              "start": 3232,
                              "end": 3250
                            },
                            "directive": null,
                            "start": 3232,
                            "end": 3251
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3271,
                              "end": 3276
                            },
                            "start": 3264,
                            "end": 3277
                          }
                        ],
                        "start": 3128,
                        "end": 3287
                      },
                      "expression": false,
                      "start": 3113,
                      "end": 3287
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3098,
                    "end": 3287
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3304,
                      "end": 3313
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
                              "start": 3314,
                              "end": 3315
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3314,
                            "end": 3315
                          }
                        ],
                        "start": 3313,
                        "end": 3316
                      },
                      "params": [
                        {
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
                                "start": 3323,
                                "end": 3324
                              },
                              "typeArguments": null,
                              "start": 3323,
                              "end": 3324
                            },
                            "start": 3321,
                            "end": 3324
                          },
                          "start": 3317,
                          "end": 3324
                        }
                      ],
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
                            "start": 3327,
                            "end": 3331
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
                                  "start": 3332,
                                  "end": 3333
                                },
                                "typeArguments": null,
                                "start": 3332,
                                "end": 3333
                              }
                            ],
                            "start": 3331,
                            "end": 3334
                          },
                          "start": 3327,
                          "end": 3334
                        },
                        "start": 3325,
                        "end": 3334
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
                                        "start": 3360,
                                        "end": 3364
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
                                              "start": 3365,
                                              "end": 3366
                                            },
                                            "typeArguments": null,
                                            "start": 3365,
                                            "end": 3366
                                          }
                                        ],
                                        "start": 3364,
                                        "end": 3367
                                      },
                                      "start": 3360,
                                      "end": 3367
                                    },
                                    "start": 3358,
                                    "end": 3367
                                  },
                                  "start": 3353,
                                  "end": 3367
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3374,
                                    "end": 3378
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
                                          "start": 3379,
                                          "end": 3380
                                        },
                                        "typeArguments": null,
                                        "start": 3379,
                                        "end": 3380
                                      }
                                    ],
                                    "start": 3378,
                                    "end": 3381
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 3382,
                                      "end": 3387
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3389,
                                      "end": 3393
                                    }
                                  ],
                                  "start": 3370,
                                  "end": 3394
                                },
                                "definite": false,
                                "start": 3353,
                                "end": 3394
                              }
                            ],
                            "declare": false,
                            "start": 3349,
                            "end": 3395
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
                                  "start": 3408,
                                  "end": 3413
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3414,
                                  "end": 3418
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3408,
                                "end": 3418
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3421,
                                "end": 3426
                              },
                              "start": 3408,
                              "end": 3426
                            },
                            "directive": null,
                            "start": 3408,
                            "end": 3427
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
                                  "start": 3440,
                                  "end": 3445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3446,
                                  "end": 3450
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3440,
                                "end": 3450
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3453,
                                "end": 3458
                              },
                              "start": 3440,
                              "end": 3458
                            },
                            "directive": null,
                            "start": 3440,
                            "end": 3459
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3479,
                              "end": 3484
                            },
                            "start": 3472,
                            "end": 3485
                          }
                        ],
                        "start": 3335,
                        "end": 3495
                      },
                      "expression": false,
                      "start": 3313,
                      "end": 3495
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3297,
                    "end": 3495
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RemoveEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3512,
                      "end": 3523
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
                              "start": 3524,
                              "end": 3525
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3524,
                            "end": 3525
                          }
                        ],
                        "start": 3523,
                        "end": 3526
                      },
                      "params": [
                        {
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
                                "start": 3534,
                                "end": 3538
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
                                      "start": 3539,
                                      "end": 3540
                                    },
                                    "typeArguments": null,
                                    "start": 3539,
                                    "end": 3540
                                  }
                                ],
                                "start": 3538,
                                "end": 3541
                              },
                              "start": 3534,
                              "end": 3541
                            },
                            "start": 3532,
                            "end": 3541
                          },
                          "start": 3527,
                          "end": 3541
                        }
                      ],
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
                            "start": 3544,
                            "end": 3548
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
                                  "start": 3549,
                                  "end": 3550
                                },
                                "typeArguments": null,
                                "start": 3549,
                                "end": 3550
                              }
                            ],
                            "start": 3548,
                            "end": 3551
                          },
                          "start": 3544,
                          "end": 3551
                        },
                        "start": 3542,
                        "end": 3551
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3570,
                                "end": 3575
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3579,
                                "end": 3583
                              },
                              "start": 3570,
                              "end": 3583
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 3610,
                                    "end": 3614
                                  },
                                  "start": 3603,
                                  "end": 3615
                                }
                              ],
                              "start": 3585,
                              "end": 3629
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3651,
                                  "end": 3656
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3657,
                                  "end": 3663
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3651,
                                "end": 3663
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 3738,
                                      "end": 3742
                                    },
                                    "start": 3731,
                                    "end": 3743
                                  }
                                ],
                                "start": 3665,
                                "end": 3757
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3793,
                                            "end": 3798
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "next",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3799,
                                            "end": 3803
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3793,
                                          "end": 3803
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3804,
                                          "end": 3808
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3793,
                                        "end": 3808
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3811,
                                          "end": 3816
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3817,
                                          "end": 3821
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3811,
                                        "end": 3821
                                      },
                                      "start": 3793,
                                      "end": 3821
                                    },
                                    "directive": null,
                                    "start": 3793,
                                    "end": 3822
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3839,
                                            "end": 3844
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3845,
                                            "end": 3849
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3839,
                                          "end": 3849
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3850,
                                          "end": 3854
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3839,
                                        "end": 3854
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3857,
                                          "end": 3862
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3863,
                                          "end": 3867
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3857,
                                        "end": 3867
                                      },
                                      "start": 3839,
                                      "end": 3867
                                    },
                                    "directive": null,
                                    "start": 3839,
                                    "end": 3868
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3893,
                                      "end": 3898
                                    },
                                    "start": 3886,
                                    "end": 3899
                                  }
                                ],
                                "start": 3775,
                                "end": 3913
                              },
                              "start": 3647,
                              "end": 3913
                            },
                            "start": 3566,
                            "end": 3913
                          }
                        ],
                        "start": 3552,
                        "end": 3923
                      },
                      "expression": false,
                      "start": 3523,
                      "end": 3923
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3505,
                    "end": 3923
                  }
                ],
                "start": 3087,
                "end": 3929
              },
              "abstract": false,
              "declare": false,
              "start": 3066,
              "end": 3929
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3059,
            "end": 3929
          }
        ],
        "start": 17,
        "end": 3931
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3931
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3931
}
```
