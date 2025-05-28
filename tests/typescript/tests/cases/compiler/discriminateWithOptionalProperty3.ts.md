__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 81,
  "end": 1038,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 97,
        "end": 117,
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
            "start": 116,
            "end": 117,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 188,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 146,
        "decorators": [],
        "name": "GraphQLError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 155,
        "end": 160,
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 165,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 178,
              "decorators": [],
              "name": "originalError",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 213,
        "decorators": [],
        "name": "ExecutionArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 214,
        "end": 285,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 218,
            "end": 283,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 232,
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 240,
                  "end": 282,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 241,
                      "end": 281,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 243,
                          "end": 279,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 253,
                              "end": 269,
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 261,
                                "end": 269,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 263,
                                  "end": 269
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 270,
                            "end": 279,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 272,
                              "end": 279
                            }
                          },
                          "readonly": true,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 287,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 313,
        "decorators": [],
        "name": "ExecutionContext",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 314,
        "end": 368,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 318,
            "end": 366,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 332,
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 365,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 334,
                "end": 365,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 336,
                    "end": 363,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 337,
                        "end": 353,
                        "decorators": [],
                        "name": "variable",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 345,
                          "end": 353,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 347,
                            "end": 353
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 363,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 356,
                        "end": 363
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 370,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 396,
        "decorators": [],
        "name": "CoercedVariableValues",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 401,
        "end": 524,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 403,
            "end": 459,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 405,
                "end": 441,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 411,
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 440,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 440,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 426,
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 426,
                      "end": 440,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 427,
                          "end": 439,
                          "typeName": {
                            "type": "Identifier",
                            "start": 427,
                            "end": 439,
                            "decorators": [],
                            "name": "GraphQLError",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 442,
                "end": 457,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 449,
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 450,
                  "end": 457,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 452,
                    "end": 457
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 464,
            "end": 524,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 466,
                "end": 507,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 473,
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 473,
                  "end": 506,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 475,
                    "end": 506,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 477,
                        "end": 504,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 478,
                            "end": 494,
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 486,
                              "end": 494,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 488,
                                "end": 494
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 495,
                          "end": 504,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 497,
                            "end": 504
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 508,
                "end": 522,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 514,
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 515,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 517,
                    "end": 522
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 527,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 561,
        "decorators": [],
        "name": "getVariableValues",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 562,
          "end": 613,
          "decorators": [],
          "name": "inputs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 568,
            "end": 613,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 570,
              "end": 613,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 574,
                  "end": 611,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 584,
                      "end": 600,
                      "decorators": [],
                      "name": "variable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 592,
                        "end": 600,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 594,
                          "end": 600
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 610,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 603,
                      "end": 610
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 614,
        "end": 637,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 616,
          "end": 637,
          "typeName": {
            "type": "Identifier",
            "start": 616,
            "end": 637,
            "decorators": [],
            "name": "CoercedVariableValues",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 640,
      "end": 1038,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 647,
        "end": 1038,
        "id": {
          "type": "Identifier",
          "start": 656,
          "end": 677,
          "decorators": [],
          "name": "buildExecutionContext",
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
            "start": 681,
            "end": 700,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 685,
              "end": 700,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 687,
                "end": 700,
                "typeName": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 700,
                  "decorators": [],
                  "name": "ExecutionArgs",
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
          "start": 703,
          "end": 751,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 705,
            "end": 751,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 705,
                "end": 732,
                "typeName": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 718,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 718,
                  "end": 732,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 719,
                      "end": 731,
                      "typeName": {
                        "type": "Identifier",
                        "start": 719,
                        "end": 731,
                        "decorators": [],
                        "name": "GraphQLError",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 735,
                "end": 751,
                "typeName": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 751,
                  "decorators": [],
                  "name": "ExecutionContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 752,
          "end": 1038,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 756,
              "end": 807,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 762,
                  "end": 806,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 762,
                    "end": 799,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 764,
                        "end": 797,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 764,
                          "end": 778,
                          "decorators": [],
                          "name": "variableValues",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 780,
                          "end": 797,
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 806,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 811,
              "end": 884,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 817,
                  "end": 883,
                  "id": {
                    "type": "Identifier",
                    "start": 817,
                    "end": 838,
                    "decorators": [],
                    "name": "coercedVariableValues",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 841,
                    "end": 883,
                    "callee": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 858,
                      "decorators": [],
                      "name": "getVariableValues",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "start": 859,
                        "end": 882,
                        "left": {
                          "type": "Identifier",
                          "start": 859,
                          "end": 876,
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "??",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 880,
                          "end": 882,
                          "properties": []
                        }
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
              "type": "IfStatement",
              "start": 888,
              "end": 968,
              "test": {
                "type": "MemberExpression",
                "start": 892,
                "end": 920,
                "object": {
                  "type": "Identifier",
                  "start": 892,
                  "end": 913,
                  "decorators": [],
                  "name": "coercedVariableValues",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 914,
                  "end": 920,
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 922,
                "end": 968,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 928,
                    "end": 964,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 935,
                      "end": 963,
                      "object": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 956,
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 957,
                        "end": 963,
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 972,
              "end": 1036,
              "argument": {
                "type": "ObjectExpression",
                "start": 979,
                "end": 1035,
                "properties": [
                  {
                    "type": "Property",
                    "start": 985,
                    "end": 1030,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 985,
                      "end": 999,
                      "decorators": [],
                      "name": "variableValues",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 1001,
                      "end": 1030,
                      "object": {
                        "type": "Identifier",
                        "start": 1001,
                        "end": 1022,
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1023,
                        "end": 1030,
                        "decorators": [],
                        "name": "coerced",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
