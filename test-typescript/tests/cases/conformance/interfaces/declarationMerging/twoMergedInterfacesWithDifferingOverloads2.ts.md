__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 446,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 29,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 34,
            "end": 54,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 44,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 110,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 76,
            "end": 108,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 86,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 91,
                    "end": 97
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 107,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "start": 122,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 130,
            "end": 133,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 148,
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 166,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 164,
                "end": 165,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 169,
      "end": 446,
      "body": {
        "type": "TSModuleBlock",
        "start": 178,
        "end": 446,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 184,
            "end": 245,
            "body": {
              "type": "TSInterfaceBody",
              "start": 199,
              "end": 245,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 209,
                  "end": 220,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 211,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 213,
                      "end": 219
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 229,
                  "end": 239,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 234,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 231,
                        "end": 234,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 233,
                          "end": 234,
                          "typeName": {
                            "type": "Identifier",
                            "start": 233,
                            "end": 234,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 195,
              "end": 198,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 196,
                  "end": 197,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 251,
            "end": 331,
            "body": {
              "type": "TSInterfaceBody",
              "start": 266,
              "end": 331,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 276,
                  "end": 297,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 277,
                      "end": 281,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 283,
                      "end": 292,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 292,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 286,
                          "end": 292
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 306,
                  "end": 325,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 311,
                        "end": 314,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 313,
                          "end": 314,
                          "typeName": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 314,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 316,
                      "end": 320,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 317,
                        "end": 320,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 319,
                          "end": 320,
                          "typeName": {
                            "type": "Identifier",
                            "start": 319,
                            "end": 320,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 323,
                      "end": 324,
                      "typeName": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 306,
                    "end": 309,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 307,
                        "end": 308,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 262,
              "end": 265,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 263,
                  "end": 264,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 337,
            "end": 355,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 341,
                "end": 354,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 354,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 354,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 354,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 345,
                        "end": 354,
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 346,
                            "end": 353
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "decorators": [],
                        "name": "A",
                        "optional": false
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
            "start": 360,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 364,
                "end": 371,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 368,
                  "end": 371,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 377,
            "end": 394,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 393,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 383,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 386,
                  "end": 393,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 388,
                      "end": 392,
                      "raw": "true",
                      "value": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 399,
            "end": 419,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 403,
                "end": 418,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 405,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 408,
                  "end": 418,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 410,
                      "end": 414,
                      "raw": "true",
                      "value": true
                    },
                    {
                      "type": "Literal",
                      "start": 416,
                      "end": 417,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 424,
            "end": 444,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 428,
                "end": 443,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 430,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 433,
                  "end": 443,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 438,
                      "end": 442,
                      "raw": "true",
                      "value": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "G",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
