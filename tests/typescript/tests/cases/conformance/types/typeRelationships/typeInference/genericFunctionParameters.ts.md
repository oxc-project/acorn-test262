__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 416,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 41,
          "decorators": [],
          "name": "cb",
          "optional": false,
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
                      "decorators": [],
                      "name": "S",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "S",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
      "params": [
        {
          "type": "Identifier",
          "start": 70,
          "end": 103,
          "decorators": [],
          "name": "cb",
          "optional": false,
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
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
                        "name": "S",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 167,
          "decorators": [],
          "name": "cb",
          "optional": false,
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
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 147,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "S",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 194,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 180,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 183,
            "end": 193,
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 186,
                "end": 192,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 222,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 211,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 213,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 214,
                "end": 220,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 254,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 243,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 245,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 246,
                "end": 252,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 354,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 353,
            "decorators": [],
            "name": "s",
            "optional": false,
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
                        "decorators": [],
                        "name": "R",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 314,
                    "end": 347,
                    "decorators": [],
                    "name": "go",
                    "optional": false,
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
                                "decorators": [],
                                "name": "S",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 322,
                            "end": 341,
                            "decorators": [],
                            "name": "ops",
                            "optional": false,
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
                                      "decorators": [],
                                      "name": "init",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null
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
                            }
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
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
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
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 382,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 365,
            "end": 381,
            "callee": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 367,
                "end": 380,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 378,
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
