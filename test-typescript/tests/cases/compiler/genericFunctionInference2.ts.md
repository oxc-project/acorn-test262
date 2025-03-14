genericFunctionInference2.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 825,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 56,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Reducer",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 40,
        "end": 55,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "decorators": [],
            "name": "state",
            "optional": false,
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
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 51,
          "end": 55,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 54,
            "end": 55,
            "typeName": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "S",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 150,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 89,
        "decorators": [],
        "name": "combineReducers",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 136,
          "decorators": [],
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 136,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 103,
              "end": 136,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 111,
                "end": 118,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 118,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 134,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 129,
                      "end": 133,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 130,
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 128,
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 149,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 146,
            "end": 149,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "decorators": [],
            "name": "Reducer",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 197,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "decorators": [],
        "name": "MyState",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 167,
        "end": 196,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 194,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 177,
              "decorators": [],
              "name": "combined",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 194,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 181,
                    "end": 192,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 184,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 252,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 252,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 252,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 224,
                  "end": 252,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 225,
                      "end": 251,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 245,
                        "end": 250,
                        "literal": {
                          "type": "Literal",
                          "start": 245,
                          "end": 250,
                          "raw": "'foo'",
                          "value": "foo"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 225,
                        "end": 244,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 233,
                          "end": 243,
                          "literal": {
                            "type": "Literal",
                            "start": 233,
                            "end": 243,
                            "raw": "'combined'",
                            "value": "combined"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 225,
                          "end": 232,
                          "typeName": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 232,
                            "decorators": [],
                            "name": "MyState",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 224,
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 289,
            "decorators": [],
            "name": "myReducer1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 289,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 280,
                  "end": 289,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 281,
                      "end": 288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 288,
                        "decorators": [],
                        "name": "MyState",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 352,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 308,
                "end": 351,
                "properties": [
                  {
                    "type": "Property",
                    "start": 314,
                    "end": 348,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 322,
                      "decorators": [],
                      "name": "combined",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 324,
                      "end": 348,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 340,
                          "end": 347,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 342,
                              "end": 345,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 345,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 345,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 339,
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 307,
              "decorators": [],
              "name": "combineReducers",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "decorators": [],
            "name": "myReducer2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 374,
            "end": 434,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 390,
                "end": 433,
                "properties": [
                  {
                    "type": "Property",
                    "start": 396,
                    "end": 430,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 404,
                      "decorators": [],
                      "name": "combined",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 406,
                      "end": 430,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 422,
                          "end": 429,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 424,
                              "end": 427,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 424,
                                "end": 427,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 424,
                                "end": 427,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 421,
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 374,
              "end": 389,
              "decorators": [],
              "name": "combineReducers",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 459,
      "end": 537,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 481,
        "decorators": [],
        "name": "withH",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 488,
          "end": 532,
          "decorators": [],
          "name": "handlerCreators",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 532,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 526,
                "end": 532,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 527,
                    "end": 528,
                    "typeName": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 530,
                    "end": 531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 526,
                "decorators": [],
                "name": "HandleCreatorsFactory",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 533,
        "end": 536,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 535,
          "end": 536,
          "typeName": {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 481,
        "end": 487,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 483,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 485,
            "end": 486,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 539,
      "end": 567,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 549,
        "decorators": [],
        "name": "Props",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 552,
        "end": 567,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 554,
            "end": 565,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 557,
              "decorators": [],
              "name": "out",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 565,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 559,
                "end": 565
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 569,
      "end": 664,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 595,
        "decorators": [],
        "name": "HandleCreatorsFactory",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 604,
        "end": 663,
        "params": [
          {
            "type": "Identifier",
            "start": 605,
            "end": 620,
            "decorators": [],
            "name": "initialProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 622,
          "end": 663,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 625,
            "end": 663,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 633,
              "end": 640,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 640,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 643,
              "end": 661,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 652,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 649,
                    "end": 652,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 652,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 654,
                "end": 661,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 657,
                  "end": 661,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 659,
                    "end": 660,
                    "typeName": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 660,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 657,
                    "end": 658,
                    "typeName": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 658,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 595,
        "end": 601,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 596,
            "end": 597,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 599,
            "end": 600,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 599,
              "end": 600,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 666,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 796,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 681,
            "decorators": [],
            "name": "enhancer4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 796,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 690,
                "end": 795,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 709,
                  "end": 794,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 715,
                      "end": 750,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 715,
                        "end": 723,
                        "decorators": [],
                        "name": "onChange",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 725,
                        "end": 750,
                        "async": false,
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "start": 736,
                          "end": 750,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 748,
                            "end": 750,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 737,
                              "end": 743,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 738,
                                "end": 743,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 740,
                                  "end": 743
                                }
                              }
                            }
                          ]
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 726,
                            "end": 731,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 756,
                      "end": 791,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 764,
                        "decorators": [],
                        "name": "onSubmit",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 766,
                        "end": 791,
                        "async": false,
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "start": 777,
                          "end": 791,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 789,
                            "end": 791,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 778,
                              "end": 784,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 779,
                                "end": 784,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 781,
                                  "end": 784
                                }
                              }
                            }
                          ]
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 767,
                            "end": 772,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 691,
                    "end": 703,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 696,
                      "end": 703,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 698,
                        "end": 703,
                        "typeName": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 703,
                          "decorators": [],
                          "name": "Props",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 689,
              "decorators": [],
              "name": "withH",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 799,
      "end": 824,
      "expression": {
        "type": "CallExpression",
        "start": 799,
        "end": 823,
        "arguments": [
          {
            "type": "Literal",
            "start": 818,
            "end": 822,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 799,
          "end": 817,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 799,
            "end": 808,
            "decorators": [],
            "name": "enhancer4",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 817,
            "decorators": [],
            "name": "onChange",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
