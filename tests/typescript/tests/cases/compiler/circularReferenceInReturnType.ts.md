__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 82,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 83
          }
        ],
        "start": 81,
        "end": 84
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 96
                },
                "start": 92,
                "end": 96
              },
              "start": 89,
              "end": 96
            },
            "start": 87,
            "end": 96
          },
          "start": 85,
          "end": 96
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 99,
          "end": 105
        },
        "start": 97,
        "end": 105
      },
      "body": null,
      "expression": false,
      "start": 61,
      "end": 106
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
            "name": "res1",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 117
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 134
                },
                "id": null,
                "generator": false,
                "start": 124,
                "end": 134
              }
            ],
            "optional": false,
            "start": 120,
            "end": 135
          },
          "definite": false,
          "start": 113,
          "end": 135
        }
      ],
      "declare": false,
      "start": 107,
      "end": 136
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 159,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 159,
            "end": 160
          }
        ],
        "start": 158,
        "end": 161
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 176,
                      "end": 179
                    },
                    "start": 173,
                    "end": 179
                  },
                  "start": 170,
                  "end": 179
                },
                "start": 168,
                "end": 179
              },
              "start": 166,
              "end": 179
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 189
                    },
                    "start": 186,
                    "end": 189
                  },
                  "start": 185,
                  "end": 189
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 194,
                  "end": 198
                },
                "start": 191,
                "end": 198
              },
              "start": 184,
              "end": 198
            },
            "start": 181,
            "end": 198
          },
          "start": 165,
          "end": 198
        },
        "start": 163,
        "end": 198
      },
      "body": null,
      "expression": false,
      "start": 138,
      "end": 199
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
            "name": "res2",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 216
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 213,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 229
                },
                "id": null,
                "generator": false,
                "start": 219,
                "end": 229
              }
            ],
            "optional": false,
            "start": 213,
            "end": 230
          },
          "definite": false,
          "start": 206,
          "end": 230
        }
      ],
      "declare": false,
      "start": 200,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 253
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 254,
              "end": 255
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 255
          }
        ],
        "start": 253,
        "end": 256
      },
      "params": [],
      "returnType": {
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
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 263
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 261,
                "end": 263
              }
            ],
            "start": 260,
            "end": 264
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 277
                          },
                          "typeArguments": null,
                          "start": 275,
                          "end": 277
                        },
                        "start": 273,
                        "end": 277
                      },
                      "start": 270,
                      "end": 277
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 282,
                      "end": 285
                    },
                    "start": 279,
                    "end": 285
                  },
                  "start": 269,
                  "end": 285
                },
                "start": 267,
                "end": 285
              },
              "start": 265,
              "end": 285
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 295
                      },
                      "typeArguments": null,
                      "start": 294,
                      "end": 295
                    },
                    "start": 292,
                    "end": 295
                  },
                  "start": 291,
                  "end": 295
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 300,
                  "end": 304
                },
                "start": 297,
                "end": 304
              },
              "start": 290,
              "end": 304
            },
            "start": 287,
            "end": 304
          },
          "start": 260,
          "end": 304
        },
        "start": 258,
        "end": 304
      },
      "body": null,
      "expression": false,
      "start": 233,
      "end": 305
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
            "name": "res3",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 316
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn3",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 322
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 319,
              "end": 324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 335
                },
                "id": null,
                "generator": false,
                "start": 325,
                "end": 335
              }
            ],
            "optional": false,
            "start": 319,
            "end": 336
          },
          "definite": false,
          "start": 312,
          "end": 336
        }
      ],
      "declare": false,
      "start": 306,
      "end": 337
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 408
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 424
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 425,
                      "end": 435
                    }
                  ],
                  "start": 424,
                  "end": 436
                },
                "start": 414,
                "end": 436
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 437,
                  "end": 438
                },
                "start": 437,
                "end": 438
              },
              "start": 414,
              "end": 439
            },
            "start": 412,
            "end": 439
          },
          "start": 409,
          "end": 439
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
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "start": 447,
            "end": 458
          }
        ],
        "start": 441,
        "end": 460
      },
      "expression": false,
      "start": 396,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 474
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 480,
              "end": 486
            },
            "start": 478,
            "end": 486
          },
          "start": 475,
          "end": 486
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 504
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 508
                }
              ],
              "optional": false,
              "start": 501,
              "end": 509
            },
            "start": 494,
            "end": 510
          }
        ],
        "start": 488,
        "end": 512
      },
      "expression": false,
      "start": 462,
      "end": 512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 512
}
```
