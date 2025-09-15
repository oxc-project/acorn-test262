__ESTREE_TEST__:PASS:
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
