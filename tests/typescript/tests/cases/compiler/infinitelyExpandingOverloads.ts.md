__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 910,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 31,
        "decorators": [],
        "name": "KnockoutSubscription2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 78,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 72,
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 72,
                  "end": 75,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 73,
                      "end": 74,
                      "typeName": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 74,
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 112,
        "decorators": [],
        "name": "KnockoutObservableBase2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 223,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 122,
            "end": 221,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 131,
              "decorators": [],
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 163,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 140,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 142,
                    "end": 163,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 143,
                        "end": 154,
                        "decorators": [],
                        "name": "newValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 154,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 153,
                            "end": 154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "T",
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
                      "start": 156,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 159,
                        "end": 163
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 165,
                "end": 177,
                "decorators": [],
                "name": "target",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 174,
                    "end": 177
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 179,
                "end": 193,
                "decorators": [],
                "name": "topic",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 187,
                    "end": 193
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 217,
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 217,
                  "end": 220,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 218,
                      "end": 219,
                      "typeName": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 224,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 254,
        "decorators": [],
        "name": "ValidationPlacement2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 254,
        "end": 262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 261,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 261,
              "decorators": [],
              "name": "TValue",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 323,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 269,
            "end": 321,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 279,
              "decorators": [],
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 313,
                "decorators": [],
                "name": "validatable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 291,
                  "end": 313,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 313,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 305,
                      "decorators": [],
                      "name": "Validatable2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 305,
                      "end": 313,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 306,
                          "end": 312,
                          "typeName": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 312,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 320,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 316,
                "end": 320
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 324,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 346,
        "decorators": [],
        "name": "Validatable2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 353,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 353,
              "decorators": [],
              "name": "TValue",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 355,
        "end": 419,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 361,
            "end": 417,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 371,
              "decorators": [],
              "name": "validators",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 416,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 416,
                "typeName": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 396,
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 396,
                  "end": 416,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 397,
                      "end": 415,
                      "typeName": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 407,
                        "decorators": [],
                        "name": "Validator2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 407,
                        "end": 415,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 408,
                            "end": 414,
                            "typeName": {
                              "type": "Identifier",
                              "start": 408,
                              "end": 414,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
      "type": "ClassDeclaration",
      "start": 420,
      "end": 506,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 436,
        "decorators": [],
        "name": "Validator2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 436,
        "end": 444,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 443,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 443,
              "decorators": [],
              "name": "TValue",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 445,
        "end": 506,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 451,
            "end": 504,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 472,
              "decorators": [],
              "name": "_subscription",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 503,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 503,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 495,
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 495,
                  "end": 503,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 496,
                      "end": 502,
                      "typeName": {
                        "type": "Identifier",
                        "start": 496,
                        "end": 502,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 507,
      "end": 648,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 522,
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 522,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 523,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 523,
              "end": 529,
              "decorators": [],
              "name": "TValue",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 531,
        "end": 648,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 537,
            "end": 646,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 544,
              "end": 564,
              "decorators": [],
              "name": "validationPlacements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 564,
              "end": 601,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 566,
                "end": 601,
                "typeName": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 571,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 571,
                  "end": 601,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 572,
                      "end": 600,
                      "typeName": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 592,
                        "decorators": [],
                        "name": "ValidationPlacement2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 592,
                        "end": 600,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 593,
                            "end": 599,
                            "typeName": {
                              "type": "Identifier",
                              "start": 593,
                              "end": 599,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 604,
              "end": 645,
              "callee": {
                "type": "Identifier",
                "start": 608,
                "end": 613,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 613,
                "end": 643,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 614,
                    "end": 642,
                    "typeName": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 634,
                      "decorators": [],
                      "name": "ValidationPlacement2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 634,
                      "end": 642,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 635,
                          "end": 641,
                          "typeName": {
                            "type": "Identifier",
                            "start": 635,
                            "end": 641,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              },
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 649,
      "end": 910,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 661,
        "decorators": [],
        "name": "Widget",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 661,
        "end": 669,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 662,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 662,
              "end": 668,
              "decorators": [],
              "name": "TValue",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 670,
        "end": 910,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 676,
            "end": 732,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 687,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 687,
              "end": 732,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 688,
                  "end": 730,
                  "decorators": [],
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 701,
                    "end": 730,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 703,
                      "end": 730,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 710,
                        "end": 730,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 713,
                          "end": 730,
                          "typeName": {
                            "type": "Identifier",
                            "start": 713,
                            "end": 722,
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 722,
                            "end": 730,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 723,
                                "end": 729,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 723,
                                  "end": 729,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 835,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 783,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 783,
              "end": 835,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 784,
                  "end": 826,
                  "decorators": [],
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 797,
                    "end": 826,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 799,
                      "end": 826,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 806,
                        "end": 826,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 809,
                          "end": 826,
                          "typeName": {
                            "type": "Identifier",
                            "start": 809,
                            "end": 818,
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 818,
                            "end": 826,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 819,
                                "end": 825,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 819,
                                  "end": 825,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 828,
                "end": 835,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 840,
            "end": 908,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 858,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 858,
              "end": 908,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 860,
                "end": 879,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 862,
                  "end": 879,
                  "typeName": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 871,
                    "decorators": [],
                    "name": "ViewModel",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 871,
                    "end": 879,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 872,
                        "end": 878,
                        "typeName": {
                          "type": "Identifier",
                          "start": 872,
                          "end": 878,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 880,
                "end": 908,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 890,
                    "end": 902,
                    "argument": {
                      "type": "Literal",
                      "start": 897,
                      "end": 901,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
