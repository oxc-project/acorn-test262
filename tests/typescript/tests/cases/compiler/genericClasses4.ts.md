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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 42,
        "decorators": [],
        "name": "Vec2_T",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 464,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 93,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 271,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "fmap",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 271,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "B",
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
                      "typeParameters": null,
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
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 271,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 163,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 147,
                        "end": 162,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 153,
                          "end": 162,
                          "callee": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 154,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                    "start": 172,
                    "end": 192,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 176,
                        "end": 191,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 182,
                          "end": 191,
                          "callee": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                    "start": 201,
                    "end": 242,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 205,
                        "end": 241,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 219,
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 225,
                          "end": 241,
                          "callee": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 235,
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "retval",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 276,
            "end": 462,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 281,
              "end": 462,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "B",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 294,
                        "decorators": [],
                        "name": "Vec2_T",
                        "optional": false,
                        "typeAnnotation": null
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 462,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 330,
                    "end": 352,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 334,
                        "end": 351,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                    "start": 361,
                    "end": 383,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 365,
                        "end": 382,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 373,
                              "end": 374,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                    "start": 392,
                    "end": 433,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 396,
                        "end": 432,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 404,
                                "end": 410,
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 416,
                          "end": 432,
                          "callee": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 426,
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 427,
                              "end": 428,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 430,
                              "end": 431,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "retval",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
