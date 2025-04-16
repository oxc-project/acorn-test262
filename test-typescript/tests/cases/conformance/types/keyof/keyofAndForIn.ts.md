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
        "name": "f1",
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
          "start": 55,
          "end": 75,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 75,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 60,
              "end": 75,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 63,
                "end": 69,
                "name": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 68,
                  "end": 69,
                  "typeName": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "K",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "name": "k",
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
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 237,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 108,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 107,
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 99,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 107,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 122,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 122,
                  "name": "k1",
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
              "name": "k1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 158,
                      "end": 170,
                      "id": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "name": "x1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 170,
                        "object": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 169,
                          "name": "k1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 193,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 193,
                    "name": "k2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 216,
                      "end": 228,
                      "id": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "name": "x2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 221,
                        "end": 228,
                        "object": {
                          "type": "Identifier",
                          "start": 221,
                          "end": 224,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 227,
                          "name": "k2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 250,
        "name": "f2",
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
          "start": 254,
          "end": 283,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 283,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 259,
              "end": 283,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 262,
                "end": 274,
                "name": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 285,
          "end": 295,
          "name": "k",
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
                  "name": "T",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 457,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 303,
            "end": 322,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 309,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 313,
                  "end": 321,
                  "left": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 321,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 343,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 342,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 342,
                  "name": "k1",
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
                          "name": "T",
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
            "kind": "let",
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
              "name": "k1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 378,
                      "end": 390,
                      "id": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 380,
                        "name": "x1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 390,
                        "object": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 386,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 387,
                          "end": 389,
                          "name": "k1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 411,
                  "end": 413,
                  "id": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 413,
                    "name": "k2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 417,
              "end": 420,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 436,
                      "end": 448,
                      "id": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 438,
                        "name": "x2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 441,
                        "end": 448,
                        "object": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 444,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 447,
                          "name": "k2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
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
      "type": "FunctionDeclaration",
      "start": 459,
      "end": 678,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 470,
        "name": "f3",
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
          "start": 493,
          "end": 516,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 516,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 498,
              "end": 516,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 501,
                "end": 507,
                "name": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 507,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 507,
                    "name": "K",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 507,
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 518,
          "end": 522,
          "name": "k",
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
      "body": {
        "type": "BlockStatement",
        "start": 524,
        "end": 678,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 530,
            "end": 549,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 536,
                "end": 548,
                "id": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 537,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 540,
                  "end": 548,
                  "left": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 548,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 554,
            "end": 564,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 558,
                "end": 563,
                "id": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 563,
                  "name": "k1",
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
              "name": "k1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 580,
              "end": 583,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 599,
                      "end": 611,
                      "id": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 601,
                        "name": "x1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 604,
                        "end": 611,
                        "object": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 607,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 608,
                          "end": 610,
                          "name": "k1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 632,
                  "end": 634,
                  "id": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 634,
                    "name": "k2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 638,
              "end": 641,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 657,
                      "end": 669,
                      "id": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 659,
                        "name": "x2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 662,
                        "end": 669,
                        "object": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 665,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 668,
                          "name": "k2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
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
            "start": 474,
            "end": 491,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
