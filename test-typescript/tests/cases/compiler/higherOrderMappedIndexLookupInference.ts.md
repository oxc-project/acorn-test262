__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 503,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 23,
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
          "start": 24,
          "end": 43,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 43,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 27,
              "end": 43,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 27,
                "end": 30,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 28,
                    "end": 29,
                    "name": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 64,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 48,
              "end": 64,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 48,
                "end": 51,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 49,
                    "end": 50,
                    "name": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
        "type": "BlockStatement",
        "start": 66,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 78,
            "expression": {
              "type": "AssignmentExpression",
              "start": 72,
              "end": 77,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 89,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 88,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 104,
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
          "start": 105,
          "end": 140,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 140,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 108,
              "end": 140,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 108,
                "end": 130,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 109,
                    "end": 110,
                    "name": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
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
                    "start": 112,
                    "end": 129,
                    "name": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 122,
                      "end": 129,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 128,
                        "end": 129,
                        "typeName": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 136,
                  "end": 140,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 142,
          "end": 177,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 177,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 145,
              "end": 177,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 145,
                "end": 167,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 146,
                    "end": 147,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 149,
                    "end": 166,
                    "name": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "name": "L",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 159,
                      "end": 166,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "name": "U",
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 177,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 173,
                  "end": 177,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 176,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "name": "L",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
        "type": "BlockStatement",
        "start": 179,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 191,
            "expression": {
              "type": "AssignmentExpression",
              "start": 185,
              "end": 190,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 202,
            "expression": {
              "type": "AssignmentExpression",
              "start": 196,
              "end": 201,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
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
          "start": 218,
          "end": 254,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 254,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 221,
              "end": 254,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 230,
                  "end": 254,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 233,
                    "end": 245,
                    "name": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 238,
                      "end": 245,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 245,
                        "typeName": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
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
                    "start": 248,
                    "end": 252,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "name": "K",
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
                    "start": 238,
                    "end": 245,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 244,
                      "end": 245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 245,
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
                    "start": 233,
                    "end": 234,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 256,
          "end": 292,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 292,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 259,
              "end": 292,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 259,
                "end": 262,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 260,
                    "end": 261,
                    "name": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 265,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 268,
                  "end": 292,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 271,
                    "end": 283,
                    "name": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 276,
                      "end": 283,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 282,
                        "end": 283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 283,
                          "name": "U",
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
                    "start": 286,
                    "end": 290,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 287,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "name": "K",
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
                    "start": 276,
                    "end": 283,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 282,
                      "end": 283,
                      "typeName": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 283,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "type": "BlockStatement",
        "start": 294,
        "end": 319,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 306,
            "expression": {
              "type": "AssignmentExpression",
              "start": 300,
              "end": 305,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 317,
            "expression": {
              "type": "AssignmentExpression",
              "start": 311,
              "end": 316,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 343,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 356,
        "name": "IdMapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 362,
        "end": 386,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 365,
          "end": 377,
          "name": {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 370,
            "end": 377,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 376,
              "end": 377,
              "typeName": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
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
          "start": 380,
          "end": 384,
          "objectType": {
            "type": "TSTypeReference",
            "start": 380,
            "end": 381,
            "typeName": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 382,
            "end": 383,
            "typeName": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "name": "K",
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
          "start": 370,
          "end": 377,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 377,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
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
          "start": 365,
          "end": 366,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 425,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 425,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 405,
                "end": 425,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 405,
                  "end": 408,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 406,
                      "end": 407,
                      "name": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 407,
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 422,
                      "name": "IdMapped",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 422,
                      "end": 425,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 423,
                          "end": 424,
                          "typeName": {
                            "type": "Identifier",
                            "start": 423,
                            "end": 424,
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 477,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 477,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 444,
                "end": 477,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 444,
                  "end": 447,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 445,
                      "end": 446,
                      "name": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 450,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "start": 453,
                    "end": 477,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 456,
                      "end": 468,
                      "name": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 457,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 461,
                        "end": 468,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 467,
                          "end": 468,
                          "typeName": {
                            "type": "Identifier",
                            "start": 467,
                            "end": 468,
                            "name": "U",
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
                      "start": 471,
                      "end": 475,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 471,
                        "end": 472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 471,
                          "end": 472,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 474,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "name": "K",
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
                      "start": 461,
                      "end": 468,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 467,
                        "end": 468,
                        "typeName": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 457,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 497,
            "name": "h",
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
                  "name": "g",
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
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
