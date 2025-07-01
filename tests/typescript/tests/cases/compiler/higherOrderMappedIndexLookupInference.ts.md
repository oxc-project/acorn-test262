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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 28,
                      "end": 29
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 28,
                    "end": 29
                  }
                ],
                "start": 27,
                "end": 30
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "typeArguments": null,
                    "start": 42,
                    "end": 43
                  },
                  "start": 36,
                  "end": 43
                },
                "start": 33,
                "end": 43
              },
              "start": 27,
              "end": 43
            },
            "start": 25,
            "end": 43
          },
          "start": 24,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 49,
                    "end": 50
                  }
                ],
                "start": 48,
                "end": 51
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "typeArguments": null,
                    "start": 63,
                    "end": 64
                  },
                  "start": 57,
                  "end": 64
                },
                "start": 54,
                "end": 64
              },
              "start": 48,
              "end": 64
            },
            "start": 46,
            "end": 64
          },
          "start": 45,
          "end": 64
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "start": 72,
              "end": 77
            },
            "directive": null,
            "start": 72,
            "end": 78
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "start": 83,
              "end": 88
            },
            "directive": null,
            "start": 83,
            "end": 89
          }
        ],
        "start": 66,
        "end": 91
      },
      "expression": false,
      "start": 12,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 109,
                      "end": 110
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 109,
                    "end": 110
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 113
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "typeArguments": null,
                        "start": 128,
                        "end": 129
                      },
                      "start": 122,
                      "end": 129
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 112,
                    "end": 129
                  }
                ],
                "start": 108,
                "end": 130
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "typeArguments": null,
                    "start": 136,
                    "end": 137
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 139
                  },
                  "start": 136,
                  "end": 140
                },
                "start": 133,
                "end": 140
              },
              "start": 108,
              "end": 140
            },
            "start": 106,
            "end": 140
          },
          "start": 105,
          "end": 140
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 146,
                    "end": 147
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 166
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 166
                      },
                      "start": 159,
                      "end": 166
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 149,
                    "end": 166
                  }
                ],
                "start": 145,
                "end": 167
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 176
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 176
                  },
                  "start": 173,
                  "end": 177
                },
                "start": 170,
                "end": 177
              },
              "start": 145,
              "end": 177
            },
            "start": 143,
            "end": 177
          },
          "start": 142,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 186
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "start": 185,
              "end": 190
            },
            "directive": null,
            "start": 185,
            "end": 191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "start": 196,
              "end": 201
            },
            "directive": null,
            "start": 196,
            "end": 202
          }
        ],
        "start": 179,
        "end": 204
      },
      "expression": false,
      "start": 93,
      "end": 204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 217
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 222,
                      "end": 223
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 222,
                    "end": 223
                  }
                ],
                "start": 221,
                "end": 224
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 244,
                      "end": 245
                    },
                    "start": 238,
                    "end": 245
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 249
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 249
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 251
                      },
                      "typeArguments": null,
                      "start": 250,
                      "end": 251
                    },
                    "start": 248,
                    "end": 252
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 230,
                  "end": 254
                },
                "start": 227,
                "end": 254
              },
              "start": 221,
              "end": 254
            },
            "start": 219,
            "end": 254
          },
          "start": 218,
          "end": 254
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 261
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 260,
                    "end": 261
                  }
                ],
                "start": 259,
                "end": 262
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 282,
                      "end": 283
                    },
                    "start": 276,
                    "end": 283
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 287
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 287
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "typeArguments": null,
                      "start": 288,
                      "end": 289
                    },
                    "start": 286,
                    "end": 290
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 268,
                  "end": 292
                },
                "start": 265,
                "end": 292
              },
              "start": 259,
              "end": 292
            },
            "start": 257,
            "end": 292
          },
          "start": 256,
          "end": 292
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 305
              },
              "start": 300,
              "end": 305
            },
            "directive": null,
            "start": 300,
            "end": 306
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "start": 311,
              "end": 316
            },
            "directive": null,
            "start": 311,
            "end": 317
          }
        ],
        "start": 294,
        "end": 319
      },
      "expression": false,
      "start": 206,
      "end": 319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdMapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 356
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
              "start": 357,
              "end": 358
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 357,
            "end": 358
          }
        ],
        "start": 356,
        "end": 359
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 366
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "typeArguments": null,
            "start": 376,
            "end": 377
          },
          "start": 370,
          "end": 377
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
            },
            "typeArguments": null,
            "start": 380,
            "end": 381
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "typeArguments": null,
            "start": 382,
            "end": 383
          },
          "start": 380,
          "end": 384
        },
        "optional": false,
        "readonly": null,
        "start": 362,
        "end": 386
      },
      "declare": false,
      "start": 343,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 406,
                        "end": 407
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 406,
                      "end": 407
                    }
                  ],
                  "start": 405,
                  "end": 408
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IdMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 422
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
                            "start": 423,
                            "end": 424
                          },
                          "typeArguments": null,
                          "start": 423,
                          "end": 424
                        }
                      ],
                      "start": 422,
                      "end": 425
                    },
                    "start": 414,
                    "end": 425
                  },
                  "start": 411,
                  "end": 425
                },
                "start": 405,
                "end": 425
              },
              "start": 403,
              "end": 425
            },
            "start": 402,
            "end": 425
          },
          "init": null,
          "definite": false,
          "start": 402,
          "end": 425
        }
      ],
      "declare": true,
      "start": 388,
      "end": 426
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 445,
                      "end": 446
                    }
                  ],
                  "start": 444,
                  "end": 447
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 457
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 467,
                        "end": 468
                      },
                      "start": 461,
                      "end": 468
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 471,
                          "end": 472
                        },
                        "typeArguments": null,
                        "start": 471,
                        "end": 472
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 474
                        },
                        "typeArguments": null,
                        "start": 473,
                        "end": 474
                      },
                      "start": 471,
                      "end": 475
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 453,
                    "end": 477
                  },
                  "start": 450,
                  "end": 477
                },
                "start": 444,
                "end": 477
              },
              "start": 442,
              "end": 477
            },
            "start": 441,
            "end": 477
          },
          "init": null,
          "definite": false,
          "start": 441,
          "end": 477
        }
      ],
      "declare": true,
      "start": 427,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 489,
                "end": 497
              },
              "start": 487,
              "end": 497
            },
            "start": 486,
            "end": 497
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          },
          "definite": false,
          "start": 486,
          "end": 501
        }
      ],
      "declare": false,
      "start": 480,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 502
}
```
