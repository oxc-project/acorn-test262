__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comparer",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
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
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 37
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 39
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 38,
                  "end": 39
                }
              ],
              "start": 37,
              "end": 40
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
                      "start": 44,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 44,
                    "end": 45
                  },
                  "start": 42,
                  "end": 45
                },
                "start": 41,
                "end": 45
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
                      "start": 50,
                      "end": 51
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 51
                  },
                  "start": 48,
                  "end": 51
                },
                "start": 47,
                "end": 51
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "typeArguments": null,
                "start": 54,
                "end": 55
              },
              "start": 52,
              "end": 55
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 56
          }
        ],
        "start": 22,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Comparer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 75
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 76,
                      "end": 79
                    }
                  ],
                  "start": 75,
                  "end": 80
                },
                "start": 67,
                "end": 80
              },
              "start": 65,
              "end": 80
            },
            "start": 64,
            "end": 80
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 80
        }
      ],
      "declare": false,
      "start": 60,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "compareTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 97
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 104
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 119
                      },
                      "start": 111,
                      "end": 120
                    }
                  ],
                  "start": 109,
                  "end": 122
                },
                "id": null,
                "generator": false,
                "start": 99,
                "end": 122
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 88,
              "end": 122
            }
          ],
          "start": 86,
          "end": 124
        },
        "start": 82,
        "end": 124
      },
      "directive": null,
      "start": 82,
      "end": 125
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "compareTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 134,
              "end": 145
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 146,
                "end": 147
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 149,
                "end": 151
              }
            ],
            "optional": false,
            "start": 134,
            "end": 152
          },
          "definite": false,
          "start": 130,
          "end": 152
        }
      ],
      "declare": false,
      "start": 126,
      "end": 153
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
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
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          }
        ],
        "start": 174,
        "end": 177
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
                    "start": 188,
                    "end": 189
                  },
                  "typeArguments": null,
                  "start": 188,
                  "end": 189
                },
                "start": 185,
                "end": 189
              },
              "start": 182,
              "end": 189
            },
            "start": 180,
            "end": 189
          },
          "start": 178,
          "end": 189
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        },
        "start": 190,
        "end": 196
      },
      "body": null,
      "expression": false,
      "start": 155,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 200
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
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 207,
              "end": 211
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 211
          }
        ],
        "optional": false,
        "start": 198,
        "end": 212
      },
      "directive": null,
      "start": 198,
      "end": 213
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
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
              "start": 235,
              "end": 236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 236
          }
        ],
        "start": 234,
        "end": 237
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
                    "name": "PromiseLike",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 259
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
                          "start": 260,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 260,
                        "end": 261
                      }
                    ],
                    "start": 259,
                    "end": 262
                  },
                  "start": 248,
                  "end": 262
                },
                "start": 245,
                "end": 262
              },
              "start": 242,
              "end": 262
            },
            "start": 240,
            "end": 262
          },
          "start": 238,
          "end": 262
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 265,
          "end": 269
        },
        "start": 263,
        "end": 269
      },
      "body": null,
      "expression": false,
      "start": 215,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 273
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 286,
              "end": 290
            },
            "id": null,
            "generator": false,
            "start": 274,
            "end": 290
          }
        ],
        "optional": false,
        "start": 271,
        "end": 291
      },
      "directive": null,
      "start": 271,
      "end": 292
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 313
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
              "start": 314,
              "end": 315
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 314,
            "end": 315
          }
        ],
        "start": 313,
        "end": 316
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
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 336
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
                          "start": 337,
                          "end": 338
                        },
                        "typeArguments": null,
                        "start": 337,
                        "end": 338
                      }
                    ],
                    "start": 336,
                    "end": 339
                  },
                  "start": 327,
                  "end": 339
                },
                "start": 324,
                "end": 339
              },
              "start": 321,
              "end": 339
            },
            "start": 319,
            "end": 339
          },
          "start": 317,
          "end": 339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 342,
          "end": 346
        },
        "start": 340,
        "end": 346
      },
      "body": null,
      "expression": false,
      "start": 294,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 350
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 372,
                      "end": 376
                    },
                    "start": 366,
                    "end": 376
                  },
                  "directive": null,
                  "start": 366,
                  "end": 377
                }
              ],
              "start": 364,
              "end": 379
            },
            "expression": false,
            "start": 351,
            "end": 379
          }
        ],
        "optional": false,
        "start": 348,
        "end": 380
      },
      "directive": null,
      "start": 348,
      "end": 381
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 402
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
              "start": 403,
              "end": 404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 404
          }
        ],
        "start": 402,
        "end": 405
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
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 425
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 426,
                        "end": 433
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 436
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 436
                      }
                    ],
                    "start": 425,
                    "end": 437
                  },
                  "start": 416,
                  "end": 437
                },
                "start": 413,
                "end": 437
              },
              "start": 410,
              "end": 437
            },
            "start": 408,
            "end": 437
          },
          "start": 406,
          "end": 437
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 440,
          "end": 444
        },
        "start": 438,
        "end": 444
      },
      "body": null,
      "expression": false,
      "start": 383,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 448
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 471,
                    "end": 475
                  },
                  "start": 464,
                  "end": 476
                }
              ],
              "start": 462,
              "end": 478
            },
            "expression": false,
            "start": 449,
            "end": 478
          }
        ],
        "optional": false,
        "start": 446,
        "end": 479
      },
      "directive": null,
      "start": 446,
      "end": 480
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 501
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
              "start": 502,
              "end": 503
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 502,
            "end": 503
          }
        ],
        "start": 501,
        "end": 504
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
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 529
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
                          "start": 530,
                          "end": 531
                        },
                        "typeArguments": null,
                        "start": 530,
                        "end": 531
                      }
                    ],
                    "start": 529,
                    "end": 532
                  },
                  "start": 515,
                  "end": 532
                },
                "start": 512,
                "end": 532
              },
              "start": 509,
              "end": 532
            },
            "start": 507,
            "end": 532
          },
          "start": 505,
          "end": 532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 535,
          "end": 539
        },
        "start": 533,
        "end": 539
      },
      "body": null,
      "expression": false,
      "start": 482,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 543
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 571,
                      "end": 575
                    },
                    "start": 565,
                    "end": 575
                  },
                  "directive": null,
                  "start": 565,
                  "end": 576
                }
              ],
              "start": 563,
              "end": 578
            },
            "expression": false,
            "start": 544,
            "end": 578
          }
        ],
        "optional": false,
        "start": 541,
        "end": 579
      },
      "directive": null,
      "start": 541,
      "end": 580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 601
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
              "start": 602,
              "end": 603
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 602,
            "end": 603
          }
        ],
        "start": 601,
        "end": 604
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
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 629
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 630,
                        "end": 637
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 639,
                          "end": 640
                        },
                        "typeArguments": null,
                        "start": 639,
                        "end": 640
                      }
                    ],
                    "start": 629,
                    "end": 641
                  },
                  "start": 615,
                  "end": 641
                },
                "start": 612,
                "end": 641
              },
              "start": 609,
              "end": 641
            },
            "start": 607,
            "end": 641
          },
          "start": 605,
          "end": 641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 644,
          "end": 648
        },
        "start": 642,
        "end": 648
      },
      "body": null,
      "expression": false,
      "start": 582,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 650,
          "end": 652
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 681,
                    "end": 685
                  },
                  "start": 674,
                  "end": 686
                }
              ],
              "start": 672,
              "end": 688
            },
            "expression": false,
            "start": 653,
            "end": 688
          }
        ],
        "optional": false,
        "start": 650,
        "end": 689
      },
      "directive": null,
      "start": 650,
      "end": 690
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 763
              },
              "optional": false,
              "computed": false,
              "start": 748,
              "end": 763
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 748,
            "end": 765
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "catch",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 771
          },
          "optional": false,
          "computed": false,
          "start": 748,
          "end": 771
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 777,
              "end": 781
            },
            "id": null,
            "generator": false,
            "start": 772,
            "end": 781
          }
        ],
        "optional": false,
        "start": 748,
        "end": 782
      },
      "directive": null,
      "start": 748,
      "end": 783
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 791
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 799
              },
              "optional": false,
              "computed": false,
              "start": 784,
              "end": 799
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 784,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 806
          },
          "optional": false,
          "computed": false,
          "start": 784,
          "end": 806
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 807,
                "end": 808
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 812,
              "end": 816
            },
            "id": null,
            "generator": false,
            "start": 807,
            "end": 816
          }
        ],
        "optional": false,
        "start": 784,
        "end": 817
      },
      "directive": null,
      "start": 784,
      "end": 818
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 818
}
```
