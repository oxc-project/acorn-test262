__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 113,
  "end": 296,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 113,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 171,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 137,
            "end": 169,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 137,
              "end": 140,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 138,
                  "end": 139,
                  "name": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 141,
                "end": 165,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 144,
                    "end": 165,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 145,
                        "end": 149,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 146,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 148,
                            "end": 149,
                            "typeName": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 154,
                        "end": 165,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 155,
                            "end": 159,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 156,
                              "end": 159,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 158,
                                "end": 159,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 158,
                                  "end": 159,
                                  "decorators": [],
                                  "name": "S",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 173,
      "end": 213,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 213,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 213,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 180,
                "end": 213,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 180,
                  "end": 183,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 181,
                      "end": 182,
                      "name": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 184,
                    "end": 188,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 185,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 187,
                        "end": 188,
                        "typeName": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 188,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 193,
                    "end": 213,
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 206,
                        "end": 213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 207,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 207,
                          "end": 213,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 208,
                              "end": 209,
                              "typeName": {
                                "type": "Identifier",
                                "start": 208,
                                "end": 209,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 211,
                              "end": 212,
                              "typeName": {
                                "type": "Identifier",
                                "start": 211,
                                "end": 212,
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 283,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 283,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 283,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 221,
                "end": 283,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 221,
                  "end": 224,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 222,
                      "end": 223,
                      "name": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 225,
                    "end": 229,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 228,
                        "end": 229,
                        "typeName": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 229,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 234,
                    "end": 283,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 234,
                      "end": 237,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 235,
                          "end": 236,
                          "name": {
                            "type": "Identifier",
                            "start": 235,
                            "end": 236,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 238,
                        "end": 242,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 242,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 241,
                            "end": 242,
                            "typeName": {
                              "type": "Identifier",
                              "start": 241,
                              "end": 242,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 244,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 247,
                        "end": 283,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 249,
                            "end": 281,
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
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                "start": 253,
                                "end": 277,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 254,
                                  "end": 277,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 256,
                                    "end": 277,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 257,
                                        "end": 261,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 258,
                                          "end": 261,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 260,
                                            "end": 261,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 260,
                                              "end": 261,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 263,
                                      "end": 277,
                                      "typeAnnotation": {
                                        "type": "TSFunctionType",
                                        "start": 266,
                                        "end": 277,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 267,
                                            "end": 271,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 268,
                                              "end": 271,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 270,
                                                "end": 271,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 270,
                                                  "end": 271,
                                                  "decorators": [],
                                                  "name": "S",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          }
                                        ],
                                        "returnType": {
                                          "type": "TSTypeAnnotation",
                                          "start": 273,
                                          "end": 277,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 276,
                                            "end": 277,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 276,
                                              "end": 277,
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
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
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 290,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
