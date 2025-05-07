__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 503,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 80,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "decorators": [],
        "name": "UnNullify",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 42,
        "end": 79,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 50,
          "end": 57,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 77,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 77,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 72,
                "end": 76,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 75,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 71,
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 130,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 93,
        "end": 129,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 102,
          "end": 129,
          "params": [
            {
              "type": "TSTupleType",
              "start": 103,
              "end": 128,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 104,
                  "end": 108,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 107,
                    "end": 108,
                    "literal": {
                      "type": "Literal",
                      "start": 107,
                      "end": 108,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 110,
                  "end": 127,
                  "elementType": {
                    "type": "TSUnionType",
                    "start": 114,
                    "end": 127,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 114,
                        "end": 115,
                        "literal": {
                          "type": "Literal",
                          "start": 114,
                          "end": 115,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 118,
                        "end": 127
                      }
                    ]
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 93,
          "end": 102,
          "decorators": [],
          "name": "UnNullify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 132,
      "end": 185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 144,
        "end": 184,
        "checkType": {
          "type": "TSTupleType",
          "start": 144,
          "end": 157,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 145,
              "end": 149,
              "elementType": {
                "type": "TSLiteralType",
                "start": 148,
                "end": 149,
                "literal": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "label": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 151,
              "end": 156,
              "elementType": {
                "type": "TSLiteralType",
                "start": 155,
                "end": 156,
                "literal": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              "label": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 166,
          "end": 169,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 179,
          "end": 184,
          "literal": {
            "type": "Literal",
            "start": 179,
            "end": 184,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 172,
          "end": 176,
          "literal": {
            "type": "Literal",
            "start": 172,
            "end": 176,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 270,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 263,
                "end": 270,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 264,
                    "end": 265,
                    "literal": {
                      "type": "Literal",
                      "start": 264,
                      "end": 265,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 267,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 267,
                      "end": 268,
                      "literal": {
                        "type": "Literal",
                        "start": 267,
                        "end": 268,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
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
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 300,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 279,
                "end": 300,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 280,
                    "end": 281,
                    "literal": {
                      "type": "Literal",
                      "start": 280,
                      "end": 281,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 283,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 284,
                      "end": 297,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 284,
                          "end": 285,
                          "literal": {
                            "type": "Literal",
                            "start": 284,
                            "end": 285,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 288,
                          "end": 297
                        }
                      ]
                    }
                  }
                ]
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
      "start": 302,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 322,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 309,
                "end": 322,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 310,
                    "end": 314,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 313,
                      "end": 314,
                      "literal": {
                        "type": "Literal",
                        "start": 313,
                        "end": 314,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 311,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 316,
                    "end": 321,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 320,
                      "end": 321,
                      "literal": {
                        "type": "Literal",
                        "start": 320,
                        "end": 321,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 317,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true
                  }
                ]
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
      "start": 324,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 356,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 331,
                "end": 356,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 332,
                    "end": 336,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 335,
                      "end": 336,
                      "literal": {
                        "type": "Literal",
                        "start": 335,
                        "end": 336,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 333,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 338,
                    "end": 355,
                    "elementType": {
                      "type": "TSUnionType",
                      "start": 342,
                      "end": 355,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 342,
                          "end": 343,
                          "literal": {
                            "type": "Literal",
                            "start": 342,
                            "end": 343,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 346,
                          "end": 355
                        }
                      ]
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true
                  }
                ]
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
      "start": 358,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 383,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 365,
                "end": 383,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 374,
                  "end": 383,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 375,
                      "end": 382,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 376,
                          "end": 377,
                          "literal": {
                            "type": "Literal",
                            "start": 376,
                            "end": 377,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSOptionalType",
                          "start": 379,
                          "end": 381,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 379,
                            "end": 380,
                            "literal": {
                              "type": "Literal",
                              "start": 379,
                              "end": 380,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 374,
                  "decorators": [],
                  "name": "UnNullify",
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
      "start": 385,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 424,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 424,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 401,
                  "end": 424,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 402,
                      "end": 423,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 403,
                          "end": 404,
                          "literal": {
                            "type": "Literal",
                            "start": 403,
                            "end": 404,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSOptionalType",
                          "start": 406,
                          "end": 422,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 407,
                            "end": 420,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 407,
                                "end": 408,
                                "literal": {
                                  "type": "Literal",
                                  "start": 407,
                                  "end": 408,
                                  "raw": "2",
                                  "value": 2,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 411,
                                "end": 420
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "decorators": [],
                  "name": "UnNullify",
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
      "start": 426,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 457,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 457,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 457,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 457,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 442,
                  "end": 457,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 443,
                      "end": 456,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 444,
                          "end": 448,
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 447,
                            "end": 448,
                            "literal": {
                              "type": "Literal",
                              "start": 447,
                              "end": 448,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 450,
                          "end": 455,
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 454,
                            "end": 455,
                            "literal": {
                              "type": "Literal",
                              "start": 454,
                              "end": 455,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 450,
                            "end": 451,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 442,
                  "decorators": [],
                  "name": "UnNullify",
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
      "start": 459,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 502,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 502,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 466,
                "end": 502,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 475,
                  "end": 502,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 476,
                      "end": 501,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 477,
                          "end": 481,
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 480,
                            "end": 481,
                            "literal": {
                              "type": "Literal",
                              "start": 480,
                              "end": 481,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 478,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 483,
                          "end": 500,
                          "elementType": {
                            "type": "TSUnionType",
                            "start": 487,
                            "end": 500,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 487,
                                "end": 488,
                                "literal": {
                                  "type": "Literal",
                                  "start": 487,
                                  "end": 488,
                                  "raw": "2",
                                  "value": 2,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 491,
                                "end": 500
                              }
                            ]
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 484,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 475,
                  "decorators": [],
                  "name": "UnNullify",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
