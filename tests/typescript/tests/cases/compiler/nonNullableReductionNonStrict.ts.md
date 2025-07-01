__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform1",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 38
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
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 38,
        "end": 41
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  "start": 51,
                  "end": 59
                },
                "start": 46,
                "end": 59
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
                  "start": 64,
                  "end": 65
                },
                "typeArguments": null,
                "start": 64,
                "end": 65
              },
              "start": 61,
              "end": 65
            },
            "start": 45,
            "end": 65
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "typeArguments": null,
              "start": 85,
              "end": 86
            },
            "trueType": {
              "type": "TSUndefinedKeyword",
              "start": 89,
              "end": 98
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 101,
              "end": 106
            },
            "start": 70,
            "end": 106
          }
        ],
        "start": 44,
        "end": 107
      },
      "declare": false,
      "start": 23,
      "end": 108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform2",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 124
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
              "start": 125,
              "end": 126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 126
          }
        ],
        "start": 124,
        "end": 127
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 130,
          "end": 136
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "typeArguments": null,
          "start": 145,
          "end": 146
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 151,
                  "end": 164
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
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "start": 166,
                "end": 170
              },
              "start": 150,
              "end": 170
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 174,
              "end": 183
            }
          ],
          "start": 149,
          "end": 183
        },
        "falseType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 194,
                  "end": 200
                },
                "start": 192,
                "end": 200
              },
              "start": 187,
              "end": 200
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
                "start": 205,
                "end": 206
              },
              "typeArguments": null,
              "start": 205,
              "end": 206
            },
            "start": 202,
            "end": 206
          },
          "start": 186,
          "end": 206
        },
        "start": 130,
        "end": 206
      },
      "declare": false,
      "start": 109,
      "end": 207
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 222
      },
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
              "start": 223,
              "end": 224
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 224
          }
        ],
        "start": 222,
        "end": 225
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transform1",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 240
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
                      "start": 241,
                      "end": 242
                    },
                    "typeArguments": null,
                    "start": 241,
                    "end": 242
                  }
                ],
                "start": 240,
                "end": 243
              },
              "start": 230,
              "end": 243
            },
            "start": 228,
            "end": 243
          },
          "start": 226,
          "end": 243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transform2",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
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
              "start": 249,
              "end": 262
            },
            "start": 247,
            "end": 262
          },
          "start": 245,
          "end": 262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 272
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 275,
                    "end": 282
                  }
                ],
                "optional": true,
                "start": 270,
                "end": 283
              },
              "start": 270,
              "end": 283
            },
            "directive": null,
            "start": 270,
            "end": 284
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 291
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 294,
                    "end": 301
                  }
                ],
                "optional": true,
                "start": 289,
                "end": 302
              },
              "start": 289,
              "end": 302
            },
            "directive": null,
            "start": 289,
            "end": 303
          }
        ],
        "start": 264,
        "end": 305
      },
      "expression": false,
      "start": 209,
      "end": 305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 318
      },
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
              "start": 319,
              "end": 320
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 319,
            "end": 320
          }
        ],
        "start": 318,
        "end": 321
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "typeArguments": null,
                  "start": 325,
                  "end": 326
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSStringKeyword",
                    "start": 330,
                    "end": 336
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    },
                    "typeArguments": null,
                    "start": 345,
                    "end": 346
                  },
                  "trueType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 349,
                        "end": 353
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 356,
                        "end": 365
                      }
                    ],
                    "start": 349,
                    "end": 365
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 368,
                    "end": 373
                  },
                  "start": 330,
                  "end": 373
                }
              ],
              "start": 325,
              "end": 374
            },
            "start": 323,
            "end": 374
          },
          "start": 322,
          "end": 374
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 387
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "start": 390,
                  "end": 392
                },
                "definite": false,
                "start": 386,
                "end": 392
              }
            ],
            "declare": false,
            "start": 382,
            "end": 393
          }
        ],
        "start": 376,
        "end": 414
      },
      "expression": false,
      "start": 307,
      "end": 414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 427
      },
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
              "start": 428,
              "end": 429
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 429
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 441,
                  "end": 445
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 448,
                  "end": 457
                }
              ],
              "start": 441,
              "end": 457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 431,
            "end": 457
          }
        ],
        "start": 427,
        "end": 458
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "typeArguments": null,
                  "start": 462,
                  "end": 463
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 467
                  },
                  "typeArguments": null,
                  "start": 466,
                  "end": 467
                }
              ],
              "start": 462,
              "end": 467
            },
            "start": 460,
            "end": 467
          },
          "start": 459,
          "end": 467
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  "start": 483,
                  "end": 485
                },
                "definite": false,
                "start": 479,
                "end": 485
              }
            ],
            "declare": false,
            "start": 475,
            "end": 486
          }
        ],
        "start": 469,
        "end": 507
      },
      "expression": false,
      "start": 416,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 507
}
```
