__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Defaultize",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 21
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Defaults",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 31
          }
        ],
        "start": 15,
        "end": 32
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 68
          },
          "typeArguments": null,
          "start": 63,
          "end": 68
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 77,
          "end": 80
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 144
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 149
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 155
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 155
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 164
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 171,
                                    "end": 176
                                  },
                                  "typeArguments": null,
                                  "start": 171,
                                  "end": 176
                                },
                                "start": 165,
                                "end": 176
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Defaults",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 184,
                                    "end": 192
                                  },
                                  "typeArguments": null,
                                  "start": 184,
                                  "end": 192
                                },
                                "start": 178,
                                "end": 192
                              }
                            ],
                            "start": 164,
                            "end": 193
                          },
                          "start": 157,
                          "end": 193
                        }
                      ],
                      "start": 149,
                      "end": 194
                    },
                    "start": 145,
                    "end": 194
                  }
                ],
                "start": 144,
                "end": 195
              },
              "start": 137,
              "end": 195
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 257
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 263
                    },
                    "typeArguments": null,
                    "start": 258,
                    "end": 263
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 272
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 284
                            },
                            "typeArguments": null,
                            "start": 279,
                            "end": 284
                          },
                          "start": 273,
                          "end": 284
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 292,
                              "end": 300
                            },
                            "typeArguments": null,
                            "start": 292,
                            "end": 300
                          },
                          "start": 286,
                          "end": 300
                        }
                      ],
                      "start": 272,
                      "end": 301
                    },
                    "start": 265,
                    "end": 301
                  }
                ],
                "start": 257,
                "end": 302
              },
              "start": 253,
              "end": 302
            }
          ],
          "start": 137,
          "end": 302
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 307,
          "end": 312
        },
        "start": 63,
        "end": 312
      },
      "declare": false,
      "start": 0,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 342
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 373
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
                      "start": 374,
                      "end": 375
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 378,
                      "end": 380
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 374,
                    "end": 380
                  }
                ],
                "start": 373,
                "end": 381
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 382,
                "end": 385
              },
              "declare": false,
              "start": 349,
              "end": 385
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SVGAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 413
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
                      "start": 414,
                      "end": 415
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 418,
                      "end": 420
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 414,
                    "end": 420
                  }
                ],
                "start": 413,
                "end": 421
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 422,
                "end": 425
              },
              "declare": false,
              "start": 390,
              "end": 425
            },
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LibraryManagedAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 459
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 469
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 460,
                    "end": 469
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 476
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 471,
                    "end": 476
                  }
                ],
                "start": 459,
                "end": 477
              },
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 489
                  },
                  "typeArguments": null,
                  "start": 480,
                  "end": 489
                },
                "extendsType": {
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
                        "name": "defaultProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 520
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 528,
                              "end": 536
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 528,
                            "end": 536
                          },
                          "start": 522,
                          "end": 536
                        },
                        "start": 520,
                        "end": 536
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 508,
                      "end": 537
                    }
                  ],
                  "start": 498,
                  "end": 543
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 564
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 570
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 570
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Defaults",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 580
                        },
                        "typeArguments": null,
                        "start": 572,
                        "end": 580
                      }
                    ],
                    "start": 564,
                    "end": 581
                  },
                  "start": 554,
                  "end": 581
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 592,
                  "end": 597
                },
                "start": 480,
                "end": 597
              },
              "declare": false,
              "start": 430,
              "end": 598
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 633
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 647
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 650,
                        "end": 653
                      },
                      "start": 648,
                      "end": 653
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 644,
                    "end": 654
                  }
                ],
                "start": 634,
                "end": 660
              },
              "declare": false,
              "start": 604,
              "end": 660
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 683
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "VNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 697
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 698,
                        "end": 701
                      }
                    ],
                    "start": 697,
                    "end": 702
                  },
                  "start": 692,
                  "end": 702
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 703,
                "end": 706
              },
              "declare": false,
              "start": 666,
              "end": 706
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 734
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 752
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
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
                    ],
                    "start": 752,
                    "end": 762
                  },
                  "start": 743,
                  "end": 762
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 763,
                "end": 766
              },
              "declare": false,
              "start": 712,
              "end": 766
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 807
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 823
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 825,
                        "end": 828
                      },
                      "start": 823,
                      "end": 828
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 818,
                    "end": 829
                  }
                ],
                "start": 808,
                "end": 835
              },
              "declare": false,
              "start": 772,
              "end": 835
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 875
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
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 894
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 896,
                        "end": 899
                      },
                      "start": 894,
                      "end": 899
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 886,
                    "end": 900
                  }
                ],
                "start": 876,
                "end": 906
              },
              "declare": false,
              "start": 841,
              "end": 906
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 939
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
                      "name": "div",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 950,
                      "end": 953
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLAttributes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 955,
                          "end": 969
                        },
                        "typeArguments": null,
                        "start": 955,
                        "end": 969
                      },
                      "start": 953,
                      "end": 969
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 950,
                    "end": 970
                  }
                ],
                "start": 940,
                "end": 976
              },
              "declare": false,
              "start": 912,
              "end": 976
            }
          ],
          "start": 343,
          "end": 978
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 321,
        "end": 978
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 314,
      "end": 978
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fragment",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1009,
                    "end": 1015
                  },
                  "start": 1002,
                  "end": 1015
                },
                "start": 1000,
                "end": 1015
              },
              "start": 992,
              "end": 1015
            },
            "init": null,
            "definite": false,
            "start": 992,
            "end": 1015
          }
        ],
        "declare": false,
        "start": 986,
        "end": 1016
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 979,
      "end": 1016
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1029,
          "end": 1042
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
                "start": 1043,
                "end": 1044
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1047,
                "end": 1049
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1043,
              "end": 1049
            }
          ],
          "start": 1042,
          "end": 1050
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1053,
          "end": 1055
        },
        "declare": false,
        "start": 1024,
        "end": 1056
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1017,
      "end": 1056
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChild",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1083
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1086,
          "end": 1088
        },
        "declare": false,
        "start": 1064,
        "end": 1089
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1057,
      "end": 1089
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChildren",
          "optional": false,
          "typeAnnotation": null,
          "start": 1102,
          "end": 1119
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1122,
          "end": 1124
        },
        "declare": false,
        "start": 1097,
        "end": 1125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1090,
      "end": 1125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1143
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
                "start": 1144,
                "end": 1145
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1148,
                "end": 1150
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1144,
              "end": 1150
            }
          ],
          "start": 1143,
          "end": 1151
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1154,
          "end": 1156
        },
        "declare": false,
        "start": 1133,
        "end": 1157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1126,
      "end": 1157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attributes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1170,
          "end": 1180
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1183,
          "end": 1185
        },
        "declare": false,
        "start": 1165,
        "end": 1186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1158,
      "end": 1186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1199,
          "end": 1208
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
                "start": 1209,
                "end": 1210
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1213,
                "end": 1215
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1209,
              "end": 1215
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1218
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1221,
                "end": 1223
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1217,
              "end": 1223
            }
          ],
          "start": 1208,
          "end": 1224
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1227,
          "end": 1229
        },
        "declare": false,
        "start": 1194,
        "end": 1230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1187,
      "end": 1230
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1230
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 5,
    "end": 15,
    "range": [
      5,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 16,
    "end": 21,
    "range": [
      16,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 23,
    "end": 31,
    "range": [
      23,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 69,
    "end": 76,
    "range": [
      69,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 137,
    "end": 144,
    "range": [
      137,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 150,
    "end": 155,
    "range": [
      150,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 157,
    "end": 164,
    "range": [
      157,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 165,
    "end": 170,
    "range": [
      165,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 171,
    "end": 176,
    "range": [
      171,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 184,
    "end": 192,
    "range": [
      184,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 258,
    "end": 263,
    "range": [
      258,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 286,
    "end": 291,
    "range": [
      286,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 292,
    "end": 300,
    "range": [
      292,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 307,
    "end": 312,
    "range": [
      307,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 314,
    "end": 320,
    "range": [
      314,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 321,
    "end": 330,
    "range": [
      321,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 331,
    "end": 342,
    "range": [
      331,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 349,
    "end": 358,
    "range": [
      349,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 359,
    "end": 373,
    "range": [
      359,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 390,
    "end": 399,
    "range": [
      390,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 400,
    "end": 413,
    "range": [
      400,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 435,
    "end": 459,
    "range": [
      435,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 460,
    "end": 469,
    "range": [
      460,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 471,
    "end": 476,
    "range": [
      471,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 480,
    "end": 489,
    "range": [
      480,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 490,
    "end": 497,
    "range": [
      490,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 508,
    "end": 520,
    "range": [
      508,
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
    "value": "infer",
    "start": 522,
    "end": 527,
    "range": [
      522,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 528,
    "end": 536,
    "range": [
      528,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 554,
    "end": 564,
    "range": [
      554,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 565,
    "end": 570,
    "range": [
      565,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 572,
    "end": 580,
    "range": [
      572,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 592,
    "end": 597,
    "range": [
      592,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 604,
    "end": 613,
    "range": [
      604,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 614,
    "end": 633,
    "range": [
      614,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 650,
    "end": 653,
    "range": [
      650,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 666,
    "end": 675,
    "range": [
      666,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 676,
    "end": 683,
    "range": [
      676,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 684,
    "end": 691,
    "range": [
      684,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 692,
    "end": 697,
    "range": [
      692,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 698,
    "end": 701,
    "range": [
      698,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 712,
    "end": 721,
    "range": [
      712,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 722,
    "end": 734,
    "range": [
      722,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 735,
    "end": 742,
    "range": [
      735,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 743,
    "end": 752,
    "range": [
      743,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 753,
    "end": 756,
    "range": [
      753,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 758,
    "end": 761,
    "range": [
      758,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 772,
    "end": 781,
    "range": [
      772,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 782,
    "end": 807,
    "range": [
      782,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 818,
    "end": 823,
    "range": [
      818,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 825,
    "end": 828,
    "range": [
      825,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 841,
    "end": 850,
    "range": [
      841,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 851,
    "end": 875,
    "range": [
      851,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 886,
    "end": 894,
    "range": [
      886,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 896,
    "end": 899,
    "range": [
      896,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 912,
    "end": 921,
    "range": [
      912,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 922,
    "end": 939,
    "range": [
      922,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 950,
    "end": 953,
    "range": [
      950,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 955,
    "end": 969,
    "range": [
      955,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 979,
    "end": 985,
    "range": [
      979,
      985
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 986,
    "end": 991,
    "range": [
      986,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 992,
    "end": 1000,
    "range": [
      992,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1002,
    "end": 1008,
    "range": [
      1002,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1009,
    "end": 1015,
    "range": [
      1009,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1017,
    "end": 1023,
    "range": [
      1017,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1024,
    "end": 1028,
    "range": [
      1024,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1029,
    "end": 1042,
    "range": [
      1029,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1057,
    "end": 1063,
    "range": [
      1057,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1064,
    "end": 1068,
    "range": [
      1064,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 1069,
    "end": 1083,
    "range": [
      1069,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1097,
    "end": 1101,
    "range": [
      1097,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1102,
    "end": 1119,
    "range": [
      1102,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1126,
    "end": 1132,
    "range": [
      1126,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1138,
    "end": 1143,
    "range": [
      1138,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1158,
    "end": 1164,
    "range": [
      1158,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1165,
    "end": 1169,
    "range": [
      1165,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 1170,
    "end": 1180,
    "range": [
      1170,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1187,
    "end": 1193,
    "range": [
      1187,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1194,
    "end": 1198,
    "range": [
      1194,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1199,
    "end": 1208,
    "range": [
      1199,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "exportKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 25,
        "end": 29
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 57
          },
          "importKind": "value",
          "start": 44,
          "end": 57
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 77
          },
          "importKind": "value",
          "start": 63,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 100
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 100
          },
          "importKind": "value",
          "start": 83,
          "end": 100
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "importKind": "value",
          "start": 106,
          "end": 111
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 127
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 127
          },
          "importKind": "value",
          "start": 117,
          "end": 127
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 135,
        "end": 139
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
      "end": 140
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 161
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 161
          },
          "importKind": "value",
          "start": 150,
          "end": 161
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 169,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 141,
      "end": 174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 195
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "start": 201,
            "end": 213
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 237
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 252
                      },
                      "start": 226,
                      "end": 252
                    },
                    "typeArguments": null,
                    "start": 226,
                    "end": 252
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 274
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 288
                      },
                      "start": 263,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 288
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 305
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
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
                      ],
                      "start": 305,
                      "end": 318
                    },
                    "start": 299,
                    "end": 318
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 331
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 334,
                              "end": 348
                            },
                            "typeArguments": null,
                            "start": 334,
                            "end": 348
                          },
                          "start": 332,
                          "end": 348
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 323,
                        "end": 348
                      }
                    ],
                    "start": 321,
                    "end": 350
                  }
                ],
                "start": 226,
                "end": 350
              },
              "start": 224,
              "end": 350
            },
            "start": 219,
            "end": 350
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              },
              "start": 360,
              "end": 368
            },
            "start": 356,
            "end": 368
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 377
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 378,
                  "end": 381
                }
              ],
              "start": 377,
              "end": 382
            },
            "start": 372,
            "end": 382
          },
          "start": 370,
          "end": 382
        },
        "body": null,
        "expression": false,
        "start": 183,
        "end": 383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 176,
      "end": 383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 403
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 405
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 404,
              "end": 405
            }
          ],
          "start": 403,
          "end": 406
        },
        "params": [
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
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 431
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 433
                    }
                  ],
                  "start": 431,
                  "end": 434
                },
                "start": 418,
                "end": 434
              },
              "start": 416,
              "end": 434
            },
            "start": 412,
            "end": 434
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 457
                    },
                    "typeArguments": null,
                    "start": 447,
                    "end": 457
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 461
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 461
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 466,
                          "end": 474
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 477,
                              "end": 491
                            },
                            "typeArguments": null,
                            "start": 477,
                            "end": 491
                          },
                          "start": 475,
                          "end": 491
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 466,
                        "end": 491
                      }
                    ],
                    "start": 464,
                    "end": 493
                  }
                ],
                "start": 447,
                "end": 493
              },
              "start": 445,
              "end": 493
            },
            "start": 440,
            "end": 493
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              },
              "start": 503,
              "end": 511
            },
            "start": 499,
            "end": 511
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 520
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 521,
                  "end": 524
                }
              ],
              "start": 520,
              "end": 525
            },
            "start": 515,
            "end": 525
          },
          "start": 513,
          "end": 525
        },
        "body": null,
        "expression": false,
        "start": 391,
        "end": 526
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 384,
      "end": 526
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 549
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              },
              "start": 559,
              "end": 567
            },
            "start": 555,
            "end": 567
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 591
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 606
                      },
                      "start": 580,
                      "end": 606
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 606
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 617,
                        "end": 628
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 629,
                        "end": 642
                      },
                      "start": 617,
                      "end": 642
                    },
                    "typeArguments": null,
                    "start": 617,
                    "end": 642
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 659
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 660,
                          "end": 666
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 668,
                          "end": 671
                        }
                      ],
                      "start": 659,
                      "end": 672
                    },
                    "start": 653,
                    "end": 672
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 685
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 688,
                                "end": 702
                              },
                              "typeArguments": null,
                              "start": 688,
                              "end": 702
                            },
                            "start": 688,
                            "end": 704
                          },
                          "start": 686,
                          "end": 704
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 677,
                        "end": 704
                      }
                    ],
                    "start": 675,
                    "end": 706
                  }
                ],
                "start": 580,
                "end": 706
              },
              "start": 578,
              "end": 706
            },
            "start": 573,
            "end": 706
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 718,
                "end": 724
              },
              "start": 716,
              "end": 724
            },
            "start": 712,
            "end": 724
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 733
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 734,
                  "end": 737
                }
              ],
              "start": 733,
              "end": 738
            },
            "start": 728,
            "end": 738
          },
          "start": 726,
          "end": 738
        },
        "body": null,
        "expression": false,
        "start": 536,
        "end": 739
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 529,
      "end": 739
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 760
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 762
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 761,
              "end": 762
            }
          ],
          "start": 760,
          "end": 763
        },
        "params": [
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
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 788
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "typeArguments": null,
                      "start": 789,
                      "end": 790
                    }
                  ],
                  "start": 788,
                  "end": 791
                },
                "start": 775,
                "end": 791
              },
              "start": 773,
              "end": 791
            },
            "start": 769,
            "end": 791
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 814
                    },
                    "typeArguments": null,
                    "start": 804,
                    "end": 814
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 817,
                    "end": 818
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 831
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 834,
                                "end": 848
                              },
                              "typeArguments": null,
                              "start": 834,
                              "end": 848
                            },
                            "start": 834,
                            "end": 850
                          },
                          "start": 832,
                          "end": 850
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 823,
                        "end": 850
                      }
                    ],
                    "start": 821,
                    "end": 852
                  }
                ],
                "start": 804,
                "end": 852
              },
              "start": 802,
              "end": 852
            },
            "start": 797,
            "end": 852
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 864,
                "end": 870
              },
              "start": 862,
              "end": 870
            },
            "start": 858,
            "end": 870
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 879
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 880,
                  "end": 883
                }
              ],
              "start": 879,
              "end": 884
            },
            "start": 874,
            "end": 884
          },
          "start": 872,
          "end": 884
        },
        "body": null,
        "expression": false,
        "start": 747,
        "end": 885
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 740,
      "end": 885
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null,
          "start": 904,
          "end": 910
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 922,
                "end": 928
              },
              "start": 920,
              "end": 928
            },
            "start": 916,
            "end": 928
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 941,
                        "end": 952
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 953,
                        "end": 967
                      },
                      "start": 941,
                      "end": 967
                    },
                    "typeArguments": null,
                    "start": 941,
                    "end": 967
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 989
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 1003
                      },
                      "start": 978,
                      "end": 1003
                    },
                    "typeArguments": null,
                    "start": 978,
                    "end": 1003
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1020
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1021,
                          "end": 1027
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 1029,
                          "end": 1032
                        }
                      ],
                      "start": 1020,
                      "end": 1033
                    },
                    "start": 1014,
                    "end": 1033
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1038,
                          "end": 1046
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1049,
                              "end": 1066
                            },
                            "typeArguments": null,
                            "start": 1049,
                            "end": 1066
                          },
                          "start": 1047,
                          "end": 1066
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1038,
                        "end": 1066
                      }
                    ],
                    "start": 1036,
                    "end": 1068
                  }
                ],
                "start": 941,
                "end": 1068
              },
              "start": 939,
              "end": 1068
            },
            "start": 934,
            "end": 1068
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1080,
                "end": 1086
              },
              "start": 1078,
              "end": 1086
            },
            "start": 1074,
            "end": 1086
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1095
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1096,
                  "end": 1099
                }
              ],
              "start": 1095,
              "end": 1100
            },
            "start": 1090,
            "end": 1100
          },
          "start": 1088,
          "end": 1100
        },
        "body": null,
        "expression": false,
        "start": 895,
        "end": 1101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 888,
      "end": 1101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null,
          "start": 1118,
          "end": 1124
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1125,
                "end": 1126
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1125,
              "end": 1126
            }
          ],
          "start": 1124,
          "end": 1127
        },
        "params": [
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
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1152
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1153,
                        "end": 1154
                      },
                      "typeArguments": null,
                      "start": 1153,
                      "end": 1154
                    }
                  ],
                  "start": 1152,
                  "end": 1155
                },
                "start": 1139,
                "end": 1155
              },
              "start": 1137,
              "end": 1155
            },
            "start": 1133,
            "end": 1155
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1168,
                      "end": 1178
                    },
                    "typeArguments": null,
                    "start": 1168,
                    "end": 1178
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1182
                    },
                    "typeArguments": null,
                    "start": 1181,
                    "end": 1182
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1187,
                          "end": 1195
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1198,
                              "end": 1215
                            },
                            "typeArguments": null,
                            "start": 1198,
                            "end": 1215
                          },
                          "start": 1196,
                          "end": 1215
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1187,
                        "end": 1215
                      }
                    ],
                    "start": 1185,
                    "end": 1217
                  }
                ],
                "start": 1168,
                "end": 1217
              },
              "start": 1166,
              "end": 1217
            },
            "start": 1161,
            "end": 1217
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1229,
                "end": 1235
              },
              "start": 1227,
              "end": 1235
            },
            "start": 1223,
            "end": 1235
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1239,
              "end": 1244
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1245,
                  "end": 1248
                }
              ],
              "start": 1244,
              "end": 1249
            },
            "start": 1239,
            "end": 1249
          },
          "start": 1237,
          "end": 1249
        },
        "body": null,
        "expression": false,
        "start": 1109,
        "end": 1250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1102,
      "end": 1250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1269
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1283
        },
        "importKind": "value",
        "start": 1259,
        "end": 1284
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1252,
      "end": 1284
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1285
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 9,
    "end": 17,
    "range": [
      9,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 25,
    "end": 29,
    "range": [
      25,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 44,
    "end": 57,
    "range": [
      44,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 63,
    "end": 77,
    "range": [
      63,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 83,
    "end": 100,
    "range": [
      83,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 106,
    "end": 111,
    "range": [
      106,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 117,
    "end": 127,
    "range": [
      117,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 130,
    "end": 134,
    "range": [
      130,
      134
    ]
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 150,
    "end": 161,
    "range": [
      150,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191,
    "range": [
      183,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205,
    "range": [
      201,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 226,
    "end": 237,
    "range": [
      226,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 238,
    "end": 252,
    "range": [
      238,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 263,
    "end": 274,
    "range": [
      263,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 275,
    "end": 288,
    "range": [
      275,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 323,
    "end": 331,
    "range": [
      323,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 334,
    "end": 348,
    "range": [
      334,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 362,
    "end": 368,
    "range": [
      362,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 372,
    "end": 377,
    "range": [
      372,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 378,
    "end": 381,
    "range": [
      378,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 412,
    "end": 416,
    "range": [
      412,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 418,
    "end": 431,
    "range": [
      418,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 447,
    "end": 457,
    "range": [
      447,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 466,
    "end": 474,
    "range": [
      466,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 477,
    "end": 491,
    "range": [
      477,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 515,
    "end": 520,
    "range": [
      515,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 529,
    "end": 535,
    "range": [
      529,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 536,
    "end": 544,
    "range": [
      536,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "jsxs",
    "start": 545,
    "end": 549,
    "range": [
      545,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 573,
    "end": 578,
    "range": [
      573,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 580,
    "end": 591,
    "range": [
      580,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 592,
    "end": 606,
    "range": [
      592,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 617,
    "end": 628,
    "range": [
      617,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 629,
    "end": 642,
    "range": [
      629,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 653,
    "end": 659,
    "range": [
      653,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 677,
    "end": 685,
    "range": [
      677,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 688,
    "end": 702,
    "range": [
      688,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 712,
    "end": 715,
    "range": [
      712,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 718,
    "end": 724,
    "range": [
      718,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 728,
    "end": 733,
    "range": [
      728,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 747,
    "end": 755,
    "range": [
      747,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "jsxs",
    "start": 756,
    "end": 760,
    "range": [
      756,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 775,
    "end": 788,
    "range": [
      775,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 797,
    "end": 802,
    "range": [
      797,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 804,
    "end": 814,
    "range": [
      804,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 823,
    "end": 831,
    "range": [
      823,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 834,
    "end": 848,
    "range": [
      834,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 858,
    "end": 861,
    "range": [
      858,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 864,
    "end": 870,
    "range": [
      864,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 874,
    "end": 879,
    "range": [
      874,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 895,
    "end": 903,
    "range": [
      895,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "jsxDEV",
    "start": 904,
    "end": 910,
    "range": [
      904,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 916,
    "end": 920,
    "range": [
      916,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 922,
    "end": 928,
    "range": [
      922,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 934,
    "end": 939,
    "range": [
      934,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 941,
    "end": 952,
    "range": [
      941,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 953,
    "end": 967,
    "range": [
      953,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 978,
    "end": 989,
    "range": [
      978,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 990,
    "end": 1003,
    "range": [
      990,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1014,
    "end": 1020,
    "range": [
      1014,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1029,
    "end": 1032,
    "range": [
      1029,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1038,
    "end": 1046,
    "range": [
      1038,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1049,
    "end": 1066,
    "range": [
      1049,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1074,
    "end": 1077,
    "range": [
      1074,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1080,
    "end": 1086,
    "range": [
      1080,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1090,
    "end": 1095,
    "range": [
      1090,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1102,
    "end": 1108,
    "range": [
      1102,
      1108
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117,
    "range": [
      1109,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "jsxDEV",
    "start": 1118,
    "end": 1124,
    "range": [
      1118,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1139,
    "end": 1152,
    "range": [
      1139,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
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
    "value": ",",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1161,
    "end": 1166,
    "range": [
      1161,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 1168,
    "end": 1178,
    "range": [
      1168,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1187,
    "end": 1195,
    "range": [
      1187,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1198,
    "end": 1215,
    "range": [
      1198,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1223,
    "end": 1226,
    "range": [
      1223,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1229,
    "end": 1235,
    "range": [
      1229,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1239,
    "end": 1244,
    "range": [
      1239,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1252,
    "end": 1258,
    "range": [
      1252,
      1258
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1259,
    "end": 1265,
    "range": [
      1259,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1266,
    "end": 1269,
    "range": [
      1266,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 1272,
    "end": 1283,
    "range": [
      1272,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Comp",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 27,
                    "end": 30
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 26,
                  "end": 31
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 33,
                    "end": 36
                  },
                  "start": 31,
                  "end": 37
                },
                "start": 26,
                "end": 37
              },
              "id": null,
              "generator": false,
              "start": 20,
              "end": 37
            },
            "definite": false,
            "start": 13,
            "end": 37
          }
        ],
        "declare": false,
        "start": 7,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 13,
    "end": 17,
    "range": [
      13,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  }
]
```
