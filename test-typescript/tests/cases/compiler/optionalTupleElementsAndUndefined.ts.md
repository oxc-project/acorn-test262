__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 504,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "name": "UnNullify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
        "type": "TSMappedType",
        "start": 42,
        "end": 79,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 45,
          "end": 57,
          "name": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 50,
            "end": 57,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
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
          "start": 60,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 71,
            "name": "NonNullable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 77,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 72,
                "end": 76,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 75,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
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
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 50,
          "end": 57,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
          "start": 45,
          "end": 46,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 93,
        "end": 129,
        "typeName": {
          "type": "Identifier",
          "start": 93,
          "end": 102,
          "name": "UnNullify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 2,
                          "raw": "2"
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": true
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 132,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                  "value": 1,
                  "raw": "1"
                }
              },
              "label": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "value": 2,
                  "raw": "2"
                }
              },
              "label": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": true
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 166,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 172,
          "end": 176,
          "literal": {
            "type": "Literal",
            "start": 172,
            "end": 176,
            "value": true,
            "raw": "true"
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
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 270,
            "name": "v",
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
                      "value": 1,
                      "raw": "1"
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
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ]
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
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 300,
            "name": "v",
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
                      "value": 1,
                      "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
      "start": 302,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 322,
            "name": "v",
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
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 311,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 317,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": true
                  }
                ]
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
      "start": 324,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 356,
            "name": "v",
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
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 333,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "value": 2,
                            "raw": "2"
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
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": true
                  }
                ]
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
      "start": 358,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 383,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 365,
                "end": 383,
                "typeName": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 374,
                  "name": "UnNullify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                            "value": 1,
                            "raw": "1"
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
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        }
                      ]
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
      "start": 385,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 424,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 424,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "name": "UnNullify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                            "value": 1,
                            "raw": "1"
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
                                  "value": 2,
                                  "raw": "2"
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
      "start": 426,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 457,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 457,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 457,
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 442,
                  "name": "UnNullify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 450,
                            "end": 451,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": true
                        }
                      ]
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
      "start": 459,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 502,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 466,
                "end": 502,
                "typeName": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 475,
                  "name": "UnNullify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 478,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "value": 2,
                                  "raw": "2"
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
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": true
                        }
                      ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
