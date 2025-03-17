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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "of",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 65,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 65,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 62,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 163,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 121,
          "end": 129,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 129,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 129,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 162,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 162,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 142,
            "end": 162,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 143,
                "end": 161,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 158,
                  "end": 161,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 160,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 158,
                  "decorators": [],
                  "name": "ObservedValueOf",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 142,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 88,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 119,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 119,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 114,
                "decorators": [],
                "name": "ObservableInput",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 165,
      "end": 238,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 185,
        "decorators": [],
        "name": "ObservedValueOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 191,
        "end": 237,
        "checkType": {
          "type": "TSTypeReference",
          "start": 191,
          "end": 192,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 201,
          "end": 225,
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 201,
            "end": 216,
            "decorators": [],
            "name": "ObservableInput",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 232,
          "end": 237
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 228,
          "end": 229,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 240,
      "end": 370,
      "body": {
        "type": "TSInterfaceBody",
        "start": 266,
        "end": 370,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 272,
            "end": 368,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 281,
              "decorators": [],
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 307,
                "decorators": [],
                "name": "next",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 289,
                    "end": 307,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 290,
                        "end": 298,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 295,
                          "end": 298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 297,
                            "end": 298,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 298,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 309,
                "end": 337,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 315,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 317,
                    "end": 337,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 318,
                        "end": 328,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 323,
                          "end": 328,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 325,
                            "end": 328
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 339,
                "end": 360,
                "decorators": [],
                "name": "complete",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 348,
                  "end": 360,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 350,
                    "end": 360,
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
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 262,
        "decorators": [],
        "name": "Subscribable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 264,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 371,
      "end": 435,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 391,
        "decorators": [],
        "name": "ObservableInput",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 409,
              "end": 412,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 397,
              "end": 409,
              "decorators": [],
              "name": "Subscribable",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 415,
            "end": 434,
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
            },
            "typeName": {
              "type": "Identifier",
              "start": 415,
              "end": 427,
              "decorators": [],
              "name": "Subscribable",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 597,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 493,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 499,
            "end": 595,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 508,
              "decorators": [],
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 508,
              "end": 595,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 534,
                  "decorators": [],
                  "name": "next",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 534,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 516,
                      "end": 534,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 517,
                          "end": 525,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 522,
                            "end": 525,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 524,
                              "end": 525,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 524,
                                "end": 525,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 564,
                  "decorators": [],
                  "name": "error",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 542,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 544,
                      "end": 564,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 545,
                          "end": 555,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 550,
                            "end": 555,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 552,
                              "end": 555
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 587,
                  "decorators": [],
                  "name": "complete",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 575,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 577,
                      "end": 587,
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
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 588,
                "end": 594,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 590,
                  "end": 594
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 462,
        "decorators": [],
        "name": "Observable",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "Subscribable",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 748,
      "async": false,
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
              "alternate": {
                "type": "CallExpression",
                "start": 735,
                "end": 746,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 740,
                    "end": 745,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 739,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 723,
                "end": 732,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 726,
                    "end": 731,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 725,
                  "decorators": [],
                  "name": "of",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "test": {
                "type": "BinaryExpression",
                "start": 695,
                "end": 720,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 695,
                  "end": 707,
                  "argument": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 707,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 712,
                  "end": 720,
                  "raw": "'string'",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 620,
        "decorators": [],
        "name": "asObservable",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 621,
          "end": 660,
          "decorators": [],
          "name": "input",
          "optional": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 652,
                    "decorators": [],
                    "name": "ObservableInput",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 661,
        "end": 681,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 663,
          "end": 681,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 663,
            "end": 673,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
