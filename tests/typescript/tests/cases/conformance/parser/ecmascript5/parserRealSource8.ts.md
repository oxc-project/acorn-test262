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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 231
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
                "name": "AssignScopeContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 270
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
                      "start": 281,
                      "end": 292
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
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ScopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 313,
                                  "end": 323
                                },
                                "typeArguments": null,
                                "start": 313,
                                "end": 323
                              },
                              "start": 311,
                              "end": 323
                            },
                            "start": 301,
                            "end": 323
                          },
                          "readonly": false,
                          "static": false,
                          "start": 294,
                          "end": 323
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "typeFlow",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TypeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 363,
                                  "end": 371
                                },
                                "typeArguments": null,
                                "start": 363,
                                "end": 371
                              },
                              "start": 361,
                              "end": 371
                            },
                            "start": 353,
                            "end": 371
                          },
                          "readonly": false,
                          "static": false,
                          "start": 346,
                          "end": 371
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "modDeclChain",
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
                                    "name": "ModuleDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 415,
                                    "end": 432
                                  },
                                  "typeArguments": null,
                                  "start": 415,
                                  "end": 432
                                },
                                "start": 415,
                                "end": 434
                              },
                              "start": 413,
                              "end": 434
                            },
                            "start": 401,
                            "end": 434
                          },
                          "readonly": false,
                          "static": false,
                          "start": 394,
                          "end": 434
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 436,
                        "end": 447
                      },
                      "expression": false,
                      "start": 293,
                      "end": 447
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 281,
                    "end": 447
                  }
                ],
                "start": 271,
                "end": 453
              },
              "abstract": false,
              "declare": false,
              "start": 246,
              "end": 453
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 239,
            "end": 453
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "pushAssignScope",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 490
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "scope",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SymbolScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 498,
                      "end": 509
                    },
                    "start": 496,
                    "end": 509
                  },
                  "start": 491,
                  "end": 509
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 528,
                        "end": 546
                      },
                      "typeArguments": null,
                      "start": 528,
                      "end": 546
                    },
                    "start": 526,
                    "end": 546
                  },
                  "start": 519,
                  "end": 546
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 562,
                        "end": 566
                      },
                      "typeArguments": null,
                      "start": 562,
                      "end": 566
                    },
                    "start": 560,
                    "end": 566
                  },
                  "start": 556,
                  "end": 566
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 591
                      },
                      "typeArguments": null,
                      "start": 587,
                      "end": 591
                    },
                    "start": 585,
                    "end": 591
                  },
                  "start": 576,
                  "end": 591
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fnc",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FuncDecl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 606,
                        "end": 614
                      },
                      "typeArguments": null,
                      "start": 606,
                      "end": 614
                    },
                    "start": 604,
                    "end": 614
                  },
                  "start": 601,
                  "end": 614
                }
              ],
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
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 631,
                          "end": 636
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 653
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 654,
                              "end": 658
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 660,
                                "end": 667
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 668,
                                "end": 678
                              },
                              "optional": false,
                              "computed": false,
                              "start": 660,
                              "end": 678
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 680,
                              "end": 685
                            }
                          ],
                          "start": 639,
                          "end": 686
                        },
                        "definite": false,
                        "start": 631,
                        "end": 686
                      }
                    ],
                    "declare": false,
                    "start": 627,
                    "end": 687
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
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 696,
                          "end": 701
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 702,
                          "end": 710
                        },
                        "optional": false,
                        "computed": false,
                        "start": 696,
                        "end": 710
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 717
                      },
                      "start": 696,
                      "end": 717
                    },
                    "directive": null,
                    "start": 696,
                    "end": 718
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
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "classType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 742
                        },
                        "optional": false,
                        "computed": false,
                        "start": 727,
                        "end": 742
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "classType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 745,
                        "end": 754
                      },
                      "start": 727,
                      "end": 754
                    },
                    "directive": null,
                    "start": 727,
                    "end": 755
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
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 769
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fnc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 770,
                          "end": 773
                        },
                        "optional": false,
                        "computed": false,
                        "start": 764,
                        "end": 773
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fnc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 779
                      },
                      "start": 764,
                      "end": 779
                    },
                    "directive": null,
                    "start": 764,
                    "end": 780
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
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 796
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 797,
                          "end": 807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 789,
                        "end": 807
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chain",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 815
                      },
                      "start": 789,
                      "end": 815
                    },
                    "directive": null,
                    "start": 789,
                    "end": 816
                  }
                ],
                "start": 616,
                "end": 822
              },
              "expression": false,
              "start": 466,
              "end": 822
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 459,
            "end": 822
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "popAssignScope",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 858
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 886
                      },
                      "typeArguments": null,
                      "start": 868,
                      "end": 886
                    },
                    "start": 866,
                    "end": 886
                  },
                  "start": 859,
                  "end": 886
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 898,
                          "end": 905
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 906,
                          "end": 916
                        },
                        "optional": false,
                        "computed": false,
                        "start": 898,
                        "end": 916
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 926
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 937
                          },
                          "optional": false,
                          "computed": false,
                          "start": 919,
                          "end": 937
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "previous",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 938,
                          "end": 946
                        },
                        "optional": false,
                        "computed": false,
                        "start": 919,
                        "end": 946
                      },
                      "start": 898,
                      "end": 946
                    },
                    "directive": null,
                    "start": 898,
                    "end": 947
                  }
                ],
                "start": 888,
                "end": 953
              },
              "expression": false,
              "start": 835,
              "end": 953
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 828,
            "end": 953
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceCompare",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 990
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 994,
                        "end": 1000
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 1000
                    },
                    "start": 992,
                    "end": 1000
                  },
                  "start": 991,
                  "end": 1000
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1005,
                        "end": 1011
                      },
                      "typeArguments": null,
                      "start": 1005,
                      "end": 1011
                    },
                    "start": 1003,
                    "end": 1011
                  },
                  "start": 1002,
                  "end": 1011
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1029,
                          "end": 1030
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1034,
                          "end": 1038
                        },
                        "start": 1029,
                        "end": 1038
                      },
                      "operator": "||",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1045,
                              "end": 1046
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isInstanceProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1047,
                              "end": 1065
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1045,
                            "end": 1065
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1045,
                          "end": 1067
                        },
                        "prefix": true,
                        "start": 1044,
                        "end": 1067
                      },
                      "start": 1028,
                      "end": 1068
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1092,
                            "end": 1093
                          },
                          "start": 1085,
                          "end": 1094
                        }
                      ],
                      "start": 1071,
                      "end": 1104
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1139,
                            "end": 1140
                          },
                          "start": 1132,
                          "end": 1141
                        }
                      ],
                      "start": 1118,
                      "end": 1151
                    },
                    "start": 1023,
                    "end": 1151
                  }
                ],
                "start": 1013,
                "end": 1157
              },
              "expression": false,
              "start": 966,
              "end": 1157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 959,
            "end": 1157
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceFilterStop",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1197
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1207
                      },
                      "typeArguments": null,
                      "start": 1201,
                      "end": 1207
                    },
                    "start": 1199,
                    "end": 1207
                  },
                  "start": 1198,
                  "end": 1207
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1226,
                          "end": 1227
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isInstanceProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1228,
                          "end": 1246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1226,
                        "end": 1246
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1226,
                      "end": 1248
                    },
                    "start": 1219,
                    "end": 1249
                  }
                ],
                "start": 1209,
                "end": 1255
              },
              "expression": false,
              "start": 1170,
              "end": 1255
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1163,
            "end": 1255
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ScopeSearchFilter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1291
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
                      "start": 1303,
                      "end": 1314
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
                            "name": "select",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1335,
                                          "end": 1341
                                        },
                                        "typeArguments": null,
                                        "start": 1335,
                                        "end": 1341
                                      },
                                      "start": 1333,
                                      "end": 1341
                                    },
                                    "start": 1332,
                                    "end": 1341
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1346,
                                          "end": 1352
                                        },
                                        "typeArguments": null,
                                        "start": 1346,
                                        "end": 1352
                                      },
                                      "start": 1344,
                                      "end": 1352
                                    },
                                    "start": 1343,
                                    "end": 1352
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1356,
                                      "end": 1362
                                    },
                                    "typeArguments": null,
                                    "start": 1356,
                                    "end": 1362
                                  },
                                  "start": 1354,
                                  "end": 1362
                                },
                                "start": 1331,
                                "end": 1362
                              },
                              "start": 1329,
                              "end": 1362
                            },
                            "start": 1323,
                            "end": 1362
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1316,
                          "end": 1362
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stop",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1409,
                                          "end": 1415
                                        },
                                        "typeArguments": null,
                                        "start": 1409,
                                        "end": 1415
                                      },
                                      "start": 1407,
                                      "end": 1415
                                    },
                                    "start": 1406,
                                    "end": 1415
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1419,
                                    "end": 1426
                                  },
                                  "start": 1417,
                                  "end": 1426
                                },
                                "start": 1405,
                                "end": 1426
                              },
                              "start": 1403,
                              "end": 1426
                            },
                            "start": 1399,
                            "end": 1426
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1392,
                          "end": 1426
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1428,
                        "end": 1431
                      },
                      "expression": false,
                      "start": 1315,
                      "end": 1431
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1303,
                    "end": 1431
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1448,
                      "end": 1454
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1456,
                          "end": 1462
                        },
                        "typeArguments": null,
                        "start": 1456,
                        "end": 1462
                      },
                      "start": 1454,
                      "end": 1462
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1465,
                      "end": 1469
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1441,
                    "end": 1470
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reset",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1492
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1509,
                                  "end": 1513
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1514,
                                  "end": 1520
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1509,
                                "end": 1520
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1523,
                                "end": 1527
                              },
                              "start": 1509,
                              "end": 1527
                            },
                            "directive": null,
                            "start": 1509,
                            "end": 1528
                          }
                        ],
                        "start": 1495,
                        "end": 1538
                      },
                      "expression": false,
                      "start": 1492,
                      "end": 1538
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1480,
                    "end": 1538
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1555,
                      "end": 1561
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1565,
                                "end": 1571
                              },
                              "typeArguments": null,
                              "start": 1565,
                              "end": 1571
                            },
                            "start": 1563,
                            "end": 1571
                          },
                          "start": 1562,
                          "end": 1571
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1574,
                          "end": 1581
                        },
                        "start": 1572,
                        "end": 1581
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
                                  "start": 1596,
                                  "end": 1600
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1601,
                                  "end": 1607
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1596,
                                "end": 1607
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1610,
                                    "end": 1614
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "select",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1615,
                                    "end": 1621
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1610,
                                  "end": 1621
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1622,
                                      "end": 1626
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1627,
                                      "end": 1633
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1622,
                                    "end": 1633
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1635,
                                    "end": 1636
                                  }
                                ],
                                "optional": false,
                                "start": 1610,
                                "end": 1637
                              },
                              "start": 1596,
                              "end": 1637
                            },
                            "directive": null,
                            "start": 1596,
                            "end": 1638
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1655,
                                "end": 1659
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1660,
                                "end": 1666
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1655,
                              "end": 1666
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1693,
                                        "end": 1697
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "stop",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1698,
                                        "end": 1702
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1693,
                                      "end": 1702
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1703,
                                          "end": 1707
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1708,
                                          "end": 1714
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1703,
                                        "end": 1714
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1693,
                                    "end": 1715
                                  },
                                  "start": 1686,
                                  "end": 1716
                                }
                              ],
                              "start": 1668,
                              "end": 1730
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 1773,
                                    "end": 1778
                                  },
                                  "start": 1766,
                                  "end": 1779
                                }
                              ],
                              "start": 1748,
                              "end": 1793
                            },
                            "start": 1651,
                            "end": 1793
                          }
                        ],
                        "start": 1582,
                        "end": 1803
                      },
                      "expression": false,
                      "start": 1561,
                      "end": 1803
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1548,
                    "end": 1803
                  }
                ],
                "start": 1292,
                "end": 1809
              },
              "abstract": false,
              "declare": false,
              "start": 1268,
              "end": 1809
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1261,
            "end": 1809
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instanceFilter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1840
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScopeSearchFilter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1864
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceCompare",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1865,
                        "end": 1880
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceFilterStop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1882,
                        "end": 1900
                      }
                    ],
                    "start": 1843,
                    "end": 1901
                  },
                  "definite": false,
                  "start": 1826,
                  "end": 1901
                }
              ],
              "declare": false,
              "start": 1822,
              "end": 1902
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1815,
            "end": 1902
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignModuleScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1945
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1951,
                        "end": 1954
                      },
                      "typeArguments": null,
                      "start": 1951,
                      "end": 1954
                    },
                    "start": 1949,
                    "end": 1954
                  },
                  "start": 1946,
                  "end": 1954
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1983
                      },
                      "typeArguments": null,
                      "start": 1965,
                      "end": 1983
                    },
                    "start": 1963,
                    "end": 1983
                  },
                  "start": 1956,
                  "end": 1983
                }
              ],
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
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1999,
                          "end": 2009
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ModuleDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2013,
                              "end": 2030
                            },
                            "typeArguments": null,
                            "start": 2013,
                            "end": 2030
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2031,
                            "end": 2034
                          },
                          "start": 2012,
                          "end": 2034
                        },
                        "definite": false,
                        "start": 1999,
                        "end": 2034
                      }
                    ],
                    "declare": false,
                    "start": 1995,
                    "end": 2035
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
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2061,
                                "end": 2077
                              },
                              "typeArguments": null,
                              "start": 2061,
                              "end": 2077
                            },
                            "start": 2059,
                            "end": 2077
                          },
                          "start": 2048,
                          "end": 2077
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2080,
                          "end": 2084
                        },
                        "definite": false,
                        "start": 2048,
                        "end": 2084
                      }
                    ],
                    "declare": false,
                    "start": 2044,
                    "end": 2085
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2108,
                                "end": 2128
                              },
                              "typeArguments": null,
                              "start": 2108,
                              "end": 2128
                            },
                            "start": 2106,
                            "end": 2128
                          },
                          "start": 2098,
                          "end": 2128
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2131,
                          "end": 2135
                        },
                        "definite": false,
                        "start": 2098,
                        "end": 2135
                      }
                    ],
                    "declare": false,
                    "start": 2094,
                    "end": 2136
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2150,
                          "end": 2160
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2161,
                          "end": 2165
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2150,
                        "end": 2165
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2169,
                          "end": 2179
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2180,
                          "end": 2183
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2169,
                        "end": 2183
                      },
                      "start": 2150,
                      "end": 2183
                    },
                    "consequent": {
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
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2199,
                                  "end": 2209
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2210,
                                  "end": 2214
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2199,
                                "end": 2214
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2215,
                                "end": 2218
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2199,
                              "end": 2218
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2221,
                                  "end": 2231
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2232,
                                  "end": 2235
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2221,
                                "end": 2235
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2236,
                                "end": 2242
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2221,
                              "end": 2242
                            },
                            "start": 2199,
                            "end": 2242
                          },
                          "directive": null,
                          "start": 2199,
                          "end": 2243
                        }
                      ],
                      "start": 2185,
                      "end": 2253
                    },
                    "alternate": null,
                    "start": 2146,
                    "end": 2253
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
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2267,
                          "end": 2270
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moduleDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2273,
                            "end": 2283
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2284,
                            "end": 2287
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2273,
                          "end": 2287
                        },
                        "definite": false,
                        "start": 2267,
                        "end": 2287
                      }
                    ],
                    "declare": false,
                    "start": 2263,
                    "end": 2288
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2358,
                        "end": 2361
                      },
                      "prefix": true,
                      "start": 2357,
                      "end": 2361
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 2377,
                          "end": 2384
                        }
                      ],
                      "start": 2363,
                      "end": 2394
                    },
                    "alternate": null,
                    "start": 2353,
                    "end": 2394
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2404,
                        "end": 2415
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolTableScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2422,
                          "end": 2438
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2439,
                              "end": 2442
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "members",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2443,
                              "end": 2450
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2439,
                            "end": 2450
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2452,
                              "end": 2455
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2456,
                              "end": 2470
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2452,
                            "end": 2470
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2472,
                              "end": 2475
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "enclosedTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2476,
                              "end": 2489
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2472,
                            "end": 2489
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2491,
                              "end": 2494
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientEnclosedTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2495,
                              "end": 2515
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2491,
                            "end": 2515
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2517,
                              "end": 2520
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2521,
                              "end": 2527
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2517,
                            "end": 2527
                          }
                        ],
                        "start": 2418,
                        "end": 2528
                      },
                      "start": 2404,
                      "end": 2528
                    },
                    "directive": null,
                    "start": 2404,
                    "end": 2529
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
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2538,
                          "end": 2541
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2542,
                          "end": 2553
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2538,
                        "end": 2553
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2556,
                        "end": 2567
                      },
                      "start": 2538,
                      "end": 2567
                    },
                    "directive": null,
                    "start": 2538,
                    "end": 2568
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2577,
                            "end": 2584
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "modDeclChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2585,
                            "end": 2597
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2577,
                          "end": 2597
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2598,
                          "end": 2602
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2577,
                        "end": 2602
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2603,
                          "end": 2613
                        }
                      ],
                      "optional": false,
                      "start": 2577,
                      "end": 2614
                    },
                    "directive": null,
                    "start": 2577,
                    "end": 2615
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2624,
                              "end": 2631
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "typeFlow",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2632,
                              "end": 2640
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2624,
                            "end": 2640
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "checker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2641,
                            "end": 2648
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2624,
                          "end": 2648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentModDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2649,
                          "end": 2663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2624,
                        "end": 2663
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleDecl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2666,
                        "end": 2676
                      },
                      "start": 2624,
                      "end": 2676
                    },
                    "directive": null,
                    "start": 2624,
                    "end": 2677
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2686,
                        "end": 2694
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2701,
                          "end": 2721
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2722,
                              "end": 2725
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2726,
                              "end": 2732
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2722,
                            "end": 2732
                          }
                        ],
                        "start": 2697,
                        "end": 2733
                      },
                      "start": 2686,
                      "end": 2733
                    },
                    "directive": null,
                    "start": 2686,
                    "end": 2734
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2743,
                          "end": 2751
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2752,
                          "end": 2766
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2743,
                        "end": 2766
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2767,
                          "end": 2778
                        }
                      ],
                      "optional": false,
                      "start": 2743,
                      "end": 2779
                    },
                    "directive": null,
                    "start": 2743,
                    "end": 2780
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2789,
                          "end": 2797
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2798,
                          "end": 2812
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2789,
                        "end": 2812
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2813,
                              "end": 2820
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2821,
                              "end": 2831
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2813,
                            "end": 2831
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2832,
                            "end": 2837
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2813,
                          "end": 2837
                        }
                      ],
                      "optional": false,
                      "start": 2789,
                      "end": 2838
                    },
                    "directive": null,
                    "start": 2789,
                    "end": 2839
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2863
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2864,
                          "end": 2872
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2874,
                          "end": 2881
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2883,
                          "end": 2887
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2889,
                          "end": 2893
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2895,
                          "end": 2899
                        }
                      ],
                      "optional": false,
                      "start": 2848,
                      "end": 2900
                    },
                    "directive": null,
                    "start": 2848,
                    "end": 2901
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
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2910,
                          "end": 2913
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2914,
                          "end": 2928
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2910,
                        "end": 2928
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2931,
                        "end": 2939
                      },
                      "start": 2910,
                      "end": 2939
                    },
                    "directive": null,
                    "start": 2910,
                    "end": 2940
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2953,
                        "end": 2956
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2957,
                        "end": 2963
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2953,
                      "end": 2963
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2979,
                                  "end": 2986
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2987,
                                  "end": 2995
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2979,
                                "end": 2995
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addLocalsFromScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2996,
                                "end": 3014
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2979,
                              "end": 3014
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3015,
                                  "end": 3018
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "containedScope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3019,
                                  "end": 3033
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3015,
                                "end": 3033
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3035,
                                  "end": 3038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3039,
                                  "end": 3045
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3035,
                                "end": 3045
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3047,
                                  "end": 3057
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "vars",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3058,
                                  "end": 3062
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3047,
                                "end": 3062
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mod",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3064,
                                    "end": 3067
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "members",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3068,
                                    "end": 3075
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3064,
                                  "end": 3075
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateMembers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3076,
                                  "end": 3090
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3064,
                                "end": 3090
                              },
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 3092,
                                "end": 3096
                              }
                            ],
                            "optional": false,
                            "start": 2979,
                            "end": 3097
                          },
                          "directive": null,
                          "start": 2979,
                          "end": 3098
                        }
                      ],
                      "start": 2965,
                      "end": 3108
                    },
                    "alternate": null,
                    "start": 2949,
                    "end": 3108
                  }
                ],
                "start": 1985,
                "end": 3114
              },
              "expression": false,
              "start": 1915,
              "end": 3114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1908,
            "end": 3114
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignClassScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3136,
                "end": 3156
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3162,
                        "end": 3165
                      },
                      "typeArguments": null,
                      "start": 3162,
                      "end": 3165
                    },
                    "start": 3160,
                    "end": 3165
                  },
                  "start": 3157,
                  "end": 3165
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3176,
                        "end": 3194
                      },
                      "typeArguments": null,
                      "start": 3176,
                      "end": 3194
                    },
                    "start": 3174,
                    "end": 3194
                  },
                  "start": 3167,
                  "end": 3194
                }
              ],
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
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3210,
                          "end": 3219
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3223,
                              "end": 3243
                            },
                            "typeArguments": null,
                            "start": 3223,
                            "end": 3243
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3244,
                            "end": 3247
                          },
                          "start": 3222,
                          "end": 3247
                        },
                        "definite": false,
                        "start": 3210,
                        "end": 3247
                      }
                    ],
                    "declare": false,
                    "start": 3206,
                    "end": 3248
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
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3274,
                                "end": 3290
                              },
                              "typeArguments": null,
                              "start": 3274,
                              "end": 3290
                            },
                            "start": 3272,
                            "end": 3290
                          },
                          "start": 3261,
                          "end": 3290
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 3293,
                          "end": 3297
                        },
                        "definite": false,
                        "start": 3261,
                        "end": 3297
                      }
                    ],
                    "declare": false,
                    "start": 3257,
                    "end": 3298
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3321,
                                "end": 3341
                              },
                              "typeArguments": null,
                              "start": 3321,
                              "end": 3341
                            },
                            "start": 3319,
                            "end": 3341
                          },
                          "start": 3311,
                          "end": 3341
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 3344,
                          "end": 3348
                        },
                        "definite": false,
                        "start": 3311,
                        "end": 3348
                      }
                    ],
                    "declare": false,
                    "start": 3307,
                    "end": 3349
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3363,
                          "end": 3372
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3373,
                          "end": 3377
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3363,
                        "end": 3377
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3381,
                          "end": 3390
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3391,
                          "end": 3395
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3381,
                        "end": 3395
                      },
                      "start": 3363,
                      "end": 3395
                    },
                    "consequent": {
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
                                  "name": "classDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3411,
                                  "end": 3420
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3421,
                                  "end": 3425
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3411,
                                "end": 3425
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3426,
                                "end": 3429
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3411,
                              "end": 3429
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3432,
                                  "end": 3441
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3442,
                                  "end": 3446
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3432,
                                "end": 3446
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3447,
                                "end": 3453
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3432,
                              "end": 3453
                            },
                            "start": 3411,
                            "end": 3453
                          },
                          "directive": null,
                          "start": 3411,
                          "end": 3454
                        }
                      ],
                      "start": 3397,
                      "end": 3464
                    },
                    "alternate": null,
                    "start": 3359,
                    "end": 3464
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
                          "name": "classType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3478,
                          "end": 3487
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3490,
                            "end": 3493
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3494,
                            "end": 3498
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3490,
                          "end": 3498
                        },
                        "definite": false,
                        "start": 3478,
                        "end": 3498
                      }
                    ],
                    "declare": false,
                    "start": 3474,
                    "end": 3499
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "classType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3513,
                      "end": 3522
                    },
                    "consequent": {
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
                                "name": "classSym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3542,
                                "end": 3550
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3553,
                                  "end": 3562
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3563,
                                  "end": 3569
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3553,
                                "end": 3569
                              },
                              "definite": false,
                              "start": 3542,
                              "end": 3569
                            }
                          ],
                          "declare": false,
                          "start": 3538,
                          "end": 3570
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3583,
                              "end": 3594
                            },
                            "right": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SymbolTableScope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3598,
                                  "end": 3614
                                },
                                "typeArguments": null,
                                "start": 3598,
                                "end": 3614
                              },
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3615,
                                        "end": 3622
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3623,
                                        "end": 3631
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3615,
                                      "end": 3631
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3632,
                                      "end": 3639
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3615,
                                    "end": 3639
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3640,
                                    "end": 3647
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3615,
                                  "end": 3647
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "classType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3648,
                                    "end": 3657
                                  }
                                ],
                                "optional": false,
                                "start": 3615,
                                "end": 3658
                              },
                              "start": 3597,
                              "end": 3658
                            },
                            "start": 3583,
                            "end": 3658
                          },
                          "directive": null,
                          "start": 3583,
                          "end": 3659
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3673,
                              "end": 3681
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3688,
                                "end": 3708
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "classType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3709,
                                    "end": 3718
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3719,
                                    "end": 3725
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3709,
                                  "end": 3725
                                }
                              ],
                              "start": 3684,
                              "end": 3726
                            },
                            "start": 3673,
                            "end": 3726
                          },
                          "directive": null,
                          "start": 3673,
                          "end": 3727
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
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3740,
                                "end": 3748
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3749,
                                "end": 3763
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3740,
                              "end": 3763
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3764,
                                "end": 3775
                              }
                            ],
                            "optional": false,
                            "start": 3740,
                            "end": 3776
                          },
                          "directive": null,
                          "start": 3740,
                          "end": 3777
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
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3790,
                                "end": 3798
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3799,
                                "end": 3813
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3790,
                              "end": 3813
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3814,
                                    "end": 3821
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3822,
                                    "end": 3832
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3814,
                                  "end": 3832
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3833,
                                  "end": 3838
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3814,
                                "end": 3838
                              }
                            ],
                            "optional": false,
                            "start": 3790,
                            "end": 3839
                          },
                          "directive": null,
                          "start": 3790,
                          "end": 3840
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
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3854,
                                "end": 3863
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3864,
                                "end": 3878
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3854,
                              "end": 3878
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3881,
                              "end": 3889
                            },
                            "start": 3854,
                            "end": 3889
                          },
                          "directive": null,
                          "start": 3854,
                          "end": 3890
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
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3903,
                                "end": 3912
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3913,
                                "end": 3924
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3903,
                              "end": 3924
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3927,
                              "end": 3938
                            },
                            "start": 3903,
                            "end": 3938
                          },
                          "directive": null,
                          "start": 3903,
                          "end": 3939
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
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3957,
                                "end": 3969
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3972,
                                  "end": 3981
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "instanceType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3982,
                                  "end": 3994
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3972,
                                "end": 3994
                              },
                              "definite": false,
                              "start": 3957,
                              "end": 3994
                            }
                          ],
                          "declare": false,
                          "start": 3953,
                          "end": 3995
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4008,
                              "end": 4019
                            },
                            "right": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SymbolTableScope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4023,
                                  "end": 4039
                                },
                                "typeArguments": null,
                                "start": 4023,
                                "end": 4039
                              },
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4040,
                                        "end": 4047
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4048,
                                        "end": 4056
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4040,
                                      "end": 4056
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4057,
                                      "end": 4064
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4040,
                                    "end": 4064
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4065,
                                    "end": 4072
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4040,
                                  "end": 4072
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "instanceType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4073,
                                    "end": 4085
                                  }
                                ],
                                "optional": false,
                                "start": 4040,
                                "end": 4086
                              },
                              "start": 4022,
                              "end": 4086
                            },
                            "start": 4008,
                            "end": 4086
                          },
                          "directive": null,
                          "start": 4008,
                          "end": 4087
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
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4100,
                                "end": 4112
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4113,
                                "end": 4124
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4100,
                              "end": 4124
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4127,
                              "end": 4138
                            },
                            "start": 4100,
                            "end": 4138
                          },
                          "directive": null,
                          "start": 4100,
                          "end": 4139
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4153,
                              "end": 4161
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4168,
                                "end": 4188
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "instanceType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4189,
                                    "end": 4201
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4202,
                                    "end": 4208
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4189,
                                  "end": 4208
                                }
                              ],
                              "start": 4164,
                              "end": 4209
                            },
                            "start": 4153,
                            "end": 4209
                          },
                          "directive": null,
                          "start": 4153,
                          "end": 4210
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
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4223,
                                "end": 4231
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4232,
                                "end": 4246
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4223,
                              "end": 4246
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4247,
                                    "end": 4254
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4255,
                                    "end": 4265
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4247,
                                  "end": 4265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4266,
                                  "end": 4271
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4247,
                                "end": 4271
                              }
                            ],
                            "optional": false,
                            "start": 4223,
                            "end": 4272
                          },
                          "directive": null,
                          "start": 4223,
                          "end": 4273
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4287,
                              "end": 4302
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4303,
                                "end": 4311
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4313,
                                "end": 4320
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4322,
                                "end": 4334
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4336,
                                "end": 4345
                              },
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4347,
                                "end": 4351
                              }
                            ],
                            "optional": false,
                            "start": 4287,
                            "end": 4352
                          },
                          "directive": null,
                          "start": 4287,
                          "end": 4353
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
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4366,
                                "end": 4378
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4379,
                                "end": 4393
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4366,
                              "end": 4393
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4396,
                              "end": 4404
                            },
                            "start": 4366,
                            "end": 4404
                          },
                          "directive": null,
                          "start": 4366,
                          "end": 4405
                        }
                      ],
                      "start": 3524,
                      "end": 4415
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4443,
                                "end": 4446
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4447,
                                "end": 4451
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4443,
                              "end": 4451
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4454,
                                  "end": 4461
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4462,
                                  "end": 4470
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4454,
                                "end": 4470
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "anyType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4471,
                                "end": 4478
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4454,
                              "end": 4478
                            },
                            "start": 4443,
                            "end": 4478
                          },
                          "directive": null,
                          "start": 4443,
                          "end": 4479
                        }
                      ],
                      "start": 4429,
                      "end": 4489
                    },
                    "start": 3509,
                    "end": 4489
                  }
                ],
                "start": 3196,
                "end": 4495
              },
              "expression": false,
              "start": 3127,
              "end": 4495
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3120,
            "end": 4495
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignInterfaceScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4517,
                "end": 4541
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4547,
                        "end": 4550
                      },
                      "typeArguments": null,
                      "start": 4547,
                      "end": 4550
                    },
                    "start": 4545,
                    "end": 4550
                  },
                  "start": 4542,
                  "end": 4550
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4561,
                        "end": 4579
                      },
                      "typeArguments": null,
                      "start": 4561,
                      "end": 4579
                    },
                    "start": 4559,
                    "end": 4579
                  },
                  "start": 4552,
                  "end": 4579
                }
              ],
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
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4595,
                          "end": 4608
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4612,
                              "end": 4632
                            },
                            "typeArguments": null,
                            "start": 4612,
                            "end": 4632
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4633,
                            "end": 4636
                          },
                          "start": 4611,
                          "end": 4636
                        },
                        "definite": false,
                        "start": 4595,
                        "end": 4636
                      }
                    ],
                    "declare": false,
                    "start": 4591,
                    "end": 4637
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
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4663,
                                "end": 4679
                              },
                              "typeArguments": null,
                              "start": 4663,
                              "end": 4679
                            },
                            "start": 4661,
                            "end": 4679
                          },
                          "start": 4650,
                          "end": 4679
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4682,
                          "end": 4686
                        },
                        "definite": false,
                        "start": 4650,
                        "end": 4686
                      }
                    ],
                    "declare": false,
                    "start": 4646,
                    "end": 4687
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4710,
                                "end": 4730
                              },
                              "typeArguments": null,
                              "start": 4710,
                              "end": 4730
                            },
                            "start": 4708,
                            "end": 4730
                          },
                          "start": 4700,
                          "end": 4730
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4733,
                          "end": 4737
                        },
                        "definite": false,
                        "start": 4700,
                        "end": 4737
                      }
                    ],
                    "declare": false,
                    "start": 4696,
                    "end": 4738
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4752,
                          "end": 4765
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4766,
                          "end": 4770
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4752,
                        "end": 4770
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4774,
                          "end": 4787
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4788,
                          "end": 4792
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4774,
                        "end": 4792
                      },
                      "start": 4752,
                      "end": 4792
                    },
                    "consequent": {
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
                                  "name": "interfaceDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4808,
                                  "end": 4821
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4822,
                                  "end": 4826
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4808,
                                "end": 4826
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4827,
                                "end": 4830
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4808,
                              "end": 4830
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "interfaceDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4833,
                                  "end": 4846
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4847,
                                  "end": 4851
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4833,
                                "end": 4851
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4852,
                                "end": 4858
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4833,
                              "end": 4858
                            },
                            "start": 4808,
                            "end": 4858
                          },
                          "directive": null,
                          "start": 4808,
                          "end": 4859
                        }
                      ],
                      "start": 4794,
                      "end": 4869
                    },
                    "alternate": null,
                    "start": 4748,
                    "end": 4869
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
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4883,
                          "end": 4896
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4899,
                            "end": 4902
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4903,
                            "end": 4907
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4899,
                          "end": 4907
                        },
                        "definite": false,
                        "start": 4883,
                        "end": 4907
                      }
                    ],
                    "declare": false,
                    "start": 4879,
                    "end": 4908
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4917,
                        "end": 4928
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SymbolTableScope",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4932,
                            "end": 4948
                          },
                          "typeArguments": null,
                          "start": 4932,
                          "end": 4948
                        },
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4949,
                                  "end": 4956
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4957,
                                  "end": 4965
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4949,
                                "end": 4965
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "checker",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4966,
                                "end": 4973
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4949,
                              "end": 4973
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4974,
                              "end": 4981
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4949,
                            "end": 4981
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "interfaceType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4982,
                              "end": 4995
                            }
                          ],
                          "optional": false,
                          "start": 4949,
                          "end": 4996
                        },
                        "start": 4931,
                        "end": 4996
                      },
                      "start": 4917,
                      "end": 4996
                    },
                    "directive": null,
                    "start": 4917,
                    "end": 4997
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
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5006,
                          "end": 5019
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5020,
                          "end": 5031
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5006,
                        "end": 5031
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5034,
                        "end": 5045
                      },
                      "start": 5006,
                      "end": 5045
                    },
                    "directive": null,
                    "start": 5006,
                    "end": 5046
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5055,
                        "end": 5063
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5070,
                          "end": 5090
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "interfaceType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5091,
                              "end": 5104
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5105,
                              "end": 5111
                            },
                            "optional": false,
                            "computed": false,
                            "start": 5091,
                            "end": 5111
                          }
                        ],
                        "start": 5066,
                        "end": 5112
                      },
                      "start": 5055,
                      "end": 5112
                    },
                    "directive": null,
                    "start": 5055,
                    "end": 5113
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5122,
                          "end": 5130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5131,
                          "end": 5145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5122,
                        "end": 5145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5146,
                          "end": 5157
                        }
                      ],
                      "optional": false,
                      "start": 5122,
                      "end": 5158
                    },
                    "directive": null,
                    "start": 5122,
                    "end": 5159
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
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5168,
                          "end": 5176
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5177,
                          "end": 5191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5168,
                        "end": 5191
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5192,
                              "end": 5199
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5200,
                              "end": 5210
                            },
                            "optional": false,
                            "computed": false,
                            "start": 5192,
                            "end": 5210
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5211,
                            "end": 5216
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5192,
                          "end": 5216
                        }
                      ],
                      "optional": false,
                      "start": 5168,
                      "end": 5217
                    },
                    "directive": null,
                    "start": 5168,
                    "end": 5218
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5227,
                        "end": 5242
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5243,
                          "end": 5251
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5253,
                          "end": 5260
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5262,
                          "end": 5266
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5268,
                          "end": 5272
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5274,
                          "end": 5278
                        }
                      ],
                      "optional": false,
                      "start": 5227,
                      "end": 5279
                    },
                    "directive": null,
                    "start": 5227,
                    "end": 5280
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
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5289,
                          "end": 5302
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5303,
                          "end": 5317
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5289,
                        "end": 5317
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5320,
                        "end": 5328
                      },
                      "start": 5289,
                      "end": 5328
                    },
                    "directive": null,
                    "start": 5289,
                    "end": 5329
                  }
                ],
                "start": 4581,
                "end": 5335
              },
              "expression": false,
              "start": 4508,
              "end": 5335
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4501,
            "end": 5335
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignWithScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5357,
                "end": 5376
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5382,
                        "end": 5385
                      },
                      "typeArguments": null,
                      "start": 5382,
                      "end": 5385
                    },
                    "start": 5380,
                    "end": 5385
                  },
                  "start": 5377,
                  "end": 5385
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5396,
                        "end": 5414
                      },
                      "typeArguments": null,
                      "start": 5396,
                      "end": 5414
                    },
                    "start": 5394,
                    "end": 5414
                  },
                  "start": 5387,
                  "end": 5414
                }
              ],
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
                          "name": "withStmt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5430,
                          "end": 5438
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WithStatement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5442,
                              "end": 5455
                            },
                            "typeArguments": null,
                            "start": 5442,
                            "end": 5455
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5456,
                            "end": 5459
                          },
                          "start": 5441,
                          "end": 5459
                        },
                        "definite": false,
                        "start": 5430,
                        "end": 5459
                      }
                    ],
                    "declare": false,
                    "start": 5426,
                    "end": 5460
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5473,
                          "end": 5481
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "withStmt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5484,
                            "end": 5492
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5493,
                            "end": 5497
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5484,
                          "end": 5497
                        },
                        "definite": false,
                        "start": 5473,
                        "end": 5497
                      }
                    ],
                    "declare": false,
                    "start": 5469,
                    "end": 5498
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
                          "name": "members",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5512,
                          "end": 5519
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5526,
                            "end": 5539
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5544,
                                "end": 5563
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5568,
                                    "end": 5583
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5564,
                                  "end": 5585
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5591,
                                    "end": 5606
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5587,
                                  "end": 5608
                                }
                              ],
                              "start": 5540,
                              "end": 5609
                            }
                          ],
                          "start": 5522,
                          "end": 5610
                        },
                        "definite": false,
                        "start": 5512,
                        "end": 5610
                      }
                    ],
                    "declare": false,
                    "start": 5508,
                    "end": 5611
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
                          "name": "ambientMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5624,
                          "end": 5638
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5645,
                            "end": 5658
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5663,
                                "end": 5682
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5687,
                                    "end": 5702
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5683,
                                  "end": 5704
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5710,
                                    "end": 5725
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5706,
                                  "end": 5727
                                }
                              ],
                              "start": 5659,
                              "end": 5728
                            }
                          ],
                          "start": 5641,
                          "end": 5729
                        },
                        "definite": false,
                        "start": 5624,
                        "end": 5729
                      }
                    ],
                    "declare": false,
                    "start": 5620,
                    "end": 5730
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5744,
                          "end": 5752
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5759,
                            "end": 5763
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 5755,
                          "end": 5765
                        },
                        "definite": false,
                        "start": 5744,
                        "end": 5765
                      }
                    ],
                    "declare": false,
                    "start": 5740,
                    "end": 5766
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
                          "name": "withSymbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5779,
                          "end": 5789
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WithSymbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5796,
                            "end": 5806
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withStmt",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5807,
                                "end": 5815
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "minChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5816,
                                "end": 5823
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5807,
                              "end": 5823
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5825,
                                      "end": 5832
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "typeFlow",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5833,
                                      "end": 5841
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 5825,
                                    "end": 5841
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "checker",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5842,
                                    "end": 5849
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 5825,
                                  "end": 5849
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "locationInfo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5850,
                                  "end": 5862
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5825,
                                "end": 5862
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "unitIndex",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5863,
                                "end": 5872
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5825,
                              "end": 5872
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "withType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5874,
                              "end": 5882
                            }
                          ],
                          "start": 5792,
                          "end": 5883
                        },
                        "definite": false,
                        "start": 5779,
                        "end": 5883
                      }
                    ],
                    "declare": false,
                    "start": 5775,
                    "end": 5884
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5893,
                          "end": 5901
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "members",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5902,
                          "end": 5909
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5893,
                        "end": 5909
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5912,
                        "end": 5919
                      },
                      "start": 5893,
                      "end": 5919
                    },
                    "directive": null,
                    "start": 5893,
                    "end": 5920
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5929,
                          "end": 5937
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ambientMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5938,
                          "end": 5952
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5929,
                        "end": 5952
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ambientMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5955,
                        "end": 5969
                      },
                      "start": 5929,
                      "end": 5969
                    },
                    "directive": null,
                    "start": 5929,
                    "end": 5970
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5979,
                          "end": 5987
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5988,
                          "end": 5994
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5979,
                        "end": 5994
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5997,
                        "end": 6007
                      },
                      "start": 5979,
                      "end": 6007
                    },
                    "directive": null,
                    "start": 5979,
                    "end": 6008
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6017,
                          "end": 6025
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "setHasImplementation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6026,
                          "end": 6046
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6017,
                        "end": 6046
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6017,
                      "end": 6048
                    },
                    "directive": null,
                    "start": 6017,
                    "end": 6049
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
                          "name": "withStmt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6058,
                          "end": 6066
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6067,
                          "end": 6071
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6058,
                        "end": 6071
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6074,
                        "end": 6082
                      },
                      "start": 6058,
                      "end": 6082
                    },
                    "directive": null,
                    "start": 6058,
                    "end": 6083
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
                          "name": "withScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6097,
                          "end": 6106
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TypeScript",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6113,
                              "end": 6123
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SymbolScopeBuilder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6124,
                              "end": 6142
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6113,
                            "end": 6142
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6143,
                                "end": 6151
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "members",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6152,
                                "end": 6159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6143,
                              "end": 6159
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6161,
                                "end": 6169
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ambientMembers",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6170,
                                "end": 6184
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6161,
                              "end": 6184
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6186,
                              "end": 6190
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6192,
                              "end": 6196
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6198,
                                  "end": 6205
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6206,
                                  "end": 6216
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6198,
                                "end": 6216
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6217,
                                "end": 6222
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6198,
                              "end": 6222
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6224,
                                "end": 6232
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6233,
                                "end": 6239
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6224,
                              "end": 6239
                            }
                          ],
                          "start": 6109,
                          "end": 6240
                        },
                        "definite": false,
                        "start": 6097,
                        "end": 6240
                      }
                    ],
                    "declare": false,
                    "start": 6093,
                    "end": 6241
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6251,
                        "end": 6266
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "withScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6267,
                          "end": 6276
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6278,
                          "end": 6285
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6287,
                          "end": 6291
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6293,
                          "end": 6297
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6299,
                          "end": 6303
                        }
                      ],
                      "optional": false,
                      "start": 6251,
                      "end": 6304
                    },
                    "directive": null,
                    "start": 6251,
                    "end": 6305
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
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6314,
                          "end": 6322
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6323,
                          "end": 6337
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6314,
                        "end": 6337
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6340,
                        "end": 6349
                      },
                      "start": 6314,
                      "end": 6349
                    },
                    "directive": null,
                    "start": 6314,
                    "end": 6350
                  }
                ],
                "start": 5416,
                "end": 6356
              },
              "expression": false,
              "start": 5348,
              "end": 6356
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5341,
            "end": 6356
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignFuncDeclScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6378,
                "end": 6401
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6407,
                        "end": 6410
                      },
                      "typeArguments": null,
                      "start": 6407,
                      "end": 6410
                    },
                    "start": 6405,
                    "end": 6410
                  },
                  "start": 6402,
                  "end": 6410
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6421,
                        "end": 6439
                      },
                      "typeArguments": null,
                      "start": 6421,
                      "end": 6439
                    },
                    "start": 6419,
                    "end": 6439
                  },
                  "start": 6412,
                  "end": 6439
                }
              ],
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
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6455,
                          "end": 6463
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FuncDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6467,
                              "end": 6475
                            },
                            "typeArguments": null,
                            "start": 6467,
                            "end": 6475
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6476,
                            "end": 6479
                          },
                          "start": 6466,
                          "end": 6479
                        },
                        "definite": false,
                        "start": 6455,
                        "end": 6479
                      }
                    ],
                    "declare": false,
                    "start": 6451,
                    "end": 6480
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
                          "name": "container",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6505,
                                "end": 6511
                              },
                              "typeArguments": null,
                              "start": 6505,
                              "end": 6511
                            },
                            "start": 6503,
                            "end": 6511
                          },
                          "start": 6494,
                          "end": 6511
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6514,
                          "end": 6518
                        },
                        "definite": false,
                        "start": 6494,
                        "end": 6518
                      }
                    ],
                    "declare": false,
                    "start": 6490,
                    "end": 6519
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
                          "name": "localContainer",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6548,
                                "end": 6554
                              },
                              "typeArguments": null,
                              "start": 6548,
                              "end": 6554
                            },
                            "start": 6546,
                            "end": 6554
                          },
                          "start": 6532,
                          "end": 6554
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6557,
                          "end": 6561
                        },
                        "definite": false,
                        "start": 6532,
                        "end": 6561
                      }
                    ],
                    "declare": false,
                    "start": 6528,
                    "end": 6562
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6575,
                        "end": 6583
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6584,
                        "end": 6588
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6575,
                      "end": 6588
                    },
                    "consequent": {
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
                              "name": "localContainer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6604,
                              "end": 6618
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6621,
                                  "end": 6624
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6625,
                                  "end": 6629
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6621,
                                "end": 6629
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6630,
                                "end": 6636
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6621,
                              "end": 6636
                            },
                            "start": 6604,
                            "end": 6636
                          },
                          "directive": null,
                          "start": 6604,
                          "end": 6637
                        }
                      ],
                      "start": 6590,
                      "end": 6647
                    },
                    "alternate": null,
                    "start": 6571,
                    "end": 6647
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
                          "name": "isStatic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6661,
                          "end": 6669
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasFlag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6672,
                            "end": 6679
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6680,
                                "end": 6688
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6689,
                                "end": 6697
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6680,
                              "end": 6697
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6699,
                                "end": 6707
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Static",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6708,
                                "end": 6714
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6699,
                              "end": 6714
                            }
                          ],
                          "optional": false,
                          "start": 6672,
                          "end": 6715
                        },
                        "definite": false,
                        "start": 6661,
                        "end": 6715
                      }
                    ],
                    "declare": false,
                    "start": 6657,
                    "end": 6716
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
                          "name": "isInnerStatic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6729,
                          "end": 6742
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6745,
                            "end": 6753
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6757,
                                  "end": 6764
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6765,
                                  "end": 6775
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6757,
                                "end": 6775
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6776,
                                "end": 6779
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6757,
                              "end": 6779
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6783,
                              "end": 6787
                            },
                            "start": 6757,
                            "end": 6787
                          },
                          "start": 6745,
                          "end": 6787
                        },
                        "definite": false,
                        "start": 6729,
                        "end": 6787
                      }
                    ],
                    "declare": false,
                    "start": 6725,
                    "end": 6788
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
                          "name": "parentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6904,
                          "end": 6915
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isInnerStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6918,
                            "end": 6931
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6934,
                                    "end": 6941
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6942,
                                    "end": 6952
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 6934,
                                  "end": 6952
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6953,
                                  "end": 6956
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6934,
                                "end": 6956
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6957,
                                "end": 6961
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6934,
                              "end": 6961
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6962,
                              "end": 6973
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6934,
                            "end": 6973
                          },
                          "alternate": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6976,
                                "end": 6983
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6984,
                                "end": 6994
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6976,
                              "end": 6994
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6995,
                              "end": 7000
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6976,
                            "end": 7000
                          },
                          "start": 6918,
                          "end": 7000
                        },
                        "definite": false,
                        "start": 6904,
                        "end": 7000
                      }
                    ],
                    "declare": false,
                    "start": 6900,
                    "end": 7001
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7341,
                            "end": 7348
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7349,
                            "end": 7359
                          },
                          "optional": false,
                          "computed": false,
                          "start": 7341,
                          "end": 7359
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7360,
                          "end": 7368
                        },
                        "optional": false,
                        "computed": false,
                        "start": 7341,
                        "end": 7368
                      },
                      "operator": "&&",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7386,
                              "end": 7394
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isConstructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7395,
                              "end": 7408
                            },
                            "optional": false,
                            "computed": false,
                            "start": 7386,
                            "end": 7408
                          },
                          "prefix": true,
                          "start": 7385,
                          "end": 7408
                        },
                        "operator": "||",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasFlag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7412,
                            "end": 7419
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7420,
                                "end": 7428
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7429,
                                "end": 7437
                              },
                              "optional": false,
                              "computed": false,
                              "start": 7420,
                              "end": 7437
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7439,
                                "end": 7447
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ClassMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7448,
                                "end": 7459
                              },
                              "optional": false,
                              "computed": false,
                              "start": 7439,
                              "end": 7459
                            }
                          ],
                          "optional": false,
                          "start": 7412,
                          "end": 7460
                        },
                        "start": 7385,
                        "end": 7460
                      },
                      "start": 7341,
                      "end": 7461
                    },
                    "consequent": {
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
                                "name": "instType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7481,
                                "end": 7489
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7492,
                                    "end": 7499
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7500,
                                    "end": 7510
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7492,
                                  "end": 7510
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7511,
                                  "end": 7519
                                },
                                "optional": false,
                                "computed": false,
                                "start": 7492,
                                "end": 7519
                              },
                              "definite": false,
                              "start": 7481,
                              "end": 7519
                            }
                          ],
                          "declare": false,
                          "start": 7477,
                          "end": 7520
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "instType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7540,
                                    "end": 7548
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7549,
                                    "end": 7558
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7540,
                                  "end": 7558
                                },
                                "operator": "&",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TypeFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7561,
                                    "end": 7570
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IsClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7571,
                                    "end": 7578
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7561,
                                  "end": 7578
                                },
                                "start": 7540,
                                "end": 7578
                              },
                              "prefix": true,
                              "start": 7538,
                              "end": 7579
                            },
                            "operator": "&&",
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "hasFlag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7584,
                                  "end": 7591
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7592,
                                      "end": 7600
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fncFlags",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7601,
                                      "end": 7609
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7592,
                                    "end": 7609
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "FncFlags",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7611,
                                      "end": 7619
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ClassMethod",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7620,
                                      "end": 7631
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7611,
                                    "end": 7631
                                  }
                                ],
                                "optional": false,
                                "start": 7584,
                                "end": 7632
                              },
                              "prefix": true,
                              "start": 7583,
                              "end": 7632
                            },
                            "start": 7538,
                            "end": 7632
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7657,
                                          "end": 7665
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7666,
                                          "end": 7674
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 7657,
                                        "end": 7674
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 7657,
                                      "end": 7676
                                    },
                                    "prefix": true,
                                    "start": 7656,
                                    "end": 7676
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isStatic",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7680,
                                    "end": 7688
                                  },
                                  "start": 7656,
                                  "end": 7688
                                },
                                "consequent": {
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
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7712,
                                          "end": 7723
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7726,
                                            "end": 7734
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7735,
                                            "end": 7751
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7726,
                                          "end": 7751
                                        },
                                        "start": 7712,
                                        "end": 7751
                                      },
                                      "directive": null,
                                      "start": 7712,
                                      "end": 7752
                                    }
                                  ],
                                  "start": 7690,
                                  "end": 7770
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7879,
                                          "end": 7890
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7893,
                                            "end": 7901
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "containedScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7902,
                                            "end": 7916
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7893,
                                          "end": 7916
                                        },
                                        "start": 7879,
                                        "end": 7916
                                      },
                                      "directive": null,
                                      "start": 7879,
                                      "end": 7917
                                    }
                                  ],
                                  "start": 7792,
                                  "end": 7935
                                },
                                "start": 7652,
                                "end": 7935
                              }
                            ],
                            "start": 7634,
                            "end": 7949
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7989,
                                                "end": 7996
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7997,
                                                "end": 8007
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7989,
                                              "end": 8007
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "previous",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8008,
                                              "end": 8016
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 7989,
                                            "end": 8016
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8017,
                                            "end": 8022
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7989,
                                          "end": 8022
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "container",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8023,
                                          "end": 8032
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 7989,
                                        "end": 8032
                                      },
                                      "operator": "&&",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8056,
                                                  "end": 8063
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8064,
                                                  "end": 8074
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8056,
                                                "end": 8074
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8075,
                                                "end": 8083
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8056,
                                              "end": 8083
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8084,
                                              "end": 8089
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8056,
                                            "end": 8089
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8090,
                                            "end": 8099
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8056,
                                          "end": 8099
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8100,
                                          "end": 8107
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8056,
                                        "end": 8107
                                      },
                                      "start": 7989,
                                      "end": 8107
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "context",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 8131,
                                                    "end": 8138
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "scopeChain",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 8139,
                                                    "end": 8149
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 8131,
                                                  "end": 8149
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "previous",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8150,
                                                  "end": 8158
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8131,
                                                "end": 8158
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scope",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8159,
                                                "end": 8164
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8131,
                                              "end": 8164
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "container",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8165,
                                              "end": 8174
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8131,
                                            "end": 8174
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8175,
                                            "end": 8182
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8131,
                                          "end": 8182
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8183,
                                          "end": 8191
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8131,
                                        "end": 8191
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8195,
                                          "end": 8203
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8204,
                                          "end": 8212
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8195,
                                        "end": 8212
                                      },
                                      "start": 8131,
                                      "end": 8212
                                    },
                                    "start": 7989,
                                    "end": 8212
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8238,
                                          "end": 8246
                                        },
                                        "typeArguments": null,
                                        "start": 8238,
                                        "end": 8246
                                      },
                                      "expression": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8247,
                                                  "end": 8254
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8255,
                                                  "end": 8265
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8247,
                                                "end": 8265
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8266,
                                                "end": 8274
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8247,
                                              "end": 8274
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8275,
                                              "end": 8280
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8247,
                                            "end": 8280
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8281,
                                            "end": 8290
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8247,
                                          "end": 8290
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8291,
                                          "end": 8298
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8247,
                                        "end": 8298
                                      },
                                      "start": 8237,
                                      "end": 8298
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8300,
                                      "end": 8313
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 8236,
                                    "end": 8313
                                  },
                                  "start": 7989,
                                  "end": 8313
                                },
                                "consequent": {
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
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8431,
                                          "end": 8442
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8445,
                                            "end": 8453
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8454,
                                            "end": 8470
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8445,
                                          "end": 8470
                                        },
                                        "start": 8431,
                                        "end": 8470
                                      },
                                      "directive": null,
                                      "start": 8431,
                                      "end": 8471
                                    }
                                  ],
                                  "start": 8315,
                                  "end": 8489
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isStatic",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8515,
                                      "end": 8523
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8527,
                                          "end": 8534
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8535,
                                          "end": 8545
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8527,
                                        "end": 8545
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "classType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8546,
                                        "end": 8555
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 8527,
                                      "end": 8555
                                    },
                                    "start": 8515,
                                    "end": 8555
                                  },
                                  "consequent": {
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
                                            "name": "parentScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8579,
                                            "end": 8590
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8593,
                                                  "end": 8600
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8601,
                                                  "end": 8611
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8593,
                                                "end": 8611
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "classType",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8612,
                                                "end": 8621
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8593,
                                              "end": 8621
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8622,
                                              "end": 8636
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8593,
                                            "end": 8636
                                          },
                                          "start": 8579,
                                          "end": 8636
                                        },
                                        "directive": null,
                                        "start": 8579,
                                        "end": 8637
                                      }
                                    ],
                                    "start": 8557,
                                    "end": 8655
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "parentScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8752,
                                            "end": 8763
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "instType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8766,
                                              "end": 8774
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8775,
                                              "end": 8789
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8766,
                                            "end": 8789
                                          },
                                          "start": 8752,
                                          "end": 8789
                                        },
                                        "directive": null,
                                        "start": 8752,
                                        "end": 8790
                                      }
                                    ],
                                    "start": 8677,
                                    "end": 8808
                                  },
                                  "start": 8511,
                                  "end": 8808
                                },
                                "start": 7985,
                                "end": 8808
                              }
                            ],
                            "start": 7967,
                            "end": 8822
                          },
                          "start": 7534,
                          "end": 8822
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8835,
                              "end": 8844
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8847,
                                "end": 8855
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8856,
                                "end": 8862
                              },
                              "optional": false,
                              "computed": false,
                              "start": 8847,
                              "end": 8862
                            },
                            "start": 8835,
                            "end": 8862
                          },
                          "directive": null,
                          "start": 8835,
                          "end": 8863
                        }
                      ],
                      "start": 7463,
                      "end": 8873
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8891,
                            "end": 8899
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8900,
                            "end": 8913
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8891,
                          "end": 8913
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8917,
                              "end": 8924
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8925,
                              "end": 8935
                            },
                            "optional": false,
                            "computed": false,
                            "start": 8917,
                            "end": 8935
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thisType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8936,
                            "end": 8944
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8917,
                          "end": 8944
                        },
                        "start": 8891,
                        "end": 8944
                      },
                      "consequent": {
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
                                "name": "container",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9060,
                                "end": 9069
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9072,
                                      "end": 9079
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9080,
                                      "end": 9090
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9072,
                                    "end": 9090
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9091,
                                    "end": 9099
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9072,
                                  "end": 9099
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9100,
                                  "end": 9106
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9072,
                                "end": 9106
                              },
                              "start": 9060,
                              "end": 9106
                            },
                            "directive": null,
                            "start": 9060,
                            "end": 9107
                          }
                        ],
                        "start": 8946,
                        "end": 9117
                      },
                      "alternate": null,
                      "start": 8887,
                      "end": 9117
                    },
                    "start": 7337,
                    "end": 9117
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9131,
                            "end": 9139
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9140,
                            "end": 9144
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9131,
                          "end": 9144
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 9148,
                          "end": 9152
                        },
                        "start": 9131,
                        "end": 9152
                      },
                      "operator": "||",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasFlag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9156,
                          "end": 9163
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9164,
                                  "end": 9172
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9173,
                                  "end": 9177
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9164,
                                "end": 9177
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9178,
                                "end": 9184
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9164,
                              "end": 9184
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "flags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9185,
                              "end": 9190
                            },
                            "optional": false,
                            "computed": false,
                            "start": 9164,
                            "end": 9190
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SymbolFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9192,
                              "end": 9203
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TypeSetDuringScopeAssignment",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9204,
                              "end": 9232
                            },
                            "optional": false,
                            "computed": false,
                            "start": 9192,
                            "end": 9232
                          }
                        ],
                        "optional": false,
                        "start": 9156,
                        "end": 9233
                      },
                      "start": 9131,
                      "end": 9233
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9253,
                                  "end": 9260
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9261,
                                  "end": 9271
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9253,
                                "end": 9271
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9272,
                                "end": 9275
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9253,
                              "end": 9275
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9279,
                                    "end": 9286
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9287,
                                    "end": 9297
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9279,
                                  "end": 9297
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9298,
                                  "end": 9301
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9279,
                                "end": 9301
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9302,
                                "end": 9306
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9279,
                              "end": 9306
                            },
                            "start": 9253,
                            "end": 9306
                          },
                          "consequent": {
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
                                    "name": "container",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9326,
                                    "end": 9335
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9338,
                                            "end": 9345
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9346,
                                            "end": 9356
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9338,
                                          "end": 9356
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9357,
                                          "end": 9360
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9338,
                                        "end": 9360
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9361,
                                        "end": 9365
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 9338,
                                      "end": 9365
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9366,
                                      "end": 9372
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9338,
                                    "end": 9372
                                  },
                                  "start": 9326,
                                  "end": 9372
                                },
                                "directive": null,
                                "start": 9326,
                                "end": 9373
                              }
                            ],
                            "start": 9308,
                            "end": 9387
                          },
                          "alternate": null,
                          "start": 9249,
                          "end": 9387
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
                                "name": "funcScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9405,
                                "end": 9414
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 9417,
                                "end": 9421
                              },
                              "definite": false,
                              "start": 9405,
                              "end": 9421
                            }
                          ],
                          "declare": false,
                          "start": 9401,
                          "end": 9422
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
                                "name": "outerFnc",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "FuncDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9449,
                                      "end": 9457
                                    },
                                    "typeArguments": null,
                                    "start": 9449,
                                    "end": 9457
                                  },
                                  "start": 9447,
                                  "end": 9457
                                },
                                "start": 9439,
                                "end": 9457
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9460,
                                    "end": 9467
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9468,
                                    "end": 9478
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9460,
                                  "end": 9478
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9479,
                                  "end": 9482
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9460,
                                "end": 9482
                              },
                              "definite": false,
                              "start": 9439,
                              "end": 9482
                            }
                          ],
                          "declare": false,
                          "start": 9435,
                          "end": 9483
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
                                "name": "nameText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9500,
                                "end": 9508
                              },
                              "init": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9511,
                                    "end": 9519
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9520,
                                    "end": 9524
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9511,
                                  "end": 9524
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9527,
                                      "end": 9535
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9536,
                                      "end": 9540
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9527,
                                    "end": 9540
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "actualText",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9541,
                                    "end": 9551
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9527,
                                  "end": 9551
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 9554,
                                  "end": 9558
                                },
                                "start": 9511,
                                "end": 9558
                              },
                              "definite": false,
                              "start": 9500,
                              "end": 9558
                            }
                          ],
                          "declare": false,
                          "start": 9496,
                          "end": 9559
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
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TypeSymbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9583,
                                      "end": 9593
                                    },
                                    "typeArguments": null,
                                    "start": 9583,
                                    "end": 9593
                                  },
                                  "start": 9581,
                                  "end": 9593
                                },
                                "start": 9576,
                                "end": 9593
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 9596,
                                "end": 9600
                              },
                              "definite": false,
                              "start": 9576,
                              "end": 9600
                            }
                          ],
                          "declare": false,
                          "start": 9572,
                          "end": 9601
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9619,
                            "end": 9627
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "outerFnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9949,
                                          "end": 9957
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "type",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9958,
                                          "end": 9962
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9949,
                                        "end": 9962
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "members",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9963,
                                        "end": 9970
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 9949,
                                      "end": 9970
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 9974,
                                      "end": 9978
                                    },
                                    "start": 9949,
                                    "end": 9978
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "container",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9982,
                                          "end": 9991
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "getType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9992,
                                          "end": 9999
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9982,
                                        "end": 9999
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 9982,
                                      "end": 10001
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 10002,
                                      "end": 10013
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9982,
                                    "end": 10013
                                  },
                                  "start": 9949,
                                  "end": 10013
                                },
                                "consequent": {
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
                                              "name": "outerFnc",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10037,
                                              "end": 10045
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "type",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10046,
                                              "end": 10050
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10037,
                                            "end": 10050
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "members",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10051,
                                            "end": 10058
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10037,
                                          "end": 10058
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "TSTypeAssertion",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "SymbolScopeBuilder",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10063,
                                                "end": 10081
                                              },
                                              "typeArguments": null,
                                              "start": 10063,
                                              "end": 10081
                                            },
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "TSTypeAssertion",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "TypeSymbol",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10084,
                                                      "end": 10094
                                                    },
                                                    "typeArguments": null,
                                                    "start": 10084,
                                                    "end": 10094
                                                  },
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "container",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 10095,
                                                    "end": 10104
                                                  },
                                                  "start": 10083,
                                                  "end": 10104
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10106,
                                                  "end": 10110
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10082,
                                                "end": 10110
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "memberScope",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10111,
                                                "end": 10122
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10082,
                                              "end": 10122
                                            },
                                            "start": 10062,
                                            "end": 10122
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valueMembers",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10124,
                                            "end": 10136
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10061,
                                          "end": 10136
                                        },
                                        "start": 10037,
                                        "end": 10136
                                      },
                                      "directive": null,
                                      "start": 10037,
                                      "end": 10137
                                    }
                                  ],
                                  "start": 10015,
                                  "end": 10155
                                },
                                "alternate": null,
                                "start": 9945,
                                "end": 10155
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcScope",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10172,
                                    "end": 10181
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10184,
                                            "end": 10191
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10192,
                                            "end": 10202
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10184,
                                          "end": 10202
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10203,
                                          "end": 10206
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10184,
                                        "end": 10206
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10207,
                                        "end": 10211
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10184,
                                      "end": 10211
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 10212,
                                      "end": 10223
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 10184,
                                    "end": 10223
                                  },
                                  "start": 10172,
                                  "end": 10223
                                },
                                "directive": null,
                                "start": 10172,
                                "end": 10224
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
                                        "name": "outerFnc",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10241,
                                        "end": 10249
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "innerStaticFuncs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10250,
                                        "end": 10266
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10241,
                                      "end": 10266
                                    },
                                    "property": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "outerFnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10267,
                                          "end": 10275
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "innerStaticFuncs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10276,
                                          "end": 10292
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10267,
                                        "end": 10292
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10293,
                                        "end": 10299
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10267,
                                      "end": 10299
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 10241,
                                    "end": 10300
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10303,
                                    "end": 10311
                                  },
                                  "start": 10241,
                                  "end": 10311
                                },
                                "directive": null,
                                "start": 10241,
                                "end": 10312
                              }
                            ],
                            "start": 9629,
                            "end": 10326
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "UnaryExpression",
                                            "operator": "!",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "funcDecl",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10368,
                                                "end": 10376
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isConstructor",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10377,
                                                "end": 10390
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10368,
                                              "end": 10390
                                            },
                                            "prefix": true,
                                            "start": 10367,
                                            "end": 10390
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10414,
                                            "end": 10423
                                          },
                                          "start": 10367,
                                          "end": 10423
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10447,
                                            "end": 10456
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10457,
                                            "end": 10464
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10447,
                                          "end": 10464
                                        },
                                        "start": 10367,
                                        "end": 10464
                                      },
                                      "operator": "&&",
                                      "right": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "container",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10488,
                                              "end": 10497
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "declAST",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10498,
                                              "end": 10505
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10488,
                                            "end": 10505
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10506,
                                            "end": 10514
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10488,
                                          "end": 10514
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "NodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10518,
                                            "end": 10526
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "FuncDecl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10527,
                                            "end": 10535
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10518,
                                          "end": 10535
                                        },
                                        "start": 10488,
                                        "end": 10535
                                      },
                                      "start": 10367,
                                      "end": 10535
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "TSTypeAssertion",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "FuncDecl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10561,
                                            "end": 10569
                                          },
                                          "typeArguments": null,
                                          "start": 10561,
                                          "end": 10569
                                        },
                                        "expression": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10570,
                                            "end": 10579
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10580,
                                            "end": 10587
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10570,
                                          "end": 10587
                                        },
                                        "start": 10560,
                                        "end": 10587
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isConstructor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10589,
                                        "end": 10602
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10559,
                                      "end": 10602
                                    },
                                    "start": 10367,
                                    "end": 10602
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10627,
                                          "end": 10635
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10636,
                                          "end": 10644
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10627,
                                        "end": 10644
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 10627,
                                      "end": 10646
                                    },
                                    "prefix": true,
                                    "start": 10626,
                                    "end": 10646
                                  },
                                  "start": 10367,
                                  "end": 10646
                                },
                                "consequent": {
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
                                          "name": "funcScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10670,
                                          "end": 10679
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10682,
                                                "end": 10689
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10690,
                                                "end": 10700
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10682,
                                              "end": 10700
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "thisType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10701,
                                              "end": 10709
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10682,
                                            "end": 10709
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10710,
                                            "end": 10726
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10682,
                                          "end": 10726
                                        },
                                        "start": 10670,
                                        "end": 10726
                                      },
                                      "directive": null,
                                      "start": 10670,
                                      "end": 10727
                                    }
                                  ],
                                  "start": 10648,
                                  "end": 10754
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "funcScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10798,
                                          "end": 10807
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10810,
                                              "end": 10817
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scopeChain",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10818,
                                              "end": 10828
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10810,
                                            "end": 10828
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10829,
                                            "end": 10834
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10810,
                                          "end": 10834
                                        },
                                        "start": 10798,
                                        "end": 10834
                                      },
                                      "directive": null,
                                      "start": 10798,
                                      "end": 10835
                                    }
                                  ],
                                  "start": 10776,
                                  "end": 10853
                                },
                                "start": 10363,
                                "end": 10853
                              }
                            ],
                            "start": 10344,
                            "end": 10867
                          },
                          "start": 9615,
                          "end": 10867
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nameText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11161,
                                "end": 11169
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nameText",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11173,
                                  "end": 11181
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": "__missing",
                                  "raw": "\"__missing\"",
                                  "start": 11185,
                                  "end": 11196
                                },
                                "start": 11173,
                                "end": 11196
                              },
                              "start": 11161,
                              "end": 11196
                            },
                            "operator": "&&",
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11201,
                                    "end": 11209
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11210,
                                    "end": 11220
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 11201,
                                  "end": 11220
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 11201,
                                "end": 11222
                              },
                              "prefix": true,
                              "start": 11200,
                              "end": 11222
                            },
                            "start": 11161,
                            "end": 11222
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isStatic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11246,
                                  "end": 11254
                                },
                                "consequent": {
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
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 11278,
                                          "end": 11283
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "funcScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11286,
                                              "end": 11295
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11296,
                                              "end": 11305
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 11286,
                                            "end": 11305
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11306,
                                              "end": 11314
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11316,
                                              "end": 11321
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11323,
                                              "end": 11328
                                            }
                                          ],
                                          "optional": false,
                                          "start": 11286,
                                          "end": 11329
                                        },
                                        "start": 11278,
                                        "end": 11329
                                      },
                                      "directive": null,
                                      "start": 11278,
                                      "end": 11330
                                    }
                                  ],
                                  "start": 11256,
                                  "end": 11348
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 11480,
                                          "end": 11485
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "funcScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11488,
                                              "end": 11497
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11498,
                                              "end": 11507
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 11488,
                                            "end": 11507
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11508,
                                              "end": 11516
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11518,
                                              "end": 11523
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11525,
                                              "end": 11530
                                            }
                                          ],
                                          "optional": false,
                                          "start": 11488,
                                          "end": 11531
                                        },
                                        "start": 11480,
                                        "end": 11531
                                      },
                                      "directive": null,
                                      "start": 11480,
                                      "end": 11532
                                    }
                                  ],
                                  "start": 11370,
                                  "end": 11550
                                },
                                "start": 11242,
                                "end": 11550
                              }
                            ],
                            "start": 11224,
                            "end": 11564
                          },
                          "alternate": null,
                          "start": 11157,
                          "end": 11564
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11578,
                                    "end": 11585
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11586,
                                    "end": 11594
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 11578,
                                  "end": 11594
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11595,
                                  "end": 11602
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11578,
                                "end": 11602
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "createFunctionSignature",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11603,
                                "end": 11626
                              },
                              "optional": false,
                              "computed": false,
                              "start": 11578,
                              "end": 11626
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11627,
                                "end": 11635
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "container",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11637,
                                "end": 11646
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11708,
                                "end": 11717
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11719,
                                "end": 11724
                              },
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fgSym",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11726,
                                  "end": 11731
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 11735,
                                  "end": 11739
                                },
                                "start": 11726,
                                "end": 11739
                              }
                            ],
                            "optional": false,
                            "start": 11578,
                            "end": 11740
                          },
                          "directive": null,
                          "start": 11578,
                          "end": 11741
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11841,
                                        "end": 11849
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "accessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11850,
                                        "end": 11864
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11841,
                                      "end": 11864
                                    },
                                    "prefix": true,
                                    "start": 11840,
                                    "end": 11864
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11886,
                                        "end": 11894
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "fncFlags",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11895,
                                        "end": 11903
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11886,
                                      "end": 11903
                                    },
                                    "operator": "&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "FncFlags",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11906,
                                        "end": 11914
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ClassMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11915,
                                        "end": 11926
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11906,
                                      "end": 11926
                                    },
                                    "start": 11886,
                                    "end": 11926
                                  },
                                  "start": 11840,
                                  "end": 11927
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "container",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11947,
                                  "end": 11956
                                },
                                "start": 11840,
                                "end": 11956
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 11980,
                                      "end": 11985
                                    },
                                    "prefix": true,
                                    "start": 11979,
                                    "end": 11985
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 11989,
                                          "end": 11994
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 11995,
                                          "end": 12002
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 11989,
                                        "end": 12002
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12003,
                                        "end": 12011
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11989,
                                      "end": 12011
                                    },
                                    "operator": "!=",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12015,
                                        "end": 12023
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12024,
                                        "end": 12032
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 12015,
                                      "end": 12032
                                    },
                                    "start": 11989,
                                    "end": 12032
                                  },
                                  "start": 11979,
                                  "end": 12032
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12037,
                                      "end": 12045
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isAccessor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12046,
                                      "end": 12056
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 12037,
                                    "end": 12056
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 12037,
                                  "end": 12058
                                },
                                "start": 11978,
                                "end": 12058
                              },
                              "start": 11840,
                              "end": 12059
                            },
                            "operator": "||",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12085,
                                "end": 12090
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fgSym",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12094,
                                    "end": 12099
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12100,
                                    "end": 12110
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 12094,
                                  "end": 12110
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 12094,
                                "end": 12112
                              },
                              "start": 12085,
                              "end": 12112
                            },
                            "start": 11840,
                            "end": 12113
                          },
                          "consequent": {
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
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12146,
                                      "end": 12154
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "accessorSymbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12155,
                                      "end": 12169
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 12146,
                                    "end": 12169
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12172,
                                            "end": 12179
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "typeFlow",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12180,
                                            "end": 12188
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 12172,
                                          "end": 12188
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "checker",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 12189,
                                          "end": 12196
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 12172,
                                        "end": 12196
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "createAccessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12197,
                                        "end": 12217
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 12172,
                                      "end": 12217
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12218,
                                        "end": 12226
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "fgSym",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12228,
                                        "end": 12233
                                      },
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12235,
                                            "end": 12244
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12245,
                                            "end": 12252
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 12235,
                                          "end": 12252
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 12235,
                                        "end": 12254
                                      },
                                      {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "funcDecl",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12257,
                                              "end": 12265
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "isMethod",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12266,
                                              "end": 12274
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 12257,
                                            "end": 12274
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 12257,
                                          "end": 12276
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isStatic",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 12280,
                                          "end": 12288
                                        },
                                        "start": 12257,
                                        "end": 12288
                                      },
                                      {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12291,
                                        "end": 12295
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcScope",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12297,
                                        "end": 12306
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "container",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12308,
                                        "end": 12317
                                      }
                                    ],
                                    "optional": false,
                                    "start": 12172,
                                    "end": 12318
                                  },
                                  "start": 12146,
                                  "end": 12318
                                },
                                "directive": null,
                                "start": 12146,
                                "end": 12319
                              }
                            ],
                            "start": 12128,
                            "end": 12333
                          },
                          "alternate": null,
                          "start": 11836,
                          "end": 12333
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "|=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12347,
                                    "end": 12355
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12356,
                                    "end": 12360
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 12347,
                                  "end": 12360
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12361,
                                  "end": 12367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12347,
                                "end": 12367
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "flags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12368,
                                "end": 12373
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12347,
                              "end": 12373
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12377,
                                "end": 12388
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TypeSetDuringScopeAssignment",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12389,
                                "end": 12417
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12377,
                              "end": 12417
                            },
                            "start": 12347,
                            "end": 12417
                          },
                          "directive": null,
                          "start": 12347,
                          "end": 12418
                        }
                      ],
                      "start": 9235,
                      "end": 12428
                    },
                    "alternate": null,
                    "start": 9127,
                    "end": 12428
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12502,
                          "end": 12510
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12511,
                          "end": 12515
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12502,
                        "end": 12515
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12519,
                          "end": 12527
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12528,
                          "end": 12532
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12519,
                        "end": 12532
                      },
                      "start": 12502,
                      "end": 12532
                    },
                    "consequent": {
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
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12548,
                                  "end": 12556
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12557,
                                  "end": 12561
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12548,
                                "end": 12561
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12562,
                                "end": 12565
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12548,
                              "end": 12565
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12568,
                                  "end": 12576
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12577,
                                  "end": 12581
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12568,
                                "end": 12581
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12582,
                                "end": 12588
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12568,
                              "end": 12588
                            },
                            "start": 12548,
                            "end": 12588
                          },
                          "directive": null,
                          "start": 12548,
                          "end": 12589
                        }
                      ],
                      "start": 12534,
                      "end": 12599
                    },
                    "alternate": null,
                    "start": 12498,
                    "end": 12599
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
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12786,
                          "end": 12794
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12795,
                          "end": 12804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12786,
                        "end": 12804
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12807,
                          "end": 12815
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12816,
                          "end": 12820
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12807,
                        "end": 12820
                      },
                      "start": 12786,
                      "end": 12820
                    },
                    "directive": null,
                    "start": 12786,
                    "end": 12821
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12884,
                        "end": 12892
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isOverload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12893,
                        "end": 12903
                      },
                      "optional": false,
                      "computed": false,
                      "start": 12884,
                      "end": 12903
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 12919,
                          "end": 12926
                        }
                      ],
                      "start": 12905,
                      "end": 12936
                    },
                    "alternate": null,
                    "start": 12880,
                    "end": 12936
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
                          "name": "funcTable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12950,
                          "end": 12959
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12966,
                            "end": 12981
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 12962,
                          "end": 12983
                        },
                        "definite": false,
                        "start": 12950,
                        "end": 12983
                      }
                    ],
                    "declare": false,
                    "start": 12946,
                    "end": 12984
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
                          "name": "funcMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12997,
                          "end": 13008
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13015,
                            "end": 13028
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13033,
                                "end": 13052
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13053,
                                  "end": 13062
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13068,
                                    "end": 13083
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13064,
                                  "end": 13085
                                }
                              ],
                              "start": 13029,
                              "end": 13086
                            }
                          ],
                          "start": 13011,
                          "end": 13087
                        },
                        "definite": false,
                        "start": 12997,
                        "end": 13087
                      }
                    ],
                    "declare": false,
                    "start": 12993,
                    "end": 13088
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
                          "name": "ambientFuncTable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13101,
                          "end": 13117
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13124,
                            "end": 13139
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13120,
                          "end": 13141
                        },
                        "definite": false,
                        "start": 13101,
                        "end": 13141
                      }
                    ],
                    "declare": false,
                    "start": 13097,
                    "end": 13142
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
                          "name": "ambientFuncMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13155,
                          "end": 13173
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13180,
                            "end": 13193
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13198,
                                "end": 13217
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ambientFuncTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13218,
                                  "end": 13234
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13240,
                                    "end": 13255
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13236,
                                  "end": 13257
                                }
                              ],
                              "start": 13194,
                              "end": 13258
                            }
                          ],
                          "start": 13176,
                          "end": 13259
                        },
                        "definite": false,
                        "start": 13155,
                        "end": 13259
                      }
                    ],
                    "declare": false,
                    "start": 13151,
                    "end": 13260
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
                          "name": "funcStaticTable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13273,
                          "end": 13288
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13295,
                            "end": 13310
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13291,
                          "end": 13312
                        },
                        "definite": false,
                        "start": 13273,
                        "end": 13312
                      }
                    ],
                    "declare": false,
                    "start": 13269,
                    "end": 13313
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
                          "name": "funcStaticMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13326,
                          "end": 13343
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13350,
                            "end": 13363
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13368,
                                "end": 13387
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13388,
                                  "end": 13403
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13409,
                                    "end": 13424
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13405,
                                  "end": 13426
                                }
                              ],
                              "start": 13364,
                              "end": 13427
                            }
                          ],
                          "start": 13346,
                          "end": 13428
                        },
                        "definite": false,
                        "start": 13326,
                        "end": 13428
                      }
                    ],
                    "declare": false,
                    "start": 13322,
                    "end": 13429
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
                          "name": "ambientFuncStaticTable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13442,
                          "end": 13464
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13471,
                            "end": 13486
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13467,
                          "end": 13488
                        },
                        "definite": false,
                        "start": 13442,
                        "end": 13488
                      }
                    ],
                    "declare": false,
                    "start": 13438,
                    "end": 13489
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
                          "name": "ambientFuncStaticMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13502,
                          "end": 13526
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13533,
                            "end": 13546
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13551,
                                "end": 13570
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ambientFuncStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13571,
                                  "end": 13593
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13599,
                                    "end": 13614
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13595,
                                  "end": 13616
                                }
                              ],
                              "start": 13547,
                              "end": 13617
                            }
                          ],
                          "start": 13529,
                          "end": 13618
                        },
                        "definite": false,
                        "start": 13502,
                        "end": 13618
                      }
                    ],
                    "declare": false,
                    "start": 13498,
                    "end": 13619
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
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13726,
                          "end": 13734
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13735,
                          "end": 13744
                        },
                        "optional": false,
                        "computed": false,
                        "start": 13726,
                        "end": 13744
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13747,
                                "end": 13754
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "typeFlow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13755,
                                "end": 13763
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13747,
                              "end": 13763
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "checker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13764,
                              "end": 13771
                            },
                            "optional": false,
                            "computed": false,
                            "start": 13747,
                            "end": 13771
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locationInfo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13772,
                            "end": 13784
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13747,
                          "end": 13784
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13785,
                          "end": 13794
                        },
                        "optional": false,
                        "computed": false,
                        "start": 13747,
                        "end": 13794
                      },
                      "start": 13726,
                      "end": 13794
                    },
                    "directive": null,
                    "start": 13726,
                    "end": 13795
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
                          "name": "locals",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13809,
                          "end": 13815
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13822,
                            "end": 13840
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13841,
                              "end": 13852
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientFuncMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13854,
                              "end": 13872
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 13874,
                              "end": 13878
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 13880,
                              "end": 13884
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13886,
                              "end": 13897
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "localContainer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13899,
                              "end": 13913
                            }
                          ],
                          "start": 13818,
                          "end": 13914
                        },
                        "definite": false,
                        "start": 13809,
                        "end": 13914
                      }
                    ],
                    "declare": false,
                    "start": 13805,
                    "end": 13915
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
                          "name": "statics",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13928,
                          "end": 13935
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13942,
                            "end": 13960
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcStaticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13961,
                              "end": 13978
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientFuncStaticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13980,
                              "end": 14004
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14006,
                              "end": 14010
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14012,
                              "end": 14016
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14018,
                              "end": 14029
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14031,
                              "end": 14035
                            }
                          ],
                          "start": 13938,
                          "end": 14036
                        },
                        "definite": false,
                        "start": 13928,
                        "end": 14036
                      }
                    ],
                    "declare": false,
                    "start": 13924,
                    "end": 14037
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14051,
                          "end": 14059
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14060,
                          "end": 14073
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14051,
                        "end": 14073
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14077,
                            "end": 14084
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14085,
                            "end": 14095
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14077,
                          "end": 14095
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14096,
                          "end": 14104
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14077,
                        "end": 14104
                      },
                      "start": 14051,
                      "end": 14104
                    },
                    "consequent": {
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 14120,
                                    "end": 14127
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 14128,
                                    "end": 14138
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 14120,
                                  "end": 14138
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14139,
                                  "end": 14147
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14120,
                                "end": 14147
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "constructorScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14148,
                                "end": 14164
                              },
                              "optional": false,
                              "computed": false,
                              "start": 14120,
                              "end": 14164
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14167,
                              "end": 14173
                            },
                            "start": 14120,
                            "end": 14173
                          },
                          "directive": null,
                          "start": 14120,
                          "end": 14174
                        }
                      ],
                      "start": 14106,
                      "end": 14184
                    },
                    "alternate": null,
                    "start": 14047,
                    "end": 14184
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
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14813,
                          "end": 14821
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "symbols",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14822,
                          "end": 14829
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14813,
                        "end": 14829
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcTable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14832,
                        "end": 14841
                      },
                      "start": 14813,
                      "end": 14841
                    },
                    "directive": null,
                    "start": 14813,
                    "end": 14842
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14857,
                            "end": 14865
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isSpecialFn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14866,
                            "end": 14877
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14857,
                          "end": 14877
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 14857,
                        "end": 14879
                      },
                      "prefix": true,
                      "start": 14856,
                      "end": 14879
                    },
                    "consequent": {
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
                                "name": "group",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14899,
                                "end": 14904
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14907,
                                  "end": 14915
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14916,
                                  "end": 14920
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14907,
                                "end": 14920
                              },
                              "definite": false,
                              "start": 14899,
                              "end": 14920
                            }
                          ],
                          "declare": false,
                          "start": 14895,
                          "end": 14921
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
                                "name": "signature",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14938,
                                "end": 14947
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14950,
                                  "end": 14958
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14959,
                                  "end": 14968
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14950,
                                "end": 14968
                              },
                              "definite": false,
                              "start": 14938,
                              "end": 14968
                            }
                          ],
                          "declare": false,
                          "start": 14934,
                          "end": 14969
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14988,
                                "end": 14996
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14997,
                                "end": 15010
                              },
                              "optional": false,
                              "computed": false,
                              "start": 14988,
                              "end": 15010
                            },
                            "prefix": true,
                            "start": 14987,
                            "end": 15010
                          },
                          "consequent": {
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
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15030,
                                      "end": 15035
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "containedScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15036,
                                      "end": 15050
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15030,
                                    "end": 15050
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "locals",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15053,
                                    "end": 15059
                                  },
                                  "start": 15030,
                                  "end": 15059
                                },
                                "directive": null,
                                "start": 15030,
                                "end": 15060
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
                                      "name": "locals",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15077,
                                      "end": 15083
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15084,
                                      "end": 15093
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15077,
                                    "end": 15093
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15096,
                                      "end": 15101
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15102,
                                      "end": 15108
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15096,
                                    "end": 15108
                                  },
                                  "start": 15077,
                                  "end": 15108
                                },
                                "directive": null,
                                "start": 15077,
                                "end": 15109
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
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15127,
                                      "end": 15132
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15133,
                                      "end": 15144
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15127,
                                    "end": 15144
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "statics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15147,
                                    "end": 15154
                                  },
                                  "start": 15127,
                                  "end": 15154
                                },
                                "directive": null,
                                "start": 15127,
                                "end": 15155
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
                                      "name": "statics",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15172,
                                      "end": 15179
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15180,
                                      "end": 15189
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15172,
                                    "end": 15189
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15192,
                                      "end": 15197
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15198,
                                      "end": 15204
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15192,
                                    "end": 15204
                                  },
                                  "start": 15172,
                                  "end": 15204
                                },
                                "directive": null,
                                "start": 15172,
                                "end": 15205
                              }
                            ],
                            "start": 15012,
                            "end": 15219
                          },
                          "alternate": null,
                          "start": 14983,
                          "end": 15219
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
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15232,
                                "end": 15240
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "enclosingFnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15241,
                                "end": 15253
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15232,
                              "end": 15253
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15256,
                                  "end": 15263
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15264,
                                  "end": 15274
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15256,
                                "end": 15274
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15275,
                                "end": 15278
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15256,
                              "end": 15278
                            },
                            "start": 15232,
                            "end": 15278
                          },
                          "directive": null,
                          "start": 15232,
                          "end": 15279
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
                                "name": "group",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15292,
                                "end": 15297
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "enclosingType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15298,
                                "end": 15311
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15292,
                              "end": 15311
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isStatic",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15314,
                                "end": 15322
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15325,
                                    "end": 15332
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15333,
                                    "end": 15343
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15325,
                                  "end": 15343
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15344,
                                  "end": 15353
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15325,
                                "end": 15353
                              },
                              "alternate": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15356,
                                    "end": 15363
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15364,
                                    "end": 15374
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15356,
                                  "end": 15374
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15375,
                                  "end": 15383
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15356,
                                "end": 15383
                              },
                              "start": 15314,
                              "end": 15383
                            },
                            "start": 15292,
                            "end": 15383
                          },
                          "directive": null,
                          "start": 15292,
                          "end": 15384
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
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15447,
                                "end": 15452
                              },
                              "init": {
                                "type": "TSTypeAssertion",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TypeSymbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15456,
                                    "end": 15466
                                  },
                                  "typeArguments": null,
                                  "start": 15456,
                                  "end": 15466
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15467,
                                      "end": 15470
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15471,
                                      "end": 15475
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15467,
                                    "end": 15475
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15476,
                                    "end": 15482
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15467,
                                  "end": 15482
                                },
                                "start": 15455,
                                "end": 15482
                              },
                              "definite": false,
                              "start": 15447,
                              "end": 15482
                            }
                          ],
                          "declare": false,
                          "start": 15443,
                          "end": 15483
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15502,
                                    "end": 15510
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fncFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15511,
                                    "end": 15519
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15502,
                                  "end": 15519
                                },
                                "operator": "&",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FncFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15522,
                                    "end": 15530
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Signature",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15531,
                                    "end": 15540
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15522,
                                  "end": 15540
                                },
                                "start": 15502,
                                "end": 15540
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "FncFlags",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15545,
                                  "end": 15553
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "None",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15554,
                                  "end": 15558
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15545,
                                "end": 15558
                              },
                              "start": 15501,
                              "end": 15558
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15563,
                                "end": 15571
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "vars",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15572,
                                "end": 15576
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15563,
                              "end": 15576
                            },
                            "start": 15500,
                            "end": 15576
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15596,
                                        "end": 15603
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15604,
                                        "end": 15612
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15596,
                                      "end": 15612
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15613,
                                      "end": 15631
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15596,
                                    "end": 15631
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "locals",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15632,
                                      "end": 15638
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15640,
                                      "end": 15645
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15647,
                                        "end": 15655
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "vars",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15656,
                                        "end": 15660
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15647,
                                      "end": 15660
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcTable",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15714,
                                      "end": 15723
                                    },
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 15725,
                                      "end": 15730
                                    }
                                  ],
                                  "optional": false,
                                  "start": 15596,
                                  "end": 15731
                                },
                                "directive": null,
                                "start": 15596,
                                "end": 15732
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15749,
                                        "end": 15756
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15757,
                                        "end": 15765
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15749,
                                      "end": 15765
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15766,
                                      "end": 15784
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15749,
                                    "end": 15784
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "statics",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15785,
                                      "end": 15792
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15794,
                                      "end": 15799
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15801,
                                        "end": 15809
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "statics",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15810,
                                        "end": 15817
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15801,
                                      "end": 15817
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcStaticTable",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15871,
                                      "end": 15886
                                    },
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 15888,
                                      "end": 15893
                                    }
                                  ],
                                  "optional": false,
                                  "start": 15749,
                                  "end": 15894
                                },
                                "directive": null,
                                "start": 15749,
                                "end": 15895
                              }
                            ],
                            "start": 15578,
                            "end": 15909
                          },
                          "alternate": null,
                          "start": 15496,
                          "end": 15909
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "signature",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15926,
                              "end": 15935
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parameters",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15936,
                              "end": 15946
                            },
                            "optional": false,
                            "computed": false,
                            "start": 15926,
                            "end": 15946
                          },
                          "consequent": {
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
                                      "name": "len",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15970,
                                      "end": 15973
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "signature",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 15976,
                                          "end": 15985
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "parameters",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 15986,
                                          "end": 15996
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 15976,
                                        "end": 15996
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15997,
                                        "end": 16003
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15976,
                                      "end": 16003
                                    },
                                    "definite": false,
                                    "start": 15970,
                                    "end": 16003
                                  }
                                ],
                                "declare": false,
                                "start": 15966,
                                "end": 16004
                              },
                              {
                                "type": "ForStatement",
                                "init": {
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
                                        "typeAnnotation": null,
                                        "start": 16030,
                                        "end": 16031
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 16034,
                                        "end": 16035
                                      },
                                      "definite": false,
                                      "start": 16030,
                                      "end": 16035
                                    }
                                  ],
                                  "declare": false,
                                  "start": 16026,
                                  "end": 16035
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16037,
                                    "end": 16038
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "len",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16041,
                                    "end": 16044
                                  },
                                  "start": 16037,
                                  "end": 16044
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
                                    "start": 16046,
                                    "end": 16047
                                  },
                                  "start": 16046,
                                  "end": 16049
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
                                            "name": "paramSym",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ParameterSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 16087,
                                                  "end": 16102
                                                },
                                                "typeArguments": null,
                                                "start": 16087,
                                                "end": 16102
                                              },
                                              "start": 16085,
                                              "end": 16102
                                            },
                                            "start": 16077,
                                            "end": 16102
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "signature",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16105,
                                                "end": 16114
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "parameters",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16115,
                                                "end": 16125
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16105,
                                              "end": 16125
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16126,
                                              "end": 16127
                                            },
                                            "optional": false,
                                            "computed": true,
                                            "start": 16105,
                                            "end": 16128
                                          },
                                          "definite": false,
                                          "start": 16077,
                                          "end": 16128
                                        }
                                      ],
                                      "declare": false,
                                      "start": 16073,
                                      "end": 16129
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16150,
                                                "end": 16157
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16158,
                                                "end": 16166
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16150,
                                              "end": 16166
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16167,
                                              "end": 16174
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 16150,
                                            "end": 16174
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "resolveTypeLink",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 16175,
                                            "end": 16190
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 16150,
                                          "end": 16190
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "locals",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 16191,
                                            "end": 16197
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "paramSym",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16263,
                                                "end": 16271
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "parameter",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16272,
                                                "end": 16281
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16263,
                                              "end": 16281
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "typeLink",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16282,
                                              "end": 16290
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 16263,
                                            "end": 16290
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 16292,
                                            "end": 16296
                                          }
                                        ],
                                        "optional": false,
                                        "start": 16150,
                                        "end": 16297
                                      },
                                      "directive": null,
                                      "start": 16150,
                                      "end": 16298
                                    }
                                  ],
                                  "start": 16051,
                                  "end": 16316
                                },
                                "start": 16021,
                                "end": 16316
                              }
                            ],
                            "start": 15948,
                            "end": 16330
                          },
                          "alternate": null,
                          "start": 15922,
                          "end": 16330
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16343,
                                    "end": 16350
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16351,
                                    "end": 16359
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16343,
                                  "end": 16359
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16360,
                                  "end": 16367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16343,
                                "end": 16367
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolveTypeLink",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16368,
                                "end": 16383
                              },
                              "optional": false,
                              "computed": false,
                              "start": 16343,
                              "end": 16383
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16384,
                                "end": 16390
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16392,
                                  "end": 16401
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "returnType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16402,
                                  "end": 16412
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16392,
                                "end": 16412
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16470,
                                    "end": 16478
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isSignature",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16479,
                                    "end": 16490
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16470,
                                  "end": 16490
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 16470,
                                "end": 16492
                              }
                            ],
                            "optional": false,
                            "start": 16343,
                            "end": 16493
                          },
                          "directive": null,
                          "start": 16343,
                          "end": 16494
                        }
                      ],
                      "start": 14881,
                      "end": 16504
                    },
                    "alternate": null,
                    "start": 14852,
                    "end": 16504
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 16519,
                            "end": 16527
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 16528,
                            "end": 16541
                          },
                          "optional": false,
                          "computed": false,
                          "start": 16519,
                          "end": 16541
                        },
                        "prefix": true,
                        "start": 16518,
                        "end": 16541
                      },
                      "operator": "||",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasFlag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16545,
                          "end": 16552
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16553,
                              "end": 16561
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fncFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16562,
                              "end": 16570
                            },
                            "optional": false,
                            "computed": false,
                            "start": 16553,
                            "end": 16570
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FncFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16572,
                              "end": 16580
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ClassMethod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16581,
                              "end": 16592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 16572,
                            "end": 16592
                          }
                        ],
                        "optional": false,
                        "start": 16545,
                        "end": 16593
                      },
                      "start": 16518,
                      "end": 16593
                    },
                    "consequent": {
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
                                "name": "thisType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16613,
                                "end": 16621
                              },
                              "init": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16625,
                                      "end": 16633
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16634,
                                      "end": 16647
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 16625,
                                    "end": 16647
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hasFlag",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16651,
                                      "end": 16658
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16659,
                                          "end": 16667
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fncFlags",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16668,
                                          "end": 16676
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 16659,
                                        "end": 16676
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FncFlags",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16678,
                                          "end": 16686
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ClassMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16687,
                                          "end": 16698
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 16678,
                                        "end": 16698
                                      }
                                    ],
                                    "optional": false,
                                    "start": 16651,
                                    "end": 16699
                                  },
                                  "start": 16625,
                                  "end": 16699
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16703,
                                      "end": 16710
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16711,
                                      "end": 16721
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 16703,
                                    "end": 16721
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16722,
                                    "end": 16730
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16703,
                                  "end": 16730
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 16733,
                                  "end": 16737
                                },
                                "start": 16624,
                                "end": 16737
                              },
                              "definite": false,
                              "start": 16613,
                              "end": 16737
                            }
                          ],
                          "declare": false,
                          "start": 16609,
                          "end": 16738
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16751,
                              "end": 16766
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16767,
                                "end": 16773
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16775,
                                "end": 16782
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thisType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16784,
                                "end": 16792
                              },
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 16794,
                                "end": 16798
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16800,
                                "end": 16808
                              }
                            ],
                            "optional": false,
                            "start": 16751,
                            "end": 16809
                          },
                          "directive": null,
                          "start": 16751,
                          "end": 16810
                        }
                      ],
                      "start": 16595,
                      "end": 16820
                    },
                    "alternate": null,
                    "start": 16514,
                    "end": 16820
                  }
                ],
                "start": 6441,
                "end": 16826
              },
              "expression": false,
              "start": 6369,
              "end": 16826
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6362,
            "end": 16826
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignCatchScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 16848,
                "end": 16868
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16874,
                        "end": 16877
                      },
                      "typeArguments": null,
                      "start": 16874,
                      "end": 16877
                    },
                    "start": 16872,
                    "end": 16877
                  },
                  "start": 16869,
                  "end": 16877
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16888,
                        "end": 16906
                      },
                      "typeArguments": null,
                      "start": 16888,
                      "end": 16906
                    },
                    "start": 16886,
                    "end": 16906
                  },
                  "start": 16879,
                  "end": 16906
                }
              ],
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
                          "name": "catchBlock",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16922,
                          "end": 16932
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Catch",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16936,
                              "end": 16941
                            },
                            "typeArguments": null,
                            "start": 16936,
                            "end": 16941
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 16942,
                            "end": 16945
                          },
                          "start": 16935,
                          "end": 16945
                        },
                        "definite": false,
                        "start": 16922,
                        "end": 16945
                      }
                    ],
                    "declare": false,
                    "start": 16918,
                    "end": 16946
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "catchBlock",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16959,
                        "end": 16969
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16970,
                        "end": 16975
                      },
                      "optional": false,
                      "computed": false,
                      "start": 16959,
                      "end": 16975
                    },
                    "consequent": {
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
                                "name": "catchTable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16995,
                                "end": 17005
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ScopedMembers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17012,
                                  "end": 17025
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "DualStringHashTable",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17030,
                                      "end": 17049
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "StringHashTable",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17054,
                                          "end": 17069
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 17050,
                                        "end": 17071
                                      },
                                      {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "StringHashTable",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17077,
                                          "end": 17092
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 17073,
                                        "end": 17094
                                      }
                                    ],
                                    "start": 17026,
                                    "end": 17095
                                  }
                                ],
                                "start": 17008,
                                "end": 17096
                              },
                              "definite": false,
                              "start": 16995,
                              "end": 17096
                            }
                          ],
                          "declare": false,
                          "start": 16991,
                          "end": 17097
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
                                "name": "catchLocals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17190,
                                "end": 17201
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SymbolScopeBuilder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17208,
                                  "end": 17226
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "catchTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17227,
                                    "end": 17237
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17239,
                                    "end": 17243
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17245,
                                    "end": 17249
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17251,
                                    "end": 17255
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17257,
                                        "end": 17264
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17265,
                                        "end": 17275
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17257,
                                      "end": 17275
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17276,
                                      "end": 17281
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17257,
                                    "end": 17281
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17334,
                                          "end": 17341
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17342,
                                          "end": 17352
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 17334,
                                        "end": 17352
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scope",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17353,
                                        "end": 17358
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17334,
                                      "end": 17358
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17359,
                                      "end": 17368
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17334,
                                    "end": 17368
                                  }
                                ],
                                "start": 17204,
                                "end": 17369
                              },
                              "definite": false,
                              "start": 17190,
                              "end": 17369
                            }
                          ],
                          "declare": false,
                          "start": 17186,
                          "end": 17370
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
                                "name": "catchBlock",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17383,
                                "end": 17393
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17394,
                                "end": 17408
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17383,
                              "end": 17408
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "catchLocals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17411,
                              "end": 17422
                            },
                            "start": 17383,
                            "end": 17422
                          },
                          "directive": null,
                          "start": 17383,
                          "end": 17423
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17436,
                              "end": 17451
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "catchLocals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17452,
                                "end": 17463
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17465,
                                "end": 17472
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17474,
                                    "end": 17481
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17482,
                                    "end": 17492
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17474,
                                  "end": 17492
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17493,
                                  "end": 17501
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17474,
                                "end": 17501
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17503,
                                    "end": 17510
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17511,
                                    "end": 17521
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17503,
                                  "end": 17521
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17522,
                                  "end": 17531
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17503,
                                "end": 17531
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17533,
                                    "end": 17540
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17541,
                                    "end": 17551
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17533,
                                  "end": 17551
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17552,
                                  "end": 17555
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17533,
                                "end": 17555
                              }
                            ],
                            "optional": false,
                            "start": 17436,
                            "end": 17556
                          },
                          "directive": null,
                          "start": 17436,
                          "end": 17557
                        }
                      ],
                      "start": 16977,
                      "end": 17567
                    },
                    "alternate": null,
                    "start": 16955,
                    "end": 17567
                  }
                ],
                "start": 16908,
                "end": 17573
              },
              "expression": false,
              "start": 16839,
              "end": 17573
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16832,
            "end": 17573
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "preAssignScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 17595,
                "end": 17610
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17616,
                        "end": 17619
                      },
                      "typeArguments": null,
                      "start": 17616,
                      "end": 17619
                    },
                    "start": 17614,
                    "end": 17619
                  },
                  "start": 17611,
                  "end": 17619
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17629,
                        "end": 17632
                      },
                      "typeArguments": null,
                      "start": 17629,
                      "end": 17632
                    },
                    "start": 17627,
                    "end": 17632
                  },
                  "start": 17621,
                  "end": 17632
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17642,
                        "end": 17652
                      },
                      "typeArguments": null,
                      "start": 17642,
                      "end": 17652
                    },
                    "start": 17640,
                    "end": 17652
                  },
                  "start": 17634,
                  "end": 17652
                }
              ],
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
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AssignScopeContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17676,
                                "end": 17694
                              },
                              "typeArguments": null,
                              "start": 17676,
                              "end": 17694
                            },
                            "start": 17675,
                            "end": 17694
                          },
                          "start": 17668,
                          "end": 17694
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17697,
                            "end": 17703
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17704,
                            "end": 17709
                          },
                          "optional": false,
                          "computed": false,
                          "start": 17697,
                          "end": 17709
                        },
                        "definite": false,
                        "start": 17668,
                        "end": 17709
                      }
                    ],
                    "declare": false,
                    "start": 17664,
                    "end": 17710
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
                          "name": "go",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 17723,
                          "end": 17725
                        },
                        "init": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 17728,
                          "end": 17732
                        },
                        "definite": false,
                        "start": 17723,
                        "end": 17732
                      }
                    ],
                    "declare": false,
                    "start": 17719,
                    "end": 17733
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17747,
                      "end": 17750
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17770,
                                "end": 17773
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17774,
                                "end": 17782
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17770,
                              "end": 17782
                            },
                            "operator": "==",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17786,
                                "end": 17794
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17795,
                                "end": 17799
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17786,
                              "end": 17799
                            },
                            "start": 17770,
                            "end": 17799
                          },
                          "consequent": {
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
                                      "name": "list",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17823,
                                      "end": 17827
                                    },
                                    "init": {
                                      "type": "TSTypeAssertion",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ASTList",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17831,
                                          "end": 17838
                                        },
                                        "typeArguments": null,
                                        "start": 17831,
                                        "end": 17838
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17839,
                                        "end": 17842
                                      },
                                      "start": 17830,
                                      "end": 17842
                                    },
                                    "definite": false,
                                    "start": 17823,
                                    "end": 17842
                                  }
                                ],
                                "declare": false,
                                "start": 17819,
                                "end": 17843
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
                                      "name": "list",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17860,
                                      "end": 17864
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "enclosingScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17865,
                                      "end": 17879
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17860,
                                    "end": 17879
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17882,
                                        "end": 17889
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17890,
                                        "end": 17900
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17882,
                                      "end": 17900
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17901,
                                      "end": 17906
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17882,
                                    "end": 17906
                                  },
                                  "start": 17860,
                                  "end": 17906
                                },
                                "directive": null,
                                "start": 17860,
                                "end": 17907
                              }
                            ],
                            "start": 17801,
                            "end": 17921
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17943,
                                  "end": 17946
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17947,
                                  "end": 17955
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17943,
                                "end": 17955
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17959,
                                  "end": 17967
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ModuleDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17968,
                                  "end": 17985
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17959,
                                "end": 17985
                              },
                              "start": 17943,
                              "end": 17985
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "preAssignModuleScopes",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18005,
                                      "end": 18026
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18027,
                                        "end": 18030
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18032,
                                        "end": 18039
                                      }
                                    ],
                                    "optional": false,
                                    "start": 18005,
                                    "end": 18040
                                  },
                                  "directive": null,
                                  "start": 18005,
                                  "end": 18041
                                }
                              ],
                              "start": 17987,
                              "end": 18055
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ast",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18077,
                                    "end": 18080
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18081,
                                    "end": 18089
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 18077,
                                  "end": 18089
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18093,
                                    "end": 18101
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ClassDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18102,
                                    "end": 18118
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 18093,
                                  "end": 18118
                                },
                                "start": 18077,
                                "end": 18118
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "preAssignClassScopes",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18138,
                                        "end": 18158
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18159,
                                          "end": 18162
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18164,
                                          "end": 18171
                                        }
                                      ],
                                      "optional": false,
                                      "start": 18138,
                                      "end": 18172
                                    },
                                    "directive": null,
                                    "start": 18138,
                                    "end": 18173
                                  }
                                ],
                                "start": 18120,
                                "end": 18187
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18209,
                                      "end": 18212
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18213,
                                      "end": 18221
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 18209,
                                    "end": 18221
                                  },
                                  "operator": "==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "NodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18225,
                                      "end": 18233
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "InterfaceDeclaration",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18234,
                                      "end": 18254
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 18225,
                                    "end": 18254
                                  },
                                  "start": 18209,
                                  "end": 18254
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "preAssignInterfaceScopes",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18274,
                                          "end": 18298
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ast",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18299,
                                            "end": 18302
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18304,
                                            "end": 18311
                                          }
                                        ],
                                        "optional": false,
                                        "start": 18274,
                                        "end": 18312
                                      },
                                      "directive": null,
                                      "start": 18274,
                                      "end": 18313
                                    }
                                  ],
                                  "start": 18256,
                                  "end": 18327
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18349,
                                        "end": 18352
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18353,
                                        "end": 18361
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 18349,
                                      "end": 18361
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18365,
                                        "end": 18373
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "With",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18374,
                                        "end": 18378
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 18365,
                                      "end": 18378
                                    },
                                    "start": 18349,
                                    "end": 18378
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "preAssignWithScopes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18398,
                                            "end": 18417
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ast",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18418,
                                              "end": 18421
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18423,
                                              "end": 18430
                                            }
                                          ],
                                          "optional": false,
                                          "start": 18398,
                                          "end": 18431
                                        },
                                        "directive": null,
                                        "start": 18398,
                                        "end": 18432
                                      }
                                    ],
                                    "start": 18380,
                                    "end": 18446
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18468,
                                          "end": 18471
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18472,
                                          "end": 18480
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 18468,
                                        "end": 18480
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18484,
                                          "end": 18492
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18493,
                                          "end": 18501
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 18484,
                                        "end": 18501
                                      },
                                      "start": 18468,
                                      "end": 18501
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "preAssignFuncDeclScopes",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18521,
                                              "end": 18544
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 18545,
                                                "end": 18548
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 18550,
                                                "end": 18557
                                              }
                                            ],
                                            "optional": false,
                                            "start": 18521,
                                            "end": 18558
                                          },
                                          "directive": null,
                                          "start": 18521,
                                          "end": 18559
                                        }
                                      ],
                                      "start": 18503,
                                      "end": 18573
                                    },
                                    "alternate": {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ast",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18595,
                                            "end": 18598
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18599,
                                            "end": 18607
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 18595,
                                          "end": 18607
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "NodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18611,
                                            "end": 18619
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Catch",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18620,
                                            "end": 18625
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 18611,
                                          "end": 18625
                                        },
                                        "start": 18595,
                                        "end": 18625
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "preAssignCatchScopes",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 18645,
                                                "end": 18665
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 18666,
                                                  "end": 18669
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 18671,
                                                  "end": 18678
                                                }
                                              ],
                                              "optional": false,
                                              "start": 18645,
                                              "end": 18679
                                            },
                                            "directive": null,
                                            "start": 18645,
                                            "end": 18680
                                          }
                                        ],
                                        "start": 18627,
                                        "end": 18694
                                      },
                                      "alternate": {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ast",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18716,
                                              "end": 18719
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nodeType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18720,
                                              "end": 18728
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 18716,
                                            "end": 18728
                                          },
                                          "operator": "==",
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "NodeType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18732,
                                              "end": 18740
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TypeRef",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18741,
                                              "end": 18748
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 18732,
                                            "end": 18748
                                          },
                                          "start": 18716,
                                          "end": 18748
                                        },
                                        "consequent": {
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
                                                  "name": "go",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 18768,
                                                  "end": 18770
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": false,
                                                  "raw": "false",
                                                  "start": 18773,
                                                  "end": 18778
                                                },
                                                "start": 18768,
                                                "end": 18778
                                              },
                                              "directive": null,
                                              "start": 18768,
                                              "end": 18779
                                            }
                                          ],
                                          "start": 18750,
                                          "end": 18793
                                        },
                                        "alternate": null,
                                        "start": 18712,
                                        "end": 18793
                                      },
                                      "start": 18591,
                                      "end": 18793
                                    },
                                    "start": 18464,
                                    "end": 18793
                                  },
                                  "start": 18345,
                                  "end": 18793
                                },
                                "start": 18205,
                                "end": 18793
                              },
                              "start": 18073,
                              "end": 18793
                            },
                            "start": 17939,
                            "end": 18793
                          },
                          "start": 17766,
                          "end": 18793
                        }
                      ],
                      "start": 17752,
                      "end": 18803
                    },
                    "alternate": null,
                    "start": 17743,
                    "end": 18803
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
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18812,
                            "end": 18818
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18819,
                            "end": 18826
                          },
                          "optional": false,
                          "computed": false,
                          "start": 18812,
                          "end": 18826
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 18827,
                          "end": 18837
                        },
                        "optional": false,
                        "computed": false,
                        "start": 18812,
                        "end": 18837
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 18840,
                        "end": 18842
                      },
                      "start": 18812,
                      "end": 18842
                    },
                    "directive": null,
                    "start": 18812,
                    "end": 18843
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18859,
                      "end": 18862
                    },
                    "start": 18852,
                    "end": 18863
                  }
                ],
                "start": 17654,
                "end": 18869
              },
              "expression": false,
              "start": 17586,
              "end": 18869
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17579,
            "end": 18869
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "postAssignScopes",
                "optional": false,
                "typeAnnotation": null,
                "start": 18891,
                "end": 18907
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 18913,
                        "end": 18916
                      },
                      "typeArguments": null,
                      "start": 18913,
                      "end": 18916
                    },
                    "start": 18911,
                    "end": 18916
                  },
                  "start": 18908,
                  "end": 18916
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 18926,
                        "end": 18929
                      },
                      "typeArguments": null,
                      "start": 18926,
                      "end": 18929
                    },
                    "start": 18924,
                    "end": 18929
                  },
                  "start": 18918,
                  "end": 18929
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 18939,
                        "end": 18949
                      },
                      "typeArguments": null,
                      "start": 18939,
                      "end": 18949
                    },
                    "start": 18937,
                    "end": 18949
                  },
                  "start": 18931,
                  "end": 18949
                }
              ],
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
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AssignScopeContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 18973,
                                "end": 18991
                              },
                              "typeArguments": null,
                              "start": 18973,
                              "end": 18991
                            },
                            "start": 18972,
                            "end": 18991
                          },
                          "start": 18965,
                          "end": 18991
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18994,
                            "end": 19000
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 19001,
                            "end": 19006
                          },
                          "optional": false,
                          "computed": false,
                          "start": 18994,
                          "end": 19006
                        },
                        "definite": false,
                        "start": 18965,
                        "end": 19006
                      }
                    ],
                    "declare": false,
                    "start": 18961,
                    "end": 19007
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
                          "name": "go",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 19020,
                          "end": 19022
                        },
                        "init": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 19025,
                          "end": 19029
                        },
                        "definite": false,
                        "start": 19020,
                        "end": 19029
                      }
                    ],
                    "declare": false,
                    "start": 19016,
                    "end": 19030
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19043,
                      "end": 19046
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19066,
                                "end": 19069
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19070,
                                "end": 19078
                              },
                              "optional": false,
                              "computed": false,
                              "start": 19066,
                              "end": 19078
                            },
                            "operator": "==",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19082,
                                "end": 19090
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ModuleDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19091,
                                "end": 19108
                              },
                              "optional": false,
                              "computed": false,
                              "start": 19082,
                              "end": 19108
                            },
                            "start": 19066,
                            "end": 19108
                          },
                          "consequent": {
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
                                      "name": "prevModDecl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19132,
                                      "end": 19143
                                    },
                                    "init": {
                                      "type": "TSTypeAssertion",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ModuleDeclaration",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 19147,
                                          "end": 19164
                                        },
                                        "typeArguments": null,
                                        "start": 19147,
                                        "end": 19164
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19165,
                                        "end": 19168
                                      },
                                      "start": 19146,
                                      "end": 19168
                                    },
                                    "definite": false,
                                    "start": 19132,
                                    "end": 19168
                                  }
                                ],
                                "declare": false,
                                "start": 19128,
                                "end": 19169
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "popAssignScope",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19187,
                                    "end": 19201
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19202,
                                      "end": 19209
                                    }
                                  ],
                                  "optional": false,
                                  "start": 19187,
                                  "end": 19210
                                },
                                "directive": null,
                                "start": 19187,
                                "end": 19211
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19229,
                                        "end": 19236
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19237,
                                        "end": 19249
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19229,
                                      "end": 19249
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "pop",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19250,
                                      "end": 19253
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19229,
                                    "end": 19253
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 19229,
                                  "end": 19255
                                },
                                "directive": null,
                                "start": 19229,
                                "end": 19256
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19277,
                                        "end": 19284
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19285,
                                        "end": 19297
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19277,
                                      "end": 19297
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19298,
                                      "end": 19304
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19277,
                                    "end": 19304
                                  },
                                  "operator": ">=",
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 19308,
                                    "end": 19309
                                  },
                                  "start": 19277,
                                  "end": 19309
                                },
                                "consequent": {
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
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19333,
                                                "end": 19340
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19341,
                                                "end": 19349
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 19333,
                                              "end": 19349
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19350,
                                              "end": 19357
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 19333,
                                            "end": 19357
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "currentModDecl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 19358,
                                            "end": 19372
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 19333,
                                          "end": 19372
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19375,
                                              "end": 19382
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "modDeclChain",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19383,
                                              "end": 19395
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 19375,
                                            "end": 19395
                                          },
                                          "property": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19396,
                                                  "end": 19403
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "modDeclChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19404,
                                                  "end": 19416
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 19396,
                                                "end": 19416
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "length",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19417,
                                                "end": 19423
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 19396,
                                              "end": 19423
                                            },
                                            "operator": "-",
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 19426,
                                              "end": 19427
                                            },
                                            "start": 19396,
                                            "end": 19427
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 19375,
                                          "end": 19428
                                        },
                                        "start": 19333,
                                        "end": 19428
                                      },
                                      "directive": null,
                                      "start": 19333,
                                      "end": 19429
                                    }
                                  ],
                                  "start": 19311,
                                  "end": 19447
                                },
                                "alternate": null,
                                "start": 19273,
                                "end": 19447
                              }
                            ],
                            "start": 19110,
                            "end": 19461
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19483,
                                  "end": 19486
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19487,
                                  "end": 19495
                                },
                                "optional": false,
                                "computed": false,
                                "start": 19483,
                                "end": 19495
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19499,
                                  "end": 19507
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClassDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19508,
                                  "end": 19524
                                },
                                "optional": false,
                                "computed": false,
                                "start": 19499,
                                "end": 19524
                              },
                              "start": 19483,
                              "end": 19524
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "popAssignScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19544,
                                      "end": 19558
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19559,
                                        "end": 19566
                                      }
                                    ],
                                    "optional": false,
                                    "start": 19544,
                                    "end": 19567
                                  },
                                  "directive": null,
                                  "start": 19544,
                                  "end": 19568
                                }
                              ],
                              "start": 19526,
                              "end": 19582
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ast",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19604,
                                    "end": 19607
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19608,
                                    "end": 19616
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 19604,
                                  "end": 19616
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19620,
                                    "end": 19628
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "InterfaceDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19629,
                                    "end": 19649
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 19620,
                                  "end": 19649
                                },
                                "start": 19604,
                                "end": 19649
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "popAssignScope",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19669,
                                        "end": 19683
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 19684,
                                          "end": 19691
                                        }
                                      ],
                                      "optional": false,
                                      "start": 19669,
                                      "end": 19692
                                    },
                                    "directive": null,
                                    "start": 19669,
                                    "end": 19693
                                  }
                                ],
                                "start": 19651,
                                "end": 19707
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19729,
                                      "end": 19732
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19733,
                                      "end": 19741
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19729,
                                    "end": 19741
                                  },
                                  "operator": "==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "NodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19745,
                                      "end": 19753
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "With",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19754,
                                      "end": 19758
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19745,
                                    "end": 19758
                                  },
                                  "start": 19729,
                                  "end": 19758
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "popAssignScope",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 19778,
                                          "end": 19792
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 19793,
                                            "end": 19800
                                          }
                                        ],
                                        "optional": false,
                                        "start": 19778,
                                        "end": 19801
                                      },
                                      "directive": null,
                                      "start": 19778,
                                      "end": 19802
                                    }
                                  ],
                                  "start": 19760,
                                  "end": 19816
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19838,
                                        "end": 19841
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19842,
                                        "end": 19850
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19838,
                                      "end": 19850
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19854,
                                        "end": 19862
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19863,
                                        "end": 19871
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19854,
                                      "end": 19871
                                    },
                                    "start": 19838,
                                    "end": 19871
                                  },
                                  "consequent": {
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
                                              "name": "funcDecl",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19895,
                                              "end": 19903
                                            },
                                            "init": {
                                              "type": "TSTypeAssertion",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FuncDecl",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19907,
                                                  "end": 19915
                                                },
                                                "typeArguments": null,
                                                "start": 19907,
                                                "end": 19915
                                              },
                                              "expression": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19916,
                                                "end": 19919
                                              },
                                              "start": 19906,
                                              "end": 19919
                                            },
                                            "definite": false,
                                            "start": 19895,
                                            "end": 19919
                                          }
                                        ],
                                        "declare": false,
                                        "start": 19891,
                                        "end": 19920
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "funcDecl",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19943,
                                                  "end": 19951
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isConstructor",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19952,
                                                  "end": 19965
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 19943,
                                                "end": 19965
                                              },
                                              "prefix": true,
                                              "start": 19942,
                                              "end": 19965
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "hasFlag",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19969,
                                                "end": 19976
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "funcDecl",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 19977,
                                                    "end": 19985
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "fncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 19986,
                                                    "end": 19994
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 19977,
                                                  "end": 19994
                                                },
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "FncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 19996,
                                                    "end": 20004
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "ClassMethod",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20005,
                                                    "end": 20016
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 19996,
                                                  "end": 20016
                                                }
                                              ],
                                              "optional": false,
                                              "start": 19969,
                                              "end": 20017
                                            },
                                            "start": 19942,
                                            "end": 20017
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "!",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "funcDecl",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 20023,
                                                "end": 20031
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isOverload",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 20032,
                                                "end": 20042
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 20023,
                                              "end": 20042
                                            },
                                            "prefix": true,
                                            "start": 20022,
                                            "end": 20042
                                          },
                                          "start": 19941,
                                          "end": 20042
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "popAssignScope",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 20066,
                                                  "end": 20080
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "context",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20081,
                                                    "end": 20088
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 20066,
                                                "end": 20089
                                              },
                                              "directive": null,
                                              "start": 20066,
                                              "end": 20090
                                            }
                                          ],
                                          "start": 20044,
                                          "end": 20108
                                        },
                                        "alternate": null,
                                        "start": 19937,
                                        "end": 20108
                                      }
                                    ],
                                    "start": 19873,
                                    "end": 20122
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20144,
                                          "end": 20147
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20148,
                                          "end": 20156
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 20144,
                                        "end": 20156
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20160,
                                          "end": 20168
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Catch",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20169,
                                          "end": 20174
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 20160,
                                        "end": 20174
                                      },
                                      "start": 20144,
                                      "end": 20174
                                    },
                                    "consequent": {
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
                                                "name": "catchBlock",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 20198,
                                                "end": 20208
                                              },
                                              "init": {
                                                "type": "TSTypeAssertion",
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Catch",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20212,
                                                    "end": 20217
                                                  },
                                                  "typeArguments": null,
                                                  "start": 20212,
                                                  "end": 20217
                                                },
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 20218,
                                                  "end": 20221
                                                },
                                                "start": 20211,
                                                "end": 20221
                                              },
                                              "definite": false,
                                              "start": 20198,
                                              "end": 20221
                                            }
                                          ],
                                          "declare": false,
                                          "start": 20194,
                                          "end": 20222
                                        },
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "catchBlock",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 20243,
                                              "end": 20253
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "param",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 20254,
                                              "end": 20259
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 20243,
                                            "end": 20259
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "popAssignScope",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20283,
                                                    "end": 20297
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "context",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 20298,
                                                      "end": 20305
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 20283,
                                                  "end": 20306
                                                },
                                                "directive": null,
                                                "start": 20283,
                                                "end": 20307
                                              }
                                            ],
                                            "start": 20261,
                                            "end": 20325
                                          },
                                          "alternate": null,
                                          "start": 20239,
                                          "end": 20325
                                        }
                                      ],
                                      "start": 20176,
                                      "end": 20339
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
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "go",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 20375,
                                              "end": 20377
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 20380,
                                              "end": 20385
                                            },
                                            "start": 20375,
                                            "end": 20385
                                          },
                                          "directive": null,
                                          "start": 20375,
                                          "end": 20386
                                        }
                                      ],
                                      "start": 20357,
                                      "end": 20400
                                    },
                                    "start": 20140,
                                    "end": 20400
                                  },
                                  "start": 19834,
                                  "end": 20400
                                },
                                "start": 19725,
                                "end": 20400
                              },
                              "start": 19600,
                              "end": 20400
                            },
                            "start": 19479,
                            "end": 20400
                          },
                          "start": 19062,
                          "end": 20400
                        }
                      ],
                      "start": 19048,
                      "end": 20410
                    },
                    "alternate": null,
                    "start": 19039,
                    "end": 20410
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
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 20419,
                            "end": 20425
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 20426,
                            "end": 20433
                          },
                          "optional": false,
                          "computed": false,
                          "start": 20419,
                          "end": 20433
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20434,
                          "end": 20444
                        },
                        "optional": false,
                        "computed": false,
                        "start": 20419,
                        "end": 20444
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 20447,
                        "end": 20449
                      },
                      "start": 20419,
                      "end": 20449
                    },
                    "directive": null,
                    "start": 20419,
                    "end": 20450
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20466,
                      "end": 20469
                    },
                    "start": 20459,
                    "end": 20470
                  }
                ],
                "start": 18951,
                "end": 20476
              },
              "expression": false,
              "start": 18882,
              "end": 20476
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18875,
            "end": 20476
          }
        ],
        "start": 232,
        "end": 20478
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 20478
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 20478
}
```
