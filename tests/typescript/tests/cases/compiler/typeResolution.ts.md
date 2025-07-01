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
          "start": 14,
          "end": 29
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
                  "start": 50,
                  "end": 60
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
                          "start": 85,
                          "end": 98
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
                                  "start": 126,
                                  "end": 132
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
                                        "start": 158,
                                        "end": 168
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
                                                          "start": 261,
                                                          "end": 267
                                                        },
                                                        "typeArguments": null,
                                                        "start": 261,
                                                        "end": 267
                                                      },
                                                      "start": 259,
                                                      "end": 267
                                                    },
                                                    "start": 257,
                                                    "end": 267
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 257,
                                                  "end": 267
                                                }
                                              ],
                                              "declare": false,
                                              "start": 253,
                                              "end": 268
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
                                                    "start": 269,
                                                    "end": 271
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 272,
                                                    "end": 282
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 269,
                                                  "end": 282
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 269,
                                                "end": 284
                                              },
                                              "directive": null,
                                              "start": 269,
                                              "end": 285
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
                                                            "start": 314,
                                                            "end": 327
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 328,
                                                            "end": 334
                                                          },
                                                          "start": 314,
                                                          "end": 334
                                                        },
                                                        "typeArguments": null,
                                                        "start": 314,
                                                        "end": 334
                                                      },
                                                      "start": 312,
                                                      "end": 334
                                                    },
                                                    "start": 310,
                                                    "end": 334
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 310,
                                                  "end": 334
                                                }
                                              ],
                                              "declare": false,
                                              "start": 306,
                                              "end": 335
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
                                                    "start": 336,
                                                    "end": 338
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 339,
                                                    "end": 349
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 336,
                                                  "end": 349
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 336,
                                                "end": 351
                                              },
                                              "directive": null,
                                              "start": 336,
                                              "end": 352
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
                                                              "start": 381,
                                                              "end": 391
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 392,
                                                              "end": 405
                                                            },
                                                            "start": 381,
                                                            "end": 405
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 406,
                                                            "end": 412
                                                          },
                                                          "start": 381,
                                                          "end": 412
                                                        },
                                                        "typeArguments": null,
                                                        "start": 381,
                                                        "end": 412
                                                      },
                                                      "start": 379,
                                                      "end": 412
                                                    },
                                                    "start": 377,
                                                    "end": 412
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 377,
                                                  "end": 412
                                                }
                                              ],
                                              "declare": false,
                                              "start": 373,
                                              "end": 413
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
                                                    "start": 414,
                                                    "end": 416
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 417,
                                                    "end": 427
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 414,
                                                  "end": 427
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 414,
                                                "end": 429
                                              },
                                              "directive": null,
                                              "start": 414,
                                              "end": 430
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
                                                                "start": 459,
                                                                "end": 474
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 475,
                                                                "end": 485
                                                              },
                                                              "start": 459,
                                                              "end": 485
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 486,
                                                              "end": 499
                                                            },
                                                            "start": 459,
                                                            "end": 499
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 500,
                                                            "end": 506
                                                          },
                                                          "start": 459,
                                                          "end": 506
                                                        },
                                                        "typeArguments": null,
                                                        "start": 459,
                                                        "end": 506
                                                      },
                                                      "start": 457,
                                                      "end": 506
                                                    },
                                                    "start": 455,
                                                    "end": 506
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 455,
                                                  "end": 506
                                                }
                                              ],
                                              "declare": false,
                                              "start": 451,
                                              "end": 507
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
                                                    "start": 508,
                                                    "end": 510
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 511,
                                                    "end": 521
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 508,
                                                  "end": 521
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 508,
                                                "end": 523
                                              },
                                              "directive": null,
                                              "start": 508,
                                              "end": 524
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
                                                          "start": 636,
                                                          "end": 642
                                                        },
                                                        "typeArguments": null,
                                                        "start": 636,
                                                        "end": 642
                                                      },
                                                      "start": 634,
                                                      "end": 642
                                                    },
                                                    "start": 632,
                                                    "end": 642
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 632,
                                                  "end": 642
                                                }
                                              ],
                                              "declare": false,
                                              "start": 628,
                                              "end": 643
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
                                                    "start": 644,
                                                    "end": 646
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 647,
                                                    "end": 657
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 644,
                                                  "end": 657
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 644,
                                                "end": 659
                                              },
                                              "directive": null,
                                              "start": 644,
                                              "end": 660
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
                                                                "start": 689,
                                                                "end": 704
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 705,
                                                                "end": 715
                                                              },
                                                              "start": 689,
                                                              "end": 715
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 716,
                                                              "end": 729
                                                            },
                                                            "start": 689,
                                                            "end": 729
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassB",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 730,
                                                            "end": 736
                                                          },
                                                          "start": 689,
                                                          "end": 736
                                                        },
                                                        "typeArguments": null,
                                                        "start": 689,
                                                        "end": 736
                                                      },
                                                      "start": 687,
                                                      "end": 736
                                                    },
                                                    "start": 685,
                                                    "end": 736
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 685,
                                                  "end": 736
                                                }
                                              ],
                                              "declare": false,
                                              "start": 681,
                                              "end": 737
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
                                                    "start": 738,
                                                    "end": 740
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 741,
                                                    "end": 751
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 738,
                                                  "end": 751
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 738,
                                                "end": 753
                                              },
                                              "directive": null,
                                              "start": 738,
                                              "end": 754
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
                                                                "start": 862,
                                                                "end": 877
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule2",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 878,
                                                                "end": 888
                                                              },
                                                              "start": 862,
                                                              "end": 888
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule2",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 889,
                                                              "end": 902
                                                            },
                                                            "start": 862,
                                                            "end": 902
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 903,
                                                            "end": 909
                                                          },
                                                          "start": 862,
                                                          "end": 909
                                                        },
                                                        "typeArguments": null,
                                                        "start": 862,
                                                        "end": 909
                                                      },
                                                      "start": 860,
                                                      "end": 909
                                                    },
                                                    "start": 858,
                                                    "end": 909
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 858,
                                                  "end": 909
                                                }
                                              ],
                                              "declare": false,
                                              "start": 854,
                                              "end": 910
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
                                                    "start": 911,
                                                    "end": 913
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_2_2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 914,
                                                    "end": 924
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 911,
                                                  "end": 924
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 911,
                                                "end": 926
                                              },
                                              "directive": null,
                                              "start": 911,
                                              "end": 927
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
                                                          "start": 1020,
                                                          "end": 1030
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1020,
                                                        "end": 1030
                                                      },
                                                      "start": 1018,
                                                      "end": 1030
                                                    },
                                                    "start": 1016,
                                                    "end": 1030
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1016,
                                                  "end": 1030
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1012,
                                              "end": 1031
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
                                                    "start": 1032,
                                                    "end": 1034
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1035,
                                                    "end": 1045
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1032,
                                                  "end": 1045
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1032,
                                                "end": 1047
                                              },
                                              "directive": null,
                                              "start": 1032,
                                              "end": 1048
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
                                                            "start": 1077,
                                                            "end": 1090
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "InterfaceX",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1091,
                                                            "end": 1101
                                                          },
                                                          "start": 1077,
                                                          "end": 1101
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1077,
                                                        "end": 1101
                                                      },
                                                      "start": 1075,
                                                      "end": 1101
                                                    },
                                                    "start": 1073,
                                                    "end": 1101
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1073,
                                                  "end": 1101
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1069,
                                              "end": 1102
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
                                                    "start": 1103,
                                                    "end": 1105
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1106,
                                                    "end": 1116
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1103,
                                                  "end": 1116
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1103,
                                                "end": 1118
                                              },
                                              "directive": null,
                                              "start": 1103,
                                              "end": 1119
                                            }
                                          ],
                                          "start": 171,
                                          "end": 1137
                                        },
                                        "expression": false,
                                        "start": 168,
                                        "end": 1137
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 151,
                                      "end": 1137
                                    }
                                  ],
                                  "start": 133,
                                  "end": 1151
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 120,
                                "end": 1151
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 113,
                              "end": 1151
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
                                  "start": 1177,
                                  "end": 1183
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
                                        "start": 1209,
                                        "end": 1219
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
                                                          "start": 1401,
                                                          "end": 1407
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1401,
                                                        "end": 1407
                                                      },
                                                      "start": 1399,
                                                      "end": 1407
                                                    },
                                                    "start": 1397,
                                                    "end": 1407
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1397,
                                                  "end": 1407
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1393,
                                              "end": 1408
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
                                                    "start": 1409,
                                                    "end": 1411
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1412,
                                                    "end": 1422
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1409,
                                                  "end": 1422
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1409,
                                                "end": 1424
                                              },
                                              "directive": null,
                                              "start": 1409,
                                              "end": 1425
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
                                                            "start": 1454,
                                                            "end": 1467
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1468,
                                                            "end": 1474
                                                          },
                                                          "start": 1454,
                                                          "end": 1474
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1454,
                                                        "end": 1474
                                                      },
                                                      "start": 1452,
                                                      "end": 1474
                                                    },
                                                    "start": 1450,
                                                    "end": 1474
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1450,
                                                  "end": 1474
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1446,
                                              "end": 1475
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
                                                    "start": 1476,
                                                    "end": 1478
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1479,
                                                    "end": 1489
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1476,
                                                  "end": 1489
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1476,
                                                "end": 1491
                                              },
                                              "directive": null,
                                              "start": 1476,
                                              "end": 1492
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
                                                              "start": 1521,
                                                              "end": 1531
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1532,
                                                              "end": 1545
                                                            },
                                                            "start": 1521,
                                                            "end": 1545
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1546,
                                                            "end": 1552
                                                          },
                                                          "start": 1521,
                                                          "end": 1552
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1521,
                                                        "end": 1552
                                                      },
                                                      "start": 1519,
                                                      "end": 1552
                                                    },
                                                    "start": 1517,
                                                    "end": 1552
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1517,
                                                  "end": 1552
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1513,
                                              "end": 1553
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
                                                    "start": 1554,
                                                    "end": 1556
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1557,
                                                    "end": 1567
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1554,
                                                  "end": 1567
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1554,
                                                "end": 1569
                                              },
                                              "directive": null,
                                              "start": 1554,
                                              "end": 1570
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
                                                                "start": 1599,
                                                                "end": 1614
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1615,
                                                                "end": 1625
                                                              },
                                                              "start": 1599,
                                                              "end": 1625
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1626,
                                                              "end": 1639
                                                            },
                                                            "start": 1599,
                                                            "end": 1639
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1640,
                                                            "end": 1646
                                                          },
                                                          "start": 1599,
                                                          "end": 1646
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1599,
                                                        "end": 1646
                                                      },
                                                      "start": 1597,
                                                      "end": 1646
                                                    },
                                                    "start": 1595,
                                                    "end": 1646
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1595,
                                                  "end": 1646
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1591,
                                              "end": 1647
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
                                                    "start": 1648,
                                                    "end": 1650
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1651,
                                                    "end": 1661
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1648,
                                                  "end": 1661
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1648,
                                                "end": 1663
                                              },
                                              "directive": null,
                                              "start": 1648,
                                              "end": 1664
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
                                                          "start": 1776,
                                                          "end": 1782
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1776,
                                                        "end": 1782
                                                      },
                                                      "start": 1774,
                                                      "end": 1782
                                                    },
                                                    "start": 1772,
                                                    "end": 1782
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1772,
                                                  "end": 1782
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1768,
                                              "end": 1783
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
                                                    "start": 1784,
                                                    "end": 1786
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1787,
                                                    "end": 1797
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1784,
                                                  "end": 1797
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1784,
                                                "end": 1799
                                              },
                                              "directive": null,
                                              "start": 1784,
                                              "end": 1800
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
                                                                "start": 1829,
                                                                "end": 1844
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule1",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1845,
                                                                "end": 1855
                                                              },
                                                              "start": 1829,
                                                              "end": 1855
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule1",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1856,
                                                              "end": 1869
                                                            },
                                                            "start": 1829,
                                                            "end": 1869
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassB",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1870,
                                                            "end": 1876
                                                          },
                                                          "start": 1829,
                                                          "end": 1876
                                                        },
                                                        "typeArguments": null,
                                                        "start": 1829,
                                                        "end": 1876
                                                      },
                                                      "start": 1827,
                                                      "end": 1876
                                                    },
                                                    "start": 1825,
                                                    "end": 1876
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1825,
                                                  "end": 1876
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1821,
                                              "end": 1877
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
                                                    "start": 1878,
                                                    "end": 1880
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "BisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1881,
                                                    "end": 1891
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1878,
                                                  "end": 1891
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 1878,
                                                "end": 1893
                                              },
                                              "directive": null,
                                              "start": 1878,
                                              "end": 1894
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
                                                                "start": 2002,
                                                                "end": 2017
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "SubModule2",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2018,
                                                                "end": 2028
                                                              },
                                                              "start": 2002,
                                                              "end": 2028
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubSubModule2",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2029,
                                                              "end": 2042
                                                            },
                                                            "start": 2002,
                                                            "end": 2042
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2043,
                                                            "end": 2049
                                                          },
                                                          "start": 2002,
                                                          "end": 2049
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2002,
                                                        "end": 2049
                                                      },
                                                      "start": 2000,
                                                      "end": 2049
                                                    },
                                                    "start": 1998,
                                                    "end": 2049
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 1998,
                                                  "end": 2049
                                                }
                                              ],
                                              "declare": false,
                                              "start": 1994,
                                              "end": 2050
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
                                                    "start": 2051,
                                                    "end": 2053
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn1_2_2",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2054,
                                                    "end": 2064
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2051,
                                                  "end": 2064
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2051,
                                                "end": 2066
                                              },
                                              "directive": null,
                                              "start": 2051,
                                              "end": 2067
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
                                                              "start": 2096,
                                                              "end": 2111
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "SubModule3",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 2112,
                                                              "end": 2122
                                                            },
                                                            "start": 2096,
                                                            "end": 2122
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ClassA",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2123,
                                                            "end": 2129
                                                          },
                                                          "start": 2096,
                                                          "end": 2129
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2096,
                                                        "end": 2129
                                                      },
                                                      "start": 2094,
                                                      "end": 2129
                                                    },
                                                    "start": 2092,
                                                    "end": 2129
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2092,
                                                  "end": 2129
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2088,
                                              "end": 2130
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
                                                    "start": 2131,
                                                    "end": 2133
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "AisIn2_3",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2134,
                                                    "end": 2142
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2131,
                                                  "end": 2142
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2131,
                                                "end": 2144
                                              },
                                              "directive": null,
                                              "start": 2131,
                                              "end": 2145
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
                                                          "start": 2238,
                                                          "end": 2248
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2238,
                                                        "end": 2248
                                                      },
                                                      "start": 2236,
                                                      "end": 2248
                                                    },
                                                    "start": 2234,
                                                    "end": 2248
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2234,
                                                  "end": 2248
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2230,
                                              "end": 2249
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
                                                    "start": 2250,
                                                    "end": 2252
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2253,
                                                    "end": 2263
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2250,
                                                  "end": 2263
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2250,
                                                "end": 2265
                                              },
                                              "directive": null,
                                              "start": 2250,
                                              "end": 2266
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
                                                            "start": 2295,
                                                            "end": 2308
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "InterfaceX",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 2309,
                                                            "end": 2319
                                                          },
                                                          "start": 2295,
                                                          "end": 2319
                                                        },
                                                        "typeArguments": null,
                                                        "start": 2295,
                                                        "end": 2319
                                                      },
                                                      "start": 2293,
                                                      "end": 2319
                                                    },
                                                    "start": 2291,
                                                    "end": 2319
                                                  },
                                                  "init": null,
                                                  "definite": false,
                                                  "start": 2291,
                                                  "end": 2319
                                                }
                                              ],
                                              "declare": false,
                                              "start": 2287,
                                              "end": 2320
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
                                                    "start": 2321,
                                                    "end": 2323
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "XisIn1_1_1",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2324,
                                                    "end": 2334
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2321,
                                                  "end": 2334
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "optional": false,
                                                "start": 2321,
                                                "end": 2336
                                              },
                                              "directive": null,
                                              "start": 2321,
                                              "end": 2337
                                            }
                                          ],
                                          "start": 1222,
                                          "end": 2355
                                        },
                                        "expression": false,
                                        "start": 1219,
                                        "end": 2355
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 1202,
                                      "end": 2355
                                    }
                                  ],
                                  "start": 1184,
                                  "end": 2369
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 1171,
                                "end": 2369
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 1164,
                              "end": 2369
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
                                  "start": 2399,
                                  "end": 2409
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
                                        "start": 2412,
                                        "end": 2422
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
                                      "start": 2412,
                                      "end": 2425
                                    }
                                  ],
                                  "start": 2410,
                                  "end": 2427
                                },
                                "declare": false,
                                "start": 2389,
                                "end": 2427
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "type",
                              "attributes": [],
                              "start": 2382,
                              "end": 2427
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
                                "start": 2446,
                                "end": 2463
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
                                      "start": 2482,
                                      "end": 2493
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
                                              "start": 2527,
                                              "end": 2529
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
                                                                    "start": 2630,
                                                                    "end": 2645
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "SubModule1",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2646,
                                                                    "end": 2656
                                                                  },
                                                                  "start": 2630,
                                                                  "end": 2656
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubSubModule1",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2657,
                                                                  "end": 2670
                                                                },
                                                                "start": 2630,
                                                                "end": 2670
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2671,
                                                                "end": 2677
                                                              },
                                                              "start": 2630,
                                                              "end": 2677
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2630,
                                                            "end": 2677
                                                          },
                                                          "start": 2628,
                                                          "end": 2677
                                                        },
                                                        "start": 2626,
                                                        "end": 2677
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2626,
                                                      "end": 2677
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2622,
                                                  "end": 2678
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
                                                        "start": 2679,
                                                        "end": 2681
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn1_1_1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2682,
                                                        "end": 2692
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2679,
                                                      "end": 2692
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2679,
                                                    "end": 2694
                                                  },
                                                  "directive": null,
                                                  "start": 2679,
                                                  "end": 2695
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
                                                                    "start": 2728,
                                                                    "end": 2743
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "SubModule2",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 2744,
                                                                    "end": 2754
                                                                  },
                                                                  "start": 2728,
                                                                  "end": 2754
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubSubModule2",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2755,
                                                                  "end": 2768
                                                                },
                                                                "start": 2728,
                                                                "end": 2768
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2769,
                                                                "end": 2775
                                                              },
                                                              "start": 2728,
                                                              "end": 2775
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2728,
                                                            "end": 2775
                                                          },
                                                          "start": 2726,
                                                          "end": 2775
                                                        },
                                                        "start": 2724,
                                                        "end": 2775
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2724,
                                                      "end": 2775
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2720,
                                                  "end": 2776
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
                                                        "start": 2777,
                                                        "end": 2779
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn1_2_2",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2780,
                                                        "end": 2790
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2777,
                                                      "end": 2790
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2777,
                                                    "end": 2792
                                                  },
                                                  "directive": null,
                                                  "start": 2777,
                                                  "end": 2793
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
                                                              "start": 2826,
                                                              "end": 2836
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2826,
                                                            "end": 2836
                                                          },
                                                          "start": 2824,
                                                          "end": 2836
                                                        },
                                                        "start": 2822,
                                                        "end": 2836
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2822,
                                                      "end": 2836
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2818,
                                                  "end": 2837
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
                                                        "start": 2838,
                                                        "end": 2840
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "XisIn1_1_1",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2841,
                                                        "end": 2851
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2838,
                                                      "end": 2851
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2838,
                                                    "end": 2853
                                                  },
                                                  "directive": null,
                                                  "start": 2838,
                                                  "end": 2854
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
                                                                  "start": 2887,
                                                                  "end": 2902
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "SubModule3",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 2903,
                                                                  "end": 2913
                                                                },
                                                                "start": 2887,
                                                                "end": 2913
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ClassA",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 2914,
                                                                "end": 2920
                                                              },
                                                              "start": 2887,
                                                              "end": 2920
                                                            },
                                                            "typeArguments": null,
                                                            "start": 2887,
                                                            "end": 2920
                                                          },
                                                          "start": 2885,
                                                          "end": 2920
                                                        },
                                                        "start": 2883,
                                                        "end": 2920
                                                      },
                                                      "init": null,
                                                      "definite": false,
                                                      "start": 2883,
                                                      "end": 2920
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 2879,
                                                  "end": 2921
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
                                                        "start": 2922,
                                                        "end": 2924
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "AisIn2_3",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 2925,
                                                        "end": 2933
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 2922,
                                                      "end": 2933
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [],
                                                    "optional": false,
                                                    "start": 2922,
                                                    "end": 2935
                                                  },
                                                  "directive": null,
                                                  "start": 2922,
                                                  "end": 2936
                                                }
                                              ],
                                              "start": 2532,
                                              "end": 2958
                                            },
                                            "expression": false,
                                            "start": 2518,
                                            "end": 2958
                                          }
                                        ],
                                        "start": 2496,
                                        "end": 2976
                                      },
                                      "expression": false,
                                      "start": 2493,
                                      "end": 2976
                                    },
                                    "kind": "constructor",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 2482,
                                    "end": 2976
                                  }
                                ],
                                "start": 2464,
                                "end": 2990
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 2440,
                              "end": 2990
                            }
                          ],
                          "start": 99,
                          "end": 3000
                        },
                        "kind": "module",
                        "declare": false,
                        "global": false,
                        "start": 78,
                        "end": 3000
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 71,
                      "end": 3000
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
                        "start": 3107,
                        "end": 3113
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
                              "start": 3128,
                              "end": 3139
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
                                      "start": 3169,
                                      "end": 3171
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
                                                        "start": 3204,
                                                        "end": 3217
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3218,
                                                        "end": 3224
                                                      },
                                                      "start": 3204,
                                                      "end": 3224
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3204,
                                                    "end": 3224
                                                  },
                                                  "start": 3202,
                                                  "end": 3224
                                                },
                                                "start": 3200,
                                                "end": 3224
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3200,
                                              "end": 3224
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3196,
                                          "end": 3225
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
                                                "start": 3226,
                                                "end": 3228
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3229,
                                                "end": 3239
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3226,
                                              "end": 3239
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3226,
                                            "end": 3241
                                          },
                                          "directive": null,
                                          "start": 3226,
                                          "end": 3242
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
                                                          "start": 3271,
                                                          "end": 3281
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "SubSubModule1",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 3282,
                                                          "end": 3295
                                                        },
                                                        "start": 3271,
                                                        "end": 3295
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3296,
                                                        "end": 3302
                                                      },
                                                      "start": 3271,
                                                      "end": 3302
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3271,
                                                    "end": 3302
                                                  },
                                                  "start": 3269,
                                                  "end": 3302
                                                },
                                                "start": 3267,
                                                "end": 3302
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3267,
                                              "end": 3302
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3263,
                                          "end": 3303
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
                                                "start": 3304,
                                                "end": 3306
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3307,
                                                "end": 3317
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3304,
                                              "end": 3317
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3304,
                                            "end": 3319
                                          },
                                          "directive": null,
                                          "start": 3304,
                                          "end": 3320
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
                                                            "start": 3349,
                                                            "end": 3364
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "SubModule1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 3365,
                                                            "end": 3375
                                                          },
                                                          "start": 3349,
                                                          "end": 3375
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "SubSubModule1",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 3376,
                                                          "end": 3389
                                                        },
                                                        "start": 3349,
                                                        "end": 3389
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ClassA",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3390,
                                                        "end": 3396
                                                      },
                                                      "start": 3349,
                                                      "end": 3396
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3349,
                                                    "end": 3396
                                                  },
                                                  "start": 3347,
                                                  "end": 3396
                                                },
                                                "start": 3345,
                                                "end": 3396
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3345,
                                              "end": 3396
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3341,
                                          "end": 3397
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
                                                "start": 3398,
                                                "end": 3400
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "AisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3401,
                                                "end": 3411
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3398,
                                              "end": 3411
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3398,
                                            "end": 3413
                                          },
                                          "directive": null,
                                          "start": 3398,
                                          "end": 3414
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
                                                        "start": 3507,
                                                        "end": 3520
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "InterfaceX",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3521,
                                                        "end": 3531
                                                      },
                                                      "start": 3507,
                                                      "end": 3531
                                                    },
                                                    "typeArguments": null,
                                                    "start": 3507,
                                                    "end": 3531
                                                  },
                                                  "start": 3505,
                                                  "end": 3531
                                                },
                                                "start": 3503,
                                                "end": 3531
                                              },
                                              "init": null,
                                              "definite": false,
                                              "start": 3503,
                                              "end": 3531
                                            }
                                          ],
                                          "declare": false,
                                          "start": 3499,
                                          "end": 3532
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
                                                "start": 3533,
                                                "end": 3535
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "XisIn1_1_1",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3536,
                                                "end": 3546
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3533,
                                              "end": 3546
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 3533,
                                            "end": 3548
                                          },
                                          "directive": null,
                                          "start": 3533,
                                          "end": 3549
                                        }
                                      ],
                                      "start": 3174,
                                      "end": 3567
                                    },
                                    "expression": false,
                                    "start": 3160,
                                    "end": 3567
                                  }
                                ],
                                "start": 3142,
                                "end": 3581
                              },
                              "expression": false,
                              "start": 3139,
                              "end": 3581
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 3128,
                            "end": 3581
                          }
                        ],
                        "start": 3114,
                        "end": 3591
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3101,
                      "end": 3591
                    }
                  ],
                  "start": 61,
                  "end": 3597
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 43,
                "end": 3597
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 36,
              "end": 3597
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
                  "start": 3617,
                  "end": 3627
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
                          "start": 3652,
                          "end": 3665
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
                                  "start": 3767,
                                  "end": 3773
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
                                        "start": 3783,
                                        "end": 3793
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
                                          "start": 3796,
                                          "end": 3799
                                        },
                                        "expression": false,
                                        "start": 3793,
                                        "end": 3799
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3776,
                                      "end": 3799
                                    }
                                  ],
                                  "start": 3774,
                                  "end": 3801
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3761,
                                "end": 3801
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3754,
                              "end": 3801
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
                                  "start": 3827,
                                  "end": 3833
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
                                        "start": 3843,
                                        "end": 3853
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
                                          "start": 3856,
                                          "end": 3859
                                        },
                                        "expression": false,
                                        "start": 3853,
                                        "end": 3859
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3836,
                                      "end": 3859
                                    }
                                  ],
                                  "start": 3834,
                                  "end": 3861
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3821,
                                "end": 3861
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3814,
                              "end": 3861
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
                                  "start": 3887,
                                  "end": 3893
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
                                        "start": 3903,
                                        "end": 3913
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
                                          "start": 3916,
                                          "end": 3919
                                        },
                                        "expression": false,
                                        "start": 3913,
                                        "end": 3919
                                      },
                                      "kind": "method",
                                      "computed": false,
                                      "static": false,
                                      "override": false,
                                      "optional": false,
                                      "accessibility": "public",
                                      "start": 3896,
                                      "end": 3919
                                    }
                                  ],
                                  "start": 3894,
                                  "end": 3921
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 3881,
                                "end": 3921
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "value",
                              "attributes": [],
                              "start": 3874,
                              "end": 3921
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
                                  "start": 3951,
                                  "end": 3961
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
                                        "start": 3964,
                                        "end": 3974
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
                                      "start": 3964,
                                      "end": 3977
                                    }
                                  ],
                                  "start": 3962,
                                  "end": 3979
                                },
                                "declare": false,
                                "start": 3941,
                                "end": 3979
                              },
                              "specifiers": [],
                              "source": null,
                              "exportKind": "type",
                              "attributes": [],
                              "start": 3934,
                              "end": 3979
                            },
                            {
                              "type": "TSInterfaceDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NonExportedInterfaceQ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4002,
                                "end": 4023
                              },
                              "typeParameters": null,
                              "extends": [],
                              "body": {
                                "type": "TSInterfaceBody",
                                "body": [],
                                "start": 4024,
                                "end": 4027
                              },
                              "declare": false,
                              "start": 3992,
                              "end": 4027
                            }
                          ],
                          "start": 3666,
                          "end": 4037
                        },
                        "kind": "module",
                        "declare": false,
                        "global": false,
                        "start": 3645,
                        "end": 4037
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 3638,
                      "end": 4037
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
                          "start": 4072,
                          "end": 4082
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
                                "start": 4085,
                                "end": 4093
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
                              "start": 4085,
                              "end": 4096
                            }
                          ],
                          "start": 4083,
                          "end": 4098
                        },
                        "declare": false,
                        "start": 4062,
                        "end": 4098
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 4055,
                      "end": 4098
                    }
                  ],
                  "start": 3628,
                  "end": 4104
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 3610,
                "end": 4104
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3603,
              "end": 4104
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
                "start": 4120,
                "end": 4126
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
                      "start": 4144,
                      "end": 4150
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
                        "start": 4153,
                        "end": 4156
                      },
                      "expression": false,
                      "start": 4150,
                      "end": 4156
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4137,
                    "end": 4156
                  }
                ],
                "start": 4127,
                "end": 4162
              },
              "abstract": false,
              "declare": false,
              "start": 4114,
              "end": 4162
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceY",
                "optional": false,
                "typeAnnotation": null,
                "start": 4178,
                "end": 4188
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
                      "start": 4199,
                      "end": 4205
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
                    "start": 4199,
                    "end": 4208
                  }
                ],
                "start": 4189,
                "end": 4214
              },
              "declare": false,
              "start": 4168,
              "end": 4214
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NotExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 4231,
                "end": 4248
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
                        "start": 4272,
                        "end": 4278
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 4279,
                        "end": 4282
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 4266,
                      "end": 4282
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 4259,
                    "end": 4282
                  }
                ],
                "start": 4249,
                "end": 4288
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 4224,
              "end": 4288
            }
          ],
          "start": 30,
          "end": 4290
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 4290
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 4290
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelModule2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4299,
        "end": 4314
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
                "start": 4335,
                "end": 4345
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
                        "start": 4369,
                        "end": 4375
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
                              "start": 4397,
                              "end": 4405
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
                                "start": 4408,
                                "end": 4411
                              },
                              "expression": false,
                              "start": 4405,
                              "end": 4411
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 4390,
                            "end": 4411
                          }
                        ],
                        "start": 4376,
                        "end": 4421
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 4363,
                      "end": 4421
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 4356,
                    "end": 4421
                  }
                ],
                "start": 4346,
                "end": 4427
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 4328,
              "end": 4427
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4321,
            "end": 4427
          }
        ],
        "start": 4315,
        "end": 4429
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4292,
      "end": 4429
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4430
}
```
