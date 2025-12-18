__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 24
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 26
                    },
                    "typeArguments": null,
                    "start": 25,
                    "end": 26
                  }
                ],
                "start": 24,
                "end": 27
              },
              "start": 17,
              "end": 27
            },
            "start": 15,
            "end": 27
          },
          "start": 14,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 40
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "typeArguments": null,
                    "start": 41,
                    "end": 42
                  }
                ],
                "start": 40,
                "end": 43
              },
              "start": 32,
              "end": 43
            },
            "start": 30,
            "end": 43
          },
          "start": 29,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 56
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 65
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 66,
                            "end": 67
                          },
                          "typeArguments": null,
                          "start": 66,
                          "end": 67
                        }
                      ],
                      "start": 65,
                      "end": 68
                    },
                    "start": 57,
                    "end": 68
                  }
                ],
                "start": 56,
                "end": 69
              },
              "start": 49,
              "end": 69
            },
            "start": 47,
            "end": 69
          },
          "start": 45,
          "end": 69
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 83
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 91
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 92,
                            "end": 93
                          },
                          "typeArguments": null,
                          "start": 92,
                          "end": 93
                        }
                      ],
                      "start": 91,
                      "end": 94
                    },
                    "start": 84,
                    "end": 94
                  }
                ],
                "start": 83,
                "end": 95
              },
              "start": 75,
              "end": 95
            },
            "start": 73,
            "end": 95
          },
          "start": 71,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 118
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 119,
                              "end": 120
                            },
                            "typeArguments": null,
                            "start": 119,
                            "end": 120
                          }
                        ],
                        "start": 118,
                        "end": 121
                      },
                      "start": 111,
                      "end": 121
                    },
                    "start": 109,
                    "end": 121
                  },
                  "start": 107,
                  "end": 121
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "definite": false,
                "start": 107,
                "end": 125
              }
            ],
            "declare": false,
            "start": 103,
            "end": 126
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 146
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 147,
                              "end": 148
                            },
                            "typeArguments": null,
                            "start": 147,
                            "end": 148
                          }
                        ],
                        "start": 146,
                        "end": 149
                      },
                      "start": 139,
                      "end": 149
                    },
                    "start": 137,
                    "end": 149
                  },
                  "start": 135,
                  "end": 149
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "definite": false,
                "start": 135,
                "end": 153
              }
            ],
            "declare": false,
            "start": 131,
            "end": 154
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "typeArguments": null,
                            "start": 175,
                            "end": 176
                          }
                        ],
                        "start": 174,
                        "end": 177
                      },
                      "start": 167,
                      "end": 177
                    },
                    "start": 165,
                    "end": 177
                  },
                  "start": 163,
                  "end": 177
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 182
                },
                "definite": false,
                "start": 163,
                "end": 182
              }
            ],
            "declare": false,
            "start": 159,
            "end": 183
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 203
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 205
                            },
                            "typeArguments": null,
                            "start": 204,
                            "end": 205
                          }
                        ],
                        "start": 203,
                        "end": 206
                      },
                      "start": 196,
                      "end": 206
                    },
                    "start": 194,
                    "end": 206
                  },
                  "start": 192,
                  "end": 206
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "definite": false,
                "start": 192,
                "end": 211
              }
            ],
            "declare": false,
            "start": 188,
            "end": 212
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 233
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 235
                            },
                            "typeArguments": null,
                            "start": 234,
                            "end": 235
                          }
                        ],
                        "start": 233,
                        "end": 236
                      },
                      "start": 225,
                      "end": 236
                    },
                    "start": 223,
                    "end": 236
                  },
                  "start": 221,
                  "end": 236
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "definite": false,
                "start": 221,
                "end": 240
              }
            ],
            "declare": false,
            "start": 217,
            "end": 241
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 272
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 273,
                              "end": 274
                            },
                            "typeArguments": null,
                            "start": 273,
                            "end": 274
                          }
                        ],
                        "start": 272,
                        "end": 275
                      },
                      "start": 264,
                      "end": 275
                    },
                    "start": 262,
                    "end": 275
                  },
                  "start": 260,
                  "end": 275
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "definite": false,
                "start": 260,
                "end": 279
              }
            ],
            "declare": false,
            "start": 256,
            "end": 280
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 301
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "typeArguments": null,
                            "start": 302,
                            "end": 303
                          }
                        ],
                        "start": 301,
                        "end": 304
                      },
                      "start": 293,
                      "end": 304
                    },
                    "start": 291,
                    "end": 304
                  },
                  "start": 289,
                  "end": 304
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 309
                },
                "definite": false,
                "start": 289,
                "end": 309
              }
            ],
            "declare": false,
            "start": 285,
            "end": 310
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 341
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 343
                            },
                            "typeArguments": null,
                            "start": 342,
                            "end": 343
                          }
                        ],
                        "start": 341,
                        "end": 344
                      },
                      "start": 333,
                      "end": 344
                    },
                    "start": 331,
                    "end": 344
                  },
                  "start": 329,
                  "end": 344
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 349
                },
                "definite": false,
                "start": 329,
                "end": 349
              }
            ],
            "declare": false,
            "start": 325,
            "end": 350
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 380
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Readonly",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 381,
                              "end": 389
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 390,
                                    "end": 391
                                  },
                                  "typeArguments": null,
                                  "start": 390,
                                  "end": 391
                                }
                              ],
                              "start": 389,
                              "end": 392
                            },
                            "start": 381,
                            "end": 392
                          }
                        ],
                        "start": 380,
                        "end": 393
                      },
                      "start": 373,
                      "end": 393
                    },
                    "start": 371,
                    "end": 393
                  },
                  "start": 369,
                  "end": 393
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "definite": false,
                "start": 369,
                "end": 397
              }
            ],
            "declare": false,
            "start": 365,
            "end": 398
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 418
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Readonly",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 419,
                              "end": 427
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 428,
                                    "end": 429
                                  },
                                  "typeArguments": null,
                                  "start": 428,
                                  "end": 429
                                }
                              ],
                              "start": 427,
                              "end": 430
                            },
                            "start": 419,
                            "end": 430
                          }
                        ],
                        "start": 418,
                        "end": 431
                      },
                      "start": 411,
                      "end": 431
                    },
                    "start": 409,
                    "end": 431
                  },
                  "start": 407,
                  "end": 431
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 435
                },
                "definite": false,
                "start": 407,
                "end": 435
              }
            ],
            "declare": false,
            "start": 403,
            "end": 436
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 456
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Readonly",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 457,
                              "end": 465
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 466,
                                    "end": 467
                                  },
                                  "typeArguments": null,
                                  "start": 466,
                                  "end": 467
                                }
                              ],
                              "start": 465,
                              "end": 468
                            },
                            "start": 457,
                            "end": 468
                          }
                        ],
                        "start": 456,
                        "end": 469
                      },
                      "start": 449,
                      "end": 469
                    },
                    "start": 447,
                    "end": 469
                  },
                  "start": 445,
                  "end": 469
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 474
                },
                "definite": false,
                "start": 445,
                "end": 474
              }
            ],
            "declare": false,
            "start": 441,
            "end": 475
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 495
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Readonly",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 496,
                              "end": 504
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 505,
                                    "end": 506
                                  },
                                  "typeArguments": null,
                                  "start": 505,
                                  "end": 506
                                }
                              ],
                              "start": 504,
                              "end": 507
                            },
                            "start": 496,
                            "end": 507
                          }
                        ],
                        "start": 495,
                        "end": 508
                      },
                      "start": 488,
                      "end": 508
                    },
                    "start": 486,
                    "end": 508
                  },
                  "start": 484,
                  "end": 508
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 513
                },
                "definite": false,
                "start": 484,
                "end": 513
              }
            ],
            "declare": false,
            "start": 480,
            "end": 514
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 535
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 536,
                              "end": 543
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 544,
                                    "end": 545
                                  },
                                  "typeArguments": null,
                                  "start": 544,
                                  "end": 545
                                }
                              ],
                              "start": 543,
                              "end": 546
                            },
                            "start": 536,
                            "end": 546
                          }
                        ],
                        "start": 535,
                        "end": 547
                      },
                      "start": 527,
                      "end": 547
                    },
                    "start": 525,
                    "end": 547
                  },
                  "start": 523,
                  "end": 547
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 551
                },
                "definite": false,
                "start": 523,
                "end": 551
              }
            ],
            "declare": false,
            "start": 519,
            "end": 552
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 573
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 574,
                              "end": 581
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 582,
                                    "end": 583
                                  },
                                  "typeArguments": null,
                                  "start": 582,
                                  "end": 583
                                }
                              ],
                              "start": 581,
                              "end": 584
                            },
                            "start": 574,
                            "end": 584
                          }
                        ],
                        "start": 573,
                        "end": 585
                      },
                      "start": 565,
                      "end": 585
                    },
                    "start": 563,
                    "end": 585
                  },
                  "start": 561,
                  "end": 585
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 588,
                  "end": 589
                },
                "definite": false,
                "start": 561,
                "end": 589
              }
            ],
            "declare": false,
            "start": 557,
            "end": 590
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 611
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 619
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 620,
                                    "end": 621
                                  },
                                  "typeArguments": null,
                                  "start": 620,
                                  "end": 621
                                }
                              ],
                              "start": 619,
                              "end": 622
                            },
                            "start": 612,
                            "end": 622
                          }
                        ],
                        "start": 611,
                        "end": 623
                      },
                      "start": 603,
                      "end": 623
                    },
                    "start": 601,
                    "end": 623
                  },
                  "start": 599,
                  "end": 623
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
                },
                "definite": false,
                "start": 599,
                "end": 628
              }
            ],
            "declare": false,
            "start": 595,
            "end": 629
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 642,
                        "end": 650
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 651,
                              "end": 658
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 659,
                                    "end": 660
                                  },
                                  "typeArguments": null,
                                  "start": 659,
                                  "end": 660
                                }
                              ],
                              "start": 658,
                              "end": 661
                            },
                            "start": 651,
                            "end": 661
                          }
                        ],
                        "start": 650,
                        "end": 662
                      },
                      "start": 642,
                      "end": 662
                    },
                    "start": 640,
                    "end": 662
                  },
                  "start": 638,
                  "end": 662
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 667
                },
                "definite": false,
                "start": 638,
                "end": 667
              }
            ],
            "declare": false,
            "start": 634,
            "end": 668
          }
        ],
        "start": 97,
        "end": 670
      },
      "expression": false,
      "start": 0,
      "end": 670
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 704
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 719,
                    "end": 725
                  },
                  "start": 717,
                  "end": 725
                },
                "start": 714,
                "end": 725
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 728,
                    "end": 734
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 737,
                    "end": 744
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 747,
                    "end": 753
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 756,
                    "end": 760
                  }
                ],
                "start": 728,
                "end": 760
              },
              "start": 726,
              "end": 760
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 713,
            "end": 761
          }
        ],
        "start": 707,
        "end": 763
      },
      "declare": false,
      "start": 694,
      "end": 764
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args1",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 776
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 778
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 792
              },
              "typeArguments": null,
              "start": 787,
              "end": 792
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 777,
            "end": 792
          }
        ],
        "start": 776,
        "end": 793
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previous",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 819
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 829
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 837
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 839
                            },
                            "typeArguments": null,
                            "start": 838,
                            "end": 839
                          }
                        ],
                        "start": 837,
                        "end": 840
                      },
                      "start": 830,
                      "end": 840
                    }
                  ],
                  "start": 829,
                  "end": 841
                },
                "start": 821,
                "end": 841
              },
              "start": 819,
              "end": 841
            },
            "accessibility": null,
            "static": false,
            "start": 802,
            "end": 842
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 873
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 881
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 882,
                              "end": 883
                            },
                            "typeArguments": null,
                            "start": 882,
                            "end": 883
                          }
                        ],
                        "start": 881,
                        "end": 884
                      },
                      "start": 874,
                      "end": 884
                    }
                  ],
                  "start": 873,
                  "end": 885
                },
                "start": 865,
                "end": 885
              },
              "start": 863,
              "end": 885
            },
            "accessibility": null,
            "static": false,
            "start": 847,
            "end": 886
          }
        ],
        "start": 796,
        "end": 888
      },
      "declare": false,
      "start": 766,
      "end": 889
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args2",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 901
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 903
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 917
              },
              "typeArguments": null,
              "start": 912,
              "end": 917
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 902,
            "end": 917
          }
        ],
        "start": 901,
        "end": 918
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previous",
              "optional": false,
              "typeAnnotation": null,
              "start": 936,
              "end": 944
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 953
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 954,
                        "end": 962
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 963,
                              "end": 964
                            },
                            "typeArguments": null,
                            "start": 963,
                            "end": 964
                          }
                        ],
                        "start": 962,
                        "end": 965
                      },
                      "start": 954,
                      "end": 965
                    }
                  ],
                  "start": 953,
                  "end": 966
                },
                "start": 946,
                "end": 966
              },
              "start": 944,
              "end": 966
            },
            "accessibility": null,
            "static": false,
            "start": 927,
            "end": 967
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 988
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 997
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 998,
                        "end": 1006
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1007,
                              "end": 1008
                            },
                            "typeArguments": null,
                            "start": 1007,
                            "end": 1008
                          }
                        ],
                        "start": 1006,
                        "end": 1009
                      },
                      "start": 998,
                      "end": 1009
                    }
                  ],
                  "start": 997,
                  "end": 1010
                },
                "start": 990,
                "end": 1010
              },
              "start": 988,
              "end": 1010
            },
            "accessibility": null,
            "static": false,
            "start": 972,
            "end": 1011
          }
        ],
        "start": 921,
        "end": 1013
      },
      "declare": false,
      "start": 891,
      "end": 1014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1029
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1031
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1040,
              "end": 1045
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1030,
            "end": 1045
          }
        ],
        "start": 1029,
        "end": 1046
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "previous",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1069,
                        "end": 1076
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1077,
                              "end": 1078
                            },
                            "typeArguments": null,
                            "start": 1077,
                            "end": 1078
                          }
                        ],
                        "start": 1076,
                        "end": 1079
                      },
                      "start": 1069,
                      "end": 1079
                    },
                    "start": 1067,
                    "end": 1079
                  },
                  "start": 1059,
                  "end": 1079
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1082,
                      "end": 1088
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1089,
                      "end": 1095
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1082,
                    "end": 1095
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1096,
                      "end": 1100
                    }
                  ],
                  "optional": false,
                  "start": 1082,
                  "end": 1101
                },
                "definite": false,
                "start": 1059,
                "end": 1101
              }
            ],
            "declare": false,
            "start": 1055,
            "end": 1102
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "current",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1120,
                        "end": 1127
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1128,
                              "end": 1129
                            },
                            "typeArguments": null,
                            "start": 1128,
                            "end": 1129
                          }
                        ],
                        "start": 1127,
                        "end": 1130
                      },
                      "start": 1120,
                      "end": 1130
                    },
                    "start": 1118,
                    "end": 1130
                  },
                  "start": 1111,
                  "end": 1130
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1133,
                      "end": 1139
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1140,
                      "end": 1146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1133,
                    "end": 1146
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1147,
                      "end": 1151
                    }
                  ],
                  "optional": false,
                  "start": 1133,
                  "end": 1152
                },
                "definite": false,
                "start": 1111,
                "end": 1152
              }
            ],
            "declare": false,
            "start": 1107,
            "end": 1153
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1175,
                              "end": 1176
                            },
                            "typeArguments": null,
                            "start": 1175,
                            "end": 1176
                          }
                        ],
                        "start": 1174,
                        "end": 1177
                      },
                      "start": 1169,
                      "end": 1177
                    },
                    "start": 1167,
                    "end": 1177
                  },
                  "start": 1162,
                  "end": 1177
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1182,
                        "end": 1190
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1182,
                        "end": 1190
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1182,
                      "end": 1190
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1192,
                        "end": 1199
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1192,
                        "end": 1199
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1192,
                      "end": 1199
                    }
                  ],
                  "start": 1180,
                  "end": 1201
                },
                "definite": false,
                "start": 1162,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1158,
            "end": 1202
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1224,
                              "end": 1225
                            },
                            "typeArguments": null,
                            "start": 1224,
                            "end": 1225
                          }
                        ],
                        "start": 1223,
                        "end": 1226
                      },
                      "start": 1218,
                      "end": 1226
                    },
                    "start": 1216,
                    "end": 1226
                  },
                  "start": 1211,
                  "end": 1226
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1231,
                        "end": 1239
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1231,
                        "end": 1239
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1231,
                      "end": 1239
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1241,
                        "end": 1248
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1241,
                        "end": 1248
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1241,
                      "end": 1248
                    }
                  ],
                  "start": 1229,
                  "end": 1250
                },
                "definite": false,
                "start": 1211,
                "end": 1250
              }
            ],
            "declare": false,
            "start": 1207,
            "end": 1251
          }
        ],
        "start": 1049,
        "end": 1253
      },
      "expression": false,
      "start": 1016,
      "end": 1253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1260,
        "end": 1266
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1271,
              "end": 1274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1276,
                "end": 1282
              },
              "start": 1274,
              "end": 1282
            },
            "accessibility": null,
            "static": false,
            "start": 1271,
            "end": 1283
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
              },
              "start": 1287,
              "end": 1295
            },
            "accessibility": null,
            "static": false,
            "start": 1284,
            "end": 1295
          }
        ],
        "start": 1269,
        "end": 1297
      },
      "declare": false,
      "start": 1255,
      "end": 1298
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1310
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previous",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1336
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1346
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1347,
                        "end": 1354
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1355,
                              "end": 1361
                            },
                            "typeArguments": null,
                            "start": 1355,
                            "end": 1361
                          }
                        ],
                        "start": 1354,
                        "end": 1362
                      },
                      "start": 1347,
                      "end": 1362
                    }
                  ],
                  "start": 1346,
                  "end": 1363
                },
                "start": 1338,
                "end": 1363
              },
              "start": 1336,
              "end": 1363
            },
            "accessibility": null,
            "static": false,
            "start": 1319,
            "end": 1364
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1385
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1396,
                        "end": 1403
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1404,
                              "end": 1410
                            },
                            "typeArguments": null,
                            "start": 1404,
                            "end": 1410
                          }
                        ],
                        "start": 1403,
                        "end": 1411
                      },
                      "start": 1396,
                      "end": 1411
                    }
                  ],
                  "start": 1395,
                  "end": 1412
                },
                "start": 1387,
                "end": 1412
              },
              "start": 1385,
              "end": 1412
            },
            "accessibility": null,
            "static": false,
            "start": 1369,
            "end": 1413
          }
        ],
        "start": 1313,
        "end": 1415
      },
      "declare": false,
      "start": 1300,
      "end": 1416
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1428
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previous",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1456,
                  "end": 1463
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1464,
                        "end": 1472
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1473,
                              "end": 1479
                            },
                            "typeArguments": null,
                            "start": 1473,
                            "end": 1479
                          }
                        ],
                        "start": 1472,
                        "end": 1480
                      },
                      "start": 1464,
                      "end": 1480
                    }
                  ],
                  "start": 1463,
                  "end": 1481
                },
                "start": 1456,
                "end": 1481
              },
              "start": 1454,
              "end": 1481
            },
            "accessibility": null,
            "static": false,
            "start": 1437,
            "end": 1482
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1503
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1505,
                  "end": 1512
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1513,
                        "end": 1521
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1522,
                              "end": 1528
                            },
                            "typeArguments": null,
                            "start": 1522,
                            "end": 1528
                          }
                        ],
                        "start": 1521,
                        "end": 1529
                      },
                      "start": 1513,
                      "end": 1529
                    }
                  ],
                  "start": 1512,
                  "end": 1530
                },
                "start": 1505,
                "end": 1530
              },
              "start": 1503,
              "end": 1530
            },
            "accessibility": null,
            "static": false,
            "start": 1487,
            "end": 1531
          }
        ],
        "start": 1431,
        "end": 1533
      },
      "declare": false,
      "start": 1418,
      "end": 1534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doit2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1550
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "previous",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1573,
                        "end": 1580
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1581,
                              "end": 1587
                            },
                            "typeArguments": null,
                            "start": 1581,
                            "end": 1587
                          }
                        ],
                        "start": 1580,
                        "end": 1588
                      },
                      "start": 1573,
                      "end": 1588
                    },
                    "start": 1571,
                    "end": 1588
                  },
                  "start": 1563,
                  "end": 1588
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1591,
                      "end": 1597
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1598,
                      "end": 1604
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1591,
                    "end": 1604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1605,
                      "end": 1609
                    }
                  ],
                  "optional": false,
                  "start": 1591,
                  "end": 1610
                },
                "definite": false,
                "start": 1563,
                "end": 1610
              }
            ],
            "declare": false,
            "start": 1559,
            "end": 1611
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "current",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1629,
                        "end": 1636
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1637,
                              "end": 1643
                            },
                            "typeArguments": null,
                            "start": 1637,
                            "end": 1643
                          }
                        ],
                        "start": 1636,
                        "end": 1644
                      },
                      "start": 1629,
                      "end": 1644
                    },
                    "start": 1627,
                    "end": 1644
                  },
                  "start": 1620,
                  "end": 1644
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1647,
                      "end": 1653
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1660
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1647,
                    "end": 1660
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1661,
                      "end": 1665
                    }
                  ],
                  "optional": false,
                  "start": 1647,
                  "end": 1666
                },
                "definite": false,
                "start": 1620,
                "end": 1666
              }
            ],
            "declare": false,
            "start": 1616,
            "end": 1667
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1683,
                        "end": 1688
                      },
                      "typeArguments": null,
                      "start": 1683,
                      "end": 1688
                    },
                    "start": 1681,
                    "end": 1688
                  },
                  "start": 1676,
                  "end": 1688
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1693,
                        "end": 1701
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1693,
                        "end": 1701
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1693,
                      "end": 1701
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1703,
                        "end": 1710
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1703,
                        "end": 1710
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1703,
                      "end": 1710
                    }
                  ],
                  "start": 1691,
                  "end": 1712
                },
                "definite": false,
                "start": 1676,
                "end": 1712
              }
            ],
            "declare": false,
            "start": 1672,
            "end": 1713
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1729,
                        "end": 1734
                      },
                      "typeArguments": null,
                      "start": 1729,
                      "end": 1734
                    },
                    "start": 1727,
                    "end": 1734
                  },
                  "start": 1722,
                  "end": 1734
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1739,
                        "end": 1747
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previous",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1739,
                        "end": 1747
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1739,
                      "end": 1747
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1756
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1756
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1749,
                      "end": 1756
                    }
                  ],
                  "start": 1737,
                  "end": 1758
                },
                "definite": false,
                "start": 1722,
                "end": 1758
              }
            ],
            "declare": false,
            "start": 1718,
            "end": 1759
          }
        ],
        "start": 1553,
        "end": 1761
      },
      "expression": false,
      "start": 1536,
      "end": 1761
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1761
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 32,
    "end": 40,
    "range": [
      32,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 45,
    "end": 47,
    "range": [
      45,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 49,
    "end": 56,
    "range": [
      49,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 57,
    "end": 65,
    "range": [
      57,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "rp",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 75,
    "end": 83,
    "range": [
      75,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 84,
    "end": 91,
    "range": [
      84,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 107,
    "end": 109,
    "range": [
      107,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 135,
    "end": 137,
    "range": [
      135,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 139,
    "end": 146,
    "range": [
      139,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 167,
    "end": 174,
    "range": [
      167,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 180,
    "end": 182,
    "range": [
      180,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 196,
    "end": 203,
    "range": [
      196,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "rp",
    "start": 209,
    "end": 211,
    "range": [
      209,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 260,
    "end": 262,
    "range": [
      260,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 264,
    "end": 272,
    "range": [
      264,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 285,
    "end": 288,
    "range": [
      285,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 293,
    "end": 301,
    "range": [
      293,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 329,
    "end": 331,
    "range": [
      329,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 333,
    "end": 341,
    "range": [
      333,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "rp",
    "start": 347,
    "end": 349,
    "range": [
      347,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 373,
    "end": 380,
    "range": [
      373,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 381,
    "end": 389,
    "range": [
      381,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 407,
    "end": 409,
    "range": [
      407,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 419,
    "end": 427,
    "range": [
      419,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 441,
    "end": 444,
    "range": [
      441,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 445,
    "end": 447,
    "range": [
      445,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 457,
    "end": 465,
    "range": [
      457,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 472,
    "end": 474,
    "range": [
      472,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483,
    "range": [
      480,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 484,
    "end": 486,
    "range": [
      484,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 488,
    "end": 495,
    "range": [
      488,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 496,
    "end": 504,
    "range": [
      496,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "rp",
    "start": 511,
    "end": 513,
    "range": [
      511,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 523,
    "end": 525,
    "range": [
      523,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 527,
    "end": 535,
    "range": [
      527,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 561,
    "end": 563,
    "range": [
      561,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 565,
    "end": 573,
    "range": [
      565,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 574,
    "end": 581,
    "range": [
      574,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 599,
    "end": 601,
    "range": [
      599,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 603,
    "end": 611,
    "range": [
      603,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 612,
    "end": 619,
    "range": [
      612,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 626,
    "end": 628,
    "range": [
      626,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 634,
    "end": 637,
    "range": [
      634,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 638,
    "end": 640,
    "range": [
      638,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 642,
    "end": 650,
    "range": [
      642,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 651,
    "end": 658,
    "range": [
      651,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "rp",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 694,
    "end": 698,
    "range": [
      694,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 699,
    "end": 704,
    "range": [
      699,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 714,
    "end": 717,
    "range": [
      714,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725,
    "range": [
      719,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 728,
    "end": 734,
    "range": [
      728,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 737,
    "end": 744,
    "range": [
      737,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 756,
    "end": 760,
    "range": [
      756,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 766,
    "end": 770,
    "range": [
      766,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "Args1",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 779,
    "end": 786,
    "range": [
      779,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 787,
    "end": 792,
    "range": [
      787,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 802,
    "end": 810,
    "range": [
      802,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 811,
    "end": 819,
    "range": [
      811,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 821,
    "end": 829,
    "range": [
      821,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 830,
    "end": 837,
    "range": [
      830,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 847,
    "end": 855,
    "range": [
      847,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 856,
    "end": 863,
    "range": [
      856,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 865,
    "end": 873,
    "range": [
      865,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 874,
    "end": 881,
    "range": [
      874,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 891,
    "end": 895,
    "range": [
      891,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "Args2",
    "start": 896,
    "end": 901,
    "range": [
      896,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 904,
    "end": 911,
    "range": [
      904,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 912,
    "end": 917,
    "range": [
      912,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 927,
    "end": 935,
    "range": [
      927,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 936,
    "end": 944,
    "range": [
      936,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 946,
    "end": 953,
    "range": [
      946,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 954,
    "end": 962,
    "range": [
      954,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 972,
    "end": 980,
    "range": [
      972,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 981,
    "end": 988,
    "range": [
      981,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 990,
    "end": 997,
    "range": [
      990,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 998,
    "end": 1006,
    "range": [
      998,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1016,
    "end": 1024,
    "range": [
      1016,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "doit",
    "start": 1025,
    "end": 1029,
    "range": [
      1025,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1032,
    "end": 1039,
    "range": [
      1032,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1040,
    "end": 1045,
    "range": [
      1040,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1055,
    "end": 1058,
    "range": [
      1055,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1059,
    "end": 1067,
    "range": [
      1059,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1069,
    "end": 1076,
    "range": [
      1069,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1082,
    "end": 1088,
    "range": [
      1082,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1089,
    "end": 1095,
    "range": [
      1089,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1096,
    "end": 1100,
    "range": [
      1096,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1111,
    "end": 1118,
    "range": [
      1111,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1120,
    "end": 1127,
    "range": [
      1120,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1133,
    "end": 1139,
    "range": [
      1133,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1140,
    "end": 1146,
    "range": [
      1140,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1147,
    "end": 1151,
    "range": [
      1147,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1158,
    "end": 1161,
    "range": [
      1158,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "args1",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "Args1",
    "start": 1169,
    "end": 1174,
    "range": [
      1169,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1182,
    "end": 1190,
    "range": [
      1182,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1192,
    "end": 1199,
    "range": [
      1192,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1207,
    "end": 1210,
    "range": [
      1207,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "args2",
    "start": 1211,
    "end": 1216,
    "range": [
      1211,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "Args2",
    "start": 1218,
    "end": 1223,
    "range": [
      1218,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1231,
    "end": 1239,
    "range": [
      1231,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1241,
    "end": 1248,
    "range": [
      1241,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1255,
    "end": 1259,
    "range": [
      1255,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1260,
    "end": 1266,
    "range": [
      1260,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1271,
    "end": 1274,
    "range": [
      1271,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1276,
    "end": 1282,
    "range": [
      1276,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1289,
    "end": 1295,
    "range": [
      1289,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1300,
    "end": 1304,
    "range": [
      1300,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "Args3",
    "start": 1305,
    "end": 1310,
    "range": [
      1305,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1319,
    "end": 1327,
    "range": [
      1319,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1328,
    "end": 1336,
    "range": [
      1328,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1338,
    "end": 1346,
    "range": [
      1338,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1347,
    "end": 1354,
    "range": [
      1347,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1355,
    "end": 1361,
    "range": [
      1355,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1369,
    "end": 1377,
    "range": [
      1369,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1378,
    "end": 1385,
    "range": [
      1378,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1387,
    "end": 1395,
    "range": [
      1387,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1396,
    "end": 1403,
    "range": [
      1396,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1418,
    "end": 1422,
    "range": [
      1418,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "Args4",
    "start": 1423,
    "end": 1428,
    "range": [
      1423,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1437,
    "end": 1445,
    "range": [
      1437,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1446,
    "end": 1454,
    "range": [
      1446,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1456,
    "end": 1463,
    "range": [
      1456,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1464,
    "end": 1472,
    "range": [
      1464,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1473,
    "end": 1479,
    "range": [
      1473,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1487,
    "end": 1495,
    "range": [
      1487,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1496,
    "end": 1503,
    "range": [
      1496,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1505,
    "end": 1512,
    "range": [
      1505,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1513,
    "end": 1521,
    "range": [
      1513,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1522,
    "end": 1528,
    "range": [
      1522,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1536,
    "end": 1544,
    "range": [
      1536,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "doit2",
    "start": 1545,
    "end": 1550,
    "range": [
      1545,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1559,
    "end": 1562,
    "range": [
      1559,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1563,
    "end": 1571,
    "range": [
      1563,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1573,
    "end": 1580,
    "range": [
      1573,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1581,
    "end": 1587,
    "range": [
      1581,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1591,
    "end": 1597,
    "range": [
      1591,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1598,
    "end": 1604,
    "range": [
      1598,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1605,
    "end": 1609,
    "range": [
      1605,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1616,
    "end": 1619,
    "range": [
      1616,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1620,
    "end": 1627,
    "range": [
      1620,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1629,
    "end": 1636,
    "range": [
      1629,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "State2",
    "start": 1637,
    "end": 1643,
    "range": [
      1637,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1647,
    "end": 1653,
    "range": [
      1647,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1654,
    "end": 1660,
    "range": [
      1654,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1661,
    "end": 1665,
    "range": [
      1661,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1672,
    "end": 1675,
    "range": [
      1672,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "args1",
    "start": 1676,
    "end": 1681,
    "range": [
      1676,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "Args3",
    "start": 1683,
    "end": 1688,
    "range": [
      1683,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1693,
    "end": 1701,
    "range": [
      1693,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1703,
    "end": 1710,
    "range": [
      1703,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1718,
    "end": 1721,
    "range": [
      1718,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "args2",
    "start": 1722,
    "end": 1727,
    "range": [
      1722,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "Args4",
    "start": 1729,
    "end": 1734,
    "range": [
      1729,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "previous",
    "start": 1739,
    "end": 1747,
    "range": [
      1739,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 1749,
    "end": 1756,
    "range": [
      1749,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  }
]
```
