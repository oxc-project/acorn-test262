__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 62,
                      "end": 63
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 62,
                    "end": 63
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 65,
                    "end": 66
                  }
                ],
                "start": 61,
                "end": 67
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 71,
                      "end": 72
                    },
                    "start": 69,
                    "end": 72
                  },
                  "start": 68,
                  "end": 72
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 77,
                      "end": 78
                    },
                    "start": 75,
                    "end": 78
                  },
                  "start": 74,
                  "end": 78
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 81,
                  "end": 82
                },
                "start": 79,
                "end": 82
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 92,
                      "end": 96
                    },
                    "start": 85,
                    "end": 97
                  }
                ],
                "start": 83,
                "end": 99
              },
              "expression": false,
              "start": 61,
              "end": 99
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 99
          }
        ],
        "start": 52,
        "end": 101
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 101
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 110,
        "end": 116
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 131
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 131
                    },
                    "start": 128,
                    "end": 131
                  },
                  "start": 127,
                  "end": 131
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 137
                      },
                      "typeArguments": null,
                      "start": 136,
                      "end": 137
                    },
                    "start": 134,
                    "end": 137
                  },
                  "start": 133,
                  "end": 137
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                },
                "start": 138,
                "end": 141
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 151,
                      "end": 155
                    },
                    "start": 144,
                    "end": 156
                  }
                ],
                "start": 142,
                "end": 158
              },
              "expression": false,
              "start": 126,
              "end": 158
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 123,
            "end": 158
          }
        ],
        "start": 117,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 160
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
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
              "start": 170,
              "end": 171
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 170,
            "end": 171
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 173,
            "end": 174
          }
        ],
        "start": 169,
        "end": 175
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 189,
                      "end": 190
                    },
                    "start": 187,
                    "end": 190
                  },
                  "start": 186,
                  "end": 190
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 196
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 196
                    },
                    "start": 193,
                    "end": 196
                  },
                  "start": 192,
                  "end": 196
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 200
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 200
                },
                "start": 197,
                "end": 200
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 210,
                      "end": 214
                    },
                    "start": 203,
                    "end": 215
                  }
                ],
                "start": 201,
                "end": 217
              },
              "expression": false,
              "start": 185,
              "end": 217
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 182,
            "end": 217
          }
        ],
        "start": 176,
        "end": 219
      },
      "abstract": false,
      "declare": false,
      "start": 162,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 232
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
              "start": 233,
              "end": 234
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 234
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 237
          }
        ],
        "start": 232,
        "end": 238
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 248
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 252,
                    "end": 253
                  },
                  "start": 250,
                  "end": 253
                },
                "start": 249,
                "end": 253
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "typeArguments": null,
                    "start": 258,
                    "end": 259
                  },
                  "start": 256,
                  "end": 259
                },
                "start": 255,
                "end": 259
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "typeArguments": null,
                "start": 262,
                "end": 263
              },
              "start": 260,
              "end": 263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 245,
            "end": 264
          }
        ],
        "start": 239,
        "end": 266
      },
      "declare": false,
      "start": 221,
      "end": 266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 290
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 291,
                    "end": 292
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 292
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 294,
                  "end": 295
                }
              ],
              "start": 290,
              "end": 296
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    },
                    "typeArguments": null,
                    "start": 300,
                    "end": 301
                  },
                  "start": 298,
                  "end": 301
                },
                "start": 297,
                "end": 301
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  },
                  "start": 304,
                  "end": 307
                },
                "start": 303,
                "end": 307
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "typeArguments": null,
                "start": 310,
                "end": 311
              },
              "start": 308,
              "end": 311
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 287,
            "end": 312
          }
        ],
        "start": 281,
        "end": 314
      },
      "declare": false,
      "start": 268,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 328
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 329,
                            "end": 330
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 329,
                          "end": 330
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 333
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 332,
                          "end": 333
                        }
                      ],
                      "start": 328,
                      "end": 334
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 339
                            },
                            "typeArguments": null,
                            "start": 338,
                            "end": 339
                          },
                          "start": 336,
                          "end": 339
                        },
                        "start": 335,
                        "end": 339
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 344,
                              "end": 345
                            },
                            "typeArguments": null,
                            "start": 344,
                            "end": 345
                          },
                          "start": 342,
                          "end": 345
                        },
                        "start": 341,
                        "end": 345
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 349
                        },
                        "typeArguments": null,
                        "start": 348,
                        "end": 349
                      },
                      "start": 346,
                      "end": 349
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 325,
                    "end": 349
                  }
                ],
                "start": 323,
                "end": 351
              },
              "start": 321,
              "end": 351
            },
            "start": 320,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 320,
          "end": 351
        }
      ],
      "declare": false,
      "start": 316,
      "end": 351
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 365
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
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
                          "start": 366,
                          "end": 367
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 366,
                        "end": 367
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 370
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 369,
                        "end": 370
                      }
                    ],
                    "start": 365,
                    "end": 371
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 376
                          },
                          "typeArguments": null,
                          "start": 375,
                          "end": 376
                        },
                        "start": 373,
                        "end": 376
                      },
                      "start": 372,
                      "end": 376
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 382
                          },
                          "typeArguments": null,
                          "start": 381,
                          "end": 382
                        },
                        "start": 379,
                        "end": 382
                      },
                      "start": 378,
                      "end": 382
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 394
                        },
                        "start": 386,
                        "end": 395
                      }
                    ],
                    "start": 384,
                    "end": 397
                  },
                  "expression": false,
                  "start": 365,
                  "end": 397
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 362,
                "end": 397
              }
            ],
            "start": 360,
            "end": 399
          },
          "definite": false,
          "start": 356,
          "end": 399
        }
      ],
      "declare": false,
      "start": 352,
      "end": 400
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 415
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 420
              },
              "typeArguments": null,
              "start": 419,
              "end": 420
            },
            "start": 417,
            "end": 420
          },
          "start": 416,
          "end": 420
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 402,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 436
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 438,
            "end": 441
          },
          "start": 437,
          "end": 441
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 423,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 466
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 470,
              "end": 473
            },
            "start": 468,
            "end": 473
          },
          "start": 467,
          "end": 473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 475,
        "end": 478
      },
      "expression": false,
      "start": 453,
      "end": 478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 494
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 500,
                    "end": 506
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 515
              },
              "start": 498,
              "end": 515
            },
            "start": 496,
            "end": 515
          },
          "start": 495,
          "end": 515
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 480,
      "end": 517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 532
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 537
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 546,
                    "end": 552
                  }
                ],
                "start": 537,
                "end": 553
              },
              "start": 536,
              "end": 553
            },
            "start": 534,
            "end": 553
          },
          "start": 533,
          "end": 553
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 518,
      "end": 555
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 579
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            },
            "start": 581,
            "end": 586
          },
          "start": 580,
          "end": 586
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 588,
        "end": 591
      },
      "expression": false,
      "start": 565,
      "end": 591
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 607
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 613,
                    "end": 619
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  }
                ],
                "start": 612,
                "end": 628
              },
              "start": 611,
              "end": 628
            },
            "start": 609,
            "end": 628
          },
          "start": 608,
          "end": 628
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 593,
      "end": 630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 645
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 650
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 651,
                    "end": 657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  }
                ],
                "start": 650,
                "end": 666
              },
              "start": 649,
              "end": 666
            },
            "start": 647,
            "end": 666
          },
          "start": 646,
          "end": 666
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 631,
      "end": 668
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 692
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 696,
              "end": 699
            },
            "start": 694,
            "end": 699
          },
          "start": 693,
          "end": 699
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 701,
        "end": 704
      },
      "expression": false,
      "start": 678,
      "end": 704
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 719
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 725,
                    "end": 731
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 733,
                    "end": 739
                  }
                ],
                "start": 724,
                "end": 740
              },
              "start": 723,
              "end": 740
            },
            "start": 721,
            "end": 740
          },
          "start": 720,
          "end": 740
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 706,
      "end": 742
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 756
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 762,
                    "end": 768
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  }
                ],
                "start": 761,
                "end": 777
              },
              "start": 760,
              "end": 777
            },
            "start": 758,
            "end": 777
          },
          "start": 757,
          "end": 777
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 743,
      "end": 779
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 798,
        "end": 802
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 806,
              "end": 809
            },
            "start": 804,
            "end": 809
          },
          "start": 803,
          "end": 809
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 811,
        "end": 814
      },
      "expression": false,
      "start": 789,
      "end": 814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 829
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "start": 833,
              "end": 841
            },
            "start": 831,
            "end": 841
          },
          "start": 830,
          "end": 841
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 816,
      "end": 843
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 857
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 869
              },
              "typeArguments": null,
              "start": 861,
              "end": 869
            },
            "start": 859,
            "end": 869
          },
          "start": 858,
          "end": 869
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 844,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 894
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 898,
              "end": 901
            },
            "start": 896,
            "end": 901
          },
          "start": 895,
          "end": 901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 903,
        "end": 906
      },
      "expression": false,
      "start": 881,
      "end": 906
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 921
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 933
              },
              "typeArguments": null,
              "start": 925,
              "end": 933
            },
            "start": 923,
            "end": 933
          },
          "start": 922,
          "end": 933
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 908,
      "end": 935
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 945,
        "end": 949
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 961
              },
              "typeArguments": null,
              "start": 953,
              "end": 961
            },
            "start": 951,
            "end": 961
          },
          "start": 950,
          "end": 961
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 936,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 986
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 990,
              "end": 993
            },
            "start": 988,
            "end": 993
          },
          "start": 987,
          "end": 993
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 995,
        "end": 998
      },
      "expression": false,
      "start": 973,
      "end": 998
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1009,
        "end": 1013
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1018
              },
              "typeArguments": null,
              "start": 1017,
              "end": 1018
            },
            "start": 1015,
            "end": 1018
          },
          "start": 1014,
          "end": 1018
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1000,
      "end": 1020
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1030,
        "end": 1034
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1039
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1040,
                    "end": 1046
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1048,
                    "end": 1054
                  }
                ],
                "start": 1039,
                "end": 1055
              },
              "start": 1038,
              "end": 1055
            },
            "start": 1036,
            "end": 1055
          },
          "start": 1035,
          "end": 1055
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1021,
      "end": 1057
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1077
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1081,
              "end": 1084
            },
            "start": 1079,
            "end": 1084
          },
          "start": 1078,
          "end": 1084
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1086,
        "end": 1089
      },
      "expression": false,
      "start": 1064,
      "end": 1089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1109,
              "end": 1110
            },
            "start": 1107,
            "end": 1110
          },
          "start": 1106,
          "end": 1110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1091,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1127
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1131,
                "end": 1132
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1133,
                    "end": 1139
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1141,
                    "end": 1147
                  }
                ],
                "start": 1132,
                "end": 1148
              },
              "start": 1131,
              "end": 1148
            },
            "start": 1129,
            "end": 1148
          },
          "start": 1128,
          "end": 1148
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1113,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1171
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1175,
              "end": 1178
            },
            "start": 1173,
            "end": 1178
          },
          "start": 1172,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1180,
        "end": 1183
      },
      "expression": false,
      "start": 1157,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1194,
        "end": 1198
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1202,
                "end": 1203
              },
              "typeArguments": null,
              "start": 1202,
              "end": 1203
            },
            "start": 1200,
            "end": 1203
          },
          "start": 1199,
          "end": 1203
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1185,
      "end": 1205
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1215,
        "end": 1219
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1224
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1225,
                    "end": 1231
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1233,
                    "end": 1239
                  }
                ],
                "start": 1224,
                "end": 1240
              },
              "start": 1223,
              "end": 1240
            },
            "start": 1221,
            "end": 1240
          },
          "start": 1220,
          "end": 1240
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1206,
      "end": 1242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1258,
        "end": 1262
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1266,
              "end": 1269
            },
            "start": 1264,
            "end": 1269
          },
          "start": 1263,
          "end": 1269
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1271,
        "end": 1274
      },
      "expression": false,
      "start": 1249,
      "end": 1274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1285,
        "end": 1289
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1294
              },
              "typeArguments": null,
              "start": 1293,
              "end": 1294
            },
            "start": 1291,
            "end": 1294
          },
          "start": 1290,
          "end": 1294
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1276,
      "end": 1296
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              },
              "typeArguments": null,
              "start": 1314,
              "end": 1322
            },
            "start": 1312,
            "end": 1322
          },
          "start": 1311,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1297,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1352,
        "end": 1356
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1360,
              "end": 1363
            },
            "start": 1358,
            "end": 1363
          },
          "start": 1357,
          "end": 1363
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1365,
        "end": 1368
      },
      "expression": false,
      "start": 1343,
      "end": 1368
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1383
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1388
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1389,
                    "end": 1395
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1397,
                    "end": 1403
                  }
                ],
                "start": 1388,
                "end": 1404
              },
              "start": 1387,
              "end": 1404
            },
            "start": 1385,
            "end": 1404
          },
          "start": 1384,
          "end": 1404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1370,
      "end": 1406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1420
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1426,
                    "end": 1432
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1434,
                    "end": 1440
                  }
                ],
                "start": 1425,
                "end": 1441
              },
              "start": 1424,
              "end": 1441
            },
            "start": 1422,
            "end": 1441
          },
          "start": 1421,
          "end": 1441
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1407,
      "end": 1443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1462,
        "end": 1466
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1470,
              "end": 1473
            },
            "start": 1468,
            "end": 1473
          },
          "start": 1467,
          "end": 1473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1475,
        "end": 1478
      },
      "expression": false,
      "start": 1453,
      "end": 1478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1493
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1497,
                "end": 1498
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1499,
                    "end": 1505
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1507,
                    "end": 1513
                  }
                ],
                "start": 1498,
                "end": 1514
              },
              "start": 1497,
              "end": 1514
            },
            "start": 1495,
            "end": 1514
          },
          "start": 1494,
          "end": 1514
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1480,
      "end": 1516
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1530
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1535
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1536,
                    "end": 1542
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1544,
                    "end": 1550
                  }
                ],
                "start": 1535,
                "end": 1551
              },
              "start": 1534,
              "end": 1551
            },
            "start": 1532,
            "end": 1551
          },
          "start": 1531,
          "end": 1551
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1517,
      "end": 1553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1572,
        "end": 1576
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1580,
              "end": 1583
            },
            "start": 1578,
            "end": 1583
          },
          "start": 1577,
          "end": 1583
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1585,
        "end": 1588
      },
      "expression": false,
      "start": 1563,
      "end": 1588
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1604
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1608,
                "end": 1609
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1610,
                    "end": 1616
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1618,
                    "end": 1624
                  }
                ],
                "start": 1609,
                "end": 1625
              },
              "start": 1608,
              "end": 1625
            },
            "start": 1606,
            "end": 1625
          },
          "start": 1605,
          "end": 1625
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1590,
      "end": 1627
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1637,
        "end": 1642
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1653,
                "end": 1654
              },
              "typeArguments": null,
              "start": 1646,
              "end": 1654
            },
            "start": 1644,
            "end": 1654
          },
          "start": 1643,
          "end": 1654
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1628,
      "end": 1656
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1672,
        "end": 1677
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1681,
              "end": 1684
            },
            "start": 1679,
            "end": 1684
          },
          "start": 1678,
          "end": 1684
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1686,
        "end": 1689
      },
      "expression": false,
      "start": 1663,
      "end": 1689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1700,
        "end": 1705
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1709,
                "end": 1710
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1711,
                    "end": 1717
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1719,
                    "end": 1725
                  }
                ],
                "start": 1710,
                "end": 1726
              },
              "start": 1709,
              "end": 1726
            },
            "start": 1707,
            "end": 1726
          },
          "start": 1706,
          "end": 1726
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1691,
      "end": 1728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1743
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1754,
                "end": 1755
              },
              "typeArguments": null,
              "start": 1747,
              "end": 1755
            },
            "start": 1745,
            "end": 1755
          },
          "start": 1744,
          "end": 1755
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1773,
        "end": 1778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1782,
              "end": 1785
            },
            "start": 1780,
            "end": 1785
          },
          "start": 1779,
          "end": 1785
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1787,
        "end": 1790
      },
      "expression": false,
      "start": 1764,
      "end": 1790
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1806
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1810,
                "end": 1811
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1812,
                    "end": 1818
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1820,
                    "end": 1826
                  }
                ],
                "start": 1811,
                "end": 1827
              },
              "start": 1810,
              "end": 1827
            },
            "start": 1808,
            "end": 1827
          },
          "start": 1807,
          "end": 1827
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1792,
      "end": 1829
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1844
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1848,
                "end": 1849
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1850,
                    "end": 1856
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1858,
                    "end": 1864
                  }
                ],
                "start": 1849,
                "end": 1865
              },
              "start": 1848,
              "end": 1865
            },
            "start": 1846,
            "end": 1865
          },
          "start": 1845,
          "end": 1865
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1830,
      "end": 1867
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1886,
        "end": 1891
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1895,
              "end": 1898
            },
            "start": 1893,
            "end": 1898
          },
          "start": 1892,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1900,
        "end": 1903
      },
      "expression": false,
      "start": 1877,
      "end": 1903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1920
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1926
              },
              "typeArguments": null,
              "start": 1924,
              "end": 1926
            },
            "start": 1922,
            "end": 1926
          },
          "start": 1921,
          "end": 1926
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1905,
      "end": 1928
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1938,
        "end": 1944
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1948,
                "end": 1949
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1950,
                    "end": 1956
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1958,
                    "end": 1964
                  }
                ],
                "start": 1949,
                "end": 1965
              },
              "start": 1948,
              "end": 1965
            },
            "start": 1946,
            "end": 1965
          },
          "start": 1945,
          "end": 1965
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1929,
      "end": 1967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1983,
        "end": 1989
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1993,
              "end": 1996
            },
            "start": 1991,
            "end": 1996
          },
          "start": 1990,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1998,
        "end": 2001
      },
      "expression": false,
      "start": 1974,
      "end": 2001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2017
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2021,
                "end": 2022
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2023,
                    "end": 2029
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2031,
                    "end": 2037
                  }
                ],
                "start": 2022,
                "end": 2038
              },
              "start": 2021,
              "end": 2038
            },
            "start": 2019,
            "end": 2038
          },
          "start": 2018,
          "end": 2038
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2003,
      "end": 2040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2050,
        "end": 2055
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2066,
                "end": 2067
              },
              "typeArguments": null,
              "start": 2059,
              "end": 2067
            },
            "start": 2057,
            "end": 2067
          },
          "start": 2056,
          "end": 2067
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2041,
      "end": 2069
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2085,
        "end": 2090
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2094,
              "end": 2097
            },
            "start": 2092,
            "end": 2097
          },
          "start": 2091,
          "end": 2097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2099,
        "end": 2102
      },
      "expression": false,
      "start": 2076,
      "end": 2102
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2122,
                "end": 2123
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2124,
                    "end": 2130
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2132,
                    "end": 2138
                  }
                ],
                "start": 2123,
                "end": 2139
              },
              "start": 2122,
              "end": 2139
            },
            "start": 2120,
            "end": 2139
          },
          "start": 2119,
          "end": 2139
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2104,
      "end": 2141
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2151,
        "end": 2156
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2167,
                "end": 2168
              },
              "typeArguments": null,
              "start": 2160,
              "end": 2168
            },
            "start": 2158,
            "end": 2168
          },
          "start": 2157,
          "end": 2168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2142,
      "end": 2170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2186,
        "end": 2191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2195,
              "end": 2198
            },
            "start": 2193,
            "end": 2198
          },
          "start": 2192,
          "end": 2198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2200,
        "end": 2203
      },
      "expression": false,
      "start": 2177,
      "end": 2203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2214,
        "end": 2219
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2223,
                "end": 2225
              },
              "typeArguments": null,
              "start": 2223,
              "end": 2225
            },
            "start": 2221,
            "end": 2225
          },
          "start": 2220,
          "end": 2225
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2205,
      "end": 2227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2237,
        "end": 2242
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2246,
                "end": 2247
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2248,
                    "end": 2254
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2256,
                    "end": 2262
                  }
                ],
                "start": 2247,
                "end": 2263
              },
              "start": 2246,
              "end": 2263
            },
            "start": 2244,
            "end": 2263
          },
          "start": 2243,
          "end": 2263
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2228,
      "end": 2265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2290,
              "end": 2293
            },
            "start": 2288,
            "end": 2293
          },
          "start": 2287,
          "end": 2293
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2295,
        "end": 2298
      },
      "expression": false,
      "start": 2272,
      "end": 2298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2298
}
```
