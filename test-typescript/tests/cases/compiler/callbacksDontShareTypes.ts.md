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
        "name": "Collection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
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
                      "name": "T",
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
              "name": "remove",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
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
                      "name": "T",
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
        "name": "Combinators",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 131,
                  "end": 132,
                  "name": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "name": "U",
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
                "start": 134,
                "end": 150,
                "name": "c",
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
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
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
              {
                "type": "Identifier",
                "start": 152,
                "end": 166,
                "name": "f",
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
                        "name": "x",
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
                              "name": "T",
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
                          "name": "U",
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
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "U",
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
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 211,
                "name": "c",
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
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
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
              {
                "type": "Identifier",
                "start": 213,
                "end": 229,
                "name": "f",
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
                        "name": "x",
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
                              "name": "T",
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
                      "start": 223,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 226,
                        "end": 229
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
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 270,
            "name": "_",
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
                  "name": "Combinators",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 298,
            "name": "c2",
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
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "name": "rf1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 348,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 315,
                    "end": 321
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 344,
                        "name": "toFixed",
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
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 357,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 368,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 370,
                "end": 399,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 395,
                            "name": "toFixed",
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
                      }
                    }
                  ]
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 409,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 418,
                "end": 420,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 422,
                "end": 425,
                "name": "rf1",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 490,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 497,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 502,
                "end": 505,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 524,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 526,
                "end": 555,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 551,
                            "name": "toFixed",
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
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 565,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 570,
                "end": 573,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "name": "rf1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
