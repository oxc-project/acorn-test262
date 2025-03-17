__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
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
      "start": 23,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "W",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 32,
        "end": 45,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 43,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
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
      "start": 46,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "name": "RW",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 56,
        "end": 80,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
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
      "type": "VariableDeclaration",
      "start": 81,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 286,
            "name": "pli",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 286,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 106,
                    "end": 160,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 112,
                        "name": "s1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 109,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 111,
                            "end": 112,
                            "typeName": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 112,
                              "name": "R",
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
                      {
                        "type": "Identifier",
                        "start": 114,
                        "end": 120,
                        "name": "s2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 116,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 118,
                            "end": 120,
                            "typeName": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 120,
                              "name": "RW",
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
                      {
                        "type": "Identifier",
                        "start": 122,
                        "end": 128,
                        "name": "s3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 128,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 128,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 128,
                              "name": "RW",
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
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "name": "s4",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 132,
                          "end": 136,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 134,
                            "end": 136,
                            "typeName": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 136,
                              "name": "RW",
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
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 143,
                        "name": "s5",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 140,
                          "end": 143,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 142,
                            "end": 143,
                            "typeName": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "name": "W",
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
                      "start": 144,
                      "end": 159,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 146,
                        "end": 159,
                        "typeName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 153,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 153,
                          "end": 159,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 154,
                              "end": 158
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 165,
                    "end": 217,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 166,
                        "end": 200,
                        "name": "streams",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 173,
                          "end": 200,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 200,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 188,
                              "name": "ReadonlyArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 188,
                              "end": 200,
                              "params": [
                                {
                                  "type": "TSUnionType",
                                  "start": 189,
                                  "end": 199,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 189,
                                      "end": 190,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 189,
                                        "end": 190,
                                        "name": "R",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 193,
                                      "end": 194,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 193,
                                        "end": 194,
                                        "name": "W",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 197,
                                      "end": 199,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 197,
                                        "end": 199,
                                        "name": "RW",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 201,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 203,
                        "end": 216,
                        "typeName": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 210,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 210,
                          "end": 216,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 211,
                              "end": 215
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 222,
                    "end": 284,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 228,
                        "name": "s1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 225,
                          "end": 228,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 227,
                            "end": 228,
                            "typeName": {
                              "type": "Identifier",
                              "start": 227,
                              "end": 228,
                              "name": "R",
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
                      {
                        "type": "Identifier",
                        "start": 230,
                        "end": 240,
                        "name": "s2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 232,
                          "end": 240,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 234,
                            "end": 240,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 234,
                                "end": 236,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 234,
                                  "end": 236,
                                  "name": "RW",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 239,
                                "end": 240,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 239,
                                  "end": 240,
                                  "name": "W",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 242,
                        "end": 267,
                        "argument": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 252,
                          "name": "streams",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 267,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 254,
                            "end": 267,
                            "typeName": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 259,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 259,
                              "end": 267,
                              "params": [
                                {
                                  "type": "TSUnionType",
                                  "start": 260,
                                  "end": 266,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 260,
                                      "end": 262,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 260,
                                        "end": 262,
                                        "name": "RW",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 265,
                                      "end": 266,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 265,
                                        "end": 266,
                                        "name": "W",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 270,
                        "end": 283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 277,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 277,
                          "end": 283,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 278,
                              "end": 282
                            }
                          ]
                        }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 309,
            "name": "writes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 309,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 309,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 309,
                  "name": "W",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 330,
            "name": "reads",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 330,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "name": "R",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 348,
            "name": "tr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 348,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "name": "W",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 370,
            "name": "gun",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 370,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 366,
                "end": 370,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 366,
                  "end": 368,
                  "typeName": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 368,
                    "name": "RW",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 391,
            "name": "gz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 391,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 387,
                "end": 391,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 387,
                  "end": 389,
                  "typeName": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 389,
                    "name": "RW",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 460,
            "name": "fun",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 460,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 409,
                "end": 460,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 410,
                    "end": 418,
                    "name": "inp",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 413,
                      "end": 418,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 415,
                        "end": 418
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 420,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 423,
                    "end": 460,
                    "typeName": {
                      "type": "Identifier",
                      "start": 423,
                      "end": 437,
                      "name": "AsyncGenerator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 437,
                      "end": 460,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 438,
                          "end": 444
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 446,
                          "end": 450
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 452,
                          "end": 459
                        }
                      ]
                    }
                  }
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 461,
      "end": 530,
      "expression": {
        "type": "CallExpression",
        "start": 461,
        "end": 529,
        "callee": {
          "type": "Identifier",
          "start": 461,
          "end": 464,
          "name": "pli",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 470,
            "end": 475,
            "name": "reads",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "SpreadElement",
            "start": 481,
            "end": 487,
            "argument": {
              "type": "Identifier",
              "start": 484,
              "end": 487,
              "name": "gun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 493,
            "end": 495,
            "name": "tr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 501,
            "end": 504,
            "name": "fun",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "SpreadElement",
            "start": 510,
            "end": 515,
            "argument": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "name": "gz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 521,
            "end": 527,
            "name": "writes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 532,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 553,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 554,
          "end": 560,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 555,
            "end": 560,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 557,
              "end": 560
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 562,
          "end": 577,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 563,
            "end": 577,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 565,
              "end": 577,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 568,
                "end": 577,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 571,
                  "end": 577
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 578,
        "end": 598,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 580,
          "end": 598,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 580,
              "end": 586
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 589,
              "end": 598
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 623,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 623,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 623,
            "name": "anys",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 623,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 618,
                "end": 623,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 618,
                  "end": 621
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 637,
      "expression": {
        "type": "CallExpression",
        "start": 624,
        "end": 637,
        "callee": {
          "type": "Identifier",
          "start": 624,
          "end": 628,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 629,
            "end": 636,
            "argument": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
              "name": "anys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 639,
      "end": 679,
      "expression": {
        "type": "CallExpression",
        "start": 639,
        "end": 679,
        "callee": {
          "type": "Identifier",
          "start": 639,
          "end": 642,
          "name": "pli",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 643,
            "end": 678,
            "argument": {
              "type": "TSAsExpression",
              "start": 646,
              "end": 678,
              "expression": {
                "type": "ArrayExpression",
                "start": 646,
                "end": 669,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 647,
                    "end": 652,
                    "name": "reads",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 654,
                    "end": 660,
                    "name": "writes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 662,
                    "end": 668,
                    "name": "writes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 673,
                "end": 678,
                "typeName": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 678,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
