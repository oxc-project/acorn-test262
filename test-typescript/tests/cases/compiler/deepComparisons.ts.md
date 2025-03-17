__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 937,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 265,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 110,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 71,
                "end": 109,
                "id": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 93,
                  "name": "v1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 75,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 82,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 82,
                        "end": 93,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 83,
                            "end": 84,
                            "typeName": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 84,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 86,
                            "end": 92
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 96,
                  "end": 109,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 96,
                    "end": 104,
                    "expression": {
                      "type": "Literal",
                      "start": 96,
                      "end": 97,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 175,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 155,
                  "name": "v2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 140,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 140,
                        "end": 155,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 141,
                            "end": 146,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 141,
                              "end": 142,
                              "typeName": {
                                "type": "Identifier",
                                "start": 141,
                                "end": 142,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 143,
                              "end": 145,
                              "typeName": {
                                "type": "Identifier",
                                "start": 143,
                                "end": 145,
                                "name": "K1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 148,
                            "end": 154
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 158,
                  "end": 175,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 158,
                    "end": 166,
                    "expression": {
                      "type": "Literal",
                      "start": 158,
                      "end": 159,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 163,
                      "end": 166
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 170,
                    "end": 175,
                    "objectType": {
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
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 174,
                        "name": "K1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 191,
            "end": 250,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 195,
                "end": 249,
                "id": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 225,
                  "name": "v3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 199,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 206,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 206,
                        "end": 225,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 207,
                            "end": 216,
                            "objectType": {
                              "type": "TSIndexedAccessType",
                              "start": 207,
                              "end": 212,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 207,
                                "end": 208,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 207,
                                  "end": 208,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 209,
                                "end": 211,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 209,
                                  "end": 211,
                                  "name": "K1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 213,
                              "end": 215,
                              "typeName": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 215,
                                "name": "K2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 218,
                            "end": 224
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 228,
                  "end": 249,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 228,
                    "end": 236,
                    "expression": {
                      "type": "Literal",
                      "start": 228,
                      "end": 229,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 233,
                      "end": 236
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 240,
                    "end": 249,
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 240,
                      "end": 245,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 240,
                        "end": 241,
                        "typeName": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 241,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 242,
                        "end": 244,
                        "typeName": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 244,
                          "name": "K1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 246,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 248,
                        "name": "K2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
            "start": 15,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 17,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 26,
              "end": 33,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 57,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 46,
              "end": 57,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 52,
                "end": 57,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 56,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 267,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 275,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 277,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 281,
        "end": 294,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 283,
            "end": 292,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 286,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 289,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 292,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 296,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 304,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 304,
        "end": 307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 305,
            "end": 306,
            "name": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 310,
        "end": 325,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 323,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 323,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 318,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 318,
                  "end": 323,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 319,
                      "end": 322,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 320,
                        "typeName": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 345,
        "end": 421,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 351,
            "end": 386,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 385,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 364,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 356,
                    "end": 364,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 358,
                      "end": 364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 361,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 361,
                        "end": 364,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 362,
                            "end": 363,
                            "typeName": {
                              "type": "Identifier",
                              "start": 362,
                              "end": 363,
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 367,
                  "end": 385,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 367,
                    "end": 375,
                    "expression": {
                      "type": "Literal",
                      "start": 367,
                      "end": 368,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 372,
                      "end": 375
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 379,
                    "end": 385,
                    "typeName": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 382,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 382,
                      "end": 385,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 383,
                          "end": 384,
                          "typeName": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 384,
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
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 339,
        "end": 342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 340,
            "end": 341,
            "name": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 423,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 432,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 432,
        "end": 435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 433,
            "end": 434,
            "name": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 438,
        "end": 452,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 440,
            "end": 450,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 441,
              "end": 450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 443,
                "end": 450,
                "typeName": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 447,
                  "name": "Foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 447,
                  "end": 450,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 449,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 454,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 463,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 463,
        "end": 466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 464,
            "end": 465,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 469,
        "end": 483,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 471,
            "end": 481,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 481,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 478,
                  "name": "Foo1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 478,
                  "end": 481,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 480,
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 486,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 497,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 503,
        "end": 561,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 509,
            "end": 545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 513,
                "end": 544,
                "id": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 523,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 516,
                      "end": 523,
                      "typeName": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 520,
                        "name": "Foo1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 520,
                        "end": 523,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 522,
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 522,
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 526,
                  "end": 544,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 526,
                    "end": 534,
                    "expression": {
                      "type": "Literal",
                      "start": 526,
                      "end": 527,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 531,
                      "end": 534
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 538,
                    "end": 544,
                    "typeName": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 541,
                      "end": 544,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 542,
                          "end": 543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 543,
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
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 497,
        "end": 500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 585,
      "end": 854,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 591,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 591,
        "end": 594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 597,
        "end": 853,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 597,
            "end": 599,
            "members": []
          },
          {
            "type": "TSConditionalType",
            "start": 608,
            "end": 851,
            "checkType": {
              "type": "TSTypeReference",
              "start": 608,
              "end": 609,
              "typeName": {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTupleType",
              "start": 618,
              "end": 633,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 619,
                  "end": 622
                },
                {
                  "type": "TSRestType",
                  "start": 624,
                  "end": 632,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 627,
                    "end": 632,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 627,
                      "end": 630
                    }
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSMappedType",
              "start": 644,
              "end": 672,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 647,
                "end": 659,
                "name": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 652,
                  "end": 659,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 658,
                    "end": 659,
                    "typeName": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 663,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 664,
                  "name": "F",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 664,
                  "end": 670,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 665,
                      "end": 669,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 665,
                        "end": 666,
                        "typeName": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 666,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 667,
                        "end": 668,
                        "typeName": {
                          "type": "Identifier",
                          "start": 667,
                          "end": 668,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": true,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 652,
                "end": 659,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 658,
                  "end": 659,
                  "typeName": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 659,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 683,
              "end": 851,
              "checkType": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 684,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 684,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSArrayType",
                "start": 693,
                "end": 698,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 693,
                  "end": 696
                }
              },
              "trueType": {
                "type": "TSArrayType",
                "start": 713,
                "end": 727,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 713,
                  "end": 725,
                  "typeName": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 714,
                    "end": 725,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 715,
                        "end": 724,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 715,
                          "end": 716,
                          "typeName": {
                            "type": "Identifier",
                            "start": 715,
                            "end": 716,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSNumberKeyword",
                          "start": 717,
                          "end": 723
                        }
                      }
                    ]
                  }
                }
              },
              "falseType": {
                "type": "TSConditionalType",
                "start": 742,
                "end": 851,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 742,
                  "end": 743,
                  "typeName": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "start": 752,
                  "end": 772,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 754,
                      "end": 770,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 755,
                          "end": 764,
                          "name": "K",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 756,
                            "end": 764,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 758,
                              "end": 764
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 765,
                        "end": 770,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 767,
                          "end": 770
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                },
                "trueType": {
                  "type": "TSMappedType",
                  "start": 791,
                  "end": 819,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 794,
                    "end": 806,
                    "name": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 795,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 799,
                      "end": 806,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 805,
                        "end": 806,
                        "typeName": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 806,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 810,
                    "end": 817,
                    "typeName": {
                      "type": "Identifier",
                      "start": 810,
                      "end": 811,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 811,
                      "end": 817,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 812,
                          "end": 816,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 812,
                            "end": 813,
                            "typeName": {
                              "type": "Identifier",
                              "start": 812,
                              "end": 813,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 814,
                            "end": 815,
                            "typeName": {
                              "type": "Identifier",
                              "start": 814,
                              "end": 815,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  },
                  "optional": true,
                  "readonly": null,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 799,
                    "end": 806,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 805,
                      "end": 806,
                      "typeName": {
                        "type": "Identifier",
                        "start": 805,
                        "end": 806,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 795,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "falseType": {
                  "type": "TSTypeLiteral",
                  "start": 838,
                  "end": 851,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 840,
                      "end": 849,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 840,
                        "end": 841,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 841,
                        "end": 849,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 843,
                          "end": 849
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 856,
      "end": 892,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 874,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 874,
        "end": 883,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 875,
            "end": 882,
            "name": {
              "type": "Identifier",
              "start": 875,
              "end": 876,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 879,
              "end": 882
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 885,
        "end": 891,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 887,
          "end": 891,
          "typeName": {
            "type": "Identifier",
            "start": 887,
            "end": 888,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 888,
            "end": 891,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 889,
                "end": 890,
                "typeName": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 890,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 894,
      "end": 936,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 904,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 907,
        "end": 936,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 913,
            "end": 934,
            "argument": {
              "type": "TSAsExpression",
              "start": 920,
              "end": 933,
              "expression": {
                "type": "CallExpression",
                "start": 920,
                "end": 923,
                "callee": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 921,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 927,
                "end": 933,
                "typeName": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 928,
                  "name": "F",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 928,
                  "end": 933,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 929,
                      "end": 932
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
