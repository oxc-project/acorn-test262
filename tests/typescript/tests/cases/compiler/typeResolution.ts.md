__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelModule1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubModule1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 66
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSModuleDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SubSubModule1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 107
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
                                  "name": "ClassA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 135,
                                  "end": 141
                                },
                                "typeParameters": null,
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
                                        "name": "AisIn1_1_1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 167,
                                        "end": 177
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
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
                                                    "name": "a1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassA",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 270,
                                                          "end": 276
                                                        },
                                                        "typeArguments": null,
                                                        "start": 270,
                                                        "end": 276
                                                      },
                                                      "start": 268,
                                                      "end": 276
                                                    },
                                                    "start": 266,
                                                    "end": 276
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 266,
                                                  "end": 276
                                                }
                                              ],
                                              "declare": false,
                                              "start": 262,
                                              "end": 277
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
                                                    "name": "a1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 278,
                                                    "end": 280
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 281,
                                                    "end": 291
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 278,
                                                  "end": 291
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 278,
                                                "end": 293
                                              },
                                              "directive": null,
                                              "start": 278,
                                              "end": 294
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
                                                    "name": "a2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubSubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 323,
                                                            "end": 336
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 337,
                                                            "end": 343
                                                          },
                                                          "start": 323,
                                                          "end": 343
                                                        },
                                                        "typeArguments": null,
                                                        "start": 323,
                                                        "end": 343
                                                      },
                                                      "start": 321,
                                                      "end": 343
                                                    },
                                                    "start": 319,
                                                    "end": 343
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 319,
                                                  "end": 343
                                                }
                                              ],
                                              "declare": false,
                                              "start": 315,
                                              "end": 344
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
                                                    "name": "a2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 345,
                                                    "end": 347
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 348,
                                                    "end": 358
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 345,
                                                  "end": 358
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 345,
                                                "end": 360
                                              },
                                              "directive": null,
                                              "start": 345,
                                              "end": 361
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
                                                    "name": "a3",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 390,
                                                              "end": 400
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 401,
                                                              "end": 414
                                                            },
                                                            "start": 390,
                                                            "end": 414
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 415,
                                                            "end": 421
                                                          },
                                                          "start": 390,
                                                          "end": 421
                                                        },
                                                        "typeArguments": null,
                                                        "start": 390,
                                                        "end": 421
                                                      },
                                                      "start": 388,
                                                      "end": 421
                                                    },
                                                    "start": 386,
                                                    "end": 421
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 386,
                                                  "end": 421
                                                }
                                              ],
                                              "declare": false,
                                              "start": 382,
                                              "end": 422
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
                                                    "name": "a3",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 423,
                                                    "end": 425
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 426,
                                                    "end": 436
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 423,
                                                  "end": 436
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 423,
                                                "end": 438
                                              },
                                              "directive": null,
                                              "start": 423,
                                              "end": 439
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
                                                    "name": "a4",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 468,
                                                                "end": 483
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 484,
                                                                "end": 494
                                                              },
                                                              "start": 468,
                                                              "end": 494
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 495,
                                                              "end": 508
                                                            },
                                                            "start": 468,
                                                            "end": 508
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 509,
                                                            "end": 515
                                                          },
                                                          "start": 468,
                                                          "end": 515
                                                        },
                                                        "typeArguments": null,
                                                        "start": 468,
                                                        "end": 515
                                                      },
                                                      "start": 466,
                                                      "end": 515
                                                    },
                                                    "start": 464,
                                                    "end": 515
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 464,
                                                  "end": 515
                                                }
                                              ],
                                              "declare": false,
                                              "start": 460,
                                              "end": 516
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
                                                    "name": "a4",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 517,
                                                    "end": 519
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 520,
                                                    "end": 530
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 517,
                                                  "end": 530
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 517,
                                                "end": 532
                                              },
                                              "directive": null,
                                              "start": 517,
                                              "end": 533
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
                                                    "name": "b1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassB",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 645,
                                                          "end": 651
                                                        },
                                                        "typeArguments": null,
                                                        "start": 645,
                                                        "end": 651
                                                      },
                                                      "start": 643,
                                                      "end": 651
                                                    },
                                                    "start": 641,
                                                    "end": 651
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 641,
                                                  "end": 651
                                                }
                                              ],
                                              "declare": false,
                                              "start": 637,
                                              "end": 652
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
                                                    "name": "b1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 653,
                                                    "end": 655
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 656,
                                                    "end": 666
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 653,
                                                  "end": 666
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 653,
                                                "end": 668
                                              },
                                              "directive": null,
                                              "start": 653,
                                              "end": 669
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
                                                    "name": "b2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 698,
                                                                "end": 713
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 714,
                                                                "end": 724
                                                              },
                                                              "start": 698,
                                                              "end": 724
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 725,
                                                              "end": 738
                                                            },
                                                            "start": 698,
                                                            "end": 738
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassB",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 739,
                                                            "end": 745
                                                          },
                                                          "start": 698,
                                                          "end": 745
                                                        },
                                                        "typeArguments": null,
                                                        "start": 698,
                                                        "end": 745
                                                      },
                                                      "start": 696,
                                                      "end": 745
                                                    },
                                                    "start": 694,
                                                    "end": 745
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 694,
                                                  "end": 745
                                                }
                                              ],
                                              "declare": false,
                                              "start": 690,
                                              "end": 746
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
                                                    "name": "b2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 747,
                                                    "end": 749
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 750,
                                                    "end": 760
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 747,
                                                  "end": 760
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 747,
                                                "end": 762
                                              },
                                              "directive": null,
                                              "start": 747,
                                              "end": 763
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
                                                    "name": "c1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 871,
                                                                "end": 886
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule2",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 887,
                                                                "end": 897
                                                              },
                                                              "start": 871,
                                                              "end": 897
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule2",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 898,
                                                              "end": 911
                                                            },
                                                            "start": 871,
                                                            "end": 911
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 912,
                                                            "end": 918
                                                          },
                                                          "start": 871,
                                                          "end": 918
                                                        },
                                                        "typeArguments": null,
                                                        "start": 871,
                                                        "end": 918
                                                      },
                                                      "start": 869,
                                                      "end": 918
                                                    },
                                                    "start": 867,
                                                    "end": 918
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 867,
                                                  "end": 918
                                                }
                                              ],
                                              "declare": false,
                                              "start": 863,
                                              "end": 919
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
                                                    "name": "c1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 920,
                                                    "end": 922
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_2_2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 923,
                                                    "end": 933
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 920,
                                                  "end": 933
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 920,
                                                "end": 935
                                              },
                                              "directive": null,
                                              "start": 920,
                                              "end": 936
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
                                                    "name": "d1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "InterfaceX",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1029,
                                                          "end": 1039
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1029,
                                                        "end": 1039
                                                      },
                                                      "start": 1027,
                                                      "end": 1039
                                                    },
                                                    "start": 1025,
                                                    "end": 1039
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1025,
                                                  "end": 1039
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1021,
                                              "end": 1040
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
                                                    "name": "d1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1041,
                                                    "end": 1043
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1044,
                                                    "end": 1054
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1041,
                                                  "end": 1054
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1041,
                                                "end": 1056
                                              },
                                              "directive": null,
                                              "start": 1041,
                                              "end": 1057
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
                                                    "name": "d2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubSubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1086,
                                                            "end": 1099
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "InterfaceX",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1100,
                                                            "end": 1110
                                                          },
                                                          "start": 1086,
                                                          "end": 1110
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1086,
                                                        "end": 1110
                                                      },
                                                      "start": 1084,
                                                      "end": 1110
                                                    },
                                                    "start": 1082,
                                                    "end": 1110
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1082,
                                                  "end": 1110
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1078,
                                              "end": 1111
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
                                                    "name": "d2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1112,
                                                    "end": 1114
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1115,
                                                    "end": 1125
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1112,
                                                  "end": 1125
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1112,
                                                "end": 1127
                                              },
                                              "directive": null,
                                              "start": 1112,
                                              "end": 1128
                                            }
                                          ],
                                          "start": 180,
                                          "end": 1146
                                        },
                                        "expression": false,
                                        "start": 177,
                                        "end": 1146
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 160,
                                      "end": 1146
                                    }
                                  ],
                                  "start": 142,
                                  "end": 1160
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 129,
                                "end": 1160
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 122,
                              "end": 1160
                            },
                            {
                              "type": "ExportNamedDeclaration",
                              "declaration": {
                                "type": "ClassDeclaration",
                                "decorators": [],
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClassB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1186,
                                  "end": 1192
                                },
                                "typeParameters": null,
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
                                        "name": "BisIn1_1_1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1218,
                                        "end": 1228
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
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
                                                    "name": "a1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassA",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1410,
                                                          "end": 1416
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1410,
                                                        "end": 1416
                                                      },
                                                      "start": 1408,
                                                      "end": 1416
                                                    },
                                                    "start": 1406,
                                                    "end": 1416
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1406,
                                                  "end": 1416
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1402,
                                              "end": 1417
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
                                                    "name": "a1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1418,
                                                    "end": 1420
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1421,
                                                    "end": 1431
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1418,
                                                  "end": 1431
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1418,
                                                "end": 1433
                                              },
                                              "directive": null,
                                              "start": 1418,
                                              "end": 1434
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
                                                    "name": "a2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubSubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1463,
                                                            "end": 1476
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1477,
                                                            "end": 1483
                                                          },
                                                          "start": 1463,
                                                          "end": 1483
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1463,
                                                        "end": 1483
                                                      },
                                                      "start": 1461,
                                                      "end": 1483
                                                    },
                                                    "start": 1459,
                                                    "end": 1483
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1459,
                                                  "end": 1483
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1455,
                                              "end": 1484
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
                                                    "name": "a2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1485,
                                                    "end": 1487
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1488,
                                                    "end": 1498
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1485,
                                                  "end": 1498
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1485,
                                                "end": 1500
                                              },
                                              "directive": null,
                                              "start": 1485,
                                              "end": 1501
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
                                                    "name": "a3",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1530,
                                                              "end": 1540
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1541,
                                                              "end": 1554
                                                            },
                                                            "start": 1530,
                                                            "end": 1554
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1555,
                                                            "end": 1561
                                                          },
                                                          "start": 1530,
                                                          "end": 1561
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1530,
                                                        "end": 1561
                                                      },
                                                      "start": 1528,
                                                      "end": 1561
                                                    },
                                                    "start": 1526,
                                                    "end": 1561
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1526,
                                                  "end": 1561
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1522,
                                              "end": 1562
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
                                                    "name": "a3",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1563,
                                                    "end": 1565
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1566,
                                                    "end": 1576
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1563,
                                                  "end": 1576
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1563,
                                                "end": 1578
                                              },
                                              "directive": null,
                                              "start": 1563,
                                              "end": 1579
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
                                                    "name": "a4",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1608,
                                                                "end": 1623
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1624,
                                                                "end": 1634
                                                              },
                                                              "start": 1608,
                                                              "end": 1634
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1635,
                                                              "end": 1648
                                                            },
                                                            "start": 1608,
                                                            "end": 1648
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1649,
                                                            "end": 1655
                                                          },
                                                          "start": 1608,
                                                          "end": 1655
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1608,
                                                        "end": 1655
                                                      },
                                                      "start": 1606,
                                                      "end": 1655
                                                    },
                                                    "start": 1604,
                                                    "end": 1655
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1604,
                                                  "end": 1655
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1600,
                                              "end": 1656
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
                                                    "name": "a4",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1657,
                                                    "end": 1659
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1660,
                                                    "end": 1670
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1657,
                                                  "end": 1670
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1657,
                                                "end": 1672
                                              },
                                              "directive": null,
                                              "start": 1657,
                                              "end": 1673
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
                                                    "name": "b1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassB",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1785,
                                                          "end": 1791
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1785,
                                                        "end": 1791
                                                      },
                                                      "start": 1783,
                                                      "end": 1791
                                                    },
                                                    "start": 1781,
                                                    "end": 1791
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1781,
                                                  "end": 1791
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1777,
                                              "end": 1792
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
                                                    "name": "b1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1793,
                                                    "end": 1795
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1796,
                                                    "end": 1806
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1793,
                                                  "end": 1806
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1793,
                                                "end": 1808
                                              },
                                              "directive": null,
                                              "start": 1793,
                                              "end": 1809
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
                                                    "name": "b2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1838,
                                                                "end": 1853
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1854,
                                                                "end": 1864
                                                              },
                                                              "start": 1838,
                                                              "end": 1864
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1865,
                                                              "end": 1878
                                                            },
                                                            "start": 1838,
                                                            "end": 1878
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassB",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1879,
                                                            "end": 1885
                                                          },
                                                          "start": 1838,
                                                          "end": 1885
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1838,
                                                        "end": 1885
                                                      },
                                                      "start": 1836,
                                                      "end": 1885
                                                    },
                                                    "start": 1834,
                                                    "end": 1885
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1834,
                                                  "end": 1885
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1830,
                                              "end": 1886
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
                                                    "name": "b2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1887,
                                                    "end": 1889
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1890,
                                                    "end": 1900
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1887,
                                                  "end": 1900
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1887,
                                                "end": 1902
                                              },
                                              "directive": null,
                                              "start": 1887,
                                              "end": 1903
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
                                                    "name": "c1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "TopLevelModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2011,
                                                                "end": 2026
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule2",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2027,
                                                                "end": 2037
                                                              },
                                                              "start": 2011,
                                                              "end": 2037
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule2",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2038,
                                                              "end": 2051
                                                            },
                                                            "start": 2011,
                                                            "end": 2051
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2052,
                                                            "end": 2058
                                                          },
                                                          "start": 2011,
                                                          "end": 2058
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2011,
                                                        "end": 2058
                                                      },
                                                      "start": 2009,
                                                      "end": 2058
                                                    },
                                                    "start": 2007,
                                                    "end": 2058
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2007,
                                                  "end": 2058
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2003,
                                              "end": 2059
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
                                                    "name": "c1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2060,
                                                    "end": 2062
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_2_2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2063,
                                                    "end": 2073
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2060,
                                                  "end": 2073
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2060,
                                                "end": 2075
                                              },
                                              "directive": null,
                                              "start": 2060,
                                              "end": 2076
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
                                                    "name": "c2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "TSQualifiedName",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "TopLevelModule2",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2105,
                                                              "end": 2120
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubModule3",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2121,
                                                              "end": 2131
                                                            },
                                                            "start": 2105,
                                                            "end": 2131
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2132,
                                                            "end": 2138
                                                          },
                                                          "start": 2105,
                                                          "end": 2138
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2105,
                                                        "end": 2138
                                                      },
                                                      "start": 2103,
                                                      "end": 2138
                                                    },
                                                    "start": 2101,
                                                    "end": 2138
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2101,
                                                  "end": 2138
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2097,
                                              "end": 2139
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
                                                    "name": "c2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2140,
                                                    "end": 2142
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn2_3",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2143,
                                                    "end": 2151
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2140,
                                                  "end": 2151
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2140,
                                                "end": 2153
                                              },
                                              "directive": null,
                                              "start": 2140,
                                              "end": 2154
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
                                                    "name": "d1",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "InterfaceX",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 2247,
                                                          "end": 2257
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2247,
                                                        "end": 2257
                                                      },
                                                      "start": 2245,
                                                      "end": 2257
                                                    },
                                                    "start": 2243,
                                                    "end": 2257
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2243,
                                                  "end": 2257
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2239,
                                              "end": 2258
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
                                                    "name": "d1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2259,
                                                    "end": 2261
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2262,
                                                    "end": 2272
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2259,
                                                  "end": 2272
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2259,
                                                "end": 2274
                                              },
                                              "directive": null,
                                              "start": 2259,
                                              "end": 2275
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
                                                    "name": "d2",
                                                    "optional": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubSubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2304,
                                                            "end": 2317
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "InterfaceX",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2318,
                                                            "end": 2328
                                                          },
                                                          "start": 2304,
                                                          "end": 2328
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2304,
                                                        "end": 2328
                                                      },
                                                      "start": 2302,
                                                      "end": 2328
                                                    },
                                                    "start": 2300,
                                                    "end": 2328
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2300,
                                                  "end": 2328
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2296,
                                              "end": 2329
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
                                                    "name": "d2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2330,
                                                    "end": 2332
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2333,
                                                    "end": 2343
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2330,
                                                  "end": 2343
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2330,
                                                "end": 2345
                                              },
                                              "directive": null,
                                              "start": 2330,
                                              "end": 2346
                                            }
                                          ],
                                          "start": 1231,
                                          "end": 2364
                                        },
                                        "expression": false,
                                        "start": 1228,
                                        "end": 2364
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 1211,
                                      "end": 2364
                                    }
                                  ],
                                  "start": 1193,
                                  "end": 2378
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 1180,
                                "end": 2378
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 1173,
                              "end": 2378
                            },
                            {
                              "type": "ExportNamedDeclaration",
                              "declaration": {
                                "type": "TSInterfaceDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "InterfaceX",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2408,
                                  "end": 2418
                                },
                                "typeParameters": null,
                                "extends": [],
                                "body": {
                                  "type": "TSInterfaceBody",
                                  "body": [
                                    {
                                      "type": "TSMethodSignature",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "XisIn1_1_1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2421,
                                        "end": 2431
                                      },
                                      "computed": false,
                                      "optional": false,
                                      "kind": "method",
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "accessibility": null,
                                      "readonly": false,
                                      "static": false,
                                      "start": 2421,
                                      "end": 2434
                                    }
                                  ],
                                  "start": 2419,
                                  "end": 2436
                                },
                                "declare": false,
                                "start": 2398,
                                "end": 2436
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "type",
                              "attributes": [],
                              "start": 2391,
                              "end": 2436
                            },
                            {
                              "type": "ClassDeclaration",
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NonExportedClassQ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2455,
                                "end": 2472
                              },
                              "typeParameters": null,
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
                                      "name": "constructor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2491,
                                      "end": 2502
                                    },
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "generator": false,
                                      "async": false,
                                      "declare": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "FunctionDeclaration",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "QQ",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2536,
                                              "end": 2538
                                            },
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [],
                                            "returnType": null,
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
                                                        "name": "a4",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "TSQualifiedName",
                                                                "left": {
                                                                  "type": "TSQualifiedName",
                                                                  "left": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "TopLevelModule1",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2639,
                                                                    "end": 2654
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "SubModule1",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2655,
                                                                    "end": 2665
                                                                  },
                                                                  "start": 2639,
                                                                  "end": 2665
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubSubModule1",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2666,
                                                                  "end": 2679
                                                                },
                                                                "start": 2639,
                                                                "end": 2679
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2680,
                                                                "end": 2686
                                                              },
                                                              "start": 2639,
                                                              "end": 2686
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2639,
                                                            "end": 2686
                                                          },
                                                          "start": 2637,
                                                          "end": 2686
                                                        },
                                                        "start": 2635,
                                                        "end": 2686
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2635,
                                                      "end": 2686
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2631,
                                                  "end": 2687
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
                                                        "name": "a4",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2688,
                                                        "end": 2690
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn1_1_1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2691,
                                                        "end": 2701
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2688,
                                                      "end": 2701
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2688,
                                                    "end": 2703
                                                  },
                                                  "directive": null,
                                                  "start": 2688,
                                                  "end": 2704
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
                                                        "name": "c1",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "TSQualifiedName",
                                                                "left": {
                                                                  "type": "TSQualifiedName",
                                                                  "left": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "TopLevelModule1",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2737,
                                                                    "end": 2752
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "SubModule2",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2753,
                                                                    "end": 2763
                                                                  },
                                                                  "start": 2737,
                                                                  "end": 2763
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubSubModule2",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2764,
                                                                  "end": 2777
                                                                },
                                                                "start": 2737,
                                                                "end": 2777
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2778,
                                                                "end": 2784
                                                              },
                                                              "start": 2737,
                                                              "end": 2784
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2737,
                                                            "end": 2784
                                                          },
                                                          "start": 2735,
                                                          "end": 2784
                                                        },
                                                        "start": 2733,
                                                        "end": 2784
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2733,
                                                      "end": 2784
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2729,
                                                  "end": 2785
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
                                                        "name": "c1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2786,
                                                        "end": 2788
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn1_2_2",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2789,
                                                        "end": 2799
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2786,
                                                      "end": 2799
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2786,
                                                    "end": 2801
                                                  },
                                                  "directive": null,
                                                  "start": 2786,
                                                  "end": 2802
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
                                                        "name": "d1",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "InterfaceX",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2835,
                                                              "end": 2845
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2835,
                                                            "end": 2845
                                                          },
                                                          "start": 2833,
                                                          "end": 2845
                                                        },
                                                        "start": 2831,
                                                        "end": 2845
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2831,
                                                      "end": 2845
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2827,
                                                  "end": 2846
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
                                                        "name": "d1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2847,
                                                        "end": 2849
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "XisIn1_1_1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2850,
                                                        "end": 2860
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2847,
                                                      "end": 2860
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2847,
                                                    "end": 2862
                                                  },
                                                  "directive": null,
                                                  "start": 2847,
                                                  "end": 2863
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
                                                        "name": "c2",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "TSQualifiedName",
                                                              "left": {
                                                                "type": "TSQualifiedName",
                                                                "left": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "TopLevelModule2",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2896,
                                                                  "end": 2911
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubModule3",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2912,
                                                                  "end": 2922
                                                                },
                                                                "start": 2896,
                                                                "end": 2922
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2923,
                                                                "end": 2929
                                                              },
                                                              "start": 2896,
                                                              "end": 2929
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2896,
                                                            "end": 2929
                                                          },
                                                          "start": 2894,
                                                          "end": 2929
                                                        },
                                                        "start": 2892,
                                                        "end": 2929
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2892,
                                                      "end": 2929
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2888,
                                                  "end": 2930
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
                                                        "name": "c2",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2931,
                                                        "end": 2933
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn2_3",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2934,
                                                        "end": 2942
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2931,
                                                      "end": 2942
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2931,
                                                    "end": 2944
                                                  },
                                                  "directive": null,
                                                  "start": 2931,
                                                  "end": 2945
                                                }
                                              ],
                                              "start": 2541,
                                              "end": 2967
                                            },
                                            "expression": false,
                                            "start": 2527,
                                            "end": 2967
                                          }
                                        ],
                                        "start": 2505,
                                        "end": 2985
                                      },
                                      "expression": false,
                                      "start": 2502,
                                      "end": 2985
                                    },
                                    "kind": "constructor",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 2491,
                                    "end": 2985
                                  }
                                ],
                                "start": 2473,
                                "end": 2999
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 2449,
                              "end": 2999
                            }
                          ],
                          "start": 108,
                          "end": 3009
                        },
                        "kind": "namespace",
                        "declare": false,
                        "global": false,
                        "start": 84,
                        "end": 3009
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 77,
                      "end": 3009
                    },
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3116,
                        "end": 3122
                      },
                      "typeParameters": null,
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
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3137,
                              "end": 3148
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "FunctionDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "AA",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3178,
                                      "end": 3180
                                    },
                                    "generator": false,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
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
                                                "name": "a2",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "SubSubModule1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3213,
                                                        "end": 3226
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3227,
                                                        "end": 3233
                                                      },
                                                      "start": 3213,
                                                      "end": 3233
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3213,
                                                    "end": 3233
                                                  },
                                                  "start": 3211,
                                                  "end": 3233
                                                },
                                                "start": 3209,
                                                "end": 3233
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3209,
                                              "end": 3233
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3205,
                                          "end": 3234
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
                                                "name": "a2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3235,
                                                "end": 3237
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3238,
                                                "end": 3248
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3235,
                                              "end": 3248
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3235,
                                            "end": 3250
                                          },
                                          "directive": null,
                                          "start": 3235,
                                          "end": 3251
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
                                                "name": "a3",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "SubModule1",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 3280,
                                                          "end": 3290
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "SubSubModule1",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 3291,
                                                          "end": 3304
                                                        },
                                                        "start": 3280,
                                                        "end": 3304
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3305,
                                                        "end": 3311
                                                      },
                                                      "start": 3280,
                                                      "end": 3311
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3280,
                                                    "end": 3311
                                                  },
                                                  "start": 3278,
                                                  "end": 3311
                                                },
                                                "start": 3276,
                                                "end": 3311
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3276,
                                              "end": 3311
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3272,
                                          "end": 3312
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
                                                "name": "a3",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3313,
                                                "end": 3315
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3316,
                                                "end": 3326
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3313,
                                              "end": 3326
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3313,
                                            "end": 3328
                                          },
                                          "directive": null,
                                          "start": 3313,
                                          "end": 3329
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
                                                "name": "a4",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "TSQualifiedName",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "TopLevelModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 3358,
                                                            "end": 3373
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 3374,
                                                            "end": 3384
                                                          },
                                                          "start": 3358,
                                                          "end": 3384
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "SubSubModule1",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 3385,
                                                          "end": 3398
                                                        },
                                                        "start": 3358,
                                                        "end": 3398
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3399,
                                                        "end": 3405
                                                      },
                                                      "start": 3358,
                                                      "end": 3405
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3358,
                                                    "end": 3405
                                                  },
                                                  "start": 3356,
                                                  "end": 3405
                                                },
                                                "start": 3354,
                                                "end": 3405
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3354,
                                              "end": 3405
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3350,
                                          "end": 3406
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
                                                "name": "a4",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3407,
                                                "end": 3409
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3410,
                                                "end": 3420
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3407,
                                              "end": 3420
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3407,
                                            "end": 3422
                                          },
                                          "directive": null,
                                          "start": 3407,
                                          "end": 3423
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
                                                "name": "d2",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "SubSubModule1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3516,
                                                        "end": 3529
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "InterfaceX",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3530,
                                                        "end": 3540
                                                      },
                                                      "start": 3516,
                                                      "end": 3540
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3516,
                                                    "end": 3540
                                                  },
                                                  "start": 3514,
                                                  "end": 3540
                                                },
                                                "start": 3512,
                                                "end": 3540
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3512,
                                              "end": 3540
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3508,
                                          "end": 3541
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
                                                "name": "d2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3542,
                                                "end": 3544
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "XisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3545,
                                                "end": 3555
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3542,
                                              "end": 3555
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3542,
                                            "end": 3557
                                          },
                                          "directive": null,
                                          "start": 3542,
                                          "end": 3558
                                        }
                                      ],
                                      "start": 3183,
                                      "end": 3576
                                    },
                                    "expression": false,
                                    "start": 3169,
                                    "end": 3576
                                  }
                                ],
                                "start": 3151,
                                "end": 3590
                              },
                              "expression": false,
                              "start": 3148,
                              "end": 3590
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 3137,
                            "end": 3590
                          }
                        ],
                        "start": 3123,
                        "end": 3600
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3110,
                      "end": 3600
                    }
                  ],
                  "start": 67,
                  "end": 3606
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 46,
                "end": 3606
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 39,
              "end": 3606
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubModule2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3629,
                  "end": 3639
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSModuleDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SubSubModule2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3667,
                          "end": 3680
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
                                  "name": "ClassA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3782,
                                  "end": 3788
                                },
                                "typeParameters": null,
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
                                        "name": "AisIn1_2_2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3798,
                                        "end": 3808
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [],
                                          "start": 3811,
                                          "end": 3814
                                        },
                                        "expression": false,
                                        "start": 3808,
                                        "end": 3814
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3791,
                                      "end": 3814
                                    }
                                  ],
                                  "start": 3789,
                                  "end": 3816
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3776,
                                "end": 3816
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3769,
                              "end": 3816
                            },
                            {
                              "type": "ExportNamedDeclaration",
                              "declaration": {
                                "type": "ClassDeclaration",
                                "decorators": [],
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClassB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3842,
                                  "end": 3848
                                },
                                "typeParameters": null,
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
                                        "name": "BisIn1_2_2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3858,
                                        "end": 3868
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [],
                                          "start": 3871,
                                          "end": 3874
                                        },
                                        "expression": false,
                                        "start": 3868,
                                        "end": 3874
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3851,
                                      "end": 3874
                                    }
                                  ],
                                  "start": 3849,
                                  "end": 3876
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3836,
                                "end": 3876
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3829,
                              "end": 3876
                            },
                            {
                              "type": "ExportNamedDeclaration",
                              "declaration": {
                                "type": "ClassDeclaration",
                                "decorators": [],
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClassC",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3902,
                                  "end": 3908
                                },
                                "typeParameters": null,
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
                                        "name": "CisIn1_2_2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3918,
                                        "end": 3928
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [],
                                          "start": 3931,
                                          "end": 3934
                                        },
                                        "expression": false,
                                        "start": 3928,
                                        "end": 3934
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3911,
                                      "end": 3934
                                    }
                                  ],
                                  "start": 3909,
                                  "end": 3936
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3896,
                                "end": 3936
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3889,
                              "end": 3936
                            },
                            {
                              "type": "ExportNamedDeclaration",
                              "declaration": {
                                "type": "TSInterfaceDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "InterfaceY",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3966,
                                  "end": 3976
                                },
                                "typeParameters": null,
                                "extends": [],
                                "body": {
                                  "type": "TSInterfaceBody",
                                  "body": [
                                    {
                                      "type": "TSMethodSignature",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "YisIn1_2_2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3979,
                                        "end": 3989
                                      },
                                      "computed": false,
                                      "optional": false,
                                      "kind": "method",
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "accessibility": null,
                                      "readonly": false,
                                      "static": false,
                                      "start": 3979,
                                      "end": 3992
                                    }
                                  ],
                                  "start": 3977,
                                  "end": 3994
                                },
                                "declare": false,
                                "start": 3956,
                                "end": 3994
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "type",
                              "attributes": [],
                              "start": 3949,
                              "end": 3994
                            },
                            {
                              "type": "TSInterfaceDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NonExportedInterfaceQ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4017,
                                "end": 4038
                              },
                              "typeParameters": null,
                              "extends": [],
                              "body": {
                                "type": "TSInterfaceBody",
                                "body": [],
                                "start": 4039,
                                "end": 4042
                              },
                              "declare": false,
                              "start": 4007,
                              "end": 4042
                            }
                          ],
                          "start": 3681,
                          "end": 4052
                        },
                        "kind": "namespace",
                        "declare": false,
                        "global": false,
                        "start": 3657,
                        "end": 4052
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 3650,
                      "end": 4052
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InterfaceY",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4087,
                          "end": 4097
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "YisIn1_2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4100,
                                "end": 4108
                              },
                              "computed": false,
                              "optional": false,
                              "kind": "method",
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "accessibility": null,
                              "readonly": false,
                              "static": false,
                              "start": 4100,
                              "end": 4111
                            }
                          ],
                          "start": 4098,
                          "end": 4113
                        },
                        "declare": false,
                        "start": 4077,
                        "end": 4113
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 4070,
                      "end": 4113
                    }
                  ],
                  "start": 3640,
                  "end": 4119
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 3619,
                "end": 4119
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3612,
              "end": 4119
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassA",
                "optional": false,
                "typeAnnotation": null,
                "start": 4135,
                "end": 4141
              },
              "typeParameters": null,
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
                      "name": "AisIn1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4159,
                      "end": 4165
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4168,
                        "end": 4171
                      },
                      "expression": false,
                      "start": 4165,
                      "end": 4171
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4152,
                    "end": 4171
                  }
                ],
                "start": 4142,
                "end": 4177
              },
              "abstract": false,
              "declare": false,
              "start": 4129,
              "end": 4177
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceY",
                "optional": false,
                "typeAnnotation": null,
                "start": 4193,
                "end": 4203
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YisIn1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4214,
                      "end": 4220
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4214,
                    "end": 4223
                  }
                ],
                "start": 4204,
                "end": 4229
              },
              "declare": false,
              "start": 4183,
              "end": 4229
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NotExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 4249,
                "end": 4266
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
                        "name": "ClassA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4290,
                        "end": 4296
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 4297,
                        "end": 4300
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 4284,
                      "end": 4300
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 4277,
                    "end": 4300
                  }
                ],
                "start": 4267,
                "end": 4306
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 4239,
              "end": 4306
            }
          ],
          "start": 33,
          "end": 4308
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 4308
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 4308
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelModule2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4320,
        "end": 4335
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubModule3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4359,
                "end": 4369
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
                        "name": "ClassA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4393,
                        "end": 4399
                      },
                      "typeParameters": null,
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
                              "name": "AisIn2_3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4421,
                              "end": 4429
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 4432,
                                "end": 4435
                              },
                              "expression": false,
                              "start": 4429,
                              "end": 4435
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 4414,
                            "end": 4435
                          }
                        ],
                        "start": 4400,
                        "end": 4445
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 4387,
                      "end": 4445
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 4380,
                    "end": 4445
                  }
                ],
                "start": 4370,
                "end": 4451
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 4349,
              "end": 4451
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4342,
            "end": 4451
          }
        ],
        "start": 4336,
        "end": 4453
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4310,
      "end": 4453
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4454
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 17,
    "end": 32,
    "range": [
      17,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 46,
    "end": 55,
    "range": [
      46,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 56,
    "end": 66,
    "range": [
      56,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 84,
    "end": 93,
    "range": [
      84,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 94,
    "end": 107,
    "range": [
      94,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 160,
    "end": 166,
    "range": [
      160,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 167,
    "end": 177,
    "range": [
      167,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 266,
    "end": 268,
    "range": [
      266,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 281,
    "end": 291,
    "range": [
      281,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 323,
    "end": 336,
    "range": [
      323,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 337,
    "end": 343,
    "range": [
      337,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 348,
    "end": 358,
    "range": [
      348,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 382,
    "end": 385,
    "range": [
      382,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 390,
    "end": 400,
    "range": [
      390,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 401,
    "end": 414,
    "range": [
      401,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 415,
    "end": 421,
    "range": [
      415,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 423,
    "end": 425,
    "range": [
      423,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 426,
    "end": 436,
    "range": [
      426,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 460,
    "end": 463,
    "range": [
      460,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 464,
    "end": 466,
    "range": [
      464,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 468,
    "end": 483,
    "range": [
      468,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 484,
    "end": 494,
    "range": [
      484,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 495,
    "end": 508,
    "range": [
      495,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 509,
    "end": 515,
    "range": [
      509,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 517,
    "end": 519,
    "range": [
      517,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 520,
    "end": 530,
    "range": [
      520,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_1_1",
    "start": 656,
    "end": 666,
    "range": [
      656,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 690,
    "end": 693,
    "range": [
      690,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 698,
    "end": 713,
    "range": [
      698,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 714,
    "end": 724,
    "range": [
      714,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 725,
    "end": 738,
    "range": [
      725,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 739,
    "end": 745,
    "range": [
      739,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 747,
    "end": 749,
    "range": [
      747,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_1_1",
    "start": 750,
    "end": 760,
    "range": [
      750,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 867,
    "end": 869,
    "range": [
      867,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 871,
    "end": 886,
    "range": [
      871,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule2",
    "start": 887,
    "end": 897,
    "range": [
      887,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule2",
    "start": 898,
    "end": 911,
    "range": [
      898,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 912,
    "end": 918,
    "range": [
      912,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 920,
    "end": 922,
    "range": [
      920,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_2_2",
    "start": 923,
    "end": 933,
    "range": [
      923,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
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
    "value": ";",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024,
    "range": [
      1021,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1025,
    "end": 1027,
    "range": [
      1025,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 1029,
    "end": 1039,
    "range": [
      1029,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1041,
    "end": 1043,
    "range": [
      1041,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 1044,
    "end": 1054,
    "range": [
      1044,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1078,
    "end": 1081,
    "range": [
      1078,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1082,
    "end": 1084,
    "range": [
      1082,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 1086,
    "end": 1099,
    "range": [
      1086,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 1100,
    "end": 1110,
    "range": [
      1100,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1112,
    "end": 1114,
    "range": [
      1112,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 1115,
    "end": 1125,
    "range": [
      1115,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1173,
    "end": 1179,
    "range": [
      1173,
      1179
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1180,
    "end": 1185,
    "range": [
      1180,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1211,
    "end": 1217,
    "range": [
      1211,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_1_1",
    "start": 1218,
    "end": 1228,
    "range": [
      1218,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1402,
    "end": 1405,
    "range": [
      1402,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 1410,
    "end": 1416,
    "range": [
      1410,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1418,
    "end": 1420,
    "range": [
      1418,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 1421,
    "end": 1431,
    "range": [
      1421,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1455,
    "end": 1458,
    "range": [
      1455,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1459,
    "end": 1461,
    "range": [
      1459,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 1463,
    "end": 1476,
    "range": [
      1463,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 1477,
    "end": 1483,
    "range": [
      1477,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 1488,
    "end": 1498,
    "range": [
      1488,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1522,
    "end": 1525,
    "range": [
      1522,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1526,
    "end": 1528,
    "range": [
      1526,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 1530,
    "end": 1540,
    "range": [
      1530,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 1541,
    "end": 1554,
    "range": [
      1541,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 1555,
    "end": 1561,
    "range": [
      1555,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1563,
    "end": 1565,
    "range": [
      1563,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 1566,
    "end": 1576,
    "range": [
      1566,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1600,
    "end": 1603,
    "range": [
      1600,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1604,
    "end": 1606,
    "range": [
      1604,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 1608,
    "end": 1623,
    "range": [
      1608,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 1624,
    "end": 1634,
    "range": [
      1624,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 1635,
    "end": 1648,
    "range": [
      1635,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 1649,
    "end": 1655,
    "range": [
      1649,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1657,
    "end": 1659,
    "range": [
      1657,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 1660,
    "end": 1670,
    "range": [
      1660,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1777,
    "end": 1780,
    "range": [
      1777,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1793,
    "end": 1795,
    "range": [
      1793,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_1_1",
    "start": 1796,
    "end": 1806,
    "range": [
      1796,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1830,
    "end": 1833,
    "range": [
      1830,
      1833
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1834,
    "end": 1836,
    "range": [
      1834,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 1838,
    "end": 1853,
    "range": [
      1838,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 1854,
    "end": 1864,
    "range": [
      1854,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 1865,
    "end": 1878,
    "range": [
      1865,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 1879,
    "end": 1885,
    "range": [
      1879,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1887,
    "end": 1889,
    "range": [
      1887,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_1_1",
    "start": 1890,
    "end": 1900,
    "range": [
      1890,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2003,
    "end": 2006,
    "range": [
      2003,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2007,
    "end": 2009,
    "range": [
      2007,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 2011,
    "end": 2026,
    "range": [
      2011,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule2",
    "start": 2027,
    "end": 2037,
    "range": [
      2027,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule2",
    "start": 2038,
    "end": 2051,
    "range": [
      2038,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 2052,
    "end": 2058,
    "range": [
      2052,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2060,
    "end": 2062,
    "range": [
      2060,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_2_2",
    "start": 2063,
    "end": 2073,
    "range": [
      2063,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2097,
    "end": 2100,
    "range": [
      2097,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2101,
    "end": 2103,
    "range": [
      2101,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule2",
    "start": 2105,
    "end": 2120,
    "range": [
      2105,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule3",
    "start": 2121,
    "end": 2131,
    "range": [
      2121,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 2132,
    "end": 2138,
    "range": [
      2132,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2140,
    "end": 2142,
    "range": [
      2140,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn2_3",
    "start": 2143,
    "end": 2151,
    "range": [
      2143,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2239,
    "end": 2242,
    "range": [
      2239,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2243,
    "end": 2245,
    "range": [
      2243,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 2247,
    "end": 2257,
    "range": [
      2247,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2259,
    "end": 2261,
    "range": [
      2259,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 2262,
    "end": 2272,
    "range": [
      2262,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2296,
    "end": 2299,
    "range": [
      2296,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2300,
    "end": 2302,
    "range": [
      2300,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 2304,
    "end": 2317,
    "range": [
      2304,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 2318,
    "end": 2328,
    "range": [
      2318,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2330,
    "end": 2332,
    "range": [
      2330,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 2333,
    "end": 2343,
    "range": [
      2333,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2391,
    "end": 2397,
    "range": [
      2391,
      2397
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2398,
    "end": 2407,
    "range": [
      2398,
      2407
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 2408,
    "end": 2418,
    "range": [
      2408,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 2421,
    "end": 2431,
    "range": [
      2421,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2449,
    "end": 2454,
    "range": [
      2449,
      2454
    ]
  },
  {
    "type": "Identifier",
    "value": "NonExportedClassQ",
    "start": 2455,
    "end": 2472,
    "range": [
      2455,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2491,
    "end": 2502,
    "range": [
      2491,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2527,
    "end": 2535,
    "range": [
      2527,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "QQ",
    "start": 2536,
    "end": 2538,
    "range": [
      2536,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2541,
    "end": 2542,
    "range": [
      2541,
      2542
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2631,
    "end": 2634,
    "range": [
      2631,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2635,
    "end": 2637,
    "range": [
      2635,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 2639,
    "end": 2654,
    "range": [
      2639,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 2655,
    "end": 2665,
    "range": [
      2655,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 2666,
    "end": 2679,
    "range": [
      2666,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 2680,
    "end": 2686,
    "range": [
      2680,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2688,
    "end": 2690,
    "range": [
      2688,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 2691,
    "end": 2701,
    "range": [
      2691,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2729,
    "end": 2732,
    "range": [
      2729,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2733,
    "end": 2735,
    "range": [
      2733,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 2737,
    "end": 2752,
    "range": [
      2737,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule2",
    "start": 2753,
    "end": 2763,
    "range": [
      2753,
      2763
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule2",
    "start": 2764,
    "end": 2777,
    "range": [
      2764,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 2778,
    "end": 2784,
    "range": [
      2778,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2786,
    "end": 2788,
    "range": [
      2786,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_2_2",
    "start": 2789,
    "end": 2799,
    "range": [
      2789,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2827,
    "end": 2830,
    "range": [
      2827,
      2830
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2831,
    "end": 2833,
    "range": [
      2831,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 2835,
    "end": 2845,
    "range": [
      2835,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2847,
    "end": 2849,
    "range": [
      2847,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 2850,
    "end": 2860,
    "range": [
      2850,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2888,
    "end": 2891,
    "range": [
      2888,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2892,
    "end": 2894,
    "range": [
      2892,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule2",
    "start": 2896,
    "end": 2911,
    "range": [
      2896,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule3",
    "start": 2912,
    "end": 2922,
    "range": [
      2912,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 2923,
    "end": 2929,
    "range": [
      2923,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2931,
    "end": 2933,
    "range": [
      2931,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn2_3",
    "start": 2934,
    "end": 2942,
    "range": [
      2934,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3110,
    "end": 3115,
    "range": [
      3110,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 3116,
    "end": 3122,
    "range": [
      3116,
      3122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3137,
    "end": 3148,
    "range": [
      3137,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3169,
    "end": 3177,
    "range": [
      3169,
      3177
    ]
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 3178,
    "end": 3180,
    "range": [
      3178,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3181,
    "end": 3182,
    "range": [
      3181,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3205,
    "end": 3208,
    "range": [
      3205,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3209,
    "end": 3211,
    "range": [
      3209,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 3213,
    "end": 3226,
    "range": [
      3213,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 3227,
    "end": 3233,
    "range": [
      3227,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3235,
    "end": 3237,
    "range": [
      3235,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 3238,
    "end": 3248,
    "range": [
      3238,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3272,
    "end": 3275,
    "range": [
      3272,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3276,
    "end": 3278,
    "range": [
      3276,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 3280,
    "end": 3290,
    "range": [
      3280,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 3291,
    "end": 3304,
    "range": [
      3291,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 3305,
    "end": 3311,
    "range": [
      3305,
      3311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3313,
    "end": 3315,
    "range": [
      3313,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 3316,
    "end": 3326,
    "range": [
      3316,
      3326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3350,
    "end": 3353,
    "range": [
      3350,
      3353
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3354,
    "end": 3356,
    "range": [
      3354,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule1",
    "start": 3358,
    "end": 3373,
    "range": [
      3358,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule1",
    "start": 3374,
    "end": 3384,
    "range": [
      3374,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 3385,
    "end": 3398,
    "range": [
      3385,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 3399,
    "end": 3405,
    "range": [
      3399,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3407,
    "end": 3409,
    "range": [
      3407,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_1_1",
    "start": 3410,
    "end": 3420,
    "range": [
      3410,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3508,
    "end": 3511,
    "range": [
      3508,
      3511
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3512,
    "end": 3514,
    "range": [
      3512,
      3514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule1",
    "start": 3516,
    "end": 3529,
    "range": [
      3516,
      3529
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceX",
    "start": 3530,
    "end": 3540,
    "range": [
      3530,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3542,
    "end": 3544,
    "range": [
      3542,
      3544
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Identifier",
    "value": "XisIn1_1_1",
    "start": 3545,
    "end": 3555,
    "range": [
      3545,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3612,
    "end": 3618,
    "range": [
      3612,
      3618
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3619,
    "end": 3628,
    "range": [
      3619,
      3628
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule2",
    "start": 3629,
    "end": 3639,
    "range": [
      3629,
      3639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3650,
    "end": 3656,
    "range": [
      3650,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3657,
    "end": 3666,
    "range": [
      3657,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "SubSubModule2",
    "start": 3667,
    "end": 3680,
    "range": [
      3667,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3769,
    "end": 3775,
    "range": [
      3769,
      3775
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3776,
    "end": 3781,
    "range": [
      3776,
      3781
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 3782,
    "end": 3788,
    "range": [
      3782,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3791,
    "end": 3797,
    "range": [
      3791,
      3797
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1_2_2",
    "start": 3798,
    "end": 3808,
    "range": [
      3798,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3813,
    "end": 3814,
    "range": [
      3813,
      3814
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3815,
    "end": 3816,
    "range": [
      3815,
      3816
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3829,
    "end": 3835,
    "range": [
      3829,
      3835
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3836,
    "end": 3841,
    "range": [
      3836,
      3841
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 3842,
    "end": 3848,
    "range": [
      3842,
      3848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3849,
    "end": 3850,
    "range": [
      3849,
      3850
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3851,
    "end": 3857,
    "range": [
      3851,
      3857
    ]
  },
  {
    "type": "Identifier",
    "value": "BisIn1_2_2",
    "start": 3858,
    "end": 3868,
    "range": [
      3858,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3871,
    "end": 3872,
    "range": [
      3871,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3875,
    "end": 3876,
    "range": [
      3875,
      3876
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3889,
    "end": 3895,
    "range": [
      3889,
      3895
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3896,
    "end": 3901,
    "range": [
      3896,
      3901
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassC",
    "start": 3902,
    "end": 3908,
    "range": [
      3902,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3911,
    "end": 3917,
    "range": [
      3911,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "CisIn1_2_2",
    "start": 3918,
    "end": 3928,
    "range": [
      3918,
      3928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3928,
    "end": 3929,
    "range": [
      3928,
      3929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3929,
    "end": 3930,
    "range": [
      3929,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3949,
    "end": 3955,
    "range": [
      3949,
      3955
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3956,
    "end": 3965,
    "range": [
      3956,
      3965
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceY",
    "start": 3966,
    "end": 3976,
    "range": [
      3966,
      3976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3977,
    "end": 3978,
    "range": [
      3977,
      3978
    ]
  },
  {
    "type": "Identifier",
    "value": "YisIn1_2_2",
    "start": 3979,
    "end": 3989,
    "range": [
      3979,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3991,
    "end": 3992,
    "range": [
      3991,
      3992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3993,
    "end": 3994,
    "range": [
      3993,
      3994
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4007,
    "end": 4016,
    "range": [
      4007,
      4016
    ]
  },
  {
    "type": "Identifier",
    "value": "NonExportedInterfaceQ",
    "start": 4017,
    "end": 4038,
    "range": [
      4017,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4041,
    "end": 4042,
    "range": [
      4041,
      4042
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4051,
    "end": 4052,
    "range": [
      4051,
      4052
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4070,
    "end": 4076,
    "range": [
      4070,
      4076
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4077,
    "end": 4086,
    "range": [
      4077,
      4086
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceY",
    "start": 4087,
    "end": 4097,
    "range": [
      4087,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4098,
    "end": 4099,
    "range": [
      4098,
      4099
    ]
  },
  {
    "type": "Identifier",
    "value": "YisIn1_2",
    "start": 4100,
    "end": 4108,
    "range": [
      4100,
      4108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4108,
    "end": 4109,
    "range": [
      4108,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4129,
    "end": 4134,
    "range": [
      4129,
      4134
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 4135,
    "end": 4141,
    "range": [
      4135,
      4141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4152,
    "end": 4158,
    "range": [
      4152,
      4158
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn1",
    "start": 4159,
    "end": 4165,
    "range": [
      4159,
      4165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4165,
    "end": 4166,
    "range": [
      4165,
      4166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4166,
    "end": 4167,
    "range": [
      4166,
      4167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4170,
    "end": 4171,
    "range": [
      4170,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4176,
    "end": 4177,
    "range": [
      4176,
      4177
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4183,
    "end": 4192,
    "range": [
      4183,
      4192
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceY",
    "start": 4193,
    "end": 4203,
    "range": [
      4193,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Identifier",
    "value": "YisIn1",
    "start": 4214,
    "end": 4220,
    "range": [
      4214,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4222,
    "end": 4223,
    "range": [
      4222,
      4223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4239,
    "end": 4248,
    "range": [
      4239,
      4248
    ]
  },
  {
    "type": "Identifier",
    "value": "NotExportedModule",
    "start": 4249,
    "end": 4266,
    "range": [
      4249,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4267,
    "end": 4268,
    "range": [
      4267,
      4268
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4277,
    "end": 4283,
    "range": [
      4277,
      4283
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4284,
    "end": 4289,
    "range": [
      4284,
      4289
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 4290,
    "end": 4296,
    "range": [
      4290,
      4296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4297,
    "end": 4298,
    "range": [
      4297,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4310,
    "end": 4319,
    "range": [
      4310,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule2",
    "start": 4320,
    "end": 4335,
    "range": [
      4320,
      4335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4342,
    "end": 4348,
    "range": [
      4342,
      4348
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4349,
    "end": 4358,
    "range": [
      4349,
      4358
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule3",
    "start": 4359,
    "end": 4369,
    "range": [
      4359,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4380,
    "end": 4386,
    "range": [
      4380,
      4386
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4387,
    "end": 4392,
    "range": [
      4387,
      4392
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 4393,
    "end": 4399,
    "range": [
      4393,
      4399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4400,
    "end": 4401,
    "range": [
      4400,
      4401
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4414,
    "end": 4420,
    "range": [
      4414,
      4420
    ]
  },
  {
    "type": "Identifier",
    "value": "AisIn2_3",
    "start": 4421,
    "end": 4429,
    "range": [
      4421,
      4429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4430,
    "end": 4431,
    "range": [
      4430,
      4431
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4432,
    "end": 4433,
    "range": [
      4432,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4434,
    "end": 4435,
    "range": [
      4434,
      4435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4444,
    "end": 4445,
    "range": [
      4444,
      4445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  }
]
```
