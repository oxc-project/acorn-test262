__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 502,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 91,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 78,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 72,
              "end": 77,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 89,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 88,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 23,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 43,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 43,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 27,
              "end": 43,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 36,
                  "end": 43,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 27,
                "end": 30,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 28,
                    "end": 29,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 64,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 48,
              "end": 64,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 57,
                  "end": 64,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 64,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 48,
                "end": 51,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 49,
                    "end": 50,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 204,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 191,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 185,
              "end": 190,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 202,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 196,
              "end": 201,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 104,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 140,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 140,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 108,
              "end": 140,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 136,
                  "end": 140,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 108,
                "end": 130,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 109,
                    "end": 110,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 112,
                    "end": 129,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 122,
                      "end": 129,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 128,
                        "end": 129,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 142,
          "end": 177,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 177,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 145,
              "end": 177,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 177,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 173,
                  "end": 177,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 176,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 145,
                "end": 167,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 146,
                    "end": 147,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 149,
                    "end": 166,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 159,
                      "end": 166,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 319,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 319,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 306,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 300,
              "end": 305,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 317,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 311,
              "end": 316,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 254,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 254,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 221,
              "end": 254,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 230,
                  "end": 254,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 238,
                    "end": 245,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 244,
                      "end": 245,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 245,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "nameType": null,
                  "optional": false,
                  "readonly": null,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 248,
                    "end": 252,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 251,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 249,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 221,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 222,
                    "end": 223,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 256,
          "end": 292,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 292,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 259,
              "end": 292,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 265,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 268,
                  "end": 292,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 276,
                    "end": 283,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 282,
                      "end": 283,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 283,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "nameType": null,
                  "optional": false,
                  "readonly": null,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 286,
                    "end": 290,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 289,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 287,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 259,
                "end": 262,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 260,
                    "end": 261,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 343,
      "end": 386,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 356,
        "decorators": [],
        "name": "IdMapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 362,
        "end": 386,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 370,
          "end": 377,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 377,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 365,
          "end": 366,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 380,
          "end": 384,
          "indexType": {
            "type": "TSTypeReference",
            "start": 382,
            "end": 383,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 380,
            "end": 381,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 356,
        "end": 359,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 357,
            "end": 358,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 425,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 425,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 405,
                "end": 425,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 425,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 422,
                      "end": 425,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 423,
                          "end": 424,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 423,
                            "end": 424,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 422,
                      "decorators": [],
                      "name": "IdMapped",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 405,
                  "end": 408,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 406,
                      "end": 407,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 407,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 477,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 477,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 444,
                "end": 477,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 450,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "start": 453,
                    "end": 477,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 461,
                      "end": 468,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 467,
                        "end": 468,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 457,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "nameType": null,
                    "optional": false,
                    "readonly": null,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 471,
                      "end": 475,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 474,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 471,
                        "end": 472,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 471,
                          "end": 472,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 444,
                  "end": 447,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 445,
                      "end": 446,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 497,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 489,
                "end": 497,
                "exprName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
