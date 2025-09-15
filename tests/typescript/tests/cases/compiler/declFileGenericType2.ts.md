__ESTREE_TEST__:PASS:
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
