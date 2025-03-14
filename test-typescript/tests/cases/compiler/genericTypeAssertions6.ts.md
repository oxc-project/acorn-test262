__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 441,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 85,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 85,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 57,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 56,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 52,
                          "end": 56,
                          "expression": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 56,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 53,
                            "end": 54,
                            "typeName": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 54,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 66,
                    "end": 79,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 70,
                        "end": 78,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 74,
                          "end": 78,
                          "expression": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 148,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 148,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 124,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 119,
                        "end": 123,
                        "expression": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 120,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 142,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 133,
                      "end": 141,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 137,
                        "end": 141,
                        "expression": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 139,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
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
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 96,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "ClassDeclaration",
      "start": 152,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 375,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 375,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 232,
                    "end": 248,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 236,
                        "end": 247,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 237,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 239,
                              "end": 243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 243,
                                "decorators": [],
                                "name": "Date",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 257,
                    "end": 273,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 261,
                        "end": 272,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 262,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 265,
                          "end": 272,
                          "expression": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 272,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 266,
                            "end": 270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 270,
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 304,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 303,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 290,
                          "end": 303,
                          "expression": {
                            "type": "NewExpression",
                            "start": 293,
                            "end": 303,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 301,
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 291,
                            "end": 292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 313,
                    "end": 335,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 317,
                        "end": 334,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 321,
                          "end": 334,
                          "expression": {
                            "type": "NewExpression",
                            "start": 324,
                            "end": 334,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 332,
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 323,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 344,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 368,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 352,
                          "end": 368,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 355,
                            "end": 368,
                            "expression": {
                              "type": "NewExpression",
                              "start": 358,
                              "end": 368,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 362,
                                "end": 366,
                                "decorators": [],
                                "name": "Date",
                                "optional": false
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 356,
                              "end": 357,
                              "typeName": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 357,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 353,
                            "end": 354,
                            "typeName": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 354,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 216,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 201,
        "end": 207,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 202,
            "end": 203,
            "typeName": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 206,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 174,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 190,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 190,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
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
      "start": 379,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 399,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 384,
              "end": 399,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 386,
                "end": 399,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 387,
                  "end": 399,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 392,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 398,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 398,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 421,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 421,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 409,
                  "end": 421,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 414,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 416,
                      "end": 420,
                      "typeName": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 420,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 424,
            "end": 440,
            "expression": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 438,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 426,
                "end": 438,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 431,
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 431,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 433,
                    "end": 437,
                    "typeName": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 437,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
