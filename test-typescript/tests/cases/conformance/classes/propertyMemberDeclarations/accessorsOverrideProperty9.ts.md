__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 1178,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 120,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 67,
        "end": 120,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 83,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 94,
          "end": 119,
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "start": 99,
              "end": 113,
              "argument": {
                "type": "Identifier",
                "start": 102,
                "end": 106,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 106,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 108,
                  "end": 113,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 83,
          "end": 91,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 84,
              "end": 90,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 88,
                "end": 90,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 176,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 128,
        "end": 176,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 145,
          "decorators": [],
          "name": "PropertiesOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 151,
          "end": 175,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 159,
            "end": 166,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 169,
            "end": 173,
            "indexType": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 145,
          "end": 148,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 146,
              "end": 147,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 269,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 269,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 216,
          "end": 236,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 227,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 227,
            "end": 236,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 228,
                "end": 235,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 235,
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 266,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 250,
            "decorators": [],
            "name": "PropertiesOf",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 250,
            "end": 266,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 251,
                "end": 265,
                "exprName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 207,
        "decorators": [],
        "name": "IApiItemConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 285,
      "end": 370,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 299,
        "end": 370,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 303,
            "end": 368,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 321,
              "decorators": [],
              "name": "members",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 368,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 368,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 354,
                    "end": 364,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 361,
                      "end": 363,
                      "elements": []
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 347,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 338,
                    "end": 347,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 346,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 346,
                          "decorators": [],
                          "name": "ApiItem",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 338,
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 298,
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 391,
      "end": 430,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 427,
        "end": 430,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 410,
        "decorators": [],
        "name": "ApiEnumMember",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 419,
        "end": 426,
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 452,
      "end": 547,
      "body": {
        "type": "TSInterfaceBody",
        "start": 500,
        "end": 547,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 545,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 520,
              "decorators": [],
              "name": "members",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 544,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 544,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 544,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 543,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 543,
                        "decorators": [],
                        "name": "ApiItem",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 535,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 492,
          "end": 499,
          "expression": {
            "type": "Identifier",
            "start": 492,
            "end": 499,
            "decorators": [],
            "name": "ApiItem",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 483,
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 963,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 709,
        "end": 963,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 713,
            "end": 939,
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "start": 790,
              "end": 939,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 796,
                  "end": 860,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 814,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 814,
                    "end": 860,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 831,
                      "end": 860,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 839,
                          "end": 854,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 839,
                            "end": 853,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 845,
                                "end": 852,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 848,
                                  "end": 852,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 839,
                              "end": 844
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 815,
                        "end": 829,
                        "argument": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 822,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 822,
                          "end": 829,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 824,
                            "end": 829,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 824,
                              "end": 827
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 866,
                  "end": 935,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 877,
                    "end": 884,
                    "decorators": [],
                    "name": "members",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 884,
                    "end": 935,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 911,
                      "end": 935,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 919,
                          "end": 929,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 926,
                            "end": 928,
                            "elements": []
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 886,
                      "end": 910,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 888,
                        "end": 910,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 901,
                          "end": 910,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 902,
                              "end": 909,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 902,
                                "end": 909,
                                "decorators": [],
                                "name": "ApiItem",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 901,
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 728,
              "end": 738,
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 768,
                "end": 789,
                "expression": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 789,
                  "decorators": [],
                  "name": "ApiItemContainerMixin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": {
              "type": "Identifier",
              "start": 747,
              "end": 756,
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ReturnStatement",
            "start": 943,
            "end": 961,
            "argument": {
              "type": "Identifier",
              "start": 950,
              "end": 960,
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 579,
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 623,
          "end": 644,
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 632,
            "end": 644,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 634,
              "end": 644,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 634,
                "end": 644,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 646,
        "end": 708,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 648,
          "end": 708,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 648,
              "end": 658,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 648,
                "end": 658,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSConstructorType",
              "start": 662,
              "end": 707,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 667,
                  "end": 681,
                  "argument": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 674,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 674,
                    "end": 681,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 676,
                      "end": 681,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 676,
                        "end": 679
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 683,
                "end": 707,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 686,
                  "end": 707,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 707,
                    "decorators": [],
                    "name": "ApiItemContainerMixin",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 579,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 580,
            "end": 618,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 599,
              "end": 618,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 599,
                "end": 618,
                "decorators": [],
                "name": "IApiItemConstructor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 580,
              "end": 590,
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 999,
      "end": 1178,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1006,
        "end": 1178,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1059,
          "end": 1178,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1105,
              "end": 1176,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1116,
                "end": 1123,
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1123,
                "end": 1176,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1156,
                  "end": 1176,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1162,
                      "end": 1172,
                      "argument": {
                        "type": "ArrayExpression",
                        "start": 1169,
                        "end": 1171,
                        "elements": []
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1125,
                  "end": 1155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1127,
                    "end": 1155,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1140,
                      "end": 1155,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1141,
                          "end": 1154,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1141,
                            "end": 1154,
                            "decorators": [],
                            "name": "ApiEnumMember",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1127,
                      "end": 1140,
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1012,
          "end": 1019,
          "decorators": [],
          "name": "ApiEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 1028,
          "end": 1058,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1050,
              "end": 1057,
              "decorators": [],
              "name": "ApiItem",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1028,
            "end": 1049,
            "decorators": [],
            "name": "ApiItemContainerMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
