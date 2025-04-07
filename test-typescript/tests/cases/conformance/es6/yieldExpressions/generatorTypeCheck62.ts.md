__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 1120,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 30,
        "end": 92,
        "body": {
          "type": "TSInterfaceBody",
          "start": 55,
          "end": 92,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 61,
              "end": 90,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 61,
                "end": 80,
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
                "start": 81,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 54,
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
      "start": 94,
      "end": 473,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 101,
        "end": 473,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 267,
          "end": 473,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 273,
              "end": 471,
              "argument": {
                "type": "FunctionExpression",
                "start": 280,
                "end": 471,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 297,
                  "end": 471,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 307,
                      "end": 465,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 338,
                        "end": 465,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 352,
                            "end": 431,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 362,
                              "end": 431,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 380,
                                  "end": 417,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 380,
                                    "end": 416,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 380,
                                      "end": 404,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 380,
                                        "end": 384,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 385,
                                        "end": 404,
                                        "decorators": [],
                                        "name": "lastStrategyApplied",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 407,
                                      "end": 416,
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
                              "start": 356,
                              "end": 360,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 444,
                            "end": 455,
                            "directive": null,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 444,
                              "end": 454,
                              "argument": {
                                "type": "Identifier",
                                "start": 450,
                                "end": 454,
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
                        "start": 312,
                        "end": 322,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 318,
                            "end": 322,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 322,
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
                        "start": 326,
                        "end": 336,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 330,
                            "end": 335,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 329,
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
                    "start": 290,
                    "end": 295,
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
          "start": 110,
          "end": 118,
          "decorators": [],
          "name": "strategy",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 145,
            "end": 162,
            "decorators": [],
            "name": "stratName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 156,
                "end": 162
              }
            }
          },
          {
            "type": "Identifier",
            "start": 164,
            "end": 216,
            "decorators": [],
            "name": "gen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 216,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 169,
                "end": 216,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 170,
                    "end": 174,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 174,
                      "typeAnnotation": {
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
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 216,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 179,
                    "end": 216,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 195,
                      "end": 216,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 196,
                          "end": 209,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 196,
                              "end": 197,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 196,
                                "end": 197,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 200,
                              "end": 209
                            }
                          ]
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 211,
                          "end": 215
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 195,
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
          "start": 217,
          "end": 266,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 219,
            "end": 266,
            "params": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 224,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 224,
                  "typeAnnotation": {
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
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 266,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 245,
                  "end": 266,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 246,
                      "end": 259,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 246,
                          "end": 247,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 250,
                          "end": 259
                        }
                      ]
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 261,
                      "end": 265
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 245,
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
          "start": 118,
          "end": 144,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 119,
              "end": 143,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 143,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 143,
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
                "start": 119,
                "end": 120,
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
      "start": 475,
      "end": 558,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 482,
        "end": 558,
        "body": {
          "type": "TSInterfaceBody",
          "start": 504,
          "end": 558,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 510,
              "end": 556,
              "params": [
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 515,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 515,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 515,
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
                "start": 516,
                "end": 555,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 518,
                  "end": 555,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 534,
                    "end": 555,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 535,
                        "end": 548,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 535,
                            "end": 536,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 535,
                              "end": 536,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 539,
                            "end": 548
                          }
                        ]
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 550,
                        "end": 554
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 534,
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
          "start": 492,
          "end": 500,
          "decorators": [],
          "name": "Strategy",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 500,
          "end": 503,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 501,
              "end": 502,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
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
      "start": 560,
      "end": 626,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 567,
        "end": 626,
        "body": {
          "type": "TSInterfaceBody",
          "start": 606,
          "end": 626,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 612,
              "end": 624,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 612,
                "end": 615,
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
                "start": 615,
                "end": 623,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 617,
                  "end": 623
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 591,
            "end": 605,
            "expression": {
              "type": "Identifier",
              "start": 591,
              "end": 605,
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
          "start": 577,
          "end": 582,
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
      "start": 628,
      "end": 811,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 635,
        "end": 811,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 641,
            "end": 810,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 641,
              "end": 666,
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 649,
                "end": 666,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 651,
                  "end": 666,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 659,
                    "end": 666,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 660,
                        "end": 665,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 660,
                          "end": 665,
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
                    "start": 651,
                    "end": 659,
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
              "start": 669,
              "end": 810,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 678,
                  "end": 687,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 689,
                  "end": 809,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 713,
                    "end": 809,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 719,
                        "end": 732,
                        "argument": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 731,
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
                      "start": 699,
                      "end": 711,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 704,
                        "end": 711,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 706,
                          "end": 711,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 711,
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
                "start": 669,
                "end": 677,
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
      "start": 813,
      "end": 920,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 820,
        "end": 920,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 826,
            "end": 919,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 851,
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 834,
                "end": 851,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 836,
                  "end": 851,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 844,
                    "end": 851,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 845,
                        "end": 850,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 845,
                          "end": 850,
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
                    "start": 836,
                    "end": 844,
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
              "start": 854,
              "end": 919,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 863,
                  "end": 872,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 874,
                  "end": 918,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 898,
                    "end": 918,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 904,
                        "end": 916,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 904,
                          "end": 915,
                          "argument": {
                            "type": "Identifier",
                            "start": 910,
                            "end": 915,
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
                      "start": 884,
                      "end": 896,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 889,
                        "end": 896,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 891,
                          "end": 896,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 891,
                            "end": 896,
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
                "start": 854,
                "end": 862,
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
      "start": 922,
      "end": 1118,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 929,
        "end": 1118,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 935,
            "end": 1117,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 935,
              "end": 960,
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 943,
                "end": 960,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 945,
                  "end": 960,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 953,
                    "end": 960,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 954,
                        "end": 959,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 954,
                          "end": 959,
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
                    "start": 945,
                    "end": 953,
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
              "start": 963,
              "end": 1117,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 972,
                  "end": 981,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 983,
                  "end": 1116,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1008,
                    "end": 1116,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1014,
                        "end": 1021,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1014,
                          "end": 1019,
                          "argument": null,
                          "delegate": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1026,
                        "end": 1039,
                        "argument": {
                          "type": "Identifier",
                          "start": 1033,
                          "end": 1038,
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
                      "start": 994,
                      "end": 1006,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 999,
                        "end": 1006,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1006,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1006,
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
                "start": 963,
                "end": 971,
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
