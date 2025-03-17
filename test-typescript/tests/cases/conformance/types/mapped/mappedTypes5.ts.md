__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1762,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 14,
          "end": 27,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 24,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 24,
                "end": 27,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 26,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
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
          "start": 29,
          "end": 43,
          "name": "r",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 43,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 43,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 40,
                "end": 43,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 41,
                    "end": 42,
                    "typeName": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
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
          "start": 45,
          "end": 69,
          "name": "pr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 49,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 49,
                "end": 56,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 56,
                "end": 69,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 68,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 65,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 65,
                      "end": 68,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 66,
                          "end": 67,
                          "typeName": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 67,
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
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 95,
          "name": "rp",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 83,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 83,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 94,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "name": "Partial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 91,
                      "end": 94,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 92,
                          "end": 93,
                          "typeName": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
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
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 670,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 126,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 121,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 118,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 118,
                        "end": 121,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 119,
                            "end": 120,
                            "typeName": {
                              "type": "Identifier",
                              "start": 119,
                              "end": 120,
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
                "init": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 149,
                  "name": "a2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 139,
                      "end": 149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 146,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 146,
                        "end": 149,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 147,
                            "end": 148,
                            "typeName": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 148,
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
                "init": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 183,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 182,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 177,
                  "name": "a3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 174,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 174,
                        "end": 177,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
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
                "init": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 182,
                  "name": "pr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 188,
            "end": 212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 192,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 206,
                  "name": "a4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 194,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 196,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 203,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 203,
                        "end": 206,
                        "params": [
                          {
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "name": "rp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 217,
            "end": 241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 236,
                  "name": "b1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 225,
                      "end": 236,
                      "typeName": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 233,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 233,
                        "end": 236,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 234,
                            "end": 235,
                            "typeName": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 235,
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
                "init": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 256,
            "end": 280,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 260,
                "end": 279,
                "id": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 275,
                  "name": "b2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 275,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 264,
                      "end": 275,
                      "typeName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 272,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 272,
                        "end": 275,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 273,
                            "end": 274,
                            "typeName": {
                              "type": "Identifier",
                              "start": 273,
                              "end": 274,
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
                "init": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 285,
            "end": 310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 289,
                "end": 309,
                "id": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 304,
                  "name": "b3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 291,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 293,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 301,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 301,
                        "end": 304,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 302,
                            "end": 303,
                            "typeName": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
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
                "init": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 309,
                  "name": "pr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 325,
            "end": 350,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 329,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 344,
                  "name": "b4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 344,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 344,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 341,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 341,
                        "end": 344,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 342,
                            "end": 343,
                            "typeName": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
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
                "init": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 349,
                  "name": "rp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 398,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 397,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 393,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 393,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 380,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 380,
                        "end": 393,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 381,
                            "end": 392,
                            "typeName": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 389,
                              "name": "Readonly",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 389,
                              "end": 392,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 390,
                                  "end": 391,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 390,
                                    "end": 391,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 403,
            "end": 436,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 407,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 431,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 409,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 411,
                      "end": 431,
                      "typeName": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 418,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 418,
                        "end": 431,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 419,
                            "end": 430,
                            "typeName": {
                              "type": "Identifier",
                              "start": 419,
                              "end": 427,
                              "name": "Readonly",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 427,
                              "end": 430,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 428,
                                  "end": 429,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 428,
                                    "end": 429,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 435,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 474,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 469,
                  "name": "c3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 449,
                      "end": 469,
                      "typeName": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 456,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 456,
                        "end": 469,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 457,
                            "end": 468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 457,
                              "end": 465,
                              "name": "Readonly",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 465,
                              "end": 468,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 466,
                                  "end": 467,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 466,
                                    "end": 467,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 474,
                  "name": "pr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 480,
            "end": 514,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 484,
                "end": 513,
                "id": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 508,
                  "name": "c4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 488,
                      "end": 508,
                      "typeName": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 495,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 495,
                        "end": 508,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 496,
                            "end": 507,
                            "typeName": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 504,
                              "name": "Readonly",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 504,
                              "end": 507,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 505,
                                  "end": 506,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 505,
                                    "end": 506,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 513,
                  "name": "rp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 519,
            "end": 552,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 523,
                "end": 551,
                "id": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 547,
                  "name": "d1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 525,
                    "end": 547,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 527,
                      "end": 547,
                      "typeName": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 535,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 535,
                        "end": 547,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 536,
                            "end": 546,
                            "typeName": {
                              "type": "Identifier",
                              "start": 536,
                              "end": 543,
                              "name": "Partial",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 543,
                              "end": 546,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 544,
                                  "end": 545,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 544,
                                    "end": 545,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 557,
            "end": 590,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 561,
                "end": 589,
                "id": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 585,
                  "name": "d2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 585,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 565,
                      "end": 585,
                      "typeName": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 573,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 573,
                        "end": 585,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 574,
                            "end": 584,
                            "typeName": {
                              "type": "Identifier",
                              "start": 574,
                              "end": 581,
                              "name": "Partial",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 581,
                              "end": 584,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 582,
                                  "end": 583,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 582,
                                    "end": 583,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 588,
                  "end": 589,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 595,
            "end": 629,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 599,
                "end": 628,
                "id": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 623,
                  "name": "d3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 623,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 603,
                      "end": 623,
                      "typeName": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 611,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 611,
                        "end": 623,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 612,
                            "end": 622,
                            "typeName": {
                              "type": "Identifier",
                              "start": 612,
                              "end": 619,
                              "name": "Partial",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 619,
                              "end": 622,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 620,
                                  "end": 621,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 620,
                                    "end": 621,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 628,
                  "name": "pr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 634,
            "end": 668,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 638,
                "end": 667,
                "id": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 662,
                  "name": "d4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 642,
                      "end": 662,
                      "typeName": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 650,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 650,
                        "end": 662,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 651,
                            "end": 661,
                            "typeName": {
                              "type": "Identifier",
                              "start": 651,
                              "end": 658,
                              "name": "Partial",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 658,
                              "end": 661,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 659,
                                  "end": 660,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 659,
                                    "end": 660,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 667,
                  "name": "rp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 694,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 704,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 707,
        "end": 763,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 713,
            "end": 761,
            "parameters": [
              {
                "type": "Identifier",
                "start": 714,
                "end": 725,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 717,
                  "end": 725,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 719,
                    "end": 725
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 726,
              "end": 760,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 728,
                "end": 760,
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
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 766,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 776,
        "name": "Args1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 776,
        "end": 793,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 777,
            "end": 792,
            "name": {
              "type": "Identifier",
              "start": 777,
              "end": 778,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 787,
              "end": 792,
              "typeName": {
                "type": "Identifier",
                "start": 787,
                "end": 792,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 796,
        "end": 888,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 802,
            "end": 842,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 819,
              "name": "previous",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 819,
              "end": 841,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 821,
                "end": 841,
                "typeName": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 829,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 829,
                  "end": 841,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 830,
                      "end": 840,
                      "typeName": {
                        "type": "Identifier",
                        "start": 830,
                        "end": 837,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 837,
                        "end": 840,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 838,
                            "end": 839,
                            "typeName": {
                              "type": "Identifier",
                              "start": 838,
                              "end": 839,
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
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 847,
            "end": 886,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 863,
              "name": "current",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 885,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 865,
                "end": 885,
                "typeName": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 873,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 873,
                  "end": 885,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 874,
                      "end": 884,
                      "typeName": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 881,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 881,
                        "end": 884,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 882,
                            "end": 883,
                            "typeName": {
                              "type": "Identifier",
                              "start": 882,
                              "end": 883,
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
      "start": 891,
      "end": 1014,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 901,
        "name": "Args2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 901,
        "end": 918,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 902,
            "end": 917,
            "name": {
              "type": "Identifier",
              "start": 902,
              "end": 903,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 912,
              "end": 917,
              "typeName": {
                "type": "Identifier",
                "start": 912,
                "end": 917,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 921,
        "end": 1013,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 967,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 936,
              "end": 944,
              "name": "previous",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 944,
              "end": 966,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 946,
                "end": 966,
                "typeName": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 953,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 953,
                  "end": 966,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 954,
                      "end": 965,
                      "typeName": {
                        "type": "Identifier",
                        "start": 954,
                        "end": 962,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 962,
                        "end": 965,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 963,
                            "end": 964,
                            "typeName": {
                              "type": "Identifier",
                              "start": 963,
                              "end": 964,
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
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 972,
            "end": 1011,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 981,
              "end": 988,
              "name": "current",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 988,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 990,
                "end": 1010,
                "typeName": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 997,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 997,
                  "end": 1010,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 998,
                      "end": 1009,
                      "typeName": {
                        "type": "Identifier",
                        "start": 998,
                        "end": 1006,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1006,
                        "end": 1009,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1007,
                            "end": 1008,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1007,
                              "end": 1008,
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
      "start": 1016,
      "end": 1253,
      "id": {
        "type": "Identifier",
        "start": 1025,
        "end": 1029,
        "name": "doit",
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
        "start": 1049,
        "end": 1253,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1055,
            "end": 1102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1059,
                "end": 1101,
                "id": {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1079,
                  "name": "previous",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1067,
                    "end": 1079,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1069,
                      "end": 1079,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1076,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1076,
                        "end": 1079,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1077,
                            "end": 1078,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1077,
                              "end": 1078,
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
                "init": {
                  "type": "CallExpression",
                  "start": 1082,
                  "end": 1101,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1082,
                    "end": 1095,
                    "object": {
                      "type": "Identifier",
                      "start": 1082,
                      "end": 1088,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1089,
                      "end": 1095,
                      "name": "create",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1096,
                      "end": 1100,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1107,
            "end": 1153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1111,
                "end": 1152,
                "id": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1130,
                  "name": "current",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1118,
                    "end": 1130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1120,
                      "end": 1130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1120,
                        "end": 1127,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1127,
                        "end": 1130,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1128,
                            "end": 1129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1128,
                              "end": 1129,
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
                "init": {
                  "type": "CallExpression",
                  "start": 1133,
                  "end": 1152,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1133,
                    "end": 1146,
                    "object": {
                      "type": "Identifier",
                      "start": 1133,
                      "end": 1139,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1140,
                      "end": 1146,
                      "name": "create",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1147,
                      "end": 1151,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1158,
            "end": 1202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1162,
                "end": 1201,
                "id": {
                  "type": "Identifier",
                  "start": 1162,
                  "end": 1177,
                  "name": "args1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1167,
                    "end": 1177,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1169,
                      "end": 1177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1169,
                        "end": 1174,
                        "name": "Args1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1174,
                        "end": 1177,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1175,
                            "end": 1176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1175,
                              "end": 1176,
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 1180,
                  "end": 1201,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1182,
                      "end": 1190,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1182,
                        "end": 1190,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1182,
                        "end": 1190,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1192,
                      "end": 1199,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1192,
                        "end": 1199,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1192,
                        "end": 1199,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1207,
            "end": 1251,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1211,
                "end": 1250,
                "id": {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1226,
                  "name": "args2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1216,
                    "end": 1226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1218,
                      "end": 1226,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1223,
                        "name": "Args2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1223,
                        "end": 1226,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1224,
                            "end": 1225,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1224,
                              "end": 1225,
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 1229,
                  "end": 1250,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1231,
                      "end": 1239,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1231,
                        "end": 1239,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1231,
                        "end": 1239,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1241,
                      "end": 1248,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1241,
                        "end": 1248,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1241,
                        "end": 1248,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
        "start": 1029,
        "end": 1046,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1030,
            "end": 1045,
            "name": {
              "type": "Identifier",
              "start": 1030,
              "end": 1031,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1040,
              "end": 1045,
              "typeName": {
                "type": "Identifier",
                "start": 1040,
                "end": 1045,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 1255,
      "end": 1298,
      "id": {
        "type": "Identifier",
        "start": 1260,
        "end": 1266,
        "name": "State2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1269,
        "end": 1297,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1271,
            "end": 1283,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1271,
              "end": 1274,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1274,
              "end": 1282,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1276,
                "end": 1282
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1284,
            "end": 1295,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1284,
              "end": 1287,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1287,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
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
      "start": 1300,
      "end": 1416,
      "id": {
        "type": "Identifier",
        "start": 1305,
        "end": 1310,
        "name": "Args3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1313,
        "end": 1415,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1319,
            "end": 1364,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1328,
              "end": 1336,
              "name": "previous",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1336,
              "end": 1363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1338,
                "end": 1363,
                "typeName": {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1346,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1346,
                  "end": 1363,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1347,
                      "end": 1362,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1347,
                        "end": 1354,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1354,
                        "end": 1362,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1355,
                            "end": 1361,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1355,
                              "end": 1361,
                              "name": "State2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1369,
            "end": 1413,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1378,
              "end": 1385,
              "name": "current",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1385,
              "end": 1412,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1387,
                "end": 1412,
                "typeName": {
                  "type": "Identifier",
                  "start": 1387,
                  "end": 1395,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1395,
                  "end": 1412,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1396,
                      "end": 1411,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1396,
                        "end": 1403,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1403,
                        "end": 1411,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1404,
                            "end": 1410,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1404,
                              "end": 1410,
                              "name": "State2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 1418,
      "end": 1534,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1428,
        "name": "Args4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1431,
        "end": 1533,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1437,
            "end": 1482,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1446,
              "end": 1454,
              "name": "previous",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1454,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1456,
                "end": 1481,
                "typeName": {
                  "type": "Identifier",
                  "start": 1456,
                  "end": 1463,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1463,
                  "end": 1481,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1464,
                      "end": 1480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1464,
                        "end": 1472,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1472,
                        "end": 1480,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1473,
                            "end": 1479,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1473,
                              "end": 1479,
                              "name": "State2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1487,
            "end": 1531,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1496,
              "end": 1503,
              "name": "current",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1503,
              "end": 1530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1505,
                "end": 1530,
                "typeName": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1512,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1512,
                  "end": 1530,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1513,
                      "end": 1529,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1513,
                        "end": 1521,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1521,
                        "end": 1529,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1522,
                            "end": 1528,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1522,
                              "end": 1528,
                              "name": "State2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
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
      "start": 1536,
      "end": 1761,
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1550,
        "name": "doit2",
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
        "start": 1553,
        "end": 1761,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1559,
            "end": 1611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1563,
                "end": 1610,
                "id": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1588,
                  "name": "previous",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1571,
                    "end": 1588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1573,
                      "end": 1588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1573,
                        "end": 1580,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1580,
                        "end": 1588,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1581,
                            "end": 1587,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1581,
                              "end": 1587,
                              "name": "State2",
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
                  "type": "CallExpression",
                  "start": 1591,
                  "end": 1610,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1591,
                    "end": 1604,
                    "object": {
                      "type": "Identifier",
                      "start": 1591,
                      "end": 1597,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1598,
                      "end": 1604,
                      "name": "create",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1605,
                      "end": 1609,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1616,
            "end": 1667,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1620,
                "end": 1666,
                "id": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1644,
                  "name": "current",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1627,
                    "end": 1644,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1629,
                      "end": 1644,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1629,
                        "end": 1636,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1636,
                        "end": 1644,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1637,
                            "end": 1643,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1637,
                              "end": 1643,
                              "name": "State2",
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
                  "type": "CallExpression",
                  "start": 1647,
                  "end": 1666,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1647,
                    "end": 1660,
                    "object": {
                      "type": "Identifier",
                      "start": 1647,
                      "end": 1653,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1660,
                      "name": "create",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1661,
                      "end": 1665,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1672,
            "end": 1713,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1676,
                "end": 1712,
                "id": {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1688,
                  "name": "args1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1681,
                    "end": 1688,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1683,
                      "end": 1688,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1683,
                        "end": 1688,
                        "name": "Args3",
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 1691,
                  "end": 1712,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1693,
                      "end": 1701,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1701,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1701,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1703,
                      "end": 1710,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1703,
                        "end": 1710,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1703,
                        "end": 1710,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1718,
            "end": 1759,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1722,
                "end": 1758,
                "id": {
                  "type": "Identifier",
                  "start": 1722,
                  "end": 1734,
                  "name": "args2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1727,
                    "end": 1734,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1729,
                      "end": 1734,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1729,
                        "end": 1734,
                        "name": "Args4",
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 1737,
                  "end": 1758,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1739,
                      "end": 1747,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1747,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1747,
                        "name": "previous",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1749,
                      "end": 1756,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1749,
                        "end": 1756,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1749,
                        "end": 1756,
                        "name": "current",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
