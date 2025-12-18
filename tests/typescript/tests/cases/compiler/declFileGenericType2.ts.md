__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 24
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 28
        },
        "start": 18,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 51
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 52,
              "end": 59
            },
            "declare": false,
            "start": 35,
            "end": 59
          }
        ],
        "start": 29,
        "end": 61
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 86
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "start": 80,
        "end": 90
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IController",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 118
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ModelType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 128
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "templa",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 143
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 147
                        },
                        "start": 137,
                        "end": 147
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 154
                      },
                      "start": 137,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 137,
                    "end": 154
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 119,
                  "end": 154
                }
              ],
              "start": 118,
              "end": 155
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 156,
              "end": 163
            },
            "declare": false,
            "start": 97,
            "end": 163
          }
        ],
        "start": 91,
        "end": 165
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 62,
      "end": 165
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 190
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 194
        },
        "start": 184,
        "end": 194
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractController",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 225
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ModelType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 235
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "templa",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 250
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 254
                        },
                        "start": 244,
                        "end": 254
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 261
                      },
                      "start": 244,
                      "end": 261
                    },
                    "typeArguments": null,
                    "start": 244,
                    "end": 261
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 226,
                  "end": 261
                }
              ],
              "start": 225,
              "end": 262
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 277
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IController",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 289
                  },
                  "optional": false,
                  "computed": false,
                  "start": 274,
                  "end": 289
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModelType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 299
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 299
                    }
                  ],
                  "start": 289,
                  "end": 300
                },
                "start": 274,
                "end": 300
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 301,
              "end": 308
            },
            "abstract": false,
            "declare": false,
            "start": 201,
            "end": 308
          }
        ],
        "start": 195,
        "end": 310
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 166,
      "end": 310
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 335
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 339
          },
          "start": 329,
          "end": 339
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 349
        },
        "start": 329,
        "end": 349
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICompositeControllerModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 391
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 403
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 410
                  },
                  "optional": false,
                  "computed": false,
                  "start": 400,
                  "end": 410
                },
                "typeArguments": null,
                "start": 400,
                "end": 410
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getControllers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 435
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 442
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IController",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 443,
                            "end": 454
                          },
                          "start": 439,
                          "end": 454
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mvc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 458
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IModel",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 459,
                                  "end": 465
                                },
                                "start": 455,
                                "end": 465
                              },
                              "typeArguments": null,
                              "start": 455,
                              "end": 465
                            }
                          ],
                          "start": 454,
                          "end": 466
                        },
                        "start": 439,
                        "end": 466
                      },
                      "start": 439,
                      "end": 468
                    },
                    "start": 437,
                    "end": 468
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 421,
                  "end": 469
                }
              ],
              "start": 411,
              "end": 475
            },
            "declare": false,
            "start": 356,
            "end": 475
          }
        ],
        "start": 350,
        "end": 477
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 311,
      "end": 477
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 494
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 498
          },
          "start": 488,
          "end": 498
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 502
        },
        "start": 488,
        "end": 502
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IElementController",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 544
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 554
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "templa",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 569
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 570,
                            "end": 573
                          },
                          "start": 563,
                          "end": 573
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 580
                        },
                        "start": 563,
                        "end": 580
                      },
                      "typeArguments": null,
                      "start": 563,
                      "end": 580
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 545,
                    "end": 580
                  }
                ],
                "start": 544,
                "end": 581
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "templa",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mvc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 600
                      },
                      "optional": false,
                      "computed": false,
                      "start": 590,
                      "end": 600
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IController",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 601,
                      "end": 612
                    },
                    "optional": false,
                    "computed": false,
                    "start": 590,
                    "end": 612
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModelType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 613,
                          "end": 622
                        },
                        "typeArguments": null,
                        "start": 613,
                        "end": 622
                      }
                    ],
                    "start": 612,
                    "end": 623
                  },
                  "start": 590,
                  "end": 623
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 624,
                "end": 631
              },
              "declare": false,
              "start": 516,
              "end": 631
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 509,
            "end": 631
          }
        ],
        "start": 503,
        "end": 633
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 478,
      "end": 633
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 660
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 664
          },
          "start": 654,
          "end": 664
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 668
        },
        "start": 654,
        "end": 668
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractElementController",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 714
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 724
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "templa",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 739
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 740,
                            "end": 743
                          },
                          "start": 733,
                          "end": 743
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 750
                        },
                        "start": 733,
                        "end": 750
                      },
                      "typeArguments": null,
                      "start": 733,
                      "end": 750
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 715,
                    "end": 750
                  }
                ],
                "start": 714,
                "end": 751
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "templa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 766
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 767,
                    "end": 770
                  },
                  "optional": false,
                  "computed": false,
                  "start": 760,
                  "end": 770
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AbstractController",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 789
                },
                "optional": false,
                "computed": false,
                "start": 760,
                "end": 789
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 799
                    },
                    "typeArguments": null,
                    "start": 790,
                    "end": 799
                  }
                ],
                "start": 789,
                "end": 800
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IElementController",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 830
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModelType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 840
                        },
                        "typeArguments": null,
                        "start": 831,
                        "end": 840
                      }
                    ],
                    "start": 830,
                    "end": 841
                  },
                  "start": 812,
                  "end": 841
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
                      "start": 852,
                      "end": 863
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "start": 880,
                                "end": 885
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 880,
                              "end": 887
                            },
                            "directive": null,
                            "start": 880,
                            "end": 888
                          }
                        ],
                        "start": 866,
                        "end": 898
                      },
                      "expression": false,
                      "start": 863,
                      "end": 898
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 852,
                    "end": 898
                  }
                ],
                "start": 842,
                "end": 904
              },
              "abstract": false,
              "declare": false,
              "start": 683,
              "end": 904
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 676,
            "end": 904
          }
        ],
        "start": 669,
        "end": 906
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 644,
      "end": 906
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "templa",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 933
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 934,
              "end": 937
            },
            "start": 927,
            "end": 937
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 941
          },
          "start": 927,
          "end": 941
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null,
          "start": 942,
          "end": 951
        },
        "start": 927,
        "end": 951
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractCompositeElementController",
                "optional": false,
                "typeAnnotation": null,
                "start": 971,
                "end": 1005
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1006,
                      "end": 1015
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "templa",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1024,
                              "end": 1030
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mvc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1031,
                              "end": 1034
                            },
                            "start": 1024,
                            "end": 1034
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "composite",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1044
                          },
                          "start": 1024,
                          "end": 1044
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ICompositeControllerModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1045,
                          "end": 1070
                        },
                        "start": 1024,
                        "end": 1070
                      },
                      "typeArguments": null,
                      "start": 1024,
                      "end": 1070
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1006,
                    "end": 1070
                  }
                ],
                "start": 1005,
                "end": 1071
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1080,
                      "end": 1086
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dom",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1087,
                      "end": 1090
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1080,
                    "end": 1090
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1091,
                    "end": 1094
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1080,
                  "end": 1094
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AbstractElementController",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1120
                },
                "optional": false,
                "computed": false,
                "start": 1080,
                "end": 1120
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1130
                    },
                    "typeArguments": null,
                    "start": 1121,
                    "end": 1130
                  }
                ],
                "start": 1120,
                "end": 1131
              },
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
                      "name": "_controllers",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1149,
                      "end": 1161
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "templa",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1163,
                                "end": 1169
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mvc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1170,
                                "end": 1173
                              },
                              "start": 1163,
                              "end": 1173
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IController",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1174,
                              "end": 1185
                            },
                            "start": 1163,
                            "end": 1185
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "templa",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1186,
                                      "end": 1192
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "mvc",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1193,
                                      "end": 1196
                                    },
                                    "start": 1186,
                                    "end": 1196
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IModel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1197,
                                    "end": 1203
                                  },
                                  "start": 1186,
                                  "end": 1203
                                },
                                "typeArguments": null,
                                "start": 1186,
                                "end": 1203
                              }
                            ],
                            "start": 1185,
                            "end": 1204
                          },
                          "start": 1163,
                          "end": 1204
                        },
                        "start": 1163,
                        "end": 1206
                      },
                      "start": 1161,
                      "end": 1206
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1142,
                    "end": 1207
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1216,
                      "end": 1227
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "start": 1244,
                                "end": 1249
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1244,
                              "end": 1251
                            },
                            "directive": null,
                            "start": 1244,
                            "end": 1252
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1265,
                                  "end": 1269
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_controllers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1270,
                                  "end": 1282
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1265,
                                "end": 1282
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [],
                                "start": 1285,
                                "end": 1287
                              },
                              "start": 1265,
                              "end": 1287
                            },
                            "directive": null,
                            "start": 1265,
                            "end": 1288
                          }
                        ],
                        "start": 1230,
                        "end": 1298
                      },
                      "expression": false,
                      "start": 1227,
                      "end": 1298
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1216,
                    "end": 1298
                  }
                ],
                "start": 1132,
                "end": 1304
              },
              "abstract": false,
              "declare": false,
              "start": 965,
              "end": 1304
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 958,
            "end": 1304
          }
        ],
        "start": 952,
        "end": 1306
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 917,
      "end": 1306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1306
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 25,
    "end": 28,
    "range": [
      25,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44,
    "range": [
      35,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 62,
    "end": 69,
    "range": [
      62,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 70,
    "end": 79,
    "range": [
      70,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106,
    "range": [
      97,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "IController",
    "start": 107,
    "end": 118,
    "range": [
      107,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 119,
    "end": 128,
    "range": [
      119,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136,
    "range": [
      129,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 137,
    "end": 143,
    "range": [
      137,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
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
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 166,
    "end": 173,
    "range": [
      166,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 174,
    "end": 183,
    "range": [
      174,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 184,
    "end": 190,
    "range": [
      184,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 191,
    "end": 194,
    "range": [
      191,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractController",
    "start": 207,
    "end": 225,
    "range": [
      207,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 226,
    "end": 235,
    "range": [
      226,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 236,
    "end": 243,
    "range": [
      236,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 244,
    "end": 250,
    "range": [
      244,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 263,
    "end": 273,
    "range": [
      263,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "IController",
    "start": 278,
    "end": 289,
    "range": [
      278,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 290,
    "end": 299,
    "range": [
      290,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 311,
    "end": 318,
    "range": [
      311,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 319,
    "end": 328,
    "range": [
      319,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 329,
    "end": 335,
    "range": [
      329,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "composite",
    "start": 340,
    "end": 349,
    "range": [
      340,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 356,
    "end": 365,
    "range": [
      356,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "ICompositeControllerModel",
    "start": 366,
    "end": 391,
    "range": [
      366,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399,
    "range": [
      392,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "getControllers",
    "start": 421,
    "end": 435,
    "range": [
      421,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "IController",
    "start": 443,
    "end": 454,
    "range": [
      443,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 478,
    "end": 487,
    "range": [
      478,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 488,
    "end": 494,
    "range": [
      488,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 495,
    "end": 498,
    "range": [
      495,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 509,
    "end": 515,
    "range": [
      509,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 516,
    "end": 525,
    "range": [
      516,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "IElementController",
    "start": 526,
    "end": 544,
    "range": [
      526,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 545,
    "end": 554,
    "range": [
      545,
      554
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 555,
    "end": 562,
    "range": [
      555,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 563,
    "end": 569,
    "range": [
      563,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 574,
    "end": 580,
    "range": [
      574,
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
    "type": "Keyword",
    "value": "extends",
    "start": 582,
    "end": 589,
    "range": [
      582,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 590,
    "end": 596,
    "range": [
      590,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 597,
    "end": 600,
    "range": [
      597,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "IController",
    "start": 601,
    "end": 612,
    "range": [
      601,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 613,
    "end": 622,
    "range": [
      613,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 644,
    "end": 653,
    "range": [
      644,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 654,
    "end": 660,
    "range": [
      654,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 665,
    "end": 668,
    "range": [
      665,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 676,
    "end": 682,
    "range": [
      676,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 683,
    "end": 688,
    "range": [
      683,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractElementController",
    "start": 689,
    "end": 714,
    "range": [
      689,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 715,
    "end": 724,
    "range": [
      715,
      724
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 725,
    "end": 732,
    "range": [
      725,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 733,
    "end": 739,
    "range": [
      733,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 740,
    "end": 743,
    "range": [
      740,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 744,
    "end": 750,
    "range": [
      744,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 752,
    "end": 759,
    "range": [
      752,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 767,
    "end": 770,
    "range": [
      767,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractController",
    "start": 771,
    "end": 789,
    "range": [
      771,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 790,
    "end": 799,
    "range": [
      790,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 801,
    "end": 811,
    "range": [
      801,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "IElementController",
    "start": 812,
    "end": 830,
    "range": [
      812,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 831,
    "end": 840,
    "range": [
      831,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 852,
    "end": 863,
    "range": [
      852,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
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
    "type": "Identifier",
    "value": "namespace",
    "start": 917,
    "end": 926,
    "range": [
      917,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 938,
    "end": 941,
    "range": [
      938,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Identifier",
    "value": "composite",
    "start": 942,
    "end": 951,
    "range": [
      942,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 958,
    "end": 964,
    "range": [
      958,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 965,
    "end": 970,
    "range": [
      965,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractCompositeElementController",
    "start": 971,
    "end": 1005,
    "range": [
      971,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 1006,
    "end": 1015,
    "range": [
      1006,
      1015
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1016,
    "end": 1023,
    "range": [
      1016,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 1024,
    "end": 1030,
    "range": [
      1024,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 1031,
    "end": 1034,
    "range": [
      1031,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "composite",
    "start": 1035,
    "end": 1044,
    "range": [
      1035,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "ICompositeControllerModel",
    "start": 1045,
    "end": 1070,
    "range": [
      1045,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1072,
    "end": 1079,
    "range": [
      1072,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 1080,
    "end": 1086,
    "range": [
      1080,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1087,
    "end": 1090,
    "range": [
      1087,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 1091,
    "end": 1094,
    "range": [
      1091,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractElementController",
    "start": 1095,
    "end": 1120,
    "range": [
      1095,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "ModelType",
    "start": 1121,
    "end": 1130,
    "range": [
      1121,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1142,
    "end": 1148,
    "range": [
      1142,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "_controllers",
    "start": 1149,
    "end": 1161,
    "range": [
      1149,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 1170,
    "end": 1173,
    "range": [
      1170,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "IController",
    "start": 1174,
    "end": 1185,
    "range": [
      1174,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "templa",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "mvc",
    "start": 1193,
    "end": 1196,
    "range": [
      1193,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "IModel",
    "start": 1197,
    "end": 1203,
    "range": [
      1197,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1216,
    "end": 1227,
    "range": [
      1216,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1244,
    "end": 1249,
    "range": [
      1244,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1265,
    "end": 1269,
    "range": [
      1265,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "_controllers",
    "start": 1270,
    "end": 1282,
    "range": [
      1270,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  }
]
```
