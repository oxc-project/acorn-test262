__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
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
                "start": 84,
                "end": 85
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 88,
                "end": 90
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 84,
              "end": 90
            }
          ],
          "start": 83,
          "end": 91
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 106
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  },
                  "start": 108,
                  "end": 113
                },
                "start": 106,
                "end": 113
              },
              "value": null,
              "start": 99,
              "end": 113
            }
          ],
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
                "start": 118,
                "end": 119
              },
              "typeArguments": null,
              "start": 118,
              "end": 119
            },
            "start": 115,
            "end": 119
          },
          "start": 94,
          "end": 119
        },
        "declare": false,
        "start": 67,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 60,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 145
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
                "start": 146,
                "end": 147
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 146,
              "end": 147
            }
          ],
          "start": 145,
          "end": 148
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "typeArguments": null,
              "start": 165,
              "end": 166
            },
            "start": 159,
            "end": 166
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "typeArguments": null,
              "start": 169,
              "end": 170
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "start": 171,
              "end": 172
            },
            "start": 169,
            "end": 173
          },
          "optional": false,
          "readonly": null,
          "start": 151,
          "end": 175
        },
        "declare": false,
        "start": 128,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 176
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IApiItemConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 207
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 227
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "typeArguments": null,
                "start": 228,
                "end": 235
              }
            ],
            "start": 227,
            "end": 236
          },
          "start": 216,
          "end": 236
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 250
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "typeArguments": null,
                "start": 251,
                "end": 265
              }
            ],
            "start": 250,
            "end": 266
          },
          "start": 238,
          "end": 266
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 267,
        "end": 269
      },
      "declare": false,
      "start": 178,
      "end": 269
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 298
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 321
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
                    "name": "ReadonlyArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 338
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ApiItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 346
                      }
                    ],
                    "start": 338,
                    "end": 347
                  },
                  "start": 325,
                  "end": 347
                },
                "start": 323,
                "end": 347
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 361,
                      "end": 363
                    },
                    "start": 354,
                    "end": 364
                  }
                ],
                "start": 348,
                "end": 368
              },
              "expression": false,
              "start": 321,
              "end": 368
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 303,
            "end": 368
          }
        ],
        "start": 299,
        "end": 370
      },
      "abstract": false,
      "declare": false,
      "start": 285,
      "end": 370
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiEnumMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 410
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 426
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 427,
        "end": 430
      },
      "abstract": false,
      "declare": false,
      "start": 391,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 483
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiItem",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 499
          },
          "typeArguments": null,
          "start": 492,
          "end": 499
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 520
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
                  "start": 522,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ApiItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 543
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 543
                    }
                  ],
                  "start": 535,
                  "end": 544
                },
                "start": 522,
                "end": 544
              },
              "start": 520,
              "end": 544
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 545
          }
        ],
        "start": 500,
        "end": 547
      },
      "declare": false,
      "start": 452,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 579
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
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 590
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IApiItemConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 618
              },
              "typeArguments": null,
              "start": 599,
              "end": 618
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 580,
            "end": 618
          }
        ],
        "start": 579,
        "end": 619
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 644
              },
              "typeArguments": null,
              "start": 634,
              "end": 644
            },
            "start": 632,
            "end": 644
          },
          "start": 623,
          "end": 644
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 658
              },
              "typeArguments": null,
              "start": 648,
              "end": 658
            },
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 674
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 676,
                        "end": 679
                      },
                      "start": 676,
                      "end": 681
                    },
                    "start": 674,
                    "end": 681
                  },
                  "value": null,
                  "start": 667,
                  "end": 681
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ApiItemContainerMixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 707
                  },
                  "typeArguments": null,
                  "start": 686,
                  "end": 707
                },
                "start": 683,
                "end": 707
              },
              "start": 662,
              "end": 707
            }
          ],
          "start": 648,
          "end": 708
        },
        "start": 646,
        "end": 708
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 738
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 756
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItemContainerMixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 789
                },
                "typeArguments": null,
                "start": 768,
                "end": 789
              }
            ],
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
                    "start": 803,
                    "end": 814
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
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 818,
                          "end": 822
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 824,
                              "end": 827
                            },
                            "start": 824,
                            "end": 829
                          },
                          "start": 822,
                          "end": 829
                        },
                        "value": null,
                        "start": 815,
                        "end": 829
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 839,
                              "end": 844
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 848,
                                  "end": 852
                                },
                                "start": 845,
                                "end": 852
                              }
                            ],
                            "optional": false,
                            "start": 839,
                            "end": 853
                          },
                          "directive": null,
                          "start": 839,
                          "end": 854
                        }
                      ],
                      "start": 831,
                      "end": 860
                    },
                    "expression": false,
                    "start": 814,
                    "end": 860
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 796,
                  "end": 860
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "members",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 877,
                    "end": 884
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
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 888,
                          "end": 901
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ApiItem",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 902,
                                "end": 909
                              },
                              "typeArguments": null,
                              "start": 902,
                              "end": 909
                            }
                          ],
                          "start": 901,
                          "end": 910
                        },
                        "start": 888,
                        "end": 910
                      },
                      "start": 886,
                      "end": 910
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 926,
                            "end": 928
                          },
                          "start": 919,
                          "end": 929
                        }
                      ],
                      "start": 911,
                      "end": 935
                    },
                    "expression": false,
                    "start": 884,
                    "end": 935
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 866,
                  "end": 935
                }
              ],
              "start": 790,
              "end": 939
            },
            "abstract": true,
            "declare": false,
            "start": 713,
            "end": 939
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 960
            },
            "start": 943,
            "end": 961
          }
        ],
        "start": 709,
        "end": 963
      },
      "expression": false,
      "start": 549,
      "end": 963
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ApiEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1019
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiItemContainerMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1049
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ApiItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1057
            }
          ],
          "optional": false,
          "start": 1028,
          "end": 1058
        },
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
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1123
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
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1127,
                      "end": 1140
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ApiEnumMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1141,
                            "end": 1154
                          },
                          "typeArguments": null,
                          "start": 1141,
                          "end": 1154
                        }
                      ],
                      "start": 1140,
                      "end": 1155
                    },
                    "start": 1127,
                    "end": 1155
                  },
                  "start": 1125,
                  "end": 1155
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 1169,
                        "end": 1171
                      },
                      "start": 1162,
                      "end": 1172
                    }
                  ],
                  "start": 1156,
                  "end": 1176
                },
                "expression": false,
                "start": 1123,
                "end": 1176
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1105,
              "end": 1176
            }
          ],
          "start": 1059,
          "end": 1178
        },
        "abstract": false,
        "declare": false,
        "start": 1006,
        "end": 1178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 999,
      "end": 1178
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 1178
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 72,
    "end": 83,
    "range": [
      72,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 99,
    "end": 102,
    "range": [
      99,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 102,
    "end": 106,
    "range": [
      102,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117,
    "range": [
      115,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132,
    "range": [
      128,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertiesOf",
    "start": 133,
    "end": 145,
    "range": [
      133,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 159,
    "end": 164,
    "range": [
      159,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 178,
    "end": 187,
    "range": [
      178,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "IApiItemConstructor",
    "start": 188,
    "end": 207,
    "range": [
      188,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 208,
    "end": 215,
    "range": [
      208,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 216,
    "end": 227,
    "range": [
      216,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 228,
    "end": 235,
    "range": [
      228,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertiesOf",
    "start": 238,
    "end": 250,
    "range": [
      238,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 258,
    "end": 265,
    "range": [
      258,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 291,
    "end": 298,
    "range": [
      291,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 314,
    "end": 321,
    "range": [
      314,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 325,
    "end": 338,
    "range": [
      325,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 339,
    "end": 346,
    "range": [
      339,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360,
    "range": [
      354,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 391,
    "end": 396,
    "range": [
      391,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiEnumMember",
    "start": 397,
    "end": 410,
    "range": [
      397,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 419,
    "end": 426,
    "range": [
      419,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 452,
    "end": 461,
    "range": [
      452,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 462,
    "end": 483,
    "range": [
      462,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 484,
    "end": 491,
    "range": [
      484,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 492,
    "end": 499,
    "range": [
      492,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 513,
    "end": 520,
    "range": [
      513,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 522,
    "end": 535,
    "range": [
      522,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557,
    "range": [
      549,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 558,
    "end": 579,
    "range": [
      558,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 580,
    "end": 590,
    "range": [
      580,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 591,
    "end": 598,
    "range": [
      591,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "IApiItemConstructor",
    "start": 599,
    "end": 618,
    "range": [
      599,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 623,
    "end": 632,
    "range": [
      623,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 634,
    "end": 644,
    "range": [
      634,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 648,
    "end": 658,
    "range": [
      648,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
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
    "value": "...",
    "start": 667,
    "end": 670,
    "range": [
      667,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 670,
    "end": 674,
    "range": [
      670,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 676,
    "end": 679,
    "range": [
      676,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 683,
    "end": 685,
    "range": [
      683,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 686,
    "end": 707,
    "range": [
      686,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 713,
    "end": 721,
    "range": [
      713,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 722,
    "end": 727,
    "range": [
      722,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "MixedClass",
    "start": 728,
    "end": 738,
    "range": [
      728,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746,
    "range": [
      739,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 747,
    "end": 756,
    "range": [
      747,
      756
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 757,
    "end": 767,
    "range": [
      757,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 768,
    "end": 789,
    "range": [
      768,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 796,
    "end": 802,
    "range": [
      796,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 803,
    "end": 814,
    "range": [
      803,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 818,
    "end": 822,
    "range": [
      818,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 824,
    "end": 827,
    "range": [
      824,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 839,
    "end": 844,
    "range": [
      839,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 848,
    "end": 852,
    "range": [
      848,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 866,
    "end": 872,
    "range": [
      866,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 877,
    "end": 884,
    "range": [
      877,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 888,
    "end": 901,
    "range": [
      888,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 902,
    "end": 909,
    "range": [
      902,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 919,
    "end": 925,
    "range": [
      919,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 943,
    "end": 949,
    "range": [
      943,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "MixedClass",
    "start": 950,
    "end": 960,
    "range": [
      950,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 999,
    "end": 1005,
    "range": [
      999,
      1005
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1006,
    "end": 1011,
    "range": [
      1006,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiEnum",
    "start": 1012,
    "end": 1019,
    "range": [
      1012,
      1019
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1020,
    "end": 1027,
    "range": [
      1020,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 1028,
    "end": 1049,
    "range": [
      1028,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 1050,
    "end": 1057,
    "range": [
      1050,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1105,
    "end": 1111,
    "range": [
      1105,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1112,
    "end": 1115,
    "range": [
      1112,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 1116,
    "end": 1123,
    "range": [
      1116,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 1127,
    "end": 1140,
    "range": [
      1127,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "ApiEnumMember",
    "start": 1141,
    "end": 1154,
    "range": [
      1141,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1162,
    "end": 1168,
    "range": [
      1162,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  }
]
```
