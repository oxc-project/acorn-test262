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
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 36,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 50,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 77,
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 250,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 250,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 147,
                      "end": 150,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 148,
                          "end": 149,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 148,
                            "end": 149,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 147,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 159,
                              "end": 160,
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
                      "start": 162,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "U",
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
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 182,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 179,
                  "end": 182,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 180,
                      "end": 181,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 179,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 133,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 129,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 131,
                  "end": 132,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 188,
            "end": 248,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 191,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 208,
                      "end": 211,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 209,
                          "end": 210,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 208,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 221,
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
                      "start": 223,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 226,
                        "end": 229
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 247,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 191,
              "end": 194,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 192,
                  "end": 193,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 106,
        "end": 117,
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 270,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 270,
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 272,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 298,
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 290,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 301,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 348,
          "definite": false,
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
            "async": false,
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
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 344,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 344,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
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
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 400,
          "definite": false,
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
                "async": false,
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
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 386,
                          "end": 395,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 387,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 395,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
                    "start": 371,
                    "end": 372,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 365,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 426,
          "definite": false,
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
            "callee": {
              "type": "MemberExpression",
              "start": 412,
              "end": 417,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 412,
                "end": 413,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 556,
          "definite": false,
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
                "async": false,
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
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 542,
                          "end": 551,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 543,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 551,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 505,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 502,
                "end": 505,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 598,
          "definite": false,
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
            "callee": {
              "type": "MemberExpression",
              "start": 568,
              "end": 573,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 570,
                "end": 573,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
