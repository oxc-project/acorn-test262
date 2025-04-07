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
      "end": 873,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 635,
        "end": 873,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 641,
            "end": 872,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 641,
              "end": 665,
              "decorators": [],
              "name": "Nothing",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 665,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 665,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 658,
                    "end": 665,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 659,
                        "end": 664,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 664,
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
                    "start": 650,
                    "end": 658,
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
              "start": 668,
              "end": 872,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 677,
                  "end": 686,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 688,
                  "end": 871,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 713,
                    "end": 871,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 719,
                        "end": 727,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 719,
                          "end": 726,
                          "argument": {
                            "type": "Literal",
                            "start": 725,
                            "end": 726,
                            "raw": "1",
                            "value": 1
                          },
                          "delegate": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 781,
                        "end": 794,
                        "argument": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 793,
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
                "start": 668,
                "end": 676,
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
      "start": 875,
      "end": 966,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 882,
        "end": 966,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 888,
            "end": 965,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 888,
              "end": 913,
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 896,
                "end": 913,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 898,
                  "end": 913,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 906,
                    "end": 913,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 907,
                        "end": 912,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 912,
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
                    "start": 898,
                    "end": 906,
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
              "start": 916,
              "end": 965,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 925,
                  "end": 934,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 936,
                  "end": 964,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 961,
                    "end": 964,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 947,
                      "end": 959,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 952,
                        "end": 959,
                        "typeAnnotation": {
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
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 916,
                "end": 924,
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
      "start": 968,
      "end": 1148,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 975,
        "end": 1148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 981,
            "end": 1147,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 981,
              "end": 1006,
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 989,
                "end": 1006,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 991,
                  "end": 1006,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 999,
                    "end": 1006,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1000,
                        "end": 1005,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1000,
                          "end": 1005,
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
                    "start": 991,
                    "end": 999,
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
              "start": 1009,
              "end": 1147,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1018,
                  "end": 1027,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 1029,
                  "end": 1146,
                  "async": false,
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
                          "raw": "1",
                          "value": 1
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
                      "start": 1040,
                      "end": 1052,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1045,
                        "end": 1052,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1047,
                          "end": 1052,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1047,
                            "end": 1052,
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
                "start": 1009,
                "end": 1017,
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
      "start": 1150,
      "end": 1347,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1157,
        "end": 1347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1163,
            "end": 1346,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1163,
              "end": 1188,
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1171,
                "end": 1188,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1173,
                  "end": 1188,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1181,
                    "end": 1188,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1182,
                        "end": 1187,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1187,
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
                    "start": 1173,
                    "end": 1181,
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
              "start": 1191,
              "end": 1346,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1200,
                  "end": 1209,
                  "raw": "\"Nothing\"",
                  "value": "Nothing"
                },
                {
                  "type": "FunctionExpression",
                  "start": 1211,
                  "end": 1345,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1236,
                    "end": 1345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1242,
                        "end": 1254,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1242,
                          "end": 1253,
                          "argument": {
                            "type": "Identifier",
                            "start": 1248,
                            "end": 1253,
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
                        "start": 1259,
                        "end": 1268,
                        "argument": {
                          "type": "Literal",
                          "start": 1266,
                          "end": 1267,
                          "raw": "1",
                          "value": 1
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
                      "start": 1222,
                      "end": 1234,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1227,
                        "end": 1234,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1229,
                          "end": 1234,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1229,
                            "end": 1234,
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
                "start": 1191,
                "end": 1199,
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
