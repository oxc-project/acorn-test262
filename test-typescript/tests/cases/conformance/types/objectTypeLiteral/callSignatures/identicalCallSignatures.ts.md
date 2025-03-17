__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 136,
  "end": 391,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 235,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 154,
            "end": 166,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 159,
                "end": 165
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 171,
            "end": 188,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 178,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 175,
                    "end": 178
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 193,
            "end": 206,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 193,
              "end": 196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 194,
                  "end": 195,
                  "name": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
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
                "start": 197,
                "end": 201,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 201,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
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
              "start": 202,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 205,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 211,
            "end": 224,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 211,
              "end": 214,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 212,
                  "end": 213,
                  "name": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
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
                "start": 215,
                "end": 219,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 216,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 218,
                    "end": 219,
                    "typeName": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "name": "U",
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
              "start": 220,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 237,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 249,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
        "start": 253,
        "end": 295,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 259,
            "end": 269,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 260,
                "end": 264,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 261,
                  "end": 264,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 264,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
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
              "start": 265,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 274,
            "end": 284,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 275,
                "end": 279,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 276,
                  "end": 279,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
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
              "start": 280,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 282,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 391,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 304,
                "end": 391,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 310,
                    "end": 322,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 311,
                        "end": 312,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 315,
                        "end": 321
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 327,
                    "end": 344,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 328,
                        "end": 334,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 329,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 331,
                            "end": 334
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 335,
                      "end": 343,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 337,
                        "end": 343
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 349,
                    "end": 362,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 349,
                      "end": 352,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 350,
                          "end": 351,
                          "name": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 351,
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
                        "start": 353,
                        "end": 357,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 354,
                          "end": 357,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 356,
                            "end": 357,
                            "typeName": {
                              "type": "Identifier",
                              "start": 356,
                              "end": 357,
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
                      "start": 358,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 360,
                        "end": 361,
                        "typeName": {
                          "type": "Identifier",
                          "start": 360,
                          "end": 361,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 367,
                    "end": 380,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 367,
                      "end": 370,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 368,
                          "end": 369,
                          "name": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 369,
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
                        "start": 371,
                        "end": 375,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 372,
                          "end": 375,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 374,
                            "end": 375,
                            "typeName": {
                              "type": "Identifier",
                              "start": 374,
                              "end": 375,
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
                      "start": 376,
                      "end": 379,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 378,
                        "end": 379,
                        "typeName": {
                          "type": "Identifier",
                          "start": 378,
                          "end": 379,
                          "name": "T",
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
