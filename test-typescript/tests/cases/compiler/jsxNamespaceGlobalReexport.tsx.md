__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1230,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 313,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Defaultize",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 63,
        "end": 312,
        "checkType": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 68,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 68,
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 77,
          "end": 80
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 307,
          "end": 312
        },
        "trueType": {
          "type": "TSIntersectionType",
          "start": 137,
          "end": 302,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 137,
              "end": 195,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 144,
                "end": 195,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 194,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 149,
                      "end": 194,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 150,
                          "end": 155,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 155,
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 157,
                          "end": 193,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 164,
                            "end": 193,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 165,
                                "end": 176,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 171,
                                  "end": 176,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 171,
                                    "end": 176,
                                    "decorators": [],
                                    "name": "Props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 178,
                                "end": 192,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 184,
                                  "end": 192,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 184,
                                    "end": 192,
                                    "decorators": [],
                                    "name": "Defaults",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 164,
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 149,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 144,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 253,
              "end": 302,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 257,
                "end": 302,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 258,
                    "end": 263,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 263,
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 265,
                    "end": 301,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 272,
                      "end": 301,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 273,
                          "end": 284,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 279,
                            "end": 284,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 284,
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "TSTypeOperator",
                          "start": 286,
                          "end": 300,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 292,
                            "end": 300,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 300,
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 272,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 253,
                "end": 257,
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 21,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 21,
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 31,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "decorators": [],
              "name": "Defaults",
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
      "start": 314,
      "end": 978,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 321,
        "end": 978,
        "body": {
          "type": "TSModuleBlock",
          "start": 343,
          "end": 978,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 349,
              "end": 385,
              "body": {
                "type": "TSInterfaceBody",
                "start": 382,
                "end": 385,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 359,
                "end": 373,
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 373,
                "end": 381,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 374,
                    "end": 380,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "start": 378,
                      "end": 380,
                      "members": []
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 375,
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
            {
              "type": "TSInterfaceDeclaration",
              "start": 390,
              "end": 425,
              "body": {
                "type": "TSInterfaceBody",
                "start": 422,
                "end": 425,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 400,
                "end": 413,
                "decorators": [],
                "name": "SVGAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 413,
                "end": 421,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 414,
                    "end": 420,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "start": 418,
                      "end": 420,
                      "members": []
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
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
            {
              "type": "TSTypeAliasDeclaration",
              "start": 430,
              "end": 598,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 435,
                "end": 459,
                "decorators": [],
                "name": "LibraryManagedAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 480,
                "end": 597,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 480,
                  "end": 489,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 489,
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "start": 498,
                  "end": 543,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 508,
                      "end": 537,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 520,
                        "decorators": [],
                        "name": "defaultProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 520,
                        "end": 536,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 522,
                          "end": 536,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 528,
                            "end": 536,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 528,
                              "end": 536,
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        }
                      }
                    }
                  ]
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 592,
                  "end": 597,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 597,
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 554,
                  "end": 581,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 564,
                    "end": 581,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 565,
                        "end": 570,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 570,
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 572,
                        "end": 580,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 580,
                          "decorators": [],
                          "name": "Defaults",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 564,
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 459,
                "end": 477,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 460,
                    "end": 469,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 469,
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 471,
                    "end": 476,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 476,
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 604,
              "end": 660,
              "body": {
                "type": "TSInterfaceBody",
                "start": 634,
                "end": 660,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 644,
                    "end": 654,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 647,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 648,
                      "end": 653,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 650,
                        "end": 653
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 614,
                "end": 633,
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 666,
              "end": 706,
              "body": {
                "type": "TSInterfaceBody",
                "start": 703,
                "end": 706,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 692,
                  "end": 702,
                  "expression": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 697,
                    "decorators": [],
                    "name": "VNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 697,
                    "end": 702,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 698,
                        "end": 701
                      }
                    ]
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 676,
                "end": 683,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 712,
              "end": 766,
              "body": {
                "type": "TSInterfaceBody",
                "start": 763,
                "end": 766,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 743,
                  "end": 762,
                  "expression": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 752,
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 752,
                    "end": 762,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 753,
                        "end": 756
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 758,
                        "end": 761
                      }
                    ]
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 722,
                "end": 734,
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 772,
              "end": 835,
              "body": {
                "type": "TSInterfaceBody",
                "start": 808,
                "end": 835,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 818,
                    "end": 829,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 818,
                      "end": 823,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 823,
                      "end": 828,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 825,
                        "end": 828
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 782,
                "end": 807,
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 841,
              "end": 906,
              "body": {
                "type": "TSInterfaceBody",
                "start": 876,
                "end": 906,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 886,
                    "end": 900,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 894,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 894,
                      "end": 899,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 896,
                        "end": 899
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 851,
                "end": 875,
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 912,
              "end": 976,
              "body": {
                "type": "TSInterfaceBody",
                "start": 940,
                "end": 976,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 950,
                    "end": 970,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 950,
                      "end": 953,
                      "decorators": [],
                      "name": "div",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 953,
                      "end": 969,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 955,
                        "end": 969,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 955,
                          "end": 969,
                          "decorators": [],
                          "name": "HTMLAttributes",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 922,
                "end": 939,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 331,
          "end": 342,
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 979,
      "end": 1016,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 986,
        "end": 1016,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 992,
            "end": 1015,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 992,
              "end": 1015,
              "decorators": [],
              "name": "Fragment",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1000,
                "end": 1015,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 1002,
                  "end": 1015,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1009,
                    "end": 1015
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1017,
      "end": 1056,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1024,
        "end": 1056,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1029,
          "end": 1042,
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1053,
          "end": 1055,
          "members": []
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1042,
          "end": 1050,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1043,
              "end": 1049,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 1047,
                "end": 1049,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1043,
                "end": 1044,
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
      "start": 1057,
      "end": 1089,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1064,
        "end": 1089,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1069,
          "end": 1083,
          "decorators": [],
          "name": "ComponentChild",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1086,
          "end": 1088,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1090,
      "end": 1125,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1097,
        "end": 1125,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1102,
          "end": 1119,
          "decorators": [],
          "name": "ComponentChildren",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1122,
          "end": 1124,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1126,
      "end": 1157,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1133,
        "end": 1157,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1138,
          "end": 1143,
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1154,
          "end": 1156,
          "members": []
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1143,
          "end": 1151,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1144,
              "end": 1150,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 1148,
                "end": 1150,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1144,
                "end": 1145,
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
      "start": 1158,
      "end": 1186,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1165,
        "end": 1186,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1170,
          "end": 1180,
          "decorators": [],
          "name": "Attributes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1183,
          "end": 1185,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1187,
      "end": 1230,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1194,
        "end": 1230,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1199,
          "end": 1208,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1227,
          "end": 1229,
          "members": []
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1208,
          "end": 1224,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1209,
              "end": 1215,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 1213,
                "end": 1215,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1209,
                "end": 1210,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1217,
              "end": 1223,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 1221,
                "end": 1223,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1217,
                "end": 1218,
                "decorators": [],
                "name": "U",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1483,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 29,
        "raw": "'..'",
        "value": "..",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 140,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 135,
        "end": 139,
        "raw": "'..'",
        "value": "..",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 57,
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 57,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 57,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 77,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 77,
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 77,
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 83,
          "end": 100,
          "imported": {
            "type": "Identifier",
            "start": 83,
            "end": 100,
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 100,
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 106,
          "end": 111,
          "imported": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 117,
          "end": 127,
          "imported": {
            "type": "Identifier",
            "start": 117,
            "end": 127,
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 117,
            "end": 127,
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 141,
      "end": 174,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 169,
        "end": 173,
        "raw": "'..'",
        "value": "..",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 150,
          "end": 161,
          "imported": {
            "type": "Identifier",
            "start": 150,
            "end": 161,
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 150,
            "end": 161,
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 176,
      "end": 383,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 183,
        "end": 383,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 192,
          "end": 195,
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 201,
            "end": 213,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 213,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              }
            }
          },
          {
            "type": "Identifier",
            "start": 219,
            "end": 350,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 350,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 226,
                "end": 350,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 252,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 226,
                      "end": 252,
                      "left": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 237,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 252,
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 288,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 263,
                      "end": 288,
                      "left": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 274,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 288,
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 318,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 305,
                      "end": 318,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 306,
                          "end": 312
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 314,
                          "end": 317
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 305,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 321,
                    "end": 350,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 323,
                        "end": 348,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 331,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 332,
                          "end": 348,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 334,
                            "end": 348,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 334,
                              "end": 348,
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 356,
            "end": 368,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 368,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 370,
          "end": 382,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 372,
            "end": 382,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 377,
              "end": 382,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 378,
                  "end": 381
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 384,
      "end": 526,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 391,
        "end": 526,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 400,
          "end": 403,
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 412,
            "end": 434,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 434,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 418,
                "end": 434,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 431,
                  "end": 434,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 432,
                      "end": 433,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 433,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 431,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 440,
            "end": 493,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 493,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 447,
                "end": 493,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 447,
                    "end": 457,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 457,
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 460,
                    "end": 461,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 461,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 464,
                    "end": 493,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 466,
                        "end": 491,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 466,
                          "end": 474,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 491,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 477,
                            "end": 491,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 477,
                              "end": 491,
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 499,
            "end": 511,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 503,
              "end": 511,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 513,
          "end": 525,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 515,
            "end": 525,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 520,
              "end": 525,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 521,
                  "end": 524
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 515,
              "end": 520,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 403,
          "end": 406,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 404,
              "end": 405,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 528,
      "end": 738,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 535,
        "end": 738,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 544,
          "end": 548,
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 554,
            "end": 566,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 558,
              "end": 566,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 560,
                "end": 566
              }
            }
          },
          {
            "type": "Identifier",
            "start": 572,
            "end": 705,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 577,
              "end": 705,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 579,
                "end": 705,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 579,
                    "end": 605,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 579,
                      "end": 605,
                      "left": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 590,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 605,
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 616,
                    "end": 641,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 616,
                      "end": 641,
                      "left": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 627,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 628,
                        "end": 641,
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 671,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 658,
                      "end": 671,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 659,
                          "end": 665
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 667,
                          "end": 670
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 658,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 674,
                    "end": 705,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 676,
                        "end": 703,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 684,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 685,
                          "end": 703,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 687,
                            "end": 703,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 687,
                              "end": 701,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 687,
                                "end": 701,
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 711,
            "end": 723,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 723,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 725,
          "end": 737,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 727,
            "end": 737,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 732,
              "end": 737,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 733,
                  "end": 736
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 727,
              "end": 732,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 739,
      "end": 884,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 746,
        "end": 884,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 755,
          "end": 759,
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 768,
            "end": 790,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 790,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 790,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 787,
                  "end": 790,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 788,
                      "end": 789,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 789,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 787,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 796,
            "end": 851,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 801,
              "end": 851,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 803,
                "end": 851,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 803,
                    "end": 813,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 813,
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 816,
                    "end": 817,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 816,
                      "end": 817,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 820,
                    "end": 851,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 822,
                        "end": 849,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 822,
                          "end": 830,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 831,
                          "end": 849,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 833,
                            "end": 849,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 833,
                              "end": 847,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 833,
                                "end": 847,
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 857,
            "end": 869,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 861,
              "end": 869,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 871,
          "end": 883,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 873,
            "end": 883,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 878,
              "end": 883,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 879,
                  "end": 882
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 873,
              "end": 878,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 759,
          "end": 762,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 760,
              "end": 761,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 886,
      "end": 1099,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 893,
        "end": 1099,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 902,
          "end": 908,
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 914,
            "end": 926,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 918,
              "end": 926,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 920,
                "end": 926
              }
            }
          },
          {
            "type": "Identifier",
            "start": 932,
            "end": 1066,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 937,
              "end": 1066,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 939,
                "end": 1066,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 939,
                    "end": 965,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 939,
                      "end": 965,
                      "left": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 950,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 951,
                        "end": 965,
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 976,
                    "end": 1001,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 976,
                      "end": 1001,
                      "left": {
                        "type": "Identifier",
                        "start": 976,
                        "end": 987,
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 988,
                        "end": 1001,
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1012,
                    "end": 1031,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1018,
                      "end": 1031,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1019,
                          "end": 1025
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 1027,
                          "end": 1030
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1018,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1034,
                    "end": 1066,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1036,
                        "end": 1064,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1044,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1045,
                          "end": 1064,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1047,
                            "end": 1064,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1047,
                              "end": 1064,
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 1072,
            "end": 1084,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1076,
              "end": 1084,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1078,
                "end": 1084
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1086,
          "end": 1098,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1088,
            "end": 1098,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1093,
              "end": 1098,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1094,
                  "end": 1097
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1088,
              "end": 1093,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1100,
      "end": 1248,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 1107,
        "end": 1248,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1116,
          "end": 1122,
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1131,
            "end": 1153,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1135,
              "end": 1153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1137,
                "end": 1153,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1150,
                  "end": 1153,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1151,
                      "end": 1152,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1151,
                        "end": 1152,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1150,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 1159,
            "end": 1215,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1164,
              "end": 1215,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1166,
                "end": 1215,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1166,
                    "end": 1176,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1166,
                      "end": 1176,
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1179,
                    "end": 1180,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1183,
                    "end": 1215,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1185,
                        "end": 1213,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1185,
                          "end": 1193,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1194,
                          "end": 1213,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1196,
                            "end": 1213,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1196,
                              "end": 1213,
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 1221,
            "end": 1233,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1225,
              "end": 1233,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1227,
                "end": 1233
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1235,
          "end": 1247,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1237,
            "end": 1247,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1242,
              "end": 1247,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1243,
                  "end": 1246
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1237,
              "end": 1242,
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1122,
          "end": 1125,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1123,
              "end": 1124,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1410,
      "end": 1483,
      "body": {
        "type": "TSModuleBlock",
        "start": 1425,
        "end": 1483,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1449,
            "end": 1481,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 1456,
              "end": 1481,
              "id": {
                "type": "Identifier",
                "start": 1463,
                "end": 1466,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 1469,
                "end": 1480,
                "decorators": [],
                "name": "JSXInternal",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 1418,
        "end": 1424,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 37,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "Comp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 20,
              "end": 37,
              "async": false,
              "body": {
                "type": "JSXElement",
                "start": 26,
                "end": 37,
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 31,
                  "end": 37,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 33,
                    "end": 36,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 26,
                  "end": 31,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 27,
                    "end": 30,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
