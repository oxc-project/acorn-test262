__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 117,
  "end": 1137,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 117,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 126,
        "decorators": [],
        "name": "Tail",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 137,
              "end": 142,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 146,
        "end": 226,
        "checkType": {
          "type": "TSFunctionType",
          "start": 147,
          "end": 166,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 148,
              "end": 158,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 155,
                "end": 158,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 166,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 163,
              "end": 166
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 177,
          "end": 213,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 178,
              "end": 187,
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 184,
                  "end": 187
                }
              }
            },
            {
              "type": "RestElement",
              "start": 189,
              "end": 205,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 192,
                "end": 196,
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 196,
                "end": 205,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 198,
                  "end": 205,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 204,
                    "end": 205,
                    "name": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 213,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 217,
          "end": 218,
          "typeName": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 221,
          "end": 226
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 229,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 248,
        "decorators": [],
        "name": "MyFunctionType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 251,
        "end": 288,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 263,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              }
            }
          },
          {
            "type": "Identifier",
            "start": 265,
            "end": 276,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 276,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 278,
          "end": 288,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 281,
            "end": 288
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 291,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 304,
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 307,
        "end": 380,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 308,
            "end": 349,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 311,
              "end": 315,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 349,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 317,
                "end": 349,
                "typeName": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 321,
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 321,
                  "end": 349,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 348,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 332,
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 332,
                        "end": 348,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 333,
                            "end": 347,
                            "typeName": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 347,
                              "decorators": [],
                              "name": "MyFunctionType",
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
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 351,
          "end": 380,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 354,
            "end": 380,
            "typeName": {
              "type": "Identifier",
              "start": 354,
              "end": 364,
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 364,
              "end": 380,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 365,
                  "end": 379,
                  "typeName": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 379,
                    "decorators": [],
                    "name": "MyFunctionType",
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 411,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 421,
        "decorators": [],
        "name": "Bind1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 421,
        "end": 467,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 422,
            "end": 466,
            "name": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 432,
              "end": 466,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 433,
                  "end": 442,
                  "decorators": [],
                  "name": "head",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 442,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 444,
                  "end": 458,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 451,
                    "decorators": [],
                    "name": "tail",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 451,
                    "end": 458,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 453,
                      "end": 458,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 453,
                        "end": 456
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 460,
                "end": 466,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 463,
                  "end": 466
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 470,
        "end": 517,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 471,
            "end": 499,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 474,
              "end": 478,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 480,
                "end": 499,
                "typeName": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 484,
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 484,
                  "end": 499,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 498,
                      "typeName": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 495,
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 495,
                        "end": 498,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 496,
                            "end": 497,
                            "typeName": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 497,
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
                  ]
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 501,
          "end": 517,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 504,
            "end": 517,
            "typeName": {
              "type": "Identifier",
              "start": 504,
              "end": 514,
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 514,
              "end": 517,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 515,
                  "end": 516,
                  "typeName": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 519,
      "end": 556,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 531,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 534,
        "end": 555,
        "typeName": {
          "type": "Identifier",
          "start": 534,
          "end": 539,
          "decorators": [],
          "name": "Bind1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 539,
          "end": 555,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 540,
              "end": 554,
              "typeName": {
                "type": "Identifier",
                "start": 540,
                "end": 554,
                "decorators": [],
                "name": "MyFunctionType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 586,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 620,
        "decorators": [],
        "name": "assignmentWithComplexRest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 637,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 636,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 631,
              "end": 636,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 640,
        "end": 755,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 646,
            "end": 706,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 652,
                "end": 705,
                "id": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 688,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 655,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 657,
                      "end": 688,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 658,
                          "end": 667,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 659,
                            "end": 667,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 661,
                              "end": 667
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 669,
                          "end": 679,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 676,
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 676,
                            "end": 679,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 678,
                              "end": 679,
                              "typeName": {
                                "type": "Identifier",
                                "start": 678,
                                "end": 679,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 681,
                        "end": 688,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 684,
                          "end": 688
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 691,
                  "end": 705,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 692,
                      "end": 693,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 695,
                      "end": 699,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 698,
                        "end": 699,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 704,
                    "end": 705,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 711,
            "end": 753,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 717,
                "end": 752,
                "id": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 746,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 720,
                    "end": 746,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 722,
                      "end": 746,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 723,
                          "end": 737,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 726,
                            "end": 730,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 730,
                            "end": 737,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 732,
                              "end": 737
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 739,
                        "end": 746,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 742,
                          "end": 746
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 752,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 757,
      "end": 951,
      "id": {
        "type": "Identifier",
        "start": 766,
        "end": 792,
        "decorators": [],
        "name": "assignmentWithComplexRest2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 792,
        "end": 809,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 793,
            "end": 808,
            "name": {
              "type": "Identifier",
              "start": 793,
              "end": 794,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 803,
              "end": 808,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 803,
                "end": 806
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 812,
        "end": 951,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 818,
            "end": 888,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 824,
                "end": 887,
                "id": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 874,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 827,
                    "end": 874,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 829,
                      "end": 874,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 830,
                          "end": 865,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 832,
                            "end": 865,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 834,
                              "end": 865,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 835,
                                  "end": 844,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 836,
                                    "end": 844,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 838,
                                      "end": 844
                                    }
                                  }
                                },
                                {
                                  "type": "RestElement",
                                  "start": 846,
                                  "end": 856,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 849,
                                    "end": 853,
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 853,
                                    "end": 856,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 855,
                                      "end": 856,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 855,
                                        "end": 856,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 858,
                                "end": 865,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 861,
                                  "end": 865
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 867,
                        "end": 874,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 870,
                          "end": 874
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 877,
                  "end": 887,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 878,
                      "end": 880,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 885,
                    "end": 887,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 893,
            "end": 949,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 899,
                "end": 948,
                "id": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 942,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 902,
                    "end": 942,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 904,
                      "end": 942,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 905,
                          "end": 933,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 907,
                            "end": 933,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 909,
                              "end": 933,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 910,
                                  "end": 924,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 913,
                                    "end": 917,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 917,
                                    "end": 924,
                                    "typeAnnotation": {
                                      "type": "TSNeverKeyword",
                                      "start": 919,
                                      "end": 924
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 926,
                                "end": 933,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 929,
                                  "end": 933
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 935,
                        "end": 942,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 938,
                          "end": 942
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 953,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 962,
        "end": 988,
        "decorators": [],
        "name": "assignmentWithComplexRest3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 988,
        "end": 1005,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 989,
            "end": 1004,
            "name": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 999,
              "end": 1004,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 999,
                "end": 1002
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1008,
        "end": 1137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1014,
            "end": 1074,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1020,
                "end": 1073,
                "id": {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1056,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1023,
                    "end": 1056,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1025,
                      "end": 1056,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1026,
                          "end": 1035,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1027,
                            "end": 1035,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1029,
                              "end": 1035
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 1037,
                          "end": 1047,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 1040,
                            "end": 1044,
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1044,
                            "end": 1047,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1046,
                              "end": 1047,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1046,
                                "end": 1047,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1049,
                        "end": 1056,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1052,
                          "end": 1056
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1059,
                  "end": 1073,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1060,
                      "end": 1061,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 1063,
                      "end": 1067,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1073,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1079,
            "end": 1135,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1085,
                "end": 1134,
                "id": {
                  "type": "Identifier",
                  "start": 1085,
                  "end": 1128,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1088,
                    "end": 1128,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1090,
                      "end": 1128,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 1091,
                          "end": 1119,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 1094,
                            "end": 1098,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1098,
                            "end": 1119,
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "start": 1100,
                              "end": 1119,
                              "types": [
                                {
                                  "type": "TSTypeLiteral",
                                  "start": 1100,
                                  "end": 1108,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 1101,
                                      "end": 1107,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1101,
                                        "end": 1102,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 1102,
                                        "end": 1107,
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "start": 1104,
                                          "end": 1107,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 1104,
                                            "end": 1107,
                                            "value": "a",
                                            "raw": "\"a\""
                                          }
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                },
                                {
                                  "type": "TSTypeLiteral",
                                  "start": 1111,
                                  "end": 1119,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 1112,
                                      "end": 1118,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1112,
                                        "end": 1113,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 1113,
                                        "end": 1118,
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "start": 1115,
                                          "end": 1118,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 1115,
                                            "end": 1118,
                                            "value": "b",
                                            "raw": "\"b\""
                                          }
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1121,
                        "end": 1128,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1124,
                          "end": 1128
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1134,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
