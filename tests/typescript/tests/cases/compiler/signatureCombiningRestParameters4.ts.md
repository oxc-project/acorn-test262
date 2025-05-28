__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1198,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 134,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 26,
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 38,
            "end": 51,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
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
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
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
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 89,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 78,
                "end": 89,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 78,
                    "end": 82,
                    "typeName": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 82,
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 85,
                    "end": 89
                  }
                ]
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
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 112,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 98,
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 100,
                "end": 111,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 100,
                    "end": 104,
                    "typeName": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 107,
                    "end": 111
                  }
                ]
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
          },
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 132,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 122,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "decorators": [],
                  "name": "Options",
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
      "start": 136,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 156,
        "decorators": [],
        "name": "NodeConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 164,
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 167,
              "end": 170
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 353,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 351,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 192,
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 350,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 199,
                "end": 350,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 202,
                    "end": 338,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 212,
                        "end": 281,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 216,
                          "end": 281,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 218,
                            "end": 281,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 230,
                                "end": 243,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 234,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 234,
                                  "end": 242,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 236,
                                    "end": 242
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 254,
                                "end": 271,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 261,
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 261,
                                  "end": 270,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 263,
                                    "end": 270,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 263,
                                      "end": 270,
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 291,
                        "end": 306,
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 300,
                          "end": 306,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 302,
                            "end": 306,
                            "typeName": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 306,
                              "decorators": [],
                              "name": "Node",
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
                      "start": 316,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 325,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 325,
                          "end": 338,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 326,
                              "end": 332
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 334,
                              "end": 337
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 346,
                    "end": 350
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
      "type": "ClassDeclaration",
      "start": 355,
      "end": 434,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 373,
        "decorators": [],
        "name": "Mark",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 373,
        "end": 388,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 374,
            "end": 387,
            "name": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 384,
              "end": 387
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 389,
        "end": 434,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 393,
            "end": 410,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 400,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 402,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 409,
                  "decorators": [],
                  "name": "Options",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 413,
            "end": 432,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 419,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 419,
              "end": 431,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 421,
                "end": 431,
                "typeName": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 431,
                  "decorators": [],
                  "name": "MarkConfig",
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
      "start": 436,
      "end": 653,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 456,
        "decorators": [],
        "name": "MarkConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 456,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 470,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 464,
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 467,
              "end": 470
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 472,
        "end": 653,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 476,
            "end": 651,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 492,
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 650,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 499,
                "end": 650,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 502,
                    "end": 638,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 512,
                        "end": 581,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 516,
                          "end": 581,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 518,
                            "end": 581,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 530,
                                "end": 543,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 530,
                                  "end": 534,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 534,
                                  "end": 542,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 536,
                                    "end": 542
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 554,
                                "end": 571,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 554,
                                  "end": 561,
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 561,
                                  "end": 570,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 563,
                                    "end": 570,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 563,
                                      "end": 570,
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 591,
                        "end": 606,
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 600,
                          "end": 606,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 602,
                            "end": 606,
                            "typeName": {
                              "type": "Identifier",
                              "start": 602,
                              "end": 606,
                              "decorators": [],
                              "name": "Mark",
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
                      "start": 616,
                      "end": 638,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 619,
                        "end": 638,
                        "typeName": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 625,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 625,
                          "end": 638,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 626,
                              "end": 632
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 634,
                              "end": 637
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 646,
                    "end": 650
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
      "start": 655,
      "end": 696,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 669,
        "decorators": [],
        "name": "AnyConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 672,
        "end": 695,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 672,
            "end": 682,
            "typeName": {
              "type": "Identifier",
              "start": 672,
              "end": 682,
              "decorators": [],
              "name": "NodeConfig",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 685,
            "end": 695,
            "typeName": {
              "type": "Identifier",
              "start": 685,
              "end": 695,
              "decorators": [],
              "name": "MarkConfig",
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
      "type": "TSTypeAliasDeclaration",
      "start": 697,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 714,
        "decorators": [],
        "name": "AnyExtension",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 717,
        "end": 728,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 717,
            "end": 721,
            "typeName": {
              "type": "Identifier",
              "start": 717,
              "end": 721,
              "decorators": [],
              "name": "Node",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 724,
            "end": 728,
            "typeName": {
              "type": "Identifier",
              "start": 724,
              "end": 728,
              "decorators": [],
              "name": "Mark",
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
      "type": "VariableDeclaration",
      "start": 731,
      "end": 761,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 760,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 760,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 746,
              "end": 760,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 748,
                "end": 760,
                "typeName": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 760,
                  "decorators": [],
                  "name": "AnyExtension",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 763,
      "end": 868,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 778,
        "decorators": [],
        "name": "RemoveThis",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 778,
        "end": 781,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 779,
            "end": 780,
            "name": {
              "type": "Identifier",
              "start": 779,
              "end": 780,
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
        "type": "TSConditionalType",
        "start": 784,
        "end": 867,
        "checkType": {
          "type": "TSTypeReference",
          "start": 784,
          "end": 785,
          "typeName": {
            "type": "Identifier",
            "start": 784,
            "end": 785,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 794,
          "end": 815,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 795,
              "end": 807,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 798,
                "end": 802,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 802,
                "end": 807,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 804,
                  "end": 807
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 809,
            "end": 815,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 812,
              "end": 815
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 820,
          "end": 861,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 821,
              "end": 843,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 824,
                "end": 828,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 828,
                "end": 843,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 830,
                  "end": 843,
                  "typeName": {
                    "type": "Identifier",
                    "start": 830,
                    "end": 840,
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 840,
                    "end": 843,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 841,
                        "end": 842,
                        "typeName": {
                          "type": "Identifier",
                          "start": 841,
                          "end": 842,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 845,
            "end": 861,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 848,
              "end": 861,
              "typeName": {
                "type": "Identifier",
                "start": 848,
                "end": 858,
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 858,
                "end": 861,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 859,
                    "end": 860,
                    "typeName": {
                      "type": "Identifier",
                      "start": 859,
                      "end": 860,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 866,
          "end": 867,
          "typeName": {
            "type": "Identifier",
            "start": 866,
            "end": 867,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 870,
      "end": 976,
      "id": {
        "type": "Identifier",
        "start": 887,
        "end": 904,
        "decorators": [],
        "name": "getExtensionField",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 904,
        "end": 913,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 905,
            "end": 912,
            "name": {
              "type": "Identifier",
              "start": 905,
              "end": 906,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 909,
              "end": 912
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 917,
          "end": 940,
          "decorators": [],
          "name": "extension",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 940,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 928,
              "end": 940,
              "typeName": {
                "type": "Identifier",
                "start": 928,
                "end": 940,
                "decorators": [],
                "name": "AnyExtension",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 944,
          "end": 957,
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 949,
            "end": 957,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 951,
              "end": 957
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 960,
        "end": 975,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 962,
          "end": 975,
          "typeName": {
            "type": "Identifier",
            "start": 962,
            "end": 972,
            "decorators": [],
            "name": "RemoveThis",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 972,
            "end": 975,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 973,
                "end": 974,
                "typeName": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 974,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 978,
      "end": 1082,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 984,
          "end": 1081,
          "id": {
            "type": "Identifier",
            "start": 984,
            "end": 1000,
            "decorators": [],
            "name": "extendMarkSchema",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1003,
            "end": 1081,
            "callee": {
              "type": "Identifier",
              "start": 1003,
              "end": 1020,
              "decorators": [],
              "name": "getExtensionField",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1020,
              "end": 1051,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1021,
                  "end": 1050,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1021,
                    "end": 1030,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1021,
                      "end": 1030,
                      "decorators": [],
                      "name": "AnyConfig",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1031,
                    "end": 1049,
                    "literal": {
                      "type": "Literal",
                      "start": 1031,
                      "end": 1049,
                      "value": "extendMarkSchema",
                      "raw": "\"extendMarkSchema\""
                    }
                  }
                }
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1060,
                "end": 1078,
                "value": "extendMarkSchema",
                "raw": "\"extendMarkSchema\""
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
      "start": 1084,
      "end": 1119,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1098,
          "end": 1118,
          "id": {
            "type": "Identifier",
            "start": 1098,
            "end": 1118,
            "decorators": [],
            "name": "extension",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1107,
              "end": 1118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1109,
                "end": 1118,
                "typeName": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1113,
                  "decorators": [],
                  "name": "Mark",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1113,
                  "end": 1118,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1114,
                      "end": 1117
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 1121,
      "end": 1186,
      "test": {
        "type": "Identifier",
        "start": 1125,
        "end": 1141,
        "decorators": [],
        "name": "extendMarkSchema",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1143,
        "end": 1186,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1147,
            "end": 1175,
            "expression": {
              "type": "CallExpression",
              "start": 1147,
              "end": 1174,
              "callee": {
                "type": "Identifier",
                "start": 1147,
                "end": 1163,
                "decorators": [],
                "name": "extendMarkSchema",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1173,
                  "decorators": [],
                  "name": "extension",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1188,
      "end": 1198,
      "declaration": null,
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
