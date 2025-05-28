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
      "end": 850,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 850,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 849,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 635,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 635,
                    "end": 642,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 641,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 641,
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
              "start": 645,
              "end": 849,
              "callee": {
                "type": "Identifier",
                "start": 645,
                "end": 653,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 654,
                  "end": 663,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 665,
                  "end": 848,
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
                    "end": 848,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 696,
                        "end": 704,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 696,
                          "end": 703,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 702,
                            "end": 703,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
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
      "start": 852,
      "end": 943,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 859,
        "end": 943,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 865,
            "end": 942,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 883,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 883,
                    "end": 890,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 884,
                        "end": 889,
                        "typeName": {
                          "type": "Identifier",
                          "start": 884,
                          "end": 889,
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
              "start": 893,
              "end": 942,
              "callee": {
                "type": "Identifier",
                "start": 893,
                "end": 901,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 902,
                  "end": 911,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 913,
                  "end": 941,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 938,
                    "end": 941,
                    "body": []
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
      "start": 945,
      "end": 1125,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 952,
        "end": 1125,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 958,
            "end": 1124,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 968,
                    "end": 976,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 976,
                    "end": 983,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 977,
                        "end": 982,
                        "typeName": {
                          "type": "Identifier",
                          "start": 977,
                          "end": 982,
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
              "start": 986,
              "end": 1124,
              "callee": {
                "type": "Identifier",
                "start": 986,
                "end": 994,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 995,
                  "end": 1004,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 1006,
                  "end": 1123,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1024,
                            "end": 1029,
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
                          "value": 1,
                          "raw": "1"
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
      "start": 1127,
      "end": 1324,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1134,
        "end": 1324,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1140,
            "end": 1323,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1158,
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1158,
                    "end": 1165,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1159,
                        "end": 1164,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1164,
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
              "start": 1168,
              "end": 1323,
              "callee": {
                "type": "Identifier",
                "start": 1168,
                "end": 1176,
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1177,
                  "end": 1186,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 1188,
                  "end": 1322,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1206,
                            "end": 1211,
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
                    "start": 1213,
                    "end": 1322,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1219,
                        "end": 1231,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1219,
                          "end": 1230,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 1225,
                            "end": 1230,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1236,
                        "end": 1245,
                        "argument": {
                          "type": "Literal",
                          "start": 1243,
                          "end": 1244,
                          "value": 1,
                          "raw": "1"
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
