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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 29,
            "typeParameters": null,
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
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 44,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 110,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 76,
            "end": 108,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 86,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 91,
                    "end": 97
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "name": "a",
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
                  "name": "A",
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 130,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 148,
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 166,
            "callee": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 164,
                "end": 165,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 169,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 178,
        "end": 446,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 184,
            "end": 245,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 195,
              "end": 198,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 196,
                  "end": 197,
                  "name": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
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
              "start": 199,
              "end": 245,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 209,
                  "end": 220,
                  "typeParameters": null,
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 234,
                      "name": "x",
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
            "type": "TSInterfaceDeclaration",
            "start": 251,
            "end": 331,
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 262,
              "end": 265,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 263,
                  "end": 264,
                  "name": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
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
              "start": 266,
              "end": 331,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 276,
                  "end": 297,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 277,
                      "end": 281,
                      "name": "x",
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
                    },
                    {
                      "type": "Identifier",
                      "start": 283,
                      "end": 292,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 292,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 286,
                          "end": 292
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                  "start": 306,
                  "end": 325,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 306,
                    "end": 309,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 307,
                        "end": 308,
                        "name": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
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
                      "start": 310,
                      "end": 314,
                      "name": "x",
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
                    },
                    {
                      "type": "Identifier",
                      "start": 316,
                      "end": 320,
                      "name": "y",
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
            "type": "VariableDeclaration",
            "start": 337,
            "end": 355,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 341,
                "end": 354,
                "id": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 354,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 354,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 354,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
            "start": 360,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 364,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 368,
                  "end": 371,
                  "callee": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 383,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 386,
                  "end": 393,
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 388,
                      "end": 392,
                      "value": true,
                      "raw": "true"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 405,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 408,
                  "end": 418,
                  "callee": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 410,
                      "end": 414,
                      "value": true,
                      "raw": "true"
                    },
                    {
                      "type": "Literal",
                      "start": 416,
                      "end": 417,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 430,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 433,
                  "end": 443,
                  "callee": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 438,
                      "end": 442,
                      "value": true,
                      "raw": "true"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
