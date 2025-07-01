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
          "start": 15,
          "end": 21
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "start": 15,
        "end": 25
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
              "start": 42,
              "end": 48
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 49,
              "end": 56
            },
            "declare": false,
            "start": 32,
            "end": 56
          }
        ],
        "start": 26,
        "end": 58
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 58
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
          "start": 74,
          "end": 80
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 84
        },
        "start": 74,
        "end": 84
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
              "start": 101,
              "end": 112
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
                    "start": 113,
                    "end": 122
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
                          "start": 131,
                          "end": 137
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 141
                        },
                        "start": 131,
                        "end": 141
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 148
                      },
                      "start": 131,
                      "end": 148
                    },
                    "typeArguments": null,
                    "start": 131,
                    "end": 148
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 113,
                  "end": 148
                }
              ],
              "start": 112,
              "end": 149
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 150,
              "end": 157
            },
            "declare": false,
            "start": 91,
            "end": 157
          }
        ],
        "start": 85,
        "end": 159
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 59,
      "end": 159
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
          "start": 175,
          "end": 181
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 185
        },
        "start": 175,
        "end": 185
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
              "start": 198,
              "end": 216
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
                    "start": 217,
                    "end": 226
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
                          "start": 235,
                          "end": 241
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 245
                        },
                        "start": 235,
                        "end": 245
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 252
                      },
                      "start": 235,
                      "end": 252
                    },
                    "typeArguments": null,
                    "start": 235,
                    "end": 252
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 217,
                  "end": 252
                }
              ],
              "start": 216,
              "end": 253
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
                    "start": 265,
                    "end": 268
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IController",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 280
                  },
                  "optional": false,
                  "computed": false,
                  "start": 265,
                  "end": 280
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
                        "start": 281,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 281,
                      "end": 290
                    }
                  ],
                  "start": 280,
                  "end": 291
                },
                "start": 265,
                "end": 291
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 292,
              "end": 299
            },
            "abstract": false,
            "declare": false,
            "start": 192,
            "end": 299
          }
        ],
        "start": 186,
        "end": 301
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 160,
      "end": 301
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
            "start": 317,
            "end": 323
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 327
          },
          "start": 317,
          "end": 327
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 337
        },
        "start": 317,
        "end": 337
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
              "start": 354,
              "end": 379
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
                    "start": 388,
                    "end": 391
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 398
                  },
                  "optional": false,
                  "computed": false,
                  "start": 388,
                  "end": 398
                },
                "typeArguments": null,
                "start": 388,
                "end": 398
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
                    "start": 409,
                    "end": 423
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
                            "start": 427,
                            "end": 430
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IController",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 431,
                            "end": 442
                          },
                          "start": 427,
                          "end": 442
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
                                  "start": 443,
                                  "end": 446
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IModel",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 447,
                                  "end": 453
                                },
                                "start": 443,
                                "end": 453
                              },
                              "typeArguments": null,
                              "start": 443,
                              "end": 453
                            }
                          ],
                          "start": 442,
                          "end": 454
                        },
                        "start": 427,
                        "end": 454
                      },
                      "start": 427,
                      "end": 456
                    },
                    "start": 425,
                    "end": 456
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 409,
                  "end": 457
                }
              ],
              "start": 399,
              "end": 463
            },
            "declare": false,
            "start": 344,
            "end": 463
          }
        ],
        "start": 338,
        "end": 465
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 302,
      "end": 465
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
            "start": 473,
            "end": 479
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 483
          },
          "start": 473,
          "end": 483
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 487
        },
        "start": 473,
        "end": 487
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
                "start": 511,
                "end": 529
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
                      "start": 530,
                      "end": 539
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
                            "start": 548,
                            "end": 554
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 558
                          },
                          "start": 548,
                          "end": 558
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 565
                        },
                        "start": 548,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 548,
                      "end": 565
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 530,
                    "end": 565
                  }
                ],
                "start": 529,
                "end": 566
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
                        "start": 575,
                        "end": 581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mvc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 585
                      },
                      "optional": false,
                      "computed": false,
                      "start": 575,
                      "end": 585
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IController",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 597
                    },
                    "optional": false,
                    "computed": false,
                    "start": 575,
                    "end": 597
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
                          "start": 598,
                          "end": 607
                        },
                        "typeArguments": null,
                        "start": 598,
                        "end": 607
                      }
                    ],
                    "start": 597,
                    "end": 608
                  },
                  "start": 575,
                  "end": 608
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 609,
                "end": 616
              },
              "declare": false,
              "start": 501,
              "end": 616
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 494,
            "end": 616
          }
        ],
        "start": 488,
        "end": 618
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 466,
      "end": 618
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
            "start": 636,
            "end": 642
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 643,
            "end": 646
          },
          "start": 636,
          "end": 646
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null,
          "start": 647,
          "end": 650
        },
        "start": 636,
        "end": 650
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
                "start": 671,
                "end": 696
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
                      "start": 697,
                      "end": 706
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
                            "start": 715,
                            "end": 721
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 725
                          },
                          "start": 715,
                          "end": 725
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 732
                        },
                        "start": 715,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 715,
                      "end": 732
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 697,
                    "end": 732
                  }
                ],
                "start": 696,
                "end": 733
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
                    "start": 742,
                    "end": 748
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 752
                  },
                  "optional": false,
                  "computed": false,
                  "start": 742,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AbstractController",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 742,
                "end": 771
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
                      "start": 772,
                      "end": 781
                    },
                    "typeArguments": null,
                    "start": 772,
                    "end": 781
                  }
                ],
                "start": 771,
                "end": 782
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
                    "start": 794,
                    "end": 812
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
                          "start": 813,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 813,
                        "end": 822
                      }
                    ],
                    "start": 812,
                    "end": 823
                  },
                  "start": 794,
                  "end": 823
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
                      "start": 834,
                      "end": 845
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
                                "start": 862,
                                "end": 867
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 862,
                              "end": 869
                            },
                            "directive": null,
                            "start": 862,
                            "end": 870
                          }
                        ],
                        "start": 848,
                        "end": 880
                      },
                      "expression": false,
                      "start": 845,
                      "end": 880
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 834,
                    "end": 880
                  }
                ],
                "start": 824,
                "end": 886
              },
              "abstract": false,
              "declare": false,
              "start": 665,
              "end": 886
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 658,
            "end": 886
          }
        ],
        "start": 651,
        "end": 888
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 629,
      "end": 888
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
              "start": 906,
              "end": 912
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 916
            },
            "start": 906,
            "end": 916
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null,
            "start": 917,
            "end": 920
          },
          "start": 906,
          "end": 920
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null,
          "start": 921,
          "end": 930
        },
        "start": 906,
        "end": 930
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
                "start": 950,
                "end": 984
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
                      "start": 985,
                      "end": 994
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
                              "start": 1003,
                              "end": 1009
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mvc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1010,
                              "end": 1013
                            },
                            "start": 1003,
                            "end": 1013
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "composite",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1014,
                            "end": 1023
                          },
                          "start": 1003,
                          "end": 1023
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ICompositeControllerModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1024,
                          "end": 1049
                        },
                        "start": 1003,
                        "end": 1049
                      },
                      "typeArguments": null,
                      "start": 1003,
                      "end": 1049
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 985,
                    "end": 1049
                  }
                ],
                "start": 984,
                "end": 1050
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
                      "start": 1059,
                      "end": 1065
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dom",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1069
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1059,
                    "end": 1069
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1073
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1059,
                  "end": 1073
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AbstractElementController",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1099
                },
                "optional": false,
                "computed": false,
                "start": 1059,
                "end": 1099
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
                      "start": 1100,
                      "end": 1109
                    },
                    "typeArguments": null,
                    "start": 1100,
                    "end": 1109
                  }
                ],
                "start": 1099,
                "end": 1110
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
                      "start": 1128,
                      "end": 1140
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
                                "start": 1142,
                                "end": 1148
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mvc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1149,
                                "end": 1152
                              },
                              "start": 1142,
                              "end": 1152
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IController",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1153,
                              "end": 1164
                            },
                            "start": 1142,
                            "end": 1164
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
                                      "start": 1165,
                                      "end": 1171
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "mvc",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1172,
                                      "end": 1175
                                    },
                                    "start": 1165,
                                    "end": 1175
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IModel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1176,
                                    "end": 1182
                                  },
                                  "start": 1165,
                                  "end": 1182
                                },
                                "typeArguments": null,
                                "start": 1165,
                                "end": 1182
                              }
                            ],
                            "start": 1164,
                            "end": 1183
                          },
                          "start": 1142,
                          "end": 1183
                        },
                        "start": 1142,
                        "end": 1185
                      },
                      "start": 1140,
                      "end": 1185
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
                    "start": 1121,
                    "end": 1186
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
                      "start": 1195,
                      "end": 1206
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
                                "start": 1223,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1223,
                              "end": 1230
                            },
                            "directive": null,
                            "start": 1223,
                            "end": 1231
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
                                  "start": 1244,
                                  "end": 1248
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_controllers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1249,
                                  "end": 1261
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1244,
                                "end": 1261
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [],
                                "start": 1264,
                                "end": 1266
                              },
                              "start": 1244,
                              "end": 1266
                            },
                            "directive": null,
                            "start": 1244,
                            "end": 1267
                          }
                        ],
                        "start": 1209,
                        "end": 1277
                      },
                      "expression": false,
                      "start": 1206,
                      "end": 1277
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1195,
                    "end": 1277
                  }
                ],
                "start": 1111,
                "end": 1283
              },
              "abstract": false,
              "declare": false,
              "start": 944,
              "end": 1283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 937,
            "end": 1283
          }
        ],
        "start": 931,
        "end": 1285
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 899,
      "end": 1285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1285
}
```
