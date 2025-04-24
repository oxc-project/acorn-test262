__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1097,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 69,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 69,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 69,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 38,
              "end": 67,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 57,
                "decorators": [],
                "name": "lastStrategyApplied",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 66,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 60,
                  "end": 66
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "StrategicState",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 450,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 78,
        "end": 450,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 244,
          "end": 450,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 250,
              "end": 448,
              "argument": {
                "type": "FunctionExpression",
                "start": 257,
                "end": 448,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 274,
                  "end": 448,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 284,
                      "end": 442,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 315,
                        "end": 442,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 329,
                            "end": 408,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 339,
                              "end": 408,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 357,
                                  "end": 394,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 357,
                                    "end": 393,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 357,
                                      "end": 381,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 357,
                                        "end": 361,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 362,
                                        "end": 381,
                                        "decorators": [],
                                        "name": "lastStrategyApplied",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 384,
                                      "end": 393,
                                      "decorators": [],
                                      "name": "stratName",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 337,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 421,
                            "end": 432,
                            "directive": null,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 421,
                              "end": 431,
                              "argument": {
                                "type": "Identifier",
                                "start": 427,
                                "end": 431,
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "delegate": false
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 289,
                        "end": 299,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 295,
                            "end": 299,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 295,
                              "end": 299,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 303,
                        "end": 313,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 307,
                            "end": 312,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 306,
                          "decorators": [],
                          "name": "gen",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 267,
                    "end": 272,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 87,
          "end": 95,
          "decorators": [],
          "name": "strategy",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 122,
            "end": 139,
            "decorators": [],
            "name": "stratName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            }
          },
          {
            "type": "Identifier",
            "start": 141,
            "end": 193,
            "decorators": [],
            "name": "gen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 193,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 146,
                "end": 193,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 147,
                    "end": 151,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 151,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
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
                  "start": 153,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 156,
                    "end": 193,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 172,
                      "end": 193,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 173,
                          "end": 186,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 173,
                              "end": 174,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 173,
                                "end": 174,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 177,
                              "end": 186
                            }
                          ]
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 188,
                          "end": 192
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 172,
                      "decorators": [],
                      "name": "IterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 194,
          "end": 243,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 196,
            "end": 243,
            "params": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 201,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 201,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 201,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
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
              "start": 203,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 243,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 222,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 223,
                      "end": 236,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 223,
                          "end": 224,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 224,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 227,
                          "end": 236
                        }
                      ]
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 238,
                      "end": 242
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 222,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 95,
          "end": 121,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 96,
              "end": 120,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 120,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 120,
                  "decorators": [],
                  "name": "StrategicState",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 452,
      "end": 535,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 459,
        "end": 535,
        "body": {
          "type": "TSInterfaceBody",
          "start": 481,
          "end": 535,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 487,
              "end": 533,
              "params": [
                {
                  "type": "Identifier",
                  "start": 488,
                  "end": 492,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 489,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
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
                "start": 493,
                "end": 532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 495,
                  "end": 532,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 511,
                    "end": 532,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 512,
                        "end": 525,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 512,
                            "end": 513,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 516,
                            "end": 525
                          }
                        ]
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 527,
                        "end": 531
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 511,
                    "decorators": [],
                    "name": "IterableIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 469,
          "end": 477,
          "decorators": [],
          "name": "Strategy",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 477,
          "end": 480,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 478,
              "end": 479,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 537,
      "end": 603,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 544,
        "end": 603,
        "body": {
          "type": "TSInterfaceBody",
          "start": 583,
          "end": 603,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 589,
              "end": 601,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 589,
                "end": 592,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 600,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 594,
                  "end": 600
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 568,
            "end": 582,
            "expression": {
              "type": "Identifier",
              "start": 568,
              "end": 582,
              "decorators": [],
              "name": "StrategicState",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 554,
          "end": 559,
          "decorators": [],
          "name": "State",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 605,
      "end": 788,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 788,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 787,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 643,
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 626,
                "end": 643,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 628,
                  "end": 643,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 636,
                    "end": 643,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 642,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 642,
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 636,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 646,
              "end": 787,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 655,
                  "end": 664,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 786,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 690,
                    "end": 786,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 696,
                        "end": 709,
                        "argument": {
                          "type": "Identifier",
                          "start": 703,
                          "end": 708,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 676,
                      "end": 688,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 681,
                        "end": 688,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 683,
                          "end": 688,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 683,
                            "end": 688,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 646,
                "end": 654,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 790,
      "end": 897,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 797,
        "end": 897,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 803,
            "end": 896,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 803,
              "end": 828,
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 811,
                "end": 828,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 813,
                  "end": 828,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 821,
                    "end": 828,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 822,
                        "end": 827,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 822,
                          "end": 827,
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 821,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 831,
              "end": 896,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 840,
                  "end": 849,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 851,
                  "end": 895,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 875,
                    "end": 895,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 881,
                        "end": 893,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 881,
                          "end": 892,
                          "argument": {
                            "type": "Identifier",
                            "start": 887,
                            "end": 892,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 861,
                      "end": 873,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 866,
                        "end": 873,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 868,
                          "end": 873,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 868,
                            "end": 873,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 831,
                "end": 839,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 899,
      "end": 1095,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 906,
        "end": 1095,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 912,
            "end": 1094,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 912,
              "end": 937,
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 920,
                "end": 937,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 922,
                  "end": 937,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 930,
                    "end": 937,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 931,
                        "end": 936,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 931,
                          "end": 936,
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 930,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 940,
              "end": 1094,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 949,
                  "end": 958,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 960,
                  "end": 1093,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 985,
                    "end": 1093,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 991,
                        "end": 998,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 991,
                          "end": 996,
                          "argument": null,
                          "delegate": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1003,
                        "end": 1016,
                        "argument": {
                          "type": "Identifier",
                          "start": 1010,
                          "end": 1015,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 971,
                      "end": 983,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 976,
                        "end": 983,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 978,
                          "end": 983,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 978,
                            "end": 983,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 940,
                "end": 948,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
