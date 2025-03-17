__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 1347,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 92,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 30,
        "end": 92,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 54,
          "name": "StrategicState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 55,
          "end": 92,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 61,
              "end": 90,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 61,
                "end": 80,
                "name": "lastStrategyApplied",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 94,
      "end": 473,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 101,
        "end": 473,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 118,
          "name": "strategy",
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
            "start": 145,
            "end": 162,
            "name": "stratName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 156,
                "end": 162
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 164,
            "end": 216,
            "name": "gen",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 216,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 169,
                "end": 216,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 170,
                    "end": 174,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 173,
                        "end": 174,
                        "typeName": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
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
                  "start": 176,
                  "end": 216,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 179,
                    "end": 216,
                    "typeName": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 195,
                      "name": "IterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 196,
                                "end": 197,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                "id": null,
                "expression": false,
                "generator": true,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 290,
                    "end": 295,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 312,
                        "end": 322,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 318,
                            "end": 322,
                            "id": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 322,
                              "name": "next",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 326,
                        "end": 336,
                        "callee": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 329,
                          "name": "gen",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 330,
                            "end": 335,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 338,
                        "end": 465,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 352,
                            "end": 431,
                            "test": {
                              "type": "Identifier",
                              "start": 356,
                              "end": 360,
                              "name": "next",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 362,
                              "end": 431,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 380,
                                  "end": 417,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 380,
                                    "end": 416,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 380,
                                      "end": 404,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 380,
                                        "end": 384,
                                        "name": "next",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 385,
                                        "end": 404,
                                        "name": "lastStrategyApplied",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 407,
                                      "end": 416,
                                      "name": "stratName",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                            "start": 444,
                            "end": 455,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 444,
                              "end": 454,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 450,
                                "end": 454,
                                "name": "next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 118,
          "end": 144,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 119,
              "end": 143,
              "name": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 143,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 143,
                  "name": "StrategicState",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 217,
          "end": 266,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 219,
            "end": 266,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 224,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 224,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 224,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
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
              "start": 226,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 245,
                  "name": "IterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                }
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 475,
      "end": 558,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 482,
        "end": 558,
        "id": {
          "type": "Identifier",
          "start": 492,
          "end": 500,
          "name": "Strategy",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 500,
          "end": 503,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 501,
              "end": 502,
              "name": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
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
          "start": 504,
          "end": 558,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 510,
              "end": 556,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 515,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 515,
                      "typeName": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 515,
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
                "start": 516,
                "end": 555,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 518,
                  "end": 555,
                  "typeName": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 534,
                    "name": "IterableIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 535,
                              "end": 536,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 560,
      "end": 626,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 567,
        "end": 626,
        "id": {
          "type": "Identifier",
          "start": 577,
          "end": 582,
          "name": "State",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 591,
            "end": 605,
            "expression": {
              "type": "Identifier",
              "start": 591,
              "end": 605,
              "name": "StrategicState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 606,
          "end": 626,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 612,
              "end": 624,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 612,
                "end": 615,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 615,
                "end": 623,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 617,
                  "end": 623
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 628,
      "end": 873,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 635,
        "end": 873,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 641,
            "end": 872,
            "id": {
              "type": "Identifier",
              "start": 641,
              "end": 665,
              "name": "Nothing",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 665,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 665,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 658,
                    "name": "Strategy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 658,
                    "end": 665,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 659,
                        "end": 664,
                        "typeName": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 664,
                          "name": "State",
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
            },
            "init": {
              "type": "CallExpression",
              "start": 668,
              "end": 872,
              "callee": {
                "type": "Identifier",
                "start": 668,
                "end": 676,
                "name": "strategy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 677,
                  "end": 686,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 688,
                  "end": 871,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 699,
                      "end": 711,
                      "name": "state",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 704,
                        "end": 711,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 706,
                          "end": 711,
                          "typeName": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 711,
                            "name": "State",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 713,
                    "end": 871,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 719,
                        "end": 727,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 719,
                          "end": 726,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 725,
                            "end": 726,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 781,
                        "end": 794,
                        "argument": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 793,
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 875,
      "end": 966,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 882,
        "end": 966,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 888,
            "end": 965,
            "id": {
              "type": "Identifier",
              "start": 888,
              "end": 913,
              "name": "Nothing1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 896,
                "end": 913,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 898,
                  "end": 913,
                  "typeName": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 906,
                    "name": "Strategy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 906,
                    "end": 913,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 907,
                        "end": 912,
                        "typeName": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 912,
                          "name": "State",
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
            },
            "init": {
              "type": "CallExpression",
              "start": 916,
              "end": 965,
              "callee": {
                "type": "Identifier",
                "start": 916,
                "end": 924,
                "name": "strategy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 925,
                  "end": 934,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 936,
                  "end": 964,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 947,
                      "end": 959,
                      "name": "state",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 952,
                        "end": 959,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 954,
                          "end": 959,
                          "typeName": {
                            "type": "Identifier",
                            "start": 954,
                            "end": 959,
                            "name": "State",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 961,
                    "end": 964,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 968,
      "end": 1148,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 975,
        "end": 1148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 981,
            "end": 1147,
            "id": {
              "type": "Identifier",
              "start": 981,
              "end": 1006,
              "name": "Nothing2",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 989,
                "end": 1006,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 991,
                  "end": 1006,
                  "typeName": {
                    "type": "Identifier",
                    "start": 991,
                    "end": 999,
                    "name": "Strategy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 999,
                    "end": 1006,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1000,
                        "end": 1005,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1000,
                          "end": 1005,
                          "name": "State",
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
            },
            "init": {
              "type": "CallExpression",
              "start": 1009,
              "end": 1147,
              "callee": {
                "type": "Identifier",
                "start": 1009,
                "end": 1017,
                "name": "strategy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1018,
                  "end": 1027,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 1029,
                  "end": 1146,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1052,
                      "name": "state",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1045,
                        "end": 1052,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1047,
                          "end": 1052,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1047,
                            "end": 1052,
                            "name": "State",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 1054,
                    "end": 1146,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1060,
                        "end": 1069,
                        "argument": {
                          "type": "Literal",
                          "start": 1067,
                          "end": 1068,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1150,
      "end": 1347,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1157,
        "end": 1347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1163,
            "end": 1346,
            "id": {
              "type": "Identifier",
              "start": 1163,
              "end": 1188,
              "name": "Nothing3",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1171,
                "end": 1188,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1173,
                  "end": 1188,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1181,
                    "name": "Strategy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1181,
                    "end": 1188,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1182,
                        "end": 1187,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1187,
                          "name": "State",
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
            },
            "init": {
              "type": "CallExpression",
              "start": 1191,
              "end": 1346,
              "callee": {
                "type": "Identifier",
                "start": 1191,
                "end": 1199,
                "name": "strategy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1200,
                  "end": 1209,
                  "value": "Nothing",
                  "raw": "\"Nothing\""
                },
                {
                  "type": "FunctionExpression",
                  "start": 1211,
                  "end": 1345,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1222,
                      "end": 1234,
                      "name": "state",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1227,
                        "end": 1234,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1229,
                          "end": 1234,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1229,
                            "end": 1234,
                            "name": "State",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 1236,
                    "end": 1345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1242,
                        "end": 1254,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1242,
                          "end": 1253,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 1248,
                            "end": 1253,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1259,
                        "end": 1268,
                        "argument": {
                          "type": "Literal",
                          "start": 1266,
                          "end": 1267,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
