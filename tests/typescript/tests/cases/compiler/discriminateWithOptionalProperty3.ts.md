__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 97,
            "end": 101
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 104,
            "end": 113
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "start": 116,
            "end": 117
          }
        ],
        "start": 97,
        "end": 117
      },
      "declare": false,
      "start": 81,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphQLError",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 146
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 160
      },
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
              "name": "originalError",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                },
                "typeArguments": null,
                "start": 180,
                "end": 185
              },
              "start": 178,
              "end": 185
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 165,
            "end": 186
          }
        ],
        "start": 161,
        "end": 188
      },
      "abstract": false,
      "declare": true,
      "start": 120,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 213
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 263,
                                  "end": 269
                                },
                                "start": 261,
                                "end": 269
                              },
                              "start": 253,
                              "end": 269
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 272,
                              "end": 279
                            },
                            "start": 270,
                            "end": 279
                          },
                          "readonly": true,
                          "static": false,
                          "accessibility": null,
                          "start": 243,
                          "end": 279
                        }
                      ],
                      "start": 241,
                      "end": 281
                    }
                  ],
                  "start": 240,
                  "end": 282
                },
                "start": 235,
                "end": 282
              },
              "start": 233,
              "end": 282
            },
            "accessibility": null,
            "static": false,
            "start": 218,
            "end": 283
          }
        ],
        "start": 214,
        "end": 285
      },
      "declare": false,
      "start": 190,
      "end": 285
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 313
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 332
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "variable",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 347,
                            "end": 353
                          },
                          "start": 345,
                          "end": 353
                        },
                        "start": 337,
                        "end": 353
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 356,
                        "end": 363
                      },
                      "start": 354,
                      "end": 363
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 336,
                    "end": 363
                  }
                ],
                "start": 334,
                "end": 365
              },
              "start": 332,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 318,
            "end": 366
          }
        ],
        "start": 314,
        "end": 368
      },
      "declare": false,
      "start": 287,
      "end": 368
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoercedVariableValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 396
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 411
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 426
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GraphQLError",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 427,
                            "end": 439
                          },
                          "typeArguments": null,
                          "start": 427,
                          "end": 439
                        }
                      ],
                      "start": 426,
                      "end": 440
                    },
                    "start": 413,
                    "end": 440
                  },
                  "start": 411,
                  "end": 440
                },
                "accessibility": null,
                "static": false,
                "start": 405,
                "end": 441
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 449
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 452,
                    "end": 457
                  },
                  "start": 450,
                  "end": 457
                },
                "accessibility": null,
                "static": false,
                "start": 442,
                "end": 457
              }
            ],
            "start": 403,
            "end": 459
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 473
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 488,
                                "end": 494
                              },
                              "start": 486,
                              "end": 494
                            },
                            "start": 478,
                            "end": 494
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 497,
                            "end": 504
                          },
                          "start": 495,
                          "end": 504
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 477,
                        "end": 504
                      }
                    ],
                    "start": 475,
                    "end": 506
                  },
                  "start": 473,
                  "end": 506
                },
                "accessibility": null,
                "static": false,
                "start": 466,
                "end": 507
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 514
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 517,
                    "end": 522
                  },
                  "start": 515,
                  "end": 522
                },
                "accessibility": null,
                "static": false,
                "start": 508,
                "end": 522
              }
            ],
            "start": 464,
            "end": 524
          }
        ],
        "start": 401,
        "end": 524
      },
      "declare": false,
      "start": 370,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getVariableValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 561
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inputs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "variable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 594,
                          "end": 600
                        },
                        "start": 592,
                        "end": 600
                      },
                      "start": 584,
                      "end": 600
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 603,
                      "end": 610
                    },
                    "start": 601,
                    "end": 610
                  },
                  "readonly": true,
                  "static": false,
                  "accessibility": null,
                  "start": 574,
                  "end": 611
                }
              ],
              "start": 570,
              "end": 613
            },
            "start": 568,
            "end": 613
          },
          "start": 562,
          "end": 613
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CoercedVariableValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 637
          },
          "typeArguments": null,
          "start": 616,
          "end": 637
        },
        "start": 614,
        "end": 637
      },
      "body": null,
      "expression": false,
      "start": 527,
      "end": 638
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "buildExecutionContext",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 677
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 700
                },
                "typeArguments": null,
                "start": 687,
                "end": 700
              },
              "start": 685,
              "end": 700
            },
            "start": 681,
            "end": 700
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 718
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GraphQLError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 731
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 731
                    }
                  ],
                  "start": 718,
                  "end": 732
                },
                "start": 705,
                "end": 732
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 751
                },
                "typeArguments": null,
                "start": 735,
                "end": 751
              }
            ],
            "start": 705,
            "end": 751
          },
          "start": 703,
          "end": 751
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 778
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 780,
                          "end": 797
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 764,
                        "end": 797
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 799
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 806
                  },
                  "definite": false,
                  "start": 762,
                  "end": 806
                }
              ],
              "declare": false,
              "start": 756,
              "end": 807
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "coercedVariableValues",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 817,
                    "end": 838
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getVariableValues",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 858
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 876
                        },
                        "operator": "??",
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 880,
                          "end": 882
                        },
                        "start": 859,
                        "end": 882
                      }
                    ],
                    "optional": false,
                    "start": 841,
                    "end": 883
                  },
                  "definite": false,
                  "start": 817,
                  "end": 883
                }
              ],
              "declare": false,
              "start": 811,
              "end": 884
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coercedVariableValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 892,
                  "end": 913
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 914,
                  "end": 920
                },
                "optional": false,
                "computed": false,
                "start": 892,
                "end": 920
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 956
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 963
                      },
                      "optional": false,
                      "computed": false,
                      "start": 935,
                      "end": 963
                    },
                    "start": 928,
                    "end": 964
                  }
                ],
                "start": 922,
                "end": 968
              },
              "alternate": null,
              "start": 888,
              "end": 968
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "variableValues",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 999
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1001,
                        "end": 1022
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coerced",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1023,
                        "end": 1030
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1001,
                      "end": 1030
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 985,
                    "end": 1030
                  }
                ],
                "start": 979,
                "end": 1035
              },
              "start": 972,
              "end": 1036
            }
          ],
          "start": 752,
          "end": 1038
        },
        "expression": false,
        "start": 647,
        "end": 1038
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 640,
      "end": 1038
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 81,
  "end": 1038
}
```
