__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 211,
  "end": 20475,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 20475,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 20475,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 236,
            "end": 450,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 243,
              "end": 450,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 249,
                "end": 267,
                "decorators": [],
                "name": "AssignScopeContext",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 268,
                "end": 450,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 278,
                    "end": 444,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 289,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 290,
                      "end": 444,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 291,
                          "end": 320,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 298,
                            "end": 320,
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 308,
                              "end": 320,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 310,
                                "end": 320,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 310,
                                  "end": 320,
                                  "decorators": [],
                                  "name": "ScopeChain",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 343,
                          "end": 368,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 368,
                            "decorators": [],
                            "name": "typeFlow",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 358,
                              "end": 368,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 360,
                                "end": 368,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 360,
                                  "end": 368,
                                  "decorators": [],
                                  "name": "TypeFlow",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 391,
                          "end": 431,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 398,
                            "end": 431,
                            "decorators": [],
                            "name": "modDeclChain",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 410,
                              "end": 431,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 412,
                                "end": 431,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 412,
                                  "end": 429,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 412,
                                    "end": 429,
                                    "decorators": [],
                                    "name": "ModuleDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 433,
                        "end": 444,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 456,
            "end": 819,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 463,
              "end": 819,
              "id": {
                "type": "Identifier",
                "start": 472,
                "end": 487,
                "decorators": [],
                "name": "pushAssignScope",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 488,
                  "end": 506,
                  "decorators": [],
                  "name": "scope",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 506,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 495,
                      "end": 506,
                      "typeName": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 506,
                        "decorators": [],
                        "name": "SymbolScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 543,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 523,
                    "end": 543,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 525,
                      "end": 543,
                      "typeName": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 543,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 553,
                  "end": 563,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 559,
                      "end": 563,
                      "typeName": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 563,
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 573,
                  "end": 588,
                  "decorators": [],
                  "name": "classType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 582,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 584,
                      "end": 588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 588,
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 598,
                  "end": 611,
                  "decorators": [],
                  "name": "fnc",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 603,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 611,
                        "decorators": [],
                        "name": "FuncDecl",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 613,
                "end": 819,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 624,
                    "end": 684,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 628,
                        "end": 683,
                        "id": {
                          "type": "Identifier",
                          "start": 628,
                          "end": 633,
                          "decorators": [],
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 636,
                          "end": 683,
                          "callee": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 650,
                            "decorators": [],
                            "name": "ScopeChain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 651,
                              "end": 655,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "MemberExpression",
                              "start": 657,
                              "end": 675,
                              "object": {
                                "type": "Identifier",
                                "start": 657,
                                "end": 664,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 665,
                                "end": 675,
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "Identifier",
                              "start": 677,
                              "end": 682,
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 693,
                    "end": 715,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 693,
                      "end": 714,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 693,
                        "end": 707,
                        "object": {
                          "type": "Identifier",
                          "start": 693,
                          "end": 698,
                          "decorators": [],
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 699,
                          "end": 707,
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 714,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 724,
                    "end": 752,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 724,
                      "end": 751,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 739,
                        "object": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 729,
                          "decorators": [],
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 730,
                          "end": 739,
                          "decorators": [],
                          "name": "classType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 742,
                        "end": 751,
                        "decorators": [],
                        "name": "classType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 761,
                    "end": 777,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 761,
                      "end": 776,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 761,
                        "end": 770,
                        "object": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 766,
                          "decorators": [],
                          "name": "chain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 770,
                          "decorators": [],
                          "name": "fnc",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 773,
                        "end": 776,
                        "decorators": [],
                        "name": "fnc",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 786,
                    "end": 813,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 786,
                      "end": 812,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 786,
                        "end": 804,
                        "object": {
                          "type": "Identifier",
                          "start": 786,
                          "end": 793,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 794,
                          "end": 804,
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 807,
                        "end": 812,
                        "decorators": [],
                        "name": "chain",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 825,
            "end": 950,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 832,
              "end": 950,
              "id": {
                "type": "Identifier",
                "start": 841,
                "end": 855,
                "decorators": [],
                "name": "popAssignScope",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 856,
                  "end": 883,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 863,
                    "end": 883,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 865,
                      "end": 883,
                      "typeName": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 883,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 885,
                "end": 950,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 895,
                    "end": 944,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 895,
                      "end": 943,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 895,
                        "end": 913,
                        "object": {
                          "type": "Identifier",
                          "start": 895,
                          "end": 902,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 913,
                          "decorators": [],
                          "name": "scopeChain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 916,
                        "end": 943,
                        "object": {
                          "type": "MemberExpression",
                          "start": 916,
                          "end": 934,
                          "object": {
                            "type": "Identifier",
                            "start": 916,
                            "end": 923,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 924,
                            "end": 934,
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 935,
                          "end": 943,
                          "decorators": [],
                          "name": "previous",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 956,
            "end": 1154,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 963,
              "end": 1154,
              "id": {
                "type": "Identifier",
                "start": 972,
                "end": 987,
                "decorators": [],
                "name": "instanceCompare",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 988,
                  "end": 997,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 989,
                    "end": 997,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 997,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 997,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1008,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1000,
                    "end": 1008,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1002,
                      "end": 1008,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1002,
                        "end": 1008,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1010,
                "end": 1154,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1020,
                    "end": 1148,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 1025,
                      "end": 1065,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1026,
                        "end": 1035,
                        "left": {
                          "type": "Identifier",
                          "start": 1026,
                          "end": 1027,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "start": 1031,
                          "end": 1035,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "UnaryExpression",
                        "start": 1041,
                        "end": 1064,
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "start": 1042,
                          "end": 1064,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1042,
                            "end": 1062,
                            "object": {
                              "type": "Identifier",
                              "start": 1042,
                              "end": 1043,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1044,
                              "end": 1062,
                              "decorators": [],
                              "name": "isInstanceProperty",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "prefix": true
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1068,
                      "end": 1101,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1082,
                          "end": 1091,
                          "argument": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1090,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1115,
                      "end": 1148,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1129,
                          "end": 1138,
                          "argument": {
                            "type": "Identifier",
                            "start": 1136,
                            "end": 1137,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1160,
            "end": 1252,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1167,
              "end": 1252,
              "id": {
                "type": "Identifier",
                "start": 1176,
                "end": 1194,
                "decorators": [],
                "name": "instanceFilterStop",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1204,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1196,
                    "end": 1204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1198,
                      "end": 1204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1198,
                        "end": 1204,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1206,
                "end": 1252,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1216,
                    "end": 1246,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1223,
                      "end": 1245,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1223,
                        "end": 1243,
                        "object": {
                          "type": "Identifier",
                          "start": 1223,
                          "end": 1224,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1225,
                          "end": 1243,
                          "decorators": [],
                          "name": "isInstanceProperty",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1258,
            "end": 1806,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1265,
              "end": 1806,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1271,
                "end": 1288,
                "decorators": [],
                "name": "ScopeSearchFilter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1289,
                "end": 1806,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1300,
                    "end": 1428,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1311,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1312,
                      "end": 1428,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1313,
                          "end": 1359,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1359,
                            "decorators": [],
                            "name": "select",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1326,
                              "end": 1359,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 1328,
                                "end": 1359,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1329,
                                    "end": 1338,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1330,
                                      "end": 1338,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1332,
                                        "end": 1338,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1332,
                                          "end": 1338,
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 1340,
                                    "end": 1349,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1341,
                                      "end": 1349,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1343,
                                        "end": 1349,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1343,
                                          "end": 1349,
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1351,
                                  "end": 1359,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1353,
                                    "end": 1359,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1353,
                                      "end": 1359,
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 1389,
                          "end": 1423,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1396,
                            "end": 1423,
                            "decorators": [],
                            "name": "stop",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1400,
                              "end": 1423,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 1402,
                                "end": 1423,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1403,
                                    "end": 1412,
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1404,
                                      "end": 1412,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1406,
                                        "end": 1412,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1406,
                                          "end": 1412,
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1414,
                                  "end": 1423,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1416,
                                    "end": 1423
                                  }
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1425,
                        "end": 1428,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1438,
                    "end": 1467,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1445,
                      "end": 1451,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1451,
                      "end": 1459,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1453,
                        "end": 1459,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1459,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1462,
                      "end": 1466,
                      "value": null,
                      "raw": "null"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1477,
                    "end": 1535,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1489,
                      "decorators": [],
                      "name": "reset",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1489,
                      "end": 1535,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1492,
                        "end": 1535,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1506,
                            "end": 1525,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1506,
                              "end": 1524,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1506,
                                "end": 1517,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1506,
                                  "end": 1510
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1511,
                                  "end": 1517,
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1520,
                                "end": 1524,
                                "value": null,
                                "raw": "null"
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1545,
                    "end": 1800,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1552,
                      "end": 1558,
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1558,
                      "end": 1800,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1559,
                          "end": 1568,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1560,
                            "end": 1568,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1562,
                              "end": 1568,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1562,
                                "end": 1568,
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1569,
                        "end": 1578,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1571,
                          "end": 1578
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1579,
                        "end": 1800,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1593,
                            "end": 1635,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1593,
                              "end": 1634,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1593,
                                "end": 1604,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1593,
                                  "end": 1597
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1598,
                                  "end": 1604,
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 1607,
                                "end": 1634,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1607,
                                  "end": 1618,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1607,
                                    "end": 1611
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1612,
                                    "end": 1618,
                                    "decorators": [],
                                    "name": "select",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 1619,
                                    "end": 1630,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1619,
                                      "end": 1623
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1624,
                                      "end": 1630,
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 1632,
                                    "end": 1633,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1648,
                            "end": 1790,
                            "test": {
                              "type": "MemberExpression",
                              "start": 1652,
                              "end": 1663,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1652,
                                "end": 1656
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1657,
                                "end": 1663,
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1665,
                              "end": 1727,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1683,
                                  "end": 1713,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1690,
                                    "end": 1712,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1690,
                                      "end": 1699,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1690,
                                        "end": 1694
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1695,
                                        "end": 1699,
                                        "decorators": [],
                                        "name": "stop",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1700,
                                        "end": 1711,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1700,
                                          "end": 1704
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1705,
                                          "end": 1711,
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    ],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 1745,
                              "end": 1790,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1763,
                                  "end": 1776,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1770,
                                    "end": 1775,
                                    "value": false,
                                    "raw": "false"
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1812,
            "end": 1899,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1819,
              "end": 1899,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1823,
                  "end": 1898,
                  "id": {
                    "type": "Identifier",
                    "start": 1823,
                    "end": 1837,
                    "decorators": [],
                    "name": "instanceFilter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1840,
                    "end": 1898,
                    "callee": {
                      "type": "Identifier",
                      "start": 1844,
                      "end": 1861,
                      "decorators": [],
                      "name": "ScopeSearchFilter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1862,
                        "end": 1877,
                        "decorators": [],
                        "name": "instanceCompare",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1879,
                        "end": 1897,
                        "decorators": [],
                        "name": "instanceFilterStop",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1905,
            "end": 3111,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1912,
              "end": 3111,
              "id": {
                "type": "Identifier",
                "start": 1921,
                "end": 1942,
                "decorators": [],
                "name": "preAssignModuleScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1943,
                  "end": 1951,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1946,
                    "end": 1951,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1948,
                      "end": 1951,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1948,
                        "end": 1951,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1953,
                  "end": 1980,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1960,
                    "end": 1980,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1962,
                      "end": 1980,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1962,
                        "end": 1980,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1982,
                "end": 3111,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1992,
                    "end": 2032,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1996,
                        "end": 2031,
                        "id": {
                          "type": "Identifier",
                          "start": 1996,
                          "end": 2006,
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 2009,
                          "end": 2031,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2010,
                            "end": 2027,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2010,
                              "end": 2027,
                              "decorators": [],
                              "name": "ModuleDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 2028,
                            "end": 2031,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2041,
                    "end": 2082,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2045,
                        "end": 2081,
                        "id": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2074,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2056,
                            "end": 2074,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2058,
                              "end": 2074,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2058,
                                "end": 2074,
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 2077,
                          "end": 2081,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2091,
                    "end": 2133,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2095,
                        "end": 2132,
                        "id": {
                          "type": "Identifier",
                          "start": 2095,
                          "end": 2125,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2103,
                            "end": 2125,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2105,
                              "end": 2125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2105,
                                "end": 2125,
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 2128,
                          "end": 2132,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 2143,
                    "end": 2250,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 2147,
                      "end": 2180,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2147,
                        "end": 2162,
                        "object": {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2157,
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2158,
                          "end": 2162,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 2166,
                        "end": 2180,
                        "object": {
                          "type": "Identifier",
                          "start": 2166,
                          "end": 2176,
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2177,
                          "end": 2180,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2182,
                      "end": 2250,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2196,
                          "end": 2240,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2196,
                            "end": 2239,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2196,
                              "end": 2215,
                              "object": {
                                "type": "MemberExpression",
                                "start": 2196,
                                "end": 2211,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2196,
                                  "end": 2206,
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2207,
                                  "end": 2211,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2212,
                                "end": 2215,
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 2218,
                              "end": 2239,
                              "object": {
                                "type": "MemberExpression",
                                "start": 2218,
                                "end": 2232,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2218,
                                  "end": 2228,
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2229,
                                  "end": 2232,
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2233,
                                "end": 2239,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2260,
                    "end": 2285,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2264,
                        "end": 2284,
                        "id": {
                          "type": "Identifier",
                          "start": 2264,
                          "end": 2267,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2270,
                          "end": 2284,
                          "object": {
                            "type": "Identifier",
                            "start": 2270,
                            "end": 2280,
                            "decorators": [],
                            "name": "moduleDecl",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2281,
                            "end": 2284,
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 2350,
                    "end": 2391,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 2354,
                      "end": 2358,
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "start": 2355,
                        "end": 2358,
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2360,
                      "end": 2391,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2374,
                          "end": 2381,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2401,
                    "end": 2526,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2401,
                      "end": 2525,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2401,
                        "end": 2412,
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 2415,
                        "end": 2525,
                        "callee": {
                          "type": "Identifier",
                          "start": 2419,
                          "end": 2435,
                          "decorators": [],
                          "name": "SymbolTableScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 2436,
                            "end": 2447,
                            "object": {
                              "type": "Identifier",
                              "start": 2436,
                              "end": 2439,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2440,
                              "end": 2447,
                              "decorators": [],
                              "name": "members",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 2449,
                            "end": 2467,
                            "object": {
                              "type": "Identifier",
                              "start": 2449,
                              "end": 2452,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2453,
                              "end": 2467,
                              "decorators": [],
                              "name": "ambientMembers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 2469,
                            "end": 2486,
                            "object": {
                              "type": "Identifier",
                              "start": 2469,
                              "end": 2472,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2473,
                              "end": 2486,
                              "decorators": [],
                              "name": "enclosedTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 2488,
                            "end": 2512,
                            "object": {
                              "type": "Identifier",
                              "start": 2488,
                              "end": 2491,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2492,
                              "end": 2512,
                              "decorators": [],
                              "name": "ambientEnclosedTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 2514,
                            "end": 2524,
                            "object": {
                              "type": "Identifier",
                              "start": 2514,
                              "end": 2517,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2518,
                              "end": 2524,
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2535,
                    "end": 2565,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2535,
                      "end": 2564,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2535,
                        "end": 2550,
                        "object": {
                          "type": "Identifier",
                          "start": 2535,
                          "end": 2538,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2539,
                          "end": 2550,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2553,
                        "end": 2564,
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2574,
                    "end": 2612,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2574,
                      "end": 2611,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2574,
                        "end": 2599,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2574,
                          "end": 2594,
                          "object": {
                            "type": "Identifier",
                            "start": 2574,
                            "end": 2581,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2582,
                            "end": 2594,
                            "decorators": [],
                            "name": "modDeclChain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2595,
                          "end": 2599,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2600,
                          "end": 2610,
                          "decorators": [],
                          "name": "moduleDecl",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2621,
                    "end": 2674,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2621,
                      "end": 2673,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2621,
                        "end": 2660,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2621,
                          "end": 2645,
                          "object": {
                            "type": "MemberExpression",
                            "start": 2621,
                            "end": 2637,
                            "object": {
                              "type": "Identifier",
                              "start": 2621,
                              "end": 2628,
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2629,
                              "end": 2637,
                              "decorators": [],
                              "name": "typeFlow",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2638,
                            "end": 2645,
                            "decorators": [],
                            "name": "checker",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2646,
                          "end": 2660,
                          "decorators": [],
                          "name": "currentModDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2663,
                        "end": 2673,
                        "decorators": [],
                        "name": "moduleDecl",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2683,
                    "end": 2731,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2683,
                      "end": 2730,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2683,
                        "end": 2691,
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 2694,
                        "end": 2730,
                        "callee": {
                          "type": "Identifier",
                          "start": 2698,
                          "end": 2718,
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 2719,
                            "end": 2729,
                            "object": {
                              "type": "Identifier",
                              "start": 2719,
                              "end": 2722,
                              "decorators": [],
                              "name": "mod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2723,
                              "end": 2729,
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2740,
                    "end": 2777,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2740,
                      "end": 2776,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2740,
                        "end": 2763,
                        "object": {
                          "type": "Identifier",
                          "start": 2740,
                          "end": 2748,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2749,
                          "end": 2763,
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2764,
                          "end": 2775,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2786,
                    "end": 2836,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2786,
                      "end": 2835,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2786,
                        "end": 2809,
                        "object": {
                          "type": "Identifier",
                          "start": 2786,
                          "end": 2794,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2795,
                          "end": 2809,
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2810,
                          "end": 2834,
                          "object": {
                            "type": "MemberExpression",
                            "start": 2810,
                            "end": 2828,
                            "object": {
                              "type": "Identifier",
                              "start": 2810,
                              "end": 2817,
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2818,
                              "end": 2828,
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2829,
                            "end": 2834,
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2845,
                    "end": 2898,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2845,
                      "end": 2897,
                      "callee": {
                        "type": "Identifier",
                        "start": 2845,
                        "end": 2860,
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2861,
                          "end": 2869,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 2871,
                          "end": 2878,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 2880,
                          "end": 2884,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 2886,
                          "end": 2890,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 2892,
                          "end": 2896,
                          "value": null,
                          "raw": "null"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2907,
                    "end": 2937,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2907,
                      "end": 2936,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2907,
                        "end": 2925,
                        "object": {
                          "type": "Identifier",
                          "start": 2907,
                          "end": 2910,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2911,
                          "end": 2925,
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2928,
                        "end": 2936,
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 2946,
                    "end": 3105,
                    "test": {
                      "type": "MemberExpression",
                      "start": 2950,
                      "end": 2960,
                      "object": {
                        "type": "Identifier",
                        "start": 2950,
                        "end": 2953,
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2954,
                        "end": 2960,
                        "decorators": [],
                        "name": "symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2962,
                      "end": 3105,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2976,
                          "end": 3095,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2976,
                            "end": 3094,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2976,
                              "end": 3011,
                              "object": {
                                "type": "MemberExpression",
                                "start": 2976,
                                "end": 2992,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2976,
                                  "end": 2983,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2984,
                                  "end": 2992,
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2993,
                                "end": 3011,
                                "decorators": [],
                                "name": "addLocalsFromScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 3012,
                                "end": 3030,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3012,
                                  "end": 3015,
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3016,
                                  "end": 3030,
                                  "decorators": [],
                                  "name": "containedScope",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 3032,
                                "end": 3042,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3032,
                                  "end": 3035,
                                  "decorators": [],
                                  "name": "mod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3036,
                                  "end": 3042,
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 3044,
                                "end": 3059,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3044,
                                  "end": 3054,
                                  "decorators": [],
                                  "name": "moduleDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3055,
                                  "end": 3059,
                                  "decorators": [],
                                  "name": "vars",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 3061,
                                "end": 3087,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 3061,
                                  "end": 3072,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3061,
                                    "end": 3064,
                                    "decorators": [],
                                    "name": "mod",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3065,
                                    "end": 3072,
                                    "decorators": [],
                                    "name": "members",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3073,
                                  "end": 3087,
                                  "decorators": [],
                                  "name": "privateMembers",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "Literal",
                                "start": 3089,
                                "end": 3093,
                                "value": true,
                                "raw": "true"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3117,
            "end": 4492,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3124,
              "end": 4492,
              "id": {
                "type": "Identifier",
                "start": 3133,
                "end": 3153,
                "decorators": [],
                "name": "preAssignClassScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3154,
                  "end": 3162,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3157,
                    "end": 3162,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3159,
                      "end": 3162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3159,
                        "end": 3162,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3164,
                  "end": 3191,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3171,
                    "end": 3191,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3173,
                      "end": 3191,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3173,
                        "end": 3191,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3193,
                "end": 4492,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3203,
                    "end": 3245,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3207,
                        "end": 3244,
                        "id": {
                          "type": "Identifier",
                          "start": 3207,
                          "end": 3216,
                          "decorators": [],
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 3219,
                          "end": 3244,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3220,
                            "end": 3240,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3220,
                              "end": 3240,
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 3241,
                            "end": 3244,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3254,
                    "end": 3295,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3258,
                        "end": 3294,
                        "id": {
                          "type": "Identifier",
                          "start": 3258,
                          "end": 3287,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3269,
                            "end": 3287,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3271,
                              "end": 3287,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3271,
                                "end": 3287,
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 3290,
                          "end": 3294,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3304,
                    "end": 3346,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3308,
                        "end": 3345,
                        "id": {
                          "type": "Identifier",
                          "start": 3308,
                          "end": 3338,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3316,
                            "end": 3338,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3318,
                              "end": 3338,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3318,
                                "end": 3338,
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 3341,
                          "end": 3345,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 3356,
                    "end": 3461,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 3360,
                      "end": 3392,
                      "left": {
                        "type": "MemberExpression",
                        "start": 3360,
                        "end": 3374,
                        "object": {
                          "type": "Identifier",
                          "start": 3360,
                          "end": 3369,
                          "decorators": [],
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3370,
                          "end": 3374,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 3378,
                        "end": 3392,
                        "object": {
                          "type": "Identifier",
                          "start": 3378,
                          "end": 3387,
                          "decorators": [],
                          "name": "classDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3388,
                          "end": 3392,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 3394,
                      "end": 3461,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 3408,
                          "end": 3451,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 3408,
                            "end": 3450,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 3408,
                              "end": 3426,
                              "object": {
                                "type": "MemberExpression",
                                "start": 3408,
                                "end": 3422,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3408,
                                  "end": 3417,
                                  "decorators": [],
                                  "name": "classDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3418,
                                  "end": 3422,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3423,
                                "end": 3426,
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 3429,
                              "end": 3450,
                              "object": {
                                "type": "MemberExpression",
                                "start": 3429,
                                "end": 3443,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3429,
                                  "end": 3438,
                                  "decorators": [],
                                  "name": "classDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3439,
                                  "end": 3443,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3444,
                                "end": 3450,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3471,
                    "end": 3496,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3475,
                        "end": 3495,
                        "id": {
                          "type": "Identifier",
                          "start": 3475,
                          "end": 3484,
                          "decorators": [],
                          "name": "classType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 3487,
                          "end": 3495,
                          "object": {
                            "type": "Identifier",
                            "start": 3487,
                            "end": 3490,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3491,
                            "end": 3495,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 3506,
                    "end": 4486,
                    "test": {
                      "type": "Identifier",
                      "start": 3510,
                      "end": 3519,
                      "decorators": [],
                      "name": "classType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 3521,
                      "end": 4412,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 3535,
                          "end": 3567,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3539,
                              "end": 3566,
                              "id": {
                                "type": "Identifier",
                                "start": 3539,
                                "end": 3547,
                                "decorators": [],
                                "name": "classSym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 3550,
                                "end": 3566,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3550,
                                  "end": 3559,
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3560,
                                  "end": 3566,
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3580,
                          "end": 3656,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 3580,
                            "end": 3655,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 3580,
                              "end": 3591,
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "TSTypeAssertion",
                              "start": 3594,
                              "end": 3655,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3595,
                                "end": 3611,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3595,
                                  "end": 3611,
                                  "decorators": [],
                                  "name": "SymbolTableScope",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "expression": {
                                "type": "CallExpression",
                                "start": 3612,
                                "end": 3655,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3612,
                                  "end": 3644,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3612,
                                    "end": 3636,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 3612,
                                      "end": 3628,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3612,
                                        "end": 3619,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3620,
                                        "end": 3628,
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3629,
                                      "end": 3636,
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3637,
                                    "end": 3644,
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3645,
                                    "end": 3654,
                                    "decorators": [],
                                    "name": "classType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3670,
                          "end": 3724,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 3670,
                            "end": 3723,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 3670,
                              "end": 3678,
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 3681,
                              "end": 3723,
                              "callee": {
                                "type": "Identifier",
                                "start": 3685,
                                "end": 3705,
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3706,
                                  "end": 3722,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3706,
                                    "end": 3715,
                                    "decorators": [],
                                    "name": "classType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3716,
                                    "end": 3722,
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              ]
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3737,
                          "end": 3774,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3737,
                            "end": 3773,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3737,
                              "end": 3760,
                              "object": {
                                "type": "Identifier",
                                "start": 3737,
                                "end": 3745,
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3746,
                                "end": 3760,
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 3761,
                                "end": 3772,
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3787,
                          "end": 3837,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3787,
                            "end": 3836,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3787,
                              "end": 3810,
                              "object": {
                                "type": "Identifier",
                                "start": 3787,
                                "end": 3795,
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3796,
                                "end": 3810,
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 3811,
                                "end": 3835,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 3811,
                                  "end": 3829,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3811,
                                    "end": 3818,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3819,
                                    "end": 3829,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3830,
                                  "end": 3835,
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3851,
                          "end": 3887,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 3851,
                            "end": 3886,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 3851,
                              "end": 3875,
                              "object": {
                                "type": "Identifier",
                                "start": 3851,
                                "end": 3860,
                                "decorators": [],
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3861,
                                "end": 3875,
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3878,
                              "end": 3886,
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3900,
                          "end": 3936,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 3900,
                            "end": 3935,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 3900,
                              "end": 3921,
                              "object": {
                                "type": "Identifier",
                                "start": 3900,
                                "end": 3909,
                                "decorators": [],
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3910,
                                "end": 3921,
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3924,
                              "end": 3935,
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3950,
                          "end": 3992,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3954,
                              "end": 3991,
                              "id": {
                                "type": "Identifier",
                                "start": 3954,
                                "end": 3966,
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 3969,
                                "end": 3991,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3969,
                                  "end": 3978,
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3979,
                                  "end": 3991,
                                  "decorators": [],
                                  "name": "instanceType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4005,
                          "end": 4084,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4005,
                            "end": 4083,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 4005,
                              "end": 4016,
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "TSTypeAssertion",
                              "start": 4019,
                              "end": 4083,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4020,
                                "end": 4036,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4020,
                                  "end": 4036,
                                  "decorators": [],
                                  "name": "SymbolTableScope",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "expression": {
                                "type": "CallExpression",
                                "start": 4037,
                                "end": 4083,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 4037,
                                  "end": 4069,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 4037,
                                    "end": 4061,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 4037,
                                      "end": 4053,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 4037,
                                        "end": 4044,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 4045,
                                        "end": 4053,
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4054,
                                      "end": 4061,
                                      "decorators": [],
                                      "name": "checker",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4062,
                                    "end": 4069,
                                    "decorators": [],
                                    "name": "scopeOf",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 4070,
                                    "end": 4082,
                                    "decorators": [],
                                    "name": "instanceType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4097,
                          "end": 4136,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4097,
                            "end": 4135,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 4097,
                              "end": 4121,
                              "object": {
                                "type": "Identifier",
                                "start": 4097,
                                "end": 4109,
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4110,
                                "end": 4121,
                                "decorators": [],
                                "name": "memberScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4124,
                              "end": 4135,
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4150,
                          "end": 4207,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4150,
                            "end": 4206,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 4150,
                              "end": 4158,
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 4161,
                              "end": 4206,
                              "callee": {
                                "type": "Identifier",
                                "start": 4165,
                                "end": 4185,
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 4186,
                                  "end": 4205,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4186,
                                    "end": 4198,
                                    "decorators": [],
                                    "name": "instanceType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4199,
                                    "end": 4205,
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              ]
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4220,
                          "end": 4270,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4220,
                            "end": 4269,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4220,
                              "end": 4243,
                              "object": {
                                "type": "Identifier",
                                "start": 4220,
                                "end": 4228,
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4229,
                                "end": 4243,
                                "decorators": [],
                                "name": "addParentScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 4244,
                                "end": 4268,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4244,
                                  "end": 4262,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4244,
                                    "end": 4251,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4252,
                                    "end": 4262,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4263,
                                  "end": 4268,
                                  "decorators": [],
                                  "name": "scope",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4284,
                          "end": 4350,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4284,
                            "end": 4349,
                            "callee": {
                              "type": "Identifier",
                              "start": 4284,
                              "end": 4299,
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 4300,
                                "end": 4308,
                                "decorators": [],
                                "name": "aggScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 4310,
                                "end": 4317,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 4319,
                                "end": 4331,
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 4333,
                                "end": 4342,
                                "decorators": [],
                                "name": "classType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Literal",
                                "start": 4344,
                                "end": 4348,
                                "value": null,
                                "raw": "null"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4363,
                          "end": 4402,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4363,
                            "end": 4401,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 4363,
                              "end": 4390,
                              "object": {
                                "type": "Identifier",
                                "start": 4363,
                                "end": 4375,
                                "decorators": [],
                                "name": "instanceType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4376,
                                "end": 4390,
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4393,
                              "end": 4401,
                              "decorators": [],
                              "name": "aggScope",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 4426,
                      "end": 4486,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4440,
                          "end": 4476,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4440,
                            "end": 4475,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 4440,
                              "end": 4448,
                              "object": {
                                "type": "Identifier",
                                "start": 4440,
                                "end": 4443,
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4444,
                                "end": 4448,
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 4451,
                              "end": 4475,
                              "object": {
                                "type": "MemberExpression",
                                "start": 4451,
                                "end": 4467,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4451,
                                  "end": 4458,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4459,
                                  "end": 4467,
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4468,
                                "end": 4475,
                                "decorators": [],
                                "name": "anyType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4498,
            "end": 5332,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 4505,
              "end": 5332,
              "id": {
                "type": "Identifier",
                "start": 4514,
                "end": 4538,
                "decorators": [],
                "name": "preAssignInterfaceScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4539,
                  "end": 4547,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4542,
                    "end": 4547,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4544,
                      "end": 4547,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4544,
                        "end": 4547,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4549,
                  "end": 4576,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4556,
                    "end": 4576,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4558,
                      "end": 4576,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4558,
                        "end": 4576,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4578,
                "end": 5332,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 4588,
                    "end": 4634,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4592,
                        "end": 4633,
                        "id": {
                          "type": "Identifier",
                          "start": 4592,
                          "end": 4605,
                          "decorators": [],
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 4608,
                          "end": 4633,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4609,
                            "end": 4629,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4609,
                              "end": 4629,
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 4630,
                            "end": 4633,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4643,
                    "end": 4684,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4647,
                        "end": 4683,
                        "id": {
                          "type": "Identifier",
                          "start": 4647,
                          "end": 4676,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4658,
                            "end": 4676,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4660,
                              "end": 4676,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4660,
                                "end": 4676,
                                "decorators": [],
                                "name": "SymbolTableScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 4679,
                          "end": 4683,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4693,
                    "end": 4735,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4697,
                        "end": 4734,
                        "id": {
                          "type": "Identifier",
                          "start": 4697,
                          "end": 4727,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4705,
                            "end": 4727,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4707,
                              "end": 4727,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4707,
                                "end": 4727,
                                "decorators": [],
                                "name": "SymbolAggregateScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 4730,
                          "end": 4734,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 4745,
                    "end": 4866,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 4749,
                      "end": 4789,
                      "left": {
                        "type": "MemberExpression",
                        "start": 4749,
                        "end": 4767,
                        "object": {
                          "type": "Identifier",
                          "start": 4749,
                          "end": 4762,
                          "decorators": [],
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4763,
                          "end": 4767,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 4771,
                        "end": 4789,
                        "object": {
                          "type": "Identifier",
                          "start": 4771,
                          "end": 4784,
                          "decorators": [],
                          "name": "interfaceDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4785,
                          "end": 4789,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4791,
                      "end": 4866,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4805,
                          "end": 4856,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4805,
                            "end": 4855,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 4805,
                              "end": 4827,
                              "object": {
                                "type": "MemberExpression",
                                "start": 4805,
                                "end": 4823,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4805,
                                  "end": 4818,
                                  "decorators": [],
                                  "name": "interfaceDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4819,
                                  "end": 4823,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4824,
                                "end": 4827,
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 4830,
                              "end": 4855,
                              "object": {
                                "type": "MemberExpression",
                                "start": 4830,
                                "end": 4848,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4830,
                                  "end": 4843,
                                  "decorators": [],
                                  "name": "interfaceDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4844,
                                  "end": 4848,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4849,
                                "end": 4855,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4876,
                    "end": 4905,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4880,
                        "end": 4904,
                        "id": {
                          "type": "Identifier",
                          "start": 4880,
                          "end": 4893,
                          "decorators": [],
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 4896,
                          "end": 4904,
                          "object": {
                            "type": "Identifier",
                            "start": 4896,
                            "end": 4899,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4900,
                            "end": 4904,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4914,
                    "end": 4994,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4914,
                      "end": 4993,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 4914,
                        "end": 4925,
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 4928,
                        "end": 4993,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4929,
                          "end": 4945,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4929,
                            "end": 4945,
                            "decorators": [],
                            "name": "SymbolTableScope",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "expression": {
                          "type": "CallExpression",
                          "start": 4946,
                          "end": 4993,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 4946,
                            "end": 4978,
                            "object": {
                              "type": "MemberExpression",
                              "start": 4946,
                              "end": 4970,
                              "object": {
                                "type": "MemberExpression",
                                "start": 4946,
                                "end": 4962,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4946,
                                  "end": 4953,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4954,
                                  "end": 4962,
                                  "decorators": [],
                                  "name": "typeFlow",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4963,
                                "end": 4970,
                                "decorators": [],
                                "name": "checker",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 4971,
                              "end": 4978,
                              "decorators": [],
                              "name": "scopeOf",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 4979,
                              "end": 4992,
                              "decorators": [],
                              "name": "interfaceType",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5003,
                    "end": 5043,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5003,
                      "end": 5042,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5003,
                        "end": 5028,
                        "object": {
                          "type": "Identifier",
                          "start": 5003,
                          "end": 5016,
                          "decorators": [],
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5017,
                          "end": 5028,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5031,
                        "end": 5042,
                        "decorators": [],
                        "name": "memberScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5052,
                    "end": 5110,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5052,
                      "end": 5109,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 5052,
                        "end": 5060,
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 5063,
                        "end": 5109,
                        "callee": {
                          "type": "Identifier",
                          "start": 5067,
                          "end": 5087,
                          "decorators": [],
                          "name": "SymbolAggregateScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 5088,
                            "end": 5108,
                            "object": {
                              "type": "Identifier",
                              "start": 5088,
                              "end": 5101,
                              "decorators": [],
                              "name": "interfaceType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 5102,
                              "end": 5108,
                              "decorators": [],
                              "name": "symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5119,
                    "end": 5156,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5119,
                      "end": 5155,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5119,
                        "end": 5142,
                        "object": {
                          "type": "Identifier",
                          "start": 5119,
                          "end": 5127,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5128,
                          "end": 5142,
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5143,
                          "end": 5154,
                          "decorators": [],
                          "name": "memberScope",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5165,
                    "end": 5215,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5165,
                      "end": 5214,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5165,
                        "end": 5188,
                        "object": {
                          "type": "Identifier",
                          "start": 5165,
                          "end": 5173,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5174,
                          "end": 5188,
                          "decorators": [],
                          "name": "addParentScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 5189,
                          "end": 5213,
                          "object": {
                            "type": "MemberExpression",
                            "start": 5189,
                            "end": 5207,
                            "object": {
                              "type": "Identifier",
                              "start": 5189,
                              "end": 5196,
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 5197,
                              "end": 5207,
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5208,
                            "end": 5213,
                            "decorators": [],
                            "name": "scope",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5224,
                    "end": 5277,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5224,
                      "end": 5276,
                      "callee": {
                        "type": "Identifier",
                        "start": 5224,
                        "end": 5239,
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5240,
                          "end": 5248,
                          "decorators": [],
                          "name": "aggScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 5250,
                          "end": 5257,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 5259,
                          "end": 5263,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 5265,
                          "end": 5269,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 5271,
                          "end": 5275,
                          "value": null,
                          "raw": "null"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5286,
                    "end": 5326,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5286,
                      "end": 5325,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5286,
                        "end": 5314,
                        "object": {
                          "type": "Identifier",
                          "start": 5286,
                          "end": 5299,
                          "decorators": [],
                          "name": "interfaceType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5300,
                          "end": 5314,
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5317,
                        "end": 5325,
                        "decorators": [],
                        "name": "aggScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5338,
            "end": 6353,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 5345,
              "end": 6353,
              "id": {
                "type": "Identifier",
                "start": 5354,
                "end": 5373,
                "decorators": [],
                "name": "preAssignWithScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5374,
                  "end": 5382,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5377,
                    "end": 5382,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5379,
                      "end": 5382,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5379,
                        "end": 5382,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 5384,
                  "end": 5411,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5391,
                    "end": 5411,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5393,
                      "end": 5411,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5393,
                        "end": 5411,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5413,
                "end": 6353,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5423,
                    "end": 5457,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5427,
                        "end": 5456,
                        "id": {
                          "type": "Identifier",
                          "start": 5427,
                          "end": 5435,
                          "decorators": [],
                          "name": "withStmt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 5438,
                          "end": 5456,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5439,
                            "end": 5452,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5439,
                              "end": 5452,
                              "decorators": [],
                              "name": "WithStatement",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 5453,
                            "end": 5456,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5466,
                    "end": 5495,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5470,
                        "end": 5494,
                        "id": {
                          "type": "Identifier",
                          "start": 5470,
                          "end": 5478,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 5481,
                          "end": 5494,
                          "object": {
                            "type": "Identifier",
                            "start": 5481,
                            "end": 5489,
                            "decorators": [],
                            "name": "withStmt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5490,
                            "end": 5494,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5505,
                    "end": 5608,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5509,
                        "end": 5607,
                        "id": {
                          "type": "Identifier",
                          "start": 5509,
                          "end": 5516,
                          "decorators": [],
                          "name": "members",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 5519,
                          "end": 5607,
                          "callee": {
                            "type": "Identifier",
                            "start": 5523,
                            "end": 5536,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 5537,
                              "end": 5606,
                              "callee": {
                                "type": "Identifier",
                                "start": 5541,
                                "end": 5560,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "NewExpression",
                                  "start": 5561,
                                  "end": 5582,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5565,
                                    "end": 5580,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 5584,
                                  "end": 5605,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5588,
                                    "end": 5603,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5617,
                    "end": 5727,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5621,
                        "end": 5726,
                        "id": {
                          "type": "Identifier",
                          "start": 5621,
                          "end": 5635,
                          "decorators": [],
                          "name": "ambientMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 5638,
                          "end": 5726,
                          "callee": {
                            "type": "Identifier",
                            "start": 5642,
                            "end": 5655,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 5656,
                              "end": 5725,
                              "callee": {
                                "type": "Identifier",
                                "start": 5660,
                                "end": 5679,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "NewExpression",
                                  "start": 5680,
                                  "end": 5701,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5684,
                                    "end": 5699,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 5703,
                                  "end": 5724,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5707,
                                    "end": 5722,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5737,
                    "end": 5763,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5741,
                        "end": 5762,
                        "id": {
                          "type": "Identifier",
                          "start": 5741,
                          "end": 5749,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 5752,
                          "end": 5762,
                          "callee": {
                            "type": "Identifier",
                            "start": 5756,
                            "end": 5760,
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5772,
                    "end": 5881,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5776,
                        "end": 5880,
                        "id": {
                          "type": "Identifier",
                          "start": 5776,
                          "end": 5786,
                          "decorators": [],
                          "name": "withSymbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 5789,
                          "end": 5880,
                          "callee": {
                            "type": "Identifier",
                            "start": 5793,
                            "end": 5803,
                            "decorators": [],
                            "name": "WithSymbol",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 5804,
                              "end": 5820,
                              "object": {
                                "type": "Identifier",
                                "start": 5804,
                                "end": 5812,
                                "decorators": [],
                                "name": "withStmt",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5813,
                                "end": 5820,
                                "decorators": [],
                                "name": "minChar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 5822,
                              "end": 5869,
                              "object": {
                                "type": "MemberExpression",
                                "start": 5822,
                                "end": 5859,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 5822,
                                  "end": 5846,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 5822,
                                    "end": 5838,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 5822,
                                      "end": 5829,
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 5830,
                                      "end": 5838,
                                      "decorators": [],
                                      "name": "typeFlow",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 5839,
                                    "end": 5846,
                                    "decorators": [],
                                    "name": "checker",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 5847,
                                  "end": 5859,
                                  "decorators": [],
                                  "name": "locationInfo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5860,
                                "end": 5869,
                                "decorators": [],
                                "name": "unitIndex",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "Identifier",
                              "start": 5871,
                              "end": 5879,
                              "decorators": [],
                              "name": "withType",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5890,
                    "end": 5917,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5890,
                      "end": 5916,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5890,
                        "end": 5906,
                        "object": {
                          "type": "Identifier",
                          "start": 5890,
                          "end": 5898,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5899,
                          "end": 5906,
                          "decorators": [],
                          "name": "members",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5909,
                        "end": 5916,
                        "decorators": [],
                        "name": "members",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5926,
                    "end": 5967,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5926,
                      "end": 5966,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5926,
                        "end": 5949,
                        "object": {
                          "type": "Identifier",
                          "start": 5926,
                          "end": 5934,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5935,
                          "end": 5949,
                          "decorators": [],
                          "name": "ambientMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5952,
                        "end": 5966,
                        "decorators": [],
                        "name": "ambientMembers",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5976,
                    "end": 6005,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5976,
                      "end": 6004,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5976,
                        "end": 5991,
                        "object": {
                          "type": "Identifier",
                          "start": 5976,
                          "end": 5984,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5985,
                          "end": 5991,
                          "decorators": [],
                          "name": "symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5994,
                        "end": 6004,
                        "decorators": [],
                        "name": "withSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6014,
                    "end": 6046,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6014,
                      "end": 6045,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 6014,
                        "end": 6043,
                        "object": {
                          "type": "Identifier",
                          "start": 6014,
                          "end": 6022,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6023,
                          "end": 6043,
                          "decorators": [],
                          "name": "setHasImplementation",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6055,
                    "end": 6080,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 6055,
                      "end": 6079,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 6055,
                        "end": 6068,
                        "object": {
                          "type": "Identifier",
                          "start": 6055,
                          "end": 6063,
                          "decorators": [],
                          "name": "withStmt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6064,
                          "end": 6068,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 6071,
                        "end": 6079,
                        "decorators": [],
                        "name": "withType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6090,
                    "end": 6238,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6094,
                        "end": 6237,
                        "id": {
                          "type": "Identifier",
                          "start": 6094,
                          "end": 6103,
                          "decorators": [],
                          "name": "withScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 6106,
                          "end": 6237,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6110,
                            "end": 6139,
                            "object": {
                              "type": "Identifier",
                              "start": 6110,
                              "end": 6120,
                              "decorators": [],
                              "name": "TypeScript",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6121,
                              "end": 6139,
                              "decorators": [],
                              "name": "SymbolScopeBuilder",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 6140,
                              "end": 6156,
                              "object": {
                                "type": "Identifier",
                                "start": 6140,
                                "end": 6148,
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6149,
                                "end": 6156,
                                "decorators": [],
                                "name": "members",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 6158,
                              "end": 6181,
                              "object": {
                                "type": "Identifier",
                                "start": 6158,
                                "end": 6166,
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6167,
                                "end": 6181,
                                "decorators": [],
                                "name": "ambientMembers",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "Literal",
                              "start": 6183,
                              "end": 6187,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "start": 6189,
                              "end": 6193,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "MemberExpression",
                              "start": 6195,
                              "end": 6219,
                              "object": {
                                "type": "MemberExpression",
                                "start": 6195,
                                "end": 6213,
                                "object": {
                                  "type": "Identifier",
                                  "start": 6195,
                                  "end": 6202,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6203,
                                  "end": 6213,
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6214,
                                "end": 6219,
                                "decorators": [],
                                "name": "scope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 6221,
                              "end": 6236,
                              "object": {
                                "type": "Identifier",
                                "start": 6221,
                                "end": 6229,
                                "decorators": [],
                                "name": "withType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6230,
                                "end": 6236,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6248,
                    "end": 6302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6248,
                      "end": 6301,
                      "callee": {
                        "type": "Identifier",
                        "start": 6248,
                        "end": 6263,
                        "decorators": [],
                        "name": "pushAssignScope",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6264,
                          "end": 6273,
                          "decorators": [],
                          "name": "withScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 6275,
                          "end": 6282,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 6284,
                          "end": 6288,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 6290,
                          "end": 6294,
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "start": 6296,
                          "end": 6300,
                          "value": null,
                          "raw": "null"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6311,
                    "end": 6347,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 6311,
                      "end": 6346,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 6311,
                        "end": 6334,
                        "object": {
                          "type": "Identifier",
                          "start": 6311,
                          "end": 6319,
                          "decorators": [],
                          "name": "withType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6320,
                          "end": 6334,
                          "decorators": [],
                          "name": "containedScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 6337,
                        "end": 6346,
                        "decorators": [],
                        "name": "withScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6359,
            "end": 16823,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 6366,
              "end": 16823,
              "id": {
                "type": "Identifier",
                "start": 6375,
                "end": 6398,
                "decorators": [],
                "name": "preAssignFuncDeclScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 6399,
                  "end": 6407,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6402,
                    "end": 6407,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6404,
                      "end": 6407,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6404,
                        "end": 6407,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 6409,
                  "end": 6436,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6416,
                    "end": 6436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6418,
                      "end": 6436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6418,
                        "end": 6436,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 6438,
                "end": 16823,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6448,
                    "end": 6477,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6452,
                        "end": 6476,
                        "id": {
                          "type": "Identifier",
                          "start": 6452,
                          "end": 6460,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 6463,
                          "end": 6476,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6464,
                            "end": 6472,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6464,
                              "end": 6472,
                              "decorators": [],
                              "name": "FuncDecl",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 6473,
                            "end": 6476,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6487,
                    "end": 6516,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6491,
                        "end": 6515,
                        "id": {
                          "type": "Identifier",
                          "start": 6491,
                          "end": 6508,
                          "decorators": [],
                          "name": "container",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6500,
                            "end": 6508,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6502,
                              "end": 6508,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6502,
                                "end": 6508,
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 6511,
                          "end": 6515,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6525,
                    "end": 6559,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6529,
                        "end": 6558,
                        "id": {
                          "type": "Identifier",
                          "start": 6529,
                          "end": 6551,
                          "decorators": [],
                          "name": "localContainer",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6543,
                            "end": 6551,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6545,
                              "end": 6551,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6545,
                                "end": 6551,
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 6554,
                          "end": 6558,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 6568,
                    "end": 6644,
                    "test": {
                      "type": "MemberExpression",
                      "start": 6572,
                      "end": 6585,
                      "object": {
                        "type": "Identifier",
                        "start": 6572,
                        "end": 6580,
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 6581,
                        "end": 6585,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 6587,
                      "end": 6644,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 6601,
                          "end": 6634,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 6601,
                            "end": 6633,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 6601,
                              "end": 6615,
                              "decorators": [],
                              "name": "localContainer",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 6618,
                              "end": 6633,
                              "object": {
                                "type": "MemberExpression",
                                "start": 6618,
                                "end": 6626,
                                "object": {
                                  "type": "Identifier",
                                  "start": 6618,
                                  "end": 6621,
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6622,
                                  "end": 6626,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6627,
                                "end": 6633,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6654,
                    "end": 6713,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6658,
                        "end": 6712,
                        "id": {
                          "type": "Identifier",
                          "start": 6658,
                          "end": 6666,
                          "decorators": [],
                          "name": "isStatic",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 6669,
                          "end": 6712,
                          "callee": {
                            "type": "Identifier",
                            "start": 6669,
                            "end": 6676,
                            "decorators": [],
                            "name": "hasFlag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 6677,
                              "end": 6694,
                              "object": {
                                "type": "Identifier",
                                "start": 6677,
                                "end": 6685,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6686,
                                "end": 6694,
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 6696,
                              "end": 6711,
                              "object": {
                                "type": "Identifier",
                                "start": 6696,
                                "end": 6704,
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6705,
                                "end": 6711,
                                "decorators": [],
                                "name": "Static",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6722,
                    "end": 6785,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6726,
                        "end": 6784,
                        "id": {
                          "type": "Identifier",
                          "start": 6726,
                          "end": 6739,
                          "decorators": [],
                          "name": "isInnerStatic",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 6742,
                          "end": 6784,
                          "left": {
                            "type": "Identifier",
                            "start": 6742,
                            "end": 6750,
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 6754,
                            "end": 6784,
                            "left": {
                              "type": "MemberExpression",
                              "start": 6754,
                              "end": 6776,
                              "object": {
                                "type": "MemberExpression",
                                "start": 6754,
                                "end": 6772,
                                "object": {
                                  "type": "Identifier",
                                  "start": 6754,
                                  "end": 6761,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6762,
                                  "end": 6772,
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6773,
                                "end": 6776,
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "start": 6780,
                              "end": 6784,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6897,
                    "end": 6998,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6901,
                        "end": 6997,
                        "id": {
                          "type": "Identifier",
                          "start": 6901,
                          "end": 6912,
                          "decorators": [],
                          "name": "parentScope",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "start": 6915,
                          "end": 6997,
                          "test": {
                            "type": "Identifier",
                            "start": 6915,
                            "end": 6928,
                            "decorators": [],
                            "name": "isInnerStatic",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "start": 6931,
                            "end": 6970,
                            "object": {
                              "type": "MemberExpression",
                              "start": 6931,
                              "end": 6958,
                              "object": {
                                "type": "MemberExpression",
                                "start": 6931,
                                "end": 6953,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 6931,
                                  "end": 6949,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 6931,
                                    "end": 6938,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 6939,
                                    "end": 6949,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6950,
                                  "end": 6953,
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6954,
                                "end": 6958,
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6959,
                              "end": 6970,
                              "decorators": [],
                              "name": "memberScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "alternate": {
                            "type": "MemberExpression",
                            "start": 6973,
                            "end": 6997,
                            "object": {
                              "type": "MemberExpression",
                              "start": 6973,
                              "end": 6991,
                              "object": {
                                "type": "Identifier",
                                "start": 6973,
                                "end": 6980,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6981,
                                "end": 6991,
                                "decorators": [],
                                "name": "scopeChain",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6992,
                              "end": 6997,
                              "decorators": [],
                              "name": "scope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 7334,
                    "end": 9114,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 7338,
                      "end": 7458,
                      "left": {
                        "type": "MemberExpression",
                        "start": 7338,
                        "end": 7365,
                        "object": {
                          "type": "MemberExpression",
                          "start": 7338,
                          "end": 7356,
                          "object": {
                            "type": "Identifier",
                            "start": 7338,
                            "end": 7345,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 7346,
                            "end": 7356,
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 7357,
                          "end": 7365,
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 7382,
                        "end": 7457,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 7382,
                          "end": 7405,
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 7383,
                            "end": 7405,
                            "object": {
                              "type": "Identifier",
                              "start": 7383,
                              "end": 7391,
                              "decorators": [],
                              "name": "funcDecl",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 7392,
                              "end": 7405,
                              "decorators": [],
                              "name": "isConstructor",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "||",
                        "right": {
                          "type": "CallExpression",
                          "start": 7409,
                          "end": 7457,
                          "callee": {
                            "type": "Identifier",
                            "start": 7409,
                            "end": 7416,
                            "decorators": [],
                            "name": "hasFlag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 7417,
                              "end": 7434,
                              "object": {
                                "type": "Identifier",
                                "start": 7417,
                                "end": 7425,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 7426,
                                "end": 7434,
                                "decorators": [],
                                "name": "fncFlags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 7436,
                              "end": 7456,
                              "object": {
                                "type": "Identifier",
                                "start": 7436,
                                "end": 7444,
                                "decorators": [],
                                "name": "FncFlags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 7445,
                                "end": 7456,
                                "decorators": [],
                                "name": "ClassMethod",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 7460,
                      "end": 8870,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 7474,
                          "end": 7517,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 7478,
                              "end": 7516,
                              "id": {
                                "type": "Identifier",
                                "start": 7478,
                                "end": 7486,
                                "decorators": [],
                                "name": "instType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 7489,
                                "end": 7516,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 7489,
                                  "end": 7507,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 7489,
                                    "end": 7496,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 7497,
                                    "end": 7507,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 7508,
                                  "end": 7516,
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 7531,
                          "end": 8819,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 7535,
                            "end": 7629,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 7535,
                              "end": 7576,
                              "operator": "!",
                              "argument": {
                                "type": "BinaryExpression",
                                "start": 7537,
                                "end": 7575,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 7537,
                                  "end": 7555,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 7537,
                                    "end": 7545,
                                    "decorators": [],
                                    "name": "instType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 7546,
                                    "end": 7555,
                                    "decorators": [],
                                    "name": "typeFlags",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "&",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 7558,
                                  "end": 7575,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 7558,
                                    "end": 7567,
                                    "decorators": [],
                                    "name": "TypeFlags",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 7568,
                                    "end": 7575,
                                    "decorators": [],
                                    "name": "IsClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "prefix": true
                            },
                            "operator": "&&",
                            "right": {
                              "type": "UnaryExpression",
                              "start": 7580,
                              "end": 7629,
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "start": 7581,
                                "end": 7629,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 7581,
                                  "end": 7588,
                                  "decorators": [],
                                  "name": "hasFlag",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 7589,
                                    "end": 7606,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7589,
                                      "end": 7597,
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7598,
                                      "end": 7606,
                                      "decorators": [],
                                      "name": "fncFlags",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 7608,
                                    "end": 7628,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7608,
                                      "end": 7616,
                                      "decorators": [],
                                      "name": "FncFlags",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7617,
                                      "end": 7628,
                                      "decorators": [],
                                      "name": "ClassMethod",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                ],
                                "optional": false
                              },
                              "prefix": true
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 7631,
                            "end": 7946,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 7649,
                                "end": 7932,
                                "test": {
                                  "type": "LogicalExpression",
                                  "start": 7653,
                                  "end": 7685,
                                  "left": {
                                    "type": "UnaryExpression",
                                    "start": 7653,
                                    "end": 7673,
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 7654,
                                      "end": 7673,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 7654,
                                        "end": 7671,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 7654,
                                          "end": 7662,
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 7663,
                                          "end": 7671,
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "prefix": true
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 7677,
                                    "end": 7685,
                                    "decorators": [],
                                    "name": "isStatic",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 7687,
                                  "end": 7767,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 7709,
                                      "end": 7749,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 7709,
                                        "end": 7748,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 7709,
                                          "end": 7720,
                                          "decorators": [],
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 7723,
                                          "end": 7748,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7723,
                                            "end": 7731,
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7732,
                                            "end": 7748,
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 7789,
                                  "end": 7932,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 7876,
                                      "end": 7914,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 7876,
                                        "end": 7913,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 7876,
                                          "end": 7887,
                                          "decorators": [],
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 7890,
                                          "end": 7913,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7890,
                                            "end": 7898,
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7899,
                                            "end": 7913,
                                            "decorators": [],
                                            "name": "containedScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "start": 7964,
                            "end": 8819,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 7982,
                                "end": 8805,
                                "test": {
                                  "type": "LogicalExpression",
                                  "start": 7986,
                                  "end": 8310,
                                  "left": {
                                    "type": "LogicalExpression",
                                    "start": 7986,
                                    "end": 8209,
                                    "left": {
                                      "type": "LogicalExpression",
                                      "start": 7986,
                                      "end": 8104,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 7986,
                                        "end": 8029,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 7986,
                                          "end": 8019,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 7986,
                                            "end": 8013,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 7986,
                                              "end": 8004,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 7986,
                                                "end": 7993,
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 7994,
                                                "end": 8004,
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8005,
                                              "end": 8013,
                                              "decorators": [],
                                              "name": "previous",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8014,
                                            "end": 8019,
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8020,
                                          "end": 8029,
                                          "decorators": [],
                                          "name": "container",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "&&",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 8053,
                                        "end": 8104,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 8053,
                                          "end": 8096,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 8053,
                                            "end": 8086,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 8053,
                                              "end": 8080,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 8053,
                                                "end": 8071,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 8053,
                                                  "end": 8060,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8061,
                                                  "end": 8071,
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8072,
                                                "end": 8080,
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8081,
                                              "end": 8086,
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8087,
                                            "end": 8096,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8097,
                                          "end": 8104,
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "BinaryExpression",
                                      "start": 8128,
                                      "end": 8209,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 8128,
                                        "end": 8188,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 8128,
                                          "end": 8179,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 8128,
                                            "end": 8171,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 8128,
                                              "end": 8161,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 8128,
                                                "end": 8155,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "start": 8128,
                                                  "end": 8146,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 8128,
                                                    "end": 8135,
                                                    "decorators": [],
                                                    "name": "context",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 8136,
                                                    "end": 8146,
                                                    "decorators": [],
                                                    "name": "scopeChain",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8147,
                                                  "end": 8155,
                                                  "decorators": [],
                                                  "name": "previous",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8156,
                                                "end": 8161,
                                                "decorators": [],
                                                "name": "scope",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8162,
                                              "end": 8171,
                                              "decorators": [],
                                              "name": "container",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8172,
                                            "end": 8179,
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8180,
                                          "end": 8188,
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 8192,
                                        "end": 8209,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 8192,
                                          "end": 8200,
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8201,
                                          "end": 8209,
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 8233,
                                    "end": 8310,
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "start": 8234,
                                      "end": 8295,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 8235,
                                        "end": 8243,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 8235,
                                          "end": 8243,
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 8244,
                                        "end": 8295,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 8244,
                                          "end": 8287,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 8244,
                                            "end": 8277,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 8244,
                                              "end": 8271,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 8244,
                                                "end": 8262,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 8244,
                                                  "end": 8251,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8252,
                                                  "end": 8262,
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8263,
                                                "end": 8271,
                                                "decorators": [],
                                                "name": "previous",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8272,
                                              "end": 8277,
                                              "decorators": [],
                                              "name": "scope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8278,
                                            "end": 8287,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8288,
                                          "end": 8295,
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 8297,
                                      "end": 8310,
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 8312,
                                  "end": 8486,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8428,
                                      "end": 8468,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 8428,
                                        "end": 8467,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 8428,
                                          "end": 8439,
                                          "decorators": [],
                                          "name": "parentScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 8442,
                                          "end": 8467,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8442,
                                            "end": 8450,
                                            "decorators": [],
                                            "name": "instType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8451,
                                            "end": 8467,
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "start": 8508,
                                  "end": 8805,
                                  "test": {
                                    "type": "LogicalExpression",
                                    "start": 8512,
                                    "end": 8552,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 8512,
                                      "end": 8520,
                                      "decorators": [],
                                      "name": "isStatic",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 8524,
                                      "end": 8552,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 8524,
                                        "end": 8542,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 8524,
                                          "end": 8531,
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 8532,
                                          "end": 8542,
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 8543,
                                        "end": 8552,
                                        "decorators": [],
                                        "name": "classType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 8554,
                                    "end": 8652,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 8576,
                                        "end": 8634,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 8576,
                                          "end": 8633,
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 8576,
                                            "end": 8587,
                                            "decorators": [],
                                            "name": "parentScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 8590,
                                            "end": 8633,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 8590,
                                              "end": 8618,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 8590,
                                                "end": 8608,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 8590,
                                                  "end": 8597,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8598,
                                                  "end": 8608,
                                                  "decorators": [],
                                                  "name": "scopeChain",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8609,
                                                "end": 8618,
                                                "decorators": [],
                                                "name": "classType",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8619,
                                              "end": 8633,
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          }
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "BlockStatement",
                                    "start": 8674,
                                    "end": 8805,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 8749,
                                        "end": 8787,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 8749,
                                          "end": 8786,
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 8749,
                                            "end": 8760,
                                            "decorators": [],
                                            "name": "parentScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 8763,
                                            "end": 8786,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 8763,
                                              "end": 8771,
                                              "decorators": [],
                                              "name": "instType",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 8772,
                                              "end": 8786,
                                              "decorators": [],
                                              "name": "containedScope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          }
                                        },
                                        "directive": null
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 8832,
                          "end": 8860,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 8832,
                            "end": 8859,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 8832,
                              "end": 8841,
                              "decorators": [],
                              "name": "container",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 8844,
                              "end": 8859,
                              "object": {
                                "type": "Identifier",
                                "start": 8844,
                                "end": 8852,
                                "decorators": [],
                                "name": "instType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 8853,
                                "end": 8859,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "start": 8884,
                      "end": 9114,
                      "test": {
                        "type": "LogicalExpression",
                        "start": 8888,
                        "end": 8941,
                        "left": {
                          "type": "MemberExpression",
                          "start": 8888,
                          "end": 8910,
                          "object": {
                            "type": "Identifier",
                            "start": 8888,
                            "end": 8896,
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 8897,
                            "end": 8910,
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 8914,
                          "end": 8941,
                          "object": {
                            "type": "MemberExpression",
                            "start": 8914,
                            "end": 8932,
                            "object": {
                              "type": "Identifier",
                              "start": 8914,
                              "end": 8921,
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 8922,
                              "end": 8932,
                              "decorators": [],
                              "name": "scopeChain",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 8933,
                            "end": 8941,
                            "decorators": [],
                            "name": "thisType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 8943,
                        "end": 9114,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 9057,
                            "end": 9104,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 9057,
                              "end": 9103,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 9057,
                                "end": 9066,
                                "decorators": [],
                                "name": "container",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 9069,
                                "end": 9103,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 9069,
                                  "end": 9096,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 9069,
                                    "end": 9087,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 9069,
                                      "end": 9076,
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 9077,
                                      "end": 9087,
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 9088,
                                    "end": 9096,
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 9097,
                                  "end": 9103,
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": null
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 9124,
                    "end": 12425,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 9128,
                      "end": 9230,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 9128,
                        "end": 9149,
                        "left": {
                          "type": "MemberExpression",
                          "start": 9128,
                          "end": 9141,
                          "object": {
                            "type": "Identifier",
                            "start": 9128,
                            "end": 9136,
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 9137,
                            "end": 9141,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "start": 9145,
                          "end": 9149,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "CallExpression",
                        "start": 9153,
                        "end": 9230,
                        "callee": {
                          "type": "Identifier",
                          "start": 9153,
                          "end": 9160,
                          "decorators": [],
                          "name": "hasFlag",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 9161,
                            "end": 9187,
                            "object": {
                              "type": "MemberExpression",
                              "start": 9161,
                              "end": 9181,
                              "object": {
                                "type": "MemberExpression",
                                "start": 9161,
                                "end": 9174,
                                "object": {
                                  "type": "Identifier",
                                  "start": 9161,
                                  "end": 9169,
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 9170,
                                  "end": 9174,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 9175,
                                "end": 9181,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 9182,
                              "end": 9187,
                              "decorators": [],
                              "name": "flags",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 9189,
                            "end": 9229,
                            "object": {
                              "type": "Identifier",
                              "start": 9189,
                              "end": 9200,
                              "decorators": [],
                              "name": "SymbolFlags",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 9201,
                              "end": 9229,
                              "decorators": [],
                              "name": "TypeSetDuringScopeAssignment",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 9232,
                      "end": 12425,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 9246,
                          "end": 9384,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 9250,
                            "end": 9303,
                            "left": {
                              "type": "MemberExpression",
                              "start": 9250,
                              "end": 9272,
                              "object": {
                                "type": "MemberExpression",
                                "start": 9250,
                                "end": 9268,
                                "object": {
                                  "type": "Identifier",
                                  "start": 9250,
                                  "end": 9257,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 9258,
                                  "end": 9268,
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 9269,
                                "end": 9272,
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 9276,
                              "end": 9303,
                              "object": {
                                "type": "MemberExpression",
                                "start": 9276,
                                "end": 9298,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 9276,
                                  "end": 9294,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 9276,
                                    "end": 9283,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 9284,
                                    "end": 9294,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 9295,
                                  "end": 9298,
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 9299,
                                "end": 9303,
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 9305,
                            "end": 9384,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 9323,
                                "end": 9370,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 9323,
                                  "end": 9369,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9323,
                                    "end": 9332,
                                    "decorators": [],
                                    "name": "container",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 9335,
                                    "end": 9369,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 9335,
                                      "end": 9362,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 9335,
                                        "end": 9357,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 9335,
                                          "end": 9353,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 9335,
                                            "end": 9342,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 9343,
                                            "end": 9353,
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 9354,
                                          "end": 9357,
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 9358,
                                        "end": 9362,
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 9363,
                                      "end": 9369,
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 9398,
                          "end": 9419,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 9402,
                              "end": 9418,
                              "id": {
                                "type": "Identifier",
                                "start": 9402,
                                "end": 9411,
                                "decorators": [],
                                "name": "funcScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Literal",
                                "start": 9414,
                                "end": 9418,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 9432,
                          "end": 9480,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 9436,
                              "end": 9479,
                              "id": {
                                "type": "Identifier",
                                "start": 9436,
                                "end": 9454,
                                "decorators": [],
                                "name": "outerFnc",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 9444,
                                  "end": 9454,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 9446,
                                    "end": 9454,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 9446,
                                      "end": 9454,
                                      "decorators": [],
                                      "name": "FuncDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 9457,
                                "end": 9479,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 9457,
                                  "end": 9475,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 9457,
                                    "end": 9464,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 9465,
                                    "end": 9475,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 9476,
                                  "end": 9479,
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 9493,
                          "end": 9556,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 9497,
                              "end": 9555,
                              "id": {
                                "type": "Identifier",
                                "start": 9497,
                                "end": 9505,
                                "decorators": [],
                                "name": "nameText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ConditionalExpression",
                                "start": 9508,
                                "end": 9555,
                                "test": {
                                  "type": "MemberExpression",
                                  "start": 9508,
                                  "end": 9521,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 9508,
                                    "end": 9516,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 9517,
                                    "end": 9521,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "start": 9524,
                                  "end": 9548,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 9524,
                                    "end": 9537,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 9524,
                                      "end": 9532,
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 9533,
                                      "end": 9537,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 9538,
                                    "end": 9548,
                                    "decorators": [],
                                    "name": "actualText",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "start": 9551,
                                  "end": 9555,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 9569,
                          "end": 9598,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 9573,
                              "end": 9597,
                              "id": {
                                "type": "Identifier",
                                "start": 9573,
                                "end": 9590,
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 9578,
                                  "end": 9590,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 9580,
                                    "end": 9590,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 9580,
                                      "end": 9590,
                                      "decorators": [],
                                      "name": "TypeSymbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 9593,
                                "end": 9597,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 9612,
                          "end": 10864,
                          "test": {
                            "type": "Identifier",
                            "start": 9616,
                            "end": 9624,
                            "decorators": [],
                            "name": "isStatic",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 9626,
                            "end": 10323,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 9942,
                                "end": 10152,
                                "test": {
                                  "type": "LogicalExpression",
                                  "start": 9946,
                                  "end": 10010,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 9946,
                                    "end": 9975,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 9946,
                                      "end": 9967,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 9946,
                                        "end": 9959,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 9946,
                                          "end": 9954,
                                          "decorators": [],
                                          "name": "outerFnc",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 9955,
                                          "end": 9959,
                                          "decorators": [],
                                          "name": "type",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 9960,
                                        "end": 9967,
                                        "decorators": [],
                                        "name": "members",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "Literal",
                                      "start": 9971,
                                      "end": 9975,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 9979,
                                    "end": 10010,
                                    "object": {
                                      "type": "CallExpression",
                                      "start": 9979,
                                      "end": 9998,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 9979,
                                        "end": 9996,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 9979,
                                          "end": 9988,
                                          "decorators": [],
                                          "name": "container",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 9989,
                                          "end": 9996,
                                          "decorators": [],
                                          "name": "getType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 9999,
                                      "end": 10010,
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 10012,
                                  "end": 10152,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 10034,
                                      "end": 10134,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 10034,
                                        "end": 10133,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 10034,
                                          "end": 10055,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 10034,
                                            "end": 10047,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 10034,
                                              "end": 10042,
                                              "decorators": [],
                                              "name": "outerFnc",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 10043,
                                              "end": 10047,
                                              "decorators": [],
                                              "name": "type",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10048,
                                            "end": 10055,
                                            "decorators": [],
                                            "name": "members",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 10058,
                                          "end": 10133,
                                          "object": {
                                            "type": "TSTypeAssertion",
                                            "start": 10059,
                                            "end": 10119,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 10060,
                                              "end": 10078,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 10060,
                                                "end": 10078,
                                                "decorators": [],
                                                "name": "SymbolScopeBuilder",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            },
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 10079,
                                              "end": 10119,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 10079,
                                                "end": 10107,
                                                "object": {
                                                  "type": "TSTypeAssertion",
                                                  "start": 10080,
                                                  "end": 10101,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 10081,
                                                    "end": 10091,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 10081,
                                                      "end": 10091,
                                                      "decorators": [],
                                                      "name": "TypeSymbol",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "start": 10092,
                                                    "end": 10101,
                                                    "decorators": [],
                                                    "name": "container",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 10103,
                                                  "end": 10107,
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 10108,
                                                "end": 10119,
                                                "decorators": [],
                                                "name": "memberScope",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10121,
                                            "end": 10133,
                                            "decorators": [],
                                            "name": "valueMembers",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 10169,
                                "end": 10221,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 10169,
                                  "end": 10220,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10169,
                                    "end": 10178,
                                    "decorators": [],
                                    "name": "funcScope",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 10181,
                                    "end": 10220,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 10181,
                                      "end": 10208,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 10181,
                                        "end": 10203,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 10181,
                                          "end": 10199,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10181,
                                            "end": 10188,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10189,
                                            "end": 10199,
                                            "decorators": [],
                                            "name": "scopeChain",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 10200,
                                          "end": 10203,
                                          "decorators": [],
                                          "name": "fnc",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 10204,
                                        "end": 10208,
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 10209,
                                      "end": 10220,
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 10238,
                                "end": 10309,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 10238,
                                  "end": 10308,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 10238,
                                    "end": 10297,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 10238,
                                      "end": 10263,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 10238,
                                        "end": 10246,
                                        "decorators": [],
                                        "name": "outerFnc",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 10247,
                                        "end": 10263,
                                        "decorators": [],
                                        "name": "innerStaticFuncs",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "MemberExpression",
                                      "start": 10264,
                                      "end": 10296,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 10264,
                                        "end": 10289,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 10264,
                                          "end": 10272,
                                          "decorators": [],
                                          "name": "outerFnc",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 10273,
                                          "end": 10289,
                                          "decorators": [],
                                          "name": "innerStaticFuncs",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 10290,
                                        "end": 10296,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "optional": false,
                                    "computed": true
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10300,
                                    "end": 10308,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "start": 10341,
                            "end": 10864,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 10360,
                                "end": 10850,
                                "test": {
                                  "type": "LogicalExpression",
                                  "start": 10364,
                                  "end": 10643,
                                  "left": {
                                    "type": "LogicalExpression",
                                    "start": 10364,
                                    "end": 10599,
                                    "left": {
                                      "type": "LogicalExpression",
                                      "start": 10364,
                                      "end": 10532,
                                      "left": {
                                        "type": "LogicalExpression",
                                        "start": 10364,
                                        "end": 10461,
                                        "left": {
                                          "type": "LogicalExpression",
                                          "start": 10364,
                                          "end": 10420,
                                          "left": {
                                            "type": "UnaryExpression",
                                            "start": 10364,
                                            "end": 10387,
                                            "operator": "!",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "start": 10365,
                                              "end": 10387,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 10365,
                                                "end": 10373,
                                                "decorators": [],
                                                "name": "funcDecl",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 10374,
                                                "end": 10387,
                                                "decorators": [],
                                                "name": "isConstructor",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "prefix": true
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "Identifier",
                                            "start": 10411,
                                            "end": 10420,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 10444,
                                          "end": 10461,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10444,
                                            "end": 10453,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10454,
                                            "end": 10461,
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "operator": "&&",
                                      "right": {
                                        "type": "BinaryExpression",
                                        "start": 10485,
                                        "end": 10532,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 10485,
                                          "end": 10511,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 10485,
                                            "end": 10502,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 10485,
                                              "end": 10494,
                                              "decorators": [],
                                              "name": "container",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 10495,
                                              "end": 10502,
                                              "decorators": [],
                                              "name": "declAST",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10503,
                                            "end": 10511,
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 10515,
                                          "end": 10532,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10515,
                                            "end": 10523,
                                            "decorators": [],
                                            "name": "NodeType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10524,
                                            "end": 10532,
                                            "decorators": [],
                                            "name": "FuncDecl",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      }
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 10556,
                                      "end": 10599,
                                      "object": {
                                        "type": "TSTypeAssertion",
                                        "start": 10557,
                                        "end": 10584,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 10558,
                                          "end": 10566,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 10558,
                                            "end": 10566,
                                            "decorators": [],
                                            "name": "FuncDecl",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        },
                                        "expression": {
                                          "type": "MemberExpression",
                                          "start": 10567,
                                          "end": 10584,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10567,
                                            "end": 10576,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10577,
                                            "end": 10584,
                                            "decorators": [],
                                            "name": "declAST",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 10586,
                                        "end": 10599,
                                        "decorators": [],
                                        "name": "isConstructor",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "UnaryExpression",
                                    "start": 10623,
                                    "end": 10643,
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 10624,
                                      "end": 10643,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 10624,
                                        "end": 10641,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 10624,
                                          "end": 10632,
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 10633,
                                          "end": 10641,
                                          "decorators": [],
                                          "name": "isMethod",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "prefix": true
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 10645,
                                  "end": 10751,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 10667,
                                      "end": 10724,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 10667,
                                        "end": 10723,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 10667,
                                          "end": 10676,
                                          "decorators": [],
                                          "name": "funcScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 10679,
                                          "end": 10723,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 10679,
                                            "end": 10706,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 10679,
                                              "end": 10697,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 10679,
                                                "end": 10686,
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 10687,
                                                "end": 10697,
                                                "decorators": [],
                                                "name": "scopeChain",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 10698,
                                              "end": 10706,
                                              "decorators": [],
                                              "name": "thisType",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10707,
                                            "end": 10723,
                                            "decorators": [],
                                            "name": "constructorScope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 10773,
                                  "end": 10850,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 10795,
                                      "end": 10832,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 10795,
                                        "end": 10831,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 10795,
                                          "end": 10804,
                                          "decorators": [],
                                          "name": "funcScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 10807,
                                          "end": 10831,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 10807,
                                            "end": 10825,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 10807,
                                              "end": 10814,
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 10815,
                                              "end": 10825,
                                              "decorators": [],
                                              "name": "scopeChain",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10826,
                                            "end": 10831,
                                            "decorators": [],
                                            "name": "scope",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 11154,
                          "end": 11561,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 11158,
                            "end": 11219,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 11158,
                              "end": 11193,
                              "left": {
                                "type": "Identifier",
                                "start": 11158,
                                "end": 11166,
                                "decorators": [],
                                "name": "nameText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 11170,
                                "end": 11193,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11170,
                                  "end": 11178,
                                  "decorators": [],
                                  "name": "nameText",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "start": 11182,
                                  "end": 11193,
                                  "value": "__missing",
                                  "raw": "\"__missing\""
                                }
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "UnaryExpression",
                              "start": 11197,
                              "end": 11219,
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "start": 11198,
                                "end": 11219,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 11198,
                                  "end": 11217,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 11198,
                                    "end": 11206,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 11207,
                                    "end": 11217,
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "prefix": true
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 11221,
                            "end": 11561,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 11239,
                                "end": 11547,
                                "test": {
                                  "type": "Identifier",
                                  "start": 11243,
                                  "end": 11251,
                                  "decorators": [],
                                  "name": "isStatic",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 11253,
                                  "end": 11345,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 11275,
                                      "end": 11327,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 11275,
                                        "end": 11326,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 11275,
                                          "end": 11280,
                                          "decorators": [],
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "start": 11283,
                                          "end": 11326,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 11283,
                                            "end": 11302,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 11283,
                                              "end": 11292,
                                              "decorators": [],
                                              "name": "funcScope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 11293,
                                              "end": 11302,
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 11303,
                                              "end": 11311,
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 11313,
                                              "end": 11318,
                                              "value": false,
                                              "raw": "false"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 11320,
                                              "end": 11325,
                                              "value": false,
                                              "raw": "false"
                                            }
                                          ],
                                          "optional": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 11367,
                                  "end": 11547,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 11477,
                                      "end": 11529,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 11477,
                                        "end": 11528,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 11477,
                                          "end": 11482,
                                          "decorators": [],
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "start": 11485,
                                          "end": 11528,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 11485,
                                            "end": 11504,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 11485,
                                              "end": 11494,
                                              "decorators": [],
                                              "name": "funcScope",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 11495,
                                              "end": 11504,
                                              "decorators": [],
                                              "name": "findLocal",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 11505,
                                              "end": 11513,
                                              "decorators": [],
                                              "name": "nameText",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 11515,
                                              "end": 11520,
                                              "value": false,
                                              "raw": "false"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 11522,
                                              "end": 11527,
                                              "value": false,
                                              "raw": "false"
                                            }
                                          ],
                                          "optional": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 11575,
                          "end": 11738,
                          "expression": {
                            "type": "CallExpression",
                            "start": 11575,
                            "end": 11737,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 11575,
                              "end": 11623,
                              "object": {
                                "type": "MemberExpression",
                                "start": 11575,
                                "end": 11599,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 11575,
                                  "end": 11591,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 11575,
                                    "end": 11582,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 11583,
                                    "end": 11591,
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 11592,
                                  "end": 11599,
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 11600,
                                "end": 11623,
                                "decorators": [],
                                "name": "createFunctionSignature",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 11624,
                                "end": 11632,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 11634,
                                "end": 11643,
                                "decorators": [],
                                "name": "container",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 11705,
                                "end": 11714,
                                "decorators": [],
                                "name": "funcScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 11716,
                                "end": 11721,
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "BinaryExpression",
                                "start": 11723,
                                "end": 11736,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11723,
                                  "end": 11728,
                                  "decorators": [],
                                  "name": "fgSym",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "start": 11732,
                                  "end": 11736,
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 11833,
                          "end": 12330,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 11837,
                            "end": 12110,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 11837,
                              "end": 12056,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 11837,
                                "end": 11953,
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 11837,
                                  "end": 11924,
                                  "left": {
                                    "type": "UnaryExpression",
                                    "start": 11837,
                                    "end": 11861,
                                    "operator": "!",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 11838,
                                      "end": 11861,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 11838,
                                        "end": 11846,
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 11847,
                                        "end": 11861,
                                        "decorators": [],
                                        "name": "accessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "prefix": true
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "start": 11883,
                                    "end": 11923,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 11883,
                                      "end": 11900,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 11883,
                                        "end": 11891,
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 11892,
                                        "end": 11900,
                                        "decorators": [],
                                        "name": "fncFlags",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 11903,
                                      "end": 11923,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 11903,
                                        "end": 11911,
                                        "decorators": [],
                                        "name": "FncFlags",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 11912,
                                        "end": 11923,
                                        "decorators": [],
                                        "name": "ClassMethod",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  }
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "Identifier",
                                  "start": 11944,
                                  "end": 11953,
                                  "decorators": [],
                                  "name": "container",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "start": 11975,
                                "end": 12055,
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 11976,
                                  "end": 12029,
                                  "left": {
                                    "type": "UnaryExpression",
                                    "start": 11976,
                                    "end": 11982,
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 11977,
                                      "end": 11982,
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "prefix": true
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "start": 11986,
                                    "end": 12029,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 11986,
                                      "end": 12008,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 11986,
                                        "end": 11999,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 11986,
                                          "end": 11991,
                                          "decorators": [],
                                          "name": "fgSym",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 11992,
                                          "end": 11999,
                                          "decorators": [],
                                          "name": "declAST",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 12000,
                                        "end": 12008,
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "!=",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 12012,
                                      "end": 12029,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 12012,
                                        "end": 12020,
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 12021,
                                        "end": 12029,
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  }
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "CallExpression",
                                  "start": 12034,
                                  "end": 12055,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 12034,
                                    "end": 12053,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 12034,
                                      "end": 12042,
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 12043,
                                      "end": 12053,
                                      "decorators": [],
                                      "name": "isAccessor",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                }
                              }
                            },
                            "operator": "||",
                            "right": {
                              "type": "LogicalExpression",
                              "start": 12082,
                              "end": 12109,
                              "left": {
                                "type": "Identifier",
                                "start": 12082,
                                "end": 12087,
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "start": 12091,
                                "end": 12109,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 12091,
                                  "end": 12107,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 12091,
                                    "end": 12096,
                                    "decorators": [],
                                    "name": "fgSym",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 12097,
                                    "end": 12107,
                                    "decorators": [],
                                    "name": "isAccessor",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 12125,
                            "end": 12330,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 12143,
                                "end": 12316,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 12143,
                                  "end": 12315,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 12143,
                                    "end": 12166,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 12143,
                                      "end": 12151,
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 12152,
                                      "end": 12166,
                                      "decorators": [],
                                      "name": "accessorSymbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 12169,
                                    "end": 12315,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 12169,
                                      "end": 12214,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 12169,
                                        "end": 12193,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 12169,
                                          "end": 12185,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 12169,
                                            "end": 12176,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 12177,
                                            "end": 12185,
                                            "decorators": [],
                                            "name": "typeFlow",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 12186,
                                          "end": 12193,
                                          "decorators": [],
                                          "name": "checker",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 12194,
                                        "end": 12214,
                                        "decorators": [],
                                        "name": "createAccessorSymbol",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 12215,
                                        "end": 12223,
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 12225,
                                        "end": 12230,
                                        "decorators": [],
                                        "name": "fgSym",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "CallExpression",
                                        "start": 12232,
                                        "end": 12251,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 12232,
                                          "end": 12249,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 12232,
                                            "end": 12241,
                                            "decorators": [],
                                            "name": "container",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 12242,
                                            "end": 12249,
                                            "decorators": [],
                                            "name": "getType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "LogicalExpression",
                                        "start": 12254,
                                        "end": 12285,
                                        "left": {
                                          "type": "CallExpression",
                                          "start": 12254,
                                          "end": 12273,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 12254,
                                            "end": 12271,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 12254,
                                              "end": 12262,
                                              "decorators": [],
                                              "name": "funcDecl",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 12263,
                                              "end": 12271,
                                              "decorators": [],
                                              "name": "isMethod",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 12277,
                                          "end": 12285,
                                          "decorators": [],
                                          "name": "isStatic",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 12288,
                                        "end": 12292,
                                        "value": true,
                                        "raw": "true"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 12294,
                                        "end": 12303,
                                        "decorators": [],
                                        "name": "funcScope",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 12305,
                                        "end": 12314,
                                        "decorators": [],
                                        "name": "container",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 12344,
                          "end": 12415,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 12344,
                            "end": 12414,
                            "operator": "|=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 12344,
                              "end": 12370,
                              "object": {
                                "type": "MemberExpression",
                                "start": 12344,
                                "end": 12364,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 12344,
                                  "end": 12357,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 12344,
                                    "end": 12352,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 12353,
                                    "end": 12357,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 12358,
                                  "end": 12364,
                                  "decorators": [],
                                  "name": "symbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 12365,
                                "end": 12370,
                                "decorators": [],
                                "name": "flags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 12374,
                              "end": 12414,
                              "object": {
                                "type": "Identifier",
                                "start": 12374,
                                "end": 12385,
                                "decorators": [],
                                "name": "SymbolFlags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 12386,
                                "end": 12414,
                                "decorators": [],
                                "name": "TypeSetDuringScopeAssignment",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 12495,
                    "end": 12596,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 12499,
                      "end": 12529,
                      "left": {
                        "type": "MemberExpression",
                        "start": 12499,
                        "end": 12512,
                        "object": {
                          "type": "Identifier",
                          "start": 12499,
                          "end": 12507,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 12508,
                          "end": 12512,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 12516,
                        "end": 12529,
                        "object": {
                          "type": "Identifier",
                          "start": 12516,
                          "end": 12524,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 12525,
                          "end": 12529,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 12531,
                      "end": 12596,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 12545,
                          "end": 12586,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 12545,
                            "end": 12585,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 12545,
                              "end": 12562,
                              "object": {
                                "type": "MemberExpression",
                                "start": 12545,
                                "end": 12558,
                                "object": {
                                  "type": "Identifier",
                                  "start": 12545,
                                  "end": 12553,
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 12554,
                                  "end": 12558,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 12559,
                                "end": 12562,
                                "decorators": [],
                                "name": "sym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 12565,
                              "end": 12585,
                              "object": {
                                "type": "MemberExpression",
                                "start": 12565,
                                "end": 12578,
                                "object": {
                                  "type": "Identifier",
                                  "start": 12565,
                                  "end": 12573,
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 12574,
                                  "end": 12578,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 12579,
                                "end": 12585,
                                "decorators": [],
                                "name": "symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 12783,
                    "end": 12818,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 12783,
                      "end": 12817,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 12783,
                        "end": 12801,
                        "object": {
                          "type": "Identifier",
                          "start": 12783,
                          "end": 12791,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 12792,
                          "end": 12801,
                          "decorators": [],
                          "name": "scopeType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 12804,
                        "end": 12817,
                        "object": {
                          "type": "Identifier",
                          "start": 12804,
                          "end": 12812,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 12813,
                          "end": 12817,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 12877,
                    "end": 12933,
                    "test": {
                      "type": "MemberExpression",
                      "start": 12881,
                      "end": 12900,
                      "object": {
                        "type": "Identifier",
                        "start": 12881,
                        "end": 12889,
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 12890,
                        "end": 12900,
                        "decorators": [],
                        "name": "isOverload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 12902,
                      "end": 12933,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 12916,
                          "end": 12923,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 12943,
                    "end": 12981,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 12947,
                        "end": 12980,
                        "id": {
                          "type": "Identifier",
                          "start": 12947,
                          "end": 12956,
                          "decorators": [],
                          "name": "funcTable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 12959,
                          "end": 12980,
                          "callee": {
                            "type": "Identifier",
                            "start": 12963,
                            "end": 12978,
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 12990,
                    "end": 13085,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 12994,
                        "end": 13084,
                        "id": {
                          "type": "Identifier",
                          "start": 12994,
                          "end": 13005,
                          "decorators": [],
                          "name": "funcMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13008,
                          "end": 13084,
                          "callee": {
                            "type": "Identifier",
                            "start": 13012,
                            "end": 13025,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 13026,
                              "end": 13083,
                              "callee": {
                                "type": "Identifier",
                                "start": 13030,
                                "end": 13049,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 13050,
                                  "end": 13059,
                                  "decorators": [],
                                  "name": "funcTable",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 13061,
                                  "end": 13082,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 13065,
                                    "end": 13080,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13094,
                    "end": 13139,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13098,
                        "end": 13138,
                        "id": {
                          "type": "Identifier",
                          "start": 13098,
                          "end": 13114,
                          "decorators": [],
                          "name": "ambientFuncTable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13117,
                          "end": 13138,
                          "callee": {
                            "type": "Identifier",
                            "start": 13121,
                            "end": 13136,
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13148,
                    "end": 13257,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13152,
                        "end": 13256,
                        "id": {
                          "type": "Identifier",
                          "start": 13152,
                          "end": 13170,
                          "decorators": [],
                          "name": "ambientFuncMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13173,
                          "end": 13256,
                          "callee": {
                            "type": "Identifier",
                            "start": 13177,
                            "end": 13190,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 13191,
                              "end": 13255,
                              "callee": {
                                "type": "Identifier",
                                "start": 13195,
                                "end": 13214,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 13215,
                                  "end": 13231,
                                  "decorators": [],
                                  "name": "ambientFuncTable",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 13233,
                                  "end": 13254,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 13237,
                                    "end": 13252,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13266,
                    "end": 13310,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13270,
                        "end": 13309,
                        "id": {
                          "type": "Identifier",
                          "start": 13270,
                          "end": 13285,
                          "decorators": [],
                          "name": "funcStaticTable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13288,
                          "end": 13309,
                          "callee": {
                            "type": "Identifier",
                            "start": 13292,
                            "end": 13307,
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13319,
                    "end": 13426,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13323,
                        "end": 13425,
                        "id": {
                          "type": "Identifier",
                          "start": 13323,
                          "end": 13340,
                          "decorators": [],
                          "name": "funcStaticMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13343,
                          "end": 13425,
                          "callee": {
                            "type": "Identifier",
                            "start": 13347,
                            "end": 13360,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 13361,
                              "end": 13424,
                              "callee": {
                                "type": "Identifier",
                                "start": 13365,
                                "end": 13384,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 13385,
                                  "end": 13400,
                                  "decorators": [],
                                  "name": "funcStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 13402,
                                  "end": 13423,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 13406,
                                    "end": 13421,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13435,
                    "end": 13486,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13439,
                        "end": 13485,
                        "id": {
                          "type": "Identifier",
                          "start": 13439,
                          "end": 13461,
                          "decorators": [],
                          "name": "ambientFuncStaticTable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13464,
                          "end": 13485,
                          "callee": {
                            "type": "Identifier",
                            "start": 13468,
                            "end": 13483,
                            "decorators": [],
                            "name": "StringHashTable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13495,
                    "end": 13616,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13499,
                        "end": 13615,
                        "id": {
                          "type": "Identifier",
                          "start": 13499,
                          "end": 13523,
                          "decorators": [],
                          "name": "ambientFuncStaticMembers",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13526,
                          "end": 13615,
                          "callee": {
                            "type": "Identifier",
                            "start": 13530,
                            "end": 13543,
                            "decorators": [],
                            "name": "ScopedMembers",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 13544,
                              "end": 13614,
                              "callee": {
                                "type": "Identifier",
                                "start": 13548,
                                "end": 13567,
                                "decorators": [],
                                "name": "DualStringHashTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 13568,
                                  "end": 13590,
                                  "decorators": [],
                                  "name": "ambientFuncStaticTable",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "NewExpression",
                                  "start": 13592,
                                  "end": 13613,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 13596,
                                    "end": 13611,
                                    "decorators": [],
                                    "name": "StringHashTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              ]
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 13723,
                    "end": 13792,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 13723,
                      "end": 13791,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 13723,
                        "end": 13741,
                        "object": {
                          "type": "Identifier",
                          "start": 13723,
                          "end": 13731,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 13732,
                          "end": 13741,
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 13744,
                        "end": 13791,
                        "object": {
                          "type": "MemberExpression",
                          "start": 13744,
                          "end": 13781,
                          "object": {
                            "type": "MemberExpression",
                            "start": 13744,
                            "end": 13768,
                            "object": {
                              "type": "MemberExpression",
                              "start": 13744,
                              "end": 13760,
                              "object": {
                                "type": "Identifier",
                                "start": 13744,
                                "end": 13751,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 13752,
                                "end": 13760,
                                "decorators": [],
                                "name": "typeFlow",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 13761,
                              "end": 13768,
                              "decorators": [],
                              "name": "checker",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 13769,
                            "end": 13781,
                            "decorators": [],
                            "name": "locationInfo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 13782,
                          "end": 13791,
                          "decorators": [],
                          "name": "unitIndex",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13802,
                    "end": 13912,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13806,
                        "end": 13911,
                        "id": {
                          "type": "Identifier",
                          "start": 13806,
                          "end": 13812,
                          "decorators": [],
                          "name": "locals",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13815,
                          "end": 13911,
                          "callee": {
                            "type": "Identifier",
                            "start": 13819,
                            "end": 13837,
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 13838,
                              "end": 13849,
                              "decorators": [],
                              "name": "funcMembers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 13851,
                              "end": 13869,
                              "decorators": [],
                              "name": "ambientFuncMembers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 13871,
                              "end": 13875,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "start": 13877,
                              "end": 13881,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Identifier",
                              "start": 13883,
                              "end": 13894,
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 13896,
                              "end": 13910,
                              "decorators": [],
                              "name": "localContainer",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 13921,
                    "end": 14034,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 13925,
                        "end": 14033,
                        "id": {
                          "type": "Identifier",
                          "start": 13925,
                          "end": 13932,
                          "decorators": [],
                          "name": "statics",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 13935,
                          "end": 14033,
                          "callee": {
                            "type": "Identifier",
                            "start": 13939,
                            "end": 13957,
                            "decorators": [],
                            "name": "SymbolScopeBuilder",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 13958,
                              "end": 13975,
                              "decorators": [],
                              "name": "funcStaticMembers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 13977,
                              "end": 14001,
                              "decorators": [],
                              "name": "ambientFuncStaticMembers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 14003,
                              "end": 14007,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "start": 14009,
                              "end": 14013,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Identifier",
                              "start": 14015,
                              "end": 14026,
                              "decorators": [],
                              "name": "parentScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 14028,
                              "end": 14032,
                              "value": null,
                              "raw": "null"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 14044,
                    "end": 14181,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 14048,
                      "end": 14101,
                      "left": {
                        "type": "MemberExpression",
                        "start": 14048,
                        "end": 14070,
                        "object": {
                          "type": "Identifier",
                          "start": 14048,
                          "end": 14056,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 14057,
                          "end": 14070,
                          "decorators": [],
                          "name": "isConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 14074,
                        "end": 14101,
                        "object": {
                          "type": "MemberExpression",
                          "start": 14074,
                          "end": 14092,
                          "object": {
                            "type": "Identifier",
                            "start": 14074,
                            "end": 14081,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 14082,
                            "end": 14092,
                            "decorators": [],
                            "name": "scopeChain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 14093,
                          "end": 14101,
                          "decorators": [],
                          "name": "thisType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 14103,
                      "end": 14181,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 14117,
                          "end": 14171,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 14117,
                            "end": 14170,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 14117,
                              "end": 14161,
                              "object": {
                                "type": "MemberExpression",
                                "start": 14117,
                                "end": 14144,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 14117,
                                  "end": 14135,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 14117,
                                    "end": 14124,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 14125,
                                    "end": 14135,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 14136,
                                  "end": 14144,
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 14145,
                                "end": 14161,
                                "decorators": [],
                                "name": "constructorScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 14164,
                              "end": 14170,
                              "decorators": [],
                              "name": "locals",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 14810,
                    "end": 14839,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 14810,
                      "end": 14838,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 14810,
                        "end": 14826,
                        "object": {
                          "type": "Identifier",
                          "start": 14810,
                          "end": 14818,
                          "decorators": [],
                          "name": "funcDecl",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 14819,
                          "end": 14826,
                          "decorators": [],
                          "name": "symbols",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 14829,
                        "end": 14838,
                        "decorators": [],
                        "name": "funcTable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 14849,
                    "end": 16501,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 14853,
                      "end": 14876,
                      "operator": "!",
                      "argument": {
                        "type": "CallExpression",
                        "start": 14854,
                        "end": 14876,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 14854,
                          "end": 14874,
                          "object": {
                            "type": "Identifier",
                            "start": 14854,
                            "end": 14862,
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 14863,
                            "end": 14874,
                            "decorators": [],
                            "name": "isSpecialFn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 14878,
                      "end": 16501,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 14892,
                          "end": 14918,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 14896,
                              "end": 14917,
                              "id": {
                                "type": "Identifier",
                                "start": 14896,
                                "end": 14901,
                                "decorators": [],
                                "name": "group",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 14904,
                                "end": 14917,
                                "object": {
                                  "type": "Identifier",
                                  "start": 14904,
                                  "end": 14912,
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 14913,
                                  "end": 14917,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 14931,
                          "end": 14966,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 14935,
                              "end": 14965,
                              "id": {
                                "type": "Identifier",
                                "start": 14935,
                                "end": 14944,
                                "decorators": [],
                                "name": "signature",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 14947,
                                "end": 14965,
                                "object": {
                                  "type": "Identifier",
                                  "start": 14947,
                                  "end": 14955,
                                  "decorators": [],
                                  "name": "funcDecl",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 14956,
                                  "end": 14965,
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 14980,
                          "end": 15216,
                          "test": {
                            "type": "UnaryExpression",
                            "start": 14984,
                            "end": 15007,
                            "operator": "!",
                            "argument": {
                              "type": "MemberExpression",
                              "start": 14985,
                              "end": 15007,
                              "object": {
                                "type": "Identifier",
                                "start": 14985,
                                "end": 14993,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 14994,
                                "end": 15007,
                                "decorators": [],
                                "name": "isConstructor",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "prefix": true
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 15009,
                            "end": 15216,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 15027,
                                "end": 15057,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 15027,
                                  "end": 15056,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 15027,
                                    "end": 15047,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15027,
                                      "end": 15032,
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15033,
                                      "end": 15047,
                                      "decorators": [],
                                      "name": "containedScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 15050,
                                    "end": 15056,
                                    "decorators": [],
                                    "name": "locals",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 15074,
                                "end": 15106,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 15074,
                                  "end": 15105,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 15074,
                                    "end": 15090,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15074,
                                      "end": 15080,
                                      "decorators": [],
                                      "name": "locals",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15081,
                                      "end": 15090,
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 15093,
                                    "end": 15105,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15093,
                                      "end": 15098,
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15099,
                                      "end": 15105,
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 15124,
                                "end": 15152,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 15124,
                                  "end": 15151,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 15124,
                                    "end": 15141,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15124,
                                      "end": 15129,
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15130,
                                      "end": 15141,
                                      "decorators": [],
                                      "name": "memberScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 15144,
                                    "end": 15151,
                                    "decorators": [],
                                    "name": "statics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 15169,
                                "end": 15202,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 15169,
                                  "end": 15201,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 15169,
                                    "end": 15186,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15169,
                                      "end": 15176,
                                      "decorators": [],
                                      "name": "statics",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15177,
                                      "end": 15186,
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 15189,
                                    "end": 15201,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15189,
                                      "end": 15194,
                                      "decorators": [],
                                      "name": "group",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15195,
                                      "end": 15201,
                                      "decorators": [],
                                      "name": "symbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 15229,
                          "end": 15276,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 15229,
                            "end": 15275,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 15229,
                              "end": 15250,
                              "object": {
                                "type": "Identifier",
                                "start": 15229,
                                "end": 15237,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 15238,
                                "end": 15250,
                                "decorators": [],
                                "name": "enclosingFnc",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 15253,
                              "end": 15275,
                              "object": {
                                "type": "MemberExpression",
                                "start": 15253,
                                "end": 15271,
                                "object": {
                                  "type": "Identifier",
                                  "start": 15253,
                                  "end": 15260,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 15261,
                                  "end": 15271,
                                  "decorators": [],
                                  "name": "scopeChain",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 15272,
                                "end": 15275,
                                "decorators": [],
                                "name": "fnc",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 15289,
                          "end": 15381,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 15289,
                            "end": 15380,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 15289,
                              "end": 15308,
                              "object": {
                                "type": "Identifier",
                                "start": 15289,
                                "end": 15294,
                                "decorators": [],
                                "name": "group",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 15295,
                                "end": 15308,
                                "decorators": [],
                                "name": "enclosingType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "start": 15311,
                              "end": 15380,
                              "test": {
                                "type": "Identifier",
                                "start": 15311,
                                "end": 15319,
                                "decorators": [],
                                "name": "isStatic",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "start": 15322,
                                "end": 15350,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 15322,
                                  "end": 15340,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 15322,
                                    "end": 15329,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 15330,
                                    "end": 15340,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 15341,
                                  "end": 15350,
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "alternate": {
                                "type": "MemberExpression",
                                "start": 15353,
                                "end": 15380,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 15353,
                                  "end": 15371,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 15353,
                                    "end": 15360,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 15361,
                                    "end": 15371,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 15372,
                                  "end": 15380,
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 15440,
                          "end": 15480,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 15444,
                              "end": 15479,
                              "id": {
                                "type": "Identifier",
                                "start": 15444,
                                "end": 15449,
                                "decorators": [],
                                "name": "fgSym",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "TSTypeAssertion",
                                "start": 15452,
                                "end": 15479,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 15453,
                                  "end": 15463,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 15453,
                                    "end": 15463,
                                    "decorators": [],
                                    "name": "TypeSymbol",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 15464,
                                  "end": 15479,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 15464,
                                    "end": 15472,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 15464,
                                      "end": 15467,
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15468,
                                      "end": 15472,
                                      "decorators": [],
                                      "name": "type",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 15473,
                                    "end": 15479,
                                    "decorators": [],
                                    "name": "symbol",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 15493,
                          "end": 15906,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 15497,
                            "end": 15573,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 15498,
                              "end": 15555,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 15499,
                                "end": 15537,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 15499,
                                  "end": 15516,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 15499,
                                    "end": 15507,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 15508,
                                    "end": 15516,
                                    "decorators": [],
                                    "name": "fncFlags",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "&",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 15519,
                                  "end": 15537,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 15519,
                                    "end": 15527,
                                    "decorators": [],
                                    "name": "FncFlags",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 15528,
                                    "end": 15537,
                                    "decorators": [],
                                    "name": "Signature",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "start": 15542,
                                "end": 15555,
                                "object": {
                                  "type": "Identifier",
                                  "start": 15542,
                                  "end": 15550,
                                  "decorators": [],
                                  "name": "FncFlags",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 15551,
                                  "end": 15555,
                                  "decorators": [],
                                  "name": "None",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 15560,
                              "end": 15573,
                              "object": {
                                "type": "Identifier",
                                "start": 15560,
                                "end": 15568,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 15569,
                                "end": 15573,
                                "decorators": [],
                                "name": "vars",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 15575,
                            "end": 15906,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 15593,
                                "end": 15729,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 15593,
                                  "end": 15728,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 15593,
                                    "end": 15628,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 15593,
                                      "end": 15609,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 15593,
                                        "end": 15600,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 15601,
                                        "end": 15609,
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15610,
                                      "end": 15628,
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 15629,
                                      "end": 15635,
                                      "decorators": [],
                                      "name": "locals",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 15637,
                                      "end": 15642,
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "start": 15644,
                                      "end": 15657,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 15644,
                                        "end": 15652,
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 15653,
                                        "end": 15657,
                                        "decorators": [],
                                        "name": "vars",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 15711,
                                      "end": 15720,
                                      "decorators": [],
                                      "name": "funcTable",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 15722,
                                      "end": 15727,
                                      "value": false,
                                      "raw": "false"
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 15746,
                                "end": 15892,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 15746,
                                  "end": 15891,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 15746,
                                    "end": 15781,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 15746,
                                      "end": 15762,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 15746,
                                        "end": 15753,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 15754,
                                        "end": 15762,
                                        "decorators": [],
                                        "name": "typeFlow",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 15763,
                                      "end": 15781,
                                      "decorators": [],
                                      "name": "addLocalsFromScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 15782,
                                      "end": 15789,
                                      "decorators": [],
                                      "name": "statics",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 15791,
                                      "end": 15796,
                                      "decorators": [],
                                      "name": "fgSym",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "start": 15798,
                                      "end": 15814,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 15798,
                                        "end": 15806,
                                        "decorators": [],
                                        "name": "funcDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 15807,
                                        "end": 15814,
                                        "decorators": [],
                                        "name": "statics",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 15868,
                                      "end": 15883,
                                      "decorators": [],
                                      "name": "funcStaticTable",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 15885,
                                      "end": 15890,
                                      "value": false,
                                      "raw": "false"
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 15919,
                          "end": 16327,
                          "test": {
                            "type": "MemberExpression",
                            "start": 15923,
                            "end": 15943,
                            "object": {
                              "type": "Identifier",
                              "start": 15923,
                              "end": 15932,
                              "decorators": [],
                              "name": "signature",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 15933,
                              "end": 15943,
                              "decorators": [],
                              "name": "parameters",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 15945,
                            "end": 16327,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 15963,
                                "end": 16001,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 15967,
                                    "end": 16000,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 15967,
                                      "end": 15970,
                                      "decorators": [],
                                      "name": "len",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 15973,
                                      "end": 16000,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 15973,
                                        "end": 15993,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 15973,
                                          "end": 15982,
                                          "decorators": [],
                                          "name": "signature",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 15983,
                                          "end": 15993,
                                          "decorators": [],
                                          "name": "parameters",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 15994,
                                        "end": 16000,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "ForStatement",
                                "start": 16018,
                                "end": 16313,
                                "init": {
                                  "type": "VariableDeclaration",
                                  "start": 16023,
                                  "end": 16032,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 16027,
                                      "end": 16032,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 16027,
                                        "end": 16028,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "start": 16031,
                                        "end": 16032,
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "declare": false
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 16034,
                                  "end": 16041,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 16034,
                                    "end": 16035,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 16038,
                                    "end": 16041,
                                    "decorators": [],
                                    "name": "len",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "update": {
                                  "type": "UpdateExpression",
                                  "start": 16043,
                                  "end": 16046,
                                  "operator": "++",
                                  "prefix": false,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 16043,
                                    "end": 16044,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 16048,
                                  "end": 16313,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 16070,
                                      "end": 16126,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 16074,
                                          "end": 16125,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 16074,
                                            "end": 16099,
                                            "decorators": [],
                                            "name": "paramSym",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 16082,
                                              "end": 16099,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 16084,
                                                "end": 16099,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 16084,
                                                  "end": 16099,
                                                  "decorators": [],
                                                  "name": "ParameterSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "start": 16102,
                                            "end": 16125,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 16102,
                                              "end": 16122,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 16102,
                                                "end": 16111,
                                                "decorators": [],
                                                "name": "signature",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 16112,
                                                "end": 16122,
                                                "decorators": [],
                                                "name": "parameters",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 16123,
                                              "end": 16124,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": true
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 16147,
                                      "end": 16295,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 16147,
                                        "end": 16294,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 16147,
                                          "end": 16187,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 16147,
                                            "end": 16171,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 16147,
                                              "end": 16163,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 16147,
                                                "end": 16154,
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 16155,
                                                "end": 16163,
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 16164,
                                              "end": 16171,
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 16172,
                                            "end": 16187,
                                            "decorators": [],
                                            "name": "resolveTypeLink",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 16188,
                                            "end": 16194,
                                            "decorators": [],
                                            "name": "locals",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "start": 16260,
                                            "end": 16287,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 16260,
                                              "end": 16278,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 16260,
                                                "end": 16268,
                                                "decorators": [],
                                                "name": "paramSym",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 16269,
                                                "end": 16278,
                                                "decorators": [],
                                                "name": "parameter",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 16279,
                                              "end": 16287,
                                              "decorators": [],
                                              "name": "typeLink",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          {
                                            "type": "Literal",
                                            "start": 16289,
                                            "end": 16293,
                                            "value": true,
                                            "raw": "true"
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 16340,
                          "end": 16491,
                          "expression": {
                            "type": "CallExpression",
                            "start": 16340,
                            "end": 16490,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 16340,
                              "end": 16380,
                              "object": {
                                "type": "MemberExpression",
                                "start": 16340,
                                "end": 16364,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 16340,
                                  "end": 16356,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 16340,
                                    "end": 16347,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 16348,
                                    "end": 16356,
                                    "decorators": [],
                                    "name": "typeFlow",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 16357,
                                  "end": 16364,
                                  "decorators": [],
                                  "name": "checker",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 16365,
                                "end": 16380,
                                "decorators": [],
                                "name": "resolveTypeLink",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 16381,
                                "end": 16387,
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "MemberExpression",
                                "start": 16389,
                                "end": 16409,
                                "object": {
                                  "type": "Identifier",
                                  "start": 16389,
                                  "end": 16398,
                                  "decorators": [],
                                  "name": "signature",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 16399,
                                  "end": 16409,
                                  "decorators": [],
                                  "name": "returnType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "CallExpression",
                                "start": 16467,
                                "end": 16489,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 16467,
                                  "end": 16487,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 16467,
                                    "end": 16475,
                                    "decorators": [],
                                    "name": "funcDecl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 16476,
                                    "end": 16487,
                                    "decorators": [],
                                    "name": "isSignature",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 16511,
                    "end": 16817,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 16515,
                      "end": 16590,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 16515,
                        "end": 16538,
                        "operator": "!",
                        "argument": {
                          "type": "MemberExpression",
                          "start": 16516,
                          "end": 16538,
                          "object": {
                            "type": "Identifier",
                            "start": 16516,
                            "end": 16524,
                            "decorators": [],
                            "name": "funcDecl",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 16525,
                            "end": 16538,
                            "decorators": [],
                            "name": "isConstructor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "prefix": true
                      },
                      "operator": "||",
                      "right": {
                        "type": "CallExpression",
                        "start": 16542,
                        "end": 16590,
                        "callee": {
                          "type": "Identifier",
                          "start": 16542,
                          "end": 16549,
                          "decorators": [],
                          "name": "hasFlag",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 16550,
                            "end": 16567,
                            "object": {
                              "type": "Identifier",
                              "start": 16550,
                              "end": 16558,
                              "decorators": [],
                              "name": "funcDecl",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 16559,
                              "end": 16567,
                              "decorators": [],
                              "name": "fncFlags",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 16569,
                            "end": 16589,
                            "object": {
                              "type": "Identifier",
                              "start": 16569,
                              "end": 16577,
                              "decorators": [],
                              "name": "FncFlags",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 16578,
                              "end": 16589,
                              "decorators": [],
                              "name": "ClassMethod",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 16592,
                      "end": 16817,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 16606,
                          "end": 16735,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 16610,
                              "end": 16734,
                              "id": {
                                "type": "Identifier",
                                "start": 16610,
                                "end": 16618,
                                "decorators": [],
                                "name": "thisType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ConditionalExpression",
                                "start": 16621,
                                "end": 16734,
                                "test": {
                                  "type": "LogicalExpression",
                                  "start": 16622,
                                  "end": 16696,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 16622,
                                    "end": 16644,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 16622,
                                      "end": 16630,
                                      "decorators": [],
                                      "name": "funcDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 16631,
                                      "end": 16644,
                                      "decorators": [],
                                      "name": "isConstructor",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 16648,
                                    "end": 16696,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 16648,
                                      "end": 16655,
                                      "decorators": [],
                                      "name": "hasFlag",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 16656,
                                        "end": 16673,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 16656,
                                          "end": 16664,
                                          "decorators": [],
                                          "name": "funcDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 16665,
                                          "end": 16673,
                                          "decorators": [],
                                          "name": "fncFlags",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "start": 16675,
                                        "end": 16695,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 16675,
                                          "end": 16683,
                                          "decorators": [],
                                          "name": "FncFlags",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 16684,
                                          "end": 16695,
                                          "decorators": [],
                                          "name": "ClassMethod",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    ],
                                    "optional": false
                                  }
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "start": 16700,
                                  "end": 16727,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 16700,
                                    "end": 16718,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 16700,
                                      "end": 16707,
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 16708,
                                      "end": 16718,
                                      "decorators": [],
                                      "name": "scopeChain",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 16719,
                                    "end": 16727,
                                    "decorators": [],
                                    "name": "thisType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "start": 16730,
                                  "end": 16734,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 16748,
                          "end": 16807,
                          "expression": {
                            "type": "CallExpression",
                            "start": 16748,
                            "end": 16806,
                            "callee": {
                              "type": "Identifier",
                              "start": 16748,
                              "end": 16763,
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 16764,
                                "end": 16770,
                                "decorators": [],
                                "name": "locals",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 16772,
                                "end": 16779,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 16781,
                                "end": 16789,
                                "decorators": [],
                                "name": "thisType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Literal",
                                "start": 16791,
                                "end": 16795,
                                "value": null,
                                "raw": "null"
                              },
                              {
                                "type": "Identifier",
                                "start": 16797,
                                "end": 16805,
                                "decorators": [],
                                "name": "funcDecl",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 16829,
            "end": 17570,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 16836,
              "end": 17570,
              "id": {
                "type": "Identifier",
                "start": 16845,
                "end": 16865,
                "decorators": [],
                "name": "preAssignCatchScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 16866,
                  "end": 16874,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 16869,
                    "end": 16874,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 16871,
                      "end": 16874,
                      "typeName": {
                        "type": "Identifier",
                        "start": 16871,
                        "end": 16874,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 16876,
                  "end": 16903,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 16883,
                    "end": 16903,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 16885,
                      "end": 16903,
                      "typeName": {
                        "type": "Identifier",
                        "start": 16885,
                        "end": 16903,
                        "decorators": [],
                        "name": "AssignScopeContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 16905,
                "end": 17570,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 16915,
                    "end": 16943,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 16919,
                        "end": 16942,
                        "id": {
                          "type": "Identifier",
                          "start": 16919,
                          "end": 16929,
                          "decorators": [],
                          "name": "catchBlock",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 16932,
                          "end": 16942,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16933,
                            "end": 16938,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16933,
                              "end": 16938,
                              "decorators": [],
                              "name": "Catch",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 16939,
                            "end": 16942,
                            "decorators": [],
                            "name": "ast",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 16952,
                    "end": 17564,
                    "test": {
                      "type": "MemberExpression",
                      "start": 16956,
                      "end": 16972,
                      "object": {
                        "type": "Identifier",
                        "start": 16956,
                        "end": 16966,
                        "decorators": [],
                        "name": "catchBlock",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 16967,
                        "end": 16972,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 16974,
                      "end": 17564,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 16988,
                          "end": 17094,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 16992,
                              "end": 17093,
                              "id": {
                                "type": "Identifier",
                                "start": 16992,
                                "end": 17002,
                                "decorators": [],
                                "name": "catchTable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 17005,
                                "end": 17093,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 17009,
                                  "end": 17022,
                                  "decorators": [],
                                  "name": "ScopedMembers",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "NewExpression",
                                    "start": 17023,
                                    "end": 17092,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 17027,
                                      "end": 17046,
                                      "decorators": [],
                                      "name": "DualStringHashTable",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "NewExpression",
                                        "start": 17047,
                                        "end": 17068,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 17051,
                                          "end": 17066,
                                          "decorators": [],
                                          "name": "StringHashTable",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      },
                                      {
                                        "type": "NewExpression",
                                        "start": 17070,
                                        "end": 17091,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 17074,
                                          "end": 17089,
                                          "decorators": [],
                                          "name": "StringHashTable",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 17183,
                          "end": 17367,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 17187,
                              "end": 17366,
                              "id": {
                                "type": "Identifier",
                                "start": 17187,
                                "end": 17198,
                                "decorators": [],
                                "name": "catchLocals",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 17201,
                                "end": 17366,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 17205,
                                  "end": 17223,
                                  "decorators": [],
                                  "name": "SymbolScopeBuilder",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 17224,
                                    "end": 17234,
                                    "decorators": [],
                                    "name": "catchTable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 17236,
                                    "end": 17240,
                                    "value": null,
                                    "raw": "null"
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 17242,
                                    "end": 17246,
                                    "value": null,
                                    "raw": "null"
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 17248,
                                    "end": 17252,
                                    "value": null,
                                    "raw": "null"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 17254,
                                    "end": 17278,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 17254,
                                      "end": 17272,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 17254,
                                        "end": 17261,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 17262,
                                        "end": 17272,
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 17273,
                                      "end": 17278,
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 17331,
                                    "end": 17365,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 17331,
                                      "end": 17355,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 17331,
                                        "end": 17349,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 17331,
                                          "end": 17338,
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 17339,
                                          "end": 17349,
                                          "decorators": [],
                                          "name": "scopeChain",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 17350,
                                        "end": 17355,
                                        "decorators": [],
                                        "name": "scope",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 17356,
                                      "end": 17365,
                                      "decorators": [],
                                      "name": "container",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 17380,
                          "end": 17420,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 17380,
                            "end": 17419,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 17380,
                              "end": 17405,
                              "object": {
                                "type": "Identifier",
                                "start": 17380,
                                "end": 17390,
                                "decorators": [],
                                "name": "catchBlock",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 17391,
                                "end": 17405,
                                "decorators": [],
                                "name": "containedScope",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 17408,
                              "end": 17419,
                              "decorators": [],
                              "name": "catchLocals",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 17433,
                          "end": 17554,
                          "expression": {
                            "type": "CallExpression",
                            "start": 17433,
                            "end": 17553,
                            "callee": {
                              "type": "Identifier",
                              "start": 17433,
                              "end": 17448,
                              "decorators": [],
                              "name": "pushAssignScope",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 17449,
                                "end": 17460,
                                "decorators": [],
                                "name": "catchLocals",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 17462,
                                "end": 17469,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "MemberExpression",
                                "start": 17471,
                                "end": 17498,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 17471,
                                  "end": 17489,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 17471,
                                    "end": 17478,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 17479,
                                    "end": 17489,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 17490,
                                  "end": 17498,
                                  "decorators": [],
                                  "name": "thisType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 17500,
                                "end": 17528,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 17500,
                                  "end": 17518,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 17500,
                                    "end": 17507,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 17508,
                                    "end": 17518,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 17519,
                                  "end": 17528,
                                  "decorators": [],
                                  "name": "classType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 17530,
                                "end": 17552,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 17530,
                                  "end": 17548,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 17530,
                                    "end": 17537,
                                    "decorators": [],
                                    "name": "context",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 17538,
                                    "end": 17548,
                                    "decorators": [],
                                    "name": "scopeChain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 17549,
                                  "end": 17552,
                                  "decorators": [],
                                  "name": "fnc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 17576,
            "end": 18866,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 17583,
              "end": 18866,
              "id": {
                "type": "Identifier",
                "start": 17592,
                "end": 17607,
                "decorators": [],
                "name": "preAssignScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17608,
                  "end": 17616,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 17611,
                    "end": 17616,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 17613,
                      "end": 17616,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17613,
                        "end": 17616,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 17618,
                  "end": 17629,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 17624,
                    "end": 17629,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 17626,
                      "end": 17629,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17626,
                        "end": 17629,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 17631,
                  "end": 17649,
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 17637,
                    "end": 17649,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 17639,
                      "end": 17649,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17639,
                        "end": 17649,
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 17651,
                "end": 18866,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 17661,
                    "end": 17707,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 17665,
                        "end": 17706,
                        "id": {
                          "type": "Identifier",
                          "start": 17665,
                          "end": 17691,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 17672,
                            "end": 17691,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 17673,
                              "end": 17691,
                              "typeName": {
                                "type": "Identifier",
                                "start": 17673,
                                "end": 17691,
                                "decorators": [],
                                "name": "AssignScopeContext",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 17694,
                          "end": 17706,
                          "object": {
                            "type": "Identifier",
                            "start": 17694,
                            "end": 17700,
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 17701,
                            "end": 17706,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 17716,
                    "end": 17730,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 17720,
                        "end": 17729,
                        "id": {
                          "type": "Identifier",
                          "start": 17720,
                          "end": 17722,
                          "decorators": [],
                          "name": "go",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 17725,
                          "end": 17729,
                          "value": true,
                          "raw": "true"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 17740,
                    "end": 18800,
                    "test": {
                      "type": "Identifier",
                      "start": 17744,
                      "end": 17747,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 17749,
                      "end": 18800,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 17763,
                          "end": 18790,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 17767,
                            "end": 17796,
                            "left": {
                              "type": "MemberExpression",
                              "start": 17767,
                              "end": 17779,
                              "object": {
                                "type": "Identifier",
                                "start": 17767,
                                "end": 17770,
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 17771,
                                "end": 17779,
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "==",
                            "right": {
                              "type": "MemberExpression",
                              "start": 17783,
                              "end": 17796,
                              "object": {
                                "type": "Identifier",
                                "start": 17783,
                                "end": 17791,
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 17792,
                                "end": 17796,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 17798,
                            "end": 17918,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 17816,
                                "end": 17840,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 17820,
                                    "end": 17839,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 17820,
                                      "end": 17824,
                                      "decorators": [],
                                      "name": "list",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "TSTypeAssertion",
                                      "start": 17827,
                                      "end": 17839,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 17828,
                                        "end": 17835,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 17828,
                                          "end": 17835,
                                          "decorators": [],
                                          "name": "ASTList",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 17836,
                                        "end": 17839,
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 17857,
                                "end": 17904,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 17857,
                                  "end": 17903,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 17857,
                                    "end": 17876,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 17857,
                                      "end": 17861,
                                      "decorators": [],
                                      "name": "list",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 17862,
                                      "end": 17876,
                                      "decorators": [],
                                      "name": "enclosingScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 17879,
                                    "end": 17903,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 17879,
                                      "end": 17897,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 17879,
                                        "end": 17886,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 17887,
                                        "end": 17897,
                                        "decorators": [],
                                        "name": "scopeChain",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 17898,
                                      "end": 17903,
                                      "decorators": [],
                                      "name": "scope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "start": 17936,
                            "end": 18790,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 17940,
                              "end": 17982,
                              "left": {
                                "type": "MemberExpression",
                                "start": 17940,
                                "end": 17952,
                                "object": {
                                  "type": "Identifier",
                                  "start": 17940,
                                  "end": 17943,
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 17944,
                                  "end": 17952,
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "start": 17956,
                                "end": 17982,
                                "object": {
                                  "type": "Identifier",
                                  "start": 17956,
                                  "end": 17964,
                                  "decorators": [],
                                  "name": "NodeType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 17965,
                                  "end": 17982,
                                  "decorators": [],
                                  "name": "ModuleDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 17984,
                              "end": 18052,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 18002,
                                  "end": 18038,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 18002,
                                    "end": 18037,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 18002,
                                      "end": 18023,
                                      "decorators": [],
                                      "name": "preAssignModuleScopes",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 18024,
                                        "end": 18027,
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 18029,
                                        "end": 18036,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "start": 18070,
                              "end": 18790,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 18074,
                                "end": 18115,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 18074,
                                  "end": 18086,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 18074,
                                    "end": 18077,
                                    "decorators": [],
                                    "name": "ast",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 18078,
                                    "end": 18086,
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 18090,
                                  "end": 18115,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 18090,
                                    "end": 18098,
                                    "decorators": [],
                                    "name": "NodeType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 18099,
                                    "end": 18115,
                                    "decorators": [],
                                    "name": "ClassDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 18117,
                                "end": 18184,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 18135,
                                    "end": 18170,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 18135,
                                      "end": 18169,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 18135,
                                        "end": 18155,
                                        "decorators": [],
                                        "name": "preAssignClassScopes",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 18156,
                                          "end": 18159,
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 18161,
                                          "end": 18168,
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "start": 18202,
                                "end": 18790,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 18206,
                                  "end": 18251,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 18206,
                                    "end": 18218,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 18206,
                                      "end": 18209,
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 18210,
                                      "end": 18218,
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 18222,
                                    "end": 18251,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 18222,
                                      "end": 18230,
                                      "decorators": [],
                                      "name": "NodeType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 18231,
                                      "end": 18251,
                                      "decorators": [],
                                      "name": "InterfaceDeclaration",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 18253,
                                  "end": 18324,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 18271,
                                      "end": 18310,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 18271,
                                        "end": 18309,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 18271,
                                          "end": 18295,
                                          "decorators": [],
                                          "name": "preAssignInterfaceScopes",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 18296,
                                            "end": 18299,
                                            "decorators": [],
                                            "name": "ast",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 18301,
                                            "end": 18308,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "start": 18342,
                                  "end": 18790,
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 18346,
                                    "end": 18375,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 18346,
                                      "end": 18358,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 18346,
                                        "end": 18349,
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 18350,
                                        "end": 18358,
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 18362,
                                      "end": 18375,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 18362,
                                        "end": 18370,
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 18371,
                                        "end": 18375,
                                        "decorators": [],
                                        "name": "With",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 18377,
                                    "end": 18443,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 18395,
                                        "end": 18429,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 18395,
                                          "end": 18428,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 18395,
                                            "end": 18414,
                                            "decorators": [],
                                            "name": "preAssignWithScopes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 18415,
                                              "end": 18418,
                                              "decorators": [],
                                              "name": "ast",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 18420,
                                              "end": 18427,
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "start": 18461,
                                    "end": 18790,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 18465,
                                      "end": 18498,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 18465,
                                        "end": 18477,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 18465,
                                          "end": 18468,
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 18469,
                                          "end": 18477,
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 18481,
                                        "end": 18498,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 18481,
                                          "end": 18489,
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 18490,
                                          "end": 18498,
                                          "decorators": [],
                                          "name": "FuncDecl",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 18500,
                                      "end": 18570,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 18518,
                                          "end": 18556,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 18518,
                                            "end": 18555,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 18518,
                                              "end": 18541,
                                              "decorators": [],
                                              "name": "preAssignFuncDeclScopes",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 18542,
                                                "end": 18545,
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 18547,
                                                "end": 18554,
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "directive": null
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "IfStatement",
                                      "start": 18588,
                                      "end": 18790,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 18592,
                                        "end": 18622,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 18592,
                                          "end": 18604,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 18592,
                                            "end": 18595,
                                            "decorators": [],
                                            "name": "ast",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 18596,
                                            "end": 18604,
                                            "decorators": [],
                                            "name": "nodeType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 18608,
                                          "end": 18622,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 18608,
                                            "end": 18616,
                                            "decorators": [],
                                            "name": "NodeType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 18617,
                                            "end": 18622,
                                            "decorators": [],
                                            "name": "Catch",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 18624,
                                        "end": 18691,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 18642,
                                            "end": 18677,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 18642,
                                              "end": 18676,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 18642,
                                                "end": 18662,
                                                "decorators": [],
                                                "name": "preAssignCatchScopes",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 18663,
                                                  "end": 18666,
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "start": 18668,
                                                  "end": 18675,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "IfStatement",
                                        "start": 18709,
                                        "end": 18790,
                                        "test": {
                                          "type": "BinaryExpression",
                                          "start": 18713,
                                          "end": 18745,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 18713,
                                            "end": 18725,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 18713,
                                              "end": 18716,
                                              "decorators": [],
                                              "name": "ast",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 18717,
                                              "end": 18725,
                                              "decorators": [],
                                              "name": "nodeType",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "==",
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 18729,
                                            "end": 18745,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 18729,
                                              "end": 18737,
                                              "decorators": [],
                                              "name": "NodeType",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 18738,
                                              "end": 18745,
                                              "decorators": [],
                                              "name": "TypeRef",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          }
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "start": 18747,
                                          "end": 18790,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 18765,
                                              "end": 18776,
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "start": 18765,
                                                "end": 18775,
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 18765,
                                                  "end": 18767,
                                                  "decorators": [],
                                                  "name": "go",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 18770,
                                                  "end": 18775,
                                                  "value": false,
                                                  "raw": "false"
                                                }
                                              },
                                              "directive": null
                                            }
                                          ]
                                        },
                                        "alternate": null
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 18809,
                    "end": 18840,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 18809,
                      "end": 18839,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 18809,
                        "end": 18834,
                        "object": {
                          "type": "MemberExpression",
                          "start": 18809,
                          "end": 18823,
                          "object": {
                            "type": "Identifier",
                            "start": 18809,
                            "end": 18815,
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 18816,
                            "end": 18823,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 18824,
                          "end": 18834,
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 18837,
                        "end": 18839,
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 18849,
                    "end": 18860,
                    "argument": {
                      "type": "Identifier",
                      "start": 18856,
                      "end": 18859,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 18872,
            "end": 20473,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 18879,
              "end": 20473,
              "id": {
                "type": "Identifier",
                "start": 18888,
                "end": 18904,
                "decorators": [],
                "name": "postAssignScopes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18905,
                  "end": 18913,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18908,
                    "end": 18913,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 18910,
                      "end": 18913,
                      "typeName": {
                        "type": "Identifier",
                        "start": 18910,
                        "end": 18913,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 18915,
                  "end": 18926,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18921,
                    "end": 18926,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 18923,
                      "end": 18926,
                      "typeName": {
                        "type": "Identifier",
                        "start": 18923,
                        "end": 18926,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 18928,
                  "end": 18946,
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18934,
                    "end": 18946,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 18936,
                      "end": 18946,
                      "typeName": {
                        "type": "Identifier",
                        "start": 18936,
                        "end": 18946,
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 18948,
                "end": 20473,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 18958,
                    "end": 19004,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 18962,
                        "end": 19003,
                        "id": {
                          "type": "Identifier",
                          "start": 18962,
                          "end": 18988,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 18969,
                            "end": 18988,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 18970,
                              "end": 18988,
                              "typeName": {
                                "type": "Identifier",
                                "start": 18970,
                                "end": 18988,
                                "decorators": [],
                                "name": "AssignScopeContext",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 18991,
                          "end": 19003,
                          "object": {
                            "type": "Identifier",
                            "start": 18991,
                            "end": 18997,
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 18998,
                            "end": 19003,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 19013,
                    "end": 19027,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 19017,
                        "end": 19026,
                        "id": {
                          "type": "Identifier",
                          "start": 19017,
                          "end": 19019,
                          "decorators": [],
                          "name": "go",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 19022,
                          "end": 19026,
                          "value": true,
                          "raw": "true"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 19036,
                    "end": 20407,
                    "test": {
                      "type": "Identifier",
                      "start": 19040,
                      "end": 19043,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 19045,
                      "end": 20407,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 19059,
                          "end": 20397,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 19063,
                            "end": 19105,
                            "left": {
                              "type": "MemberExpression",
                              "start": 19063,
                              "end": 19075,
                              "object": {
                                "type": "Identifier",
                                "start": 19063,
                                "end": 19066,
                                "decorators": [],
                                "name": "ast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 19067,
                                "end": 19075,
                                "decorators": [],
                                "name": "nodeType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "==",
                            "right": {
                              "type": "MemberExpression",
                              "start": 19079,
                              "end": 19105,
                              "object": {
                                "type": "Identifier",
                                "start": 19079,
                                "end": 19087,
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 19088,
                                "end": 19105,
                                "decorators": [],
                                "name": "ModuleDeclaration",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 19107,
                            "end": 19458,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 19125,
                                "end": 19166,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 19129,
                                    "end": 19165,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 19129,
                                      "end": 19140,
                                      "decorators": [],
                                      "name": "prevModDecl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "TSTypeAssertion",
                                      "start": 19143,
                                      "end": 19165,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 19144,
                                        "end": 19161,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 19144,
                                          "end": 19161,
                                          "decorators": [],
                                          "name": "ModuleDeclaration",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 19162,
                                        "end": 19165,
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 19184,
                                "end": 19208,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 19184,
                                  "end": 19207,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 19184,
                                    "end": 19198,
                                    "decorators": [],
                                    "name": "popAssignScope",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 19199,
                                      "end": 19206,
                                      "decorators": [],
                                      "name": "context",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 19226,
                                "end": 19253,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 19226,
                                  "end": 19252,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 19226,
                                    "end": 19250,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 19226,
                                      "end": 19246,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 19226,
                                        "end": 19233,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 19234,
                                        "end": 19246,
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 19247,
                                      "end": 19250,
                                      "decorators": [],
                                      "name": "pop",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "directive": null
                              },
                              {
                                "type": "IfStatement",
                                "start": 19270,
                                "end": 19444,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 19274,
                                  "end": 19306,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 19274,
                                    "end": 19301,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 19274,
                                      "end": 19294,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 19274,
                                        "end": 19281,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 19282,
                                        "end": 19294,
                                        "decorators": [],
                                        "name": "modDeclChain",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 19295,
                                      "end": 19301,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": ">=",
                                  "right": {
                                    "type": "Literal",
                                    "start": 19305,
                                    "end": 19306,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 19308,
                                  "end": 19444,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 19330,
                                      "end": 19426,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 19330,
                                        "end": 19425,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 19330,
                                          "end": 19369,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 19330,
                                            "end": 19354,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 19330,
                                              "end": 19346,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 19330,
                                                "end": 19337,
                                                "decorators": [],
                                                "name": "context",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 19338,
                                                "end": 19346,
                                                "decorators": [],
                                                "name": "typeFlow",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 19347,
                                              "end": 19354,
                                              "decorators": [],
                                              "name": "checker",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 19355,
                                            "end": 19369,
                                            "decorators": [],
                                            "name": "currentModDecl",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 19372,
                                          "end": 19425,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 19372,
                                            "end": 19392,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 19372,
                                              "end": 19379,
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 19380,
                                              "end": 19392,
                                              "decorators": [],
                                              "name": "modDeclChain",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "BinaryExpression",
                                            "start": 19393,
                                            "end": 19424,
                                            "left": {
                                              "type": "MemberExpression",
                                              "start": 19393,
                                              "end": 19420,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 19393,
                                                "end": 19413,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 19393,
                                                  "end": 19400,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 19401,
                                                  "end": 19413,
                                                  "decorators": [],
                                                  "name": "modDeclChain",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 19414,
                                                "end": 19420,
                                                "decorators": [],
                                                "name": "length",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "operator": "-",
                                            "right": {
                                              "type": "Literal",
                                              "start": 19423,
                                              "end": 19424,
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "optional": false,
                                          "computed": true
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "start": 19476,
                            "end": 20397,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 19480,
                              "end": 19521,
                              "left": {
                                "type": "MemberExpression",
                                "start": 19480,
                                "end": 19492,
                                "object": {
                                  "type": "Identifier",
                                  "start": 19480,
                                  "end": 19483,
                                  "decorators": [],
                                  "name": "ast",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 19484,
                                  "end": 19492,
                                  "decorators": [],
                                  "name": "nodeType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "MemberExpression",
                                "start": 19496,
                                "end": 19521,
                                "object": {
                                  "type": "Identifier",
                                  "start": 19496,
                                  "end": 19504,
                                  "decorators": [],
                                  "name": "NodeType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 19505,
                                  "end": 19521,
                                  "decorators": [],
                                  "name": "ClassDeclaration",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 19523,
                              "end": 19579,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 19541,
                                  "end": 19565,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 19541,
                                    "end": 19564,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 19541,
                                      "end": 19555,
                                      "decorators": [],
                                      "name": "popAssignScope",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 19556,
                                        "end": 19563,
                                        "decorators": [],
                                        "name": "context",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "start": 19597,
                              "end": 20397,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 19601,
                                "end": 19646,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 19601,
                                  "end": 19613,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 19601,
                                    "end": 19604,
                                    "decorators": [],
                                    "name": "ast",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 19605,
                                    "end": 19613,
                                    "decorators": [],
                                    "name": "nodeType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 19617,
                                  "end": 19646,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 19617,
                                    "end": 19625,
                                    "decorators": [],
                                    "name": "NodeType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 19626,
                                    "end": 19646,
                                    "decorators": [],
                                    "name": "InterfaceDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 19648,
                                "end": 19704,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 19666,
                                    "end": 19690,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 19666,
                                      "end": 19689,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 19666,
                                        "end": 19680,
                                        "decorators": [],
                                        "name": "popAssignScope",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 19681,
                                          "end": 19688,
                                          "decorators": [],
                                          "name": "context",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "start": 19722,
                                "end": 20397,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 19726,
                                  "end": 19755,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 19726,
                                    "end": 19738,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 19726,
                                      "end": 19729,
                                      "decorators": [],
                                      "name": "ast",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 19730,
                                      "end": 19738,
                                      "decorators": [],
                                      "name": "nodeType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 19742,
                                    "end": 19755,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 19742,
                                      "end": 19750,
                                      "decorators": [],
                                      "name": "NodeType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 19751,
                                      "end": 19755,
                                      "decorators": [],
                                      "name": "With",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 19757,
                                  "end": 19813,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 19775,
                                      "end": 19799,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 19775,
                                        "end": 19798,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 19775,
                                          "end": 19789,
                                          "decorators": [],
                                          "name": "popAssignScope",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 19790,
                                            "end": 19797,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "start": 19831,
                                  "end": 20397,
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 19835,
                                    "end": 19868,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 19835,
                                      "end": 19847,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 19835,
                                        "end": 19838,
                                        "decorators": [],
                                        "name": "ast",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 19839,
                                        "end": 19847,
                                        "decorators": [],
                                        "name": "nodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "==",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 19851,
                                      "end": 19868,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 19851,
                                        "end": 19859,
                                        "decorators": [],
                                        "name": "NodeType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 19860,
                                        "end": 19868,
                                        "decorators": [],
                                        "name": "FuncDecl",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 19870,
                                    "end": 20119,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 19888,
                                        "end": 19917,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 19892,
                                            "end": 19916,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 19892,
                                              "end": 19900,
                                              "decorators": [],
                                              "name": "funcDecl",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "TSTypeAssertion",
                                              "start": 19903,
                                              "end": 19916,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 19904,
                                                "end": 19912,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 19904,
                                                  "end": 19912,
                                                  "decorators": [],
                                                  "name": "FuncDecl",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              },
                                              "expression": {
                                                "type": "Identifier",
                                                "start": 19913,
                                                "end": 19916,
                                                "decorators": [],
                                                "name": "ast",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      {
                                        "type": "IfStatement",
                                        "start": 19934,
                                        "end": 20105,
                                        "test": {
                                          "type": "LogicalExpression",
                                          "start": 19938,
                                          "end": 20039,
                                          "left": {
                                            "type": "LogicalExpression",
                                            "start": 19939,
                                            "end": 20014,
                                            "left": {
                                              "type": "UnaryExpression",
                                              "start": 19939,
                                              "end": 19962,
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "start": 19940,
                                                "end": 19962,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 19940,
                                                  "end": 19948,
                                                  "decorators": [],
                                                  "name": "funcDecl",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 19949,
                                                  "end": 19962,
                                                  "decorators": [],
                                                  "name": "isConstructor",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "prefix": true
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "CallExpression",
                                              "start": 19966,
                                              "end": 20014,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 19966,
                                                "end": 19973,
                                                "decorators": [],
                                                "name": "hasFlag",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "start": 19974,
                                                  "end": 19991,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 19974,
                                                    "end": 19982,
                                                    "decorators": [],
                                                    "name": "funcDecl",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 19983,
                                                    "end": 19991,
                                                    "decorators": [],
                                                    "name": "fncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                {
                                                  "type": "MemberExpression",
                                                  "start": 19993,
                                                  "end": 20013,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 19993,
                                                    "end": 20001,
                                                    "decorators": [],
                                                    "name": "FncFlags",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 20002,
                                                    "end": 20013,
                                                    "decorators": [],
                                                    "name": "ClassMethod",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                }
                                              ],
                                              "optional": false
                                            }
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "UnaryExpression",
                                            "start": 20019,
                                            "end": 20039,
                                            "operator": "!",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "start": 20020,
                                              "end": 20039,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 20020,
                                                "end": 20028,
                                                "decorators": [],
                                                "name": "funcDecl",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 20029,
                                                "end": 20039,
                                                "decorators": [],
                                                "name": "isOverload",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "prefix": true
                                          }
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "start": 20041,
                                          "end": 20105,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 20063,
                                              "end": 20087,
                                              "expression": {
                                                "type": "CallExpression",
                                                "start": 20063,
                                                "end": 20086,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 20063,
                                                  "end": 20077,
                                                  "decorators": [],
                                                  "name": "popAssignScope",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "start": 20078,
                                                    "end": 20085,
                                                    "decorators": [],
                                                    "name": "context",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                ],
                                                "optional": false
                                              },
                                              "directive": null
                                            }
                                          ]
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "start": 20137,
                                    "end": 20397,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 20141,
                                      "end": 20171,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 20141,
                                        "end": 20153,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 20141,
                                          "end": 20144,
                                          "decorators": [],
                                          "name": "ast",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 20145,
                                          "end": 20153,
                                          "decorators": [],
                                          "name": "nodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 20157,
                                        "end": 20171,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 20157,
                                          "end": 20165,
                                          "decorators": [],
                                          "name": "NodeType",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 20166,
                                          "end": 20171,
                                          "decorators": [],
                                          "name": "Catch",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 20173,
                                      "end": 20336,
                                      "body": [
                                        {
                                          "type": "VariableDeclaration",
                                          "start": 20191,
                                          "end": 20219,
                                          "kind": "var",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "start": 20195,
                                              "end": 20218,
                                              "id": {
                                                "type": "Identifier",
                                                "start": 20195,
                                                "end": 20205,
                                                "decorators": [],
                                                "name": "catchBlock",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "init": {
                                                "type": "TSTypeAssertion",
                                                "start": 20208,
                                                "end": 20218,
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "start": 20209,
                                                  "end": 20214,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 20209,
                                                    "end": 20214,
                                                    "decorators": [],
                                                    "name": "Catch",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeArguments": null
                                                },
                                                "expression": {
                                                  "type": "Identifier",
                                                  "start": 20215,
                                                  "end": 20218,
                                                  "decorators": [],
                                                  "name": "ast",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "definite": false
                                            }
                                          ],
                                          "declare": false
                                        },
                                        {
                                          "type": "IfStatement",
                                          "start": 20236,
                                          "end": 20322,
                                          "test": {
                                            "type": "MemberExpression",
                                            "start": 20240,
                                            "end": 20256,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 20240,
                                              "end": 20250,
                                              "decorators": [],
                                              "name": "catchBlock",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 20251,
                                              "end": 20256,
                                              "decorators": [],
                                              "name": "param",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "start": 20258,
                                            "end": 20322,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 20280,
                                                "end": 20304,
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "start": 20280,
                                                  "end": 20303,
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 20280,
                                                    "end": 20294,
                                                    "decorators": [],
                                                    "name": "popAssignScope",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "start": 20295,
                                                      "end": 20302,
                                                      "decorators": [],
                                                      "name": "context",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  ],
                                                  "optional": false
                                                },
                                                "directive": null
                                              }
                                            ]
                                          },
                                          "alternate": null
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "BlockStatement",
                                      "start": 20354,
                                      "end": 20397,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 20372,
                                          "end": 20383,
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "start": 20372,
                                            "end": 20382,
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "start": 20372,
                                              "end": 20374,
                                              "decorators": [],
                                              "name": "go",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "start": 20377,
                                              "end": 20382,
                                              "value": false,
                                              "raw": "false"
                                            }
                                          },
                                          "directive": null
                                        }
                                      ]
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 20416,
                    "end": 20447,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 20416,
                      "end": 20446,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 20416,
                        "end": 20441,
                        "object": {
                          "type": "MemberExpression",
                          "start": 20416,
                          "end": 20430,
                          "object": {
                            "type": "Identifier",
                            "start": 20416,
                            "end": 20422,
                            "decorators": [],
                            "name": "walker",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 20423,
                            "end": 20430,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 20431,
                          "end": 20441,
                          "decorators": [],
                          "name": "goChildren",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 20444,
                        "end": 20446,
                        "decorators": [],
                        "name": "go",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 20456,
                    "end": 20467,
                    "argument": {
                      "type": "Identifier",
                      "start": 20463,
                      "end": 20466,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
