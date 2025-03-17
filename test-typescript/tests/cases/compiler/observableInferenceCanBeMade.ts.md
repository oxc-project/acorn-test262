__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 749,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "name": "of",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 62,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 65,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 121,
          "end": 129,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 129,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "O",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 88,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 119,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 114,
                "name": "ObservableInput",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 114,
                "end": 119,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 115,
                    "end": 118
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 162,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 162,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 142,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 142,
            "end": 162,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 143,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 158,
                  "name": "ObservedValueOf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 158,
                  "end": 161,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "name": "O",
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 165,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 185,
        "name": "ObservedValueOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 185,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 186,
            "end": 187,
            "name": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "name": "O",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 191,
        "end": 237,
        "checkType": {
          "type": "TSTypeReference",
          "start": 191,
          "end": 192,
          "typeName": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "name": "O",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 201,
          "end": 225,
          "typeName": {
            "type": "Identifier",
            "start": 201,
            "end": 216,
            "name": "ObservableInput",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 216,
            "end": 225,
            "params": [
              {
                "type": "TSInferType",
                "start": 217,
                "end": 224,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 223,
                  "end": 224,
                  "name": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
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
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 228,
          "end": 229,
          "typeName": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 232,
          "end": 237
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 240,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 262,
        "name": "Subscribable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 264,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
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
        "start": 266,
        "end": 370,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 272,
            "end": 368,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 281,
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
                "start": 282,
                "end": 307,
                "name": "next",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 289,
                    "end": 307,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 290,
                        "end": 298,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 295,
                          "end": 298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 297,
                            "end": 298,
                            "typeName": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 298,
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
                      "start": 300,
                      "end": 307,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 303,
                        "end": 307
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 309,
                "end": 337,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 315,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 317,
                    "end": 337,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 318,
                        "end": 328,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 323,
                          "end": 328,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 325,
                            "end": 328
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 330,
                      "end": 337,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 333,
                        "end": 337
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 339,
                "end": 360,
                "name": "complete",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 348,
                  "end": 360,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 350,
                    "end": 360,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 360,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 356,
                        "end": 360
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 367,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 363,
                "end": 367
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
      "type": "TSTypeAliasDeclaration",
      "start": 371,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 391,
        "name": "ObservableInput",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 391,
        "end": 394,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 392,
            "end": 393,
            "name": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 397,
        "end": 434,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 397,
            "end": 412,
            "typeName": {
              "type": "Identifier",
              "start": 397,
              "end": 409,
              "name": "Subscribable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 409,
              "end": 412,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 415,
            "end": 434,
            "typeName": {
              "type": "Identifier",
              "start": 415,
              "end": 427,
              "name": "Subscribable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 427,
              "end": 434,
              "params": [
                {
                  "type": "TSNeverKeyword",
                  "start": 428,
                  "end": 433
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 462,
        "name": "Observable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 493,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 499,
            "end": 595,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 508,
              "name": "subscribe",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 508,
              "end": 595,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 534,
                  "name": "next",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 534,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 516,
                      "end": 534,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 517,
                          "end": 525,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 522,
                            "end": 525,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 524,
                              "end": 525,
                              "typeName": {
                                "type": "Identifier",
                                "start": 524,
                                "end": 525,
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
                        "start": 527,
                        "end": 534,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 530,
                          "end": 534
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 564,
                  "name": "error",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 542,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 544,
                      "end": 564,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 545,
                          "end": 555,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 550,
                            "end": 555,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 552,
                              "end": 555
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 557,
                        "end": 564,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 560,
                          "end": 564
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 587,
                  "name": "complete",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 575,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 577,
                      "end": 587,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 580,
                        "end": 587,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 583,
                          "end": 587
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 588,
                "end": 594,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 590,
                  "end": 594
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 477,
          "end": 492,
          "expression": {
            "type": "Identifier",
            "start": 477,
            "end": 489,
            "name": "Subscribable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 489,
            "end": 492,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 490,
                "end": 491,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
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
      ],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 748,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 620,
        "name": "asObservable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 621,
          "end": 660,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 660,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 628,
              "end": 660,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 628,
                  "end": 634
                },
                {
                  "type": "TSTypeReference",
                  "start": 637,
                  "end": 660,
                  "typeName": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 652,
                    "name": "ObservableInput",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 652,
                    "end": 660,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 653,
                        "end": 659
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 682,
        "end": 748,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 688,
            "end": 746,
            "argument": {
              "type": "ConditionalExpression",
              "start": 695,
              "end": 746,
              "test": {
                "type": "BinaryExpression",
                "start": 695,
                "end": 720,
                "left": {
                  "type": "UnaryExpression",
                  "start": 695,
                  "end": 707,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 707,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 712,
                  "end": 720,
                  "value": "string",
                  "raw": "'string'"
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 723,
                "end": 732,
                "callee": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 725,
                  "name": "of",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 726,
                    "end": 731,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 735,
                "end": 746,
                "callee": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 739,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 740,
                    "end": 745,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 661,
        "end": 681,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 663,
          "end": 681,
          "typeName": {
            "type": "Identifier",
            "start": 663,
            "end": 673,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 673,
            "end": 681,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 674,
                "end": 680
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
