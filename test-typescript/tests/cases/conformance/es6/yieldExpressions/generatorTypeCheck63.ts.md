__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1324,
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
      "end": 850,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 850,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 849,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 642,
              "decorators": [],
              "name": "Nothing",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 625,
                "end": 642,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 627,
                  "end": 642,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 635,
                    "end": 642,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 641,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 641,
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
                    "start": 627,
                    "end": 635,
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
              "start": 645,
              "end": 849,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 654,
                  "end": 663,
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "FunctionExpression",
                  "start": 665,
                  "end": 848,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 690,
                    "end": 848,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 696,
                        "end": 704,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 696,
                          "end": 703,
                          "argument": {
                            "type": "Literal",
                            "start": 702,
                            "end": 703,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          "delegate": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 758,
                        "end": 771,
                        "argument": {
                          "type": "Identifier",
                          "start": 765,
                          "end": 770,
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
                "start": 645,
                "end": 653,
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
      "start": 852,
      "end": 943,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 859,
        "end": 943,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 865,
            "end": 942,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 865,
              "end": 890,
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 873,
                "end": 890,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 875,
                  "end": 890,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 883,
                    "end": 890,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 884,
                        "end": 889,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 884,
                          "end": 889,
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
                    "start": 875,
                    "end": 883,
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
              "start": 893,
              "end": 942,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 902,
                  "end": 911,
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "FunctionExpression",
                  "start": 913,
                  "end": 941,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 938,
                    "end": 941,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 924,
                      "end": 936,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 929,
                        "end": 936,
                        "typeAnnotation": {
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
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 893,
                "end": 901,
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
      "start": 945,
      "end": 1125,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 952,
        "end": 1125,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 958,
            "end": 1124,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 958,
              "end": 983,
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 966,
                "end": 983,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 968,
                  "end": 983,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 976,
                    "end": 983,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 977,
                        "end": 982,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 977,
                          "end": 982,
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
                    "start": 968,
                    "end": 976,
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
              "start": 986,
              "end": 1124,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 995,
                  "end": 1004,
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "FunctionExpression",
                  "start": 1006,
                  "end": 1123,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1031,
                    "end": 1123,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1037,
                        "end": 1046,
                        "argument": {
                          "type": "Literal",
                          "start": 1044,
                          "end": 1045,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
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
                      "start": 1017,
                      "end": 1029,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1022,
                        "end": 1029,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1024,
                          "end": 1029,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1024,
                            "end": 1029,
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
                "start": 986,
                "end": 994,
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
      "start": 1127,
      "end": 1324,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1134,
        "end": 1324,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1140,
            "end": 1323,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1140,
              "end": 1165,
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1148,
                "end": 1165,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1150,
                  "end": 1165,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1158,
                    "end": 1165,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1159,
                        "end": 1164,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1164,
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
                    "start": 1150,
                    "end": 1158,
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
              "start": 1168,
              "end": 1323,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1177,
                  "end": 1186,
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "FunctionExpression",
                  "start": 1188,
                  "end": 1322,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1213,
                    "end": 1322,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1219,
                        "end": 1231,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1219,
                          "end": 1230,
                          "argument": {
                            "type": "Identifier",
                            "start": 1225,
                            "end": 1230,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "delegate": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1236,
                        "end": 1245,
                        "argument": {
                          "type": "Literal",
                          "start": 1243,
                          "end": 1244,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
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
                      "start": 1199,
                      "end": 1211,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1204,
                        "end": 1211,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1206,
                          "end": 1211,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1206,
                            "end": 1211,
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
                "start": 1168,
                "end": 1176,
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
