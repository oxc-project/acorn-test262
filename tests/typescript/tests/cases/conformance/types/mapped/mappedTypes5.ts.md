__ESTREE_TEST__:PASS:
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
