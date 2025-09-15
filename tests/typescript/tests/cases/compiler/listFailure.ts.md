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
                "name": "Buffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 43
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
                      "start": 51,
                      "end": 56
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
                          "start": 58,
                          "end": 62
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
                                "start": 63,
                                "end": 67
                              },
                              "typeArguments": null,
                              "start": 63,
                              "end": 67
                            }
                          ],
                          "start": 62,
                          "end": 68
                        },
                        "start": 58,
                        "end": 68
                      },
                      "start": 56,
                      "end": 68
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListMakeHead",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 83
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
                              "start": 84,
                              "end": 88
                            },
                            "typeArguments": null,
                            "start": 84,
                            "end": 88
                          }
                        ],
                        "start": 83,
                        "end": 89
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 71,
                      "end": 91
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 51,
                    "end": 92
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
                      "start": 110,
                      "end": 117
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
                              "start": 128,
                              "end": 134
                            },
                            "start": 126,
                            "end": 134
                          },
                          "start": 118,
                          "end": 134
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
                            "start": 137,
                            "end": 141
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
                                  "start": 142,
                                  "end": 146
                                },
                                "typeArguments": null,
                                "start": 142,
                                "end": 146
                              }
                            ],
                            "start": 141,
                            "end": 147
                          },
                          "start": 137,
                          "end": 147
                        },
                        "start": 135,
                        "end": 147
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
                                        "start": 185,
                                        "end": 189
                                      },
                                      "typeArguments": null,
                                      "start": 185,
                                      "end": 189
                                    },
                                    "start": 183,
                                    "end": 189
                                  },
                                  "start": 179,
                                  "end": 189
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Line",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 196,
                                    "end": 200
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 192,
                                  "end": 202
                                },
                                "definite": false,
                                "start": 179,
                                "end": 202
                              }
                            ],
                            "declare": false,
                            "start": 175,
                            "end": 203
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
                                  "start": 220,
                                  "end": 229
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 232,
                                        "end": 236
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "lines",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 237,
                                        "end": 242
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 232,
                                      "end": 242
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "add",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 243,
                                      "end": 246
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 232,
                                    "end": 246
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 247,
                                      "end": 251
                                    }
                                  ],
                                  "optional": false,
                                  "start": 232,
                                  "end": 252
                                },
                                "definite": false,
                                "start": 220,
                                "end": 252
                              }
                            ],
                            "declare": false,
                            "start": 216,
                            "end": 253
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "lineEntry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 283
                            },
                            "start": 267,
                            "end": 284
                          }
                        ],
                        "start": 148,
                        "end": 294
                      },
                      "expression": false,
                      "start": 117,
                      "end": 294
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 110,
                    "end": 294
                  }
                ],
                "start": 44,
                "end": 304
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 304
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 304
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
                "start": 330,
                "end": 345
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
                      "start": 346,
                      "end": 347
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 346,
                    "end": 347
                  }
                ],
                "start": 345,
                "end": 348
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
                        "start": 356,
                        "end": 360
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
                              "start": 361,
                              "end": 362
                            },
                            "typeArguments": null,
                            "start": 361,
                            "end": 362
                          }
                        ],
                        "start": 360,
                        "end": 363
                      },
                      "start": 356,
                      "end": 363
                    },
                    "start": 354,
                    "end": 363
                  },
                  "start": 349,
                  "end": 363
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
                    "start": 366,
                    "end": 370
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
                          "start": 371,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 371,
                        "end": 372
                      }
                    ],
                    "start": 370,
                    "end": 373
                  },
                  "start": 366,
                  "end": 373
                },
                "start": 364,
                "end": 373
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
                      "start": 389,
                      "end": 394
                    },
                    "start": 382,
                    "end": 395
                  }
                ],
                "start": 374,
                "end": 401
              },
              "expression": false,
              "start": 321,
              "end": 401
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 314,
            "end": 401
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
                "start": 423,
                "end": 435
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
                      "start": 436,
                      "end": 437
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 436,
                    "end": 437
                  }
                ],
                "start": 435,
                "end": 438
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
                    "start": 442,
                    "end": 446
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
                          "start": 447,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 447,
                        "end": 448
                      }
                    ],
                    "start": 446,
                    "end": 449
                  },
                  "start": 442,
                  "end": 449
                },
                "start": 440,
                "end": 449
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
                      "start": 461,
                      "end": 465
                    },
                    "start": 454,
                    "end": 466
                  }
                ],
                "start": 450,
                "end": 472
              },
              "expression": false,
              "start": 414,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 407,
            "end": 472
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
                "start": 494,
                "end": 507
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
                      "start": 508,
                      "end": 509
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 508,
                    "end": 509
                  }
                ],
                "start": 507,
                "end": 510
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
                        "start": 517,
                        "end": 518
                      },
                      "typeArguments": null,
                      "start": 517,
                      "end": 518
                    },
                    "start": 515,
                    "end": 518
                  },
                  "start": 511,
                  "end": 518
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
                    "start": 521,
                    "end": 525
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
                          "start": 526,
                          "end": 527
                        },
                        "typeArguments": null,
                        "start": 526,
                        "end": 527
                      }
                    ],
                    "start": 525,
                    "end": 528
                  },
                  "start": 521,
                  "end": 528
                },
                "start": 519,
                "end": 528
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
                      "start": 540,
                      "end": 544
                    },
                    "start": 533,
                    "end": 545
                  }
                ],
                "start": 529,
                "end": 551
              },
              "expression": false,
              "start": 485,
              "end": 551
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 478,
            "end": 551
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
              "start": 567,
              "end": 571
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
                    "start": 572,
                    "end": 573
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 572,
                  "end": 573
                }
              ],
              "start": 571,
              "end": 574
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
                    "start": 593,
                    "end": 597
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
                        "start": 599,
                        "end": 603
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
                              "start": 604,
                              "end": 605
                            },
                            "typeArguments": null,
                            "start": 604,
                            "end": 605
                          }
                        ],
                        "start": 603,
                        "end": 606
                      },
                      "start": 599,
                      "end": 606
                    },
                    "start": 597,
                    "end": 606
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
                  "start": 586,
                  "end": 607
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
                    "start": 618,
                    "end": 621
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
                              "start": 628,
                              "end": 629
                            },
                            "typeArguments": null,
                            "start": 628,
                            "end": 629
                          },
                          "start": 626,
                          "end": 629
                        },
                        "start": 622,
                        "end": 629
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
                          "start": 632,
                          "end": 636
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
                                "start": 637,
                                "end": 638
                              },
                              "typeArguments": null,
                              "start": 637,
                              "end": 638
                            }
                          ],
                          "start": 636,
                          "end": 639
                        },
                        "start": 632,
                        "end": 639
                      },
                      "start": 630,
                      "end": 639
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
                                "start": 654,
                                "end": 658
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 659,
                                "end": 663
                              },
                              "optional": false,
                              "computed": false,
                              "start": 654,
                              "end": 663
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ListMakeEntry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 666,
                                "end": 679
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 680,
                                  "end": 684
                                }
                              ],
                              "optional": false,
                              "start": 666,
                              "end": 685
                            },
                            "start": 654,
                            "end": 685
                          },
                          "directive": null,
                          "start": 654,
                          "end": 686
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 706,
                              "end": 710
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 711,
                              "end": 715
                            },
                            "optional": false,
                            "computed": false,
                            "start": 706,
                            "end": 715
                          },
                          "start": 699,
                          "end": 716
                        }
                      ],
                      "start": 640,
                      "end": 726
                    },
                    "expression": false,
                    "start": 621,
                    "end": 726
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 618,
                  "end": 726
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
                    "start": 736,
                    "end": 744
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
                              "start": 751,
                              "end": 755
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
                                    "start": 756,
                                    "end": 757
                                  },
                                  "typeArguments": null,
                                  "start": 756,
                                  "end": 757
                                }
                              ],
                              "start": 755,
                              "end": 758
                            },
                            "start": 751,
                            "end": 758
                          },
                          "start": 749,
                          "end": 758
                        },
                        "start": 745,
                        "end": 758
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
                          "start": 761,
                          "end": 765
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
                                "start": 766,
                                "end": 767
                              },
                              "typeArguments": null,
                              "start": 766,
                              "end": 767
                            }
                          ],
                          "start": 765,
                          "end": 768
                        },
                        "start": 761,
                        "end": 768
                      },
                      "start": 759,
                      "end": 768
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
                              "start": 791,
                              "end": 806
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 807,
                                  "end": 811
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 812,
                                  "end": 816
                                },
                                "optional": false,
                                "computed": false,
                                "start": 807,
                                "end": 816
                              }
                            ],
                            "optional": false,
                            "start": 791,
                            "end": 817
                          },
                          "start": 783,
                          "end": 819
                        }
                      ],
                      "start": 769,
                      "end": 829
                    },
                    "expression": false,
                    "start": 744,
                    "end": 829
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 736,
                  "end": 829
                }
              ],
              "start": 575,
              "end": 841
            },
            "abstract": false,
            "declare": false,
            "start": 561,
            "end": 841
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
                "start": 857,
                "end": 861
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 862,
                "end": 864
              },
              "abstract": false,
              "declare": false,
              "start": 851,
              "end": 864
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 844,
            "end": 864
          }
        ],
        "start": 17,
        "end": 866
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 866
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 866
}
```
