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
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 38
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
                      "start": 39,
                      "end": 40
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 39,
                    "end": 40
                  }
                ],
                "start": 38,
                "end": 41
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
                      "start": 59,
                      "end": 63
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
                          "start": 65,
                          "end": 69
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
                                "start": 70,
                                "end": 71
                              },
                              "typeArguments": null,
                              "start": 70,
                              "end": 71
                            }
                          ],
                          "start": 69,
                          "end": 72
                        },
                        "start": 65,
                        "end": 72
                      },
                      "start": 63,
                      "end": 72
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
                    "start": 52,
                    "end": 73
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
                      "start": 89,
                      "end": 93
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
                          "start": 95,
                          "end": 99
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
                                "start": 100,
                                "end": 101
                              },
                              "typeArguments": null,
                              "start": 100,
                              "end": 101
                            }
                          ],
                          "start": 99,
                          "end": 102
                        },
                        "start": 95,
                        "end": 102
                      },
                      "start": 93,
                      "end": 102
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
                    "start": 82,
                    "end": 103
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
                      "start": 120,
                      "end": 131
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
                          "start": 133,
                          "end": 144
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
                                "start": 145,
                                "end": 146
                              },
                              "typeArguments": null,
                              "start": 145,
                              "end": 146
                            }
                          ],
                          "start": 144,
                          "end": 147
                        },
                        "start": 133,
                        "end": 147
                      },
                      "start": 131,
                      "end": 147
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
                    "start": 112,
                    "end": 148
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
                      "start": 158,
                      "end": 169
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
                                "start": 185,
                                "end": 192
                              },
                              "start": 183,
                              "end": 192
                            },
                            "start": 177,
                            "end": 192
                          },
                          "readonly": false,
                          "static": false,
                          "start": 170,
                          "end": 192
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
                                  "start": 207,
                                  "end": 208
                                },
                                "typeArguments": null,
                                "start": 207,
                                "end": 208
                              },
                              "start": 205,
                              "end": 208
                            },
                            "start": 201,
                            "end": 208
                          },
                          "readonly": false,
                          "static": false,
                          "start": 194,
                          "end": 208
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
                                  "start": 224,
                                  "end": 228
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "listFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 229,
                                  "end": 240
                                },
                                "optional": false,
                                "computed": false,
                                "start": 224,
                                "end": 240
                              },
                              "right": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ListFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 247,
                                  "end": 258
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
                                        "start": 259,
                                        "end": 260
                                      },
                                      "typeArguments": null,
                                      "start": 259,
                                      "end": 260
                                    }
                                  ],
                                  "start": 258,
                                  "end": 261
                                },
                                "arguments": [],
                                "start": 243,
                                "end": 263
                              },
                              "start": 224,
                              "end": 263
                            },
                            "directive": null,
                            "start": 224,
                            "end": 264
                          }
                        ],
                        "start": 210,
                        "end": 286
                      },
                      "expression": false,
                      "start": 169,
                      "end": 286
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 158,
                    "end": 286
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
                      "start": 303,
                      "end": 306
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
                                "start": 313,
                                "end": 314
                              },
                              "typeArguments": null,
                              "start": 313,
                              "end": 314
                            },
                            "start": 311,
                            "end": 314
                          },
                          "start": 307,
                          "end": 314
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
                            "start": 317,
                            "end": 321
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
                                  "start": 322,
                                  "end": 323
                                },
                                "typeArguments": null,
                                "start": 322,
                                "end": 323
                              }
                            ],
                            "start": 321,
                            "end": 324
                          },
                          "start": 317,
                          "end": 324
                        },
                        "start": 315,
                        "end": 324
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
                                  "start": 343,
                                  "end": 348
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 351,
                                        "end": 355
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 356,
                                        "end": 367
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 351,
                                      "end": 367
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 368,
                                      "end": 377
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 351,
                                    "end": 377
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 378,
                                      "end": 382
                                    }
                                  ],
                                  "optional": false,
                                  "start": 351,
                                  "end": 383
                                },
                                "definite": false,
                                "start": 343,
                                "end": 383
                              }
                            ],
                            "declare": false,
                            "start": 339,
                            "end": 384
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
                                    "start": 410,
                                    "end": 414
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 415,
                                    "end": 419
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 410,
                                  "end": 419
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 420,
                                  "end": 424
                                },
                                "optional": false,
                                "computed": false,
                                "start": 410,
                                "end": 424
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 427,
                                "end": 432
                              },
                              "start": 410,
                              "end": 432
                            },
                            "directive": null,
                            "start": 410,
                            "end": 433
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
                                  "start": 446,
                                  "end": 451
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 452,
                                  "end": 456
                                },
                                "optional": false,
                                "computed": false,
                                "start": 446,
                                "end": 456
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 459,
                                "end": 463
                              },
                              "start": 446,
                              "end": 463
                            },
                            "directive": null,
                            "start": 446,
                            "end": 464
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
                                  "start": 477,
                                  "end": 482
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 483,
                                  "end": 487
                                },
                                "optional": false,
                                "computed": false,
                                "start": 477,
                                "end": 487
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 490,
                                  "end": 494
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 495,
                                  "end": 499
                                },
                                "optional": false,
                                "computed": false,
                                "start": 490,
                                "end": 499
                              },
                              "start": 477,
                              "end": 499
                            },
                            "directive": null,
                            "start": 477,
                            "end": 500
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
                                  "start": 513,
                                  "end": 517
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 518,
                                  "end": 522
                                },
                                "optional": false,
                                "computed": false,
                                "start": 513,
                                "end": 522
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 525,
                                "end": 530
                              },
                              "start": 513,
                              "end": 530
                            },
                            "directive": null,
                            "start": 513,
                            "end": 531
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 551,
                              "end": 556
                            },
                            "start": 544,
                            "end": 557
                          }
                        ],
                        "start": 325,
                        "end": 567
                      },
                      "expression": false,
                      "start": 306,
                      "end": 567
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 296,
                    "end": 567
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
                      "start": 584,
                      "end": 589
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
                          "start": 593,
                          "end": 599
                        },
                        "start": 591,
                        "end": 599
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
                                        "start": 625,
                                        "end": 629
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
                                              "start": 630,
                                              "end": 631
                                            },
                                            "typeArguments": null,
                                            "start": 630,
                                            "end": 631
                                          }
                                        ],
                                        "start": 629,
                                        "end": 632
                                      },
                                      "start": 625,
                                      "end": 632
                                    },
                                    "start": 623,
                                    "end": 632
                                  },
                                  "start": 618,
                                  "end": 632
                                },
                                "init": null,
                                "definite": false,
                                "start": 618,
                                "end": 632
                              }
                            ],
                            "declare": false,
                            "start": 614,
                            "end": 633
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
                                      "start": 653,
                                      "end": 659
                                    },
                                    "start": 651,
                                    "end": 659
                                  },
                                  "start": 650,
                                  "end": 659
                                },
                                "init": null,
                                "definite": false,
                                "start": 650,
                                "end": 659
                              }
                            ],
                            "declare": false,
                            "start": 646,
                            "end": 660
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
                                "start": 674,
                                "end": 679
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 682,
                                  "end": 686
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 687,
                                  "end": 691
                                },
                                "optional": false,
                                "computed": false,
                                "start": 682,
                                "end": 691
                              },
                              "start": 674,
                              "end": 691
                            },
                            "directive": null,
                            "start": 674,
                            "end": 692
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
                                "start": 710,
                                "end": 711
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 714,
                                "end": 715
                              },
                              "start": 710,
                              "end": 715
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
                                  "start": 719,
                                  "end": 724
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 725,
                                  "end": 731
                                },
                                "optional": false,
                                "computed": false,
                                "start": 719,
                                "end": 731
                              },
                              "prefix": true,
                              "start": 717,
                              "end": 732
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
                                "start": 734,
                                "end": 735
                              },
                              "start": 734,
                              "end": 737
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
                                      "start": 757,
                                      "end": 762
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "entry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 765,
                                        "end": 770
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 771,
                                        "end": 775
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 765,
                                      "end": 775
                                    },
                                    "start": 757,
                                    "end": 775
                                  },
                                  "directive": null,
                                  "start": 757,
                                  "end": 776
                                }
                              ],
                              "start": 739,
                              "end": 790
                            },
                            "start": 705,
                            "end": 790
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 812,
                              "end": 813
                            },
                            "start": 804,
                            "end": 815
                          }
                        ],
                        "start": 600,
                        "end": 825
                      },
                      "expression": false,
                      "start": 589,
                      "end": 825
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 577,
                    "end": 825
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
                      "start": 842,
                      "end": 849
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
                          "start": 853,
                          "end": 860
                        },
                        "start": 851,
                        "end": 860
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
                                  "start": 883,
                                  "end": 887
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 888,
                                  "end": 892
                                },
                                "optional": false,
                                "computed": false,
                                "start": 883,
                                "end": 892
                              },
                              "operator": "==",
                              "right": {
                                "type": "ThisExpression",
                                "start": 896,
                                "end": 900
                              },
                              "start": 883,
                              "end": 900
                            },
                            "start": 875,
                            "end": 902
                          }
                        ],
                        "start": 861,
                        "end": 912
                      },
                      "expression": false,
                      "start": 849,
                      "end": 912
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 835,
                    "end": 912
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
                      "start": 929,
                      "end": 934
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
                            "start": 938,
                            "end": 939
                          },
                          "typeArguments": null,
                          "start": 938,
                          "end": 939
                        },
                        "start": 936,
                        "end": 939
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
                                  "start": 958,
                                  "end": 962
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isEmpty",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 963,
                                  "end": 970
                                },
                                "optional": false,
                                "computed": false,
                                "start": 958,
                                "end": 970
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 958,
                              "end": 972
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
                                        "start": 1011,
                                        "end": 1015
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1016,
                                        "end": 1020
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1011,
                                      "end": 1020
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1021,
                                      "end": 1025
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1011,
                                    "end": 1025
                                  },
                                  "start": 1004,
                                  "end": 1026
                                }
                              ],
                              "start": 986,
                              "end": 1040
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
                                    "start": 1083,
                                    "end": 1087
                                  },
                                  "start": 1076,
                                  "end": 1088
                                }
                              ],
                              "start": 1058,
                              "end": 1102
                            },
                            "start": 954,
                            "end": 1102
                          }
                        ],
                        "start": 940,
                        "end": 1112
                      },
                      "expression": false,
                      "start": 934,
                      "end": 1112
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 922,
                    "end": 1112
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
                      "start": 1129,
                      "end": 1138
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
                                "start": 1146,
                                "end": 1150
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
                                      "start": 1151,
                                      "end": 1152
                                    },
                                    "typeArguments": null,
                                    "start": 1151,
                                    "end": 1152
                                  }
                                ],
                                "start": 1150,
                                "end": 1153
                              },
                              "start": 1146,
                              "end": 1153
                            },
                            "start": 1144,
                            "end": 1153
                          },
                          "start": 1139,
                          "end": 1153
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1156,
                          "end": 1160
                        },
                        "start": 1154,
                        "end": 1160
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
                                  "start": 1175,
                                  "end": 1180
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1181,
                                  "end": 1187
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1175,
                                "end": 1187
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1190,
                                "end": 1195
                              },
                              "start": 1175,
                              "end": 1195
                            },
                            "directive": null,
                            "start": 1175,
                            "end": 1196
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
                                  "start": 1209,
                                  "end": 1214
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1215,
                                  "end": 1219
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1209,
                                "end": 1219
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1222,
                                  "end": 1226
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1227,
                                  "end": 1231
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1222,
                                "end": 1231
                              },
                              "start": 1209,
                              "end": 1231
                            },
                            "directive": null,
                            "start": 1209,
                            "end": 1232
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
                                  "start": 1245,
                                  "end": 1250
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1251,
                                  "end": 1255
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1245,
                                "end": 1255
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1258,
                                "end": 1262
                              },
                              "start": 1245,
                              "end": 1262
                            },
                            "directive": null,
                            "start": 1245,
                            "end": 1263
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
                                  "start": 1276,
                                  "end": 1280
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1281,
                                  "end": 1285
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1276,
                                "end": 1285
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1288,
                                "end": 1293
                              },
                              "start": 1276,
                              "end": 1293
                            },
                            "directive": null,
                            "start": 1276,
                            "end": 1294
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
                                    "start": 1307,
                                    "end": 1312
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1313,
                                    "end": 1317
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1307,
                                  "end": 1317
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1318,
                                  "end": 1322
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1307,
                                "end": 1322
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1325,
                                "end": 1330
                              },
                              "start": 1307,
                              "end": 1330
                            },
                            "directive": null,
                            "start": 1307,
                            "end": 1331
                          }
                        ],
                        "start": 1161,
                        "end": 1413
                      },
                      "expression": false,
                      "start": 1138,
                      "end": 1413
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1122,
                    "end": 1413
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
                      "start": 1430,
                      "end": 1434
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
                                "start": 1441,
                                "end": 1442
                              },
                              "typeArguments": null,
                              "start": 1441,
                              "end": 1442
                            },
                            "start": 1439,
                            "end": 1442
                          },
                          "start": 1435,
                          "end": 1442
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1445,
                          "end": 1449
                        },
                        "start": 1443,
                        "end": 1449
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
                                  "start": 1468,
                                  "end": 1473
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1476,
                                        "end": 1480
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1481,
                                        "end": 1492
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1476,
                                      "end": 1492
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1493,
                                      "end": 1502
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1476,
                                    "end": 1502
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1503,
                                      "end": 1507
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1476,
                                  "end": 1508
                                },
                                "definite": false,
                                "start": 1468,
                                "end": 1508
                              }
                            ],
                            "declare": false,
                            "start": 1464,
                            "end": 1509
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
                                  "start": 1522,
                                  "end": 1527
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1528,
                                  "end": 1532
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1522,
                                "end": 1532
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1535,
                                "end": 1539
                              },
                              "start": 1522,
                              "end": 1539
                            },
                            "directive": null,
                            "start": 1522,
                            "end": 1540
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
                                  "start": 1553,
                                  "end": 1558
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1559,
                                  "end": 1565
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1553,
                                "end": 1565
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1568,
                                "end": 1573
                              },
                              "start": 1553,
                              "end": 1573
                            },
                            "directive": null,
                            "start": 1553,
                            "end": 1574
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
                                  "start": 1587,
                                  "end": 1592
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1593,
                                  "end": 1597
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1587,
                                "end": 1597
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1600,
                                  "end": 1604
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1605,
                                  "end": 1609
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1600,
                                "end": 1609
                              },
                              "start": 1587,
                              "end": 1609
                            },
                            "directive": null,
                            "start": 1587,
                            "end": 1610
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
                                  "start": 1623,
                                  "end": 1628
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1629,
                                  "end": 1633
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1623,
                                "end": 1633
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1636,
                                "end": 1640
                              },
                              "start": 1623,
                              "end": 1640
                            },
                            "directive": null,
                            "start": 1623,
                            "end": 1641
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
                                  "start": 1654,
                                  "end": 1658
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1659,
                                  "end": 1663
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1654,
                                "end": 1663
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1666,
                                "end": 1671
                              },
                              "start": 1654,
                              "end": 1671
                            },
                            "directive": null,
                            "start": 1654,
                            "end": 1672
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
                                    "start": 1685,
                                    "end": 1690
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1691,
                                    "end": 1695
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1685,
                                  "end": 1695
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1696,
                                  "end": 1700
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1685,
                                "end": 1700
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1703,
                                "end": 1708
                              },
                              "start": 1685,
                              "end": 1708
                            },
                            "directive": null,
                            "start": 1685,
                            "end": 1709
                          }
                        ],
                        "start": 1450,
                        "end": 1792
                      },
                      "expression": false,
                      "start": 1434,
                      "end": 1792
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1423,
                    "end": 1792
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
                      "start": 1809,
                      "end": 1817
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
                                "start": 1824,
                                "end": 1828
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
                                      "start": 1829,
                                      "end": 1830
                                    },
                                    "typeArguments": null,
                                    "start": 1829,
                                    "end": 1830
                                  }
                                ],
                                "start": 1828,
                                "end": 1831
                              },
                              "start": 1824,
                              "end": 1831
                            },
                            "start": 1822,
                            "end": 1831
                          },
                          "start": 1818,
                          "end": 1831
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
                            "start": 1834,
                            "end": 1838
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
                                  "start": 1839,
                                  "end": 1840
                                },
                                "typeArguments": null,
                                "start": 1839,
                                "end": 1840
                              }
                            ],
                            "start": 1838,
                            "end": 1841
                          },
                          "start": 1834,
                          "end": 1841
                        },
                        "start": 1832,
                        "end": 1841
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
                                  "start": 1860,
                                  "end": 1864
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1865,
                                  "end": 1869
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1860,
                                "end": 1869
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isHead",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1870,
                                "end": 1876
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1860,
                              "end": 1876
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
                                    "start": 1903,
                                    "end": 1907
                                  },
                                  "start": 1896,
                                  "end": 1908
                                }
                              ],
                              "start": 1878,
                              "end": 1922
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
                                          "start": 1965,
                                          "end": 1969
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "listFactory",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1970,
                                          "end": 1981
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1965,
                                        "end": 1981
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "RemoveEntry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1982,
                                        "end": 1993
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1965,
                                      "end": 1993
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1994,
                                          "end": 1998
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1999,
                                          "end": 2003
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1994,
                                        "end": 2003
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1965,
                                    "end": 2004
                                  },
                                  "start": 1958,
                                  "end": 2005
                                }
                              ],
                              "start": 1940,
                              "end": 2019
                            },
                            "start": 1856,
                            "end": 2019
                          }
                        ],
                        "start": 1842,
                        "end": 2029
                      },
                      "expression": false,
                      "start": 1817,
                      "end": 2029
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1802,
                    "end": 2029
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
                      "start": 2046,
                      "end": 2057
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
                                "start": 2065,
                                "end": 2069
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
                                      "start": 2070,
                                      "end": 2071
                                    },
                                    "typeArguments": null,
                                    "start": 2070,
                                    "end": 2071
                                  }
                                ],
                                "start": 2069,
                                "end": 2072
                              },
                              "start": 2065,
                              "end": 2072
                            },
                            "start": 2063,
                            "end": 2072
                          },
                          "start": 2058,
                          "end": 2072
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
                            "start": 2075,
                            "end": 2079
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
                                  "start": 2080,
                                  "end": 2081
                                },
                                "typeArguments": null,
                                "start": 2080,
                                "end": 2081
                              }
                            ],
                            "start": 2079,
                            "end": 2082
                          },
                          "start": 2075,
                          "end": 2082
                        },
                        "start": 2073,
                        "end": 2082
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
                                  "start": 2097,
                                  "end": 2102
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2103,
                                  "end": 2109
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2097,
                                "end": 2109
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 2112,
                                "end": 2117
                              },
                              "start": 2097,
                              "end": 2117
                            },
                            "directive": null,
                            "start": 2097,
                            "end": 2118
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
                                    "start": 2131,
                                    "end": 2135
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2136,
                                    "end": 2140
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2131,
                                  "end": 2140
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2141,
                                  "end": 2145
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2131,
                                "end": 2145
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2148,
                                "end": 2153
                              },
                              "start": 2131,
                              "end": 2153
                            },
                            "directive": null,
                            "start": 2131,
                            "end": 2154
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
                                  "start": 2167,
                                  "end": 2172
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2173,
                                  "end": 2177
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2167,
                                "end": 2177
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2180,
                                "end": 2184
                              },
                              "start": 2167,
                              "end": 2184
                            },
                            "directive": null,
                            "start": 2167,
                            "end": 2185
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
                                  "start": 2198,
                                  "end": 2203
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2204,
                                  "end": 2208
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2198,
                                "end": 2208
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2211,
                                  "end": 2215
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2216,
                                  "end": 2220
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2211,
                                "end": 2220
                              },
                              "start": 2198,
                              "end": 2220
                            },
                            "directive": null,
                            "start": 2198,
                            "end": 2221
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
                                  "start": 2234,
                                  "end": 2238
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2239,
                                  "end": 2243
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2234,
                                "end": 2243
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2246,
                                "end": 2251
                              },
                              "start": 2234,
                              "end": 2251
                            },
                            "directive": null,
                            "start": 2234,
                            "end": 2252
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2272,
                              "end": 2277
                            },
                            "start": 2265,
                            "end": 2278
                          }
                        ],
                        "start": 2083,
                        "end": 2288
                      },
                      "expression": false,
                      "start": 2057,
                      "end": 2288
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2039,
                    "end": 2288
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
                      "start": 2305,
                      "end": 2316
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
                                "start": 2323,
                                "end": 2324
                              },
                              "typeArguments": null,
                              "start": 2323,
                              "end": 2324
                            },
                            "start": 2321,
                            "end": 2324
                          },
                          "start": 2317,
                          "end": 2324
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
                            "start": 2327,
                            "end": 2331
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
                                  "start": 2332,
                                  "end": 2333
                                },
                                "typeArguments": null,
                                "start": 2332,
                                "end": 2333
                              }
                            ],
                            "start": 2331,
                            "end": 2334
                          },
                          "start": 2327,
                          "end": 2334
                        },
                        "start": 2325,
                        "end": 2334
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
                                        "start": 2360,
                                        "end": 2364
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
                                              "start": 2365,
                                              "end": 2366
                                            },
                                            "typeArguments": null,
                                            "start": 2365,
                                            "end": 2366
                                          }
                                        ],
                                        "start": 2364,
                                        "end": 2367
                                      },
                                      "start": 2360,
                                      "end": 2367
                                    },
                                    "start": 2358,
                                    "end": 2367
                                  },
                                  "start": 2353,
                                  "end": 2367
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2370,
                                        "end": 2374
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2375,
                                        "end": 2386
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2370,
                                      "end": 2386
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2387,
                                      "end": 2396
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2370,
                                    "end": 2396
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2397,
                                      "end": 2401
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2370,
                                  "end": 2402
                                },
                                "definite": false,
                                "start": 2353,
                                "end": 2402
                              }
                            ],
                            "declare": false,
                            "start": 2349,
                            "end": 2403
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
                                  "start": 2416,
                                  "end": 2421
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2422,
                                  "end": 2426
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2416,
                                "end": 2426
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2429,
                                  "end": 2433
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2434,
                                  "end": 2438
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2429,
                                "end": 2438
                              },
                              "start": 2416,
                              "end": 2438
                            },
                            "directive": null,
                            "start": 2416,
                            "end": 2439
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
                                  "start": 2452,
                                  "end": 2457
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2458,
                                  "end": 2462
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2452,
                                "end": 2462
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2465,
                                "end": 2469
                              },
                              "start": 2452,
                              "end": 2469
                            },
                            "directive": null,
                            "start": 2452,
                            "end": 2470
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
                                  "start": 2483,
                                  "end": 2487
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2488,
                                  "end": 2492
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2483,
                                "end": 2492
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2495,
                                "end": 2500
                              },
                              "start": 2483,
                              "end": 2500
                            },
                            "directive": null,
                            "start": 2483,
                            "end": 2501
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
                                    "start": 2514,
                                    "end": 2519
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2520,
                                    "end": 2524
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2514,
                                  "end": 2524
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2525,
                                  "end": 2529
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2514,
                                "end": 2529
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2532,
                                "end": 2537
                              },
                              "start": 2514,
                              "end": 2537
                            },
                            "directive": null,
                            "start": 2514,
                            "end": 2538
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2629,
                              "end": 2634
                            },
                            "start": 2622,
                            "end": 2635
                          }
                        ],
                        "start": 2335,
                        "end": 2645
                      },
                      "expression": false,
                      "start": 2316,
                      "end": 2645
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2298,
                    "end": 2645
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
                      "start": 2662,
                      "end": 2679
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
                                "start": 2687,
                                "end": 2691
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
                                      "start": 2692,
                                      "end": 2693
                                    },
                                    "typeArguments": null,
                                    "start": 2692,
                                    "end": 2693
                                  }
                                ],
                                "start": 2691,
                                "end": 2694
                              },
                              "start": 2687,
                              "end": 2694
                            },
                            "start": 2685,
                            "end": 2694
                          },
                          "start": 2680,
                          "end": 2694
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
                            "start": 2697,
                            "end": 2701
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
                                  "start": 2702,
                                  "end": 2703
                                },
                                "typeArguments": null,
                                "start": 2702,
                                "end": 2703
                              }
                            ],
                            "start": 2701,
                            "end": 2704
                          },
                          "start": 2697,
                          "end": 2704
                        },
                        "start": 2695,
                        "end": 2704
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
                                    "start": 2719,
                                    "end": 2723
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2724,
                                    "end": 2728
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2719,
                                  "end": 2728
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2729,
                                  "end": 2733
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2719,
                                "end": 2733
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2736,
                                "end": 2741
                              },
                              "start": 2719,
                              "end": 2741
                            },
                            "directive": null,
                            "start": 2719,
                            "end": 2742
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
                                  "start": 2756,
                                  "end": 2761
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2762,
                                  "end": 2766
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2756,
                                "end": 2766
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2769,
                                "end": 2773
                              },
                              "start": 2756,
                              "end": 2773
                            },
                            "directive": null,
                            "start": 2756,
                            "end": 2774
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
                                  "start": 2787,
                                  "end": 2792
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2793,
                                  "end": 2797
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2787,
                                "end": 2797
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2800,
                                  "end": 2804
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2805,
                                  "end": 2809
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2800,
                                "end": 2809
                              },
                              "start": 2787,
                              "end": 2809
                            },
                            "directive": null,
                            "start": 2787,
                            "end": 2810
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
                                  "start": 2823,
                                  "end": 2827
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2828,
                                  "end": 2832
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2823,
                                "end": 2832
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2835,
                                "end": 2840
                              },
                              "start": 2823,
                              "end": 2840
                            },
                            "directive": null,
                            "start": 2823,
                            "end": 2841
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2861,
                              "end": 2866
                            },
                            "start": 2854,
                            "end": 2867
                          }
                        ],
                        "start": 2705,
                        "end": 2877
                      },
                      "expression": false,
                      "start": 2679,
                      "end": 2877
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2655,
                    "end": 2877
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
                      "start": 2894,
                      "end": 2906
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
                                "start": 2913,
                                "end": 2914
                              },
                              "typeArguments": null,
                              "start": 2913,
                              "end": 2914
                            },
                            "start": 2911,
                            "end": 2914
                          },
                          "start": 2907,
                          "end": 2914
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
                            "start": 2917,
                            "end": 2921
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
                                  "start": 2922,
                                  "end": 2923
                                },
                                "typeArguments": null,
                                "start": 2922,
                                "end": 2923
                              }
                            ],
                            "start": 2921,
                            "end": 2924
                          },
                          "start": 2917,
                          "end": 2924
                        },
                        "start": 2915,
                        "end": 2924
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
                                  "start": 2943,
                                  "end": 2948
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2951,
                                        "end": 2955
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2956,
                                        "end": 2967
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2951,
                                      "end": 2967
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2968,
                                      "end": 2977
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2951,
                                    "end": 2977
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2978,
                                      "end": 2982
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2951,
                                  "end": 2983
                                },
                                "definite": false,
                                "start": 2943,
                                "end": 2983
                              }
                            ],
                            "declare": false,
                            "start": 2939,
                            "end": 2984
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3004,
                                  "end": 3008
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "insertEntryBefore",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3009,
                                  "end": 3026
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3004,
                                "end": 3026
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3027,
                                  "end": 3032
                                }
                              ],
                              "optional": false,
                              "start": 3004,
                              "end": 3033
                            },
                            "start": 2997,
                            "end": 3034
                          }
                        ],
                        "start": 2925,
                        "end": 3044
                      },
                      "expression": false,
                      "start": 2906,
                      "end": 3044
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2887,
                    "end": 3044
                  }
                ],
                "start": 42,
                "end": 3050
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 3050
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 3050
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
                "start": 3069,
                "end": 3080
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
                      "start": 3081,
                      "end": 3082
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3081,
                    "end": 3082
                  }
                ],
                "start": 3080,
                "end": 3083
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
                      "start": 3102,
                      "end": 3110
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
                              "start": 3111,
                              "end": 3112
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3111,
                            "end": 3112
                          }
                        ],
                        "start": 3110,
                        "end": 3113
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
                            "start": 3117,
                            "end": 3121
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
                                  "start": 3122,
                                  "end": 3123
                                },
                                "typeArguments": null,
                                "start": 3122,
                                "end": 3123
                              }
                            ],
                            "start": 3121,
                            "end": 3124
                          },
                          "start": 3117,
                          "end": 3124
                        },
                        "start": 3115,
                        "end": 3124
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
                                        "start": 3150,
                                        "end": 3154
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
                                              "start": 3155,
                                              "end": 3156
                                            },
                                            "typeArguments": null,
                                            "start": 3155,
                                            "end": 3156
                                          }
                                        ],
                                        "start": 3154,
                                        "end": 3157
                                      },
                                      "start": 3150,
                                      "end": 3157
                                    },
                                    "start": 3148,
                                    "end": 3157
                                  },
                                  "start": 3143,
                                  "end": 3157
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3164,
                                    "end": 3168
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
                                          "start": 3169,
                                          "end": 3170
                                        },
                                        "typeArguments": null,
                                        "start": 3169,
                                        "end": 3170
                                      }
                                    ],
                                    "start": 3168,
                                    "end": 3171
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 3172,
                                      "end": 3176
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 3178,
                                      "end": 3182
                                    }
                                  ],
                                  "start": 3160,
                                  "end": 3183
                                },
                                "definite": false,
                                "start": 3143,
                                "end": 3183
                              }
                            ],
                            "declare": false,
                            "start": 3139,
                            "end": 3184
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
                                  "start": 3197,
                                  "end": 3202
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3203,
                                  "end": 3207
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3197,
                                "end": 3207
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3210,
                                "end": 3215
                              },
                              "start": 3197,
                              "end": 3215
                            },
                            "directive": null,
                            "start": 3197,
                            "end": 3216
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
                                  "start": 3229,
                                  "end": 3234
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3235,
                                  "end": 3239
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3229,
                                "end": 3239
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3242,
                                "end": 3247
                              },
                              "start": 3229,
                              "end": 3247
                            },
                            "directive": null,
                            "start": 3229,
                            "end": 3248
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3268,
                              "end": 3273
                            },
                            "start": 3261,
                            "end": 3274
                          }
                        ],
                        "start": 3125,
                        "end": 3284
                      },
                      "expression": false,
                      "start": 3110,
                      "end": 3284
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3095,
                    "end": 3284
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
                      "start": 3301,
                      "end": 3310
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
                              "start": 3311,
                              "end": 3312
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3311,
                            "end": 3312
                          }
                        ],
                        "start": 3310,
                        "end": 3313
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
                                "start": 3320,
                                "end": 3321
                              },
                              "typeArguments": null,
                              "start": 3320,
                              "end": 3321
                            },
                            "start": 3318,
                            "end": 3321
                          },
                          "start": 3314,
                          "end": 3321
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
                            "start": 3324,
                            "end": 3328
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
                                  "start": 3329,
                                  "end": 3330
                                },
                                "typeArguments": null,
                                "start": 3329,
                                "end": 3330
                              }
                            ],
                            "start": 3328,
                            "end": 3331
                          },
                          "start": 3324,
                          "end": 3331
                        },
                        "start": 3322,
                        "end": 3331
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
                                        "start": 3357,
                                        "end": 3361
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
                                              "start": 3362,
                                              "end": 3363
                                            },
                                            "typeArguments": null,
                                            "start": 3362,
                                            "end": 3363
                                          }
                                        ],
                                        "start": 3361,
                                        "end": 3364
                                      },
                                      "start": 3357,
                                      "end": 3364
                                    },
                                    "start": 3355,
                                    "end": 3364
                                  },
                                  "start": 3350,
                                  "end": 3364
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3371,
                                    "end": 3375
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
                                          "start": 3376,
                                          "end": 3377
                                        },
                                        "typeArguments": null,
                                        "start": 3376,
                                        "end": 3377
                                      }
                                    ],
                                    "start": 3375,
                                    "end": 3378
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 3379,
                                      "end": 3384
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3386,
                                      "end": 3390
                                    }
                                  ],
                                  "start": 3367,
                                  "end": 3391
                                },
                                "definite": false,
                                "start": 3350,
                                "end": 3391
                              }
                            ],
                            "declare": false,
                            "start": 3346,
                            "end": 3392
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
                                  "start": 3405,
                                  "end": 3410
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3411,
                                  "end": 3415
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3405,
                                "end": 3415
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3418,
                                "end": 3423
                              },
                              "start": 3405,
                              "end": 3423
                            },
                            "directive": null,
                            "start": 3405,
                            "end": 3424
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
                                  "start": 3437,
                                  "end": 3442
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3443,
                                  "end": 3447
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3437,
                                "end": 3447
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3450,
                                "end": 3455
                              },
                              "start": 3437,
                              "end": 3455
                            },
                            "directive": null,
                            "start": 3437,
                            "end": 3456
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3476,
                              "end": 3481
                            },
                            "start": 3469,
                            "end": 3482
                          }
                        ],
                        "start": 3332,
                        "end": 3492
                      },
                      "expression": false,
                      "start": 3310,
                      "end": 3492
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3294,
                    "end": 3492
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
                      "start": 3509,
                      "end": 3520
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
                              "start": 3521,
                              "end": 3522
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3521,
                            "end": 3522
                          }
                        ],
                        "start": 3520,
                        "end": 3523
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
                                "start": 3531,
                                "end": 3535
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
                                      "start": 3536,
                                      "end": 3537
                                    },
                                    "typeArguments": null,
                                    "start": 3536,
                                    "end": 3537
                                  }
                                ],
                                "start": 3535,
                                "end": 3538
                              },
                              "start": 3531,
                              "end": 3538
                            },
                            "start": 3529,
                            "end": 3538
                          },
                          "start": 3524,
                          "end": 3538
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
                            "start": 3541,
                            "end": 3545
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
                                  "start": 3546,
                                  "end": 3547
                                },
                                "typeArguments": null,
                                "start": 3546,
                                "end": 3547
                              }
                            ],
                            "start": 3545,
                            "end": 3548
                          },
                          "start": 3541,
                          "end": 3548
                        },
                        "start": 3539,
                        "end": 3548
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
                                "start": 3567,
                                "end": 3572
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3576,
                                "end": 3580
                              },
                              "start": 3567,
                              "end": 3580
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
                                    "start": 3607,
                                    "end": 3611
                                  },
                                  "start": 3600,
                                  "end": 3612
                                }
                              ],
                              "start": 3582,
                              "end": 3626
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
                                  "start": 3648,
                                  "end": 3653
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3654,
                                  "end": 3660
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3648,
                                "end": 3660
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
                                      "start": 3735,
                                      "end": 3739
                                    },
                                    "start": 3728,
                                    "end": 3740
                                  }
                                ],
                                "start": 3662,
                                "end": 3754
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
                                            "start": 3790,
                                            "end": 3795
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "next",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3796,
                                            "end": 3800
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3790,
                                          "end": 3800
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3801,
                                          "end": 3805
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3790,
                                        "end": 3805
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3808,
                                          "end": 3813
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3814,
                                          "end": 3818
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3808,
                                        "end": 3818
                                      },
                                      "start": 3790,
                                      "end": 3818
                                    },
                                    "directive": null,
                                    "start": 3790,
                                    "end": 3819
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
                                            "start": 3836,
                                            "end": 3841
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3842,
                                            "end": 3846
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3836,
                                          "end": 3846
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3847,
                                          "end": 3851
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3836,
                                        "end": 3851
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3854,
                                          "end": 3859
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3860,
                                          "end": 3864
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3854,
                                        "end": 3864
                                      },
                                      "start": 3836,
                                      "end": 3864
                                    },
                                    "directive": null,
                                    "start": 3836,
                                    "end": 3865
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3890,
                                      "end": 3895
                                    },
                                    "start": 3883,
                                    "end": 3896
                                  }
                                ],
                                "start": 3772,
                                "end": 3910
                              },
                              "start": 3644,
                              "end": 3910
                            },
                            "start": 3563,
                            "end": 3910
                          }
                        ],
                        "start": 3549,
                        "end": 3920
                      },
                      "expression": false,
                      "start": 3520,
                      "end": 3920
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3502,
                    "end": 3920
                  }
                ],
                "start": 3084,
                "end": 3926
              },
              "abstract": false,
              "declare": false,
              "start": 3063,
              "end": 3926
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3056,
            "end": 3926
          }
        ],
        "start": 14,
        "end": 3928
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3928
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3928
}
```
