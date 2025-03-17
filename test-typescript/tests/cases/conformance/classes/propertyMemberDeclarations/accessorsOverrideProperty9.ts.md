__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 1179,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 120,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 67,
        "end": 120,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 83,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 88,
                "end": 90,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 94,
          "end": 119,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 99,
              "end": 113,
              "argument": {
                "type": "Identifier",
                "start": 102,
                "end": 106,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 176,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 128,
        "end": 176,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 145,
          "name": "PropertiesOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "type": "TSMappedType",
          "start": 151,
          "end": 175,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 159,
              "end": 166,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 169,
            "end": 173,
            "objectType": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 159,
            "end": 166,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 207,
        "name": "IApiItemConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 216,
          "end": 236,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 227,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 235,
                  "name": "ApiItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
            "name": "PropertiesOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "ApiItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 269,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 285,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 298,
        "name": "ApiItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 299,
        "end": 370,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 303,
            "end": 368,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 321,
              "name": "members",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 368,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 347,
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 338,
                    "name": "ReadonlyArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 338,
                    "end": 347,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 346,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 346,
                          "name": "ApiItem",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 391,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 410,
        "name": "ApiEnumMember",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 419,
        "end": 426,
        "name": "ApiItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 427,
        "end": 430,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 452,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 483,
        "name": "ApiItemContainerMixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 492,
          "end": 499,
          "expression": {
            "type": "Identifier",
            "start": 492,
            "end": 499,
            "name": "ApiItem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 500,
        "end": 547,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 545,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 520,
              "name": "members",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 544,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 544,
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 535,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 544,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 543,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 543,
                        "name": "ApiItem",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 963,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 579,
        "name": "ApiItemContainerMixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 623,
          "end": 644,
          "name": "baseClass",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 632,
            "end": 644,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 634,
              "end": 644,
              "typeName": {
                "type": "Identifier",
                "start": 634,
                "end": 644,
                "name": "TBaseClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 709,
        "end": 963,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 713,
            "end": 939,
            "id": {
              "type": "Identifier",
              "start": 728,
              "end": 738,
              "name": "MixedClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 747,
              "end": 756,
              "name": "baseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 790,
              "end": 939,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 796,
                  "end": 860,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 814,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 814,
                    "end": 860,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 815,
                        "end": 829,
                        "argument": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 822,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 831,
                      "end": 860,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 839,
                          "end": 854,
                          "expression": {
                            "type": "CallExpression",
                            "start": 839,
                            "end": 853,
                            "callee": {
                              "type": "Super",
                              "start": 839,
                              "end": 844
                            },
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 845,
                                "end": 852,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 848,
                                  "end": 852,
                                  "name": "args",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 866,
                  "end": 935,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 877,
                    "end": 884,
                    "name": "members",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 884,
                    "end": 935,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 886,
                      "end": 910,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 888,
                        "end": 910,
                        "typeName": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 901,
                          "name": "ReadonlyArray",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 901,
                          "end": 910,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 902,
                              "end": 909,
                              "typeName": {
                                "type": "Identifier",
                                "start": 902,
                                "end": 909,
                                "name": "ApiItem",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 768,
                "end": 789,
                "expression": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 789,
                  "name": "ApiItemContainerMixin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": true,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 943,
            "end": 961,
            "argument": {
              "type": "Identifier",
              "start": 950,
              "end": 960,
              "name": "MixedClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 579,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 580,
            "end": 618,
            "name": {
              "type": "Identifier",
              "start": 580,
              "end": 590,
              "name": "TBaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 599,
              "end": 618,
              "typeName": {
                "type": "Identifier",
                "start": 599,
                "end": 618,
                "name": "IApiItemConstructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "typeName": {
                "type": "Identifier",
                "start": 648,
                "end": 658,
                "name": "TBaseClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSConstructorType",
              "start": 662,
              "end": 707,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 667,
                  "end": 681,
                  "argument": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 674,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 707,
                    "name": "ApiItemContainerMixin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 999,
      "end": 1178,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1006,
        "end": 1178,
        "id": {
          "type": "Identifier",
          "start": 1012,
          "end": 1019,
          "name": "ApiEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 1028,
          "end": 1058,
          "callee": {
            "type": "Identifier",
            "start": 1028,
            "end": 1049,
            "name": "ApiItemContainerMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1050,
              "end": 1057,
              "name": "ApiItem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 1059,
          "end": 1178,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1105,
              "end": 1176,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1116,
                "end": 1123,
                "name": "members",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1123,
                "end": 1176,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1125,
                  "end": 1155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1127,
                    "end": 1155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1127,
                      "end": 1140,
                      "name": "ReadonlyArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1140,
                      "end": 1155,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1141,
                          "end": 1154,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1141,
                            "end": 1154,
                            "name": "ApiEnumMember",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
