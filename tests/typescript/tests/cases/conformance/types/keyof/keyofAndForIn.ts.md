__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 678,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
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
          "start": 55,
          "end": 75,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 75,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 60,
              "end": 75,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 81,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 81,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 237,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 108,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 107,
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 99,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 107,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 123,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 122,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 122,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "type": "ForInStatement",
            "start": 128,
            "end": 177,
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 144,
              "end": 177,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 154,
                  "end": 171,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 158,
                      "end": 170,
                      "id": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 170,
                        "object": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 169,
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ForInStatement",
            "start": 182,
            "end": 235,
            "left": {
              "type": "VariableDeclaration",
              "start": 187,
              "end": 193,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 193,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 193,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 235,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 212,
                  "end": 229,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 216,
                      "end": 228,
                      "id": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 221,
                        "end": 228,
                        "object": {
                          "type": "Identifier",
                          "start": 221,
                          "end": 224,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 227,
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 250,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 250,
        "end": 253,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 251,
            "end": 252,
            "name": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
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
          "start": 254,
          "end": 283,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 283,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 259,
              "end": 283,
              "key": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 267,
                "end": 274,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 273,
                  "end": 274,
                  "typeName": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 277,
                "end": 281,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 277,
                  "end": 278,
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 279,
                  "end": 280,
                  "typeName": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 285,
          "end": 295,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 295,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 288,
              "end": 295,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 457,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 303,
            "end": 322,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 309,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 313,
                  "end": 321,
                  "left": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 321,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 343,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 342,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 342,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 335,
                      "end": 342,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 341,
                        "end": 342,
                        "typeName": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
            "type": "ForInStatement",
            "start": 348,
            "end": 397,
            "left": {
              "type": "Identifier",
              "start": 353,
              "end": 355,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 364,
              "end": 397,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 374,
                  "end": 391,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 378,
                      "end": 390,
                      "id": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 380,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 390,
                        "object": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 386,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 387,
                          "end": 389,
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ForInStatement",
            "start": 402,
            "end": 455,
            "left": {
              "type": "VariableDeclaration",
              "start": 407,
              "end": 413,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 411,
                  "end": 413,
                  "id": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 413,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 417,
              "end": 420,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 422,
              "end": 455,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 432,
                  "end": 449,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 436,
                      "end": 448,
                      "id": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 438,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 441,
                        "end": 448,
                        "object": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 444,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 447,
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 459,
      "end": 678,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 470,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 470,
        "end": 492,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 471,
            "end": 472,
            "name": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
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
            "start": 474,
            "end": 491,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 484,
              "end": 491,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 490,
                "end": 491,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 493,
          "end": 516,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 516,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 498,
              "end": 516,
              "key": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 507,
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 510,
                "end": 514,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 510,
                  "end": 511,
                  "typeName": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 512,
                  "end": 513,
                  "typeName": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 513,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 518,
          "end": 522,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 519,
            "end": 522,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 521,
              "end": 522,
              "typeName": {
                "type": "Identifier",
                "start": 521,
                "end": 522,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 524,
        "end": 678,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 530,
            "end": 549,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 536,
                "end": 548,
                "id": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 537,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 540,
                  "end": 548,
                  "left": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 548,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 554,
            "end": 564,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 558,
                "end": 563,
                "id": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 563,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 562,
                      "end": 563,
                      "typeName": {
                        "type": "Identifier",
                        "start": 562,
                        "end": 563,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "type": "ForInStatement",
            "start": 569,
            "end": 618,
            "left": {
              "type": "Identifier",
              "start": 574,
              "end": 576,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 580,
              "end": 583,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 585,
              "end": 618,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 595,
                  "end": 612,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 599,
                      "end": 611,
                      "id": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 601,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 604,
                        "end": 611,
                        "object": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 607,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 608,
                          "end": 610,
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ForInStatement",
            "start": 623,
            "end": 676,
            "left": {
              "type": "VariableDeclaration",
              "start": 628,
              "end": 634,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 632,
                  "end": 634,
                  "id": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 634,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 638,
              "end": 641,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 643,
              "end": 676,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 653,
                  "end": 670,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 657,
                      "end": 669,
                      "id": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 659,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 662,
                        "end": 669,
                        "object": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 665,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 668,
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
