typeInferenceReturnTypeCallback.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 430,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 46,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 35,
                    "end": 46,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 36,
                        "end": 40,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 37,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 39,
                            "end": 40,
                            "typeName": {
                              "type": "Identifier",
                              "start": 39,
                              "end": 40,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 45,
                        "end": 46,
                        "typeName": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 57,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 54,
                  "end": 57,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 56,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 54,
                  "decorators": [],
                  "name": "IList",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 28,
              "end": 31,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 29,
                  "end": 30,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "IList",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 163,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 163,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 161,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 161,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 161,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 155,
                    "argument": {
                      "type": "Literal",
                      "start": 150,
                      "end": 154,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 121,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 110,
                      "end": 121,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 111,
                          "end": 115,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 115,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 114,
                              "end": 115,
                              "typeName": {
                                "type": "Identifier",
                                "start": 114,
                                "end": 115,
                                "decorators": [],
                                "name": "C",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 117,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 120,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "D",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 132,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 129,
                    "end": 132,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 131,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 129,
                    "decorators": [],
                    "name": "IList",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 103,
                "end": 106,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 104,
                    "end": 105,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "Nil",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 86,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 91,
            "decorators": [],
            "name": "IList",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 91,
            "end": 94,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 430,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 198,
        "end": 430,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 204,
            "end": 348,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 207,
              "end": 348,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 237,
                "end": 348,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 247,
                    "end": 342,
                    "argument": {
                      "type": "CallExpression",
                      "start": 254,
                      "end": 341,
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "start": 269,
                          "end": 281,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 276,
                            "decorators": [],
                            "name": "Nil",
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 276,
                            "end": 279,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 277,
                                "end": 278,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 277,
                                  "end": 278,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 283,
                          "end": 340,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 295,
                            "end": 340,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 309,
                                "end": 330,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 316,
                                  "end": 329,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 320,
                                    "end": 324,
                                    "decorators": [],
                                    "name": "Cons",
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 324,
                                    "end": 327,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 325,
                                        "end": 326,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 325,
                                          "end": 326,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 284,
                              "end": 285,
                              "decorators": [],
                              "name": "t",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 287,
                              "end": 290,
                              "decorators": [],
                              "name": "acc",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 254,
                        "end": 268,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 254,
                          "end": 258
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 268,
                          "decorators": [],
                          "name": "foldRight",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 225,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 212,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 214,
                      "end": 225,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 215,
                          "end": 219,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 216,
                            "end": 219,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 218,
                              "end": 219,
                              "typeName": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 219,
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
                        "start": 221,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 224,
                          "end": 225,
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 226,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 236,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 233,
                    "end": 236,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 234,
                        "end": 235,
                        "typeName": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 233,
                    "decorators": [],
                    "name": "IList",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 207,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 208,
                    "end": 209,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 354,
            "end": 428,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 363,
              "decorators": [],
              "name": "foldRight",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 363,
              "end": 428,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 428,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 410,
                    "end": 422,
                    "argument": {
                      "type": "Literal",
                      "start": 417,
                      "end": 421,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 367,
                  "end": 371,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 368,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 373,
                  "end": 395,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 395,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 376,
                      "end": 395,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 377,
                          "end": 381,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 378,
                            "end": 381,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 380,
                              "end": 381,
                              "typeName": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 381,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 383,
                          "end": 389,
                          "decorators": [],
                          "name": "acc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 386,
                            "end": 389,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 388,
                              "end": 389,
                              "typeName": {
                                "type": "Identifier",
                                "start": 388,
                                "end": 389,
                                "decorators": [],
                                "name": "E",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 391,
                        "end": 395,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 394,
                          "end": 395,
                          "typeName": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 395,
                            "decorators": [],
                            "name": "E",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 396,
                "end": 399,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 398,
                  "end": 399,
                  "typeName": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 363,
                "end": 366,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 364,
                    "end": 365,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "decorators": [],
        "name": "Cons",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 190,
          "end": 198,
          "expression": {
            "type": "Identifier",
            "start": 190,
            "end": 195,
            "decorators": [],
            "name": "IList",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 195,
            "end": 198,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 196,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 175,
        "end": 178,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 177,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
