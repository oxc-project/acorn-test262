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
        "start": 7,
        "end": 13
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
                "name": "Buffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 40
              },
              "typeParameters": null,
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
                      "name": "lines",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 53
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
                          "start": 55,
                          "end": 59
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 60,
                                "end": 64
                              },
                              "typeArguments": null,
                              "start": 60,
                              "end": 64
                            }
                          ],
                          "start": 59,
                          "end": 65
                        },
                        "start": 55,
                        "end": 65
                      },
                      "start": 53,
                      "end": 65
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListMakeHead",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 80
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Line",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 85
                            },
                            "typeArguments": null,
                            "start": 81,
                            "end": 85
                          }
                        ],
                        "start": 80,
                        "end": 86
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 68,
                      "end": 88
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 48,
                    "end": 89
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 114
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
                          "name": "lineText",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 125,
                              "end": 131
                            },
                            "start": 123,
                            "end": 131
                          },
                          "start": 115,
                          "end": 131
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
                            "start": 134,
                            "end": 138
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 143
                                },
                                "typeArguments": null,
                                "start": 139,
                                "end": 143
                              }
                            ],
                            "start": 138,
                            "end": 144
                          },
                          "start": 134,
                          "end": 144
                        },
                        "start": 132,
                        "end": 144
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
                                  "name": "line",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Line",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 182,
                                        "end": 186
                                      },
                                      "typeArguments": null,
                                      "start": 182,
                                      "end": 186
                                    },
                                    "start": 180,
                                    "end": 186
                                  },
                                  "start": 176,
                                  "end": 186
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Line",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 193,
                                    "end": 197
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 189,
                                  "end": 199
                                },
                                "definite": false,
                                "start": 176,
                                "end": 199
                              }
                            ],
                            "declare": false,
                            "start": 172,
                            "end": 200
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
                                  "name": "lineEntry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 217,
                                  "end": 226
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 229,
                                        "end": 233
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "lines",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 234,
                                        "end": 239
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 229,
                                      "end": 239
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "add",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 240,
                                      "end": 243
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 229,
                                    "end": 243
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 244,
                                      "end": 248
                                    }
                                  ],
                                  "optional": false,
                                  "start": 229,
                                  "end": 249
                                },
                                "definite": false,
                                "start": 217,
                                "end": 249
                              }
                            ],
                            "declare": false,
                            "start": 213,
                            "end": 250
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "lineEntry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 271,
                              "end": 280
                            },
                            "start": 264,
                            "end": 281
                          }
                        ],
                        "start": 145,
                        "end": 291
                      },
                      "expression": false,
                      "start": 114,
                      "end": 291
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 107,
                    "end": 291
                  }
                ],
                "start": 41,
                "end": 301
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 301
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 301
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListRemoveEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 342
              },
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
                      "start": 343,
                      "end": 344
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 343,
                    "end": 344
                  }
                ],
                "start": 342,
                "end": 345
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
                        "start": 353,
                        "end": 357
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
                              "start": 358,
                              "end": 359
                            },
                            "typeArguments": null,
                            "start": 358,
                            "end": 359
                          }
                        ],
                        "start": 357,
                        "end": 360
                      },
                      "start": 353,
                      "end": 360
                    },
                    "start": 351,
                    "end": 360
                  },
                  "start": 346,
                  "end": 360
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
                    "start": 363,
                    "end": 367
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
                          "start": 368,
                          "end": 369
                        },
                        "typeArguments": null,
                        "start": 368,
                        "end": 369
                      }
                    ],
                    "start": 367,
                    "end": 370
                  },
                  "start": 363,
                  "end": 370
                },
                "start": 361,
                "end": 370
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 391
                    },
                    "start": 379,
                    "end": 392
                  }
                ],
                "start": 371,
                "end": 398
              },
              "expression": false,
              "start": 318,
              "end": 398
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 311,
            "end": 398
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListMakeHead",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 432
              },
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
                      "start": 433,
                      "end": 434
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 433,
                    "end": 434
                  }
                ],
                "start": 432,
                "end": 435
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
                    "start": 439,
                    "end": 443
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
                          "start": 444,
                          "end": 445
                        },
                        "typeArguments": null,
                        "start": 444,
                        "end": 445
                      }
                    ],
                    "start": 443,
                    "end": 446
                  },
                  "start": 439,
                  "end": 446
                },
                "start": 437,
                "end": 446
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 458,
                      "end": 462
                    },
                    "start": 451,
                    "end": 463
                  }
                ],
                "start": 447,
                "end": 469
              },
              "expression": false,
              "start": 411,
              "end": 469
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 404,
            "end": 469
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListMakeEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 504
              },
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
                      "start": 505,
                      "end": 506
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 505,
                    "end": 506
                  }
                ],
                "start": 504,
                "end": 507
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 515
                      },
                      "typeArguments": null,
                      "start": 514,
                      "end": 515
                    },
                    "start": 512,
                    "end": 515
                  },
                  "start": 508,
                  "end": 515
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
                    "start": 518,
                    "end": 522
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
                          "start": 523,
                          "end": 524
                        },
                        "typeArguments": null,
                        "start": 523,
                        "end": 524
                      }
                    ],
                    "start": 522,
                    "end": 525
                  },
                  "start": 518,
                  "end": 525
                },
                "start": 516,
                "end": 525
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 537,
                      "end": 541
                    },
                    "start": 530,
                    "end": 542
                  }
                ],
                "start": 526,
                "end": 548
              },
              "expression": false,
              "start": 482,
              "end": 548
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 475,
            "end": 548
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 568
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
                    "start": 569,
                    "end": 570
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 569,
                  "end": 570
                }
              ],
              "start": 568,
              "end": 571
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
                    "start": 590,
                    "end": 594
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
                        "start": 596,
                        "end": 600
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
                              "start": 601,
                              "end": 602
                            },
                            "typeArguments": null,
                            "start": 601,
                            "end": 602
                          }
                        ],
                        "start": 600,
                        "end": 603
                      },
                      "start": 596,
                      "end": 603
                    },
                    "start": 594,
                    "end": 603
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
                  "start": 583,
                  "end": 604
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
                    "start": 615,
                    "end": 618
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
                              "start": 625,
                              "end": 626
                            },
                            "typeArguments": null,
                            "start": 625,
                            "end": 626
                          },
                          "start": 623,
                          "end": 626
                        },
                        "start": 619,
                        "end": 626
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
                          "start": 629,
                          "end": 633
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
                                "start": 634,
                                "end": 635
                              },
                              "typeArguments": null,
                              "start": 634,
                              "end": 635
                            }
                          ],
                          "start": 633,
                          "end": 636
                        },
                        "start": 629,
                        "end": 636
                      },
                      "start": 627,
                      "end": 636
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
                                "type": "ThisExpression",
                                "start": 651,
                                "end": 655
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 656,
                                "end": 660
                              },
                              "optional": false,
                              "computed": false,
                              "start": 651,
                              "end": 660
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ListMakeEntry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 663,
                                "end": 676
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 677,
                                  "end": 681
                                }
                              ],
                              "optional": false,
                              "start": 663,
                              "end": 682
                            },
                            "start": 651,
                            "end": 682
                          },
                          "directive": null,
                          "start": 651,
                          "end": 683
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 703,
                              "end": 707
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 708,
                              "end": 712
                            },
                            "optional": false,
                            "computed": false,
                            "start": 703,
                            "end": 712
                          },
                          "start": 696,
                          "end": 713
                        }
                      ],
                      "start": 637,
                      "end": 723
                    },
                    "expression": false,
                    "start": 618,
                    "end": 723
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 615,
                  "end": 723
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
                    "start": 733,
                    "end": 741
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
                              "start": 748,
                              "end": 752
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
                                    "start": 753,
                                    "end": 754
                                  },
                                  "typeArguments": null,
                                  "start": 753,
                                  "end": 754
                                }
                              ],
                              "start": 752,
                              "end": 755
                            },
                            "start": 748,
                            "end": 755
                          },
                          "start": 746,
                          "end": 755
                        },
                        "start": 742,
                        "end": 755
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
                          "start": 758,
                          "end": 762
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
                                "start": 763,
                                "end": 764
                              },
                              "typeArguments": null,
                              "start": 763,
                              "end": 764
                            }
                          ],
                          "start": 762,
                          "end": 765
                        },
                        "start": 758,
                        "end": 765
                      },
                      "start": 756,
                      "end": 765
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListRemoveEntry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 788,
                              "end": 803
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 804,
                                  "end": 808
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 809,
                                  "end": 813
                                },
                                "optional": false,
                                "computed": false,
                                "start": 804,
                                "end": 813
                              }
                            ],
                            "optional": false,
                            "start": 788,
                            "end": 814
                          },
                          "start": 780,
                          "end": 816
                        }
                      ],
                      "start": 766,
                      "end": 826
                    },
                    "expression": false,
                    "start": 741,
                    "end": 826
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 733,
                  "end": 826
                }
              ],
              "start": 572,
              "end": 838
            },
            "abstract": false,
            "declare": false,
            "start": 558,
            "end": 838
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 858
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 859,
                "end": 861
              },
              "abstract": false,
              "declare": false,
              "start": 848,
              "end": 861
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 841,
            "end": 861
          }
        ],
        "start": 14,
        "end": 863
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 863
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 863
}
```
