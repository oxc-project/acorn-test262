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
__ESTREE_TEST__:PASS:
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
          "start": 544,
          "end": 548
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
                "start": 560,
                "end": 566
              },
              "start": 558,
              "end": 566
            },
            "start": 554,
            "end": 566
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
                        "start": 579,
                        "end": 590
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 605
                      },
                      "start": 579,
                      "end": 605
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 605
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
                        "start": 616,
                        "end": 627
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 628,
                        "end": 641
                      },
                      "start": 616,
                      "end": 641
                    },
                    "typeArguments": null,
                    "start": 616,
                    "end": 641
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 658
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
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
                      ],
                      "start": 658,
                      "end": 671
                    },
                    "start": 652,
                    "end": 671
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
                          "start": 676,
                          "end": 684
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
                                "start": 687,
                                "end": 701
                              },
                              "typeArguments": null,
                              "start": 687,
                              "end": 701
                            },
                            "start": 687,
                            "end": 703
                          },
                          "start": 685,
                          "end": 703
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 676,
                        "end": 703
                      }
                    ],
                    "start": 674,
                    "end": 705
                  }
                ],
                "start": 579,
                "end": 705
              },
              "start": 577,
              "end": 705
            },
            "start": 572,
            "end": 705
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
                "start": 717,
                "end": 723
              },
              "start": 715,
              "end": 723
            },
            "start": 711,
            "end": 723
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
              "start": 727,
              "end": 732
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 733,
                  "end": 736
                }
              ],
              "start": 732,
              "end": 737
            },
            "start": 727,
            "end": 737
          },
          "start": 725,
          "end": 737
        },
        "body": null,
        "expression": false,
        "start": 535,
        "end": 738
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 528,
      "end": 738
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
          "start": 755,
          "end": 759
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
                "start": 760,
                "end": 761
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 760,
              "end": 761
            }
          ],
          "start": 759,
          "end": 762
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
                  "start": 774,
                  "end": 787
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
                        "start": 788,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 788,
                      "end": 789
                    }
                  ],
                  "start": 787,
                  "end": 790
                },
                "start": 774,
                "end": 790
              },
              "start": 772,
              "end": 790
            },
            "start": 768,
            "end": 790
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
                      "start": 803,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 803,
                    "end": 813
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 817
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 817
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
                          "start": 822,
                          "end": 830
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
                                "start": 833,
                                "end": 847
                              },
                              "typeArguments": null,
                              "start": 833,
                              "end": 847
                            },
                            "start": 833,
                            "end": 849
                          },
                          "start": 831,
                          "end": 849
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 822,
                        "end": 849
                      }
                    ],
                    "start": 820,
                    "end": 851
                  }
                ],
                "start": 803,
                "end": 851
              },
              "start": 801,
              "end": 851
            },
            "start": 796,
            "end": 851
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
                "start": 863,
                "end": 869
              },
              "start": 861,
              "end": 869
            },
            "start": 857,
            "end": 869
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
              "start": 873,
              "end": 878
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 879,
                  "end": 882
                }
              ],
              "start": 878,
              "end": 883
            },
            "start": 873,
            "end": 883
          },
          "start": 871,
          "end": 883
        },
        "body": null,
        "expression": false,
        "start": 746,
        "end": 884
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 739,
      "end": 884
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
          "start": 902,
          "end": 908
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
                "start": 920,
                "end": 926
              },
              "start": 918,
              "end": 926
            },
            "start": 914,
            "end": 926
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
                        "start": 939,
                        "end": 950
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 951,
                        "end": 965
                      },
                      "start": 939,
                      "end": 965
                    },
                    "typeArguments": null,
                    "start": 939,
                    "end": 965
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
                        "start": 976,
                        "end": 987
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 988,
                        "end": 1001
                      },
                      "start": 976,
                      "end": 1001
                    },
                    "typeArguments": null,
                    "start": 976,
                    "end": 1001
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1018
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
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
                      ],
                      "start": 1018,
                      "end": 1031
                    },
                    "start": 1012,
                    "end": 1031
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
                          "start": 1036,
                          "end": 1044
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
                              "start": 1047,
                              "end": 1064
                            },
                            "typeArguments": null,
                            "start": 1047,
                            "end": 1064
                          },
                          "start": 1045,
                          "end": 1064
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1036,
                        "end": 1064
                      }
                    ],
                    "start": 1034,
                    "end": 1066
                  }
                ],
                "start": 939,
                "end": 1066
              },
              "start": 937,
              "end": 1066
            },
            "start": 932,
            "end": 1066
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
                "start": 1078,
                "end": 1084
              },
              "start": 1076,
              "end": 1084
            },
            "start": 1072,
            "end": 1084
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
              "start": 1088,
              "end": 1093
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1094,
                  "end": 1097
                }
              ],
              "start": 1093,
              "end": 1098
            },
            "start": 1088,
            "end": 1098
          },
          "start": 1086,
          "end": 1098
        },
        "body": null,
        "expression": false,
        "start": 893,
        "end": 1099
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 886,
      "end": 1099
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
          "start": 1116,
          "end": 1122
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
                "start": 1123,
                "end": 1124
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1123,
              "end": 1124
            }
          ],
          "start": 1122,
          "end": 1125
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
                  "start": 1137,
                  "end": 1150
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
                        "start": 1151,
                        "end": 1152
                      },
                      "typeArguments": null,
                      "start": 1151,
                      "end": 1152
                    }
                  ],
                  "start": 1150,
                  "end": 1153
                },
                "start": 1137,
                "end": 1153
              },
              "start": 1135,
              "end": 1153
            },
            "start": 1131,
            "end": 1153
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
                      "start": 1166,
                      "end": 1176
                    },
                    "typeArguments": null,
                    "start": 1166,
                    "end": 1176
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "typeArguments": null,
                    "start": 1179,
                    "end": 1180
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
                          "start": 1185,
                          "end": 1193
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
                              "start": 1196,
                              "end": 1213
                            },
                            "typeArguments": null,
                            "start": 1196,
                            "end": 1213
                          },
                          "start": 1194,
                          "end": 1213
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1185,
                        "end": 1213
                      }
                    ],
                    "start": 1183,
                    "end": 1215
                  }
                ],
                "start": 1166,
                "end": 1215
              },
              "start": 1164,
              "end": 1215
            },
            "start": 1159,
            "end": 1215
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
                "start": 1227,
                "end": 1233
              },
              "start": 1225,
              "end": 1233
            },
            "start": 1221,
            "end": 1233
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
              "start": 1237,
              "end": 1242
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1243,
                  "end": 1246
                }
              ],
              "start": 1242,
              "end": 1247
            },
            "start": 1237,
            "end": 1247
          },
          "start": 1235,
          "end": 1247
        },
        "body": null,
        "expression": false,
        "start": 1107,
        "end": 1248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1100,
      "end": 1248
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 1418,
        "end": 1424
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                "start": 1463,
                "end": 1466
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSXInternal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1469,
                "end": 1480
              },
              "importKind": "value",
              "start": 1456,
              "end": 1481
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1449,
            "end": 1481
          }
        ],
        "start": 1425,
        "end": 1483
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 1410,
      "end": 1483
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1483
}
```
__ESTREE_TEST__:PASS:
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
