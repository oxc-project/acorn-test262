genericClasses4.ts
```json
{
  "type": "Program",
  "start": 30,
  "end": 464,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 464,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 464,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 93,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
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
              "start": 63,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 64,
                  "end": 75,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 75,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 74,
                        "end": 75,
                        "typeName": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 75,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 77,
                  "end": 88,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 87,
                        "end": 88,
                        "typeName": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 271,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "fmap",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 271,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 271,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 163,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 147,
                        "end": 162,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 148,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 149,
                              "end": 150,
                              "typeName": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 150,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 153,
                          "end": 162,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 155,
                              "end": 161,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 155,
                                "end": 159
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 160,
                                "end": 161,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 154,
                            "decorators": [],
                            "name": "f",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 172,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 176,
                        "end": 191,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 179,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 177,
                            "end": 179,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 178,
                              "end": 179,
                              "typeName": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 179,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 182,
                          "end": 191,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 184,
                              "end": 190,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 184,
                                "end": 188
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 190,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "f",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 201,
                    "end": 242,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 205,
                        "end": 241,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 222,
                          "decorators": [],
                          "name": "retval",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 211,
                            "end": 222,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 213,
                              "end": 222,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 219,
                                "end": 222,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 220,
                                    "end": 221,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 220,
                                      "end": 221,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 219,
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 225,
                          "end": 241,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 235,
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 251,
                    "end": 265,
                    "argument": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 264,
                      "decorators": [],
                      "name": "retval",
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
                  "start": 106,
                  "end": 120,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 120,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 109,
                      "end": 120,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 111,
                            "end": 114,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 113,
                              "end": 114,
                              "typeName": {
                                "type": "Identifier",
                                "start": 113,
                                "end": 114,
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
                        "start": 116,
                        "end": 120,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 119,
                          "end": 120,
                          "typeName": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 120,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 121,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 123,
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
                          "name": "B",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 102,
                "end": 105,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 104,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "B",
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
            "start": 276,
            "end": 462,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "decorators": [],
              "name": "apply",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 281,
              "end": 462,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 462,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 330,
                    "end": 352,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 334,
                        "end": 351,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 337,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 335,
                            "end": 337,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 336,
                              "end": 337,
                              "typeName": {
                                "type": "Identifier",
                                "start": 336,
                                "end": 337,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 340,
                          "end": 351,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 344,
                              "end": 350,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 344,
                                "end": 348
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 350,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 340,
                            "end": 343,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 341,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 361,
                    "end": 383,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 365,
                        "end": 382,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 368,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 366,
                            "end": 368,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 367,
                              "end": 368,
                              "typeName": {
                                "type": "Identifier",
                                "start": 367,
                                "end": 368,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 371,
                          "end": 382,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 375,
                              "end": 381,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 375,
                                "end": 379
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 381,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 371,
                            "end": 374,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 371,
                              "end": 372,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 373,
                              "end": 374,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 392,
                    "end": 433,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 396,
                        "end": 432,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 413,
                          "decorators": [],
                          "name": "retval",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 402,
                            "end": 413,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 404,
                              "end": 413,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 410,
                                "end": 413,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 411,
                                    "end": 412,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 411,
                                      "end": 412,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 404,
                                "end": 410,
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 416,
                          "end": 432,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 427,
                              "end": 428,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 430,
                              "end": 431,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 426,
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 442,
                    "end": 456,
                    "argument": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 455,
                      "decorators": [],
                      "name": "retval",
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
                  "start": 285,
                  "end": 307,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 307,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 294,
                        "end": 307,
                        "params": [
                          {
                            "type": "TSFunctionType",
                            "start": 295,
                            "end": 306,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 296,
                                "end": 300,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 297,
                                  "end": 300,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 299,
                                    "end": 300,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 299,
                                      "end": 300,
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
                              "start": 302,
                              "end": 306,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 305,
                                "end": 306,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 305,
                                  "end": 306,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 294,
                        "decorators": [],
                        "name": "Vec2_T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 308,
                "end": 319,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 310,
                  "end": 319,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 316,
                    "end": 319,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 317,
                        "end": 318,
                        "typeName": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 281,
                "end": 284,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 282,
                    "end": 283,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 283,
                      "decorators": [],
                      "name": "B",
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
        "start": 36,
        "end": 42,
        "decorators": [],
        "name": "Vec2_T",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 44,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "A",
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
