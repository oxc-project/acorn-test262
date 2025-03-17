__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 496,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 104,
            "name": "combine",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 104,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 36,
                "end": 104,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 36,
                  "end": 42,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 40,
                      "end": 41,
                      "name": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "name": "S",
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
                    "start": 43,
                    "end": 57,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 46,
                        "end": 57,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 47,
                            "end": 51,
                            "name": "_",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 48,
                              "end": 51,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 50,
                                "end": 51,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 50,
                                  "end": 51,
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
                          "start": 53,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 56,
                            "end": 57,
                            "typeName": {
                              "type": "Identifier",
                              "start": 56,
                              "end": 57,
                              "name": "S",
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
                  "start": 59,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 66,
                    "end": 104,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 66,
                      "end": 69,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 67,
                          "end": 68,
                          "name": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
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
                        "start": 70,
                        "end": 84,
                        "name": "g",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 71,
                          "end": 84,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 73,
                            "end": 84,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 74,
                                "end": 78,
                                "name": "_",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 75,
                                  "end": 78,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 77,
                                    "end": 78,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 77,
                                      "end": 78,
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
                              "start": 80,
                              "end": 84,
                              "typeAnnotation": {
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
                      "start": 86,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 93,
                        "end": 104,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 94,
                            "end": 98,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 95,
                              "end": 98,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 97,
                                "end": 98,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 97,
                                  "end": 98,
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
                          "start": 100,
                          "end": 104,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 103,
                            "end": 104,
                            "typeName": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 112,
            "end": 198,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 133,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 122,
                    "end": 133,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 127,
                        "name": "_",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 127,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
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
                      "start": 129,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 132,
                        "end": 133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "name": "S",
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
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 146,
              "end": 198,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 164,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 153,
                      "end": 164,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 154,
                          "end": 158,
                          "name": "_",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 155,
                            "end": 158,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 157,
                              "end": 158,
                              "typeName": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
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
                        "start": 160,
                        "end": 164,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 163,
                          "end": 164,
                          "typeName": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 164,
                            "name": "T",
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
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 181,
                "end": 198,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 183,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 185,
                        "end": 186,
                        "typeName": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 186,
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
                "body": {
                  "type": "CallExpression",
                  "start": 191,
                  "end": 198,
                  "callee": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 193,
                      "end": 197,
                      "callee": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 146,
                "end": 149,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 147,
                    "end": 148,
                    "name": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 112,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 113,
                  "end": 114,
                  "name": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
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
                  "start": 116,
                  "end": 117,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "S",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 340,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 340,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 209,
                "end": 340,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 209,
                  "end": 215,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 210,
                      "end": 211,
                      "name": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 211,
                        "name": "K",
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
                      "start": 213,
                      "end": 214,
                      "name": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "name": "N",
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
                    "start": 216,
                    "end": 230,
                    "name": "g",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 219,
                        "end": 230,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 220,
                            "end": 224,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 221,
                              "end": 224,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 223,
                                "end": 224,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 223,
                                  "end": 224,
                                  "name": "K",
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
                          "start": 226,
                          "end": 230,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 229,
                            "end": 230,
                            "typeName": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "name": "N",
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
                  "start": 232,
                  "end": 340,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 239,
                    "end": 340,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 240,
                        "end": 287,
                        "name": "h",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 241,
                          "end": 287,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 243,
                            "end": 287,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 243,
                              "end": 246,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 244,
                                  "end": 245,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 244,
                                    "end": 245,
                                    "name": "M",
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
                                "start": 247,
                                "end": 271,
                                "name": "_",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 248,
                                  "end": 271,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 250,
                                    "end": 271,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 251,
                                        "end": 255,
                                        "name": "_",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 252,
                                          "end": 255,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 254,
                                            "end": 255,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 254,
                                              "end": 255,
                                              "name": "K",
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
                                      "start": 257,
                                      "end": 271,
                                      "typeAnnotation": {
                                        "type": "TSFunctionType",
                                        "start": 260,
                                        "end": 271,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 261,
                                            "end": 265,
                                            "name": "_",
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 262,
                                              "end": 265,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 264,
                                                "end": 265,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 264,
                                                  "end": 265,
                                                  "name": "M",
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
                                          "start": 267,
                                          "end": 271,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 270,
                                            "end": 271,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 270,
                                              "end": 271,
                                              "name": "M",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        }
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
                              "start": 273,
                              "end": 287,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 276,
                                "end": 287,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 277,
                                    "end": 281,
                                    "name": "_",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 278,
                                      "end": 281,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 280,
                                        "end": 281,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 280,
                                          "end": 281,
                                          "name": "M",
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
                                  "start": 283,
                                  "end": 287,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 286,
                                    "end": 287,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 286,
                                      "end": 287,
                                      "name": "M",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
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
                      "start": 289,
                      "end": 340,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 296,
                        "end": 340,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 296,
                          "end": 299,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 297,
                              "end": 298,
                              "name": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 298,
                                "name": "R",
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
                            "start": 300,
                            "end": 324,
                            "name": "f",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 301,
                              "end": 324,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 303,
                                "end": 324,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 304,
                                    "end": 308,
                                    "name": "_",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 305,
                                      "end": 308,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 307,
                                        "end": 308,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 307,
                                          "end": 308,
                                          "name": "N",
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
                                  "start": 310,
                                  "end": 324,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 313,
                                    "end": 324,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 314,
                                        "end": 318,
                                        "name": "_",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 315,
                                          "end": 318,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 317,
                                            "end": 318,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 317,
                                              "end": 318,
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
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 320,
                                      "end": 324,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 323,
                                        "end": 324,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 323,
                                          "end": 324,
                                          "name": "R",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
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
                          "start": 326,
                          "end": 340,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 329,
                            "end": 340,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 330,
                                "end": 334,
                                "name": "_",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 331,
                                  "end": 334,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 333,
                                    "end": 334,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 333,
                                      "end": 334,
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
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 336,
                              "end": 340,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 339,
                                "end": 340,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 339,
                                  "end": 340,
                                  "name": "R",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 348,
            "end": 496,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 355,
                "end": 369,
                "name": "g",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 356,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 358,
                    "end": 369,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 359,
                        "end": 363,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 360,
                          "end": 363,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 362,
                            "end": 363,
                            "typeName": {
                              "type": "Identifier",
                              "start": 362,
                              "end": 363,
                              "name": "K",
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
                      "start": 365,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 368,
                        "end": 369,
                        "typeName": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 369,
                          "name": "N",
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
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 382,
              "end": 496,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 383,
                  "end": 430,
                  "name": "h",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 386,
                      "end": 430,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 386,
                        "end": 389,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 387,
                            "end": 388,
                            "name": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 388,
                              "name": "M",
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
                          "start": 390,
                          "end": 414,
                          "name": "_",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 391,
                            "end": 414,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 393,
                              "end": 414,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 394,
                                  "end": 398,
                                  "name": "_",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 395,
                                    "end": 398,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 397,
                                      "end": 398,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 397,
                                        "end": 398,
                                        "name": "K",
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
                                "start": 400,
                                "end": 414,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 403,
                                  "end": 414,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 404,
                                      "end": 408,
                                      "name": "_",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 405,
                                        "end": 408,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 407,
                                          "end": 408,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 407,
                                            "end": 408,
                                            "name": "M",
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
                                    "start": 410,
                                    "end": 414,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 413,
                                      "end": 414,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 413,
                                        "end": 414,
                                        "name": "M",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  }
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
                        "start": 416,
                        "end": 430,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 419,
                          "end": 430,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 420,
                              "end": 424,
                              "name": "_",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 421,
                                "end": 424,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 423,
                                  "end": 424,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 423,
                                    "end": 424,
                                    "name": "M",
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
                            "start": 426,
                            "end": 430,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 429,
                              "end": 430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 429,
                                "end": 430,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 447,
                "end": 496,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 451,
                    "end": 475,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 475,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 454,
                        "end": 475,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 455,
                            "end": 459,
                            "name": "_",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 456,
                              "end": 459,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 458,
                                "end": 459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
                                  "name": "N",
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
                          "start": 461,
                          "end": 475,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 464,
                            "end": 475,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 465,
                                "end": 469,
                                "name": "_",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 466,
                                  "end": 469,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 468,
                                    "end": 469,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 468,
                                      "end": 469,
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
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 471,
                              "end": 475,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 474,
                                "end": 475,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 474,
                                  "end": 475,
                                  "name": "R",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 480,
                  "end": 496,
                  "callee": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "name": "h",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 482,
                      "end": 495,
                      "callee": {
                        "type": "CallExpression",
                        "start": 482,
                        "end": 492,
                        "callee": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 489,
                          "name": "combine",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 490,
                            "end": 491,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 447,
                  "end": 450,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 448,
                      "end": 449,
                      "name": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "name": "R",
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
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 348,
              "end": 354,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 349,
                  "end": 350,
                  "name": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "name": "K",
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
                  "start": 352,
                  "end": 353,
                  "name": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "name": "N",
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
