__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 417,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
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
          "start": 23,
          "end": 41,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 41,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 27,
              "end": 41,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 27,
                "end": 30,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 28,
                    "end": 29,
                    "name": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "name": "S",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "name": "S",
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
                "start": 37,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 44,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "f2",
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
          "start": 70,
          "end": 103,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 74,
              "end": 103,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 74,
                "end": 92,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 75,
                    "end": 91,
                    "name": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
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
                  "start": 93,
                  "end": 97,
                  "name": "x",
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
                        "name": "S",
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
                "start": 99,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 104,
        "end": 107,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 106,
          "end": 107,
          "typeName": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "name": "f3",
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
          "start": 132,
          "end": 167,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 167,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 136,
              "end": 167,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 136,
                "end": 156,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 137,
                    "end": 155,
                    "name": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 147,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 152,
                        "end": 155,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 153,
                            "end": 154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
                  "start": 157,
                  "end": 161,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 158,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 160,
                      "end": 161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "name": "S",
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
                "start": 163,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 166,
                  "end": 167,
                  "typeName": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 171,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 171,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 180,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 183,
            "end": 193,
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 186,
                "end": 192,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 211,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 213,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 214,
                "end": 220,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 243,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 245,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 246,
                "end": 252,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 353,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 353,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 310,
                "end": 353,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 310,
                  "end": 313,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 311,
                      "end": 312,
                      "name": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 312,
                        "name": "R",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 314,
                    "end": 347,
                    "name": "go",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 347,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 318,
                        "end": 347,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 318,
                          "end": 321,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 319,
                              "end": 320,
                              "name": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 320,
                                "name": "S",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 322,
                            "end": 341,
                            "name": "ops",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 325,
                              "end": 341,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 327,
                                "end": 341,
                                "members": [
                                  {
                                    "type": "TSMethodSignature",
                                    "start": 329,
                                    "end": 339,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 329,
                                      "end": 333,
                                      "name": "init",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false,
                                    "kind": "method",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 335,
                                      "end": 338,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 337,
                                        "end": 338,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 337,
                                          "end": 338,
                                          "name": "S",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 343,
                          "end": 347,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 346,
                            "end": 347,
                            "typeName": {
                              "type": "Identifier",
                              "start": 346,
                              "end": 347,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 349,
                  "end": 353,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 352,
                    "end": 353,
                    "typeName": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 353,
                      "name": "R",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 365,
            "end": 381,
            "callee": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 367,
                "end": 380,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 372,
                  "end": 380,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 372,
                    "end": 378,
                    "object": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 373,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 378,
                      "name": "init",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
