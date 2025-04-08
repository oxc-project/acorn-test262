__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 42,
        "name": "Vec2_T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 464,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "name": "fmap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 271,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 120,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 120,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 109,
                      "end": 120,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "name": "a",
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
                                "name": "A",
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
                            "name": "B",
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
                        "id": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "name": "x",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 153,
                          "end": 162,
                          "callee": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 154,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 155,
                              "end": 161,
                              "object": {
                                "type": "ThisExpression",
                                "start": 155,
                                "end": 159
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 160,
                                "end": 161,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 179,
                          "name": "y",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 182,
                          "end": 191,
                          "callee": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 184,
                              "end": 190,
                              "object": {
                                "type": "ThisExpression",
                                "start": 184,
                                "end": 188
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 190,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 222,
                          "name": "retval",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 211,
                            "end": 222,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 213,
                              "end": 222,
                              "typeName": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 219,
                                "name": "Vec2_T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "name": "B",
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
                          "type": "NewExpression",
                          "start": 225,
                          "end": 241,
                          "callee": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 235,
                            "name": "Vec2_T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 251,
                    "end": 265,
                    "argument": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 264,
                      "name": "retval",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 102,
                "end": 105,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 104,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "name": "B",
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
                "start": 121,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 123,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "name": "Vec2_T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 276,
            "end": 462,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 281,
              "end": 462,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 307,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 294,
                        "name": "Vec2_T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 294,
                        "end": 307,
                        "params": [
                          {
                            "type": "TSFunctionType",
                            "start": 295,
                            "end": 306,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 296,
                                "end": 300,
                                "name": "a",
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
                                      "name": "A",
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
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 337,
                          "name": "x",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 340,
                          "end": 351,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 340,
                            "end": 343,
                            "object": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 341,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 344,
                              "end": 350,
                              "object": {
                                "type": "ThisExpression",
                                "start": 344,
                                "end": 348
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 350,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 368,
                          "name": "y",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 371,
                          "end": 382,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 371,
                            "end": 374,
                            "object": {
                              "type": "Identifier",
                              "start": 371,
                              "end": 372,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 373,
                              "end": 374,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 375,
                              "end": 381,
                              "object": {
                                "type": "ThisExpression",
                                "start": 375,
                                "end": 379
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 381,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 413,
                          "name": "retval",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 402,
                            "end": 413,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 404,
                              "end": 413,
                              "typeName": {
                                "type": "Identifier",
                                "start": 404,
                                "end": 410,
                                "name": "Vec2_T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "name": "B",
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
                          "type": "NewExpression",
                          "start": 416,
                          "end": 432,
                          "callee": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 426,
                            "name": "Vec2_T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 427,
                              "end": 428,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 430,
                              "end": 431,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 442,
                    "end": 456,
                    "argument": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 455,
                      "name": "retval",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 281,
                "end": 284,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 282,
                    "end": 283,
                    "name": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 283,
                      "name": "B",
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
                "start": 308,
                "end": 319,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 310,
                  "end": 319,
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "name": "Vec2_T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "A",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
