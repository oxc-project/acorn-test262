unionAndIntersectionInference3.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 2245,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 52,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "Maybe",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 38,
        "end": 51,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 38,
            "end": 39,
            "typeName": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 126,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 81,
        "decorators": [],
        "name": "concatMaybe",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 85,
          "end": 119,
          "argument": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 119,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 94,
              "end": 119,
              "elementType": {
                "type": "TSUnionType",
                "start": 95,
                "end": 116,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 103,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 100,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 101,
                          "end": 102,
                          "typeName": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 100,
                      "decorators": [],
                      "name": "Maybe",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 106,
                    "end": 116,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 114,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 111,
                        "end": 114,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 112,
                            "end": 113,
                            "typeName": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 113,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 111,
                        "decorators": [],
                        "name": "Maybe",
                        "optional": false
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
        "start": 120,
        "end": 125,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 122,
          "end": 125,
          "elementType": {
            "type": "TSTypeReference",
            "start": 122,
            "end": 123,
            "typeName": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 153,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 152,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 139,
            "end": 148,
            "elements": [
              {
                "type": "Literal",
                "start": 140,
                "end": 141,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 143,
                "end": 144,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "raw": "3",
                "value": 3
              }
            ]
          },
          {
            "type": "Literal",
            "start": 150,
            "end": 151,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 138,
          "decorators": [],
          "name": "concatMaybe",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 265,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 265,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 187,
                "end": 265,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 197,
                    "end": 250,
                    "decorators": [],
                    "name": "com",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 200,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 202,
                        "end": 250,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 250,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 208,
                            "end": 250,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 208,
                                "end": 225,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 216,
                                  "end": 225,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 217,
                                      "end": 218,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 217,
                                        "end": 218,
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 220,
                                      "end": 221,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 220,
                                        "end": 221,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 223,
                                      "end": 224,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 224,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 208,
                                  "end": 216,
                                  "decorators": [],
                                  "name": "Iterator",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 228,
                                "end": 250,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 241,
                                  "end": 250,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 242,
                                      "end": 243,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 242,
                                        "end": 243,
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 245,
                                      "end": 246,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 245,
                                        "end": 246,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 248,
                                      "end": 249,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 248,
                                        "end": 249,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 228,
                                  "end": 241,
                                  "decorators": [],
                                  "name": "AsyncIterator",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 255,
                    "end": 265,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 262,
                      "end": 265,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 263,
                          "end": 264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 264,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 262,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 187,
                  "end": 196,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 188,
                      "end": 189,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 191,
                      "end": 192,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "R",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 194,
                      "end": 195,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 268,
            "end": 370,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 354,
              "end": 370,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 358,
                  "end": 368,
                  "argument": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 367,
                    "decorators": [],
                    "name": "com",
                    "optional": false
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
                "end": 337,
                "decorators": [],
                "name": "com",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 289,
                    "end": 337,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 337,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 295,
                        "end": 337,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 295,
                            "end": 312,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 303,
                              "end": 312,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 304,
                                  "end": 305,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 304,
                                    "end": 305,
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 307,
                                  "end": 308,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 307,
                                    "end": 308,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 310,
                                  "end": 311,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 310,
                                    "end": 311,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 295,
                              "end": 303,
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 315,
                            "end": 337,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 328,
                              "end": 337,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 329,
                                  "end": 330,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 329,
                                    "end": 330,
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 332,
                                  "end": 333,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 332,
                                    "end": 333,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 335,
                                  "end": 336,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 335,
                                    "end": 336,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 315,
                              "end": 328,
                              "decorators": [],
                              "name": "AsyncIterator",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 350,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 347,
                  "end": 350,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 348,
                      "end": 349,
                      "typeName": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 349,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 347,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 274,
              "end": 283,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 275,
                  "end": 276,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 276,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 278,
                  "end": 279,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 281,
                  "end": 282,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 282,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 420,
      "body": {
        "type": "TSInterfaceBody",
        "start": 391,
        "end": 420,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 397,
            "end": 418,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 402,
                "end": 410,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 410,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 410,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 417,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 413,
                "end": 417
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 387,
        "decorators": [],
        "name": "Foo1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 387,
        "end": 390,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 388,
            "end": 389,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 422,
      "end": 486,
      "body": {
        "type": "TSInterfaceBody",
        "start": 440,
        "end": 486,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 446,
            "end": 484,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 450,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 451,
                "end": 476,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 476,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 458,
                    "end": 476,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 458,
                        "end": 459,
                        "typeName": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 459,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 462,
                        "end": 476,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 473,
                          "end": 476,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 474,
                              "end": 475,
                              "typeName": {
                                "type": "Identifier",
                                "start": 474,
                                "end": 475,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 462,
                          "end": 473,
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 483,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 479,
                "end": 483
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "decorators": [],
        "name": "Bar1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 436,
        "end": 439,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 438,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 543,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 543,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 502,
              "end": 543,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 504,
                "end": 543,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 508,
                    "end": 528,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 509,
                      "end": 528,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 511,
                        "end": 528,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 511,
                            "end": 518,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 515,
                              "end": 518,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 516,
                                  "end": 517,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 516,
                                    "end": 517,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 511,
                              "end": 515,
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 528,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 525,
                              "end": 528,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 526,
                                  "end": 527,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 526,
                                    "end": 527,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 525,
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 530,
                  "end": 543,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 533,
                    "end": 543,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 540,
                      "end": 543,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 541,
                          "end": 542,
                          "typeName": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 542,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 540,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 504,
                  "end": 507,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 505,
                      "end": 506,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 600,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 600,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 561,
                "end": 600,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 565,
                    "end": 585,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 566,
                      "end": 585,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 568,
                        "end": 585,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 575,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 572,
                              "end": 575,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 573,
                                  "end": 574,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 573,
                                    "end": 574,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 572,
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 578,
                            "end": 585,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 582,
                              "end": 585,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 583,
                                  "end": 584,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 583,
                                    "end": 584,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 578,
                              "end": 582,
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 587,
                  "end": 600,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 600,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 597,
                      "end": 600,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 598,
                          "end": 599,
                          "typeName": {
                            "type": "Identifier",
                            "start": 598,
                            "end": 599,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 597,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 561,
                  "end": 564,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 562,
                      "end": 563,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 562,
                        "end": 563,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 611,
      "expression": {
        "type": "AssignmentExpression",
        "start": 603,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 603,
          "end": 605,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 608,
          "end": 610,
          "decorators": [],
          "name": "f2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 620,
      "expression": {
        "type": "AssignmentExpression",
        "start": 612,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 612,
          "end": 614,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 617,
          "end": 619,
          "decorators": [],
          "name": "f1",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 622,
      "end": 666,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 627,
        "end": 631,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 637,
        "end": 666,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 643,
            "end": 664,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 643,
              "end": 647,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 648,
                "end": 656,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 653,
                  "end": 656,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 655,
                    "end": 656,
                    "typeName": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 656,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 663,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 659,
                "end": 663
              }
            },
            "static": false
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 631,
        "end": 634,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 668,
      "end": 729,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 677,
        "decorators": [],
        "name": "Bar2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 683,
        "end": 729,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 689,
            "end": 727,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 689,
              "end": 693,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 694,
                "end": 719,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 699,
                  "end": 719,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 701,
                    "end": 719,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 701,
                        "end": 702,
                        "typeName": {
                          "type": "Identifier",
                          "start": 701,
                          "end": 702,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 705,
                        "end": 719,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 716,
                          "end": 719,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 717,
                              "end": 718,
                              "typeName": {
                                "type": "Identifier",
                                "start": 717,
                                "end": 718,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 716,
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 720,
              "end": 726,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 722,
                "end": 726
              }
            },
            "static": false
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 677,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 678,
            "end": 679,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 731,
      "end": 787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 786,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 786,
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 745,
              "end": 786,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 747,
                "end": 786,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 751,
                    "end": 771,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 752,
                      "end": 771,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 754,
                        "end": 771,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 754,
                            "end": 761,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 758,
                              "end": 761,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 759,
                                  "end": 760,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 759,
                                    "end": 760,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 754,
                              "end": 758,
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 764,
                            "end": 771,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 768,
                              "end": 771,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 769,
                                  "end": 770,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 769,
                                    "end": 770,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 764,
                              "end": 768,
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 773,
                  "end": 786,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 776,
                    "end": 786,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 783,
                      "end": 786,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 784,
                          "end": 785,
                          "typeName": {
                            "type": "Identifier",
                            "start": 784,
                            "end": 785,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 776,
                      "end": 783,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 747,
                  "end": 750,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 748,
                      "end": 749,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 788,
      "end": 844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 843,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 843,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 802,
              "end": 843,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 804,
                "end": 843,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 808,
                    "end": 828,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 809,
                      "end": 828,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 811,
                        "end": 828,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 811,
                            "end": 818,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 815,
                              "end": 818,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 816,
                                  "end": 817,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 816,
                                    "end": 817,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 811,
                              "end": 815,
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 821,
                            "end": 828,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 825,
                              "end": 828,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 826,
                                  "end": 827,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 826,
                                    "end": 827,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 821,
                              "end": 825,
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 830,
                  "end": 843,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 833,
                    "end": 843,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 840,
                      "end": 843,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 841,
                          "end": 842,
                          "typeName": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 842,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 833,
                      "end": 840,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 804,
                  "end": 807,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 805,
                      "end": 806,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 805,
                        "end": 806,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 846,
      "end": 854,
      "expression": {
        "type": "AssignmentExpression",
        "start": 846,
        "end": 853,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 846,
          "end": 848,
          "decorators": [],
          "name": "g1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 851,
          "end": 853,
          "decorators": [],
          "name": "g2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 855,
      "end": 863,
      "expression": {
        "type": "AssignmentExpression",
        "start": 855,
        "end": 862,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 855,
          "end": 857,
          "decorators": [],
          "name": "g2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 860,
          "end": 862,
          "decorators": [],
          "name": "g1",
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 887,
      "end": 944,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 908,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 912,
          "end": 939,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 915,
            "end": 939,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 917,
              "end": 939,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 917,
                  "end": 925,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 928,
                  "end": 939,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 936,
                    "end": 939,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 937,
                        "end": 938,
                        "typeName": {
                          "type": "Identifier",
                          "start": 937,
                          "end": 938,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 928,
                    "end": 936,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 940,
        "end": 943,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 942,
          "end": 943,
          "typeName": {
            "type": "Identifier",
            "start": 942,
            "end": 943,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 908,
        "end": 911,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 909,
            "end": 910,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 909,
              "end": 910,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 945,
      "end": 992,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 962,
        "end": 966,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 970,
          "end": 987,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 987,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 975,
              "end": 987,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 975,
                  "end": 983,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 975,
                    "end": 981
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 986,
                  "end": 987,
                  "typeName": {
                    "type": "Identifier",
                    "start": 986,
                    "end": 987,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 988,
        "end": 991,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 990,
          "end": 991,
          "typeName": {
            "type": "Identifier",
            "start": 990,
            "end": 991,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 966,
        "end": 969,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 967,
            "end": 968,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 994,
      "end": 1019,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1006,
          "end": 1018,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1006,
            "end": 1018,
            "decorators": [],
            "name": "sa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1008,
              "end": 1018,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1010,
                "end": 1018,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1010,
                  "end": 1016
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1020,
      "end": 1065,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1032,
          "end": 1064,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1064,
            "decorators": [],
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1034,
              "end": 1064,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1036,
                "end": 1064,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 1036,
                    "end": 1044,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1047,
                    "end": 1064,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1049,
                        "end": 1062,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1049,
                          "end": 1054,
                          "decorators": [],
                          "name": "extra",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1054,
                          "end": 1062,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1056,
                            "end": 1062
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1067,
      "end": 1085,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1071,
          "end": 1084,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1071,
            "end": 1073,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1076,
            "end": 1084,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1081,
                "end": 1083,
                "decorators": [],
                "name": "sa",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1076,
              "end": 1080,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1097,
      "end": 1115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1101,
          "end": 1114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1101,
            "end": 1103,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1106,
            "end": 1114,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1111,
                "end": 1113,
                "decorators": [],
                "name": "sx",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1106,
              "end": 1110,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1128,
      "end": 1146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1132,
          "end": 1145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1132,
            "end": 1134,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1137,
            "end": 1145,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1142,
                "end": 1144,
                "decorators": [],
                "name": "sa",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1137,
              "end": 1141,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1159,
      "end": 1177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1165,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1168,
            "end": 1176,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1173,
                "end": 1175,
                "decorators": [],
                "name": "sx",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1168,
              "end": 1172,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 1223,
      "end": 1262,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1250,
        "end": 1262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1252,
            "end": 1260,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1252,
              "end": 1257,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1257,
              "end": 1260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1259,
                "end": 1260,
                "typeName": {
                  "type": "Identifier",
                  "start": 1259,
                  "end": 1260,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1246,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1246,
        "end": 1249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1247,
            "end": 1248,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1247,
              "end": 1248,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1264,
      "end": 1327,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1271,
        "end": 1327,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1276,
          "end": 1290,
          "decorators": [],
          "name": "ComponentClass",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 1296,
          "end": 1326,
          "abstract": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1301,
              "end": 1309,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1306,
                "end": 1309,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1308,
                  "end": 1309,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1309,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1311,
            "end": 1326,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1314,
              "end": 1326,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1323,
                "end": 1326,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1324,
                    "end": 1325,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1324,
                      "end": 1325,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1314,
                "end": 1323,
                "decorators": [],
                "name": "Component",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1290,
          "end": 1293,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1291,
              "end": 1292,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1291,
                "end": 1292,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1328,
      "end": 1382,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1335,
        "end": 1382,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1340,
          "end": 1357,
          "decorators": [],
          "name": "FunctionComponent",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1363,
          "end": 1381,
          "params": [
            {
              "type": "Identifier",
              "start": 1364,
              "end": 1372,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1369,
                "end": 1372,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1371,
                  "end": 1372,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1371,
                    "end": 1372,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 1377,
              "end": 1381
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1357,
          "end": 1360,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1358,
              "end": 1359,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1358,
                "end": 1359,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1384,
      "end": 1456,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1391,
        "end": 1456,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1396,
          "end": 1409,
          "decorators": [],
          "name": "ComponentType",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1415,
          "end": 1455,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1415,
              "end": 1435,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1432,
                "end": 1435,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1433,
                    "end": 1434,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1433,
                      "end": 1434,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1415,
                "end": 1432,
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1438,
              "end": 1455,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1452,
                "end": 1455,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1453,
                    "end": 1454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1454,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1438,
                "end": 1452,
                "decorators": [],
                "name": "ComponentClass",
                "optional": false
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1409,
          "end": 1412,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1410,
              "end": 1411,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1410,
                "end": 1411,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1458,
      "end": 1512,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1465,
        "end": 1512,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1495,
          "end": 1512,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1497,
              "end": 1510,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1497,
                "end": 1502,
                "decorators": [],
                "name": "route",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1502,
                "end": 1510,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1504,
                  "end": 1510
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1475,
          "end": 1494,
          "decorators": [],
          "name": "RouteComponentProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 1514,
      "end": 1696,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1531,
        "end": 1541,
        "decorators": [],
        "name": "withRouter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1610,
          "end": 1641,
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1619,
            "end": 1641,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1621,
              "end": 1641,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1621,
                  "end": 1622,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1621,
                    "end": 1622,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1625,
                  "end": 1641,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1638,
                    "end": 1641,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1639,
                        "end": 1640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1639,
                          "end": 1640,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1625,
                    "end": 1638,
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1643,
        "end": 1695,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1645,
          "end": 1695,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1659,
            "end": 1695,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1660,
                "end": 1694,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1664,
                  "end": 1694,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1665,
                      "end": 1666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1665,
                        "end": 1666,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 1668,
                      "end": 1693,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1674,
                        "end": 1693,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1674,
                          "end": 1693,
                          "decorators": [],
                          "name": "RouteComponentProps",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1660,
                  "end": 1664,
                  "decorators": [],
                  "name": "Omit",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1645,
            "end": 1659,
            "decorators": [],
            "name": "ComponentClass",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1541,
        "end": 1606,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1545,
            "end": 1574,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1555,
              "end": 1574,
              "typeName": {
                "type": "Identifier",
                "start": 1555,
                "end": 1574,
                "decorators": [],
                "name": "RouteComponentProps",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1545,
              "end": 1546,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1578,
            "end": 1604,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1588,
              "end": 1604,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1601,
                "end": 1604,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1602,
                    "end": 1603,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1602,
                      "end": 1603,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1588,
                "end": 1601,
                "decorators": [],
                "name": "ComponentType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1578,
              "end": 1579,
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
      "type": "TSInterfaceDeclaration",
      "start": 1698,
      "end": 1762,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1742,
        "end": 1762,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1744,
            "end": 1760,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1744,
              "end": 1752,
              "decorators": [],
              "name": "username",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1752,
              "end": 1760,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1754,
                "end": 1760
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1722,
          "end": 1741,
          "expression": {
            "type": "Identifier",
            "start": 1722,
            "end": 1741,
            "decorators": [],
            "name": "RouteComponentProps",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1708,
        "end": 1713,
        "decorators": [],
        "name": "Props",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1764,
      "end": 1812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1778,
          "end": 1811,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1778,
            "end": 1811,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1789,
              "end": 1811,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1791,
                "end": 1811,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1804,
                  "end": 1811,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1805,
                      "end": 1810,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1805,
                        "end": 1810,
                        "decorators": [],
                        "name": "Props",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1791,
                  "end": 1804,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1814,
      "end": 1838,
      "expression": {
        "type": "CallExpression",
        "start": 1814,
        "end": 1837,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1825,
            "end": 1836,
            "decorators": [],
            "name": "MyComponent",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1814,
          "end": 1824,
          "decorators": [],
          "name": "withRouter",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1862,
      "end": 1895,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1867,
        "end": 1869,
        "decorators": [],
        "name": "AB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1875,
        "end": 1894,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1875,
            "end": 1883,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1877,
                "end": 1881,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1878,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1878,
                  "end": 1881,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1880,
                    "end": 1881,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1880,
                      "end": 1881,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1886,
            "end": 1894,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1888,
                "end": 1892,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1888,
                  "end": 1889,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1889,
                  "end": 1892,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1891,
                    "end": 1892,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1891,
                      "end": 1892,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1869,
        "end": 1872,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1870,
            "end": 1871,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1870,
              "end": 1871,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1958,
      "end": 2009,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1975,
        "end": 1978,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1985,
          "end": 1999,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1988,
            "end": 1999,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1990,
              "end": 1999,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1990,
                  "end": 1991,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1990,
                    "end": 1991,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1994,
                  "end": 1999,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1996,
                    "end": 1999,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1997,
                        "end": 1998,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1997,
                          "end": 1998,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1994,
                    "end": 1996,
                    "decorators": [],
                    "name": "AB",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2000,
        "end": 2008,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 2002,
          "end": 2008,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 2003,
              "end": 2004,
              "typeName": {
                "type": "Identifier",
                "start": 2003,
                "end": 2004,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2006,
              "end": 2007,
              "typeName": {
                "type": "Identifier",
                "start": 2006,
                "end": 2007,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1978,
        "end": 1984,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1979,
            "end": 1980,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1979,
              "end": 1980,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1982,
            "end": 1983,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1982,
              "end": 1983,
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
      "start": 2010,
      "end": 2037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2022,
          "end": 2036,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2022,
            "end": 2036,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2024,
              "end": 2036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2026,
                "end": 2036,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2028,
                  "end": 2036,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2029,
                      "end": 2035
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2026,
                  "end": 2028,
                  "decorators": [],
                  "name": "AB",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2039,
      "end": 2055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2043,
          "end": 2054,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2043,
            "end": 2044,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2047,
            "end": 2054,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2051,
                "end": 2053,
                "decorators": [],
                "name": "ab",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2047,
              "end": 2050,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2104,
      "end": 2170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2116,
          "end": 2169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2116,
            "end": 2169,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2117,
              "end": 2169,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2119,
                "end": 2169,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2125,
                  "end": 2169,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 2128,
                    "end": 2169,
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "start": 2129,
                        "end": 2158,
                        "checkType": {
                          "type": "TSTypeReference",
                          "start": 2129,
                          "end": 2130,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2129,
                            "end": 2130,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "start": 2139,
                          "end": 2143,
                          "literal": {
                            "type": "Literal",
                            "start": 2139,
                            "end": 2143,
                            "raw": "true",
                            "value": true
                          }
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "start": 2153,
                          "end": 2158,
                          "literal": {
                            "type": "Literal",
                            "start": 2153,
                            "end": 2158,
                            "raw": "false",
                            "value": false
                          }
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "start": 2146,
                          "end": 2150,
                          "literal": {
                            "type": "Literal",
                            "start": 2146,
                            "end": 2150,
                            "raw": "true",
                            "value": true
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2162,
                        "end": 2169
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2119,
                  "end": 2122,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2120,
                      "end": 2121,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2120,
                        "end": 2121,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2171,
      "end": 2237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2183,
          "end": 2236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2183,
            "end": 2236,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2184,
              "end": 2236,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2186,
                "end": 2236,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2192,
                  "end": 2236,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 2195,
                    "end": 2236,
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "start": 2196,
                        "end": 2225,
                        "checkType": {
                          "type": "TSTypeReference",
                          "start": 2196,
                          "end": 2197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2196,
                            "end": 2197,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "start": 2206,
                          "end": 2210,
                          "literal": {
                            "type": "Literal",
                            "start": 2206,
                            "end": 2210,
                            "raw": "true",
                            "value": true
                          }
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "start": 2220,
                          "end": 2225,
                          "literal": {
                            "type": "Literal",
                            "start": 2220,
                            "end": 2225,
                            "raw": "false",
                            "value": false
                          }
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "start": 2213,
                          "end": 2217,
                          "literal": {
                            "type": "Literal",
                            "start": 2213,
                            "end": 2217,
                            "raw": "true",
                            "value": true
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2229,
                        "end": 2236
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2186,
                  "end": 2189,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2187,
                      "end": 2188,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2187,
                        "end": 2188,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2238,
      "end": 2244,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2238,
        "end": 2243,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2238,
          "end": 2239,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2242,
          "end": 2243,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
