__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 36,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 50,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 58,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "T",
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
              "start": 59,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 93,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 77,
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 78,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 82,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "T",
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
              "start": 83,
              "end": 92,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 85,
                "end": 92
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 117,
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 250,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 183,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 133,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 129,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 131,
                  "end": 132,
                  "name": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "U",
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
                "start": 134,
                "end": 150,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 137,
                    "end": 150,
                    "typeName": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 147,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 147,
                      "end": 150,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 148,
                          "end": 149,
                          "typeName": {
                            "type": "Identifier",
                            "start": 148,
                            "end": 149,
                            "decorators": [],
                            "name": "T",
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
              {
                "type": "Identifier",
                "start": 152,
                "end": 166,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 155,
                    "end": 166,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 156,
                        "end": 160,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 157,
                          "end": 160,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 159,
                            "end": 160,
                            "typeName": {
                              "type": "Identifier",
                              "start": 159,
                              "end": 160,
                              "decorators": [],
                              "name": "T",
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
                      "start": 162,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "U",
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
              "start": 167,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 179,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 179,
                  "end": 182,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 180,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 188,
            "end": 248,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 191,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 191,
              "end": 194,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 192,
                  "end": 193,
                  "name": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
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
                "start": 195,
                "end": 211,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 208,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 208,
                      "end": 211,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 209,
                          "end": 210,
                          "typeName": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "decorators": [],
                            "name": "T",
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
              {
                "type": "Identifier",
                "start": 213,
                "end": 229,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 214,
                  "end": 229,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 216,
                    "end": 229,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 217,
                        "end": 221,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 220,
                            "end": 221,
                            "typeName": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 221,
                              "decorators": [],
                              "name": "T",
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
                      "start": 223,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 226,
                        "end": 229
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 242,
                  "end": 247,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 243,
                      "end": 246
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 271,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 270,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 270,
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 299,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 298,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 290,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 290,
                  "end": 298,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 349,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "decorators": [],
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 348,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 315,
                    "end": 321
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 326,
              "end": 348,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 328,
                  "end": 346,
                  "argument": {
                    "type": "CallExpression",
                    "start": 335,
                    "end": 346,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 344,
                      "object": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 344,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 357,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 400,
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 365,
              "object": {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 368,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 370,
                "end": 399,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 377,
                  "end": 399,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 379,
                      "end": 397,
                      "argument": {
                        "type": "CallExpression",
                        "start": 386,
                        "end": 397,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 386,
                          "end": 395,
                          "object": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 387,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 395,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  ]
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
      "start": 402,
      "end": 427,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 409,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 412,
            "end": 426,
            "callee": {
              "type": "MemberExpression",
              "start": 412,
              "end": 417,
              "object": {
                "type": "Identifier",
                "start": 412,
                "end": 413,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 418,
                "end": 420,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 422,
                "end": 425,
                "decorators": [],
                "name": "rf1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 490,
      "end": 557,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 497,
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 500,
            "end": 556,
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 505,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 502,
                "end": 505,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 505,
              "end": 521,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 506,
                  "end": 512
                },
                {
                  "type": "TSStringKeyword",
                  "start": 514,
                  "end": 520
                }
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 524,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 526,
                "end": 555,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 533,
                  "end": 555,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 535,
                      "end": 553,
                      "argument": {
                        "type": "CallExpression",
                        "start": 542,
                        "end": 553,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 542,
                          "end": 551,
                          "object": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 543,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 551,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  ]
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
      "start": 558,
      "end": 599,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 565,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 568,
            "end": 598,
            "callee": {
              "type": "MemberExpression",
              "start": 568,
              "end": 573,
              "object": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 570,
                "end": 573,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 573,
              "end": 589,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 574,
                  "end": 580
                },
                {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "decorators": [],
                "name": "rf1",
                "optional": false,
                "typeAnnotation": null
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
