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
        "start": 218,
        "end": 228
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
                "start": 249,
                "end": 267
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
                      "start": 278,
                      "end": 289
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
                                  "start": 310,
                                  "end": 320
                                },
                                "typeArguments": null,
                                "start": 310,
                                "end": 320
                              },
                              "start": 308,
                              "end": 320
                            },
                            "start": 298,
                            "end": 320
                          },
                          "readonly": false,
                          "static": false,
                          "start": 291,
                          "end": 320
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
                                  "start": 360,
                                  "end": 368
                                },
                                "typeArguments": null,
                                "start": 360,
                                "end": 368
                              },
                              "start": 358,
                              "end": 368
                            },
                            "start": 350,
                            "end": 368
                          },
                          "readonly": false,
                          "static": false,
                          "start": 343,
                          "end": 368
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
                                    "start": 412,
                                    "end": 429
                                  },
                                  "typeArguments": null,
                                  "start": 412,
                                  "end": 429
                                },
                                "start": 412,
                                "end": 431
                              },
                              "start": 410,
                              "end": 431
                            },
                            "start": 398,
                            "end": 431
                          },
                          "readonly": false,
                          "static": false,
                          "start": 391,
                          "end": 431
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 433,
                        "end": 444
                      },
                      "expression": false,
                      "start": 290,
                      "end": 444
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 278,
                    "end": 444
                  }
                ],
                "start": 268,
                "end": 450
              },
              "abstract": false,
              "declare": false,
              "start": 243,
              "end": 450
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 450
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
                "start": 472,
                "end": 487
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
                        "start": 495,
                        "end": 506
                      },
                      "typeArguments": null,
                      "start": 495,
                      "end": 506
                    },
                    "start": 493,
                    "end": 506
                  },
                  "start": 488,
                  "end": 506
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
                        "start": 525,
                        "end": 543
                      },
                      "typeArguments": null,
                      "start": 525,
                      "end": 543
                    },
                    "start": 523,
                    "end": 543
                  },
                  "start": 516,
                  "end": 543
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
                        "start": 559,
                        "end": 563
                      },
                      "typeArguments": null,
                      "start": 559,
                      "end": 563
                    },
                    "start": 557,
                    "end": 563
                  },
                  "start": 553,
                  "end": 563
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
                        "start": 584,
                        "end": 588
                      },
                      "typeArguments": null,
                      "start": 584,
                      "end": 588
                    },
                    "start": 582,
                    "end": 588
                  },
                  "start": 573,
                  "end": 588
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
                        "start": 603,
                        "end": 611
                      },
                      "typeArguments": null,
                      "start": 603,
                      "end": 611
                    },
                    "start": 601,
                    "end": 611
                  },
                  "start": 598,
                  "end": 611
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
                          "start": 628,
                          "end": 633
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 650
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 651,
                              "end": 655
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 657,
                                "end": 664
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 665,
                                "end": 675
                              },
                              "optional": false,
                              "computed": false,
                              "start": 657,
                              "end": 675
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 677,
                              "end": 682
                            }
                          ],
                          "start": 636,
                          "end": 683
                        },
                        "definite": false,
                        "start": 628,
                        "end": 683
                      }
                    ],
                    "declare": false,
                    "start": 624,
                    "end": 684
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
                          "start": 693,
                          "end": 698
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 699,
                          "end": 707
                        },
                        "optional": false,
                        "computed": false,
                        "start": 693,
                        "end": 707
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 714
                      },
                      "start": 693,
                      "end": 714
                    },
                    "directive": null,
                    "start": 693,
                    "end": 715
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
                          "start": 724,
                          "end": 729
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "classType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 730,
                          "end": 739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 724,
                        "end": 739
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "classType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 742,
                        "end": 751
                      },
                      "start": 724,
                      "end": 751
                    },
                    "directive": null,
                    "start": 724,
                    "end": 752
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
                          "start": 761,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fnc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 770
                        },
                        "optional": false,
                        "computed": false,
                        "start": 761,
                        "end": 770
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fnc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 773,
                        "end": 776
                      },
                      "start": 761,
                      "end": 776
                    },
                    "directive": null,
                    "start": 761,
                    "end": 777
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
                          "start": 786,
                          "end": 793
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 794,
                          "end": 804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 786,
                        "end": 804
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chain",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 807,
                        "end": 812
                      },
                      "start": 786,
                      "end": 812
                    },
                    "directive": null,
                    "start": 786,
                    "end": 813
                  }
                ],
                "start": 613,
                "end": 819
              },
              "expression": false,
              "start": 463,
              "end": 819
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 456,
            "end": 819
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
                "start": 841,
                "end": 855
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
                        "start": 865,
                        "end": 883
                      },
                      "typeArguments": null,
                      "start": 865,
                      "end": 883
                    },
                    "start": 863,
                    "end": 883
                  },
                  "start": 856,
                  "end": 883
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
                          "start": 895,
                          "end": 902
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 913
                        },
                        "optional": false,
                        "computed": false,
                        "start": 895,
                        "end": 913
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
                            "start": 916,
                            "end": 923
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 934
                          },
                          "optional": false,
                          "computed": false,
                          "start": 916,
                          "end": 934
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "previous",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 935,
                          "end": 943
                        },
                        "optional": false,
                        "computed": false,
                        "start": 916,
                        "end": 943
                      },
                      "start": 895,
                      "end": 943
                    },
                    "directive": null,
                    "start": 895,
                    "end": 944
                  }
                ],
                "start": 885,
                "end": 950
              },
              "expression": false,
              "start": 832,
              "end": 950
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 825,
            "end": 950
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
                "start": 972,
                "end": 987
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
                        "start": 991,
                        "end": 997
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 997
                    },
                    "start": 989,
                    "end": 997
                  },
                  "start": 988,
                  "end": 997
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
                        "start": 1002,
                        "end": 1008
                      },
                      "typeArguments": null,
                      "start": 1002,
                      "end": 1008
                    },
                    "start": 1000,
                    "end": 1008
                  },
                  "start": 999,
                  "end": 1008
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
                          "start": 1026,
                          "end": 1027
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1031,
                          "end": 1035
                        },
                        "start": 1026,
                        "end": 1035
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
                              "start": 1042,
                              "end": 1043
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isInstanceProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1044,
                              "end": 1062
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1042,
                            "end": 1062
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1042,
                          "end": 1064
                        },
                        "prefix": true,
                        "start": 1041,
                        "end": 1064
                      },
                      "start": 1025,
                      "end": 1065
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
                            "start": 1089,
                            "end": 1090
                          },
                          "start": 1082,
                          "end": 1091
                        }
                      ],
                      "start": 1068,
                      "end": 1101
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
                            "start": 1136,
                            "end": 1137
                          },
                          "start": 1129,
                          "end": 1138
                        }
                      ],
                      "start": 1115,
                      "end": 1148
                    },
                    "start": 1020,
                    "end": 1148
                  }
                ],
                "start": 1010,
                "end": 1154
              },
              "expression": false,
              "start": 963,
              "end": 1154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 956,
            "end": 1154
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
                "start": 1176,
                "end": 1194
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
                        "start": 1198,
                        "end": 1204
                      },
                      "typeArguments": null,
                      "start": 1198,
                      "end": 1204
                    },
                    "start": 1196,
                    "end": 1204
                  },
                  "start": 1195,
                  "end": 1204
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
                          "start": 1223,
                          "end": 1224
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isInstanceProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1225,
                          "end": 1243
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1223,
                        "end": 1243
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1223,
                      "end": 1245
                    },
                    "start": 1216,
                    "end": 1246
                  }
                ],
                "start": 1206,
                "end": 1252
              },
              "expression": false,
              "start": 1167,
              "end": 1252
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1160,
            "end": 1252
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
                "start": 1271,
                "end": 1288
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
                      "start": 1300,
                      "end": 1311
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
                                          "start": 1332,
                                          "end": 1338
                                        },
                                        "typeArguments": null,
                                        "start": 1332,
                                        "end": 1338
                                      },
                                      "start": 1330,
                                      "end": 1338
                                    },
                                    "start": 1329,
                                    "end": 1338
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
                                          "start": 1343,
                                          "end": 1349
                                        },
                                        "typeArguments": null,
                                        "start": 1343,
                                        "end": 1349
                                      },
                                      "start": 1341,
                                      "end": 1349
                                    },
                                    "start": 1340,
                                    "end": 1349
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
                                      "start": 1353,
                                      "end": 1359
                                    },
                                    "typeArguments": null,
                                    "start": 1353,
                                    "end": 1359
                                  },
                                  "start": 1351,
                                  "end": 1359
                                },
                                "start": 1328,
                                "end": 1359
                              },
                              "start": 1326,
                              "end": 1359
                            },
                            "start": 1320,
                            "end": 1359
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1313,
                          "end": 1359
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
                                          "start": 1406,
                                          "end": 1412
                                        },
                                        "typeArguments": null,
                                        "start": 1406,
                                        "end": 1412
                                      },
                                      "start": 1404,
                                      "end": 1412
                                    },
                                    "start": 1403,
                                    "end": 1412
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1416,
                                    "end": 1423
                                  },
                                  "start": 1414,
                                  "end": 1423
                                },
                                "start": 1402,
                                "end": 1423
                              },
                              "start": 1400,
                              "end": 1423
                            },
                            "start": 1396,
                            "end": 1423
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1389,
                          "end": 1423
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1425,
                        "end": 1428
                      },
                      "expression": false,
                      "start": 1312,
                      "end": 1428
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1300,
                    "end": 1428
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
                      "start": 1445,
                      "end": 1451
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
                          "start": 1453,
                          "end": 1459
                        },
                        "typeArguments": null,
                        "start": 1453,
                        "end": 1459
                      },
                      "start": 1451,
                      "end": 1459
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1462,
                      "end": 1466
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1438,
                    "end": 1467
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
                      "start": 1484,
                      "end": 1489
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
                                  "start": 1506,
                                  "end": 1510
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1511,
                                  "end": 1517
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1506,
                                "end": 1517
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1520,
                                "end": 1524
                              },
                              "start": 1506,
                              "end": 1524
                            },
                            "directive": null,
                            "start": 1506,
                            "end": 1525
                          }
                        ],
                        "start": 1492,
                        "end": 1535
                      },
                      "expression": false,
                      "start": 1489,
                      "end": 1535
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1477,
                    "end": 1535
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
                      "start": 1552,
                      "end": 1558
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
                                "start": 1562,
                                "end": 1568
                              },
                              "typeArguments": null,
                              "start": 1562,
                              "end": 1568
                            },
                            "start": 1560,
                            "end": 1568
                          },
                          "start": 1559,
                          "end": 1568
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1571,
                          "end": 1578
                        },
                        "start": 1569,
                        "end": 1578
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
                                  "start": 1593,
                                  "end": 1597
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1598,
                                  "end": 1604
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1593,
                                "end": 1604
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1607,
                                    "end": 1611
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "select",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1612,
                                    "end": 1618
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1607,
                                  "end": 1618
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1619,
                                      "end": 1623
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1624,
                                      "end": 1630
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1619,
                                    "end": 1630
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1632,
                                    "end": 1633
                                  }
                                ],
                                "optional": false,
                                "start": 1607,
                                "end": 1634
                              },
                              "start": 1593,
                              "end": 1634
                            },
                            "directive": null,
                            "start": 1593,
                            "end": 1635
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1652,
                                "end": 1656
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1657,
                                "end": 1663
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1652,
                              "end": 1663
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
                                        "start": 1690,
                                        "end": 1694
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "stop",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1695,
                                        "end": 1699
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1690,
                                      "end": 1699
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1700,
                                          "end": 1704
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1705,
                                          "end": 1711
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1700,
                                        "end": 1711
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1690,
                                    "end": 1712
                                  },
                                  "start": 1683,
                                  "end": 1713
                                }
                              ],
                              "start": 1665,
                              "end": 1727
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
                                    "start": 1770,
                                    "end": 1775
                                  },
                                  "start": 1763,
                                  "end": 1776
                                }
                              ],
                              "start": 1745,
                              "end": 1790
                            },
                            "start": 1648,
                            "end": 1790
                          }
                        ],
                        "start": 1579,
                        "end": 1800
                      },
                      "expression": false,
                      "start": 1558,
                      "end": 1800
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1545,
                    "end": 1800
                  }
                ],
                "start": 1289,
                "end": 1806
              },
              "abstract": false,
              "declare": false,
              "start": 1265,
              "end": 1806
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1258,
            "end": 1806
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
                    "start": 1823,
                    "end": 1837
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScopeSearchFilter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1844,
                      "end": 1861
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceCompare",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1862,
                        "end": 1877
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceFilterStop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1879,
                        "end": 1897
                      }
                    ],
                    "start": 1840,
                    "end": 1898
                  },
                  "definite": false,
                  "start": 1823,
                  "end": 1898
                }
              ],
              "declare": false,
              "start": 1819,
              "end": 1899
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1812,
            "end": 1899
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
                "start": 1921,
                "end": 1942
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
                        "start": 1948,
                        "end": 1951
                      },
                      "typeArguments": null,
                      "start": 1948,
                      "end": 1951
                    },
                    "start": 1946,
                    "end": 1951
                  },
                  "start": 1943,
                  "end": 1951
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
                        "start": 1962,
                        "end": 1980
                      },
                      "typeArguments": null,
                      "start": 1962,
                      "end": 1980
                    },
                    "start": 1960,
                    "end": 1980
                  },
                  "start": 1953,
                  "end": 1980
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
                          "start": 1996,
                          "end": 2006
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
                              "start": 2010,
                              "end": 2027
                            },
                            "typeArguments": null,
                            "start": 2010,
                            "end": 2027
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2028,
                            "end": 2031
                          },
                          "start": 2009,
                          "end": 2031
                        },
                        "definite": false,
                        "start": 1996,
                        "end": 2031
                      }
                    ],
                    "declare": false,
                    "start": 1992,
                    "end": 2032
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
                                "start": 2058,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "start": 2058,
                              "end": 2074
                            },
                            "start": 2056,
                            "end": 2074
                          },
                          "start": 2045,
                          "end": 2074
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2077,
                          "end": 2081
                        },
                        "definite": false,
                        "start": 2045,
                        "end": 2081
                      }
                    ],
                    "declare": false,
                    "start": 2041,
                    "end": 2082
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
                                "start": 2105,
                                "end": 2125
                              },
                              "typeArguments": null,
                              "start": 2105,
                              "end": 2125
                            },
                            "start": 2103,
                            "end": 2125
                          },
                          "start": 2095,
                          "end": 2125
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2128,
                          "end": 2132
                        },
                        "definite": false,
                        "start": 2095,
                        "end": 2132
                      }
                    ],
                    "declare": false,
                    "start": 2091,
                    "end": 2133
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
                          "start": 2147,
                          "end": 2157
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2158,
                          "end": 2162
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2147,
                        "end": 2162
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
                          "start": 2166,
                          "end": 2176
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2177,
                          "end": 2180
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2166,
                        "end": 2180
                      },
                      "start": 2147,
                      "end": 2180
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
                                  "start": 2196,
                                  "end": 2206
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2207,
                                  "end": 2211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2196,
                                "end": 2211
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2212,
                                "end": 2215
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2196,
                              "end": 2215
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
                                  "start": 2218,
                                  "end": 2228
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2229,
                                  "end": 2232
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2218,
                                "end": 2232
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2233,
                                "end": 2239
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2218,
                              "end": 2239
                            },
                            "start": 2196,
                            "end": 2239
                          },
                          "directive": null,
                          "start": 2196,
                          "end": 2240
                        }
                      ],
                      "start": 2182,
                      "end": 2250
                    },
                    "alternate": null,
                    "start": 2143,
                    "end": 2250
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
                          "start": 2264,
                          "end": 2267
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moduleDecl",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2270,
                            "end": 2280
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2281,
                            "end": 2284
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2270,
                          "end": 2284
                        },
                        "definite": false,
                        "start": 2264,
                        "end": 2284
                      }
                    ],
                    "declare": false,
                    "start": 2260,
                    "end": 2285
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
                        "start": 2355,
                        "end": 2358
                      },
                      "prefix": true,
                      "start": 2354,
                      "end": 2358
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 2374,
                          "end": 2381
                        }
                      ],
                      "start": 2360,
                      "end": 2391
                    },
                    "alternate": null,
                    "start": 2350,
                    "end": 2391
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
                        "start": 2401,
                        "end": 2412
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolTableScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2419,
                          "end": 2435
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
                              "start": 2436,
                              "end": 2439
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "members",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2440,
                              "end": 2447
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2436,
                            "end": 2447
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2449,
                              "end": 2452
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2453,
                              "end": 2467
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2449,
                            "end": 2467
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2469,
                              "end": 2472
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "enclosedTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2473,
                              "end": 2486
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2469,
                            "end": 2486
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2488,
                              "end": 2491
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientEnclosedTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2492,
                              "end": 2512
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2488,
                            "end": 2512
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2514,
                              "end": 2517
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2518,
                              "end": 2524
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2514,
                            "end": 2524
                          }
                        ],
                        "start": 2415,
                        "end": 2525
                      },
                      "start": 2401,
                      "end": 2525
                    },
                    "directive": null,
                    "start": 2401,
                    "end": 2526
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
                          "start": 2535,
                          "end": 2538
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2539,
                          "end": 2550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2535,
                        "end": 2550
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2553,
                        "end": 2564
                      },
                      "start": 2535,
                      "end": 2564
                    },
                    "directive": null,
                    "start": 2535,
                    "end": 2565
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
                            "start": 2574,
                            "end": 2581
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "modDeclChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2582,
                            "end": 2594
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2574,
                          "end": 2594
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2595,
                          "end": 2599
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2574,
                        "end": 2599
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2600,
                          "end": 2610
                        }
                      ],
                      "optional": false,
                      "start": 2574,
                      "end": 2611
                    },
                    "directive": null,
                    "start": 2574,
                    "end": 2612
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
                              "start": 2621,
                              "end": 2628
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "typeFlow",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2629,
                              "end": 2637
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2621,
                            "end": 2637
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "checker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2638,
                            "end": 2645
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2621,
                          "end": 2645
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentModDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2646,
                          "end": 2660
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2621,
                        "end": 2660
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleDecl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2663,
                        "end": 2673
                      },
                      "start": 2621,
                      "end": 2673
                    },
                    "directive": null,
                    "start": 2621,
                    "end": 2674
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
                        "start": 2683,
                        "end": 2691
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2698,
                          "end": 2718
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
                              "start": 2719,
                              "end": 2722
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2723,
                              "end": 2729
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2719,
                            "end": 2729
                          }
                        ],
                        "start": 2694,
                        "end": 2730
                      },
                      "start": 2683,
                      "end": 2730
                    },
                    "directive": null,
                    "start": 2683,
                    "end": 2731
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
                          "start": 2740,
                          "end": 2748
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2749,
                          "end": 2763
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2740,
                        "end": 2763
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2764,
                          "end": 2775
                        }
                      ],
                      "optional": false,
                      "start": 2740,
                      "end": 2776
                    },
                    "directive": null,
                    "start": 2740,
                    "end": 2777
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
                          "start": 2786,
                          "end": 2794
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2795,
                          "end": 2809
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2786,
                        "end": 2809
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
                              "start": 2810,
                              "end": 2817
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2818,
                              "end": 2828
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2810,
                            "end": 2828
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2829,
                            "end": 2834
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2810,
                          "end": 2834
                        }
                      ],
                      "optional": false,
                      "start": 2786,
                      "end": 2835
                    },
                    "directive": null,
                    "start": 2786,
                    "end": 2836
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
                        "start": 2845,
                        "end": 2860
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2861,
                          "end": 2869
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2871,
                          "end": 2878
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2880,
                          "end": 2884
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2886,
                          "end": 2890
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2892,
                          "end": 2896
                        }
                      ],
                      "optional": false,
                      "start": 2845,
                      "end": 2897
                    },
                    "directive": null,
                    "start": 2845,
                    "end": 2898
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
                          "start": 2907,
                          "end": 2910
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2911,
                          "end": 2925
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2907,
                        "end": 2925
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2928,
                        "end": 2936
                      },
                      "start": 2907,
                      "end": 2936
                    },
                    "directive": null,
                    "start": 2907,
                    "end": 2937
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
                        "start": 2950,
                        "end": 2953
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2954,
                        "end": 2960
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2950,
                      "end": 2960
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
                                  "start": 2976,
                                  "end": 2983
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2984,
                                  "end": 2992
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2976,
                                "end": 2992
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addLocalsFromScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2993,
                                "end": 3011
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2976,
                              "end": 3011
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
                                  "start": 3012,
                                  "end": 3015
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "containedScope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3016,
                                  "end": 3030
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3012,
                                "end": 3030
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3032,
                                  "end": 3035
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3036,
                                  "end": 3042
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3032,
                                "end": 3042
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3044,
                                  "end": 3054
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "vars",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3055,
                                  "end": 3059
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3044,
                                "end": 3059
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
                                    "start": 3061,
                                    "end": 3064
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "members",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3065,
                                    "end": 3072
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3061,
                                  "end": 3072
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateMembers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3073,
                                  "end": 3087
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3061,
                                "end": 3087
                              },
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 3089,
                                "end": 3093
                              }
                            ],
                            "optional": false,
                            "start": 2976,
                            "end": 3094
                          },
                          "directive": null,
                          "start": 2976,
                          "end": 3095
                        }
                      ],
                      "start": 2962,
                      "end": 3105
                    },
                    "alternate": null,
                    "start": 2946,
                    "end": 3105
                  }
                ],
                "start": 1982,
                "end": 3111
              },
              "expression": false,
              "start": 1912,
              "end": 3111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1905,
            "end": 3111
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
                "start": 3133,
                "end": 3153
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
                        "start": 3159,
                        "end": 3162
                      },
                      "typeArguments": null,
                      "start": 3159,
                      "end": 3162
                    },
                    "start": 3157,
                    "end": 3162
                  },
                  "start": 3154,
                  "end": 3162
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
                        "start": 3173,
                        "end": 3191
                      },
                      "typeArguments": null,
                      "start": 3173,
                      "end": 3191
                    },
                    "start": 3171,
                    "end": 3191
                  },
                  "start": 3164,
                  "end": 3191
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
                          "start": 3207,
                          "end": 3216
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
                              "start": 3220,
                              "end": 3240
                            },
                            "typeArguments": null,
                            "start": 3220,
                            "end": 3240
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3241,
                            "end": 3244
                          },
                          "start": 3219,
                          "end": 3244
                        },
                        "definite": false,
                        "start": 3207,
                        "end": 3244
                      }
                    ],
                    "declare": false,
                    "start": 3203,
                    "end": 3245
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
                                "start": 3271,
                                "end": 3287
                              },
                              "typeArguments": null,
                              "start": 3271,
                              "end": 3287
                            },
                            "start": 3269,
                            "end": 3287
                          },
                          "start": 3258,
                          "end": 3287
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 3290,
                          "end": 3294
                        },
                        "definite": false,
                        "start": 3258,
                        "end": 3294
                      }
                    ],
                    "declare": false,
                    "start": 3254,
                    "end": 3295
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
                                "start": 3318,
                                "end": 3338
                              },
                              "typeArguments": null,
                              "start": 3318,
                              "end": 3338
                            },
                            "start": 3316,
                            "end": 3338
                          },
                          "start": 3308,
                          "end": 3338
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 3341,
                          "end": 3345
                        },
                        "definite": false,
                        "start": 3308,
                        "end": 3345
                      }
                    ],
                    "declare": false,
                    "start": 3304,
                    "end": 3346
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
                          "start": 3360,
                          "end": 3369
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3370,
                          "end": 3374
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3360,
                        "end": 3374
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
                          "start": 3378,
                          "end": 3387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3388,
                          "end": 3392
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3378,
                        "end": 3392
                      },
                      "start": 3360,
                      "end": 3392
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
                                  "start": 3408,
                                  "end": 3417
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3418,
                                  "end": 3422
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3408,
                                "end": 3422
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3423,
                                "end": 3426
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3408,
                              "end": 3426
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
                                  "start": 3429,
                                  "end": 3438
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3439,
                                  "end": 3443
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3429,
                                "end": 3443
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3444,
                                "end": 3450
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3429,
                              "end": 3450
                            },
                            "start": 3408,
                            "end": 3450
                          },
                          "directive": null,
                          "start": 3408,
                          "end": 3451
                        }
                      ],
                      "start": 3394,
                      "end": 3461
                    },
                    "alternate": null,
                    "start": 3356,
                    "end": 3461
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
                          "start": 3475,
                          "end": 3484
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3487,
                            "end": 3490
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3491,
                            "end": 3495
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3487,
                          "end": 3495
                        },
                        "definite": false,
                        "start": 3475,
                        "end": 3495
                      }
                    ],
                    "declare": false,
                    "start": 3471,
                    "end": 3496
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "classType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3510,
                      "end": 3519
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
                                "start": 3539,
                                "end": 3547
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3550,
                                  "end": 3559
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3560,
                                  "end": 3566
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3550,
                                "end": 3566
                              },
                              "definite": false,
                              "start": 3539,
                              "end": 3566
                            }
                          ],
                          "declare": false,
                          "start": 3535,
                          "end": 3567
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
                              "start": 3580,
                              "end": 3591
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
                                  "start": 3595,
                                  "end": 3611
                                },
                                "typeArguments": null,
                                "start": 3595,
                                "end": 3611
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
                                        "start": 3612,
                                        "end": 3619
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3620,
                                        "end": 3628
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3612,
                                      "end": 3628
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3629,
                                      "end": 3636
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3612,
                                    "end": 3636
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3637,
                                    "end": 3644
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3612,
                                  "end": 3644
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "classType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3645,
                                    "end": 3654
                                  }
                                ],
                                "optional": false,
                                "start": 3612,
                                "end": 3655
                              },
                              "start": 3594,
                              "end": 3655
                            },
                            "start": 3580,
                            "end": 3655
                          },
                          "directive": null,
                          "start": 3580,
                          "end": 3656
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
                              "start": 3670,
                              "end": 3678
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3685,
                                "end": 3705
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
                                    "start": 3706,
                                    "end": 3715
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3716,
                                    "end": 3722
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3706,
                                  "end": 3722
                                }
                              ],
                              "start": 3681,
                              "end": 3723
                            },
                            "start": 3670,
                            "end": 3723
                          },
                          "directive": null,
                          "start": 3670,
                          "end": 3724
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
                                "start": 3737,
                                "end": 3745
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3746,
                                "end": 3760
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3737,
                              "end": 3760
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3761,
                                "end": 3772
                              }
                            ],
                            "optional": false,
                            "start": 3737,
                            "end": 3773
                          },
                          "directive": null,
                          "start": 3737,
                          "end": 3774
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
                                "start": 3787,
                                "end": 3795
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3796,
                                "end": 3810
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3787,
                              "end": 3810
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
                                    "start": 3811,
                                    "end": 3818
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3819,
                                    "end": 3829
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3811,
                                  "end": 3829
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3830,
                                  "end": 3835
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3811,
                                "end": 3835
                              }
                            ],
                            "optional": false,
                            "start": 3787,
                            "end": 3836
                          },
                          "directive": null,
                          "start": 3787,
                          "end": 3837
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
                                "start": 3851,
                                "end": 3860
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3861,
                                "end": 3875
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3851,
                              "end": 3875
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3878,
                              "end": 3886
                            },
                            "start": 3851,
                            "end": 3886
                          },
                          "directive": null,
                          "start": 3851,
                          "end": 3887
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
                                "start": 3900,
                                "end": 3909
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3910,
                                "end": 3921
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3900,
                              "end": 3921
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3924,
                              "end": 3935
                            },
                            "start": 3900,
                            "end": 3935
                          },
                          "directive": null,
                          "start": 3900,
                          "end": 3936
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
                                "start": 3954,
                                "end": 3966
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3969,
                                  "end": 3978
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "instanceType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3979,
                                  "end": 3991
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3969,
                                "end": 3991
                              },
                              "definite": false,
                              "start": 3954,
                              "end": 3991
                            }
                          ],
                          "declare": false,
                          "start": 3950,
                          "end": 3992
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
                              "start": 4005,
                              "end": 4016
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
                                  "start": 4020,
                                  "end": 4036
                                },
                                "typeArguments": null,
                                "start": 4020,
                                "end": 4036
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
                                        "start": 4037,
                                        "end": 4044
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4045,
                                        "end": 4053
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4037,
                                      "end": 4053
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4054,
                                      "end": 4061
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4037,
                                    "end": 4061
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4062,
                                    "end": 4069
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4037,
                                  "end": 4069
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "instanceType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4070,
                                    "end": 4082
                                  }
                                ],
                                "optional": false,
                                "start": 4037,
                                "end": 4083
                              },
                              "start": 4019,
                              "end": 4083
                            },
                            "start": 4005,
                            "end": 4083
                          },
                          "directive": null,
                          "start": 4005,
                          "end": 4084
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
                                "start": 4097,
                                "end": 4109
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4110,
                                "end": 4121
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4097,
                              "end": 4121
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4124,
                              "end": 4135
                            },
                            "start": 4097,
                            "end": 4135
                          },
                          "directive": null,
                          "start": 4097,
                          "end": 4136
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
                              "start": 4150,
                              "end": 4158
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4165,
                                "end": 4185
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
                                    "start": 4186,
                                    "end": 4198
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4199,
                                    "end": 4205
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4186,
                                  "end": 4205
                                }
                              ],
                              "start": 4161,
                              "end": 4206
                            },
                            "start": 4150,
                            "end": 4206
                          },
                          "directive": null,
                          "start": 4150,
                          "end": 4207
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
                                "start": 4220,
                                "end": 4228
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4229,
                                "end": 4243
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4220,
                              "end": 4243
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
                                    "start": 4244,
                                    "end": 4251
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4252,
                                    "end": 4262
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4244,
                                  "end": 4262
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4263,
                                  "end": 4268
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4244,
                                "end": 4268
                              }
                            ],
                            "optional": false,
                            "start": 4220,
                            "end": 4269
                          },
                          "directive": null,
                          "start": 4220,
                          "end": 4270
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
                              "start": 4284,
                              "end": 4299
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4300,
                                "end": 4308
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4310,
                                "end": 4317
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4319,
                                "end": 4331
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4333,
                                "end": 4342
                              },
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4344,
                                "end": 4348
                              }
                            ],
                            "optional": false,
                            "start": 4284,
                            "end": 4349
                          },
                          "directive": null,
                          "start": 4284,
                          "end": 4350
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
                                "start": 4363,
                                "end": 4375
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4376,
                                "end": 4390
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4363,
                              "end": 4390
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4393,
                              "end": 4401
                            },
                            "start": 4363,
                            "end": 4401
                          },
                          "directive": null,
                          "start": 4363,
                          "end": 4402
                        }
                      ],
                      "start": 3521,
                      "end": 4412
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
                                "start": 4440,
                                "end": 4443
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4444,
                                "end": 4448
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4440,
                              "end": 4448
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
                                  "start": 4451,
                                  "end": 4458
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4459,
                                  "end": 4467
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4451,
                                "end": 4467
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "anyType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4468,
                                "end": 4475
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4451,
                              "end": 4475
                            },
                            "start": 4440,
                            "end": 4475
                          },
                          "directive": null,
                          "start": 4440,
                          "end": 4476
                        }
                      ],
                      "start": 4426,
                      "end": 4486
                    },
                    "start": 3506,
                    "end": 4486
                  }
                ],
                "start": 3193,
                "end": 4492
              },
              "expression": false,
              "start": 3124,
              "end": 4492
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3117,
            "end": 4492
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
                "start": 4514,
                "end": 4538
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
                        "start": 4544,
                        "end": 4547
                      },
                      "typeArguments": null,
                      "start": 4544,
                      "end": 4547
                    },
                    "start": 4542,
                    "end": 4547
                  },
                  "start": 4539,
                  "end": 4547
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
                        "start": 4558,
                        "end": 4576
                      },
                      "typeArguments": null,
                      "start": 4558,
                      "end": 4576
                    },
                    "start": 4556,
                    "end": 4576
                  },
                  "start": 4549,
                  "end": 4576
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
                          "start": 4592,
                          "end": 4605
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
                              "start": 4609,
                              "end": 4629
                            },
                            "typeArguments": null,
                            "start": 4609,
                            "end": 4629
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4630,
                            "end": 4633
                          },
                          "start": 4608,
                          "end": 4633
                        },
                        "definite": false,
                        "start": 4592,
                        "end": 4633
                      }
                    ],
                    "declare": false,
                    "start": 4588,
                    "end": 4634
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
                                "start": 4660,
                                "end": 4676
                              },
                              "typeArguments": null,
                              "start": 4660,
                              "end": 4676
                            },
                            "start": 4658,
                            "end": 4676
                          },
                          "start": 4647,
                          "end": 4676
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4679,
                          "end": 4683
                        },
                        "definite": false,
                        "start": 4647,
                        "end": 4683
                      }
                    ],
                    "declare": false,
                    "start": 4643,
                    "end": 4684
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
                                "start": 4707,
                                "end": 4727
                              },
                              "typeArguments": null,
                              "start": 4707,
                              "end": 4727
                            },
                            "start": 4705,
                            "end": 4727
                          },
                          "start": 4697,
                          "end": 4727
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4730,
                          "end": 4734
                        },
                        "definite": false,
                        "start": 4697,
                        "end": 4734
                      }
                    ],
                    "declare": false,
                    "start": 4693,
                    "end": 4735
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
                          "start": 4749,
                          "end": 4762
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4763,
                          "end": 4767
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4749,
                        "end": 4767
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
                          "start": 4771,
                          "end": 4784
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4785,
                          "end": 4789
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4771,
                        "end": 4789
                      },
                      "start": 4749,
                      "end": 4789
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
                                  "start": 4805,
                                  "end": 4818
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4819,
                                  "end": 4823
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4805,
                                "end": 4823
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4824,
                                "end": 4827
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4805,
                              "end": 4827
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
                                  "start": 4830,
                                  "end": 4843
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4844,
                                  "end": 4848
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4830,
                                "end": 4848
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4849,
                                "end": 4855
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4830,
                              "end": 4855
                            },
                            "start": 4805,
                            "end": 4855
                          },
                          "directive": null,
                          "start": 4805,
                          "end": 4856
                        }
                      ],
                      "start": 4791,
                      "end": 4866
                    },
                    "alternate": null,
                    "start": 4745,
                    "end": 4866
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
                          "start": 4880,
                          "end": 4893
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4896,
                            "end": 4899
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4900,
                            "end": 4904
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4896,
                          "end": 4904
                        },
                        "definite": false,
                        "start": 4880,
                        "end": 4904
                      }
                    ],
                    "declare": false,
                    "start": 4876,
                    "end": 4905
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
                        "start": 4914,
                        "end": 4925
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
                            "start": 4929,
                            "end": 4945
                          },
                          "typeArguments": null,
                          "start": 4929,
                          "end": 4945
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
                                  "start": 4946,
                                  "end": 4953
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4954,
                                  "end": 4962
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4946,
                                "end": 4962
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "checker",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4963,
                                "end": 4970
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4946,
                              "end": 4970
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4971,
                              "end": 4978
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4946,
                            "end": 4978
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "interfaceType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4979,
                              "end": 4992
                            }
                          ],
                          "optional": false,
                          "start": 4946,
                          "end": 4993
                        },
                        "start": 4928,
                        "end": 4993
                      },
                      "start": 4914,
                      "end": 4993
                    },
                    "directive": null,
                    "start": 4914,
                    "end": 4994
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
                          "start": 5003,
                          "end": 5016
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5017,
                          "end": 5028
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5003,
                        "end": 5028
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5031,
                        "end": 5042
                      },
                      "start": 5003,
                      "end": 5042
                    },
                    "directive": null,
                    "start": 5003,
                    "end": 5043
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
                        "start": 5052,
                        "end": 5060
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5067,
                          "end": 5087
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
                              "start": 5088,
                              "end": 5101
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5102,
                              "end": 5108
                            },
                            "optional": false,
                            "computed": false,
                            "start": 5088,
                            "end": 5108
                          }
                        ],
                        "start": 5063,
                        "end": 5109
                      },
                      "start": 5052,
                      "end": 5109
                    },
                    "directive": null,
                    "start": 5052,
                    "end": 5110
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
                          "start": 5119,
                          "end": 5127
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5128,
                          "end": 5142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5119,
                        "end": 5142
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5143,
                          "end": 5154
                        }
                      ],
                      "optional": false,
                      "start": 5119,
                      "end": 5155
                    },
                    "directive": null,
                    "start": 5119,
                    "end": 5156
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
                          "start": 5165,
                          "end": 5173
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5174,
                          "end": 5188
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5165,
                        "end": 5188
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
                              "start": 5189,
                              "end": 5196
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5197,
                              "end": 5207
                            },
                            "optional": false,
                            "computed": false,
                            "start": 5189,
                            "end": 5207
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5208,
                            "end": 5213
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5189,
                          "end": 5213
                        }
                      ],
                      "optional": false,
                      "start": 5165,
                      "end": 5214
                    },
                    "directive": null,
                    "start": 5165,
                    "end": 5215
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
                        "start": 5224,
                        "end": 5239
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5240,
                          "end": 5248
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5250,
                          "end": 5257
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5259,
                          "end": 5263
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5265,
                          "end": 5269
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 5271,
                          "end": 5275
                        }
                      ],
                      "optional": false,
                      "start": 5224,
                      "end": 5276
                    },
                    "directive": null,
                    "start": 5224,
                    "end": 5277
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
                          "start": 5286,
                          "end": 5299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5300,
                          "end": 5314
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5286,
                        "end": 5314
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5317,
                        "end": 5325
                      },
                      "start": 5286,
                      "end": 5325
                    },
                    "directive": null,
                    "start": 5286,
                    "end": 5326
                  }
                ],
                "start": 4578,
                "end": 5332
              },
              "expression": false,
              "start": 4505,
              "end": 5332
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4498,
            "end": 5332
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
                "start": 5354,
                "end": 5373
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
                        "start": 5379,
                        "end": 5382
                      },
                      "typeArguments": null,
                      "start": 5379,
                      "end": 5382
                    },
                    "start": 5377,
                    "end": 5382
                  },
                  "start": 5374,
                  "end": 5382
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
                        "start": 5393,
                        "end": 5411
                      },
                      "typeArguments": null,
                      "start": 5393,
                      "end": 5411
                    },
                    "start": 5391,
                    "end": 5411
                  },
                  "start": 5384,
                  "end": 5411
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
                          "start": 5427,
                          "end": 5435
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
                              "start": 5439,
                              "end": 5452
                            },
                            "typeArguments": null,
                            "start": 5439,
                            "end": 5452
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5453,
                            "end": 5456
                          },
                          "start": 5438,
                          "end": 5456
                        },
                        "definite": false,
                        "start": 5427,
                        "end": 5456
                      }
                    ],
                    "declare": false,
                    "start": 5423,
                    "end": 5457
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
                          "start": 5470,
                          "end": 5478
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "withStmt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5481,
                            "end": 5489
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5490,
                            "end": 5494
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5481,
                          "end": 5494
                        },
                        "definite": false,
                        "start": 5470,
                        "end": 5494
                      }
                    ],
                    "declare": false,
                    "start": 5466,
                    "end": 5495
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
                          "start": 5509,
                          "end": 5516
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5523,
                            "end": 5536
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
                                "start": 5541,
                                "end": 5560
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
                                    "start": 5565,
                                    "end": 5580
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5561,
                                  "end": 5582
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5588,
                                    "end": 5603
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5584,
                                  "end": 5605
                                }
                              ],
                              "start": 5537,
                              "end": 5606
                            }
                          ],
                          "start": 5519,
                          "end": 5607
                        },
                        "definite": false,
                        "start": 5509,
                        "end": 5607
                      }
                    ],
                    "declare": false,
                    "start": 5505,
                    "end": 5608
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
                          "start": 5621,
                          "end": 5635
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5642,
                            "end": 5655
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
                                "start": 5660,
                                "end": 5679
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
                                    "start": 5684,
                                    "end": 5699
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5680,
                                  "end": 5701
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5707,
                                    "end": 5722
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 5703,
                                  "end": 5724
                                }
                              ],
                              "start": 5656,
                              "end": 5725
                            }
                          ],
                          "start": 5638,
                          "end": 5726
                        },
                        "definite": false,
                        "start": 5621,
                        "end": 5726
                      }
                    ],
                    "declare": false,
                    "start": 5617,
                    "end": 5727
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
                          "start": 5741,
                          "end": 5749
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5756,
                            "end": 5760
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 5752,
                          "end": 5762
                        },
                        "definite": false,
                        "start": 5741,
                        "end": 5762
                      }
                    ],
                    "declare": false,
                    "start": 5737,
                    "end": 5763
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
                          "start": 5776,
                          "end": 5786
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WithSymbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5793,
                            "end": 5803
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
                                "start": 5804,
                                "end": 5812
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "minChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5813,
                                "end": 5820
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5804,
                              "end": 5820
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
                                      "start": 5822,
                                      "end": 5829
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "typeFlow",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5830,
                                      "end": 5838
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 5822,
                                    "end": 5838
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "checker",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5839,
                                    "end": 5846
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 5822,
                                  "end": 5846
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "locationInfo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5847,
                                  "end": 5859
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5822,
                                "end": 5859
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "unitIndex",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5860,
                                "end": 5869
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5822,
                              "end": 5869
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "withType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5871,
                              "end": 5879
                            }
                          ],
                          "start": 5789,
                          "end": 5880
                        },
                        "definite": false,
                        "start": 5776,
                        "end": 5880
                      }
                    ],
                    "declare": false,
                    "start": 5772,
                    "end": 5881
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
                          "start": 5890,
                          "end": 5898
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "members",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5899,
                          "end": 5906
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5890,
                        "end": 5906
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5909,
                        "end": 5916
                      },
                      "start": 5890,
                      "end": 5916
                    },
                    "directive": null,
                    "start": 5890,
                    "end": 5917
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
                          "start": 5926,
                          "end": 5934
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ambientMembers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5935,
                          "end": 5949
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5926,
                        "end": 5949
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ambientMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5952,
                        "end": 5966
                      },
                      "start": 5926,
                      "end": 5966
                    },
                    "directive": null,
                    "start": 5926,
                    "end": 5967
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
                          "start": 5976,
                          "end": 5984
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5985,
                          "end": 5991
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5976,
                        "end": 5991
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5994,
                        "end": 6004
                      },
                      "start": 5976,
                      "end": 6004
                    },
                    "directive": null,
                    "start": 5976,
                    "end": 6005
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
                          "start": 6014,
                          "end": 6022
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "setHasImplementation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6023,
                          "end": 6043
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6014,
                        "end": 6043
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6014,
                      "end": 6045
                    },
                    "directive": null,
                    "start": 6014,
                    "end": 6046
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
                          "start": 6055,
                          "end": 6063
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6064,
                          "end": 6068
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6055,
                        "end": 6068
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6071,
                        "end": 6079
                      },
                      "start": 6055,
                      "end": 6079
                    },
                    "directive": null,
                    "start": 6055,
                    "end": 6080
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
                          "start": 6094,
                          "end": 6103
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
                              "start": 6110,
                              "end": 6120
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SymbolScopeBuilder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6121,
                              "end": 6139
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6110,
                            "end": 6139
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
                                "start": 6140,
                                "end": 6148
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "members",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6149,
                                "end": 6156
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6140,
                              "end": 6156
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6158,
                                "end": 6166
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ambientMembers",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6167,
                                "end": 6181
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6158,
                              "end": 6181
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6183,
                              "end": 6187
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6189,
                              "end": 6193
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
                                  "start": 6195,
                                  "end": 6202
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6203,
                                  "end": 6213
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6195,
                                "end": 6213
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6214,
                                "end": 6219
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6195,
                              "end": 6219
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6221,
                                "end": 6229
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6230,
                                "end": 6236
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6221,
                              "end": 6236
                            }
                          ],
                          "start": 6106,
                          "end": 6237
                        },
                        "definite": false,
                        "start": 6094,
                        "end": 6237
                      }
                    ],
                    "declare": false,
                    "start": 6090,
                    "end": 6238
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
                        "start": 6248,
                        "end": 6263
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "withScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6264,
                          "end": 6273
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6275,
                          "end": 6282
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6284,
                          "end": 6288
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6290,
                          "end": 6294
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6296,
                          "end": 6300
                        }
                      ],
                      "optional": false,
                      "start": 6248,
                      "end": 6301
                    },
                    "directive": null,
                    "start": 6248,
                    "end": 6302
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
                          "start": 6311,
                          "end": 6319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6320,
                          "end": 6334
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6311,
                        "end": 6334
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6337,
                        "end": 6346
                      },
                      "start": 6311,
                      "end": 6346
                    },
                    "directive": null,
                    "start": 6311,
                    "end": 6347
                  }
                ],
                "start": 5413,
                "end": 6353
              },
              "expression": false,
              "start": 5345,
              "end": 6353
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5338,
            "end": 6353
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
                "start": 6375,
                "end": 6398
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
                        "start": 6404,
                        "end": 6407
                      },
                      "typeArguments": null,
                      "start": 6404,
                      "end": 6407
                    },
                    "start": 6402,
                    "end": 6407
                  },
                  "start": 6399,
                  "end": 6407
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
                        "start": 6418,
                        "end": 6436
                      },
                      "typeArguments": null,
                      "start": 6418,
                      "end": 6436
                    },
                    "start": 6416,
                    "end": 6436
                  },
                  "start": 6409,
                  "end": 6436
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
                          "start": 6452,
                          "end": 6460
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
                              "start": 6464,
                              "end": 6472
                            },
                            "typeArguments": null,
                            "start": 6464,
                            "end": 6472
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6473,
                            "end": 6476
                          },
                          "start": 6463,
                          "end": 6476
                        },
                        "definite": false,
                        "start": 6452,
                        "end": 6476
                      }
                    ],
                    "declare": false,
                    "start": 6448,
                    "end": 6477
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
                                "start": 6502,
                                "end": 6508
                              },
                              "typeArguments": null,
                              "start": 6502,
                              "end": 6508
                            },
                            "start": 6500,
                            "end": 6508
                          },
                          "start": 6491,
                          "end": 6508
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6511,
                          "end": 6515
                        },
                        "definite": false,
                        "start": 6491,
                        "end": 6515
                      }
                    ],
                    "declare": false,
                    "start": 6487,
                    "end": 6516
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
                                "start": 6545,
                                "end": 6551
                              },
                              "typeArguments": null,
                              "start": 6545,
                              "end": 6551
                            },
                            "start": 6543,
                            "end": 6551
                          },
                          "start": 6529,
                          "end": 6551
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6554,
                          "end": 6558
                        },
                        "definite": false,
                        "start": 6529,
                        "end": 6558
                      }
                    ],
                    "declare": false,
                    "start": 6525,
                    "end": 6559
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
                        "start": 6572,
                        "end": 6580
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6581,
                        "end": 6585
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6572,
                      "end": 6585
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
                              "start": 6601,
                              "end": 6615
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
                                  "start": 6618,
                                  "end": 6621
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6622,
                                  "end": 6626
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6618,
                                "end": 6626
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6627,
                                "end": 6633
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6618,
                              "end": 6633
                            },
                            "start": 6601,
                            "end": 6633
                          },
                          "directive": null,
                          "start": 6601,
                          "end": 6634
                        }
                      ],
                      "start": 6587,
                      "end": 6644
                    },
                    "alternate": null,
                    "start": 6568,
                    "end": 6644
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
                          "start": 6658,
                          "end": 6666
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasFlag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6669,
                            "end": 6676
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
                                "start": 6677,
                                "end": 6685
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6686,
                                "end": 6694
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6677,
                              "end": 6694
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6696,
                                "end": 6704
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Static",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6705,
                                "end": 6711
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6696,
                              "end": 6711
                            }
                          ],
                          "optional": false,
                          "start": 6669,
                          "end": 6712
                        },
                        "definite": false,
                        "start": 6658,
                        "end": 6712
                      }
                    ],
                    "declare": false,
                    "start": 6654,
                    "end": 6713
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
                          "start": 6726,
                          "end": 6739
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6742,
                            "end": 6750
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
                                  "start": 6754,
                                  "end": 6761
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6762,
                                  "end": 6772
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6754,
                                "end": 6772
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6773,
                                "end": 6776
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6754,
                              "end": 6776
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 6780,
                              "end": 6784
                            },
                            "start": 6754,
                            "end": 6784
                          },
                          "start": 6742,
                          "end": 6784
                        },
                        "definite": false,
                        "start": 6726,
                        "end": 6784
                      }
                    ],
                    "declare": false,
                    "start": 6722,
                    "end": 6785
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
                          "start": 6901,
                          "end": 6912
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isInnerStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6915,
                            "end": 6928
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
                                    "start": 6931,
                                    "end": 6938
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6939,
                                    "end": 6949
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 6931,
                                  "end": 6949
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6950,
                                  "end": 6953
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6931,
                                "end": 6953
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6954,
                                "end": 6958
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6931,
                              "end": 6958
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6959,
                              "end": 6970
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6931,
                            "end": 6970
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
                                "start": 6973,
                                "end": 6980
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6981,
                                "end": 6991
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6973,
                              "end": 6991
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6992,
                              "end": 6997
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6973,
                            "end": 6997
                          },
                          "start": 6915,
                          "end": 6997
                        },
                        "definite": false,
                        "start": 6901,
                        "end": 6997
                      }
                    ],
                    "declare": false,
                    "start": 6897,
                    "end": 6998
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
                            "start": 7338,
                            "end": 7345
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7346,
                            "end": 7356
                          },
                          "optional": false,
                          "computed": false,
                          "start": 7338,
                          "end": 7356
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7357,
                          "end": 7365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 7338,
                        "end": 7365
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
                              "start": 7383,
                              "end": 7391
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isConstructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7392,
                              "end": 7405
                            },
                            "optional": false,
                            "computed": false,
                            "start": 7383,
                            "end": 7405
                          },
                          "prefix": true,
                          "start": 7382,
                          "end": 7405
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
                            "start": 7409,
                            "end": 7416
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
                                "start": 7417,
                                "end": 7425
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7426,
                                "end": 7434
                              },
                              "optional": false,
                              "computed": false,
                              "start": 7417,
                              "end": 7434
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7436,
                                "end": 7444
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ClassMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7445,
                                "end": 7456
                              },
                              "optional": false,
                              "computed": false,
                              "start": 7436,
                              "end": 7456
                            }
                          ],
                          "optional": false,
                          "start": 7409,
                          "end": 7457
                        },
                        "start": 7382,
                        "end": 7457
                      },
                      "start": 7338,
                      "end": 7458
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
                                "start": 7478,
                                "end": 7486
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
                                    "start": 7489,
                                    "end": 7496
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7497,
                                    "end": 7507
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7489,
                                  "end": 7507
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7508,
                                  "end": 7516
                                },
                                "optional": false,
                                "computed": false,
                                "start": 7489,
                                "end": 7516
                              },
                              "definite": false,
                              "start": 7478,
                              "end": 7516
                            }
                          ],
                          "declare": false,
                          "start": 7474,
                          "end": 7517
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
                                    "start": 7537,
                                    "end": 7545
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7546,
                                    "end": 7555
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7537,
                                  "end": 7555
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
                                    "start": 7558,
                                    "end": 7567
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IsClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7568,
                                    "end": 7575
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 7558,
                                  "end": 7575
                                },
                                "start": 7537,
                                "end": 7575
                              },
                              "prefix": true,
                              "start": 7535,
                              "end": 7576
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
                                  "start": 7581,
                                  "end": 7588
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
                                      "start": 7589,
                                      "end": 7597
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fncFlags",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7598,
                                      "end": 7606
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7589,
                                    "end": 7606
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "FncFlags",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7608,
                                      "end": 7616
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ClassMethod",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7617,
                                      "end": 7628
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7608,
                                    "end": 7628
                                  }
                                ],
                                "optional": false,
                                "start": 7581,
                                "end": 7629
                              },
                              "prefix": true,
                              "start": 7580,
                              "end": 7629
                            },
                            "start": 7535,
                            "end": 7629
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
                                          "start": 7654,
                                          "end": 7662
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7663,
                                          "end": 7671
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 7654,
                                        "end": 7671
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 7654,
                                      "end": 7673
                                    },
                                    "prefix": true,
                                    "start": 7653,
                                    "end": 7673
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isStatic",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7677,
                                    "end": 7685
                                  },
                                  "start": 7653,
                                  "end": 7685
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
                                          "start": 7709,
                                          "end": 7720
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7723,
                                            "end": 7731
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7732,
                                            "end": 7748
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7723,
                                          "end": 7748
                                        },
                                        "start": 7709,
                                        "end": 7748
                                      },
                                      "directive": null,
                                      "start": 7709,
                                      "end": 7749
                                    }
                                  ],
                                  "start": 7687,
                                  "end": 7767
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
                                          "start": 7876,
                                          "end": 7887
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7890,
                                            "end": 7898
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "containedScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7899,
                                            "end": 7913
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7890,
                                          "end": 7913
                                        },
                                        "start": 7876,
                                        "end": 7913
                                      },
                                      "directive": null,
                                      "start": 7876,
                                      "end": 7914
                                    }
                                  ],
                                  "start": 7789,
                                  "end": 7932
                                },
                                "start": 7649,
                                "end": 7932
                              }
                            ],
                            "start": 7631,
                            "end": 7946
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
                                                "start": 7986,
                                                "end": 7993
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7994,
                                                "end": 8004
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7986,
                                              "end": 8004
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "previous",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8005,
                                              "end": 8013
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 7986,
                                            "end": 8013
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8014,
                                            "end": 8019
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7986,
                                          "end": 8019
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "container",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8020,
                                          "end": 8029
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 7986,
                                        "end": 8029
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
                                                  "start": 8053,
                                                  "end": 8060
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8061,
                                                  "end": 8071
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8053,
                                                "end": 8071
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8072,
                                                "end": 8080
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8053,
                                              "end": 8080
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8081,
                                              "end": 8086
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8053,
                                            "end": 8086
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8087,
                                            "end": 8096
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8053,
                                          "end": 8096
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8097,
                                          "end": 8104
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8053,
                                        "end": 8104
                                      },
                                      "start": 7986,
                                      "end": 8104
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
                                                    "start": 8128,
                                                    "end": 8135
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "scopeChain",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 8136,
                                                    "end": 8146
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 8128,
                                                  "end": 8146
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "previous",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8147,
                                                  "end": 8155
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8128,
                                                "end": 8155
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scope",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8156,
                                                "end": 8161
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8128,
                                              "end": 8161
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "container",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8162,
                                              "end": 8171
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8128,
                                            "end": 8171
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8172,
                                            "end": 8179
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8128,
                                          "end": 8179
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8180,
                                          "end": 8188
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8128,
                                        "end": 8188
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
                                          "start": 8192,
                                          "end": 8200
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8201,
                                          "end": 8209
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8192,
                                        "end": 8209
                                      },
                                      "start": 8128,
                                      "end": 8209
                                    },
                                    "start": 7986,
                                    "end": 8209
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
                                          "start": 8235,
                                          "end": 8243
                                        },
                                        "typeArguments": null,
                                        "start": 8235,
                                        "end": 8243
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
                                                  "start": 8244,
                                                  "end": 8251
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8252,
                                                  "end": 8262
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8244,
                                                "end": 8262
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8263,
                                                "end": 8271
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8244,
                                              "end": 8271
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8272,
                                              "end": 8277
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8244,
                                            "end": 8277
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8278,
                                            "end": 8287
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8244,
                                          "end": 8287
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8288,
                                          "end": 8295
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8244,
                                        "end": 8295
                                      },
                                      "start": 8234,
                                      "end": 8295
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8297,
                                      "end": 8310
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 8233,
                                    "end": 8310
                                  },
                                  "start": 7986,
                                  "end": 8310
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
                                          "start": 8428,
                                          "end": 8439
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8442,
                                            "end": 8450
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8451,
                                            "end": 8467
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8442,
                                          "end": 8467
                                        },
                                        "start": 8428,
                                        "end": 8467
                                      },
                                      "directive": null,
                                      "start": 8428,
                                      "end": 8468
                                    }
                                  ],
                                  "start": 8312,
                                  "end": 8486
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
                                      "start": 8512,
                                      "end": 8520
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
                                          "start": 8524,
                                          "end": 8531
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8532,
                                          "end": 8542
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 8524,
                                        "end": 8542
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "classType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8543,
                                        "end": 8552
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 8524,
                                      "end": 8552
                                    },
                                    "start": 8512,
                                    "end": 8552
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
                                            "start": 8576,
                                            "end": 8587
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
                                                  "start": 8590,
                                                  "end": 8597
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8598,
                                                  "end": 8608
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8590,
                                                "end": 8608
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "classType",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8609,
                                                "end": 8618
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8590,
                                              "end": 8618
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8619,
                                              "end": 8633
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8590,
                                            "end": 8633
                                          },
                                          "start": 8576,
                                          "end": 8633
                                        },
                                        "directive": null,
                                        "start": 8576,
                                        "end": 8634
                                      }
                                    ],
                                    "start": 8554,
                                    "end": 8652
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
                                            "start": 8749,
                                            "end": 8760
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "instType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8763,
                                              "end": 8771
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8772,
                                              "end": 8786
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 8763,
                                            "end": 8786
                                          },
                                          "start": 8749,
                                          "end": 8786
                                        },
                                        "directive": null,
                                        "start": 8749,
                                        "end": 8787
                                      }
                                    ],
                                    "start": 8674,
                                    "end": 8805
                                  },
                                  "start": 8508,
                                  "end": 8805
                                },
                                "start": 7982,
                                "end": 8805
                              }
                            ],
                            "start": 7964,
                            "end": 8819
                          },
                          "start": 7531,
                          "end": 8819
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
                              "start": 8832,
                              "end": 8841
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8844,
                                "end": 8852
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8853,
                                "end": 8859
                              },
                              "optional": false,
                              "computed": false,
                              "start": 8844,
                              "end": 8859
                            },
                            "start": 8832,
                            "end": 8859
                          },
                          "directive": null,
                          "start": 8832,
                          "end": 8860
                        }
                      ],
                      "start": 7460,
                      "end": 8870
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
                            "start": 8888,
                            "end": 8896
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8897,
                            "end": 8910
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8888,
                          "end": 8910
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
                              "start": 8914,
                              "end": 8921
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8922,
                              "end": 8932
                            },
                            "optional": false,
                            "computed": false,
                            "start": 8914,
                            "end": 8932
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thisType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8933,
                            "end": 8941
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8914,
                          "end": 8941
                        },
                        "start": 8888,
                        "end": 8941
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
                                "start": 9057,
                                "end": 9066
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
                                      "start": 9069,
                                      "end": 9076
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9077,
                                      "end": 9087
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9069,
                                    "end": 9087
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9088,
                                    "end": 9096
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9069,
                                  "end": 9096
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9097,
                                  "end": 9103
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9069,
                                "end": 9103
                              },
                              "start": 9057,
                              "end": 9103
                            },
                            "directive": null,
                            "start": 9057,
                            "end": 9104
                          }
                        ],
                        "start": 8943,
                        "end": 9114
                      },
                      "alternate": null,
                      "start": 8884,
                      "end": 9114
                    },
                    "start": 7334,
                    "end": 9114
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
                            "start": 9128,
                            "end": 9136
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9137,
                            "end": 9141
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9128,
                          "end": 9141
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 9145,
                          "end": 9149
                        },
                        "start": 9128,
                        "end": 9149
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
                          "start": 9153,
                          "end": 9160
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
                                  "start": 9161,
                                  "end": 9169
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9170,
                                  "end": 9174
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9161,
                                "end": 9174
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9175,
                                "end": 9181
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9161,
                              "end": 9181
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "flags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9182,
                              "end": 9187
                            },
                            "optional": false,
                            "computed": false,
                            "start": 9161,
                            "end": 9187
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SymbolFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9189,
                              "end": 9200
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TypeSetDuringScopeAssignment",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9201,
                              "end": 9229
                            },
                            "optional": false,
                            "computed": false,
                            "start": 9189,
                            "end": 9229
                          }
                        ],
                        "optional": false,
                        "start": 9153,
                        "end": 9230
                      },
                      "start": 9128,
                      "end": 9230
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
                                  "start": 9250,
                                  "end": 9257
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9258,
                                  "end": 9268
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9250,
                                "end": 9268
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9269,
                                "end": 9272
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9250,
                              "end": 9272
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
                                    "start": 9276,
                                    "end": 9283
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9284,
                                    "end": 9294
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9276,
                                  "end": 9294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9295,
                                  "end": 9298
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9276,
                                "end": 9298
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9299,
                                "end": 9303
                              },
                              "optional": false,
                              "computed": false,
                              "start": 9276,
                              "end": 9303
                            },
                            "start": 9250,
                            "end": 9303
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
                                    "start": 9323,
                                    "end": 9332
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
                                            "start": 9335,
                                            "end": 9342
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9343,
                                            "end": 9353
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9335,
                                          "end": 9353
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9354,
                                          "end": 9357
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9335,
                                        "end": 9357
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9358,
                                        "end": 9362
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 9335,
                                      "end": 9362
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9363,
                                      "end": 9369
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9335,
                                    "end": 9369
                                  },
                                  "start": 9323,
                                  "end": 9369
                                },
                                "directive": null,
                                "start": 9323,
                                "end": 9370
                              }
                            ],
                            "start": 9305,
                            "end": 9384
                          },
                          "alternate": null,
                          "start": 9246,
                          "end": 9384
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
                                "start": 9402,
                                "end": 9411
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 9414,
                                "end": 9418
                              },
                              "definite": false,
                              "start": 9402,
                              "end": 9418
                            }
                          ],
                          "declare": false,
                          "start": 9398,
                          "end": 9419
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
                                      "start": 9446,
                                      "end": 9454
                                    },
                                    "typeArguments": null,
                                    "start": 9446,
                                    "end": 9454
                                  },
                                  "start": 9444,
                                  "end": 9454
                                },
                                "start": 9436,
                                "end": 9454
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
                                    "start": 9457,
                                    "end": 9464
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9465,
                                    "end": 9475
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9457,
                                  "end": 9475
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9476,
                                  "end": 9479
                                },
                                "optional": false,
                                "computed": false,
                                "start": 9457,
                                "end": 9479
                              },
                              "definite": false,
                              "start": 9436,
                              "end": 9479
                            }
                          ],
                          "declare": false,
                          "start": 9432,
                          "end": 9480
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
                                "start": 9497,
                                "end": 9505
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
                                    "start": 9508,
                                    "end": 9516
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9517,
                                    "end": 9521
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9508,
                                  "end": 9521
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
                                      "start": 9524,
                                      "end": 9532
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9533,
                                      "end": 9537
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9524,
                                    "end": 9537
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "actualText",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9538,
                                    "end": 9548
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 9524,
                                  "end": 9548
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 9551,
                                  "end": 9555
                                },
                                "start": 9508,
                                "end": 9555
                              },
                              "definite": false,
                              "start": 9497,
                              "end": 9555
                            }
                          ],
                          "declare": false,
                          "start": 9493,
                          "end": 9556
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
                                      "start": 9580,
                                      "end": 9590
                                    },
                                    "typeArguments": null,
                                    "start": 9580,
                                    "end": 9590
                                  },
                                  "start": 9578,
                                  "end": 9590
                                },
                                "start": 9573,
                                "end": 9590
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 9593,
                                "end": 9597
                              },
                              "definite": false,
                              "start": 9573,
                              "end": 9597
                            }
                          ],
                          "declare": false,
                          "start": 9569,
                          "end": 9598
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9616,
                            "end": 9624
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
                                          "start": 9946,
                                          "end": 9954
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "type",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9955,
                                          "end": 9959
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9946,
                                        "end": 9959
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "members",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9960,
                                        "end": 9967
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 9946,
                                      "end": 9967
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 9971,
                                      "end": 9975
                                    },
                                    "start": 9946,
                                    "end": 9975
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
                                          "start": 9979,
                                          "end": 9988
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "getType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9989,
                                          "end": 9996
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 9979,
                                        "end": 9996
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 9979,
                                      "end": 9998
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9999,
                                      "end": 10010
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 9979,
                                    "end": 10010
                                  },
                                  "start": 9946,
                                  "end": 10010
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
                                              "start": 10034,
                                              "end": 10042
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "type",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10043,
                                              "end": 10047
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10034,
                                            "end": 10047
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "members",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10048,
                                            "end": 10055
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10034,
                                          "end": 10055
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
                                                "start": 10060,
                                                "end": 10078
                                              },
                                              "typeArguments": null,
                                              "start": 10060,
                                              "end": 10078
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
                                                      "start": 10081,
                                                      "end": 10091
                                                    },
                                                    "typeArguments": null,
                                                    "start": 10081,
                                                    "end": 10091
                                                  },
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "container",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 10092,
                                                    "end": 10101
                                                  },
                                                  "start": 10080,
                                                  "end": 10101
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10103,
                                                  "end": 10107
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10079,
                                                "end": 10107
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "memberScope",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10108,
                                                "end": 10119
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10079,
                                              "end": 10119
                                            },
                                            "start": 10059,
                                            "end": 10119
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valueMembers",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10121,
                                            "end": 10133
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10058,
                                          "end": 10133
                                        },
                                        "start": 10034,
                                        "end": 10133
                                      },
                                      "directive": null,
                                      "start": 10034,
                                      "end": 10134
                                    }
                                  ],
                                  "start": 10012,
                                  "end": 10152
                                },
                                "alternate": null,
                                "start": 9942,
                                "end": 10152
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
                                    "start": 10169,
                                    "end": 10178
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
                                            "start": 10181,
                                            "end": 10188
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10189,
                                            "end": 10199
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10181,
                                          "end": 10199
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10200,
                                          "end": 10203
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10181,
                                        "end": 10203
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10204,
                                        "end": 10208
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10181,
                                      "end": 10208
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 10209,
                                      "end": 10220
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 10181,
                                    "end": 10220
                                  },
                                  "start": 10169,
                                  "end": 10220
                                },
                                "directive": null,
                                "start": 10169,
                                "end": 10221
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
                                        "start": 10238,
                                        "end": 10246
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "innerStaticFuncs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10247,
                                        "end": 10263
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10238,
                                      "end": 10263
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
                                          "start": 10264,
                                          "end": 10272
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "innerStaticFuncs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10273,
                                          "end": 10289
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10264,
                                        "end": 10289
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10290,
                                        "end": 10296
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10264,
                                      "end": 10296
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 10238,
                                    "end": 10297
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10300,
                                    "end": 10308
                                  },
                                  "start": 10238,
                                  "end": 10308
                                },
                                "directive": null,
                                "start": 10238,
                                "end": 10309
                              }
                            ],
                            "start": 9626,
                            "end": 10323
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
                                                "start": 10365,
                                                "end": 10373
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isConstructor",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10374,
                                                "end": 10387
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10365,
                                              "end": 10387
                                            },
                                            "prefix": true,
                                            "start": 10364,
                                            "end": 10387
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10411,
                                            "end": 10420
                                          },
                                          "start": 10364,
                                          "end": 10420
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
                                            "start": 10444,
                                            "end": 10453
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10454,
                                            "end": 10461
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10444,
                                          "end": 10461
                                        },
                                        "start": 10364,
                                        "end": 10461
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
                                              "start": 10485,
                                              "end": 10494
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "declAST",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10495,
                                              "end": 10502
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10485,
                                            "end": 10502
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10503,
                                            "end": 10511
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10485,
                                          "end": 10511
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
                                            "start": 10515,
                                            "end": 10523
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "FuncDecl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10524,
                                            "end": 10532
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10515,
                                          "end": 10532
                                        },
                                        "start": 10485,
                                        "end": 10532
                                      },
                                      "start": 10364,
                                      "end": 10532
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
                                            "start": 10558,
                                            "end": 10566
                                          },
                                          "typeArguments": null,
                                          "start": 10558,
                                          "end": 10566
                                        },
                                        "expression": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10567,
                                            "end": 10576
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10577,
                                            "end": 10584
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10567,
                                          "end": 10584
                                        },
                                        "start": 10557,
                                        "end": 10584
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isConstructor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 10586,
                                        "end": 10599
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 10556,
                                      "end": 10599
                                    },
                                    "start": 10364,
                                    "end": 10599
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
                                          "start": 10624,
                                          "end": 10632
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10633,
                                          "end": 10641
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 10624,
                                        "end": 10641
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 10624,
                                      "end": 10643
                                    },
                                    "prefix": true,
                                    "start": 10623,
                                    "end": 10643
                                  },
                                  "start": 10364,
                                  "end": 10643
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
                                          "start": 10667,
                                          "end": 10676
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
                                                "start": 10679,
                                                "end": 10686
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10687,
                                                "end": 10697
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10679,
                                              "end": 10697
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "thisType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10698,
                                              "end": 10706
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10679,
                                            "end": 10706
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10707,
                                            "end": 10723
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10679,
                                          "end": 10723
                                        },
                                        "start": 10667,
                                        "end": 10723
                                      },
                                      "directive": null,
                                      "start": 10667,
                                      "end": 10724
                                    }
                                  ],
                                  "start": 10645,
                                  "end": 10751
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
                                          "start": 10795,
                                          "end": 10804
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
                                              "start": 10807,
                                              "end": 10814
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "scopeChain",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10815,
                                              "end": 10825
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 10807,
                                            "end": 10825
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10826,
                                            "end": 10831
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10807,
                                          "end": 10831
                                        },
                                        "start": 10795,
                                        "end": 10831
                                      },
                                      "directive": null,
                                      "start": 10795,
                                      "end": 10832
                                    }
                                  ],
                                  "start": 10773,
                                  "end": 10850
                                },
                                "start": 10360,
                                "end": 10850
                              }
                            ],
                            "start": 10341,
                            "end": 10864
                          },
                          "start": 9612,
                          "end": 10864
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
                                "start": 11158,
                                "end": 11166
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
                                  "start": 11170,
                                  "end": 11178
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": "__missing",
                                  "raw": "\"__missing\"",
                                  "start": 11182,
                                  "end": 11193
                                },
                                "start": 11170,
                                "end": 11193
                              },
                              "start": 11158,
                              "end": 11193
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
                                    "start": 11198,
                                    "end": 11206
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11207,
                                    "end": 11217
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 11198,
                                  "end": 11217
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 11198,
                                "end": 11219
                              },
                              "prefix": true,
                              "start": 11197,
                              "end": 11219
                            },
                            "start": 11158,
                            "end": 11219
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
                                  "start": 11243,
                                  "end": 11251
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
                                          "start": 11275,
                                          "end": 11280
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
                                              "start": 11283,
                                              "end": 11292
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11293,
                                              "end": 11302
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 11283,
                                            "end": 11302
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11303,
                                              "end": 11311
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11313,
                                              "end": 11318
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11320,
                                              "end": 11325
                                            }
                                          ],
                                          "optional": false,
                                          "start": 11283,
                                          "end": 11326
                                        },
                                        "start": 11275,
                                        "end": 11326
                                      },
                                      "directive": null,
                                      "start": 11275,
                                      "end": 11327
                                    }
                                  ],
                                  "start": 11253,
                                  "end": 11345
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
                                          "start": 11477,
                                          "end": 11482
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
                                              "start": 11485,
                                              "end": 11494
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11495,
                                              "end": 11504
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 11485,
                                            "end": 11504
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11505,
                                              "end": 11513
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11515,
                                              "end": 11520
                                            },
                                            {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 11522,
                                              "end": 11527
                                            }
                                          ],
                                          "optional": false,
                                          "start": 11485,
                                          "end": 11528
                                        },
                                        "start": 11477,
                                        "end": 11528
                                      },
                                      "directive": null,
                                      "start": 11477,
                                      "end": 11529
                                    }
                                  ],
                                  "start": 11367,
                                  "end": 11547
                                },
                                "start": 11239,
                                "end": 11547
                              }
                            ],
                            "start": 11221,
                            "end": 11561
                          },
                          "alternate": null,
                          "start": 11154,
                          "end": 11561
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
                                    "start": 11575,
                                    "end": 11582
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11583,
                                    "end": 11591
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 11575,
                                  "end": 11591
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11592,
                                  "end": 11599
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11575,
                                "end": 11599
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "createFunctionSignature",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11600,
                                "end": 11623
                              },
                              "optional": false,
                              "computed": false,
                              "start": 11575,
                              "end": 11623
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11624,
                                "end": 11632
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "container",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11634,
                                "end": 11643
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11705,
                                "end": 11714
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11716,
                                "end": 11721
                              },
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fgSym",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11723,
                                  "end": 11728
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 11732,
                                  "end": 11736
                                },
                                "start": 11723,
                                "end": 11736
                              }
                            ],
                            "optional": false,
                            "start": 11575,
                            "end": 11737
                          },
                          "directive": null,
                          "start": 11575,
                          "end": 11738
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
                                        "start": 11838,
                                        "end": 11846
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "accessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11847,
                                        "end": 11861
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11838,
                                      "end": 11861
                                    },
                                    "prefix": true,
                                    "start": 11837,
                                    "end": 11861
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
                                        "start": 11883,
                                        "end": 11891
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "fncFlags",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11892,
                                        "end": 11900
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11883,
                                      "end": 11900
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
                                        "start": 11903,
                                        "end": 11911
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ClassMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 11912,
                                        "end": 11923
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11903,
                                      "end": 11923
                                    },
                                    "start": 11883,
                                    "end": 11923
                                  },
                                  "start": 11837,
                                  "end": 11924
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "container",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11944,
                                  "end": 11953
                                },
                                "start": 11837,
                                "end": 11953
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
                                      "start": 11977,
                                      "end": 11982
                                    },
                                    "prefix": true,
                                    "start": 11976,
                                    "end": 11982
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
                                          "start": 11986,
                                          "end": 11991
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 11992,
                                          "end": 11999
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 11986,
                                        "end": 11999
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12000,
                                        "end": 12008
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 11986,
                                      "end": 12008
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
                                        "start": 12012,
                                        "end": 12020
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12021,
                                        "end": 12029
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 12012,
                                      "end": 12029
                                    },
                                    "start": 11986,
                                    "end": 12029
                                  },
                                  "start": 11976,
                                  "end": 12029
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
                                      "start": 12034,
                                      "end": 12042
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isAccessor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12043,
                                      "end": 12053
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 12034,
                                    "end": 12053
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 12034,
                                  "end": 12055
                                },
                                "start": 11975,
                                "end": 12055
                              },
                              "start": 11837,
                              "end": 12056
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
                                "start": 12082,
                                "end": 12087
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
                                    "start": 12091,
                                    "end": 12096
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12097,
                                    "end": 12107
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 12091,
                                  "end": 12107
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 12091,
                                "end": 12109
                              },
                              "start": 12082,
                              "end": 12109
                            },
                            "start": 11837,
                            "end": 12110
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
                                      "start": 12143,
                                      "end": 12151
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "accessorSymbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 12152,
                                      "end": 12166
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 12143,
                                    "end": 12166
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
                                            "start": 12169,
                                            "end": 12176
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "typeFlow",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12177,
                                            "end": 12185
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 12169,
                                          "end": 12185
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "checker",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 12186,
                                          "end": 12193
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 12169,
                                        "end": 12193
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "createAccessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12194,
                                        "end": 12214
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 12169,
                                      "end": 12214
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12215,
                                        "end": 12223
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "fgSym",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12225,
                                        "end": 12230
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
                                            "start": 12232,
                                            "end": 12241
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12242,
                                            "end": 12249
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 12232,
                                          "end": 12249
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 12232,
                                        "end": 12251
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
                                              "start": 12254,
                                              "end": 12262
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "isMethod",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12263,
                                              "end": 12271
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 12254,
                                            "end": 12271
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 12254,
                                          "end": 12273
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isStatic",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 12277,
                                          "end": 12285
                                        },
                                        "start": 12254,
                                        "end": 12285
                                      },
                                      {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12288,
                                        "end": 12292
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcScope",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12294,
                                        "end": 12303
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "container",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 12305,
                                        "end": 12314
                                      }
                                    ],
                                    "optional": false,
                                    "start": 12169,
                                    "end": 12315
                                  },
                                  "start": 12143,
                                  "end": 12315
                                },
                                "directive": null,
                                "start": 12143,
                                "end": 12316
                              }
                            ],
                            "start": 12125,
                            "end": 12330
                          },
                          "alternate": null,
                          "start": 11833,
                          "end": 12330
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
                                    "start": 12344,
                                    "end": 12352
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 12353,
                                    "end": 12357
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 12344,
                                  "end": 12357
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12358,
                                  "end": 12364
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12344,
                                "end": 12364
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "flags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12365,
                                "end": 12370
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12344,
                              "end": 12370
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12374,
                                "end": 12385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TypeSetDuringScopeAssignment",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12386,
                                "end": 12414
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12374,
                              "end": 12414
                            },
                            "start": 12344,
                            "end": 12414
                          },
                          "directive": null,
                          "start": 12344,
                          "end": 12415
                        }
                      ],
                      "start": 9232,
                      "end": 12425
                    },
                    "alternate": null,
                    "start": 9124,
                    "end": 12425
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
                          "start": 12499,
                          "end": 12507
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12508,
                          "end": 12512
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12499,
                        "end": 12512
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
                          "start": 12516,
                          "end": 12524
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12525,
                          "end": 12529
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12516,
                        "end": 12529
                      },
                      "start": 12499,
                      "end": 12529
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
                                  "start": 12545,
                                  "end": 12553
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12554,
                                  "end": 12558
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12545,
                                "end": 12558
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12559,
                                "end": 12562
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12545,
                              "end": 12562
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
                                  "start": 12565,
                                  "end": 12573
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 12574,
                                  "end": 12578
                                },
                                "optional": false,
                                "computed": false,
                                "start": 12565,
                                "end": 12578
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12579,
                                "end": 12585
                              },
                              "optional": false,
                              "computed": false,
                              "start": 12565,
                              "end": 12585
                            },
                            "start": 12545,
                            "end": 12585
                          },
                          "directive": null,
                          "start": 12545,
                          "end": 12586
                        }
                      ],
                      "start": 12531,
                      "end": 12596
                    },
                    "alternate": null,
                    "start": 12495,
                    "end": 12596
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
                          "start": 12783,
                          "end": 12791
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12792,
                          "end": 12801
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12783,
                        "end": 12801
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12804,
                          "end": 12812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12813,
                          "end": 12817
                        },
                        "optional": false,
                        "computed": false,
                        "start": 12804,
                        "end": 12817
                      },
                      "start": 12783,
                      "end": 12817
                    },
                    "directive": null,
                    "start": 12783,
                    "end": 12818
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
                        "start": 12881,
                        "end": 12889
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isOverload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12890,
                        "end": 12900
                      },
                      "optional": false,
                      "computed": false,
                      "start": 12881,
                      "end": 12900
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 12916,
                          "end": 12923
                        }
                      ],
                      "start": 12902,
                      "end": 12933
                    },
                    "alternate": null,
                    "start": 12877,
                    "end": 12933
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
                          "start": 12947,
                          "end": 12956
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12963,
                            "end": 12978
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 12959,
                          "end": 12980
                        },
                        "definite": false,
                        "start": 12947,
                        "end": 12980
                      }
                    ],
                    "declare": false,
                    "start": 12943,
                    "end": 12981
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
                          "start": 12994,
                          "end": 13005
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13012,
                            "end": 13025
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
                                "start": 13030,
                                "end": 13049
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13050,
                                  "end": 13059
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13065,
                                    "end": 13080
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13061,
                                  "end": 13082
                                }
                              ],
                              "start": 13026,
                              "end": 13083
                            }
                          ],
                          "start": 13008,
                          "end": 13084
                        },
                        "definite": false,
                        "start": 12994,
                        "end": 13084
                      }
                    ],
                    "declare": false,
                    "start": 12990,
                    "end": 13085
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
                          "start": 13098,
                          "end": 13114
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13121,
                            "end": 13136
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13117,
                          "end": 13138
                        },
                        "definite": false,
                        "start": 13098,
                        "end": 13138
                      }
                    ],
                    "declare": false,
                    "start": 13094,
                    "end": 13139
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
                          "start": 13152,
                          "end": 13170
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13177,
                            "end": 13190
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
                                "start": 13195,
                                "end": 13214
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ambientFuncTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13215,
                                  "end": 13231
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13237,
                                    "end": 13252
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13233,
                                  "end": 13254
                                }
                              ],
                              "start": 13191,
                              "end": 13255
                            }
                          ],
                          "start": 13173,
                          "end": 13256
                        },
                        "definite": false,
                        "start": 13152,
                        "end": 13256
                      }
                    ],
                    "declare": false,
                    "start": 13148,
                    "end": 13257
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
                          "start": 13270,
                          "end": 13285
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13292,
                            "end": 13307
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13288,
                          "end": 13309
                        },
                        "definite": false,
                        "start": 13270,
                        "end": 13309
                      }
                    ],
                    "declare": false,
                    "start": 13266,
                    "end": 13310
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
                          "start": 13323,
                          "end": 13340
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13347,
                            "end": 13360
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
                                "start": 13365,
                                "end": 13384
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13385,
                                  "end": 13400
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13406,
                                    "end": 13421
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13402,
                                  "end": 13423
                                }
                              ],
                              "start": 13361,
                              "end": 13424
                            }
                          ],
                          "start": 13343,
                          "end": 13425
                        },
                        "definite": false,
                        "start": 13323,
                        "end": 13425
                      }
                    ],
                    "declare": false,
                    "start": 13319,
                    "end": 13426
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
                          "start": 13439,
                          "end": 13461
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13468,
                            "end": 13483
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 13464,
                          "end": 13485
                        },
                        "definite": false,
                        "start": 13439,
                        "end": 13485
                      }
                    ],
                    "declare": false,
                    "start": 13435,
                    "end": 13486
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
                          "start": 13499,
                          "end": 13523
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13530,
                            "end": 13543
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
                                "start": 13548,
                                "end": 13567
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ambientFuncStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13568,
                                  "end": 13590
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13596,
                                    "end": 13611
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 13592,
                                  "end": 13613
                                }
                              ],
                              "start": 13544,
                              "end": 13614
                            }
                          ],
                          "start": 13526,
                          "end": 13615
                        },
                        "definite": false,
                        "start": 13499,
                        "end": 13615
                      }
                    ],
                    "declare": false,
                    "start": 13495,
                    "end": 13616
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
                          "start": 13723,
                          "end": 13731
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13732,
                          "end": 13741
                        },
                        "optional": false,
                        "computed": false,
                        "start": 13723,
                        "end": 13741
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
                                "start": 13744,
                                "end": 13751
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "typeFlow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13752,
                                "end": 13760
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13744,
                              "end": 13760
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "checker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13761,
                              "end": 13768
                            },
                            "optional": false,
                            "computed": false,
                            "start": 13744,
                            "end": 13768
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locationInfo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13769,
                            "end": 13781
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13744,
                          "end": 13781
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13782,
                          "end": 13791
                        },
                        "optional": false,
                        "computed": false,
                        "start": 13744,
                        "end": 13791
                      },
                      "start": 13723,
                      "end": 13791
                    },
                    "directive": null,
                    "start": 13723,
                    "end": 13792
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
                          "start": 13806,
                          "end": 13812
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13819,
                            "end": 13837
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13838,
                              "end": 13849
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientFuncMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13851,
                              "end": 13869
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 13871,
                              "end": 13875
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 13877,
                              "end": 13881
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13883,
                              "end": 13894
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "localContainer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13896,
                              "end": 13910
                            }
                          ],
                          "start": 13815,
                          "end": 13911
                        },
                        "definite": false,
                        "start": 13806,
                        "end": 13911
                      }
                    ],
                    "declare": false,
                    "start": 13802,
                    "end": 13912
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
                          "start": 13925,
                          "end": 13932
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13939,
                            "end": 13957
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "funcStaticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13958,
                              "end": 13975
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ambientFuncStaticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13977,
                              "end": 14001
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14003,
                              "end": 14007
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14009,
                              "end": 14013
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14015,
                              "end": 14026
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 14028,
                              "end": 14032
                            }
                          ],
                          "start": 13935,
                          "end": 14033
                        },
                        "definite": false,
                        "start": 13925,
                        "end": 14033
                      }
                    ],
                    "declare": false,
                    "start": 13921,
                    "end": 14034
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
                          "start": 14048,
                          "end": 14056
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14057,
                          "end": 14070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14048,
                        "end": 14070
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
                            "start": 14074,
                            "end": 14081
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14082,
                            "end": 14092
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14074,
                          "end": 14092
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14093,
                          "end": 14101
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14074,
                        "end": 14101
                      },
                      "start": 14048,
                      "end": 14101
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
                                    "start": 14117,
                                    "end": 14124
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 14125,
                                    "end": 14135
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 14117,
                                  "end": 14135
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14136,
                                  "end": 14144
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14117,
                                "end": 14144
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "constructorScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14145,
                                "end": 14161
                              },
                              "optional": false,
                              "computed": false,
                              "start": 14117,
                              "end": 14161
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14164,
                              "end": 14170
                            },
                            "start": 14117,
                            "end": 14170
                          },
                          "directive": null,
                          "start": 14117,
                          "end": 14171
                        }
                      ],
                      "start": 14103,
                      "end": 14181
                    },
                    "alternate": null,
                    "start": 14044,
                    "end": 14181
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
                          "start": 14810,
                          "end": 14818
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "symbols",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14819,
                          "end": 14826
                        },
                        "optional": false,
                        "computed": false,
                        "start": 14810,
                        "end": 14826
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcTable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14829,
                        "end": 14838
                      },
                      "start": 14810,
                      "end": 14838
                    },
                    "directive": null,
                    "start": 14810,
                    "end": 14839
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
                            "start": 14854,
                            "end": 14862
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isSpecialFn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14863,
                            "end": 14874
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14854,
                          "end": 14874
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 14854,
                        "end": 14876
                      },
                      "prefix": true,
                      "start": 14853,
                      "end": 14876
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
                                "start": 14896,
                                "end": 14901
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14904,
                                  "end": 14912
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14913,
                                  "end": 14917
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14904,
                                "end": 14917
                              },
                              "definite": false,
                              "start": 14896,
                              "end": 14917
                            }
                          ],
                          "declare": false,
                          "start": 14892,
                          "end": 14918
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
                                "start": 14935,
                                "end": 14944
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14947,
                                  "end": 14955
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14956,
                                  "end": 14965
                                },
                                "optional": false,
                                "computed": false,
                                "start": 14947,
                                "end": 14965
                              },
                              "definite": false,
                              "start": 14935,
                              "end": 14965
                            }
                          ],
                          "declare": false,
                          "start": 14931,
                          "end": 14966
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
                                "start": 14985,
                                "end": 14993
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14994,
                                "end": 15007
                              },
                              "optional": false,
                              "computed": false,
                              "start": 14985,
                              "end": 15007
                            },
                            "prefix": true,
                            "start": 14984,
                            "end": 15007
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
                                      "start": 15027,
                                      "end": 15032
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "containedScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15033,
                                      "end": 15047
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15027,
                                    "end": 15047
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "locals",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15050,
                                    "end": 15056
                                  },
                                  "start": 15027,
                                  "end": 15056
                                },
                                "directive": null,
                                "start": 15027,
                                "end": 15057
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
                                      "start": 15074,
                                      "end": 15080
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15081,
                                      "end": 15090
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15074,
                                    "end": 15090
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15093,
                                      "end": 15098
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15099,
                                      "end": 15105
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15093,
                                    "end": 15105
                                  },
                                  "start": 15074,
                                  "end": 15105
                                },
                                "directive": null,
                                "start": 15074,
                                "end": 15106
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
                                      "start": 15124,
                                      "end": 15129
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15130,
                                      "end": 15141
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15124,
                                    "end": 15141
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "statics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15144,
                                    "end": 15151
                                  },
                                  "start": 15124,
                                  "end": 15151
                                },
                                "directive": null,
                                "start": 15124,
                                "end": 15152
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
                                      "start": 15169,
                                      "end": 15176
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15177,
                                      "end": 15186
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15169,
                                    "end": 15186
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15189,
                                      "end": 15194
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15195,
                                      "end": 15201
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15189,
                                    "end": 15201
                                  },
                                  "start": 15169,
                                  "end": 15201
                                },
                                "directive": null,
                                "start": 15169,
                                "end": 15202
                              }
                            ],
                            "start": 15009,
                            "end": 15216
                          },
                          "alternate": null,
                          "start": 14980,
                          "end": 15216
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
                                "start": 15229,
                                "end": 15237
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "enclosingFnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15238,
                                "end": 15250
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15229,
                              "end": 15250
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
                                  "start": 15253,
                                  "end": 15260
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15261,
                                  "end": 15271
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15253,
                                "end": 15271
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15272,
                                "end": 15275
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15253,
                              "end": 15275
                            },
                            "start": 15229,
                            "end": 15275
                          },
                          "directive": null,
                          "start": 15229,
                          "end": 15276
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
                                "start": 15289,
                                "end": 15294
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "enclosingType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15295,
                                "end": 15308
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15289,
                              "end": 15308
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isStatic",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15311,
                                "end": 15319
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
                                    "start": 15322,
                                    "end": 15329
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15330,
                                    "end": 15340
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15322,
                                  "end": 15340
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15341,
                                  "end": 15350
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15322,
                                "end": 15350
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
                                    "start": 15353,
                                    "end": 15360
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15361,
                                    "end": 15371
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15353,
                                  "end": 15371
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15372,
                                  "end": 15380
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15353,
                                "end": 15380
                              },
                              "start": 15311,
                              "end": 15380
                            },
                            "start": 15289,
                            "end": 15380
                          },
                          "directive": null,
                          "start": 15289,
                          "end": 15381
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
                                "start": 15444,
                                "end": 15449
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
                                    "start": 15453,
                                    "end": 15463
                                  },
                                  "typeArguments": null,
                                  "start": 15453,
                                  "end": 15463
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
                                      "start": 15464,
                                      "end": 15467
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15468,
                                      "end": 15472
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15464,
                                    "end": 15472
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15473,
                                    "end": 15479
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15464,
                                  "end": 15479
                                },
                                "start": 15452,
                                "end": 15479
                              },
                              "definite": false,
                              "start": 15444,
                              "end": 15479
                            }
                          ],
                          "declare": false,
                          "start": 15440,
                          "end": 15480
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
                                    "start": 15499,
                                    "end": 15507
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fncFlags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15508,
                                    "end": 15516
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15499,
                                  "end": 15516
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
                                    "start": 15519,
                                    "end": 15527
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Signature",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 15528,
                                    "end": 15537
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 15519,
                                  "end": 15537
                                },
                                "start": 15499,
                                "end": 15537
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
                                  "start": 15542,
                                  "end": 15550
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "None",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 15551,
                                  "end": 15555
                                },
                                "optional": false,
                                "computed": false,
                                "start": 15542,
                                "end": 15555
                              },
                              "start": 15498,
                              "end": 15555
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
                                "start": 15560,
                                "end": 15568
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "vars",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15569,
                                "end": 15573
                              },
                              "optional": false,
                              "computed": false,
                              "start": 15560,
                              "end": 15573
                            },
                            "start": 15497,
                            "end": 15573
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
                                        "start": 15593,
                                        "end": 15600
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15601,
                                        "end": 15609
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15593,
                                      "end": 15609
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15610,
                                      "end": 15628
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15593,
                                    "end": 15628
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "locals",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15629,
                                      "end": 15635
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15637,
                                      "end": 15642
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15644,
                                        "end": 15652
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "vars",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15653,
                                        "end": 15657
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15644,
                                      "end": 15657
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcTable",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15711,
                                      "end": 15720
                                    },
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 15722,
                                      "end": 15727
                                    }
                                  ],
                                  "optional": false,
                                  "start": 15593,
                                  "end": 15728
                                },
                                "directive": null,
                                "start": 15593,
                                "end": 15729
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
                                        "start": 15746,
                                        "end": 15753
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15754,
                                        "end": 15762
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15746,
                                      "end": 15762
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15763,
                                      "end": 15781
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 15746,
                                    "end": 15781
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "statics",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15782,
                                      "end": 15789
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15791,
                                      "end": 15796
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15798,
                                        "end": 15806
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "statics",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15807,
                                        "end": 15814
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15798,
                                      "end": 15814
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "funcStaticTable",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 15868,
                                      "end": 15883
                                    },
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 15885,
                                      "end": 15890
                                    }
                                  ],
                                  "optional": false,
                                  "start": 15746,
                                  "end": 15891
                                },
                                "directive": null,
                                "start": 15746,
                                "end": 15892
                              }
                            ],
                            "start": 15575,
                            "end": 15906
                          },
                          "alternate": null,
                          "start": 15493,
                          "end": 15906
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
                              "start": 15923,
                              "end": 15932
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parameters",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15933,
                              "end": 15943
                            },
                            "optional": false,
                            "computed": false,
                            "start": 15923,
                            "end": 15943
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
                                      "start": 15967,
                                      "end": 15970
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
                                          "start": 15973,
                                          "end": 15982
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "parameters",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 15983,
                                          "end": 15993
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 15973,
                                        "end": 15993
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 15994,
                                        "end": 16000
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 15973,
                                      "end": 16000
                                    },
                                    "definite": false,
                                    "start": 15967,
                                    "end": 16000
                                  }
                                ],
                                "declare": false,
                                "start": 15963,
                                "end": 16001
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
                                        "start": 16027,
                                        "end": 16028
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 16031,
                                        "end": 16032
                                      },
                                      "definite": false,
                                      "start": 16027,
                                      "end": 16032
                                    }
                                  ],
                                  "declare": false,
                                  "start": 16023,
                                  "end": 16032
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16034,
                                    "end": 16035
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "len",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16038,
                                    "end": 16041
                                  },
                                  "start": 16034,
                                  "end": 16041
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
                                    "start": 16043,
                                    "end": 16044
                                  },
                                  "start": 16043,
                                  "end": 16046
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
                                                  "start": 16084,
                                                  "end": 16099
                                                },
                                                "typeArguments": null,
                                                "start": 16084,
                                                "end": 16099
                                              },
                                              "start": 16082,
                                              "end": 16099
                                            },
                                            "start": 16074,
                                            "end": 16099
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
                                                "start": 16102,
                                                "end": 16111
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "parameters",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16112,
                                                "end": 16122
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16102,
                                              "end": 16122
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16123,
                                              "end": 16124
                                            },
                                            "optional": false,
                                            "computed": true,
                                            "start": 16102,
                                            "end": 16125
                                          },
                                          "definite": false,
                                          "start": 16074,
                                          "end": 16125
                                        }
                                      ],
                                      "declare": false,
                                      "start": 16070,
                                      "end": 16126
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
                                                "start": 16147,
                                                "end": 16154
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16155,
                                                "end": 16163
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16147,
                                              "end": 16163
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16164,
                                              "end": 16171
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 16147,
                                            "end": 16171
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "resolveTypeLink",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 16172,
                                            "end": 16187
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 16147,
                                          "end": 16187
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "locals",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 16188,
                                            "end": 16194
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
                                                "start": 16260,
                                                "end": 16268
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "parameter",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 16269,
                                                "end": 16278
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 16260,
                                              "end": 16278
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "typeLink",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 16279,
                                              "end": 16287
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 16260,
                                            "end": 16287
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 16289,
                                            "end": 16293
                                          }
                                        ],
                                        "optional": false,
                                        "start": 16147,
                                        "end": 16294
                                      },
                                      "directive": null,
                                      "start": 16147,
                                      "end": 16295
                                    }
                                  ],
                                  "start": 16048,
                                  "end": 16313
                                },
                                "start": 16018,
                                "end": 16313
                              }
                            ],
                            "start": 15945,
                            "end": 16327
                          },
                          "alternate": null,
                          "start": 15919,
                          "end": 16327
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
                                    "start": 16340,
                                    "end": 16347
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16348,
                                    "end": 16356
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16340,
                                  "end": 16356
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16357,
                                  "end": 16364
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16340,
                                "end": 16364
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolveTypeLink",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16365,
                                "end": 16380
                              },
                              "optional": false,
                              "computed": false,
                              "start": 16340,
                              "end": 16380
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16381,
                                "end": 16387
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16389,
                                  "end": 16398
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "returnType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16399,
                                  "end": 16409
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16389,
                                "end": 16409
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
                                    "start": 16467,
                                    "end": 16475
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isSignature",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16476,
                                    "end": 16487
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16467,
                                  "end": 16487
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 16467,
                                "end": 16489
                              }
                            ],
                            "optional": false,
                            "start": 16340,
                            "end": 16490
                          },
                          "directive": null,
                          "start": 16340,
                          "end": 16491
                        }
                      ],
                      "start": 14878,
                      "end": 16501
                    },
                    "alternate": null,
                    "start": 14849,
                    "end": 16501
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
                            "start": 16516,
                            "end": 16524
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 16525,
                            "end": 16538
                          },
                          "optional": false,
                          "computed": false,
                          "start": 16516,
                          "end": 16538
                        },
                        "prefix": true,
                        "start": 16515,
                        "end": 16538
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
                          "start": 16542,
                          "end": 16549
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
                              "start": 16550,
                              "end": 16558
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fncFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16559,
                              "end": 16567
                            },
                            "optional": false,
                            "computed": false,
                            "start": 16550,
                            "end": 16567
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FncFlags",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16569,
                              "end": 16577
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ClassMethod",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16578,
                              "end": 16589
                            },
                            "optional": false,
                            "computed": false,
                            "start": 16569,
                            "end": 16589
                          }
                        ],
                        "optional": false,
                        "start": 16542,
                        "end": 16590
                      },
                      "start": 16515,
                      "end": 16590
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
                                "start": 16610,
                                "end": 16618
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
                                      "start": 16622,
                                      "end": 16630
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16631,
                                      "end": 16644
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 16622,
                                    "end": 16644
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
                                      "start": 16648,
                                      "end": 16655
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
                                          "start": 16656,
                                          "end": 16664
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fncFlags",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16665,
                                          "end": 16673
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 16656,
                                        "end": 16673
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FncFlags",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16675,
                                          "end": 16683
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ClassMethod",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 16684,
                                          "end": 16695
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 16675,
                                        "end": 16695
                                      }
                                    ],
                                    "optional": false,
                                    "start": 16648,
                                    "end": 16696
                                  },
                                  "start": 16622,
                                  "end": 16696
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
                                      "start": 16700,
                                      "end": 16707
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 16708,
                                      "end": 16718
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 16700,
                                    "end": 16718
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 16719,
                                    "end": 16727
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 16700,
                                  "end": 16727
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 16730,
                                  "end": 16734
                                },
                                "start": 16621,
                                "end": 16734
                              },
                              "definite": false,
                              "start": 16610,
                              "end": 16734
                            }
                          ],
                          "declare": false,
                          "start": 16606,
                          "end": 16735
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
                              "start": 16748,
                              "end": 16763
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16764,
                                "end": 16770
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16772,
                                "end": 16779
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thisType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16781,
                                "end": 16789
                              },
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 16791,
                                "end": 16795
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 16797,
                                "end": 16805
                              }
                            ],
                            "optional": false,
                            "start": 16748,
                            "end": 16806
                          },
                          "directive": null,
                          "start": 16748,
                          "end": 16807
                        }
                      ],
                      "start": 16592,
                      "end": 16817
                    },
                    "alternate": null,
                    "start": 16511,
                    "end": 16817
                  }
                ],
                "start": 6438,
                "end": 16823
              },
              "expression": false,
              "start": 6366,
              "end": 16823
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6359,
            "end": 16823
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
                "start": 16845,
                "end": 16865
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
                        "start": 16871,
                        "end": 16874
                      },
                      "typeArguments": null,
                      "start": 16871,
                      "end": 16874
                    },
                    "start": 16869,
                    "end": 16874
                  },
                  "start": 16866,
                  "end": 16874
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
                        "start": 16885,
                        "end": 16903
                      },
                      "typeArguments": null,
                      "start": 16885,
                      "end": 16903
                    },
                    "start": 16883,
                    "end": 16903
                  },
                  "start": 16876,
                  "end": 16903
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
                          "start": 16919,
                          "end": 16929
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
                              "start": 16933,
                              "end": 16938
                            },
                            "typeArguments": null,
                            "start": 16933,
                            "end": 16938
                          },
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 16939,
                            "end": 16942
                          },
                          "start": 16932,
                          "end": 16942
                        },
                        "definite": false,
                        "start": 16919,
                        "end": 16942
                      }
                    ],
                    "declare": false,
                    "start": 16915,
                    "end": 16943
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
                        "start": 16956,
                        "end": 16966
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16967,
                        "end": 16972
                      },
                      "optional": false,
                      "computed": false,
                      "start": 16956,
                      "end": 16972
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
                                "start": 16992,
                                "end": 17002
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ScopedMembers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17009,
                                  "end": 17022
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
                                      "start": 17027,
                                      "end": 17046
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
                                          "start": 17051,
                                          "end": 17066
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 17047,
                                        "end": 17068
                                      },
                                      {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "StringHashTable",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17074,
                                          "end": 17089
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 17070,
                                        "end": 17091
                                      }
                                    ],
                                    "start": 17023,
                                    "end": 17092
                                  }
                                ],
                                "start": 17005,
                                "end": 17093
                              },
                              "definite": false,
                              "start": 16992,
                              "end": 17093
                            }
                          ],
                          "declare": false,
                          "start": 16988,
                          "end": 17094
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
                                "start": 17187,
                                "end": 17198
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SymbolScopeBuilder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17205,
                                  "end": 17223
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "catchTable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17224,
                                    "end": 17234
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17236,
                                    "end": 17240
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17242,
                                    "end": 17246
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 17248,
                                    "end": 17252
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
                                        "start": 17254,
                                        "end": 17261
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17262,
                                        "end": 17272
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17254,
                                      "end": 17272
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17273,
                                      "end": 17278
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17254,
                                    "end": 17278
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
                                          "start": 17331,
                                          "end": 17338
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 17339,
                                          "end": 17349
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 17331,
                                        "end": 17349
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scope",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17350,
                                        "end": 17355
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17331,
                                      "end": 17355
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17356,
                                      "end": 17365
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17331,
                                    "end": 17365
                                  }
                                ],
                                "start": 17201,
                                "end": 17366
                              },
                              "definite": false,
                              "start": 17187,
                              "end": 17366
                            }
                          ],
                          "declare": false,
                          "start": 17183,
                          "end": 17367
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
                                "start": 17380,
                                "end": 17390
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17391,
                                "end": 17405
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17380,
                              "end": 17405
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "catchLocals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17408,
                              "end": 17419
                            },
                            "start": 17380,
                            "end": 17419
                          },
                          "directive": null,
                          "start": 17380,
                          "end": 17420
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
                              "start": 17433,
                              "end": 17448
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "catchLocals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17449,
                                "end": 17460
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17462,
                                "end": 17469
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
                                    "start": 17471,
                                    "end": 17478
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17479,
                                    "end": 17489
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17471,
                                  "end": 17489
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17490,
                                  "end": 17498
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17471,
                                "end": 17498
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
                                    "start": 17500,
                                    "end": 17507
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17508,
                                    "end": 17518
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17500,
                                  "end": 17518
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17519,
                                  "end": 17528
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17500,
                                "end": 17528
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
                                    "start": 17530,
                                    "end": 17537
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 17538,
                                    "end": 17548
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 17530,
                                  "end": 17548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17549,
                                  "end": 17552
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17530,
                                "end": 17552
                              }
                            ],
                            "optional": false,
                            "start": 17433,
                            "end": 17553
                          },
                          "directive": null,
                          "start": 17433,
                          "end": 17554
                        }
                      ],
                      "start": 16974,
                      "end": 17564
                    },
                    "alternate": null,
                    "start": 16952,
                    "end": 17564
                  }
                ],
                "start": 16905,
                "end": 17570
              },
              "expression": false,
              "start": 16836,
              "end": 17570
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16829,
            "end": 17570
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
                "start": 17592,
                "end": 17607
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
                        "start": 17613,
                        "end": 17616
                      },
                      "typeArguments": null,
                      "start": 17613,
                      "end": 17616
                    },
                    "start": 17611,
                    "end": 17616
                  },
                  "start": 17608,
                  "end": 17616
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
                        "start": 17626,
                        "end": 17629
                      },
                      "typeArguments": null,
                      "start": 17626,
                      "end": 17629
                    },
                    "start": 17624,
                    "end": 17629
                  },
                  "start": 17618,
                  "end": 17629
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
                        "start": 17639,
                        "end": 17649
                      },
                      "typeArguments": null,
                      "start": 17639,
                      "end": 17649
                    },
                    "start": 17637,
                    "end": 17649
                  },
                  "start": 17631,
                  "end": 17649
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
                                "start": 17673,
                                "end": 17691
                              },
                              "typeArguments": null,
                              "start": 17673,
                              "end": 17691
                            },
                            "start": 17672,
                            "end": 17691
                          },
                          "start": 17665,
                          "end": 17691
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17694,
                            "end": 17700
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17701,
                            "end": 17706
                          },
                          "optional": false,
                          "computed": false,
                          "start": 17694,
                          "end": 17706
                        },
                        "definite": false,
                        "start": 17665,
                        "end": 17706
                      }
                    ],
                    "declare": false,
                    "start": 17661,
                    "end": 17707
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
                          "start": 17720,
                          "end": 17722
                        },
                        "init": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 17725,
                          "end": 17729
                        },
                        "definite": false,
                        "start": 17720,
                        "end": 17729
                      }
                    ],
                    "declare": false,
                    "start": 17716,
                    "end": 17730
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17744,
                      "end": 17747
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
                                "start": 17767,
                                "end": 17770
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17771,
                                "end": 17779
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17767,
                              "end": 17779
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
                                "start": 17783,
                                "end": 17791
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17792,
                                "end": 17796
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17783,
                              "end": 17796
                            },
                            "start": 17767,
                            "end": 17796
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
                                      "start": 17820,
                                      "end": 17824
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
                                          "start": 17828,
                                          "end": 17835
                                        },
                                        "typeArguments": null,
                                        "start": 17828,
                                        "end": 17835
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17836,
                                        "end": 17839
                                      },
                                      "start": 17827,
                                      "end": 17839
                                    },
                                    "definite": false,
                                    "start": 17820,
                                    "end": 17839
                                  }
                                ],
                                "declare": false,
                                "start": 17816,
                                "end": 17840
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
                                      "start": 17857,
                                      "end": 17861
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "enclosingScope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17862,
                                      "end": 17876
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17857,
                                    "end": 17876
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
                                        "start": 17879,
                                        "end": 17886
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 17887,
                                        "end": 17897
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 17879,
                                      "end": 17897
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 17898,
                                      "end": 17903
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 17879,
                                    "end": 17903
                                  },
                                  "start": 17857,
                                  "end": 17903
                                },
                                "directive": null,
                                "start": 17857,
                                "end": 17904
                              }
                            ],
                            "start": 17798,
                            "end": 17918
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
                                  "start": 17940,
                                  "end": 17943
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17944,
                                  "end": 17952
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17940,
                                "end": 17952
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
                                  "start": 17956,
                                  "end": 17964
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ModuleDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 17965,
                                  "end": 17982
                                },
                                "optional": false,
                                "computed": false,
                                "start": 17956,
                                "end": 17982
                              },
                              "start": 17940,
                              "end": 17982
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
                                      "start": 18002,
                                      "end": 18023
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18024,
                                        "end": 18027
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18029,
                                        "end": 18036
                                      }
                                    ],
                                    "optional": false,
                                    "start": 18002,
                                    "end": 18037
                                  },
                                  "directive": null,
                                  "start": 18002,
                                  "end": 18038
                                }
                              ],
                              "start": 17984,
                              "end": 18052
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
                                    "start": 18074,
                                    "end": 18077
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18078,
                                    "end": 18086
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 18074,
                                  "end": 18086
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
                                    "start": 18090,
                                    "end": 18098
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ClassDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 18099,
                                    "end": 18115
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 18090,
                                  "end": 18115
                                },
                                "start": 18074,
                                "end": 18115
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
                                        "start": 18135,
                                        "end": 18155
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18156,
                                          "end": 18159
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18161,
                                          "end": 18168
                                        }
                                      ],
                                      "optional": false,
                                      "start": 18135,
                                      "end": 18169
                                    },
                                    "directive": null,
                                    "start": 18135,
                                    "end": 18170
                                  }
                                ],
                                "start": 18117,
                                "end": 18184
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
                                      "start": 18206,
                                      "end": 18209
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18210,
                                      "end": 18218
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 18206,
                                    "end": 18218
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
                                      "start": 18222,
                                      "end": 18230
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "InterfaceDeclaration",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 18231,
                                      "end": 18251
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 18222,
                                    "end": 18251
                                  },
                                  "start": 18206,
                                  "end": 18251
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
                                          "start": 18271,
                                          "end": 18295
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ast",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18296,
                                            "end": 18299
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18301,
                                            "end": 18308
                                          }
                                        ],
                                        "optional": false,
                                        "start": 18271,
                                        "end": 18309
                                      },
                                      "directive": null,
                                      "start": 18271,
                                      "end": 18310
                                    }
                                  ],
                                  "start": 18253,
                                  "end": 18324
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
                                        "start": 18346,
                                        "end": 18349
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18350,
                                        "end": 18358
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 18346,
                                      "end": 18358
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
                                        "start": 18362,
                                        "end": 18370
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "With",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 18371,
                                        "end": 18375
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 18362,
                                      "end": 18375
                                    },
                                    "start": 18346,
                                    "end": 18375
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
                                            "start": 18395,
                                            "end": 18414
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ast",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18415,
                                              "end": 18418
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18420,
                                              "end": 18427
                                            }
                                          ],
                                          "optional": false,
                                          "start": 18395,
                                          "end": 18428
                                        },
                                        "directive": null,
                                        "start": 18395,
                                        "end": 18429
                                      }
                                    ],
                                    "start": 18377,
                                    "end": 18443
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
                                          "start": 18465,
                                          "end": 18468
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18469,
                                          "end": 18477
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 18465,
                                        "end": 18477
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
                                          "start": 18481,
                                          "end": 18489
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 18490,
                                          "end": 18498
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 18481,
                                        "end": 18498
                                      },
                                      "start": 18465,
                                      "end": 18498
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
                                              "start": 18518,
                                              "end": 18541
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 18542,
                                                "end": 18545
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 18547,
                                                "end": 18554
                                              }
                                            ],
                                            "optional": false,
                                            "start": 18518,
                                            "end": 18555
                                          },
                                          "directive": null,
                                          "start": 18518,
                                          "end": 18556
                                        }
                                      ],
                                      "start": 18500,
                                      "end": 18570
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
                                            "start": 18592,
                                            "end": 18595
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18596,
                                            "end": 18604
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 18592,
                                          "end": 18604
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
                                            "start": 18608,
                                            "end": 18616
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Catch",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 18617,
                                            "end": 18622
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 18608,
                                          "end": 18622
                                        },
                                        "start": 18592,
                                        "end": 18622
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
                                                "start": 18642,
                                                "end": 18662
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 18663,
                                                  "end": 18666
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 18668,
                                                  "end": 18675
                                                }
                                              ],
                                              "optional": false,
                                              "start": 18642,
                                              "end": 18676
                                            },
                                            "directive": null,
                                            "start": 18642,
                                            "end": 18677
                                          }
                                        ],
                                        "start": 18624,
                                        "end": 18691
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
                                              "start": 18713,
                                              "end": 18716
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "nodeType",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18717,
                                              "end": 18725
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 18713,
                                            "end": 18725
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
                                              "start": 18729,
                                              "end": 18737
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TypeRef",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 18738,
                                              "end": 18745
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 18729,
                                            "end": 18745
                                          },
                                          "start": 18713,
                                          "end": 18745
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
                                                  "start": 18765,
                                                  "end": 18767
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": false,
                                                  "raw": "false",
                                                  "start": 18770,
                                                  "end": 18775
                                                },
                                                "start": 18765,
                                                "end": 18775
                                              },
                                              "directive": null,
                                              "start": 18765,
                                              "end": 18776
                                            }
                                          ],
                                          "start": 18747,
                                          "end": 18790
                                        },
                                        "alternate": null,
                                        "start": 18709,
                                        "end": 18790
                                      },
                                      "start": 18588,
                                      "end": 18790
                                    },
                                    "start": 18461,
                                    "end": 18790
                                  },
                                  "start": 18342,
                                  "end": 18790
                                },
                                "start": 18202,
                                "end": 18790
                              },
                              "start": 18070,
                              "end": 18790
                            },
                            "start": 17936,
                            "end": 18790
                          },
                          "start": 17763,
                          "end": 18790
                        }
                      ],
                      "start": 17749,
                      "end": 18800
                    },
                    "alternate": null,
                    "start": 17740,
                    "end": 18800
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
                            "start": 18809,
                            "end": 18815
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18816,
                            "end": 18823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 18809,
                          "end": 18823
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 18824,
                          "end": 18834
                        },
                        "optional": false,
                        "computed": false,
                        "start": 18809,
                        "end": 18834
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 18837,
                        "end": 18839
                      },
                      "start": 18809,
                      "end": 18839
                    },
                    "directive": null,
                    "start": 18809,
                    "end": 18840
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18856,
                      "end": 18859
                    },
                    "start": 18849,
                    "end": 18860
                  }
                ],
                "start": 17651,
                "end": 18866
              },
              "expression": false,
              "start": 17583,
              "end": 18866
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17576,
            "end": 18866
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
                "start": 18888,
                "end": 18904
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
                        "start": 18910,
                        "end": 18913
                      },
                      "typeArguments": null,
                      "start": 18910,
                      "end": 18913
                    },
                    "start": 18908,
                    "end": 18913
                  },
                  "start": 18905,
                  "end": 18913
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
                        "start": 18923,
                        "end": 18926
                      },
                      "typeArguments": null,
                      "start": 18923,
                      "end": 18926
                    },
                    "start": 18921,
                    "end": 18926
                  },
                  "start": 18915,
                  "end": 18926
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
                        "start": 18936,
                        "end": 18946
                      },
                      "typeArguments": null,
                      "start": 18936,
                      "end": 18946
                    },
                    "start": 18934,
                    "end": 18946
                  },
                  "start": 18928,
                  "end": 18946
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
                                "start": 18970,
                                "end": 18988
                              },
                              "typeArguments": null,
                              "start": 18970,
                              "end": 18988
                            },
                            "start": 18969,
                            "end": 18988
                          },
                          "start": 18962,
                          "end": 18988
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18991,
                            "end": 18997
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 18998,
                            "end": 19003
                          },
                          "optional": false,
                          "computed": false,
                          "start": 18991,
                          "end": 19003
                        },
                        "definite": false,
                        "start": 18962,
                        "end": 19003
                      }
                    ],
                    "declare": false,
                    "start": 18958,
                    "end": 19004
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
                          "start": 19017,
                          "end": 19019
                        },
                        "init": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 19022,
                          "end": 19026
                        },
                        "definite": false,
                        "start": 19017,
                        "end": 19026
                      }
                    ],
                    "declare": false,
                    "start": 19013,
                    "end": 19027
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19040,
                      "end": 19043
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
                                "start": 19063,
                                "end": 19066
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19067,
                                "end": 19075
                              },
                              "optional": false,
                              "computed": false,
                              "start": 19063,
                              "end": 19075
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
                                "start": 19079,
                                "end": 19087
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ModuleDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 19088,
                                "end": 19105
                              },
                              "optional": false,
                              "computed": false,
                              "start": 19079,
                              "end": 19105
                            },
                            "start": 19063,
                            "end": 19105
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
                                      "start": 19129,
                                      "end": 19140
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
                                          "start": 19144,
                                          "end": 19161
                                        },
                                        "typeArguments": null,
                                        "start": 19144,
                                        "end": 19161
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19162,
                                        "end": 19165
                                      },
                                      "start": 19143,
                                      "end": 19165
                                    },
                                    "definite": false,
                                    "start": 19129,
                                    "end": 19165
                                  }
                                ],
                                "declare": false,
                                "start": 19125,
                                "end": 19166
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
                                    "start": 19184,
                                    "end": 19198
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19199,
                                      "end": 19206
                                    }
                                  ],
                                  "optional": false,
                                  "start": 19184,
                                  "end": 19207
                                },
                                "directive": null,
                                "start": 19184,
                                "end": 19208
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
                                        "start": 19226,
                                        "end": 19233
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19234,
                                        "end": 19246
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19226,
                                      "end": 19246
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "pop",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19247,
                                      "end": 19250
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19226,
                                    "end": 19250
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 19226,
                                  "end": 19252
                                },
                                "directive": null,
                                "start": 19226,
                                "end": 19253
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
                                        "start": 19274,
                                        "end": 19281
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19282,
                                        "end": 19294
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19274,
                                      "end": 19294
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19295,
                                      "end": 19301
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19274,
                                    "end": 19301
                                  },
                                  "operator": ">=",
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 19305,
                                    "end": 19306
                                  },
                                  "start": 19274,
                                  "end": 19306
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
                                                "start": 19330,
                                                "end": 19337
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19338,
                                                "end": 19346
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 19330,
                                              "end": 19346
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19347,
                                              "end": 19354
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 19330,
                                            "end": 19354
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "currentModDecl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 19355,
                                            "end": 19369
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 19330,
                                          "end": 19369
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
                                              "start": 19372,
                                              "end": 19379
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "modDeclChain",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 19380,
                                              "end": 19392
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 19372,
                                            "end": 19392
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
                                                  "start": 19393,
                                                  "end": 19400
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "modDeclChain",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19401,
                                                  "end": 19413
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 19393,
                                                "end": 19413
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "length",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19414,
                                                "end": 19420
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 19393,
                                              "end": 19420
                                            },
                                            "operator": "-",
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 19423,
                                              "end": 19424
                                            },
                                            "start": 19393,
                                            "end": 19424
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 19372,
                                          "end": 19425
                                        },
                                        "start": 19330,
                                        "end": 19425
                                      },
                                      "directive": null,
                                      "start": 19330,
                                      "end": 19426
                                    }
                                  ],
                                  "start": 19308,
                                  "end": 19444
                                },
                                "alternate": null,
                                "start": 19270,
                                "end": 19444
                              }
                            ],
                            "start": 19107,
                            "end": 19458
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
                                  "start": 19480,
                                  "end": 19483
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19484,
                                  "end": 19492
                                },
                                "optional": false,
                                "computed": false,
                                "start": 19480,
                                "end": 19492
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
                                  "start": 19496,
                                  "end": 19504
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClassDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 19505,
                                  "end": 19521
                                },
                                "optional": false,
                                "computed": false,
                                "start": 19496,
                                "end": 19521
                              },
                              "start": 19480,
                              "end": 19521
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
                                      "start": 19541,
                                      "end": 19555
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19556,
                                        "end": 19563
                                      }
                                    ],
                                    "optional": false,
                                    "start": 19541,
                                    "end": 19564
                                  },
                                  "directive": null,
                                  "start": 19541,
                                  "end": 19565
                                }
                              ],
                              "start": 19523,
                              "end": 19579
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
                                    "start": 19601,
                                    "end": 19604
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19605,
                                    "end": 19613
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 19601,
                                  "end": 19613
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
                                    "start": 19617,
                                    "end": 19625
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "InterfaceDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 19626,
                                    "end": 19646
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 19617,
                                  "end": 19646
                                },
                                "start": 19601,
                                "end": 19646
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
                                        "start": 19666,
                                        "end": 19680
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 19681,
                                          "end": 19688
                                        }
                                      ],
                                      "optional": false,
                                      "start": 19666,
                                      "end": 19689
                                    },
                                    "directive": null,
                                    "start": 19666,
                                    "end": 19690
                                  }
                                ],
                                "start": 19648,
                                "end": 19704
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
                                      "start": 19726,
                                      "end": 19729
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19730,
                                      "end": 19738
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19726,
                                    "end": 19738
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
                                      "start": 19742,
                                      "end": 19750
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "With",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 19751,
                                      "end": 19755
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 19742,
                                    "end": 19755
                                  },
                                  "start": 19726,
                                  "end": 19755
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
                                          "start": 19775,
                                          "end": 19789
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 19790,
                                            "end": 19797
                                          }
                                        ],
                                        "optional": false,
                                        "start": 19775,
                                        "end": 19798
                                      },
                                      "directive": null,
                                      "start": 19775,
                                      "end": 19799
                                    }
                                  ],
                                  "start": 19757,
                                  "end": 19813
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
                                        "start": 19835,
                                        "end": 19838
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19839,
                                        "end": 19847
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19835,
                                      "end": 19847
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
                                        "start": 19851,
                                        "end": 19859
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 19860,
                                        "end": 19868
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 19851,
                                      "end": 19868
                                    },
                                    "start": 19835,
                                    "end": 19868
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
                                              "start": 19892,
                                              "end": 19900
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
                                                  "start": 19904,
                                                  "end": 19912
                                                },
                                                "typeArguments": null,
                                                "start": 19904,
                                                "end": 19912
                                              },
                                              "expression": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 19913,
                                                "end": 19916
                                              },
                                              "start": 19903,
                                              "end": 19916
                                            },
                                            "definite": false,
                                            "start": 19892,
                                            "end": 19916
                                          }
                                        ],
                                        "declare": false,
                                        "start": 19888,
                                        "end": 19917
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
                                                  "start": 19940,
                                                  "end": 19948
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isConstructor",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 19949,
                                                  "end": 19962
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 19940,
                                                "end": 19962
                                              },
                                              "prefix": true,
                                              "start": 19939,
                                              "end": 19962
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
                                                "start": 19966,
                                                "end": 19973
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
                                                    "start": 19974,
                                                    "end": 19982
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "fncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 19983,
                                                    "end": 19991
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 19974,
                                                  "end": 19991
                                                },
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "FncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 19993,
                                                    "end": 20001
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "ClassMethod",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20002,
                                                    "end": 20013
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 19993,
                                                  "end": 20013
                                                }
                                              ],
                                              "optional": false,
                                              "start": 19966,
                                              "end": 20014
                                            },
                                            "start": 19939,
                                            "end": 20014
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
                                                "start": 20020,
                                                "end": 20028
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isOverload",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 20029,
                                                "end": 20039
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 20020,
                                              "end": 20039
                                            },
                                            "prefix": true,
                                            "start": 20019,
                                            "end": 20039
                                          },
                                          "start": 19938,
                                          "end": 20039
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
                                                  "start": 20063,
                                                  "end": 20077
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "context",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 20078,
                                                    "end": 20085
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 20063,
                                                "end": 20086
                                              },
                                              "directive": null,
                                              "start": 20063,
                                              "end": 20087
                                            }
                                          ],
                                          "start": 20041,
                                          "end": 20105
                                        },
                                        "alternate": null,
                                        "start": 19934,
                                        "end": 20105
                                      }
                                    ],
                                    "start": 19870,
                                    "end": 20119
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
                                          "start": 20141,
                                          "end": 20144
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20145,
                                          "end": 20153
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 20141,
                                        "end": 20153
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
                                          "start": 20157,
                                          "end": 20165
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Catch",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 20166,
                                          "end": 20171
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 20157,
                                        "end": 20171
                                      },
                                      "start": 20141,
                                      "end": 20171
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
                                                "start": 20195,
                                                "end": 20205
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
                                                    "start": 20209,
                                                    "end": 20214
                                                  },
                                                  "typeArguments": null,
                                                  "start": 20209,
                                                  "end": 20214
                                                },
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 20215,
                                                  "end": 20218
                                                },
                                                "start": 20208,
                                                "end": 20218
                                              },
                                              "definite": false,
                                              "start": 20195,
                                              "end": 20218
                                            }
                                          ],
                                          "declare": false,
                                          "start": 20191,
                                          "end": 20219
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
                                              "start": 20240,
                                              "end": 20250
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "param",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 20251,
                                              "end": 20256
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 20240,
                                            "end": 20256
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
                                                    "start": 20280,
                                                    "end": 20294
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "context",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 20295,
                                                      "end": 20302
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 20280,
                                                  "end": 20303
                                                },
                                                "directive": null,
                                                "start": 20280,
                                                "end": 20304
                                              }
                                            ],
                                            "start": 20258,
                                            "end": 20322
                                          },
                                          "alternate": null,
                                          "start": 20236,
                                          "end": 20322
                                        }
                                      ],
                                      "start": 20173,
                                      "end": 20336
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
                                              "start": 20372,
                                              "end": 20374
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false",
                                              "start": 20377,
                                              "end": 20382
                                            },
                                            "start": 20372,
                                            "end": 20382
                                          },
                                          "directive": null,
                                          "start": 20372,
                                          "end": 20383
                                        }
                                      ],
                                      "start": 20354,
                                      "end": 20397
                                    },
                                    "start": 20137,
                                    "end": 20397
                                  },
                                  "start": 19831,
                                  "end": 20397
                                },
                                "start": 19722,
                                "end": 20397
                              },
                              "start": 19597,
                              "end": 20397
                            },
                            "start": 19476,
                            "end": 20397
                          },
                          "start": 19059,
                          "end": 20397
                        }
                      ],
                      "start": 19045,
                      "end": 20407
                    },
                    "alternate": null,
                    "start": 19036,
                    "end": 20407
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
                            "start": 20416,
                            "end": 20422
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 20423,
                            "end": 20430
                          },
                          "optional": false,
                          "computed": false,
                          "start": 20416,
                          "end": 20430
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20431,
                          "end": 20441
                        },
                        "optional": false,
                        "computed": false,
                        "start": 20416,
                        "end": 20441
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 20444,
                        "end": 20446
                      },
                      "start": 20416,
                      "end": 20446
                    },
                    "directive": null,
                    "start": 20416,
                    "end": 20447
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20463,
                      "end": 20466
                    },
                    "start": 20456,
                    "end": 20467
                  }
                ],
                "start": 18948,
                "end": 20473
              },
              "expression": false,
              "start": 18879,
              "end": 20473
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18872,
            "end": 20473
          }
        ],
        "start": 229,
        "end": 20475
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 20475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 20475
}
```
