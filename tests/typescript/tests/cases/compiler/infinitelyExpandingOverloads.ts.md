__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutSubscription2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 31
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
              "start": 32,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 33
          }
        ],
        "start": 31,
        "end": 34
      },
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
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 72
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 74
                    }
                  ],
                  "start": 72,
                  "end": 75
                },
                "start": 49,
                "end": 75
              },
              "start": 47,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 76
          }
        ],
        "start": 35,
        "end": 78
      },
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableBase2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          },
                          "start": 151,
                          "end": 154
                        },
                        "start": 143,
                        "end": 154
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 159,
                        "end": 163
                      },
                      "start": 156,
                      "end": 163
                    },
                    "start": 142,
                    "end": 163
                  },
                  "start": 140,
                  "end": 163
                },
                "start": 132,
                "end": 163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 174,
                    "end": 177
                  },
                  "start": 172,
                  "end": 177
                },
                "start": 165,
                "end": 177
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "topic",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 187,
                    "end": 193
                  },
                  "start": 185,
                  "end": 193
                },
                "start": 179,
                "end": 193
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 217
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 219
                    }
                  ],
                  "start": 217,
                  "end": 220
                },
                "start": 196,
                "end": 220
              },
              "start": 194,
              "end": 220
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 122,
            "end": 221
          }
        ],
        "start": 116,
        "end": 223
      },
      "declare": false,
      "start": 79,
      "end": 223
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidationPlacement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 254
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 261
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 261
          }
        ],
        "start": 254,
        "end": 262
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 279
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "validatable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validatable2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 305
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 312
                          },
                          "typeArguments": null,
                          "start": 306,
                          "end": 312
                        }
                      ],
                      "start": 305,
                      "end": 313
                    },
                    "start": 293,
                    "end": 313
                  },
                  "start": 291,
                  "end": 313
                },
                "start": 280,
                "end": 313
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 316,
                "end": 320
              },
              "start": 314,
              "end": 320
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 269,
            "end": 321
          }
        ],
        "start": 263,
        "end": 323
      },
      "declare": false,
      "start": 224,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validatable2",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 346
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 353
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 353
          }
        ],
        "start": 346,
        "end": 354
      },
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
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 396
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 407
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 408,
                              "end": 414
                            },
                            "typeArguments": null,
                            "start": 408,
                            "end": 414
                          }
                        ],
                        "start": 407,
                        "end": 415
                      },
                      "start": 397,
                      "end": 415
                    }
                  ],
                  "start": 396,
                  "end": 416
                },
                "start": 373,
                "end": 416
              },
              "start": 371,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 361,
            "end": 417
          }
        ],
        "start": 355,
        "end": 419
      },
      "declare": false,
      "start": 324,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 436
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 437,
            "end": 443
          }
        ],
        "start": 436,
        "end": 444
      },
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "_subscription",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 472
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 495
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 502
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 502
                    }
                  ],
                  "start": 495,
                  "end": 503
                },
                "start": 474,
                "end": 503
              },
              "start": 472,
              "end": 503
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 451,
            "end": 504
          }
        ],
        "start": 445,
        "end": 506
      },
      "abstract": false,
      "declare": false,
      "start": 420,
      "end": 506
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 522
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 529
          }
        ],
        "start": 522,
        "end": 530
      },
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "validationPlacements",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 564
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 571
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValidationPlacement2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 592
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 599
                            },
                            "typeArguments": null,
                            "start": 593,
                            "end": 599
                          }
                        ],
                        "start": 592,
                        "end": 600
                      },
                      "start": 572,
                      "end": 600
                    }
                  ],
                  "start": 571,
                  "end": 601
                },
                "start": 566,
                "end": 601
              },
              "start": 564,
              "end": 601
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 613
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValidationPlacement2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 634
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 635,
                            "end": 641
                          },
                          "typeArguments": null,
                          "start": 635,
                          "end": 641
                        }
                      ],
                      "start": 634,
                      "end": 642
                    },
                    "start": 614,
                    "end": 642
                  }
                ],
                "start": 613,
                "end": 643
              },
              "arguments": [],
              "start": 604,
              "end": 645
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 537,
            "end": 646
          }
        ],
        "start": 531,
        "end": 648
      },
      "abstract": false,
      "declare": false,
      "start": 507,
      "end": 648
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Widget",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 661
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 668
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 662,
            "end": 668
          }
        ],
        "start": 661,
        "end": 669
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 687
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 713,
                            "end": 722
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 723,
                                  "end": 729
                                },
                                "typeArguments": null,
                                "start": 723,
                                "end": 729
                              }
                            ],
                            "start": 722,
                            "end": 730
                          },
                          "start": 713,
                          "end": 730
                        },
                        "start": 710,
                        "end": 730
                      },
                      "start": 703,
                      "end": 730
                    },
                    "start": 701,
                    "end": 730
                  },
                  "start": 688,
                  "end": 730
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 687,
              "end": 732
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 676,
            "end": 732
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
              "start": 772,
              "end": 783
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 809,
                            "end": 818
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 819,
                                  "end": 825
                                },
                                "typeArguments": null,
                                "start": 819,
                                "end": 825
                              }
                            ],
                            "start": 818,
                            "end": 826
                          },
                          "start": 809,
                          "end": 826
                        },
                        "start": 806,
                        "end": 826
                      },
                      "start": 799,
                      "end": 826
                    },
                    "start": 797,
                    "end": 826
                  },
                  "start": 784,
                  "end": 826
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 828,
                "end": 835
              },
              "expression": false,
              "start": 783,
              "end": 835
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 772,
            "end": 835
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 858
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
                    "name": "ViewModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 871
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 878
                        },
                        "typeArguments": null,
                        "start": 872,
                        "end": 878
                      }
                    ],
                    "start": 871,
                    "end": 879
                  },
                  "start": 862,
                  "end": 879
                },
                "start": 860,
                "end": 879
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 897,
                      "end": 901
                    },
                    "start": 890,
                    "end": 902
                  }
                ],
                "start": 880,
                "end": 908
              },
              "expression": false,
              "start": 858,
              "end": 908
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 840,
            "end": 908
          }
        ],
        "start": 670,
        "end": 910
      },
      "abstract": false,
      "declare": false,
      "start": 649,
      "end": 910
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 910
}
```
