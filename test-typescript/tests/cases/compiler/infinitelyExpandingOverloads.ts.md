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
        "name": "KnockoutSubscription2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "KnockoutObservableBase2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 112,
        "name": "KnockoutObservableBase2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "subscribe",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "callback",
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
                        "name": "newValue",
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
                              "name": "T",
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
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 165,
                "end": 177,
                "name": "target",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 174,
                    "end": 177
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 179,
                "end": 193,
                "name": "topic",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 187,
                    "end": 193
                  }
                },
                "decorators": [],
                "optional": true
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
                  "name": "KnockoutSubscription2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
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
        "name": "ValidationPlacement2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "TValue",
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
              "name": "initialize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "validatable",
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
                      "name": "Validatable2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "TValue",
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
                "decorators": [],
                "optional": false
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
        "name": "Validatable2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "TValue",
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
              "name": "validators",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "KnockoutObservableBase2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Validator2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 436,
        "name": "Validator2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 445,
        "end": 506,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 451,
            "end": 504,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 472,
              "name": "_subscription",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "KnockoutSubscription2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TValue",
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
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
              "name": "TValue",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 507,
      "end": 648,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 522,
        "name": "ViewModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 531,
        "end": 648,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 537,
            "end": 646,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 544,
              "end": 564,
              "name": "validationPlacements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 604,
              "end": 645,
              "callee": {
                "type": "Identifier",
                "start": 608,
                "end": 613,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
                      "name": "ValidationPlacement2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "ValidationPlacement2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "TValue",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 649,
      "end": 910,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 661,
        "name": "Widget",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 670,
        "end": 910,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 676,
            "end": 732,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 687,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 687,
              "end": 732,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 688,
                  "end": 730,
                  "name": "viewModelType",
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
                            "name": "ViewModel",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "TValue",
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
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 835,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 783,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 783,
              "end": 835,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 784,
                  "end": 826,
                  "name": "viewModelType",
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
                            "name": "ViewModel",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "TValue",
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
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 828,
                "end": 835,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 840,
            "end": 908,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 858,
              "name": "options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 858,
              "end": 908,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "ViewModel",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TValue",
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
              "name": "TValue",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
