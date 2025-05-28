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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "StrategicState",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 69,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 38,
              "end": 67,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 57,
                "decorators": [],
                "name": "lastStrategyApplied",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 66,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 60,
                  "end": 66
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 450,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 78,
        "end": 450,
        "id": {
          "type": "Identifier",
          "start": 87,
          "end": 95,
          "decorators": [],
          "name": "strategy",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 95,
          "end": 121,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 96,
              "end": 120,
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 120,
                  "decorators": [],
                  "name": "StrategicState",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
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
                  "start": 153,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 156,
                    "end": 193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 172,
                      "decorators": [],
                      "name": "IterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 173,
                                "end": 174,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
                    }
                  }
                }
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
            "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
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
              "start": 203,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 222,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 224,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                }
              }
            }
          }
        },
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
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 289,
                        "end": 299,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 295,
                            "end": 299,
                            "id": {
                              "type": "Identifier",
                              "start": 295,
                              "end": 299,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 303,
                        "end": 313,
                        "callee": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 306,
                          "decorators": [],
                          "name": "gen",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
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
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 315,
                        "end": 442,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 329,
                            "end": 408,
                            "test": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 337,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 339,
                              "end": 408,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 357,
                                  "end": 394,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 357,
                                    "end": 393,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 357,
                                      "end": 381,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 357,
                                        "end": 361,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 362,
                                        "end": 381,
                                        "decorators": [],
                                        "name": "lastStrategyApplied",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
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
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 421,
                            "end": 432,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 421,
                              "end": 431,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 427,
                                "end": 431,
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 452,
      "end": 535,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 459,
        "end": 535,
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
              "name": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
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
          "start": 481,
          "end": 535,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 487,
              "end": 533,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
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
                "start": 493,
                "end": 532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 495,
                  "end": 532,
                  "typeName": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 511,
                    "decorators": [],
                    "name": "IterableIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                  }
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 537,
      "end": 603,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 544,
        "end": 603,
        "id": {
          "type": "Identifier",
          "start": 554,
          "end": 559,
          "decorators": [],
          "name": "State",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 583,
          "end": 603,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 589,
              "end": 601,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 589,
                "end": 592,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 600,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 594,
                  "end": 600
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 605,
      "end": 788,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 788,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 787,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 636,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 636,
                    "end": 643,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 642,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 642,
                          "decorators": [],
                          "name": "State",
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
            "init": {
              "type": "CallExpression",
              "start": 646,
              "end": 787,
              "callee": {
                "type": "Identifier",
                "start": 646,
                "end": 654,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 655,
                  "end": 664,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 786,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 683,
                            "end": 688,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
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
                  "expression": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 790,
      "end": 897,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 797,
        "end": 897,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 803,
            "end": 896,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 821,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 821,
                    "end": 828,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 822,
                        "end": 827,
                        "typeName": {
                          "type": "Identifier",
                          "start": 822,
                          "end": 827,
                          "decorators": [],
                          "name": "State",
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
            "init": {
              "type": "CallExpression",
              "start": 831,
              "end": 896,
              "callee": {
                "type": "Identifier",
                "start": 831,
                "end": 839,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 840,
                  "end": 849,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 851,
                  "end": 895,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 868,
                            "end": 873,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 875,
                    "end": 895,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 881,
                        "end": 893,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 881,
                          "end": 892,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 887,
                            "end": 892,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 899,
      "end": 1095,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 906,
        "end": 1095,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 912,
            "end": 1094,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 930,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 930,
                    "end": 937,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 931,
                        "end": 936,
                        "typeName": {
                          "type": "Identifier",
                          "start": 931,
                          "end": 936,
                          "decorators": [],
                          "name": "State",
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
            "init": {
              "type": "CallExpression",
              "start": 940,
              "end": 1094,
              "callee": {
                "type": "Identifier",
                "start": 940,
                "end": 948,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 949,
                  "end": 958,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 960,
                  "end": 1093,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 978,
                            "end": 983,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 985,
                    "end": 1093,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 991,
                        "end": 998,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 991,
                          "end": 996,
                          "delegate": false,
                          "argument": null
                        },
                        "directive": null
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
                  "expression": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
